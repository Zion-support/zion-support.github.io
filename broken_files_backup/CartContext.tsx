<<<<<<< HEAD:src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
});

=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/CartContext.tsx
export function useCart(): CartContextType {
  return useContext(CartContext);
}
<<<<<<< HEAD:src/context/CartContext.tsx

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  // Rehydrate cart from localStorage on mount for guests
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        reduxDispatch(setItems(parsed));
      }
    } catch (error) {
      console.error('[CartProvider] Failed to load cart from localStorage', error);
    }
  }, [reduxDispatch]);

  // Persist updated items to localStorage so guests don't lose their cart

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/CartContext.tsx
}
