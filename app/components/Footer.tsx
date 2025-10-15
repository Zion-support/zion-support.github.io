import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <span className="text-cyan-400">📧</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <span className="text-cyan-400">📞</span>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <span className="text-cyan-400">📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">All AI Services</Link></li>
              <li><Link to="/ai-video-generator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🎬 Video Generator</Link></li>
              <li><Link to="/ai-code-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">💻 Code Assistant</Link></li>
              <li><Link to="/ai-translator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🌍 Translator</Link></li>
              <li><Link to="/ai-data-scientist-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">📊 Data Scientist</Link></li>
              <li><Link to="/ai-cybersecurity-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🛡️ Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">All IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">☁️ Cloud Infrastructure</Link></li>
              <li><Link to="/quantum-computing-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">⚛️ Quantum Computing</Link></li>
              <li><Link to="/edge-computing-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🌐 Edge Computing</Link></li>
              <li><Link to="/augmented-reality-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🥽 AR Solutions</Link></li>
              <li><Link to="/virtual-reality-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🥽 VR Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">All Micro SAAS</Link></li>
              <li><Link to="/ai-chatbot-builder-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🤖 Chatbot Builder</Link></li>
              <li><Link to="/ai-seo-optimizer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🔍 SEO Optimizer</Link></li>
              <li><Link to="/ai-image-generator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🎨 Image Generator</Link></li>
              <li><Link to="/ai-voice-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">🎙️ Voice Assistant</Link></li>
              <li><Link to="/ai-project-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">📋 Project Manager</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Accessibility</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Pricing</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;