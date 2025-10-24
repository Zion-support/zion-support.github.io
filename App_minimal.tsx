'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const App_minimalPage: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App_minimalPage;
