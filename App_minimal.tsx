import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6c11
      </Router>
    </HelmetProvider>
  );
};
export default App;
