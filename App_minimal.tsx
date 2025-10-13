import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Footer from './app/components/Footer';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
=======
        <div>
=======
        <div className="min-h-screen bg-gray-900">
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
          <HomePage />
          <Footer />
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
      </Router>
    </HelmetProvider>
  );
};

export default App;
