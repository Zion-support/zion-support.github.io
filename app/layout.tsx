import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MobileNavigation from "./components/MobileNavigation";
import HomePage from "./page";
import { LoadingPage } from "./components/LoadingStates";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./about/page"));
const ContactPage = React.lazy(() => import("./contact/page"));
const ServicesPage = React.lazy(() => import("./services/page"));
const MicroSaasPage = React.lazy(() => import("./micro-saas/page"));
const AIServicesPage = React.lazy(() => import("./ai-services/page"));
const ZionAnalyticsProPage = React.lazy(() => import("./zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./zion-security-shield/page"));

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white group">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        Zion Tech Group
                      </span>
                    </Link>
                    <nav className="hidden lg:flex space-x-8">
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                      <div className="relative group">
                        <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                          Services
                          <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="p-4 space-y-3">
                            <Link to="/services" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">All Services</div>
                              <div className="text-sm text-gray-300">Complete overview</div>
                            </Link>
                            <Link to="/ai-services" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">AI Services</div>
                              <div className="text-sm text-gray-300">AI-powered solutions</div>
                            </Link>
                            <Link to="/micro-saas" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">Micro SAAS</div>
                              <div className="text-sm text-gray-300">Ready-to-use software</div>
                            </Link>
                            <Link to="/5g-solutions" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">5G Solutions</div>
                              <div className="text-sm text-gray-300">Next-gen connectivity</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="relative group">
                        <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                          Solutions
                          <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="p-4 space-y-3">
                            <Link to="/zion-analytics-pro" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">Zion Analytics Pro</div>
                              <div className="text-sm text-gray-300">AI business intelligence</div>
                            </Link>
                            <Link to="/zion-security-shield" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">Zion Security Shield</div>
                              <div className="text-sm text-gray-300">Advanced cybersecurity</div>
                            </Link>
                            <Link to="/zion-cloud-vault" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">Zion Cloud Vault</div>
                              <div className="text-sm text-gray-300">Secure cloud storage</div>
                            </Link>
                            <Link to="/zion-ai-assistant" className="block text-white hover:text-cyan-400 transition-colors">
                              <div className="font-semibold">Zion AI Assistant</div>
                              <div className="text-sm text-gray-300">Intelligent automation</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                      >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/contact"
                        className="hidden sm:flex group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <MobileNavigation />
                    </div>
                  </div>
                </div>
              </header>

              <main>
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                  </Routes>
                </Suspense>
              </main>

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
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                        Transform your operations with cutting-edge technology and innovative solutions.
                      </p>
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">Z</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          <div className="font-semibold">Trusted by 10,000+ businesses</div>
                          <div>99.9% uptime SLA</div>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Services</h4>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          AI Services
                        </Link>
                        <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Micro SAAS
                        </Link>
                        <Link to="/5g-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          5G Solutions
                        </Link>
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cloud Infrastructure
                        </Link>
                        <Link to="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Cybersecurity
                        </Link>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Solutions</h4>
                      <div className="space-y-2">
                        <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Analytics Pro
                        </Link>
                        <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Security Shield
                        </Link>
                        <Link to="/zion-cloud-vault" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Cloud Vault
                        </Link>
                        <Link to="/zion-ai-assistant" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion AI Assistant
                        </Link>
                        <Link to="/zion-marketing-hub" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Zion Marketing Hub
                        </Link>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Company</h4>
                      <div className="space-y-2">
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          About Us
                        </Link>
                        <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Careers
                        </Link>
                        <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Blog
                        </Link>
                        <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Case Studies
                        </Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Section */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">@</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <p className="text-cyan-400 text-sm">kleber@ziontechgroup.com</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">📞</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">Phone</h3>
                        <p className="text-cyan-400 text-sm">+1 302 464 0950</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-lg">📍</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">Address</h3>
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
