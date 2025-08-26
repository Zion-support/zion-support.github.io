import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Careers from './pages/Careers';
import AIServices from './pages/services/AI';
import CloudServices from './pages/services/Cloud';
import CybersecurityServices from './pages/services/Cybersecurity';
import InfrastructureServices from './pages/services/Infrastructure';
import DigitalTransformation from './pages/services/Transformation';
import ConsultingServices from './pages/services/Consulting';

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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services/ai" element={<AIServices />} />
            <Route path="/services/cloud" element={<CloudServices />} />
            <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
            <Route path="/services/transformation" element={<DigitalTransformation />} />
            <Route path="/services/consulting" element={<ConsultingServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;