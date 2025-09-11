import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Simple App component for basic functionality
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Tech Group</h1>
        <p>AI & Technology Solutions</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h2>Welcome to Zion Tech Group</h2>
      <p>Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App;