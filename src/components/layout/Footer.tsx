import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  Github,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowUp,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI, IT solutions, and innovative micro SAAS platforms. 
              Transforming the future of technology, one solution at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-zion-slate-light">
                <Phone className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Mail className="w-4 h-4 mr-3 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-zion-slate-light">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-zion-cyan flex-shrink-0" />
                <span className="leading-relaxed">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Financial
                </Link>
              </li>
              <li>
                <Link to="/solutions/education" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/solutions/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Government
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/solutions/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Quantum Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
              <Building2 className="w-4 h-4 mr-2" />
              Company
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
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
            </ul>

            <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-purple/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. 
              <span className="mx-2">Made with</span>
              <Heart className="inline w-4 h-4 text-red-500" />
              <span className="ml-1">in Delaware, USA</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}