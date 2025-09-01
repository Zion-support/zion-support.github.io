import React, { createContext, useContext, useReducer, useEffect } from 'react';'
import { safeStorage } from '@/utils/safeStorage';'
import { useAuth } from '@/hooks/useAuth';'
import { getCartKey, mergeCartItems } from '@/utils/cartUtils';

const initialState = { items: [] };

function cartReducer(state, action) {

  switch (action.type) {
'
    case 'ADD_ITEM': {

      const existing = state.items.find(i => i.id === action.payload.id);
      let items;
      if (existing) {

        items = state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {

        items = [...state.items, action.payload];
      }
      return { items };
    }
'
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.payload) };
'
    case 'UPDATE_QUANTITY': {

      const { id, quantity } = action.payload;
      const items = state.items.map(i =>
        i.id === id ? { ...i, quantity } : i
      );
      return { items };
    }
'
    case 'CLEAR_CART':
      return { items: [] };
'
    case 'SET_ITEMS':
      return { items: action.payload };

    default:
      return state;
  }
}

const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
'
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}

export function CartProvider({ children }) {

  const { user } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const cartKey = getCartKey(user?.id);

  useEffect(() => {
    let items = [];
    const stored = safeStorage.getItem(cartKey);

    if (stored) {

      try {
        items = JSON.parse(stored);
      } catch {

        items = [];
      }
    }

    // Merge guest cart when user logs in
    if (user?.id) {

      const guestStored = safeStorage.getItem(getCartKey());
      if (guestStored) {

        try {
          const guestItems = JSON.parse(guestStored);
          items = mergeCartItems(items, guestItems);
        } catch {

          /* ignore */
        }
        safeStorage.removeItem(getCartKey());
      }
    }
'
    dispatch({ type: 'SET_ITEMS', payload: items });
  }, [cartKey]);

  // Save cart to storage whenever it changes
  useEffect(() => {
    if (state.items.length > 0) {

      safeStorage.setItem(cartKey, JSON.stringify(state.items));
    } else {

      safeStorage.removeItem(cartKey);
    }
  }, [state.items, cartKey]);

  const addItem = item => {
'
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = id => {
'
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {

    if (quantity <= 0) {

      removeItem(id);
    } else {
'
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const clearCart = () => {
'
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce()
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const value = {

    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    dispatch};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
'