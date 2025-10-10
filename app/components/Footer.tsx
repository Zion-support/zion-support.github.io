'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, Globe, Target, Cpu, BarChart } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Custom voice interfaces' },
    { name: 'AI Predictive Maintenance', url: '/ai-predictive-maintenance', description: 'Equipment failure prevention' },
    { name: 'AI Supply Chain Optimization', url: '/ai-supply-chain-optimization', description: 'Logistics optimization' },
    { name: 'AI Quality Control', url: '/ai-quality-control', description: 'Automated inspection' },
    { name: 'AI Energy Management', url: '/ai-energy-management', description: 'Smart energy solutions' },
    { name: 'AI Legal Document Analysis', url: '/ai-legal-document-analysis', description: 'Document review' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS, Azure, GCP migration' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Comprehensive security' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Database Management', url: '/database-management', description: 'AI-powered optimization' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise networking' },
    { name: 'Mobile Development', url: '/mobile-app-development', description: 'Native & cross-platform' }
  ];

  const microSaasServices = [
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: '50+ templates' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Real-time insights' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Intelligent scheduling' },
    { name: 'Expense Tracker', url: '/expense-tracker', description: 'AI categorization' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'AI prioritization' },
    { name: 'CRM Lite', url: '/crm-lite', description: 'AI lead scoring' }
  ];

  const emergingTech = [
    { name: '5G Implementation', url: '/5g-implementation', description: 'Ultra-low latency' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' },
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive environments' },
    { name: 'Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-operating systems' },
    { name: 'Blockchain Solutions', url: '/ai-blockchain-solutions', description: 'Web3 applications' },
    { name: 'Edge Computing', url: '/ai-edge-computing', description: 'Distributed processing' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology, 
              delivering proven results and 24/7 expert support.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <Phone className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <Mail className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <Clock className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-sm font-semibold">in</span>
                </div>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-sm font-semibold">X</span>
                </div>
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-sm font-semibold">GH</span>
                </div>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center group">
              <Brain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center group">
              <Cloud className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All IT Services
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center group">
              <Cpu className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center group">
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Emerging Tech
            </h3>
            <ul className="space-y-3">
              {emergingTech.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/emerging-tech"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center group"
                >
                  View All Emerging Tech
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-700/50">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 group flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Target className="w-4 h-4 mr-2 text-purple-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <BarChart className="w-4 h-4 mr-2 text-cyan-400" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2 text-cyan-400">Transforming businesses with AI and IT solutions</span>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;