import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Zion Tech Group
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-blue-300 transition-colors">Home</a>
            <a href="/about" className="text-white hover:text-blue-300 transition-colors">About</a>
            <a href="/pricing" className="text-white hover:text-blue-300 transition-colors">Pricing</a>
            <a href="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white hover:text-blue-300 transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-blue-300 transition-colors">About</a>
              <a href="/pricing" className="text-white hover:text-blue-300 transition-colors">Pricing</a>
              <a href="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Pages
import Pricing from './pages/Pricing';
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import MicroSaaS from './pages/MicroSaaS';
import EnhancedMicroSAAS from './pages/EnhancedMicroSAAS';
import Cybersecurity from './pages/Cybersecurity';
import CloudMigration from './pages/CloudMigration';
import MobileDevelopment from './pages/MobileDevelopment';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

// Enhanced Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Zion Tech Group
        </h1>
        <p className="text-2xl mb-8 text-gray-300">AI-Powered IT Solutions & Digital Innovation</p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
        <div className="text-green-400 text-lg flex items-center justify-center">
          <span className="mr-2">✅</span>
          Successfully built and deployed! 🚀
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-3">AI Services</h3>
          <p className="text-gray-300">Advanced AI solutions for your business needs</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-3">IT Solutions</h3>
          <p className="text-gray-300">Comprehensive IT services and support</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-3">Micro SaaS</h3>
          <p className="text-gray-300">Scalable software solutions for growth</p>
        </div>
      </div>
    </div>
  </div>
);

// Enhanced About component
const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Leading provider of AI-powered solutions and comprehensive IT services, 
          dedicated to transforming businesses through innovative technology.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6">
            To empower businesses with cutting-edge AI solutions and reliable IT services 
            that drive growth, efficiency, and innovation in the digital age.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-green-400 mr-3">✓</span>
              <span>AI-Powered Solutions</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-3">✓</span>
              <span>Comprehensive IT Support</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-3">✓</span>
              <span>Scalable Micro SaaS Platforms</span>
            </li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <p className="text-gray-300">
            With years of experience in AI and IT solutions, we deliver 
            exceptional results that exceed expectations and drive real business value.
          </p>
        </div>
      </div>
    </div>
  </div>
);
// Enhanced Contact component
const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business with AI and IT solutions? 
          Get in touch with our expert team today.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-300">contact@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Office</h3>
                <p className="text-gray-300">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// Simple NotFound component
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 to-purple-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <div className="App">
              <Navigation />
              <main className="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/ai-services" element={<AIServices />} />
                    <Route path="/services/it-services" element={<ITServices />} />
                    <Route path="/services/micro-saas" element={<MicroSaaS />} />
                    <Route path="/enhanced-micro-saas" element={<EnhancedMicroSAAS />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                    <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                    
                    {/* Additional Routes */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/support" element={<Support />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-300">
            Leading provider of AI-powered solutions and comprehensive IT services.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/services/ai-services" className="hover:text-blue-300">AI Services</a></li>
            <li><a href="/services/it-services" className="hover:text-blue-300">IT Services</a></li>
            <li><a href="/services/micro-saas" className="hover:text-blue-300">Micro SaaS</a></li>
            <li><a href="/services/cybersecurity" className="hover:text-blue-300">Cybersecurity</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            <li><a href="/pricing" className="hover:text-blue-300">Pricing</a></li>
            <li><a href="/support" className="hover:text-blue-300">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
            <li><a href="/faq" className="hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;