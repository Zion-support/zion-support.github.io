import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load main pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const InnovativeServicesShowcase2026 = React.lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ServicesOverview2026 = React.lazy(() => import('./pages/ServicesOverview2026'));

// Lazy load service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
const Consulting = React.lazy(() => import('./pages/services/Consulting'));
const ITOnsiteServices = React.lazy(() => import('./pages/services/ITOnsiteServices'));

// Lazy load marketplace pages
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));

// Lazy load company pages
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudy'));
const Partners = React.lazy(() => import('./pages/Partners'));

// Lazy load resource pages
const Blog = React.lazy(() => import('./pages/Blog'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Events = React.lazy(() => import('./pages/Events'));
const Training = React.lazy(() => import('./pages/Training'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));

// Lazy load support pages
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Support = React.lazy(() => import('./pages/Support'));

// Lazy load legal pages
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

// Lazy load enterprise pages
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const EnterprisePlans = React.lazy(() => import('./pages/EnterprisePlans'));

// Lazy load auth pages
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));

// Lazy load dashboard pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-cyan-500 text-lg font-medium">Loading Zion...</p>
      <p className="text-gray-400 text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Marketplace Routes */}
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/marketplace" element={<Marketplace />} />
              
              {/* Company Routes */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Resource Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/events" element={<Events />} />
              <Route path="/training" element={<Training />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              
              {/* Support Routes */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/support" element={<Support />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* Enterprise Routes */}
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/enterprise/plans" element={<EnterprisePlans />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Special Routes */}
              <Route path="/innovative-services-2026" element={<InnovativeServicesShowcase2026 />} />
              <Route path="/services-overview-2026" element={<ServicesOverview2026 />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
                  <p className="text-slate-400">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-cyan-400 hover:text-cyan-300">Return to Home</a>
                </div>
              </div>} />
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