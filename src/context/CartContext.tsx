import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number}

interface CartState {
  items: CartItem[],
  total: number}

interface CartContextType {
  state: CartState,
  addItem: (item: CartItem) => void,
  removeItem: (id: string) => void,
  clearCart: () => void}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      },
    case 'REMOVE_ITEM':
      return {
        ...state;
        items: state.items.filter(item => item.id !== action.payload),
        total: state.items.reduce((sum, item) => sum + item.price, 0)
      };
    case 'CLEAR_CART':
      return { items: [], total: 0 },
    default: return state}
};
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 }),
  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }),
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
  const clearCart = () => dispatch({ type: 'CLEAR_CART' }),
  return (
    <CartContext.Provider value={{ state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
