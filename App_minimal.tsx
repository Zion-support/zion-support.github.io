import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import react-helmet-async from 'react-helmet-async';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />"
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
export default App;