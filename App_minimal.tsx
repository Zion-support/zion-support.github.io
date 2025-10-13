import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
      </Router>
    </HelmetProvider>
  );
};
export default App;
