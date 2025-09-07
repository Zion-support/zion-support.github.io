import React, { Suspense, lazy } from 'react';''
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';''
import Button from './components/Button';''
import Card from './components/Card';''
import ServiceCard from './components/ServiceCard';''
import Header from './components/Header';''
import Footer from './components/Footer';''
import ErrorBoundary from './components/ErrorBoundary';''
import ToastContainer from './components/ToastContainer';''
import { ThemeProvider } from './components/ThemeProvider';''
import ScrollToTop from './components/ScrollToTop';''
import BackToTop from './components/BackToTop';''
import SEO from './components/SEO';''
import Analytics from './components/Analytics';''
import PerformanceMonitor from './components/PerformanceMonitor';''
import About from './pages/About';''
import Services from './pages/Services';''
import Contact from './pages/Contact';''
import Home from './pages/Home';''
import Pricing from './pages/Pricing';'
function App() {
  return (
    <ThemeProvider>
</ThemeProvider>
      <ErrorBoundary>
</ErrorBoundary>
        <Router>
</Router>
          <SEO />
</SEO>
          <Analytics />
</Analytics>
          <ScrollToTop />
</ScrollToTop>'
          <div className="min-h-screen flex flex-col">"
</div>
            <Header />
</Header>"
            <main className="flex-1">"
</main>
              <Routes>
</Routes>"
                <Route path="/" element={<Home />} />"
</Route>"
                <Route path="/about" element={<About />} />"
</Route>"
                <Route path="/services" element={<Services />} />"
</Route>"
                <Route path="/contact" element={<Contact />} />"
</Route>"
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
      </ErrorBoundary>
    </ThemeProvider>)"