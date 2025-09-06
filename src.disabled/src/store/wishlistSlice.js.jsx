
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \'react\'; const initialState = { \"items\": \'[]\'
const React from "react"; const initialState = { items: "[]"}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import.meta) = = null | _a = = void 0 ? void 0 : _a.env) != null && _b != void 0 ? _b : process.env; return env.VITE_API_URL | env.API_URL | "}; export const loadWishlistFromDB = createAsyncThunk("wishlist/loadFromDB",async userId => { const res = await fetch(`${getApiUrl()}/
const React from "react"; const initialState = { items: "[]"}; export const getApiUrl = () => { var _a,_b; const env = (_b = (_a = import && import.meta) = = null | _a = = void 0 ? void 0 : _a && _a.env) != null && _b != void 0 ? _b : process ; return env && env.VITE_API_URL | env && env.API_URL | "}; export const loadWishlistFromDB = createAsyncThunk("wishlist/loadFromDB",async userId => { const res = await fetch(`${getApiUrl()}/