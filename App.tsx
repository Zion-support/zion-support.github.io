import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
// Import pages
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import NotFoundPage from './app/404';
function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">"
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">"
              <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
              <main className="relative z-10 flex-1" id="main-content" role="main">"
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>"
                    <Routes>
                      <Route path="/" element={<HomePage />} />"
                      <Route path="/about" element={<AboutPage />} />"
                      <Route path="/services" element={<ServicesPage />} />"
                      <Route path="/contact" element={<ContactPage />} />"
                      <Route path="*" element={<NotFoundPage />} />"
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;