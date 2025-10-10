import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'Custom Development', href: '/custom-development' },
        { name: 'AI IT Operations', href: '/ai-ops' },
        { name: 'Healthcare IT Solutions', href: '/healthcare-it' },
        { name: 'Financial Services IT', href: '/financial-it' },
        { name: 'Edge Computing Solutions', href: '/edge-computing' },
        { name: '5G Network Implementation', href: '/5g-implementation' },
        { name: 'IoT Platform Development', href: '/iot-platform' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' },
        { name: 'AI Infrastructure Monitoring', href: '/ai-infrastructure-monitoring' },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services' },
        { name: 'AI API Management', href: '/ai-api-management' },
        { name: 'Smart Contract Security', href: '/smart-contract-security-audit' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      services: [
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' },
        { name: 'Smart Cities', href: '/smart-cities' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden matrix-bg">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 rotate-slow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <div>
                  <div>Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div>24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
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
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
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
                <h4 className="text-white font-semibold mb-4">Support</h4>
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

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
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
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-4 neon-text">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, technology updates, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
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
