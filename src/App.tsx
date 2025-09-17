import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedLoading } from "./components/ui/enhanced-loading";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import { ToastContainer } from "./components/ui/toaster";
import { motion } from 'framer-motion';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));

function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <MainNavigation />
            <Suspense fallback={<EnhancedLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
              </Routes>
            </Suspense>
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;