import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-500-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Leading the future of technology with innovative solutions, 
              cutting-edge AI, and transformative digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-300">hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
                <span className="text-slate-300">
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-500 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-300 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-500 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}