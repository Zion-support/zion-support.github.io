import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Globe,
  MessageSquare,
  Send,
  CheckCircle,
  Award,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', price: '$39/mo' },
        { name: 'AI Password Manager', path: '/ai-password-manager', price: '$29/mo' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', price: '$59/mo' },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', price: '$149/mo' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', price: '$99/mo' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$179/mo' },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', price: '$79/mo' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', price: '$129/mo' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', price: '$2,999/mo' },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', price: '$4,999/mo' },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', price: '$9,999/mo' },
        { name: 'AI Climate Intelligence', path: '/ai-climate-solutions-pro', price: '$1,999/mo' },
        { name: 'AI Drug Discovery Platform', path: '/ai-drug-discovery-pro', price: '$7,999/mo' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', price: '$3,999/mo' },
        { name: 'AI Fintech Platform', path: '/ai-fintech', price: '$2,499/mo' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity', price: '$1,799/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'AI Infrastructure Management', path: '/ai-infrastructure', price: '$2,999/mo' },
        { name: 'Quantum-Safe Security', path: '/quantum-security', price: '$4,999/mo' },
        { name: 'Edge Computing Infrastructure', path: '/edge-computing', price: '$1,999/mo' },
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', price: '$1,499/mo' },
        { name: 'Enterprise Cybersecurity', path: '/cybersecurity', price: '$2,499/mo' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', price: '$1,799/mo' },
        { name: '24/7 IT Support', path: '/it-support', price: '$999/mo' },
        { name: 'Custom Software Development', path: '/custom-development', price: '$3,999/mo' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Support', path: '/support' }
  ];

  const companyLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'API Documentation', path: '/api-docs' },
    { name: 'System Status', path: '/status' },
    { name: 'Security', path: '/security' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/zion-tech-group', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/zion-tech-group', color: 'hover:text-gray-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold cyber-text">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
                Transform your business with our advanced AI capabilities and cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    Mon-Fri: 9AM-6PM EST<br />
                    24/7 Support Available
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      <h4 className="font-semibold text-white">{category.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {category.services.slice(0, 6).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="group-hover:translate-x-1 transition-transform">
                              {service.name}
                            </span>
                            <span className="text-xs text-cyan-400 font-medium">
                              {service.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  {quickLinks.slice(0, 5).map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  {quickLinks.slice(5).map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="futuristic-card">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
                  Stay Updated
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Get the latest AI insights and technology updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white text-sm font-medium transition-all">
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Awards & Certifications</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Inc. 5000 Fastest Growing</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Best AI Company 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-slate-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  {companyLinks.slice(0, 4).map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Made with ❤️ in Delaware, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;