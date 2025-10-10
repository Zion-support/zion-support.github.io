import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SAAS', href: '/micro-saas' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSaasServices = {
    'Productivity': [
      { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
      { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Smart task management' },
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Automated workflows' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
      { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial analysis' },
      { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Expense management' },
      { name: 'AI E-commerce Assistant', url: '/ai-ecommerce-solutions', description: 'E-commerce optimization' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email automation' }
    ],
    'Development & Technical': [
      { name: 'AI Code Generation', url: '/ai-code-generation', description: 'AI-powered coding' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
      { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document automation' }
    ],
    'Analytics & Data': [
      { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
      { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data visualization' },
      { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Predictive modeling' }
    ],
    'Creative & Media': [
      { name: 'AI Video Generation', url: '/ai-video-generation', description: 'AI video creation' },
      { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Voice synthesis' },
      { name: 'AI Music Composition', url: '/ai-music-composition', description: 'AI music creation' },
      { name: 'AI Fashion Design', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Healthcare AI' },
      { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning', url: '/machine-learning', description: 'ML solutions' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Data analytics' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbots' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Content creation' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'Marketing automation' },
    { name: 'AI Mobile Development', url: '/ai-mobile-app-development', description: 'Mobile apps' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow automation' },
    { name: 'AI Solutions', url: '/ai-solutions', description: 'Complete AI solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'DevOps', url: '/devops', description: 'DevOps services' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT strategy' },
    { name: 'System Integration', url: '/system-integration', description: 'System integration' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Micro SAAS</h3>
            <div className="space-y-3">
              {Object.entries(microSaasServices).slice(0, 3).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-purple-400 mb-2">{category}</h4>
                  <div className="space-y-1">
                    {services.slice(0, 2).map((service) => (
                      <Link
                        key={service.name}
                        to={service.url}
                        className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI & IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Services</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-2">AI Services</h4>
                <div className="space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <Link
                      key={service.name}
                      to={service.url}
                      className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-2">IT Services</h4>
                <div className="space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <Link
                      key={service.name}
                      to={service.url}
                      className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">Get the latest updates on AI and technology solutions.</p>
              </div>
              <div className="flex space-x-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);