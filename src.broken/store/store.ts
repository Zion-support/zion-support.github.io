import { configureStore  } from '@reduxjs/toolkit';';
import cartReducer from './cartSlice';';
import wishlistReducer from './wishlistSlice';';
import authReducer from './authSlice';';';
export const store = configureStore({
  // TODO: Add properties
}
  // TODO: Add properties
}
  reducer: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,;
import { configureStore } from '@reduxjs/toolkit';';
import wishlistReducer from './wishlistSlice';';';
export const store = configureStore({
  // TODO: Add properties
}
  // TODO: Add properties
}
  reducer: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    wishlist: wishlistReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
}})