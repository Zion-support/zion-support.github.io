
export interface WishlistItem {_id: string;
  type: string;
  data?: unknown;}

export interface WishlistState {_items: WishlistItem[];}

const initialState: WishlistState = {_items: []};

export const _getApiUrl = () => {_const _env = (import.meta as any)?.env ?? process.env;
  return env.VITE_API_URL || env.API_URL || '';};

export const _loadWishlistFromDB = createAsyncThunk<WishlistItem[], string>(_'wishlist/loadFromDB', _async (userId: string) => {_const _res = await fetch(`${getApiUrl()}/wishlist?userId=${_userId}`);
    if (!res.ok) throw new Error('Failed to load');
    return (await res.json()) as WishlistItem[];
  }
);

const _wishlistSlice = createSlice({_name: 'wishlist', _initialState, _reducers: {
    addToWishlist(state, _action: PayloadAction<WishlistItem>) {
      const _exists = state.items.some(_(item) => item.id === action.payload.id && item.type === action.payload.type
      );
      if (!exists) state.items.push(action.payload);},
    removeFromWishlist(state, action: PayloadAction<{_id: string}>) {_state.items = state.items.filter(_(item) => item.id !== action.payload.id);}},
  extraReducers: (_builder) => {_builder.addCase(_loadWishlistFromDB.fulfilled, _(state, _action) => {
      state.items = action.payload;});
  }});

export const {_addToWishlist, _removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
