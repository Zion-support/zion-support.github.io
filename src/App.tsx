<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
=======
<<<<<<< HEAD
import React from 'react'
import ServiceCard from './components/ServiceCard'
import FeaturedContent from './components/FeaturedContent'
import TestimonialCarousel from './components/TestimonialCarousel'
import FaqSection from './components/FaqSection'
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/AboutPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <Header />
        <Sidebar />
        
        {/* Main Content with proper spacing for header and sidebar */}
        <main className="ml-64 pt-20 min-h-screen">
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg">Loading...</p>
=======
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Zion Tech Group</h1>
          <p className="mt-2 text-gray-600 text-lg">AI & Technology Solutions</p>
        </div>
      </header>

      <main>
        {/* Featured Content */}
        <FeaturedContent />
        {/* Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Do</h2>
              <p className="mt-3 text-gray-600">Practical innovation that moves your business forward.</p>
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
        {/* Testimonials */}
        <TestimonialCarousel />

        {/* FAQ */}
        <FaqSection />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
      </footer>
    </div>
  )
}

export default App
=======
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

// Lazy load only the working pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as components are fixed */}
          </Routes>
        </Suspense>
        
        <FloatingCTA />
        <Footer />
        
        <Toaster />
        <SonnerToaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
>>>>>>> origin/ziontechgroup-improvements
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
