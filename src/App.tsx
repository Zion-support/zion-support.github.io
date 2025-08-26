import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { SidebarProvider } from './context/SidebarContext';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
                
                {/* New Innovation 2027 Route */}
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                
                {/* Service Detail Routes */}
                <Route path="/quantum-neural-network-platform" element={<div>Quantum Neural Network Platform</div>} />
                <Route path="/autonomous-business-operations-platform" element={<div>Autonomous Business Operations Platform</div>} />
                <Route path="/ai-powered-it-asset-management" element={<div>AI-Powered IT Asset Management</div>} />
                <Route path="/soc2-compliance-automation" element={<div>SOC2 Compliance Automation</div>} />
                <Route path="/ai-autonomous-research-assistant" element={<div>AI Autonomous Research Assistant</div>} />
                <Route path="/5g-enterprise-solutions" element={<div>5G Enterprise Solutions</div>} />
                <Route path="/space-technology-platform" element={<div>Space Technology Platform</div>} />
                <Route path="/ai-climate-intelligence-platform" element={<div>AI Climate Intelligence Platform</div>} />
                
                {/* Service Category Routes */}
                <Route path="/services" element={<div>Services Overview</div>} />
                <Route path="/services/ai" element={<div>AI Services</div>} />
                <Route path="/services/cloud" element={<div>Cloud Services</div>} />
                <Route path="/services/cybersecurity" element={<div>Cybersecurity Services</div>} />
                <Route path="/services/infrastructure" element={<div>Infrastructure Services</div>} />
                <Route path="/services/transformation" element={<div>Digital Transformation</div>} />
                <Route path="/services/consulting" element={<div>Consulting Services</div>} />
                <Route path="/services/quantum-ai" element={<div>Quantum AI Services</div>} />
                <Route path="/services/blockchain" element={<div>Blockchain & Web3 Services</div>} />
                <Route path="/services/iot" element={<div>IoT & Edge Services</div>} />
                <Route path="/services/robotics" element={<div>Robotics & RPA Services</div>} />
                <Route path="/services/xr" element={<div>Extended Reality Services</div>} />
                
                {/* Company Routes */}
                <Route path="/team" element={<div>Our Team</div>} />
                <Route path="/news" element={<div>News & Updates</div>} />
                <Route path="/case-studies" element={<div>Case Studies</div>} />
                <Route path="/investors" element={<div>Investor Relations</div>} />
                <Route path="/sustainability" element={<div>Sustainability</div>} />
                
                {/* Resource Routes */}
                <Route path="/docs" element={<div>Documentation</div>} />
                <Route path="/white-papers" element={<div>White Papers</div>} />
                <Route path="/webinars" element={<div>Webinars</div>} />
                <Route path="/research-development" element={<div>Research & Development</div>} />
                <Route path="/events" element={<div>Events</div>} />
                <Route path="/training" element={<div>Training Programs</div>} />
                <Route path="/api-docs" element={<div>API Documentation</div>} />
                
                {/* Support Routes */}
                <Route path="/help" element={<div>Help Center</div>} />
                <Route path="/support" element={<div>Support Portal</div>} />
                <Route path="/tech-support" element={<div>Technical Support</div>} />
                <Route path="/request-quote" element={<div>Request Quote</div>} />
                <Route path="/emergency-support" element={<div>Emergency Support</div>} />
                
                {/* Additional Routes */}
                <Route path="/pricing" element={<div>Pricing</div>} />
                <Route path="/solutions" element={<div>Solutions</div>} />
                <Route path="/resources" element={<div>Resources</div>} />
                
                {/* Catch-all route for undefined pages */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                      <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                      <a href="/" className="btn-futuristic">Go Home</a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;