import React from 'react;'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom;'
import { HelmetProvider } from 'react-helmet-async;'
import { ErrorBoundary } from 'react-error-boundary;'

// Components
import Navigation from './app/components/Navigation;'
import Footer from './app/components/Footer;'
import AnalyticsProvider from './app/components/AnalyticsProvider;'
// import LoadingStates from './app/components/LoadingStates;'

// Pages
import HomePage from './app/page;'
import AboutPage from './app/about/page;'
import ServicesPage from './app/services/page;'
import ContactPage from './app/contact/page;'

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <HelmetProvider>
        <AnalyticsProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;