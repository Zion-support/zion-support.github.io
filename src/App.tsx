import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import ComprehensivePricing from './pages/ComprehensivePricing';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import Support from './pages/Support';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import Tutorials from './pages/Tutorials';
import ResearchDevelopment from './pages/ResearchDevelopment';
import SpaceTech from './pages/SpaceTech';
import QuantumTechnology from './pages/QuantumTechnology';
import GreenIT from './pages/GreenIT';
import GetStarted from './pages/GetStarted';
import HelpCenter from './pages/HelpCenter';
import ServiceComparison from './pages/ServiceComparison';
import ServicePortfolioDashboard from './pages/ServicePortfolioDashboard';
import ServiceRecommendations from './pages/ServiceRecommendations';
import ServiceInnovationHub from './pages/ServiceInnovationHub';
import ServicesShowcase from './pages/ServicesShowcase';
import Sitemap from './pages/Sitemap';

// Service pages
import AI from './pages/services/AI';
import Cloud from './pages/services/Cloud';
import Cybersecurity from './pages/services/Cybersecurity';
import Infrastructure from './pages/services/Infrastructure';
import Transformation from './pages/services/Transformation';
import Consulting from './pages/services/Consulting';

// Solution pages
import EnterpriseSolutions from './pages/solutions/EnterpriseSolutions';
import FinancialSolutions from './pages/solutions/FinancialSolutions';
import GovernmentSolutions from './pages/solutions/GovernmentSolutions';
import HealthcareSolutions from './pages/solutions/HealthcareSolutions';
import ManufacturingSolutions from './pages/solutions/ManufacturingSolutions';
import RetailSolutions from './pages/solutions/RetailSolutions';

function App() {
  // Performance optimization: Preload critical routes
  useEffect(() => {
    const preloadCriticalRoutes = () => {
      // Preload critical pages
      const criticalRoutes = [
        () => import('./pages/Services'),
        () => import('./pages/Contact')
      ];
      
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          criticalRoutes.forEach(preload => preload());
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          criticalRoutes.forEach(preload => preload());
        }, 1000);
      }
    };

    preloadCriticalRoutes();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SEO />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
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
    </HelmetProvider>
  );
}

export default App;