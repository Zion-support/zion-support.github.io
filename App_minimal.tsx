import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
{ HelmetProvider } from 'react-helmet-async';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </Router>
    </HelmetProvider>
  )};
ursor/fix-errors-and-merge-to-main-94a7

export default App;
