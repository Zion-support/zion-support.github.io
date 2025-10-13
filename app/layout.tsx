import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>
          <AnalyticsProvider>
            <PerformanceMonitor />
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
              
              <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white group">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        Zion Tech Group
                      </span>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/services"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </nav>
                    <Link
                      to="/contact"
                      className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </header>

              <main>{children}</main>

              <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Zion Tech Group
                        </span>
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">Z</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                      <div className="space-y-2">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          About Us
                        </Link>
                        <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Our Services
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Contact
                        </Link>
                        <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          Free Consultation
                        </Link>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Services</h4>
                      <div className="space-y-2">
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
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Contact Info</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs">@</span>
                          </div>
                          <span className="text-gray-300 text-sm">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs">📞</span>
                          </div>
                          <span className="text-gray-300 text-sm">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs">📍</span>
                          </div>
                          <span className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                        </div>
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
