'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'Advanced Analytics & Insights' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Intelligent Support Systems' },
    { name: 'Computer Vision', url: '/ai-computer-vision', description: 'Image Recognition & Analysis' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent Workflow Automation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Predictive Data Intelligence' },
    { name: 'AI Marketing Automation', url: '/ai-marketing-automation', description: 'Smart Marketing Campaigns' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Intelligent Document Analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-assistant', description: 'Speech Recognition & Synthesis' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Intelligent Threat Detection' },
    { name: 'AI HR Solutions', url: '/ai-hr-assistant', description: 'Smart HR Management' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'Intelligent E-commerce' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain', description: 'Supply Chain Optimization' }
  ];
  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud Management & Migration' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Comprehensive Security Solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Development Operations' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure Management' },
    { name: 'Database Management', url: '/database-management', description: 'Database Services & Optimization' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Native & Cross-platform Apps' },
    { name: 'Web Development', url: '/web-development', description: 'Modern Web Applications' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT Support & Management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT Consulting' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise Networking' },
    { name: 'Data Backup & Recovery', url: '/data-backup', description: 'Backup & Disaster Recovery' },
    { name: 'IT Performance Monitoring', url: '/it-monitoring', description: 'Real-time Performance Monitoring' }
  ];
  const microSaasServices = [
    { name: 'AI Analytics Dashboard Pro', url: '/ai-analytics-dashboard', description: 'Business Intelligence Platform' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete Content Creation Suite' },
    { name: 'AI Lead Generation Engine', url: '/ai-lead-generation', description: 'Automated Lead Prospecting' },
    { name: 'AI-Powered CRM Suite', url: '/ai-crm', description: 'Intelligent Customer Management' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 Intelligent Support' },
    { name: 'AI Email Marketing Pro', url: '/ai-email-marketing', description: 'Advanced Email Automation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Comprehensive SEO Analysis' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated Invoice Management' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Advanced Writing Tools' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent Scheduling System' },
    { name: 'AI Document Processor', url: '/ai-document-processor', description: 'Automated Document Analysis' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-builder', description: 'No-code Mobile Development' }
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