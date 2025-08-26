import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';
import { EnhancedLoading } from './components/EnhancedLoading';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = lazy(() => import('./pages/AdvancedServices2025'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Enhanced loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light flex items-center justify-center">
    <EnhancedLoading 
      size="xl" 
      variant="futuristic" 
      text="Loading Zion Tech Group"
      showProgress={true}
      progress={85}
    />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Header />
        <main className="pt-16 lg:pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
        <EnhancedScrollToTop />
      </div>
    </Router>
  );
}

export default App;