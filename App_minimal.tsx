'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const App_minimalPage: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
=======
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App_minimalPage;
