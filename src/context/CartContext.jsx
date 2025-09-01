import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';
import { getCartKey, mergeCartItems } from '@/utils/cartUtils';

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
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
    
    case 'UPDATE_ITEM': {
      const items = state.items.map(i => 
        i.id === action.payload.id
          ? { ...i, ...action.payload.updates }
          : i
      );
      return { items };
    }
    
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.payload) };
    
    case 'CLEAR_CART':
      return { items: [] };
    
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

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItem = (id, updates) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id, updates } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemQuantity = (id) => {
    const item = state.items.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    items: state.items,
    addItem,
    updateItem,
    removeItem,
    clearCart,
    getItemQuantity,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
