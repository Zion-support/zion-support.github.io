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
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<ComprehensivePricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/support" element={<Support />} />
            <Route path="/events" element={<Events />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />
            <Route path="/space-tech" element={<SpaceTech />} />
            <Route path="/quantum-technology" element={<QuantumTechnology />} />
            <Route path="/green-it" element={<GreenIT />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/service-comparison" element={<ServiceComparison />} />
            <Route path="/service-portfolio" element={<ServicePortfolioDashboard />} />
            <Route path="/service-recommendations" element={<ServiceRecommendations />} />
            <Route path="/service-innovation-hub" element={<ServiceInnovationHub />} />
            <Route path="/services-showcase" element={<ServicesShowcase />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* Service Routes */}
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/transformation" element={<Transformation />} />
            <Route path="/services/consulting" element={<Consulting />} />

            {/* Solution Routes */}
            <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
            <Route path="/solutions/financial" element={<FinancialSolutions />} />
            <Route path="/solutions/government" element={<GovernmentSolutions />} />
            <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
            <Route path="/solutions/manufacturing" element={<ManufacturingSolutions />} />
            <Route path="/solutions/retail" element={<RetailSolutions />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;