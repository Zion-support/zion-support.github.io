import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface WishlistItem {
  id: string;
  type: string;
  data?: any;
}

export interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
