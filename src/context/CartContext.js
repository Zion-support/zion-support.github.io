import React, { createContext, useContext, useReducer, useEffect } from 'react;';
import { safeStorage } from '@/utils/safeStorage, ';
import { useAuth } from '@/hooks/useAuth, ';
import { getCartKey, mergeCartItems } from '@/utils/cartUtils, ';
const initialState = { items: [] };
    function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.id === action.payload.id);
            let items;
            if (existing) {
                items = state.items.map(i => i.id === action.payload.id;
                    ? { ...i, quantity: i.quantity + action.payload.quantity }
                    : i);
     }
            else {
  
                items = [...state.items, action.payload];
            }
            return { items };
        }
        case 'REMOVE_ITEM':
            return { items: state.items.filter(i => i.id !== action.payload) };
    case 'CLEAR_CART':
            return { items: [] };
