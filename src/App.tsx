import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
