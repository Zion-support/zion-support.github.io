import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
=======
>>>>>>> origin/main

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
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
<<<<<<< HEAD
  );
};

export default App;
=======
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
>>>>>>> origin/main
