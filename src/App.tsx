import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));
const Events = lazy(() => import('./pages/Events'));
const Webinars = lazy(() => import('./pages/Webinars'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Support = lazy(() => import('./pages/Support'));
const Training = lazy(() => import('./pages/Training'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOpsServices = lazy(() => import('./pages/services/CloudDevOpsServices'));
const CybersecurityServices = lazy(() => import('./pages/services/CybersecurityServices'));
const InfrastructureServices = lazy(() => import('./pages/services/InfrastructureServices'));
const TransformationServices = lazy(() => import('./pages/services/TransformationServices'));
const ConsultingServices = lazy(() => import('./pages/services/ConsultingServices'));
const BlockchainServices = lazy(() => import('./pages/services/BlockchainServices'));
const IoTServices = lazy(() => import('./pages/IoTServicesPage'));
const MicroSAAS = lazy(() => import('./pages/MicroSAAS'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const ManufacturingSolutions = lazy(() => import('./pages/ManufacturingSolutions'));
const FinancialSolutions = lazy(() => import('./pages/FinancialSolutions'));
const QuantumTechnology = lazy(() => import('./pages/QuantumTechnology'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16"> {/* Add padding-top to account for fixed header */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/support" element={<Support />} />
              <Route path="/training" element={<Training />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudDevOpsServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<TransformationServices />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              
              {/* Specialized Service Pages */}
              <Route path="/iot-services" element={<IoTServices />} />
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              
              {/* Legacy Routes for Backward Compatibility */}
              <Route path="/innovative-services-2025" element={<Services />} />
              <Route path="/advanced-services-2025" element={<Services />} />
              <Route path="/advanced-services-showcase-2025" element={<Services />} />
              <Route path="/comprehensive-pricing-2025" element={<Pricing />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
        <EnhancedScrollToTop />
      </div>
    </Router>
  );
}

export default App;