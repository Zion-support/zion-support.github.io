interface WishlistState {
  items: WishlistItem[];
:src/store/wishlistSlice.tsx;
  itemCount: number;
  itemCount: number}

}

const initialState: WishlistState = {;

  items: [],
  itemCount: 0,

};
const wishlistSlice:  createSlice({;  name: anywishlist',
const wishlistSlice:  createSlice({;
  name: anywishlist',
  initialState,
  reducers: {;
    addToWishlist: (state, action: PayloadAction<WishlistItem>)  => {;
      if(!existingItem) {;

        state.items.push(action.payload);
        state.itemCount = state.items.length}
    },
    removeFromWishlist: any(state, action: PayloadAction<string>)  => {;

      state.items = state.items.filter(item => item.listingId !== action.payload);
      state.itemCount = state.items.length},
    clearWishlist: any(state)  => {;

      state.items = [];
:src/store/wishlistSlice.tsx;
      state.itemCount = 0}}});
      state.itemCount = 0},,
},,
});
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export { wishlistSlice };
export default wishlistSlice.reducer;
import React from 'react'; export default function Wishlistslice(props: any) { return ( <div className="min-h-screen bg-white"> <div className="max-w-4xl mx-auto px-6 py-16"> <h1 className="text-4xl font-bold text-gray-900 mb-8">Wishlistslice</h1> <p className="text-lg text-gray-600 mb-8"> This is a placeholder component for wishlistslice. </p> </div> </div> )}