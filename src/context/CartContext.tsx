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

export function useCart(): CartContextType {
  return useContext(CartContext);
}

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
}
