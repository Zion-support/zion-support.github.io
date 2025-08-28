import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Placeholder() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Zion Tech Group</h1>
        <p className="text-gray-600 mb-6">Visit our main site for the full experience.</p>
        <a href="https://ziontechgroup.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">Go to ziontechgroup.com</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<Placeholder />} />
    </Routes>
  );
}

export default App;