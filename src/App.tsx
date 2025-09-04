import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';
import './index.css';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <header className="App-header">
            <nav style={{ marginTop: 12 }}>
              <Link to="/" style={{ marginRight: 12 }}>Home</Link>
              <Link to="/services">Services</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;