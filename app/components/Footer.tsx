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
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Chatbots', url: '/ai-chatbots', description: 'Intelligent chatbots' },
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' }
  ];
  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration services' },
    { name: 'Infrastructure as Code', url: '/infrastructure-as-code', description: 'IaC solutions' },
    { name: 'Cloud Optimization', url: '/cloud-optimization', description: 'Cost optimization' },
    { name: 'Disaster Recovery', url: '/disaster-recovery', description: 'DR solutions' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Security solutions' },
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security testing' },
    { name: 'Compliance Management', url: '/compliance-management', description: 'Compliance solutions' },
    { name: 'Identity & Access Management', url: '/identity-access-management', description: 'IAM solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Development operations' },
    { name: 'Container Orchestration', url: '/container-orchestration', description: 'Kubernetes & Docker' },
    { name: 'Mobile App Development', url: '/mobile-app-development', description: 'Mobile solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Database Management', url: '/database-management', description: 'Database solutions' },
    { name: 'Data Analytics Platform', url: '/data-analytics-platform', description: 'Analytics solutions' },
    { name: 'Data Integration', url: '/data-integration', description: 'ETL/ELT services' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'BI solutions' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'IT Support & Maintenance', url: '/it-support', description: 'IT support' },
    { name: 'Managed IT Services', url: '/managed-it-services', description: '24/7 IT management' }
  ];
  const microSaasServices = [
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent CRM' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content creation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Chatbot builder' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email automation' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-builder', description: 'Mobile builder' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO tools' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Invoice automation' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'Design tools' },
    { name: 'Landing Page Builder', url: '/landing-page-builder', description: 'Page builder' },
    { name: 'Ad Campaign Manager', url: '/ad-campaign-manager', description: 'Ad management' },
    { name: 'Lead Scoring AI', url: '/lead-scoring-ai', description: 'Lead qualification' },
    { name: 'Social Media AI', url: '/social-media-ai', description: 'Social media' },
    { name: 'Video Marketing AI', url: '/video-marketing-ai', description: 'Video creation' },
    { name: 'Email Sequence AI', url: '/email-sequence-ai', description: 'Email sequences' },
    { name: 'Event Marketing AI', url: '/event-marketing-ai', description: 'Event management' },
    { name: 'Code Assistant AI', url: '/code-assistant-ai', description: 'Development AI' },
    { name: 'API Builder Pro', url: '/api-builder-pro', description: 'API development' },
    { name: 'Bug Tracker AI', url: '/bug-tracker-ai', description: 'Bug management' },
    { name: 'Doc Generator AI', url: '/doc-generator-ai', description: 'Documentation' },
    { name: 'Security Scanner AI', url: '/security-scanner-ai', description: 'Security scanning' },
    { name: 'Performance Monitor AI', url: '/performance-monitor-ai', description: 'Performance monitoring' },
    { name: 'Test Generator AI', url: '/test-generator-ai', description: 'Test automation' },
    { name: 'CI/CD Pipeline AI', url: '/cicd-pipeline-ai', description: 'Pipeline automation' },
    { name: 'E-commerce AI', url: '/ecommerce-ai', description: 'E-commerce optimization' },
    { name: 'Payment Processor AI', url: '/payment-processor-ai', description: 'Payment processing' },
    { name: 'Financial Analytics AI', url: '/financial-analytics-ai', description: 'Financial insights' },
    { name: 'Banking Integration AI', url: '/banking-integration-ai', description: 'Banking solutions' },
    { name: 'Trading Bot AI', url: '/trading-bot-ai', description: 'Algorithmic trading' },
    { name: 'Portfolio Manager AI', url: '/portfolio-manager-ai', description: 'Portfolio management' },
    { name: 'Fraud Detection AI', url: '/fraud-detection-ai', description: 'Fraud prevention' },
    { name: 'Compliance AI', url: '/compliance-ai', description: 'Compliance management' },
    { name: 'Medical Imaging AI', url: '/medical-imaging-ai', description: 'Medical AI' },
    { name: 'Drug Discovery AI', url: '/drug-discovery-ai', description: 'Pharmaceutical AI' },
    { name: 'Patient Management AI', url: '/patient-management-ai', description: 'Healthcare management' },
    { name: 'Mental Health AI', url: '/mental-health-ai', description: 'Mental health support' },
    { name: 'Pharmacy AI', url: '/pharmacy-ai', description: 'Pharmacy management' },
    { name: 'Lab Management AI', url: '/lab-management-ai', description: 'Laboratory AI' },
    { name: 'Clinical Trial AI', url: '/clinical-trial-ai', description: 'Clinical research' },
    { name: 'Hospital Management AI', url: '/hospital-management-ai', description: 'Hospital AI' },
    { name: 'Learning Management AI', url: '/learning-management-ai', description: 'Educational AI' },
    { name: 'AI Tutor', url: '/ai-tutor', description: 'Intelligent tutoring' },
    { name: 'Assessment AI', url: '/assessment-ai', description: 'Assessment tools' },
    { name: 'Skill Assessment AI', url: '/skill-assessment-ai', description: 'Skill evaluation' },
    { name: 'Content Creation AI', url: '/content-creation-ai', description: 'Educational content' },
    { name: 'Collaboration AI', url: '/collaboration-ai', description: 'Team collaboration' },
    { name: 'Gamification AI', url: '/gamification-ai', description: 'Learning gamification' },
    { name: 'Learning Analytics AI', url: '/learning-analytics-ai', description: 'Learning insights' }
  ];
  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'ML solutions' },
    { name: 'Deep Learning', url: '/deep-learning', description: 'Neural networks' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Language AI' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting AI' },
    { name: 'Cognitive Computing', url: '/cognitive-computing', description: 'Cognitive AI' }
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