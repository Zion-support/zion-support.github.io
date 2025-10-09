import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
