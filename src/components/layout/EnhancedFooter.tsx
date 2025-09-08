import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowUp,
  Microchip
} from 'lucide-react';

export const EnhancedFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-blue-darker border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation & Excellence</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI, IT services, and innovative micro SAAS solutions. 
              We transform ideas into powerful, scalable technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-zion-blue-dark rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Star className="w-3 h-3 mr-2" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Brain className="w-3 h-3 mr-2" />
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Server className="w-3 h-3 mr-2" />
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Shield className="w-3 h-3 mr-2" />
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Target className="w-3 h-3 mr-2" />
                  AI Healthcare
                </Link>
              </li>
              <li>
                <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  Supply Chain AI
                </Link>
              </li>
              <li>
                <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Microchip className="w-3 h-3 mr-2" />
                  Quantum AI Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-zion-cyan" />
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/healthcare-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Healthcare & Life Sciences
                </Link>
              </li>
              <li>
                <Link to="/financial-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/manufacturing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Manufacturing & Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/retail-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/data-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link to="/enterprise-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-zion-cyan" />
              Company
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Partners
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-zion-cyan" />
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/whitepapers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-zion-cyan mt-1" />
              <div>
                <h5 className="text-white font-medium mb-1">Phone</h5>
                <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-zion-cyan mt-1" />
              <div>
                <h5 className="text-white font-medium mb-1">Email</h5>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-zion-cyan mt-1" />
              <div>
                <h5 className="text-white font-medium mb-1">Address</h5>
                <p className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};