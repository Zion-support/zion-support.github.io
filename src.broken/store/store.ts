import wishlistReducer from './wishlistSlice';

export const _store = configureStore({_reducer: {
    wishlist: wishlistReducer}});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
