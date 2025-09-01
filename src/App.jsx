import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

// Home and main pages'
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
// const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));

// Services pages - temporarily disabled due to syntax errors
// const ComprehensivePricing = lazy(() => 
//   import('./pages/ComprehensivePricing2025.tsx')
// );

// Service category pages
const AIServices = lazy(() => import('./pages/services/AIServices.tsx'));
const CloudServices = lazy(() => import('./pages/services/CloudServices.tsx'));
const CybersecurityServices = lazy(() => import('./pages/services/CybersecurityServices.tsx'));
const AIQuantumFinancialTrading = lazy(() => import('./pages/services/AIQuantumFinancialTrading.tsx'));

// Enhanced Services Showcase
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

// Simple Services page component
const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {' '}
            Services
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">
            AI & Machine Learning
          </h3>
          <p className="text-gray-300">
            Cutting-edge artificial intelligence solutions for business
            automation and insights.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
          <p className="text-gray-300">
            Advanced security solutions with zero-trust architecture and threat
            detection.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
          <p className="text-gray-300">
            Scalable cloud infrastructure and automated deployment solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/login" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Login</h1>
                    <p className="text-gray-300">Authentication system coming soon</p>
                  </div>
                </div>
              } />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* <Route path="/pricing" element={<ComprehensivePricing />} /> */}
              <Route path="/pricing" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Pricing</h1>
                    <p className="text-gray-300">Coming Soon - Contact us for pricing information</p>
                  </div>
                </div>
              } />

              {/* Services routes */}
              <Route path="/services" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/services/enhanced" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/services/showcase" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/AIQuantumFinancialTrading" element={<AIQuantumFinancialTrading />} />
              
              {/* Additional service routes */}
              <Route path="/solutions" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/research-development" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Research & Development</h1>
                    <p className="text-gray-300">Our R&D initiatives are showcased in our services portfolio</p>
                    <a href="/services" className="bg-cyan-500 text-white px-6 py-3 rounded-lg mt-4 inline-block hover:bg-cyan-600 transition-colors">View Our Services</a>
                  </div>
                </div>
              } />
              <Route path="/case-studies" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
                    <p className="text-gray-300">Real success stories from our innovative solutions</p>
                    <a href="/services" className="bg-cyan-500 text-white px-6 py-3 rounded-lg mt-4 inline-block hover:bg-cyan-600 transition-colors">Explore Services</a>
                  </div>
                </div>
              } />
              <Route path="/news" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Latest News</h1>
                    <p className="text-gray-300">Stay updated with Zion Tech Group innovations</p>
                    <a href="/blog" className="bg-cyan-500 text-white px-6 py-3 rounded-lg mt-4 inline-block hover:bg-cyan-600 transition-colors">Read Our Blog</a>
                  </div>
                </div>
              } />
              <Route path="/events" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Events</h1>
                    <p className="text-gray-300">Join us at upcoming technology events and webinars</p>
                    <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg mt-4 inline-block hover:bg-cyan-600 transition-colors">Contact Us</a>
                  </div>
                </div>
              } />
              <Route path="/infrastructure" element={<CloudServices />} />
              <Route path="/transformation" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/consulting" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/privacy" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-300">Your privacy is our priority</p>
                    <div className="max-w-2xl mx-auto mt-8 text-left">
                      <p className="mb-4">Zion Tech Group is committed to protecting your privacy and ensuring the security of your personal information.</p>
                      <p className="mb-4">Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400">kleber@ziontechgroup.com</a> for privacy inquiries.</p>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/terms" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-gray-300">Terms and conditions for using our services</p>
                    <div className="max-w-2xl mx-auto mt-8 text-left">
                      <p className="mb-4">By using Zion Tech Group services, you agree to our terms and conditions.</p>
                      <p className="mb-4">For questions, contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400">kleber@ziontechgroup.com</a>.</p>
                    </div>
                  </div>
                </div>
              } />

              {/* Catch-all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-zion-cyan mb-4">
                        404 - Page Not Found
                      </h1>
                      <p className="text-zion-slate-light mb-6">
                        The page you're looking for doesn't exist.
                      </p>
                      <a
                        href="/"
                        className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                }
              />
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