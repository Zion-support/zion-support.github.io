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
        { name: 'Quantum AI Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom }
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
        { name: 'Infrastructure', path: '/services/infrastructure', icon: Server },
        { name: 'API Development', path: '/services/api-development', icon: Code },
        { name: 'Database Solutions', path: '/services/database-solutions', icon: Database },
        { name: 'Network Security', path: '/services/network-security', icon: Network },
        { name: 'Onsite Support', path: '/services/onsite-support', icon: Users }
      ]
    },
    {
      title: 'Resources & Support',
      icon: FileText,
      links: [
        { name: 'Blog & Insights', path: '/blog', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: TestTube },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Cpu },
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Training & Certification', path: '/training', icon: GraduationCap }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Innovating the Future</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading the way in AI, quantum computing, and advanced technology solutions. 
              Empowering businesses to transform and thrive in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
                    >
                      <link.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 1000+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
}
