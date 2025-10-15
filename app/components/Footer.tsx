import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ServicesSection, 
  AIServicesSection, 
  ZionAIToolsSection, 
  CompanySection, 
  ResourcesSection 
} from './FooterSections';

const Footer: React.FC = memo(() => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative z-10 glass-card">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 holographic-text font-['Orbitron'] cyber-glitch" data-text="ZION TECH GROUP">ZION TECH GROUP</h3>
              <p className="text-gray-300 mb-6 leading-relaxed matrix-text">
                Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center"><strong className="text-cyan-400 mr-2">📞</strong> <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors neon-glow">+1 302 464 0950</a></p>
                <p className="flex items-center"><strong className="text-cyan-400 mr-2">✉️</strong> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
                <p className="flex items-center"><strong className="text-cyan-400 mr-2">📍</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="flex items-center"><strong className="text-cyan-400 mr-2">🌐</strong> <a href="https://ziontechgroup.com" className="hover:text-cyan-300 transition-colors">https://ziontechgroup.com</a></p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-300 transition-colors neon-glow p-2 rounded-lg hover:bg-cyan-500/10">
                  <span className="sr-only">Website</span>
                  <svg className="h-6 w-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
            </div>
          
          <ServicesSection />
          
          <AIServicesSection />
          
          <ZionAIToolsSection />
          
          
          <CompanySection />
          
          <ResourcesSection />
        </div>
        
          <div className="mt-16 pt-8 border-t border-cyan-500/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
                <p className="mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
                <p className="mb-2">
                  📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
                </p>
                <p className="mb-2">
                  ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
                </p>
                <p>
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;