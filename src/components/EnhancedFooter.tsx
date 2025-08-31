import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Cpu,
  Atom,
  Cloud,
  Lock,
  Target,
  TrendingUp,
  Lightbulb,
  Code,
  Server,
  Database,
  Network,
  Smartphone,
  Building,
  Heart,
  Award,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail as MailIcon,
  Calendar,
  Clock,
  FileText,
  Briefcase,
  DollarSign,
  Truck,
  ShoppingCart,
  BookOpen,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Home
} from 'lucide-react';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: 'Zion Tech Group',
    tagline: 'Innovating Tomorrow, Today',
    description: 'Leading provider of cutting-edge technology solutions including AI, cybersecurity, quantum computing, and industry-specific innovations.',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-services' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-computing-platform' },
        { name: 'Space Technology', href: '/services/ai-space-technology-platform' },
        { name: 'Financial Technology', href: '/services/ai-financial-technology-platform' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud & DevOps', href: '/cloud-devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'All Services', href: '/comprehensive-services-showcase-2025' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Content Creation Studio', href: '/services/AI-Content-Creation-Studio-Pro' },
        { name: 'AI Contract Analysis Platform', href: '/services/ai-intelligent-contract-analysis-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-platform' },
        { name: 'IT Infrastructure Management', href: '/services/it-infrastructure-management-platform' },
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform' },
        { name: 'Adaptive Learning Platform', href: '/services/adaptive-learning-platform' },
        { name: 'Sustainable Energy Optimizer', href: '/services/sustainable-energy-optimizer' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2025' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'System Status', href: '/status' },
        { name: 'API Documentation', href: '/api' },
        { name: 'Developer Portal', href: '/developer-portal' },
        { name: 'Community', href: '/community' },
        { name: 'Contact Support', href: '/contact' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2026', href: '/innovative-services-showcase-2026' },
    { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026' },
    { name: 'Enhanced Services 2025', href: '/enhanced-services-showcase-2025' },
    { name: 'Cutting-Edge Services 2029', href: '/zion-cutting-edge-services-2029' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog & News', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Portal', href: '/developer-portal' },
    { name: 'Training & Webinars', href: '/training' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Request Quote', href: '/request-quote' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = [
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-blue-400 text-sm">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <contact.icon className="w-4 h-4 text-blue-400 mr-3" />
                  <a href={contact.href} className="hover:text-white transition-colors">
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                {section.title === 'Services' && <Rocket className="w-5 h-5 text-blue-400 mr-2" />}
                {section.title === 'Micro SAAS' && <Zap className="w-5 h-5 text-green-400 mr-2" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-purple-400 mr-2" />}
                {section.title === 'Support' && <MessageCircle className="w-5 h-5 text-orange-400 mr-2" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {(section.links || section.services || []).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Latest Tech Insights
            </h4>
            <p className="text-gray-300 mb-6">
              Get the latest news, insights, and updates from Zion Tech Group delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
