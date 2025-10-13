import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
<<<<<<< HEAD
}
=======
};

>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
export default App;