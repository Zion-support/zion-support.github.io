:src/store/cartSlice.tsx;

interface CartState {};
  itemCount: number}
}
;
};
;
const initialState: CartState = {;
  items: unknown[],;
  total: 0,;
  itemCount: 0,;
  ;
  ;
  ;
  ;
  ;
  ;
;
;
;
;
;
;
};
;
const cartSlice:  createSlice({;
  name: unknown'cart',;
  initialState,;
  reducers: {;
    addItem: (state, action: PayloadAction<CartItem>)  => {;
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {;
        existingItem.quantity += action.payload.quantity;
      } else {;
        state.items.push(action.payload);
      };
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },;
    clearCart: unknown(state)  => {};
      state.itemCount = 0}}});
      state.itemCount = 0}}});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export { cartSlice }
export default cartSlice.reducer;
