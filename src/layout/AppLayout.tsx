import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Route-based code splitting: lazily load page components
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Services = React.lazy(() => import('../pages/Services'));
const Products = React.lazy(() => import('../pages/Products'));
const Blog = React.lazy(() => import('../pages/Blog'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Talent = React.lazy(() => import('../pages/Talent'));
const Autonomy = React.lazy(() => import('../pages/Autonomy'));
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  children?: React.ReactNode;
  config?: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, config }) => {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/autonomy" element={<Autonomy />} />
          </Routes>
        </React.Suspense>
        {children}
      </main>
      <Footer />
    </div>
  );
};
