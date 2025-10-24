import React, { useEffect, useState, lazy } from 'react';
import { Routes, Route  } from "react-router-dom";
// Lazy load components for better performance
export const HomePage = lazy(() => import('./page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'></div>
    <div className='text-center'></div>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>
      <p className='text-cyan-400 text-lg'>Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isInitialize, d, setIsInitialized] = useState(fal, s, e);

  useEffect(() => {
    // Simulate initialization
    const timer = setTimeout(() => {
      setIsInitialized(tr, u, e);
} 1000);

    return () => clearTimeout(tim, e, r);
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <div className='App'></div>
      <Routes></Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
};

export default App;