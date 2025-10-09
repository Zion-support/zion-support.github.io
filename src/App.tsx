import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../app/page';
import ITServicesPage from './it-services/page';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/it-services" element={<ITServicesPage />} />
      <Route path="/sitemap.xml" element={<div>Sitemap</div>} />
      <Route path="/robots.txt" element={<div>Robots.txt</div>} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default App;