'use client';

import React, { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';

// Page Loader Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Routes will be added here */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
