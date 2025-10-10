<<<<<<< HEAD
import React from 'react;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom;

import { HelmetProvider } from 'react-helmet-async;

import Navigation from './app/components/Navigation;

import Footer from './app/components/Footer;

import HomePage from './app/page;

=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
const App: React.FC = () => {
  return (

    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white>
          <Navigation />
          <main>
            <Routes>
<<<<<<< HEAD
              <Route path="/ element={<HomePage />} />
=======
              <Route path="/" element={<HomePage />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
<<<<<<< HEAD

};

=======
};

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
export default App;
