import React from "react;";,
import { BrowserRouter } from "react-router-dom;";
import { HelmetProvider } from "react-helmet-async;";
import { AnalyticsProvider } from "./components/AnalyticsProvider;";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor;"
// import LoadingSpinner from "./components/LoadingSpinner; // Removed unused import;";
import { ErrorBoundary } from "react-error-boundary;";
import ErrorFallback from "./components/ErrorFallback;";
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;";
import { ArrowRight } from "lucide-react;";
import MobileNavigation from "./components/MobileNavigation;";
import EnhancedNavigation from "./components/EnhancedNavigation;

interface LayoutProps {;
  children: React.ReactNode;
}
;,;,;,;,
const Layout: React.FC<LayoutProps> = ({ children }) => {;,;,;,;,
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}></ErrorBoundary><//ErrorBoundary><///ErrorBoundary><////ErrorBoundary>
      <HelmetProvider></HelmetProvider><//HelmetProvider><///HelmetProvider><////HelmetProvider>
        <BrowserRouter></BrowserRouter><//BrowserRouter><///BrowserRouter><////BrowserRouter>
          <AnalyticsProvider></AnalyticsProvider><//AnalyticsProvider><///AnalyticsProvider><////AnalyticsProvider>
            <EnhancedPerformanceMonitor showInProduction={false} />
            <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
              <title>Zion Tech Group - Advanced AI and IT Solutions</title><//title><///title><////title></////title>
              <meta;";
                name="description;";
                content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses."
              />
              <meta;";
                name="keywords;";
                content="AI solutions, IT services, digital transformation, business automation, technology consulting"
              />
            </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"></div>"
              {/* Animated Background */}"
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>"
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div><//div><///div><////div></////div>
              
              <EnhancedNavigation />

              <main>{children}</main><//main><///main><////main></////main>

              <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">"
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"></div>"
                    {/* Company Info */}"
                    <div className="lg:col-span-2 space-y-6">"
                      <h3 className="text-2xl font-bold text-white">"
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>;,;,;,";,
                          Zion Tech Group"
                        </span><//span>"
                      </h3>"
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md"></p>;";
                        Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
                      </p>"
                      <div className="flex space-x-4">"
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">"
                          <span className="text-white text-sm font-bold">Z</span><//span>"
                        </div>"
                        <div className="flex flex-col justify-center">"
                          <span className="text-white text-sm font-semibold">Trusted by 10,000+</span>"
                          <span className="text-gray-400 text-xs">Businesses Worldwide</span><//span><///span><////span></////span>
                        </div><//div><///div><////div></////div>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>

                    {/* AI Services */}"
                    <div className="space-y-4">"
                      <h4 className="text-lg font-semibold text-white">AI Services</h4>"
                      <div className="space-y-3">"
                        <Link to="/ai-business-intelligence" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Business Intelligence"
                        </Link>"
                        <Link to="/ai-customer-support" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Customer Support"
                        </Link>"
                        <Link to="/ai-content-generation" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Content Generation"
                        </Link>"
                        <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Cybersecurity"
                        </Link>"
                        <Link to="/ai-voice-assistant-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Voice AI Assistant"
                        </Link>"
                        <Link to="/ai-image-recognition-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Image Recognition"
                        </Link>"
                        <Link to="/ai-fraud-detection-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Fraud Detection"
                        </Link>"
                        <Link to="/ai-services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"></Link>;,;,;,;,
                          View All AI Services →
                        </Link><//Link><///Link><////Link></////Link>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>

                    {/* IT Services */}"
                    <div className="space-y-4">"
                      <h4 className="text-lg font-semibold text-white">IT Services</h4>"
                      <div className="space-y-2">"
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Cloud Infrastructure"
                        </Link>"
                        <Link to="/blockchain-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Blockchain Development"
                        </Link>"
                        <Link to="/iot-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          IoT Solutions"
                        </Link>"
                        <Link to="/ar-vr-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          AR/VR Development"
                        </Link>"
                        <Link to="/devops-solutions" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          DevOps Solutions"
                        </Link>"
                        <Link to="/mobile-development" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Mobile Development"
                        </Link>"
                        <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"></Link>;,;,;,;,
                          View All IT Services →
                        </Link><//Link><///Link><////Link></////Link>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>

                    {/* Micro SAAS */}"
                    <div className="space-y-4">"
                      <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>"
                      <div className="space-y-3">"
                        <Link to="/zion-analytics-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Zion Analytics Pro"
                        </Link>"
                        <Link to="/zion-security-shield" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Zion Security Shield"
                        </Link>"
                        <Link to="/zion-inventory-manager-pro" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Inventory Manager"
                        </Link>"
                        <Link to="/zion-hr-management-suite" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          HR Management Suite"
                        </Link>"
                        <Link to="/zion-ecommerce-optimizer" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          E-commerce Optimizer"
                        </Link>"
                        <Link to="/zion-ai-chatbot-builder" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          AI Chatbot Builder"
                        </Link>"
                        <Link to="/micro-saas" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"></Link>;,;,;,;,
                          View All Micro SAAS →
                        </Link><//Link><///Link><////Link></////Link>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>

                    {/* Company & Resources */}"
                    <div className="space-y-4">"
                      <h4 className="text-lg font-semibold text-white">Company</h4>"
                      <div className="space-y-3">"
                        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          About Us"
                        </Link>"
                        <Link to="/team" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Our Team"
                        </Link>"
                        <Link to="/careers" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Careers"
                        </Link>"
                        <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Case Studies"
                        </Link>"
                        <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Blog"
                        </Link>"
                        <Link to="/contact" className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"></Link>;,;,;,;,
                          Contact Us →
                        </Link><//Link><///Link><////Link></////Link>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>
                  </div><//div><///div><////div></////div>

                  {/* Contact Information */}"
                  <div className="border-t border-white/10 pt-8 mb-8">"
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
                      <div className="flex items-center space-x-3">"
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">"
                          <span className="text-white text-sm">@</span><//span><///span>"
                        </div><//div>"
                        <div>"
                          <p className="text-white text-sm font-medium">Email</p>"
                          <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p><//p><///p>"
                        </div><//div>"
                      </div>"
                      <div className="flex items-center space-x-3">"
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">"
                          <span className="text-white text-sm">📞</span><//span><///span>"
                        </div><//div>"
                        <div>"
                          <p className="text-white text-sm font-medium">Phone</p>"
                          <p className="text-gray-300 text-sm">+1 302 464 0950</p><//p><///p>"
                        </div><//div>"
                      </div>"
                      <div className="flex items-start space-x-3">"
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5">"
                          <span className="text-white text-sm">📍</span><//span><///span>"
                        </div><//div>"
                        <div>"
                          <p className="text-white text-sm font-medium">Address</p>"
                          <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p><//p><///p><////p></////p>
                        </div><//div><///div><////div></////div>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>
                  </div><//div><///div><////div></////div>

                  {/* Bottom Bar */}"
                  <div className="border-t border-white/10 pt-8">"
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
                      <p className="text-gray-300 text-sm"></p><//p>"
                        © 2024 Zion Tech Group. All rights reserved."
                      </p>"
                      <div className="flex flex-wrap gap-6">"
                        <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Privacy Policy"
                        </Link>"
                        <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Terms of Service"
                        </Link>"
                        <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;,;,;";,
                          Cookie Policy"
                        </Link>"
                        <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"></Link>;
                          Sitemap
                        </Link><//Link><///Link><////Link></////Link>
                      </div><//div><///div><////div></////div>
                    </div><//div><///div><////div></////div>
                  </div><//div><///div><////div></////div>
                </div><//div><///div><////div></////div>
              </footer><//footer><///footer><////footer></////footer>
            </div><//div><///div><////div></////div>
          </AnalyticsProvider><//AnalyticsProvider><///AnalyticsProvider><////AnalyticsProvider></////AnalyticsProvider>
        </BrowserRouter><//BrowserRouter><///BrowserRouter><////BrowserRouter></////BrowserRouter>
      </HelmetProvider><//HelmetProvider><///HelmetProvider><////HelmetProvider></////HelmetProvider>
    </ErrorBoundary><//ErrorBoundary><///ErrorBoundary><////ErrorBoundary></////ErrorBoundary>
  );
};

export default Layout;
