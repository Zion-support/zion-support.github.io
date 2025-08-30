import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
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
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
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
  Cpu,
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
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette
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
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
              From quantum computing to healthcare genomics, we deliver the future of technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/ai-quantum-financial-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Quantum Financial Platform</Link></li>
              <li><Link to="/services/ai-space-technology-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Space Technology Platform</Link></li>
              <li><Link to="/services/ai-healthcare-genomics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Healthcare Genomics Platform</Link></li>
              <li><Link to="/services/ai-enterprise-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Enterprise Orchestrator</Link></li>
              <li><Link to="/services/ai-cybersecurity-suite" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Cybersecurity Suite</Link></li>
              <li><Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">View All Services →</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Healthcare Tech</Link></li>
              <li><Link to="/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Financial Solutions</Link></li>
              <li><Link to="/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Manufacturing</Link></li>
              <li><Link to="/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Retail Solutions</Link></li>
              <li><Link to="/government" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Government</Link></li>
              <li><Link to="/education" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Education</Link></li>
              <li><Link to="/startup" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Startup Solutions</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h3 className="text-zion-cyan font-semibold text-lg flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
              <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Phone</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/blog" className="hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/docs" className="hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="hover:text-zion-cyan transition-colors">Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/help" className="hover:text-zion-cyan transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-zion-cyan transition-colors">Contact Support</Link></li>
                <li><Link to="/training" className="hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/faq" className="hover:text-zion-cyan transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
                <li><Link to="/security" className="hover:text-zion-cyan transition-colors">Security</Link></li>
                <li><Link to="/compliance" className="hover:text-zion-cyan transition-colors">Compliance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-zion-cyan font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-zion-slate-light">
                <li><Link to="/marketplace" className="hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                <li><Link to="/talent" className="hover:text-zion-cyan transition-colors">Talent Network</Link></li>
                <li><Link to="/community" className="hover:text-zion-cyan transition-colors">Community</Link></li>
                <li><Link to="/research-development" className="hover:text-zion-cyan transition-colors">R&D</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-blue-darker border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Empowering Innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Accessibility</Link>
              <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-white"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}