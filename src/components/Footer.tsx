import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
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
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  ArrowUp,
  Heart,
  Star,
  CheckCircle,
  Award,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown,
} from 'lucide-react';

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      // Scroll to top functionality can be implemented here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle section expansion (for mobile)
  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Solutions</p>
              </div>
            </div>
            <p className="text-zion-slate-light text-sm">
              Empowering businesses with cutting-edge technology solutions, AI automation, and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cloud FinOps Optimizer
                </Link>
              </li>
              <li>
                <Link to="/services/zero-trust-security" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Zero Trust Security
                </Link>
              </li>
              <li>
                <Link to="/services/devops-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  DevOps Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-zion-cyan" />
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Manufacturing Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                  Explore Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-zion-cyan" />
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                  Read Our Blog →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zion-purple/20">
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <FileText className="w-5 h-5 mr-2 text-zion-cyan" />
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-zion-cyan" />
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-zion-cyan" />
              Contact Info
            </h4>
            <div className="space-y-2 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy-policy" className="hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-zion-purple/20 border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/30 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}