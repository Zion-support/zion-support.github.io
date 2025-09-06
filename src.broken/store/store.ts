<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
=======
 export type RootState = ReturnType<typeof store.getState>;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export type AppDispatch = typeof store.dispatch;
