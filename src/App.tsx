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
import Sitemap from './pages/Sitemap';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import ResearchDevelopment from './pages/ResearchDevelopment';
import SpaceTech from './pages/SpaceTech';
import QuantumTechnology from './pages/QuantumTechnology';
import GreenIT from './pages/GreenIT';
import Mobile from './pages/Mobile';
import Events from './pages/Events';
import Tutorials from './pages/Tutorials';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Documentation from './pages/Documentation';
import API from './pages/API';
import Developer from './pages/Developer';
import Enterprise from './pages/Enterprise';
import Solutions from './pages/Solutions';
import Community from './pages/Community';
import Marketplace from './pages/Marketplace';
import Talent from './pages/Talent';
import Talents from './pages/Talents';
import TalentDirectory from './pages/TalentDirectory';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Admin from './pages/Admin';
import Analytics from './pages/Analytics';
import MobileLaunch from './pages/MobileLaunch';
import OpenApp from './pages/OpenApp';
import RequestQuote from './pages/RequestQuote';
import ServiceComparison from './pages/ServiceComparison';
import ServiceInnovationHub from './pages/ServiceInnovationHub';
import ServicePortfolioDashboard from './pages/ServicePortfolioDashboard';
import ServiceRecommendations from './pages/ServiceRecommendations';
import ServicesShowcase from './pages/ServicesShowcase';
import MicroSAASServices from './pages/MicroSAASServices';
import FinancialSolutions from './pages/FinancialSolutions';
import GetStarted from './pages/GetStarted';
import AccessibilityAuditor from './pages/accessibility-auditor';
import AdvancedCybersecuritySuite from './pages/advanced-cybersecurity-suite';
import AffiliateAttributionHub from './pages/affiliate-attribution-hub';
import SOC2ComplianceAutomation from './pages/soc2-compliance-automation';
import QuantumEdgeComputingPlatform from './pages/QuantumEdgeComputingPlatform';
import ServiceComparisonPage from './pages/ServiceComparison';
import ServiceInnovationHubPage from './pages/ServiceInnovationHub';
import ServicePortfolioDashboardPage from './pages/ServicePortfolioDashboard';
import ServiceRecommendationsPage from './pages/ServiceRecommendations';
import ServicesShowcasePage from './pages/ServicesShowcase';
import MicroSAASServicesPage from './pages/MicroSAASServicesPage';
import UltimatePricing2025 from './pages/UltimatePricing2025';
import UltimateServicesShowcase2025 from './pages/UltimateServicesShowcase2025';
import ZeroTrustNetworkArchitecture from './pages/ZeroTrustNetworkArchitecture';

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
          <Header />
          <main className="pt-16"> {/* Add padding-top to account for fixed header */}
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* Legal & Info Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/support" element={<Support />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              
              {/* Technology Pages */}
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/mobile" element={<Mobile />} />
              
              {/* Content Pages */}
              <Route path="/events" element={<Events />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/api" element={<API />} />
              <Route path="/developer" element={<Developer />} />
              
              {/* Enterprise & Business Pages */}
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/community" element={<Community />} />
              <Route path="/marketplace" element={<Marketplace />} />
              
              {/* Talent & HR Pages */}
              <Route path="/talent" element={<Talent />} />
              <Route path="/talents" element={<Talents />} />
              <Route path="/talent-directory" element={<TalentDirectory />} />
              
              {/* Auth Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Dashboard & Admin Pages */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/analytics" element={<Analytics />} />
              
              {/* Mobile App Pages */}
              <Route path="/mobile-launch" element={<MobileLaunch />} />
              <Route path="/open-app" element={<OpenApp />} />
              
              {/* Service & Quote Pages */}
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/service-comparison" element={<ServiceComparison />} />
              <Route path="/service-innovation-hub" element={<ServiceInnovationHub />} />
              <Route path="/service-portfolio-dashboard" element={<ServicePortfolioDashboard />} />
              <Route path="/service-recommendations" element={<ServiceRecommendations />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/micro-saas-services" element={<MicroSAASServices />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/get-started" element={<GetStarted />} />
              
              {/* Specialized Service Pages */}
              <Route path="/accessibility-auditor" element={<AccessibilityAuditor />} />
              <Route path="/advanced-cybersecurity-suite" element={<AdvancedCybersecuritySuite />} />
              <Route path="/affiliate-attribution-hub" element={<AffiliateAttributionHub />} />
              <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
              <Route path="/quantum-edge-computing-platform" element={<QuantumEdgeComputingPlatform />} />
              <Route path="/service-comparison-page" element={<ServiceComparisonPage />} />
              <Route path="/service-innovation-hub-page" element={<ServiceInnovationHubPage />} />
              <Route path="/service-portfolio-dashboard-page" element={<ServicePortfolioDashboardPage />} />
              <Route path="/service-recommendations-page" element={<ServiceRecommendationsPage />} />
              <Route path="/services-showcase-page" element={<ServicesShowcasePage />} />
              <Route path="/micro-saas-services-page" element={<MicroSAASServicesPage />} />
              <Route path="/ultimate-pricing-2025" element={<UltimatePricing2025 />} />
              <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
              
              {/* Catch-all route */}
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