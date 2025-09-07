import React, { Suspense, lazy } from 'react';'''
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';'''
import Button from './components/Button';'''
import Card from './components/Card';'''
import ServiceCard from './components/ServiceCard';'''
import Header from './components/Header';'''
import Footer from './components/Footer';'''
import ErrorBoundary from './components/ErrorBoundary';'''
import ToastContainer from './components/ToastContainer';'''
import { ThemeProvider } from './components/ThemeProvider';'''
import ScrollToTop from './components/ScrollToTop';'''
import BackToTop from './components/BackToTop';'''
import SEO from './components/SEO';'''
import Analytics from './components/Analytics';'''
import PerformanceMonitor from './components/PerformanceMonitor';'''
import About from './pages/About';'''
import Services from './pages/Services';'''
import Contact from './pages/Contact';'''
import Home from './pages/Home';'''
import Pricing from './pages/Pricing';''
import React, { Suspense, lazy } from 'react';'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';'
import { Header } from './components/Header';'
import { Footer } from './components/Footer';'
import ErrorBoundary from './components/ErrorBoundary';'
import PerformanceMonitor from './components/PerformanceMonitor';'
import { ThemeProvider } from './context/ThemeContext';
// Lazy load pages for better performance'
const About = lazy(() => import('./pages/About'));'
const Services = lazy(() => import('./pages/Services'));'
const Pricing = lazy(() => import('./pages/Pricing'));'
const Contact = lazy(() => import('./pages/Contact'));
const Home = () => (
  <div className="min-h-screen bg-background">"
    <main className="container mx-auto px-4 py-8">"
      <div className="text-center">"
        <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
          Welcome to Zion Tech Group
        </h1>"
        <p className="text-lg text-foreground/80 mb-8 animate-slide-up">
          Advanced Technology Solutions for the Future
        </p>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">"
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in">"
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>"
            <p className="text-foreground/70">
              Cutting-edge artificial intelligence solutions for modern businesses.
            </p>
          </div>'"
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>"
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>"
            <p className="text-foreground/70">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>'"
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>"
            <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>"
            <p className="text-foreground/70">
              Complete digital transformation strategies and implementation.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
);
const LoadingSpinner = () => ("
  <div className="min-h-screen bg-background flex items-center justify-center">"
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';'
import Button from './components/Button';'
import Card from './components/Card';'
import ServiceCard from './components/ServiceCard';'
import Header from './components/Header';'
import Footer from './components/Footer';'
import ErrorBoundary from './components/ErrorBoundary';'
import ToastContainer from './components/ToastContainer';'
import { ThemeProvider } from './components/ThemeProvider';'
import ScrollToTop from './components/ScrollToTop';'
import BackToTop from './components/BackToTop';'
import SEO from './components/SEO';'
import Analytics from './components/Analytics';'
import PerformanceMonitor from './components/PerformanceMonitor';'
import About from './pages/About';'
import Services from './pages/Services';'
import Contact from './pages/Contact';'
import Home from './pages/Home';'
import Pricing from './pages/Pricing';
function App() {
  return (
    <ThemeProvider>
</ThemeProvider>
      <ErrorBoundary>
</ErrorBoundary>
        <Router>
</Router>"
          <div className="min-h-screen bg-background">
            <Header />"
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>"
                  <Route path="/" element={<Home />} />"
                  <Route path="/about" element={<About />} />"
                  <Route path="/services" element={<Services />} />"
                  <Route path="/pricing" element={<Pricing />} />"
                  <Route path="/contact" element={<Contact />} />"
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <PerformanceMonitor />
          </div>
          <SEO />
</SEO>
          <Analytics />
</Analytics>
          <ScrollToTop />'
</ScrollToTop>'"
          <div className="min-h-screen flex flex-col">"
</div>
            <Header />"
</Header>""
            <main className="flex-1">"
</main>
              <Routes>"
</Routes>""
                <Route path="/" element={<Home />} />""
</Route>""
                <Route path="/about" element={<About />} />""
</Route>""
                <Route path="/services" element={<Services />} />""
</Route>""
                <Route path="/contact" element={<Contact />} />""
</Route>""
                <Route path="/pricing" element={<Pricing />} />"
</Route>
              </Routes>
            </main>
            <Footer />
</Footer>
            <ToastContainer />
</ToastContainer>
            <BackToTop />
</BackToTop>
          </div>
          <PerformanceMonitor />
</PerformanceMonitor>
        </Router>
      </ErrorBoundary>"
    </ThemeProvider>)"'"