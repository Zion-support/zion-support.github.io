import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  id: string,
  email: string,
  name: string}

interface AuthState {
  user: User | null,
  isAuthenticated: boolean,
  isLoading: boolean}

interface AuthContextType {
  state: AuthState,
  login: (email: string, password: string) => Promise<void>,
  logout: () => void}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      },
    case 'LOGOUT':
      return {
        ...state;
        user: null,
        isAuthenticated: false,
        isLoading: false
      },
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload },
    default: return state}
};
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: false
  }),
  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true }),
    // Add login logic here
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id: '1', email, name: 'User' } })};

  const logout = () => {
    dispatch({ type: 'LOGOUT' })};

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
