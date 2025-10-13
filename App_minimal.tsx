import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import Navigation from './app/components/Navigation';

import Footer from './app/components/Footer';

import HomePage from './app/page';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
<<<<<<< HEAD
=======
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
