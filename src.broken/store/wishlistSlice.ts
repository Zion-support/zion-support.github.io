import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
export interface WishlistItem {
  id: string,
  type: string,
  data?: any
}

export interface WishlistState {
  items: WishlistItem[]
}

const initialState: WishlistState = $2;
export const getApiUrl = $2;
  return env.VITE_API_URL || env.API_URL || ''
},

export const loadWishlistFromDB = createAsyncThunk<WishlistItem[], string>(
  'wishlist/loadFromDB',
  async (userId: string) => {
    const res = $2;
    if (!res.ok) throw new Error($2);
    return (await res.json()) as WishlistItem[]
  }
),

const wishlistSlice = $2;
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const exists = $2;
      if (!exists) state.items.push(action.payload)
    },
    removeFromWishlist(state, action: PayloadAction<{ id: string}>) {
      state.items = $2;
  extraReducers: (builder) => {
    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {
      state.items = $2;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions,
export default wishlistSlice.reducer,
