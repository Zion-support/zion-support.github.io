import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  Zap,
  ArrowUp
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Growth</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. We help businesses leverage cutting-edge technology 
              to drive innovation and growth.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a 
                  href="tel:+13024640950" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">
                  United States
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-zion-cyan font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-zion-cyan font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-slate-dark hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zion-slate-light hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-slate-dark hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-zion-slate-light hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-slate-dark hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zion-slate-light hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-slate-dark hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-zion-slate-light hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-slate-dark hover:bg-zion-cyan rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-zion-slate-light hover:text-white transition-colors" />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-purple/20 text-zion-slate-light hover:bg-zion-purple/30 hover:text-zion-cyan rounded-lg transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20 bg-zion-slate-darkest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-2">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}