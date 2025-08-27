import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedHeader } from './components/header/EnhancedHeader';
import { EnhancedFooter } from './components/footer/EnhancedFooter';
import { FuturisticAnimatedBackground } from './components/backgrounds/FuturisticAnimatedBackground';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.tsx';
import ServicesPage from './pages/ServicesPage';
import EnhancedServicesShowcase2025 from './pages/EnhancedServicesShowcase2025';
import NotFound from './pages/NotFound';
import Training from './pages/Training';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import Research from './pages/Research';
import Documentation from './pages/Documentation';
import API from './pages/API';

// Import other pages as needed
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import RequestQuote from './pages/RequestQuote';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
        {/* Futuristic animated background */}
        <FuturisticAnimatedBackground variant="default" intensity="low" />
        
        {/* Enhanced Header */}
        <EnhancedHeader />
        
        {/* Main Content */}
        <main className="pt-24">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Main Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
            
            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Content Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Service Detail Pages */}
            <Route path="/services/:serviceId" element={<ServicesPage />} />
            
            {/* AI Services Routes */}
            <Route path="/ai-services" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/cloud-devops" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/emerging-tech" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions" element={<EnhancedServicesShowcase2025 />} />
            
            {/* Company Routes */}
            <Route path="/leadership" element={<About />} />
            <Route path="/news" element={<Blog />} />
            <Route path="/case-studies" element={<About />} />
            <Route path="/partners" element={<About />} />
            
            {/* Resources Routes */}
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api" element={<API />} />
            <Route path="/help" element={<FAQ />} />
            <Route path="/training" element={<Training />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/research" element={<Research />} />
            
            {/* Industry Solutions Routes */}
            <Route path="/solutions/healthcare" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/financial" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/manufacturing" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/retail" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/transportation" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/energy" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/real-estate" element={<EnhancedServicesShowcase2025 />} />
            <Route path="/solutions/agriculture" element={<EnhancedServicesShowcase2025 />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Enhanced Footer */}
        <EnhancedFooter />
      </div>
    </Router>
  );
}

export default App;