import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="nav-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link-futuristic">
              Home
            </Link>
            <Link to="/about" className="nav-link-futuristic">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="nav-link-futuristic flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 glass-effect z-50 rounded-xl"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">AI Services</h4>
                        <div className="space-y-2">
                          <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">All AI Services</Link>
                          <Link to="/ai-video-generator-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🎬 Video Generator</Link>
                          <Link to="/ai-code-assistant-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">💻 Code Assistant</Link>
                          <Link to="/ai-translator-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🌍 Translator</Link>
                          <Link to="/ai-data-scientist-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">📊 Data Scientist</Link>
                          <Link to="/ai-cybersecurity-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🛡️ Cybersecurity</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">IT Solutions</h4>
                        <div className="space-y-2">
                          <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">All IT Services</Link>
                          <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">☁️ Cloud Infrastructure</Link>
                          <Link to="/quantum-computing-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">⚛️ Quantum Computing</Link>
                          <Link to="/edge-computing-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🌐 Edge Computing</Link>
                          <Link to="/augmented-reality-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🥽 AR Solutions</Link>
                          <Link to="/virtual-reality-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🥽 VR Solutions</Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Micro SAAS</h4>
                          <div className="space-y-2">
                            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">All Micro SAAS</Link>
                            <Link to="/ai-chatbot-builder-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🤖 Chatbot Builder</Link>
                            <Link to="/ai-seo-optimizer-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🔍 SEO Optimizer</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Consulting</h4>
                          <div className="space-y-2">
                            <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🔄 Digital Transformation</Link>
                            <Link to="/ai-consulting" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🧠 AI Consulting</Link>
                            <Link to="/robotic-process-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-lg">🤖 RPA Solutions</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <Link to="/services" className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="nav-link-futuristic">
              Pricing
            </Link>
            <Link to="/blog" className="nav-link-futuristic">
              Blog
            </Link>
            <Link to="/team" className="nav-link-futuristic">
              Team
            </Link>
            <Link to="/careers" className="nav-link-futuristic">
              Careers
            </Link>
            <Link to="/contact" className="nav-link-futuristic">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect mx-4 mt-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">All AI Services</Link>
                <Link to="/ai-video-generator-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🎬 Video Generator</Link>
                <Link to="/ai-code-assistant-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">💻 Code Assistant</Link>
                <Link to="/ai-translator-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🌍 Translator</Link>
                <Link to="/ai-data-scientist-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">📊 Data Scientist</Link>
                <Link to="/ai-cybersecurity-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🛡️ Cybersecurity</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">IT Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">All IT Services</Link>
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">☁️ Cloud Infrastructure</Link>
                <Link to="/quantum-computing-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">⚛️ Quantum Computing</Link>
                <Link to="/edge-computing-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🌐 Edge Computing</Link>
                <Link to="/augmented-reality-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🥽 AR Solutions</Link>
                <Link to="/virtual-reality-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🥽 VR Solutions</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">All Micro SAAS</Link>
                <Link to="/ai-chatbot-builder-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🤖 Chatbot Builder</Link>
                <Link to="/ai-seo-optimizer-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🔍 SEO Optimizer</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">Consulting</div>
              <div className="ml-4 space-y-1">
                <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🔄 Digital Transformation</Link>
                <Link to="/ai-consulting" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🧠 AI Consulting</Link>
                <Link to="/robotic-process-automation" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">🤖 RPA Solutions</Link>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;