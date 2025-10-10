'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Star, Shield, Globe, Database, Smartphone, Target, Settings, CheckCircle } from 'lucide-react';
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation' }
  ];
  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Security Monitoring', url: '/security-monitoring', description: '24/7 security' },
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security testing' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile applications' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' }
  ];
  const microSaasServices = [
    { name: 'AI Analytics Dashboard Pro', url: '/ai-analytics-dashboard', description: 'Business Intelligence', price: '$199/mo', popular: true },
    { name: 'AI-Powered CRM Suite', url: '/ai-crm', description: 'Customer Management', price: '$149/mo', popular: true },
    { name: 'AI Security Monitoring', url: '/ai-security-monitoring', description: 'Cybersecurity', price: '$299/mo', popular: true },
    { name: 'AI Email Marketing Pro', url: '/ai-email-marketing', description: 'Email Marketing', price: '$79/mo', popular: false },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-builder', description: 'Mobile Development', price: '$199/mo', popular: true },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO Tools', price: '$89/mo', popular: false },
    { name: 'AI Document Processor', url: '/ai-document-processor', description: 'Document AI', price: '$129/mo', popular: false },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Scheduling Tools', price: '$39/mo', popular: true },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'Design Tools', price: '$59/mo', popular: false },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead Gen AI', price: '$149/mo', popular: true },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Support AI', price: '$99/mo', popular: false },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow AI', price: '$179/mo', popular: true },
    { name: 'AI Content Writer', url: '/ai-content-writer', description: 'Writing Tools', price: '$49/mo', popular: true },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Expense Management', price: '$29/mo', popular: false },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Project Management', price: '$89/mo', popular: false },
    { name: 'AI HR Assistant', url: '/ai-hr-assistant', description: 'HR & Recruitment', price: '$199/mo', popular: true }
  ];
  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics & Automation', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: '5G Implementation', url: '/5g-implementation', description: '5G solutions' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D AI solutions' },
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' }
  ];
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];
  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST',
    emergency: '24/7 Emergency Support Available'
  };
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* AI Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center neon-text">
              <Brain className="w-6 h-6 mr-3" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/ai-services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium cyber-glow"
                >
                  View All AI Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center neon-text">
              <Cloud className="w-6 h-6 mr-3" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/it-services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium cyber-glow"
                >
                  View All IT Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center neon-text">
              <Code className="w-6 h-6 mr-3" />
              Micro SAAS
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <Link 
                  key={index}
                  to={service.url}
                  className="group p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 quantum-field"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </span>
                        {service.popular && (
                          <Star className="w-3 h-3 text-yellow-400" />
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{service.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="pt-3">
                <Link 
                  to="/micro-saas"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium cyber-glow"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center neon-text">
              <Users className="w-6 h-6 mr-3" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <Clock className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="flex items-center text-xs text-cyan-400 font-medium group">
                <Shield className="w-4 h-4 mr-2 group-hover:text-cyan-300 transition-colors" />
                <span>{contactInfo.emergency}</span>
              </div>
            </div>
            
            {/* Company Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-sm text-gray-300">Micro SAAS Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-sm text-gray-300">IT Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              </div>
              <div className="text-sm text-gray-400">
                © {currentYear} All rights reserved.
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Sitemap
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