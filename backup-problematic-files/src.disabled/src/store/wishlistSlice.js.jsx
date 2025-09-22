<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react'; const initialState = { "items": '[]'}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || "}; export const loadWishlistFromDB = createAsyncThunk("wishlist/loadFromDB",async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error("Failed to load"); return await res.json()} ); const wishlistSlice = createSlice({ "name": "wishlist",initialState,"reducers": { addToWishlist(state,action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload)},removeFromWishlist(state,action) { state.items = state.items.filter(item => item.id !== action.payload.id)}},"extraReducers": builder => { builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})}}); export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions; export { wishlistSlice }; export default wishlistSlice.reducer; "` ";"
=======
import React from \'react\'; const initialState = { \"items\": \'[]\'}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || \"}; export const loadWishlistFromDB = createAsyncThunk(\"wishlist/loadFromDB\",async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error(\"Failed to load\"); return await res.json()} ); const wishlistSlice = createSlice({ \"name\": \"wishlist\",initialState,\"reducers\": { addToWishlist(state,action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload)},removeFromWishlist(state,action) { state.items = state.items.filter(item => item.id !== action.payload.id)}},\"extraReducers\": builder => { builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})}}); export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions; export { wishlistSlice }; export default wishlistSlice.reducer; \"` \";\"
const React from "react"; const initialState = { items: "[]"}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import.meta) === null | _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL | env.API_URL | "}; export const loadWishlistFromDB = createAsyncThunk("wishlist/loadFromDB",async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error("Failed to load"); return await res.json()} ); const wishlistSlice = createSlice({ name: "wishlist",initialState,reducers: { addToWishlist(state,action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload)},removeFromWishlist(state,action) { state.items = state.items.filter(item => item.id !== action.payload.id)}},extraReducers: builder => { builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})}}); export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions; export { wishlistSlice }; export default wishlistSlice.reducer; "` ";"'"`'"`
import _React from 'react'; const initialState = { "items": '[]'}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.env) !== null && _b !== void 0 ? _b : process.env; return env.VITE_API_URL || env.API_URL || "}; export const loadWishlistFromDB = createAsyncThunk("wishlist/loadFromDB",async userId => { const res = await fetch(`${getApiUrl()}/wishlist?userId=${userId}`); if(!res.ok) throw new Error("Failed to load"); return await res.json()} ); const wishlistSlice = createSlice({ "name": "wishlist",initialState,"reducers": { addToWishlist(state,action) { const exists = state.items.some() item => item.id === action.payload.id && item.type === action.payload.type ); if(!exists) state.items.push(action.payload)},removeFromWishlist(state,action) { state.items = state.items.filter(item => item.id !== action.payload.id)}},"extraReducers": builder => { builder.addCase(loadWishlistFromDB.fulfilled,(state,action) => { state.items = action.payload})}}); export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions; export { wishlistSlice }; export default wishlistSlice.reducer; "` ";"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const WishlistSlice.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>WishlistSlice.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
