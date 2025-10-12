'use client';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📞</span>
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✉</span>
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <span className="font-medium">364 E Main St STE 1008</span><br />
                  <span className="text-gray-400">Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-cyan-400">AI Services</h3>
            <ul className="space-y-3">
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Analytics</a></li>
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Automation</a></li>
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Chatbots</a></li>
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Computer Vision</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-cyan-400">IT Services</h3>
            <ul className="space-y-3">
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Infrastructure</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">DevOps & CI/CD</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cybersecurity</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Web Development</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">Z</span>
              </div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 gap-y-2">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Terms of Service</a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
