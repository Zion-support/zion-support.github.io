<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

// Import only basic components that are known to work
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
>>>>>>> dfce83fecd5efb7c91a4f4abe3933d9108eb5d24

const App: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
=======
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <Header />
        
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Revolutionary technology solutions for the future
            </p>
          </div>
        </main>
>>>>>>> dfce83fecd5efb7c91a4f4abe3933d9108eb5d24
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;