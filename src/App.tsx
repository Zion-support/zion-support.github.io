
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home.tsx'));
const ServicesDirectory = React.lazy(() => import('./pages/ServicesDirectory.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesDirectory />} />
          <Route path="/services/added" element={<ServicesDirectory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;

