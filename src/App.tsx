import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));

const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// New missing pages
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Partners = lazy(() => import('./pages/Partners'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Training = lazy(() => import('./pages/Training'));
const News = lazy(() => import('./pages/News'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Events = lazy(() => import('./pages/Events'));
const Support = lazy(() => import('./pages/Support'));
const FAQ = lazy(() => import('./pages/FAQ'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const FinancialSolutions = lazy(() => import('./pages/FinancialSolutions'));
const Mobile = lazy(() => import('./pages/Mobile'));
const QuantumTechnology = lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));

// Service detail pages
const AISolutions = lazy(() => import('./pages/services/AI'));
const CloudDevOps = lazy(() => import('./pages/services/Cloud'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/Infrastructure'));
const DigitalTransformation = lazy(() => import('./pages/services/Transformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16"> {/* Add padding-top to account for fixed header */}
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />

                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* New missing pages */}
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/training" element={<Training />} />
                <Route path="/news" element={<News />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/events" element={<Events />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/financial-solutions" element={<FinancialSolutions />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/quantum-technology" element={<QuantumTechnology />} />
                <Route path="/space-tech" element={<SpaceTech />} />
                
                {/* Service detail routes */}
                <Route path="/services/ai" element={<AISolutions />} />
                <Route path="/services/cloud" element={<CloudDevOps />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/services/infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/transformation" element={<DigitalTransformation />} />
                <Route path="/services/consulting" element={<Consulting />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;