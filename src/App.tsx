import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import NotificationProvider from './components/NotificationProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <EnhancedErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <NotificationProvider />
        </div>
      </Router>
    </EnhancedErrorBoundary>
  );
}

export default App;