<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
'"

=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddedServicesDirectory from './pages/AddedServicesDirectory';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<AddedServicesDirectory />} />
      <Route path="/services" element={<AddedServicesDirectory />} />
      <Route path="/services/added" element={<AddedServicesDirectory />} />
      <Route path="*" element={<AddedServicesDirectory />} />
    </Routes>
  );
}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

