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
  Zap as ZapIcon
} from 'lucide-react';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: 'Zion Tech Group',
    tagline: 'Innovating Tomorrow, Today',
    description: 'Leading provider of cutting-edge technology solutions including AI, cybersecurity, quantum computing, and industry-specific innovations.',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@ziontechgroup.com',
      address: '123 Innovation Drive, Tech City, TC 12345'
    },
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      youtube: '#',
      github: '#'
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'AI & Machine Learning', href: '/services/ai-machine-learning', icon: Brain },
    { name: 'Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
    { name: 'IoT & Edge Computing', href: '/services/ai-iot-edge-computing-platform', icon: Cpu },
    { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Database }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
    { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
    { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Truck },
    { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart },
    { name: 'Education Solutions', href: '/solutions/education', icon: BookOpen }
  ];

  const resources = [
    { name: 'Blog & Insights', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'White Papers', href: '/white-papers', icon: Document },
    { name: 'Webinars', href: '/webinars', icon: Video },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'API Reference', href: '/api', icon: Code }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Leadership Team', href: '/leadership', icon: Award },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'News & Press', href: '/news', icon: FileText },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Contact Us', href: '/contact', icon: MessageCircle }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Quick Links Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-blue-100 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-sm text-blue-200">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-blue-400 mr-2" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <service.icon className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <solution.icon className="w-4 h-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div className="space-y-6">
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-green-400 mr-2" />
                Resources
              </h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      to={resource.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                    >
                      <resource.icon className="w-4 h-4 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Building className="w-5 h-5 text-orange-400 mr-2" />
                Company
              </h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <item.icon className="w-4 h-4 mr-2 text-orange-400 group-hover:scale-110 transition-transform" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href={companyInfo.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.instagram} className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.youtube} className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.github} className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
