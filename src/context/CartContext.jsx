import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';
import { getCartKey, mergeCartItems } from '@/utils/cartUtils';
const initialState = { items[] };
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.id === action.payload.id);
            let items;
            if (existing) {
                items = state.items.map(i => i.id === action.payload.id
                    ? { ...i, quantity: i.quantity + action.payload.quantity }
<<<<<<< HEAD
                    : i);

            else {
                items = [...state.items, action.payload];

            return { items };

=======
                    : i)}
            else {
                items = [...state.items, action.payload]}
            return { items }}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        case 'REMOVE_ITEM':
            return { items: state.items.filter(i => i.id !== action.payload) };
        case 'CLEAR_CART':
            return { items[] };
        default:
<<<<<<< HEAD
            return state;


const CartContext = createContext(undefined);
=======
            return state}
}
const CartContext = createContext(null);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx)
        throw new Error('useCart must be used within a CartProvider');
<<<<<<< HEAD
    return ctx;

=======
    return ctx}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function CartProvider({ children }) {
    const { user } = useAuth();
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const cartKey = getCartKey(user?.id);
    useEffect(() => {
        let items = [];
        const stored = safeStorage.getItem(cartKey);
        if (stored) {
            try {
<<<<<<< HEAD
                items = JSON.parse(stored);

            catch {
                items = [];


=======
                items = JSON.parse(stored)}
            catch {
                items = []}
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        // Merge guest cart when user logs in
        if (user?.id) {
            const guestStored = safeStorage.getItem(getCartKey());
            if (guestStored) {
                try {
                    const guestItems = JSON.parse(guestStored);
<<<<<<< HEAD
                    items = mergeCartItems(items, guestItems);

                catch {
                    /* ignore */

                safeStorage.removeItem(getCartKey());


        dispatch({ type: 'SET_ITEMS', payload: items });
    }, [cartKey]);
=======
                    items = mergeCartItems(items, guestItems)}
                catch {
                    /* ignore */
                }
                safeStorage.removeItem(getCartKey())}
        }
        dispatch({ type: 'SET_ITEMS', payload: items })}, [cartKey]);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    useEffect(() => {
        safeStorage.setItem(cartKey, JSON.stringify(state.items))}, [state.items, cartKey]);
    const value = {
  items: state.items,
        dispatch,
  <<<<<<< HEAD
    

};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
=======
  

};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
<<<<<<< HEAD
}}}}}}}}}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
