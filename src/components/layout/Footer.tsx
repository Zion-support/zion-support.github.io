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
  ArrowRight,
  Rocket,
  Shield,
  Brain,
  Zap,
  Server,
  Users,
  FileText,
  HelpCircle,
  MessageCircle,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      icon: Zap,
      links: [
        { name: 'AI & Machine Learning', path: '/ai-services' },
        { name: 'Micro SAAS Solutions', path: '/micro-saas' },
        { name: 'IT Infrastructure', path: '/it-services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Quantum Computing', path: '/services/quantum-computing-solutions' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge' }
      ]
    },
    {
      title: 'Solutions',
      icon: Brain,
      links: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare' },
        { name: 'Financial Services', path: '/solutions/financial' },
        { name: 'Manufacturing', path: '/solutions/manufacturing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail' },
        { name: 'Education Technology', path: '/solutions/education' },
        { name: 'Government Solutions', path: '/solutions/government' },
        { name: 'AI-Powered Analytics', path: '/solutions/ai-analytics' },
        { name: 'Cybersecurity Framework', path: '/solutions/cybersecurity' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Updates', path: '/news' },
        { name: 'Partnerships', path: '/partnerships' },
        { name: 'Investor Relations', path: '/investors' },
        { name: 'Press Kit', path: '/press' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Documentation', path: '/documentation' },
        { name: 'Help Center', path: '/help-center' },
        { name: 'Blog & Insights', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Webinars & Events', path: '/webinars' },
        { name: 'API Reference', path: '/api' },
        { name: 'Developer Portal', path: '/developers' },
        { name: 'Training & Certification', path: '/training' }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Healthcare Platform',
      path: '/services/ai-healthcare-platform',
      price: '$2,500/month',
      description: 'Advanced AI-powered healthcare analytics and patient care optimization'
    },
    {
      name: 'AI Cybersecurity Platform',
      path: '/services/ai-cybersecurity-platform',
      price: '$3,200/month',
      description: 'Next-generation threat detection and security automation'
    },
    {
      name: 'AI Supply Chain Optimization',
      path: '/services/ai-supply-chain-optimization',
      price: '$2,800/month',
      description: 'Intelligent supply chain management and optimization'
    },
    {
      name: 'Quantum AI Hybrid Platform',
      path: '/services/ai-quantum-hybrid-platform',
      price: '$5,000/month',
      description: 'Cutting-edge quantum computing and AI integration'
    },
    {
      name: 'AI Autonomous Business Operations',
      path: '/services/ai-autonomous-business-operations',
      price: '$5,999/month',
      description: 'Fully autonomous AI systems for business process automation'
    },
    {
      name: 'Quantum AI Trading Platform',
      path: '/services/quantum-ai-trading-platform',
      price: '$12,999/month',
      description: 'Revolutionary quantum-powered AI trading platform'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@ziontechgroup', color: 'hover:text-red-400' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions and enterprise-grade services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-zion-blue-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-zion-cyan text-sm font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <p className="text-zion-slate-light text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Rocket className="w-6 h-6 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Globe className="w-5 h-5 text-zion-cyan" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
            </div>
            <p className="text-zion-slate-light">
              Subscribe to our newsletter for the latest insights, product updates, and industry trends.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-zion-blue-darker border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} hover:border-zion-cyan/40 transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Awards & Certifications</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <Award className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">Microsoft Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="hidden sm:inline">in Delaware, USA</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};