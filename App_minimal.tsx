import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <h1>Zion Tech Group</h1>
          <p>Welcome to our website</p>
        </div>
      </Router>
    </HelmetProvider>
  );
};
export default App;
