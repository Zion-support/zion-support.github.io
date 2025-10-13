import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-3792
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Footer from './app/components/Footer';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
=======
        <div className="min-h-screen bg-gray-900">
          <HomePage />
          <Footer />
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3792
      </Router>
    </HelmetProvider>
  );
};
export default App;
