import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp,
  Heart
} from 'lucide-react';

export const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-zion-cyan/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION TECH
              </span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed">
              Pioneering the future of technology with cutting-edge AI, quantum computing, 
              and innovative solutions that transform businesses and industries.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-zion-slate-light/10 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 bg-zion-slate-light/10 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
              </a>
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-zion-slate-light/10 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/ai-services" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link 
                  to="/quantum-computing" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link 
                  to="/cybersecurity" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link 
                  to="/cloud-devops" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link 
                  to="/blockchain" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Blockchain & Web3
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/enterprise" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/healthcare" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Healthcare Tech
                </Link>
              </li>
              <li>
                <Link 
                  to="/fintech" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  FinTech Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/manufacturing" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Smart Manufacturing
                </Link>
              </li>
              <li>
                <Link 
                  to="/space-tech" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                >
                  Space Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">Silicon Valley, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light text-sm">ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-zion-slate-light/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>© 2025 ZION Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">for the future</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                to="/sitemap" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};