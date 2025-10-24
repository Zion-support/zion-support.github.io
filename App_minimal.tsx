'use client';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';

const App_minimalPage: React.FC = () => {
  return (
    <HelmetProvider></HelmetProvider>
                <Router></Router>
        <div className="min-h-screen bg-white"></div>
          <Navigation />
          <main></main>
                <Routes></Routes>
                <Route path="/" element={<HomePage / / />} />
                </Routes>
                </main>
          <Footer />
        </div>
                </Router>
    </HelmetProvider>
  );
};

export default App_minimalPage;
