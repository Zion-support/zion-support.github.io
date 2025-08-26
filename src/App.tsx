import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import InnovativeServices2025 from './pages/InnovativeServices2025';
import ComprehensivePricing2025 from './pages/ComprehensivePricing2025';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import HelpCenter from './pages/HelpCenter';
import Careers from './pages/Careers';
import News from './pages/News';
import Press from './pages/Press';
import Status from './pages/Status';
import Support from './pages/Support';

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
            {/* Temporarily disabled due to TypeScript errors
            <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
            <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
            */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/press" element={<Press />} />
            <Route path="/status" element={<Status />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;