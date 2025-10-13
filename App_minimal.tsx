import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Footer from './app/components/Footer';

=======
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-a5ea
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
<<<<<<< HEAD
=======
        <div>
          <HomePage />
          <Footer />
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a5ea
      </Router>
    </HelmetProvider>
  );
};
export default App;
