'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github,
  Globe,
  Shield,
  Award,
  CheckCircle,
  Star,
  Users,
  Clock,
  ExternalLink,
  Heart,
  Zap,
  Target,
  TrendingUp,
  MessageCircle,
  Headphones,
  Calendar,
  Download,
  BookOpen,
  FileText,
  Code,
  Server,
  Cloud,
  Database,
  Smartphone,
  Monitor,
  Wifi,
  Lock,
  Settings,
  BarChart,
  Workflow,
  Eye,
  Mic,
  MessageSquare,
  Package,
  Briefcase,
  Info,
  Contact,
  Home
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Chatbots', href: '/ai-chatbot-enterprise' },
        { name: 'Computer Vision', href: '/ai-computer-vision' },
        { name: 'Voice AI', href: '/ai-voice-assistant' },
        { name: 'Predictive Analytics', href: '/ai-predictive-analytics' },
        { name: 'Content Generation', href: '/ai-content-generation' },
        { name: 'Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Package,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'CyberGuard Security', href: '/cyber-security-monitor' },
        { name: 'DataViz Analytics', href: '/business-analytics-dashboard' },
        { name: 'SupportBot AI', href: '/ai-customer-support' },
        { name: 'FlowMaster Automation', href: '/workflow-automation' },
        { name: 'EmailGenius AI', href: '/ai-email-marketing' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Contact },
    { name: 'Support', href: '/support', icon: Headphones }
  ];

  const resources = [
    { name: 'Documentation', href: '/documentation', icon: FileText },
    { name: 'API Reference', href: '/api-docs', icon: Code },
    { name: 'Developer Guide', href: '/developer-guide', icon: BookOpen },
    { name: 'Integration Guide', href: '/integration-guide', icon: Settings },
    { name: 'Best Practices', href: '/best-practices', icon: Star },
    { name: 'Security Guide', href: '/security-guide', icon: Shield },
    { name: 'Performance Tips', href: '/performance-tips', icon: TrendingUp },
    { name: 'Troubleshooting', href: '/troubleshooting', icon: Wifi }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-matrix-bg"></div>
        <div className="quantum-field-bg"></div>
        <div className="holographic-grid"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-gray-400">AI & IT Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions and comprehensive IT services. 
                We help businesses transform their operations with cutting-edge technology 
                and innovative approaches.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
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
                    className="glass-card p-3 hover:bg-cyan-500/20 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            to={service.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Resources */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <Link
                        to={resource.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        <resource.icon className="w-4 h-4 mr-2" />
                        {resource.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card p-8 rounded-xl mb-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest insights, updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="cyber-button px-6 py-3">
                <Zap className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-1">Privacy Policy</Link> | 
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-1">Terms of Service</Link> | 
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300 ml-1">Cookie Policy</Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion for innovation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;