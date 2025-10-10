import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</a></li>
              <li><a href="/cloud-services" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Computing</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
              <li><a href="/gdpr" className="text-gray-300 hover:text-cyan-400 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Delaware, USA | +1-302-464-0950
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;