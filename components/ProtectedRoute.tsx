import React from 'react';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4'></div>
          <p className='text-white'>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      fallback || (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Access Denied
            </h1>
            <p className='text-gray-300 mb-8'>
              You need to be logged in to access this page.
            </p>
            <button
              onClick={() => (window.location.href = '/login')}
              className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300'
            >
              Login
            </button>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
}
