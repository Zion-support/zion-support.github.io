import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartContextType, CartItem, CartAction } from "@/types/cart";
import { safeStorage } from "@/utils/safeStorage";
import { useAuth } from "@/hooks/useAuth";
import { getCartKey, mergeCartItems } from "@/utils/cartUtils";

interface CartState { 
  items: CartItem[];
}

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      let items;
      if (existing) {
        items = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        items = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return { items };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(item => item.id !== action.payload);
      return { items };
    }
    case "UPDATE_QUANTITY": {
      const items = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      return { items };
    }
    case "CLEAR_CART": {
      return { items: [] };
    }
    case "LOAD_CART": {
      return { items: action.payload };
    }
    default:
      return state;
  }
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useAuth();

  // Load cart from storage on mount and when user changes
  useEffect(() => {
    const cartKey = getCartKey(user?.id);
    const savedCart = safeStorage.getItem(cartKey);
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Failed to parse saved cart:", error);
      }
    }
  }, [user?.id]);

  // Save cart to storage whenever it changes
  useEffect(() => {
    if (state.items.length > 0) {
      const cartKey = getCartKey(user?.id);
      safeStorage.setItem(cartKey, JSON.stringify(state.items));
    }
  }, [state.items, user?.id]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value: CartContextType = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}