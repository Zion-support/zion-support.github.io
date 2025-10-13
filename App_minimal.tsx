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

      </Router>
    </HelmetProvider>;
  );
};

export default App;
