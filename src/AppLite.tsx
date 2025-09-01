import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/SiteFooter.jsx';

const Home = React.lazy(() => import('./pages/_lite/Home'));
const About = React.lazy(() => import('./pages/_lite/About'));
const Contact = React.lazy(() => import('./pages/_lite/Contact'));
const Services = React.lazy(() => import('./pages/_lite/Services'));
const Pricing = React.lazy(() => import('./pages/_lite/Pricing'));
const Partners = React.lazy(() => import('./pages/_lite/Partners'));
const Careers = React.lazy(() => import('./pages/_lite/Careers'));
const FAQ = React.lazy(() => import('./pages/_lite/FAQ'));
const Blog = React.lazy(() => import('./pages/_lite/Blog'));

function AppLite() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <AppHeader />
        <main className="pt-20 min-h-[60vh]">
          <Suspense fallback={<div className="p-8">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppLite;

