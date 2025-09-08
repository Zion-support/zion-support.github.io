
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { createSlice, PayloadAction } from '@reduxjs/toolkit;';
import { CartItem } from '@/types/listings';
;
interface CartState {;
  items: CartItem[], ;
<<<<<<< HEAD


=======
  total: number,;
  itemCount: number;
}
;
const initialState: CartState = {;
  items: [], ;
  total: 0,;
  itemCount: 0;
};
;
const cartSlice = createSlice({';
  name: cart',;
  initialState,;
  reducers: {;
    addItem: (state,  action: PayloadAction<CartItem>) => {;
      const existingItem = state.items.find(item => item.id === action.payload.id),;
  if (existingItem) {;
        existingItem.quantity += action.payload.quantity;
} else {;
  state.items.push(action.payload);
}
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },;
    removeItem: (state, action: PayloadAction<string>) => {;
  state.items = state.items.filter(item => item.id !== action.payload),;
  state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0),;
  state.total = state.items.reduce((total,  item) => total + (item.price * item.quantity), 0);
},;
    updateQuantity: (state, action: PayloadAction<{ id: string,;
  quantity: number }>) => {;
  const item = state.items.find(item => item.id === action.payload.id),;
  if (item) {;
        item.quantity = action.payload.quantity,;
  state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0),;
  state.total = state.items.reduce((total,  item) => total + (item.price * item.quantity), 0);
}
    },;
    clearCart: (state) => {;
  state.items = [], ;
  state.total = 0,;
  state.itemCount = 0;
}
  }
});
;
export const { addItem, removeItem,  updateQuantity, clearCart  } = cartSlice.actions;
export default cartSlice.reducer;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions,
export default cartSlice.reducer,',',',
import { createSlice,PayloadAction } from '@reduxjs/toolkit', import { CartItem } from '@/types/listings', interface CartState { items: CartItem[], total: number, itemCount: number} const initialState: CartState = { items: [],total: 0,itemCount: 0}; const cartSlice: createSlice({,',', name: unknown'cart',initialState,reducers: {, addItem: (state,action: PayloadAction<CartItem>) => {, const existingItem = state.items.find(item => item.id === action.payload.id), if (existingItem) { existingItem.quantity += action.payload.quantity} else { state.items.push(action.payload)} state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)},removeItem: unknown(state,action: PayloadAction<string>) => { state.items = state.items.filter(item => item.id !== action.payload), state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)},updateQuantity: unknown(state,action: PayloadAction<{ id: string, quantity: number }>) => { const item = state.items.find(item => item.id === action.payload.id), if (item) { item.quantity = action.payload.quantity, state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)} },clearCart: unknown(state) => { state.items = [], state.total = 0, state.itemCount = 0}}}), export const { addItem,removeItem,updateQuantity,clearCart } = cartSlice.actions, export default cartSlice.reducer,', ,',',
,
<<<<<<< HEAD



=======
  items: CartItem[];, ;
  total: number;,;
  itemCount: number;
}
const initialState: CartState = {;,
  items: [];, ;
  total: 0;,;
  itemCount: 0;
};
const cartSlice = createSlice({';
  name: cart';,;
  initialState,;
  reducers: {;,)
  addItem: (state;,  action: PayloadAction<CartItem>) => {;

    removeItem: (state;, action: PayloadAction<string>) => {;
</string>
    updateQuantity: (state;, action: PayloadAction<{ id: string;,;)
  quantity: number ;}>) => {;
  const item = state.items.find(item => item.id === action.payload.id),;
  if (item) {;
        item.quantity = action.payload.quantity,;
  state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0),;
  state.total = state.items.reduce((total,  item) => total + (item.price * item.quantity), 0);
    },;
    clearCart: (state) => {;
  state.items = [], ;
  state.total = 0,;
  state.itemCount = 0;
});
export const { addItem, removeItem,  updateQuantity, clearCart  } = cartSlice.actions;
export default cartSlice.reducer;
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions,
export default cartSlice.reducer,',',',
import { createSlice,PayloadAction } from '@reduxjs/toolkit', import { CartItem } from '@/types/listings', interface CartState { items: CartItem[];, total: number;, itemCount: number;} const initialState: CartState = { items: [];,total: 0;,itemCount: 0;}; const cartSlice: createSlice({;,',', name: unknown'cart';,initialState,reducers: {;, addItem: (state;,action: PayloadAction<CartItem>) => {;, const existingItem = state.items.find(item => item.id === action.payload.id), if (existingItem) { existingItem.quantity += action.payload.quantity} else { state.items.push(action.payload)} state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)},removeItem: unknown(state;,action: PayloadAction<string>) => { state.items = state.items.filter(item => item.id !== action.payload);, state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)},updateQuantity: unknown(state;,action: PayloadAction<{ id: string;, quantity: number ;}>) => { const item = state.items.find(item => item.id === action.payload.id), if (item) { item.quantity = action.payload.quantity, state.itemCount = state.items.reduce((total,item) => total + item.quantity,0), state.total = state.items.reduce((total,item) => total + (item.price * item.quantity),0)} },clearCart: unknown(state) => { state.items = [];, state.total = 0, state.itemCount = 0}}}), export const { addItem,removeItem,updateQuantity,clearCart } = cartSlice.actions, export default cartSlice.reducer,', ,',';
export default cartSlice.reducer;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
