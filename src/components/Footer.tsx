import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowUp,
  Heart,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Rocket,
  Target,
  CheckCircle,
  Star,
  Award,
  Lock,
  Database,
  Cpu,
  Network,
  Activity,
  MessageCircle,
  TrendingUp,
  DollarSign,
  Layers,
  Monitor
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      icon: Zap,
      links: [
        { name: 'AI Services', href: '/services/ai-services', icon: Brain },
        { name: 'IT Services', href: '/services/it-services', icon: Shield },
        { name: 'Micro SaaS', href: '/services/micro-saas', icon: Code },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Lock },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Blockchain', href: '/services/blockchain', icon: Layers },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Network },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Cpu }
      ]
    },
    {
      title: 'Solutions',
      icon: Target,
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Tech', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Activity },
        { name: 'Retail & E-commerce', href: '/solutions/retail', icon: TrendingUp },
        { name: 'Education', href: '/solutions/education', icon: Users },
        { name: 'Government', href: '/solutions/government', icon: Building2 },
        { name: 'Non-Profit', href: '/solutions/nonprofit', icon: Heart }
      ]
    },
    {
      title: 'Company',
      icon: Building2,
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Award },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News & Updates', href: '/news', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Press Kit', href: '/press', icon: FileText },
        { name: 'Contact Us', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Monitor },
        { name: 'Training', href: '/training', icon: Users },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Community', href: '/community', icon: Users }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-600' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SaaS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                      >
                        <Icon className="w-3 h-3 mr-2 text-gray-400 group-hover:text-blue-400" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovation.</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

export default Footer;