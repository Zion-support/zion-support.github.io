import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
export const store = configureStore($2);
export type RootState = $2;
export type AppDispatch = $2;