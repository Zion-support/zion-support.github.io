import React, { useEffect, useState } from 'react';
import { authService } from '../lib/auth';
import LoginForm from './LoginForm';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authService.checkAuth();
      setIsAuthenticated(authenticated);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (result) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      <div className="bg-gray-100 p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Welcome, {authService.getCurrentUser()?.name}!
          </span>
          <button
            onClick={handleLogout}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Logout
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProtectedRoute;