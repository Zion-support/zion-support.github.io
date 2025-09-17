// Auth provider
import React, { createContext, useContext } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const value = {
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {}
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-60a7
export const useAuth = () => useContext(AuthContext);
