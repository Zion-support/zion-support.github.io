import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Footer from './app/components/Footer';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Footer />
=======
        <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-e3a0
=======
        <Footer />
      </Router>
    </HelmetProvider>
  );
};
export default App;
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
