import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Tech Group</h1>
        <p>Leading technology solutions provider</p>
        <nav style={{ marginTop: 12 }}>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to Zion Tech Group</h2>
                <p>
                  Specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
                </p>
              </div>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;