import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Welcome to Zion Tech Group</div>} />
          {/* Additional routes will be added here */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;