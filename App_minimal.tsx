import React from 'react';
<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import Navigation from './app/components/Navigation';

import Footer from './app/components/Footer';

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
import HomePage from './app/page';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
=======
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
