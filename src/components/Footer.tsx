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
  ChevronDown
} from 'lucide-react';

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['company']));

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('scroll-to-top');
      if (scrollToTopButton) {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.remove('hidden');
        } else {
          scrollToTopButton.classList.add('hidden');
        }
      }
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & News', href: '/press' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital' },
        { name: 'IT Consulting', href: '/services/consulting' },
        { name: 'Micro SAAS', href: '/services/micro-saas' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Request Quote', href: '/request-quote' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/Zion-Holdings" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+13024640950" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                  All Services
                </Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Newsletter</h4>
              <p className="text-sm text-gray-400">
                Stay updated with our latest insights and technology trends.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 opacity-0 pointer-events-none"
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;