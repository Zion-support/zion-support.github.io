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
    { name: 'AI Voice Recognition', url: '/ai-voice-recognition', description: 'Voice AI System' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Computer Vision AI' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'NLP Solutions' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Recommendation AI' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Fraud Prevention AI' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Document AI' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Predictive AI' },
    { name: 'AI Process Mining', url: '/ai-process-mining', description: 'Process AI' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Sentiment AI' },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Knowledge AI' },
    { name: 'AI Video Analytics', url: '/ai-video-analytics', description: 'Video AI' },
    { name: 'AI Text Generation', url: '/ai-text-generation', description: 'Text AI' },
    { name: 'AI Anomaly Detection', url: '/ai-anomaly-detection', description: 'Anomaly AI' },
    { name: 'AI Decision Support', url: '/ai-decision-support', description: 'Decision AI' },
    { name: 'AI Personalization Engine', url: '/ai-personalization', description: 'Personalization AI' },
    { name: 'AI Time Series Analysis', url: '/ai-time-series', description: 'Time Series AI' },
    { name: 'AI Cognitive Services', url: '/ai-cognitive-services', description: 'Cognitive AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Edge AI' }
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
    { name: 'Multi-Cloud Management', url: '/multi-cloud-management', description: 'Multi-cloud Solutions' },
    { name: 'Zero Trust Security', url: '/zero-trust-security', description: 'Zero Trust Architecture' },
    { name: 'Database Performance Tuning', url: '/database-performance-tuning', description: 'Database Optimization' },
    { name: 'CDN & Content Delivery', url: '/cdn-content-delivery', description: 'Content Delivery' },
    { name: 'Mobile Device Management', url: '/mobile-device-management', description: 'Device Management' },
    { name: 'IT Service Management', url: '/it-service-management', description: 'Service Management' },
    { name: 'Security Operations Center', url: '/security-operations-center', description: 'SOC Services' },
    { name: 'Disaster Recovery as a Service', url: '/disaster-recovery-as-a-service', description: 'DRaaS Solutions' },
    { name: 'IT Automation Platform', url: '/it-automation-platform', description: 'Automation Platform' },
    { name: 'Data Lake & Analytics', url: '/data-lake-analytics', description: 'Data Analytics' },
    { name: 'API Gateway & Management', url: '/api-gateway-management', description: 'API Management' },
    { name: 'Identity & Access Management', url: '/identity-access-management', description: 'IAM Solutions' },
    { name: 'Container Orchestration', url: '/container-orchestration', description: 'Kubernetes & Containers' },
    { name: 'IT Cost Optimization', url: '/it-cost-optimization', description: 'Cost Optimization' }
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
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' },
    { name: 'AI Content Generator Pro', url: '/ai-content-generator-pro', description: 'Content Creation' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-builder', description: 'Mobile Development' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO Tools' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Invoice Management' },
    { name: 'Smart Analytics Pro', url: '/smart-analytics-pro', description: 'Analytics Platform' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler-pro', description: 'Scheduling Tools' },
    { name: 'Expense Tracker AI', url: '/expense-tracker-ai', description: 'Expense Management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'Task Management' },
    { name: 'CRM Lite', url: '/crm-lite', description: 'Lightweight CRM' },
    { name: 'Email Optimizer Pro', url: '/email-optimizer-pro', description: 'Email Optimization' },
    { name: 'Social Media Manager AI', url: '/social-media-manager-ai', description: 'Social Media Tools' },
    { name: 'AI Design Studio Pro', url: '/ai-design-studio-pro', description: 'Design Tools' },
    { name: 'Landing Page Builder AI', url: '/landing-page-builder-ai', description: 'Page Builder' },
    { name: 'SEO Optimizer Pro', url: '/seo-optimizer-pro', description: 'SEO Tools' },
    { name: 'Ad Campaign Manager AI', url: '/ad-campaign-manager-ai', description: 'Ad Management' },
    { name: 'Code Assistant Pro', url: '/code-assistant-pro', description: 'Development Tools' },
    { name: 'API Builder Pro', url: '/api-builder-pro', description: 'API Development' },
    { name: 'Bug Tracker Pro', url: '/bug-tracker-pro', description: 'Bug Tracking' },
    { name: 'Doc Generator AI', url: '/doc-generator-ai', description: 'Documentation' },
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & Recruitment' },
    { name: 'Medical Records Manager', url: '/medical-records-manager', description: 'Healthcare' },
    { name: 'AI Accounting Assistant', url: '/ai-accounting-assistant', description: 'Finance & Accounting' },
    { name: 'Property Management AI', url: '/property-management-ai', description: 'Real Estate' },
    { name: 'Legal Document Manager', url: '/legal-document-manager', description: 'Legal & Compliance' },
    { name: 'Online Learning Platform AI', url: '/online-learning-platform-ai', description: 'Education' },
    { name: 'Supply Chain Optimizer AI', url: '/supply-chain-optimizer-ai', description: 'Manufacturing' },
    { name: 'Lead Generation AI', url: '/lead-generation-ai', description: 'Lead Generation' },
    { name: 'Business Intelligence AI', url: '/business-intelligence-ai', description: 'Business Intelligence' },
    { name: 'Password Manager Pro', url: '/password-manager-pro', description: 'Password Management' },
    { name: 'App Store Optimizer', url: '/app-store-optimizer', description: 'App Store Optimization' },
    { name: 'AI Music Generator', url: '/ai-music-generator', description: 'Music Generation' },
    { name: 'AI Video Editor', url: '/ai-video-editor', description: 'Video Editing' },
    { name: 'AI Survey Builder', url: '/ai-survey-builder', description: 'Survey Creation' }
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