import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

function HomeMinimal(): React.JSX.Element {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: 'white' }}>
      <div style={{ textAlign: 'center', maxWidth: 720, padding: 24 }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>Zion Tech Group</h1>
        <p style={{ opacity: 0.85 }}>Welcome. The site is being stabilized. Core build and routing are healthy.</p>
      </div>
    </div>
  );
}

export default function App(): React.JSX.Element {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeMinimal />} />
          <Route path="*" element={<HomeMinimal />} />
        </Routes>
      </Suspense>
    </main>
  );
}