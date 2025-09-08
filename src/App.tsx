import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import PerformanceWrapper from './components/PerformanceWrapper';
import { SEO } from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PerformanceWrapper>
          <SEO 
            title="Zion Tech Group - AI & IT Solutions"
            description="Leading provider of AI-powered solutions, quantum computing, and micro SAAS services for modern businesses."
            keywords="AI solutions, quantum computing, micro SAAS, IT services, technology consulting"
          />
          <Router>
            <div className="App">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </PerformanceWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;