import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  quantity: number;
  name?: string;
  price?: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_ITEMS'; payload: CartItem[] };

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(item => item.id === action.payload.id);
      let items;
      if (existing) {
        items = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        items = [...state.items, action.payload];
      }
      return { items };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(item => item.id !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    case 'SET_ITEMS':
      return { items: action.payload };
    default:
      return state;
  }
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clear = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value: CartContextType = {
    items: state.items,
    addItem,
    removeItem,
    clear,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}