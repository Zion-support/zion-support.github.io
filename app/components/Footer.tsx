import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  SignalIcon,
  CircleStackIcon,
  UserGroupIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  EyeIcon,
  ShareIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      title: 'AI Services',
      items: [
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Document Processor', href: '/ai-document-processor' },
        { name: 'AI Form Builder', href: '/ai-form-builder' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { name: 'AI Image Recognition', href: '/ai-image-recognition' },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring' },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { name: 'AI Price Optimizer', href: '/ai-price-optimizer' },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer' }
      ]
    },
    {
      title: 'IT Solutions',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'API Development', href: '/api-development' },
        { name: 'DevOps Automation', href: '/devops-automation' },
        { name: 'Data Engineering', href: '/data-engineering' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'Security Audit', href: '/security-audit' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    {
      title: 'Advanced Solutions',
      items: [
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: '5G Solutions', href: '/5g-solutions' },
        { name: 'Edge Computing', href: '/edge-computing-solutions' },
        { name: 'Augmented Reality', href: '/augmented-reality-solutions' },
        { name: 'Virtual Reality', href: '/virtual-reality-solutions' },
        { name: 'Quantum Computing', href: '/quantum-computing-solutions' },
        { name: 'Robotic Process Automation', href: '/robotic-process-automation' },
        { name: 'Low-Code Platform', href: '/low-code-platform' },
        { name: 'Serverless Architecture', href: '/serverless-architecture' }
      ]
    }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' }
  ];

  const resources = [
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'Website', href: 'https://ziontechgroup.com', icon: GlobeAltIcon },
    { name: 'Email', href: 'mailto:kleber@ziontechgroup.com', icon: EnvelopeIcon },
    { name: 'Phone', href: 'tel:+13024640950', icon: PhoneIcon }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid-enhanced"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      
      {/* Quantum Particles */}
      <div className="quantum-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      
      {/* Scan Lines */}
      <div className="scan-lines"></div>
      
      <div className="relative z-10 glass-card">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold holographic-text cyber-glitch" data-text="ZION TECH GROUP">
                    ZION TECH GROUP
                  </h3>
                  <p className="text-sm text-gray-400">AI & IT Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed matrix-text">
                Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
                artificial intelligence, and innovative software solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors neon-glow">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown DE 19709</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <a href="https://ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                    https://ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="text-gray-300 hover:text-cyan-300 transition-colors neon-glow p-2 rounded-lg hover:bg-cyan-500/10"
                      title={social.name}
                    >
                      <Icon className="h-5 w-5 hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            {services.map((serviceGroup, groupIndex) => (
              <div key={groupIndex} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-4 gradient-text">
                  {serviceGroup.title}
                </h4>
                <ul className="space-y-2">
                  {serviceGroup.items.slice(0, 6).map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-sm text-gray-300 hover:text-cyan-300 transition-colors hover:translate-x-1 transform duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {serviceGroup.items.length > 6 && (
                    <li>
                      <Link
                        to={`/${serviceGroup.title.toLowerCase().replace(' ', '-')}`}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        View All →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}

            {/* Company & Resources */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 gradient-text">
                Company
              </h4>
              <ul className="space-y-2 mb-6">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-cyan-300 transition-colors hover:translate-x-1 transform duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white mb-4 gradient-text">
                Resources
              </h4>
              <ul className="space-y-2">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-cyan-300 transition-colors hover:translate-x-1 transform duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Our Latest Solutions
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on AI innovations, IT solutions, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="btn-neon px-6 py-3 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                {legal.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Powered by cutting-edge technology</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
                <span className="flex items-center">
                  <CpuChipIcon className="h-4 w-4 mr-1 text-cyan-400" />
                  AI & Machine Learning
                </span>
                <span className="flex items-center">
                  <CloudIcon className="h-4 w-4 mr-1 text-blue-400" />
                  Cloud Infrastructure
                </span>
                <span className="flex items-center">
                  <ShieldCheckIcon className="h-4 w-4 mr-1 text-green-400" />
                  Enterprise Security
                </span>
                <span className="flex items-center">
                  <CodeBracketIcon className="h-4 w-4 mr-1 text-purple-400" />
                  Custom Development
                </span>
                <span className="flex items-center">
                  <CircleStackIcon className="h-4 w-4 mr-1 text-orange-400" />
                  Blockchain Solutions
                </span>
                <span className="flex items-center">
                  <SignalIcon className="h-4 w-4 mr-1 text-pink-400" />
                  IoT & 5G
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;