import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Styles
import '../index.css';

const App: React.FC = () => {
  useEffect(() => {
    console.log('App initialized');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zion Tech Group</h1>
                  <p className="text-xl text-gray-600">Advanced AI and IT Solutions</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
