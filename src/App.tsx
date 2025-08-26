import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  // Performance optimization: Preload critical routes
  useEffect(() => {
    const preloadCriticalRoutes = () => {
      // Preload critical pages
      const criticalRoutes = [
        () => import('./pages/Services'),
        () => import('./pages/Contact')
      ];
      
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          criticalRoutes.forEach(preload => preload());
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          criticalRoutes.forEach(preload => preload());
        }, 1000);
      }
    };

    preloadCriticalRoutes();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;