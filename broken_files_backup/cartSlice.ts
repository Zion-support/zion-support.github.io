import { createSlice, PayloadAction } from '@reduxjs/toolkit';
<<<<<<< HEAD:src/store/cartSlice.ts

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

=======
import { CartItem } from '@/types/cart';
import { safeStorage } from '@/utils/safeStorage';
interface CartState {
  items: CartItem[];
}
const loadState = (): CartItem[] => {
  const stored = safeStorage.getItem('zion_cart');
  if (!stored) return [];
  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/cartSlice.ts
const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing && quantity > 0) {
        existing.quantity = quantity;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
<<<<<<< HEAD:src/store/cartSlice.ts

export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

=======
export const { addItem, removeItem, updateQuantity, setItems, clear } =
  cartSlice.actions;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/cartSlice.ts
export default cartSlice.reducer;
