<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
=======
import { configureStore  } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
