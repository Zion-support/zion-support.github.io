import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { safeStorage } from '../utils/safeStorage';
import { useAuth } from '../hooks/useAuth';
import { getCartKey, mergeCartItems } from '../utils/cartUtils';

const initialState = { items: [] };

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.id === action.payload.id);
            let items;
            if (existing) {
                items = state.items.map(i => i.id === action.payload.id
                    ? { ...i, quantity: i.quantity + action.payload.quantity }
                    : i);
            } else {
                items = [...state.items, action.payload];
            }
            return { items };
        }
        case 'REMOVE_ITEM':
            return { items: state.items.filter(i => i.id !== action.payload) };
        case 'CLEAR_CART':
            return { items: [] };
        case 'SET_ITEMS':
            return { items: action.payload };
        case 'UPDATE_QUANTITY': {
            const items = state.items.map(i => 
                i.id === action.payload.id 
                    ? { ...i, quantity: action.payload.quantity }
                    : i
            );
            return { items };
        }
        default:
            return state;
    }
}

const CartContext = createContext(undefined);

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

    const removeItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const updateQuantity = (itemId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    };

    const value = {
        items: state.items,
        addItem,
        removeItem,
        clearCart,
        updateQuantity,
        totalItems: state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
