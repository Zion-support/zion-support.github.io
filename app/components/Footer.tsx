'use client';
import React from 'react';
'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';
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
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Quantum Computing', url: '/ai-quantum-computing', description: 'Quantum AI solutions' },
    { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-managing AI' },
    { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D AI solutions' },
    { name: 'AI Agricultural Intelligence', url: '/ai-agricultural-intelligence-pro', description: 'Smart farming AI' },
    { name: 'AI Climate Solutions', url: '/ai-climate-solutions-pro', description: 'Environmental AI' },
    { name: 'AI Drug Discovery', url: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI' },
    { name: 'AI Energy Grid Management', url: '/ai-energy-grid-management-pro', description: 'Energy AI' },
    { name: 'AI Financial Crime Detection', url: '/ai-financial-crime-detection-pro', description: 'Fraud detection AI' }
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
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' },
    { name: 'Multi-Cloud Management', url: '/multi-cloud-management', description: 'Multi-cloud strategy' },
    { name: 'Edge Computing Solutions', url: '/edge-computing-solutions', description: 'Edge AI deployment' },
    { name: 'Serverless Architecture', url: '/serverless-architecture', description: 'Auto-scaling apps' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Containerization' },
    { name: 'Zero Trust Security', url: '/zero-trust-security', description: 'Zero trust architecture' },
    { name: 'AI-Powered Threat Hunting', url: '/ai-threat-hunting', description: 'Proactive security' },
    { name: 'Security Orchestration', url: '/security-orchestration', description: 'Security automation' },
    { name: 'Compliance Automation', url: '/compliance-automation', description: 'Regulatory compliance' },
    { name: 'Real-Time Analytics', url: '/real-time-analytics', description: 'Streaming analytics' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Data Lake Solutions', url: '/data-lake-solutions', description: 'Big data storage' },
    { name: 'Customer Analytics', url: '/customer-analytics', description: 'Customer insights' },
    { name: 'Cross-Platform Development', url: '/cross-platform-development', description: 'Native quality apps' },
    { name: 'Progressive Web Apps', url: '/progressive-web-apps', description: 'App-like web' },
    { name: 'Mobile AI Integration', url: '/mobile-ai-integration', description: 'AI mobile apps' },
    { name: 'NoSQL Database Solutions', url: '/nosql-database-solutions', description: 'Scalable storage' },
    { name: 'Graph Database Solutions', url: '/graph-database-solutions', description: 'Relationship data' },
    { name: 'Time Series Databases', url: '/time-series-databases', description: 'IoT data storage' },
    { name: 'Intelligent Process Automation', url: '/intelligent-process-automation', description: 'AI automation' },
    { name: 'Robotic Process Automation', url: '/robotic-process-automation', description: 'Software robots' },
    { name: 'Hyperautomation', url: '/hyperautomation', description: 'Multi-tool automation' },
    { name: 'Progressive Web Applications', url: '/progressive-web-applications', description: 'Modern web apps' },
    { name: 'Microservices Architecture', url: '/microservices-architecture', description: 'Scalable architecture' },
    { name: 'Headless CMS Solutions', url: '/headless-cms-solutions', description: 'API-first CMS' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' },
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' },
    { name: 'Cloud Infrastructure Manager', url: '/cloud-infrastructure-manager', description: 'Cloud management' },
    { name: 'Email Marketing Automation', url: '/email-marketing-automation', description: 'Email marketing' },
    { name: 'Project Management Pro', url: '/project-management-pro', description: 'Project management' },
    { name: 'E-commerce Analytics Pro', url: '/ecommerce-analytics-pro', description: 'E-commerce analytics' },
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & recruitment' },
    { name: 'Medical Records Manager', url: '/medical-records-manager', description: 'Healthcare' },
    { name: 'AI Accounting Assistant', url: '/ai-accounting-assistant', description: 'Finance & accounting' },
    { name: 'Property Management AI', url: '/property-management-ai', description: 'Real estate' },
    { name: 'Legal Document Manager', url: '/legal-document-manager', description: 'Legal & compliance' },
    { name: 'Online Learning Platform', url: '/online-learning-platform', description: 'Education' },
    { name: 'Supply Chain Optimizer', url: '/supply-chain-optimizer', description: 'Manufacturing' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' }
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
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' },
    { name: 'AR/VR Development', url: '/ar-vr-development', description: 'Immersive experiences' },
    { name: 'IoT Platform Development', url: '/iot-platform-development', description: 'Connected systems' },
    { name: 'Blockchain Solutions', url: '/blockchain-solutions', description: 'Decentralized apps' },
    { name: 'Edge Computing Solutions', url: '/edge-computing-solutions', description: 'Edge AI' },
    { name: '5G Network Design', url: '/5g-network-design', description: 'Ultra-fast connectivity' }
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>
          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>
          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Emerging Tech
            </h3>
            <ul className="space-y-2">
              {emergingTech.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Support</h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium">
                {contactInfo.emergency}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';
export default Footer;