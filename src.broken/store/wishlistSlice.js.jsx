import { createSlice, createAsyncThunk } from '@reduxjs/toolkit',
export default function Page() {
`),
    if(!res.ok) throw new Error('Failed to load'),
    return await res.json(),
  }
),
const wishlistSlice = createSlice({

  name: 'wishlist',
  initialState,
  reducers: {

    addToWishlist(state, action) {

      const exists = state.items.some()
        item =>
          item.id === action.payload.id && item.type === action.payload.type
      ),
      if(!exists) state.items.push(action.payload),
    },
    removeFromWishlist(state, action) {

      state.items = state.items.filter(item => item.id !== action.payload.id),
    }},
  extraReducers: builder => {

    builder.addCase(loadWishlistFromDB.fulfilled, (state, action) => {

      state.items = action.payload,
    }),
  }}),
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions,
export { wishlistSlice },
export default wishlistSlice.reducer,
'`