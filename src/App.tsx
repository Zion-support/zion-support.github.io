import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
=======
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTopButton';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
<<<<<<< HEAD
          <SEO />
          <Analytics />
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
<<<<<<< HEAD
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
            <BackToTop />
=======
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <ToastContainer />
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;