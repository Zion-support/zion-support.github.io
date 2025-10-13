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
import FuturisticNavigation from "./components/FuturisticNavigation";
import FuturisticBackground from "./components/FuturisticBackground";

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
              <FuturisticBackground variant="holographic" intensity="medium" />
              
              {/* Additional Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
              
              {/* Futuristic Navigation */}
              <FuturisticNavigation variant="holographic" />

              <main>{children}</main>

              <footer className="bg-gradient-to-r from-slate-900/50 via-purple-900/50 to-slate-900/50 backdrop-blur-sm border-t border-cyan-500/20 py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                          Zion Tech Group
                        </span>
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                        Transforming the future with cutting-edge technology.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg font-bold group-hover:animate-pulse">Z</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg font-bold group-hover:animate-pulse">T</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-600 rounded-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-lg font-bold group-hover:animate-pulse">G</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Quick Links
                      </h4>
                      <div className="space-y-3">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">About Us</span>
                        </Link>
                        <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Our Services</span>
                        </Link>
                        <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Micro SAAS</span>
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Contact</span>
                        </Link>
                        <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Free Consultation</span>
                        </Link>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        AI Services
                      </h4>
                      <div className="space-y-3">
                        <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Analytics Pro</span>
                        </Link>
                        <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Security Shield</span>
                        </Link>
                        <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Content Generation</span>
                        </Link>
                        <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Customer Support</span>
                        </Link>
                        <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:translate-x-2 transition-transform inline-block">Cybersecurity</span>
                        </Link>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold text-white bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                        Contact Info
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 group">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center space-x-4 group">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Smartphone className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-start space-x-4 group">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-600 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                            <Globe className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">364 E Main St STE 1008<br />Middletown DE 19709</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <p className="text-gray-300 text-sm">
                        © 2024 Zion Tech Group. All rights reserved. | Transforming the future with AI.
                      </p>
                      <div className="flex space-x-8">
                        <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:underline">Privacy Policy</span>
                        </Link>
                        <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:underline">Terms of Service</span>
                        </Link>
                        <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group">
                          <span className="group-hover:underline">Sitemap</span>
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
