import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartContextType, CartItem, CartAction } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';

interface CartState { items: CartItem[]; }

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
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
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const ctx = useContext(CartContext) as CartContextType;
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  console.log('[CartProvider] Initializing...');
  const items = useSelector((state: RootState) => state.cart.items);
  const reduxDispatch = useDispatch<AppDispatch>();

  const dispatch = (action: CartAction) => {
    switch (action.type) {
      case 'ADD_ITEM':
        reduxDispatch(
          addItem({
            id: action.payload.id,
            title: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
          })
        );
        break;
      case 'REMOVE_ITEM':
        reduxDispatch(removeItem(action.payload));
        break;
      case 'CLEAR_CART':
        reduxDispatch(clear());
        break;
      case 'SET_ITEMS':
        reduxDispatch(setItems(action.payload));
        break;
      default:
        break;
    }
  );

  useEffect(() => {
    safeStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  const value: CartContextType = {
    items: state.items,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
