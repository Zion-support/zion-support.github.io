'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react';
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models & analytics' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Manufacturing', url: '/ai-manufacturing', description: 'Smart manufacturing solutions' },
    { name: 'AI E-commerce', url: '/ai-ecommerce', description: 'E-commerce AI platforms' },
    { name: 'AI Education', url: '/ai-education', description: 'Personalized learning platforms' },
    { name: 'AI Transportation', url: '/ai-transportation', description: 'Smart transportation solutions' },
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen quantum computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing AI systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized AI solutions' },
    { name: 'IoT & Edge AI', url: '/iot-edge-ai', description: 'Edge computing AI solutions' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' }
  ];
  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS, Azure, GCP migration' },
    { name: 'Infrastructure as Code', url: '/infrastructure-as-code', description: 'Automated provisioning' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', description: 'AI-powered cost reduction' },
    { name: 'Disaster Recovery', url: '/disaster-recovery', description: 'Backup & recovery solutions' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Comprehensive security' },
    { name: 'Zero Trust Security', url: '/zero-trust-security', description: 'Advanced security architecture' },
    { name: 'Compliance Management', url: '/compliance-management', description: 'GDPR, HIPAA, SOX compliance' },
    { name: 'Identity & Access Management', url: '/identity-access-management', description: 'SSO, MFA, IAM solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Development automation' },
    { name: 'Container Orchestration', url: '/container-orchestration', description: 'Kubernetes & Docker' },
    { name: 'Mobile App Development', url: '/mobile-app-development', description: 'Native & cross-platform' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Data Warehousing', url: '/data-warehousing', description: 'Enterprise data solutions' },
    { name: 'Data Integration', url: '/data-integration', description: 'Real-time data sync' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Advanced BI solutions' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Enterprise networking' },
    { name: 'SD-WAN Solutions', url: '/sd-wan-solutions', description: 'Software-defined WAN' },
    { name: '5G & Edge Computing', url: '/5g-edge-computing', description: 'Next-gen connectivity' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: '24/7 technical support' },
    { name: 'Managed IT Services', url: '/managed-it-services', description: 'Complete IT management' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'IT Project Management', url: '/it-project-management', description: 'End-to-end project delivery' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '100+ ready-to-use apps' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project management' },
    { name: 'AI Document Manager', url: '/ai-document-manager', description: 'Smart document organization' },
    { name: 'AI Time Tracker', url: '/ai-time-tracker', description: 'Intelligent time tracking' },
    { name: 'AI Goal Tracker', url: '/ai-goal-tracker', description: 'Smart goal setting & tracking' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete content creation suite' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated email campaigns' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'AI Design Assistant', url: '/ai-design-assistant', description: 'AI-powered design creation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Intelligent chatbots' },
    { name: 'AI Ticket System', url: '/ai-ticket-system', description: 'Intelligent ticket management' },
    { name: 'AI Call Center', url: '/ai-call-center', description: 'Virtual call center' },
    { name: 'AI Live Chat', url: '/ai-live-chat', description: 'Real-time AI chat' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Smart expense management' },
    { name: 'AI Payment Processor', url: '/ai-payment-processor', description: 'Intelligent payment processing' },
    { name: 'AI Financial Planner', url: '/ai-financial-planner', description: 'AI-powered financial planning' },
    { name: 'AI HR Assistant', url: '/ai-hr-assistant', description: 'Intelligent HR management' },
    { name: 'AI Performance Tracker', url: '/ai-performance-tracker', description: 'Employee performance monitoring' },
    { name: 'AI Recruiting Tool', url: '/ai-recruiting-tool', description: 'Smart candidate screening' },
    { name: 'AI Learning Platform', url: '/ai-learning-platform', description: 'Personalized employee training' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-builder', description: 'Build native mobile apps' },
    { name: 'AI Website Builder', url: '/ai-website-builder', description: 'Create professional websites' },
    { name: 'AI Code Assistant', url: '/ai-code-assistant', description: 'AI-powered code generation' },
    { name: 'AI Bug Tracker', url: '/ai-bug-tracker', description: 'Intelligent bug detection' }
  ];
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
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
    hours: 'Mon-Fri: 9AM-6PM EST'
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h3>
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
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service, index) => (
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
          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h3>
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
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
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
          </div>
          {/* Support & Contact */}
          <div>
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
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>{contactInfo.hours}</span>
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