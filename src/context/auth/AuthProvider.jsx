import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    // Check for existing authentication
    const checkAuth = async () => {
      try {
        // Add authentication logic here
        setLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      // Add login logic here
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
=======
    // Check for existing auth state
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
<<<<<<< HEAD
=======
    localStorage.removeItem('user');
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
<<<<<<< HEAD
    logout,
=======
    logout
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};