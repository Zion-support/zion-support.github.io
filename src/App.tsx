import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServicesShowcase from './pages/ServicesShowcase';
import InnovativeServices2025 from './pages/InnovativeServices2025';
import AdvancedServices2025 from './pages/AdvancedServices2025';
import UltimatePricing2025 from './pages/UltimatePricing2025';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-showcase" element={<ServicesShowcase />} />
            <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
            <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
            <Route path="/ultimate-pricing-2025" element={<UltimatePricing2025 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;