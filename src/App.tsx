import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
=======
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { Footer  } from './components/Footer';
import { ThemeProvider  } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
<<<<<<< HEAD
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
=======
import { BackToTopButton  } from './components/BackToTopButton';
// Simple Home component;
const Home = () => (<div className="hero">;
    <div className="text-center">;
      <h1 className="text-4xl font-bold text-white mb-4">;
        Zion Tech Group;
      </h1>;
      <p className="text-xl text-blue-100 mb-8">;
        AI, Micro SaaS, and IT Services;
      </p>;
      <p className="text-gray-300 mb-8">;
        Leading technology solutions in AI, cybersecurity, cloud, and digital transformation.;
      </p>;
      <div className="cta-buttons">;
        <button className="btn-primary">;
          Get Started;
        </button>;
        <button className="btn-secondary">;
          Learn More;
        </button>;
      </div>;
    </div>;
  </div>;
)function App() {return (<ThemeProvider>;
      <ErrorBoundary>;
        <Router>;
          <ScrollToTop />;
          <div className="min-h-screen flex flex-col">;
            <Header />;
            <main className="flex-1">;
              <div className="min-h-screen flex items-center justify-center">;
                <div className="text-center">;
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">;
                    Zion Tech Group;
                  </h1>;
                  <p className="text-xl text-gray-600 mb-8">;
                    AI, Micro SaaS, and IT Services;
                  </p>;
                  <p className="text-gray-500">;
                    This is a Vite-based React application. The main pages are handled by Next.js in the app directory.;
                  </p>;
                </div>;
              </div>;
            </main>;
            <Footer />;
            <BackToTopButton />;
          </div>;
        </Router>;
      </ErrorBoundary>;
    </ThemeProvider>;
  )}export default App;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
