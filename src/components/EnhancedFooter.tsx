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
    { name: 'Government Solutions', href: '/solutions/government', icon: ShieldIcon }
  ];

  const resources = [
    { name: 'Blog & Insights', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Webinars', href: '/webinars', icon: Calendar },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Support Center', href: '/support', icon: MessageCircle }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'News & Press', href: '/news', icon: FileText },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const footerSections = [
    {
      title: 'Services',
      links: services,
      description: 'Cutting-edge technology solutions for modern businesses'
    },
    {
      title: 'Solutions',
      links: solutions,
      description: 'Industry-specific solutions that drive transformation'
    },
    {
      title: 'Resources',
      links: resources,
      description: 'Knowledge and insights to help you succeed'
    },
    {
      title: 'Company',
      links: company,
      description: 'Learn more about our mission and team'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-sm text-cyan-400 font-medium tracking-wider">{companyInfo.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href={companyInfo.social.facebook} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.twitter} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.linkedin} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.instagram} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.youtube} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={companyInfo.social.github} className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <p className="text-sm text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-sm text-gray-400">Quick Links:</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} {companyInfo.name}. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with ❤️ by Zion Tech Group</span>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="text-cyan-400 font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-slate-700/50">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights, industry trends, and technology updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
