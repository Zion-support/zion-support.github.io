import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Smartphone, 
  Building, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Heart, 
  Brain, 
  Cloud, 
  ShoppingCart, 
  Factory, 
  CreditCard, 
  GraduationCap, 
  ShoppingBag, 
  Building2, 
  Zap, 
  Target, 
  TrendingUp, 
  Star, 
  Lock, 
  Eye, 
  Code, 
  Database, 
  Network, 
  Cpu, 
  Atom, 
  Rocket, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Settings, 
  Gauge, 
  Workflow, 
  Calendar, 
  Package, 
  Headphones, 
  Search, 
  Lightbulb, 
  Award as AwardIcon, 
  ShieldCheck, 
  Globe2, 
  Leaf, 
  Satellite, 
  Microscope, 
  Beaker, 
  TestTube, 
  Truck, 
  Factory as FactoryIcon, 
  Leaf as LeafIcon, 
  Satellite as SatelliteIcon, 
  Building as BuildingIcon, 
  Gauge as GaugeIcon, 
  MessageCircle, 
  Calendar as CalendarIcon, 
  Package as PackageIcon, 
  CreditCard as CreditCardIcon, 
  Globe2 as Globe2Icon, 
  ShieldCheck as ShieldCheckIcon 
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      services: [
        { name: 'Affiliate Marketing Tracking', href: '/services/affiliate-tracking' },
        { name: 'Event Management Dashboard', href: '/services/event-management-dashboard' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform' },
        { name: 'Email Automation Sequencer', href: '/services/email-sequencer' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'Mobile Survey Platform', href: '/services/mobile-survey' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration Services', href: '/services/cloud-migration' },
        { name: 'DevOps & CI/CD Implementation', href: '/services/devops-cicd' },
        { name: 'Cybersecurity Assessment', href: '/services/cybersecurity-assessment' },
        { name: 'IT Infrastructure Management', href: '/services/it-infrastructure-management' },
        { name: 'Network Security', href: '/services/network-security' },
        { name: 'Data Backup & Recovery', href: '/services/data-backup-recovery' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      services: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Press', href: '/press' },
    { name: 'Research & Development', href: '/research-development' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Resources', href: '/developer' },
    { name: 'Training', href: '/training' },
    { name: 'Community', href: '/community' },
    { name: 'Support', href: '/support' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Innovation Group</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI services, micro SaaS solutions, and comprehensive IT services. 
              We deliver innovative technology solutions that drive business growth and efficiency.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Smartphone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 2).map((category, categoryIndex) => (
                <li key={categoryIndex}>
                  <div className="flex items-center mb-2">
                    <category.icon className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="font-medium text-cyan-400">{category.title}</span>
                  </div>
                  <ul className="ml-6 space-y-1">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {serviceCategories.slice(2, 4).map((category, categoryIndex) => (
                <li key={categoryIndex}>
                  <div className="flex items-center mb-2">
                    <category.icon className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="font-medium text-cyan-400">{category.title}</span>
                  </div>
                  <ul className="ml-6 space-y-1">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest news and updates about our services and solutions.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-gray-800 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Certified Solutions</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-purple-400" />
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;