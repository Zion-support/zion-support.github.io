<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit',
import wishlistReducer from './wishlistSlice',
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer}}),
=======
import wishlistReducer from './wishlistSlice';

export const _store = configureStore({_reducer: {
    wishlist: wishlistReducer}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type RootState = ReturnType<typeof store.getState>,
export type AppDispatch = typeof store.dispatch,
