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
              
              <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white group relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        Zion Tech Group
                      </span>
                      {/* Neon glow effect on hover */}
                      <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-sm transition-all duration-300">
                        Zion Tech Group
                      </div>
                    </Link>
                    
                    {/* Enhanced Navigation */}
                    <nav className="hidden lg:flex space-x-8">
                      <div className="relative group">
                        <Link
                          to="/services"
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group/nav"
                        >
                          Services
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover/nav:w-full transition-all duration-300"></span>
                        </Link>
                        {/* Dropdown menu */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="p-4 space-y-2">
                            <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-2 px-3 rounded hover:bg-white/10">
                              AI Services
                            </Link>
                            <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-2 px-3 rounded hover:bg-white/10">
                              IT Services
                            </Link>
                            <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-2 px-3 rounded hover:bg-white/10">
                              Micro SAAS
                            </Link>
                            <Link to="/5g-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-2 px-3 rounded hover:bg-white/10">
                              5G Solutions
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group/nav"
                      >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover/nav:w-full transition-all duration-300"></span>
                      </Link>
                      
                      <Link
                        to="/case-studies"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group/nav"
                      >
                        Case Studies
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover/nav:w-full transition-all duration-300"></span>
                      </Link>
                      
                      <Link
                        to="/blog"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group/nav"
                      >
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover/nav:w-full transition-all duration-300"></span>
                      </Link>
                      
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group/nav"
                      >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover/nav:w-full transition-all duration-300"></span>
                      </Link>
                    </nav>
                    
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/contact"
                        className="hidden sm:flex group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 relative overflow-hidden"
                      >
                        {/* Animated background */}
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

              <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Zion Tech Group
                        </span>
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                        Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
                        We help businesses transform with cutting-edge technology and innovative solutions.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-sm font-bold group-hover:text-cyan-300 transition-colors">Z</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4">AI Services</h4>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          All AI Services
                        </Link>
                        <Link to="/ai-business-intelligence" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Business Intelligence
                        </Link>
                        <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Customer Support
                        </Link>
                        <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Content Generation
                        </Link>
                        <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Cybersecurity
                        </Link>
                        <Link to="/ai-data-analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Data Analytics
                        </Link>
                      </div>
                    </div>

                    {/* IT Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4">IT Services</h4>
                      <div className="space-y-2">
                        <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          All IT Services
                        </Link>
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cloud Infrastructure
                        </Link>
                        <Link to="/cybersecurity-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cybersecurity
                        </Link>
                        <Link to="/network-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Network Infrastructure
                        </Link>
                        <Link to="/server-management" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Server Management
                        </Link>
                        <Link to="/it-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          IT Support
                        </Link>
                      </div>
                    </div>

                    {/* Micro SAAS */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Micro SAAS</h4>
                      <div className="space-y-2">
                        <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          All Micro SAAS
                        </Link>
                        <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Analytics Pro
                        </Link>
                        <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Security Shield
                        </Link>
                        <Link to="/zion-cloud-vault" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cloud Vault
                        </Link>
                        <Link to="/zion-ai-content-studio" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Content Studio
                        </Link>
                        <Link to="/zion-customer-ai" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Customer AI
                        </Link>
                      </div>
                    </div>

                    {/* Company & Support */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                      <div className="space-y-2">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          About Us
                        </Link>
                        <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Case Studies
                        </Link>
                        <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Blog
                        </Link>
                        <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Careers
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Contact
                        </Link>
                        <Link to="/consultation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Free Consultation
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">@</span>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Email</h4>
                        <p className="text-cyan-400 text-sm">kleber@ziontechgroup.com</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">📞</span>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Phone</h4>
                        <p className="text-cyan-400 text-sm">+1 302 464 0950</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">📍</span>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Address</h4>
                        <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
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
                        <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cookie Policy
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
