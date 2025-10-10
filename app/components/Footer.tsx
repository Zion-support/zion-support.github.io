'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Shield, Globe, Cpu, Target, BarChart, Settings, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText, Mic, Search } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Core AI Solutions' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning-studio', description: 'Professional Voice Synthesis' },
    { name: 'AI Quantum Financial Oracle', url: '/ai-quantum-financial-oracle', description: 'Quantum Investment Intelligence' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-Powered Marketing' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI Support Systems' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data Intelligence' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Content Creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI Solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Security AI' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI' }
  ];

  const itServices = [
    { name: 'Cybersecurity Suite', url: '/it-services/cybersecurity-suite', description: 'Enterprise Security Solutions' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud Solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless Migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development Operations' },
    { name: 'Database Services', url: '/database', description: 'Data Management' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security Solutions' },
    { name: 'Security Monitoring', url: '/security-monitoring', description: '24/7 Security' },
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security Testing' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure Setup' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT Support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'IT Strategy' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business Intelligence' }
  ];

  const microSaasServices = [
    { name: 'Micro SaaS Solutions', url: '/micro-saas', description: '50+ AI Tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business Intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer Management' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content Creation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Chatbot Platform' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email Marketing' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-builder', description: 'Mobile Development' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO Tools' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Invoice Management' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Writing Tools' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Analytics Platform' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Scheduling Tools' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Press Kit', url: '/press' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Support', url: '/support' },
    { name: 'Live Chat', url: '/chat' },
    { name: 'Community Forum', url: '/community' },
    { name: 'Training', url: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security Policy', url: '/security' },
    { name: 'SLA', url: '/sla' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cpu className="w-5 h-5 text-cyan-400 mr-2" />
              Micro SaaS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-6 mt-8">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
