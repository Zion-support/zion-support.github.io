import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'AI Services', href: '/services#ai' },
      { name: 'IT Services', href: '/services#it' },
      { name: 'Micro SaaS', href: '/services#saas' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zion-blue-dark to-black"></div>
      <div className="absolute inset-0 bg-quantum-mesh opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${25 + Math.random() * 15}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl opacity-50 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Technology • Future</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-zion-cyan/20 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <span>View Pricing</span>
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with innovation by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Built with ❤️ using React, TypeScript, and Vite
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;