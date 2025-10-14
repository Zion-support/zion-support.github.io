import React from 'react';

const App: React.FC = () => {
<<<<<<< HEAD
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </Router>
    </HelmetProvider>
import React from 'react';'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';'
{ HelmetProvider } from 'react-helmet-async';
const App: React.FC = () => { return (
    <HelmetProvider>;
      <Router>;
        <Routes>; }
          <Route path="/" element={<div>Home Page</div>} />;
        </Routes>;
      </Router>;
    </HelmetProvider>;
  );
}
=======
  return <div>Minimal App</div>;
>>>>>>> origin/main
};

export default App;
