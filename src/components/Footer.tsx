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
  Server
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
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      links: [
        { name: 'AI Solutions Overview', path: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'Quantum AI Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom },
        { name: 'New Services 2025', path: '/new-services-2025', icon: Star },
        { name: 'Enhanced Services 2025', path: '/enhanced-new-services-2025', icon: Star }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum AI Trading', path: '/services/quantum-ai-trading-platform', icon: Atom },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Heart },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Lock },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'API Development', path: '/services/api-development', icon: Code },
        { name: 'Database Solutions', path: '/services/database-solutions', icon: Database },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network },
        { name: 'Server Management', path: '/services/server-management', icon: Server },
        { name: 'Training & Education', path: '/training', icon: GraduationCap },
        { name: 'Support & Helpdesk', path: '/support', icon: HelpCircle }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: Activity },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Code },
        { name: 'Sitemap', path: '/sitemap', icon: Map },
        { name: 'Comprehensive Sitemap', path: '/comprehensive-sitemap', icon: Map }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <motion.button
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded p-2"
                aria-expanded={activeSection === section.title}
              >
                <section.icon className="w-5 h-5" />
                <span>{section.title}</span>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{ height: activeSection === section.title ? 'auto' : 0, opacity: activeSection === section.title ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Follow Us</span>
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset`}
                    aria-label={`Follow us on ${social.name}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
