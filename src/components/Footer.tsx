import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Facebook, 
  Instagram,
  ArrowUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-zion-blue-light/5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-zion-cyan rounded-lg flex items-center justify-center">
                <span className="text-zion-blue-dark font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light text-sm">The Future of Tech & AI</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3">
              <Link to="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">AI & Machine Learning</Link>
              <Link to="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link>
              <Link to="/cloud-devops-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link>
              <Link to="/digital-transformation" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link>
              <Link to="/emerging-tech-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Emerging Tech</Link>
              <Link to="/ai-business-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">AI Business Solutions</Link>
              <Link to="/industry-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link>
              <Link to="/green-it" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link>
            </div>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="space-y-3 mb-8">
              <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link>
              <Link to="/careers" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link>
              <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link>
              <Link to="/contact" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link>
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <div className="space-y-3">
              <Link to="/blog" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link>
              <Link to="/white-papers" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link>
              <Link to="/case-studies" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link>
              <Link to="/events" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link>
              <Link to="/webinars" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link>
              <Link to="/help-center" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-zion-slate-light">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">Sitemap</Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-zion-cyan text-zion-blue-dark rounded-full flex items-center justify-center shadow-lg shadow-zion-cyan/30 hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;