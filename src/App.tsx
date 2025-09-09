import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Profile = lazy(() => import('./pages/Profile'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <SEO 
            title="Zion Tech Group - Leading AI & IT Solutions Provider"
            description="Transform your business with cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. Trusted by 500+ businesses worldwide."
          />
          <Header />
          
          <main className="min-h-screen">
            <ErrorBoundary
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">
                      Something went wrong
                    </h1>
                    <p className="text-gray-300">
                      Please refresh the page to try again.
                    </p>
                  </div>
                </div>
              }
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;