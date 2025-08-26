import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComprehensiveServicesShowcase from './components/ComprehensiveServicesShowcase';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Support = lazy(() => import('./pages/Support'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Events = lazy(() => import('./pages/Events'));
const Webinars = lazy(() => import('./pages/Webinars'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const Team = lazy(() => import('./pages/Team'));
const Partners = lazy(() => import('./pages/Partners'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Pricing = lazy(() => import('./pages/Pricing'));
const MicroSAASServices = lazy(() => import('./pages/MicroSAASServicesPage'));
const QuantumTechnology = lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const FinancialSolutions = lazy(() => import('./pages/FinancialSolutions'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service-specific pages
const AISolutions = lazy(() => import('./pages/services/AISolutions'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <Header />
        
        <main className="pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/events" element={<Events />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/micro-saas" element={<MicroSAASServices />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/comprehensive" element={<ComprehensiveServicesShowcase />} />
              <Route path="/services/ai" element={<AISolutions />} />
              <Route path="/services/cloud" element={<CloudDevOps />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<Consulting />} />
              
              {/* Additional Service Routes */}
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/cloud-devops" element={<CloudDevOps />} />
              <Route path="/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;