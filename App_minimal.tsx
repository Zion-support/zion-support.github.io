import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Footer from './app/components/Footer';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <HomePage />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
