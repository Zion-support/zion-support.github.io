import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';
import './index.css';
import ServicesPage from './pages/ServicesPage';
import ServicesIndex from './pages/services/index';
import MicroSaaSServices from './pages/services/micro-saas';
import AIServicesIndex from './pages/ai-services/index';
import ITServicesIndex from './pages/it-services/index';

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
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/micro-saas" element={<MicroSaaSServices />} />
            <Route path="/ai-services" element={<AIServicesIndex />} />
            <Route path="/it-services" element={<ITServicesIndex />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;