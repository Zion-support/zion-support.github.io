import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Service Pages
import AISolutions from './pages/services/AI';
import CloudDevOps from './pages/services/Cloud';
import Cybersecurity from './pages/services/Cybersecurity';
import Infrastructure from './pages/services/Infrastructure';
import DigitalTransformation from './pages/services/Transformation';
import Consulting from './pages/services/Consulting';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Service Routes */}
            <Route path="/services/ai" element={<AISolutions />} />
            <Route path="/services/cloud" element={<CloudDevOps />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/transformation" element={<DigitalTransformation />} />
            <Route path="/services/consulting" element={<Consulting />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;