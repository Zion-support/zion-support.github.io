import React from 'react';
import { Helmet } from 'react-helmet-async';

const AppPage: React.FC = () => {
  return (
    <HelmetProvider></HelmetProvider>
      <Router></Router>
        <div className="A pp">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
      </Router>
  )
}

export default App
</div>
