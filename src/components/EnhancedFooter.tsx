import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Zap,
  Brain,
  Server,
  Rocket,
  Shield,
  Atom,
  Heart,
  Leaf,
  BookOpen,
  Users,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Star
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Content Intelligence', href: '/services/ai-content-intelligence-platform' },
        { name: 'AI Customer Success Predictor', href: '/services/ai-customer-success-predictor' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostic-assistant' },
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection-engine' }
      ]
    },
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

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
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
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-blue-400 text-sm">Innovating Tomorrow</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI, IT, and Micro SAAS solutions. 
              We transform businesses through innovative technology and strategic digital transformation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 text-blue-400 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 text-blue-400 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mr-3 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 text-blue-400 mr-3" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {contactInfo.website}
                </a>
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
                  className="w-10 h-10 bg-white/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                {category.title === 'AI Services' && <Brain className="w-5 h-5 text-purple-400 mr-2" />}
                {category.title === 'IT Services' && <Server className="w-5 h-5 text-blue-400 mr-2" />}
                {category.title === 'Micro SAAS' && <Rocket className="w-5 h-5 text-green-400 mr-2" />}
                {category.title === 'Emerging Tech' && <Atom className="w-5 h-5 text-orange-400 mr-2" />}
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                Quick Links
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.slice(0, 5).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support & Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
                Support & Resources
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {supportLinks.slice(0, 5).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Featured Services
              </h4>
              <div className="space-y-3">
                <Link
                  to="/innovative-services-showcase-2026"
                  className="block p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium text-sm">Innovative Services 2026</div>
                      <div className="text-gray-400 text-xs">Cutting-edge solutions</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </Link>
                <Link
                  to="/comprehensive-pricing-guide-2026"
                  className="block p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium text-sm">Pricing Guide 2026</div>
                      <div className="text-gray-400 text-xs">Transparent pricing</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
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
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
