import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MobileNavigation from "./components/MobileNavigation";
import EnhancedNavigation from "./components/EnhancedNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>
          <AnalyticsProvider>
            <EnhancedPerformanceMonitor showInProduction={false} />
            <Helmet>
              <title>Zion Tech Group - Advanced AI and IT Solutions</title>
              <meta
                name="description"
                content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses."
              />
              <meta
                name="keywords"
                content="AI solutions, IT services, digital transformation, business automation, technology consulting"
              />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
              
              <EnhancedNavigation />

              <main>{children}</main>

              <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Zion Tech Group
                        </span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                        We help companies leverage cutting-edge technology to achieve their goals.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">Z</span>
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-white font-semibold">Zion Tech Group</span>
                          <span className="text-gray-400 text-sm">Technology Solutions</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Company</h4>
                      <div className="space-y-3">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          About Us
                        </Link>
                        <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Careers
                        </Link>
                        <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Case Studies
                        </Link>
                        <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Blog
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Contact
                        </Link>
                      </div>
                    </div>

                    {/* AI Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">AI Services</h4>
                      <div className="space-y-3">
                        <Link to="/ai-business-intelligence" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Business Intelligence
                        </Link>
                        <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Customer Support
                        </Link>
                        <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Content Generation
                        </Link>
                        <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Cybersecurity
                        </Link>
                        <Link to="/ai-services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All AI Services →
                        </Link>
                      </div>
                    </div>

                    {/* IT Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">IT Services</h4>
                      <div className="space-y-3">
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cloud Infrastructure
                        </Link>
                        <Link to="/cybersecurity-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cybersecurity
                        </Link>
                        <Link to="/web-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Web Development
                        </Link>
                        <Link to="/mobile-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Mobile Development
                        </Link>
                        <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All IT Services →
                        </Link>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs">@</span>
                          </div>
                          <div>
                            <span className="text-gray-300 text-sm block">Email</span>
                            <span className="text-cyan-400 text-sm">kleber@ziontechgroup.com</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs">📞</span>
                          </div>
                          <div>
                            <span className="text-gray-300 text-sm block">Phone</span>
                            <span className="text-cyan-400 text-sm">+1 302 464 0950</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs">📍</span>
                          </div>
                          <div>
                            <span className="text-gray-300 text-sm block">Address</span>
                            <span className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                      <p className="text-gray-300 mb-6">Get the latest insights on AI, technology, and business innovation delivered to your inbox.</p>
                      <div className="max-w-md mx-auto flex gap-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                        />
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                          Subscribe
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <p className="text-gray-300 text-sm">
                        © 2024 Zion Tech Group. All rights reserved.
                      </p>
                      <div className="flex space-x-6">
                        <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Terms of Service
                        </Link>
                        <Link to="/consultation" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          Free Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </AnalyticsProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default Layout;
