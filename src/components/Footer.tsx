import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  TrendingUp,
  Briefcase,
  Newspaper,
  Target,
  Heart,
  DollarSign
=======
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>
            </Link>
            <p className="text-gray-300 mb-6">
              Pioneering the future of technology with innovative AI, IT, and Micro SaaS solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400">Micro SaaS</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-cyan-400">Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400">Careers</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-cyan-400">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
>>>>>>> merge-all-prs-20250904-105408
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Brain,
  Shield,
<<<<<<< HEAD
  Code,
  Building2,
  FileText,
=======
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-fe38
>>>>>>> merge-all-prs-20250904-105408
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
<<<<<<< HEAD
  ArrowUp,
  ExternalLink,
  Clock,
  Award,
=======
<<<<<<< HEAD
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
=======
  ArrowUp,
  Heart,
>>>>>>> merge-all-prs-20250904-105408
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-fe38
>>>>>>> merge-all-prs-20250904-105408
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
<<<<<<< HEAD
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown
>>>>>>> origin/main
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the future of technology with innovative AI solutions, 
              quantum computing, and cutting-edge digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/enterprise" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/finance" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Retail Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Newspaper className="w-4 h-4 mr-2" />
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}