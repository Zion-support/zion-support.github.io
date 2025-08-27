import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// Company pages
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Press = React.lazy(() => import('./pages/Press.tsx'));
const Team = React.lazy(() => import('./pages/Team.tsx'));
const Partners = React.lazy(() => import('./pages/Partners.tsx'));

// Service-specific pages
const AISolutions = React.lazy(() => import('./pages/AISolutions.jsx'));
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity.jsx'));
const CloudSolutions = React.lazy(() => import('./pages/CloudSolutions.tsx'));
const ITConsulting = React.lazy(() => import('./pages/ITConsulting.tsx'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology.tsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.tsx'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation.tsx'));

// Resource pages
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies.tsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.tsx'));
const Support = React.lazy(() => import('./pages/Support.tsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Events = React.lazy(() => import('./pages/Events.tsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.tsx'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers.tsx'));
const Tutorials = React.lazy(() => import('./pages/Tutorials.tsx'));

// Legal pages
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.tsx'));
const GDPR = React.lazy(() => import('./pages/GDPR.tsx'));

// Additional service pages
const Pricing = React.lazy(() => import('./pages/Pricing.tsx'));
const MicroSaas = React.lazy(() => import('./pages/MicroSAAS'));
const Enterprise = React.lazy(() => import('./pages/Enterprise.tsx'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.tsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              
              {/* Company Routes */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AISolutions />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/cloud" element={<CloudSolutions />} />
              <Route path="/services/consulting" element={<ITConsulting />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              
              {/* Resource Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/events" element={<Events />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/tutorials" element={<Tutorials />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/gdpr" element={<GDPR />} />
              
              {/* Additional Routes */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/micro-saas" element={<MicroSaas />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/developers" element={<DeveloperPortal />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;