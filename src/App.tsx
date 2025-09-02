import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
      <div>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>Zion Tech Group</h1>
        <p>Site is loading. Base app compiled successfully.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}