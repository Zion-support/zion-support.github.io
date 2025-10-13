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
                    <div className="lg:col-span-2 space-y-6">
                      <h3 className="text-2xl font-bold text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          Zion Tech Group
                        </span>
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                        Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">Z</span>
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-white text-sm font-semibold">Trusted by 10,000+</span>
                          <span className="text-gray-400 text-xs">Businesses Worldwide</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">AI Services</h4>
                      <div className="space-y-3">
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
                          Cybersecurity
                        </Link>
                        <Link to="/ai-marketing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Marketing Automation
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
                        <Link to="/devops-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          DevOps Solutions
                        </Link>
                        <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All IT Services →
                        </Link>
                      </div>
                    </div>

                    {/* Company & Resources */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Company</h4>
                      <div className="space-y-3">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          About Us
                        </Link>
                        <Link to="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Our Team
                        </Link>
                        <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Careers
                        </Link>
                        <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Case Studies
                        </Link>
                        <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Blog
                        </Link>
                        <Link to="/contact" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          Contact Us →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">@</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Email</p>
                          <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📞</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Phone</p>
                          <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5">
                          <span className="text-white text-sm">📍</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Address</p>
                          <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
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
                      <div className="flex flex-wrap gap-6">
                        <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Terms of Service
                        </Link>
                        <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cookie Policy
                        </Link>
                        <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
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
