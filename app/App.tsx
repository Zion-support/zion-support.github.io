'use client';
import React, { useEffect, useState, lazy } from 'react';
import { useRouter } from 'next/navigation';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initialize app
    const initializeApp = async () => {
      try {
        // Add any initialization logic here
        setIsInitialized(true);
      } catch (error) {

        setIsInitialized(true);
      }
    };

    initializeApp();
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;