import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/SimpleHome'));
const AddedServicesDirectory = React.lazy(() => import('./pages/SimpleHome'));
const NotFound = React.lazy(() => import('./pages/SimpleHome'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AddedServicesDirectory />} />
          <Route path="/services/added" element={<AddedServicesDirectory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;