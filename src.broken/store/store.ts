<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit',;
import wishlistReducer from './wishlistSlice',;
;
export const store = configureStore({;
  reducer:{;
    wishlist:wishlistReducer}}),;
;
export type RootState = ReturnType<typeof store.getState>,;
export type AppDispatch = typeof store.dispatch,;
=======
import { configureStore } from '@reduxjs/toolkit',
import wishlistReducer from './wishlistSlice',
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer}}),
export type RootState = ReturnType<typeof store.getState>,
export type AppDispatch = typeof store.dispatch,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
