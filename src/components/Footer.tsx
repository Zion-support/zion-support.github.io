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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of AI-powered solutions, quantum computing, and micro SAAS services for modern businesses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-md"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Cloud Computing</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Web Development</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Mobile Development</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Data Analytics</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">DevOps & Automation</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Team</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Partners</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Press Kit</Link></li>
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Our Mission</Link></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Technical Support</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">System Status</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">API Documentation</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">Case Studies</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors hover:translate-x-1 inline-block">White Papers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
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