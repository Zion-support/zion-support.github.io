import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const App: React.FC = () => {
  return (
  <HelmetProvider></HelmetProvider>
      <Router></Router>
        <Routes></Routes>
}
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </Router>
)
    </HelmetProvider>)
  );
}
export default Ap;p;