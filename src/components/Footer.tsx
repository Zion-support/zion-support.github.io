import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  Star,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Satellite,
  Leaf,
  Gamepad2,
  Bot,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Settings
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Company',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Awards', path: '/about/awards', icon: Award },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      links: [
        { name: 'AI & ML Solutions', path: '/services/ai-ml-solutions', icon: Brain },
        { name: 'Blockchain & Web3', path: '/services/blockchain-web3', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'Cybersecurity Tools', path: '/services/cybersecurity-tools', icon: Shield },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3 },
        { name: 'IoT & Edge', path: '/services/iot-edge', icon: Activity },
        { name: 'FinTech Solutions', path: '/services/fintech', icon: DollarSign },
        { name: 'HealthTech', path: '/services/healthtech', icon: Heart },
        { name: 'GreenTech', path: '/services/greentech', icon: Leaf },
        { name: 'SpaceTech', path: '/services/spacetech', icon: Satellite },
        { name: 'Metaverse Platform', path: '/services/metaverse', icon: Gamepad2 },
        { name: 'Autonomous Systems', path: '/services/autonomous', icon: Bot }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      links: [
        { name: 'Infrastructure Solutions', path: '/services/infrastructure', icon: Server },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'Enterprise Solutions', path: '/services/enterprise', icon: Building },
        { name: 'Managed Services', path: '/services/managed-services', icon: Monitor },
        { name: 'Consulting', path: '/services/consulting', icon: Briefcase },
        { name: 'Integration Services', path: '/services/integration', icon: Code },
        { name: 'Support & Maintenance', path: '/services/support-maintenance', icon: Settings }
      ]
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      links: [
        { name: 'Machine Learning', path: '/services/machine-learning', icon: Brain },
        { name: 'Natural Language Processing', path: '/services/nlp', icon: FileText },
        { name: 'Computer Vision', path: '/services/computer-vision', icon: Eye },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics', icon: TrendingUp },
        { name: 'AI Automation', path: '/services/ai-automation', icon: Zap },
        { name: 'AI Consulting', path: '/services/ai-consulting', icon: Users },
        { name: 'AI Infrastructure', path: '/services/ai-infrastructure', icon: Database },
        { name: 'AI Integration', path: '/services/ai-integration', icon: Code },
        { name: 'AI Security', path: '/services/ai-security', icon: Lock },
        { name: 'AI Ethics', path: '/services/ai-ethics', icon: Shield },
        { name: 'Quantum AI', path: '/services/quantum-ai', icon: Atom },
        { name: 'Edge AI', path: '/services/edge-ai', icon: Smartphone }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Target,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'AI Business Intelligence', path: '/solutions/ai-business-intelligence', icon: Brain },
        { name: 'Quantum AI Platform', path: '/solutions/quantum-ai-platform', icon: Atom },
        { name: 'Digital Twin Solutions', path: '/solutions/digital-twin', icon: Eye },
        { name: 'Zero Trust Security', path: '/solutions/zero-trust-security', icon: Shield },
        { name: 'Smart City Solutions', path: '/solutions/smart-city', icon: Building },
        { name: 'Healthcare Technology', path: '/solutions/healthcare-tech', icon: Heart },
        { name: 'Financial Technology', path: '/solutions/fintech', icon: DollarSign },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/solutions/retail-tech', icon: ShoppingCart }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: TestTube },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Training', path: '/training', icon: GraduationCap },
        { name: 'Support', path: '/support', icon: HelpCircle },
        { name: 'Helpdesk', path: '/help', icon: HelpCircle }
      ]
    }
  ];

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              {/* Section Header - Mobile Collapsible */}
              <div className="lg:hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <div className="flex items-center space-x-2">
                    <section.icon className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                  </div>
                  {activeSection === section.title ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Section Header - Desktop */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-2 mb-4">
                  <section.icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                </div>
              </div>

              {/* Section Links */}
              <div className={`lg:block ${activeSection === section.title ? 'block' : 'hidden'}`}>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-cyan-400" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Leading provider of innovative technology solutions, AI services, and digital transformation 
                services for enterprises worldwide. Transforming businesses through cutting-edge technology.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Social */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center space-x-2 border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 font-medium"
                  >
                    <span>View Pricing</span>
                    <DollarSign className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
