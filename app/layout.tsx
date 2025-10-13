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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
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
                          <span className="text-white text-sm font-semibold">Trusted by 25,000+</span>
                          <span className="text-gray-400 text-xs">Businesses Worldwide</span>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
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
                        <Link to="/ai-voice-assistant-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Voice AI Assistant
                        </Link>
                        <Link to="/ai-image-recognition-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Image Recognition
                        </Link>
                        <Link to="/ai-fraud-detection-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Fraud Detection
                        </Link>
                        <Link to="/ai-climate-solutions-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Climate Solutions
                        </Link>
                        <Link to="/ai-agricultural-intelligence-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Agricultural Intelligence
                        </Link>
                        <Link to="/ai-services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All AI Services →
                        </Link>
                      </div>
                    </div>

                    {/* IT Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">IT Services</h4>
                      <div className="space-y-2">
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cloud Infrastructure
                        </Link>
                        <Link to="/blockchain-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Blockchain Development
                        </Link>
                        <Link to="/iot-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          IoT Solutions
                        </Link>
                        <Link to="/ar-vr-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AR/VR Development
                        </Link>
                        <Link to="/devops-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          DevOps Solutions
                        </Link>
                        <Link to="/mobile-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Mobile Development
                        </Link>
                        <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All IT Services →
                        </Link>
                      </div>
                    </div>

                    {/* Micro SAAS */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
                      <div className="space-y-3">
                        <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Analytics Pro
                        </Link>
                        <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Security Shield
                        </Link>
                        <Link to="/zion-inventory-manager-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Inventory Manager
                        </Link>
                        <Link to="/zion-hr-management-suite" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          HR Management Suite
                        </Link>
                        <Link to="/zion-ecommerce-optimizer" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          E-commerce Optimizer
                        </Link>
                        <Link to="/zion-ai-chatbot-builder" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Chatbot Builder
                        </Link>
                        <Link to="/ai-voice-assistant-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Voice Assistant Pro
                        </Link>
                        <Link to="/ai-image-recognition-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Image Recognition Pro
                        </Link>
                        <Link to="/ai-fraud-detection-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Fraud Detection Pro
                        </Link>
                        <Link to="/ai-climate-solutions-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Climate Solutions Pro
                        </Link>
                        <Link to="/ai-agricultural-intelligence-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Agricultural Intelligence Pro
                        </Link>
                        <Link to="/micro-saas" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All Micro SAAS →
                        </Link>
                      </div>
                    </div>

                    {/* 5G Solutions */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">5G Solutions</h4>
                      <div className="space-y-2">
                        <Link to="/5g-data-analytics" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          5G Data Analytics
                        </Link>
                        <Link to="/5g-edge-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          5G Edge Computing
                        </Link>
                        <Link to="/5g-iot-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          5G IoT Solutions
                        </Link>
                        <Link to="/5g-smart-city-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Smart City Solutions
                        </Link>
                        <Link to="/5g-private-networks" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Private Networks
                        </Link>
                        <Link to="/5g-solutions" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          View All 5G Solutions →
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
                      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <p className="text-gray-300 text-sm">
                          © 2024 Zion Tech Group. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400 text-xs">
                          <span>Made with</span>
                          <span className="text-red-400">❤️</span>
                          <span>in Delaware, USA</span>
                        </div>
                      </div>
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
                        <Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Accessibility
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
