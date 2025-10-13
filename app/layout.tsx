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
import { ArrowRight, Mail, Smartphone, Globe } from "lucide-react";
import MobileNavigation from "./components/MobileNavigation";

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
              {/* Futuristic Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
              
              {/* Neon Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75 delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-75 delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-75 delay-3000"></div>
              </div>
              
              {/* Neon Glow Effects */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
              
              <header className="bg-black/30 backdrop-blur-md border-b border-cyan-400/20 relative z-50 shadow-lg shadow-cyan-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white group relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        Zion Tech Group
                      </span>
                      {/* Neon glow effect */}
                      <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300">
                        Zion Tech Group
                      </div>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10"
                      >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/services"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10"
                      >
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/ai-services"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10"
                      >
                        AI Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/micro-saas"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10"
                      >
                        Micro SAAS
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-cyan-400/10"
                      >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/contact"
                        className="hidden sm:flex group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative z-10">Contact Us</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                      </Link>
                      <MobileNavigation />
                    </div>
                  </div>
                </div>
              </header>

              <main>{children}</main>

              <footer className="bg-black/30 backdrop-blur-md border-t border-cyan-400/20 py-16 relative z-10 shadow-lg shadow-cyan-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6 relative">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Zion Tech Group
                        </span>
                        {/* Neon glow effect */}
                        <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30 blur-sm">
                          Zion Tech Group
                        </div>
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                        Transforming the future with cutting-edge technology.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <span className="text-white text-sm font-bold">Z</span>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                          <span className="text-white text-sm font-bold">T</span>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/25">
                          <span className="text-white text-sm font-bold">G</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-white relative">
                        Quick Links
                        <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                      </h4>
                      <div className="space-y-3">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          About Us
                        </Link>
                        <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          Our Services
                        </Link>
                        <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          AI Services
                        </Link>
                        <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          Micro SAAS
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          Contact
                        </Link>
                        <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform">
                          Free Consultation
                        </Link>
                      </div>
                    </div>

                    {/* AI Services */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-white relative">
                        AI Services
                        <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                      </h4>
                      <div className="space-y-3">
                        <Link to="/ai-business-intelligence" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Business Intelligence
                        </Link>
                        <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Customer Support
                        </Link>
                        <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Content Generation
                        </Link>
                        <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Cybersecurity
                        </Link>
                        <Link to="/ai-marketing-automation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Marketing Automation
                        </Link>
                        <Link to="/ai-data-analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform">
                          AI Data Analytics
                        </Link>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-white relative">
                        Contact Info
                        <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 group">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center space-x-3 group">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
                            <Smartphone className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-start space-x-3 group">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center mt-0.5 shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">364 E Main St STE 1008<br />Middletown DE 19709</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-cyan-400/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <p className="text-gray-300 text-sm">
                        © 2024 Zion Tech Group. All rights reserved. | Transforming the future with AI and technology.
                      </p>
                      <div className="flex space-x-6">
                        <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:underline">
                          Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:underline">
                          Terms of Service
                        </Link>
                        <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:underline">
                          Sitemap
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
