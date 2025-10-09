import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Business Intelligence Suite', url: '/ai-business-intelligence', description: 'Comprehensive business analytics' },
    { name: 'AI CRM Intelligence Pro', url: '/ai-crm-intelligence', description: 'Smart customer management' },
    { name: 'AI Healthcare Assistant Pro', url: '/ai-healthcare-assistant', description: 'Medical AI assistant' },
    { name: 'AI Fintech Analyzer Pro', url: '/ai-fintech-analyzer', description: 'Advanced financial analysis' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-app-builder', description: 'No-code mobile development' },
    { name: 'AI Cybersecurity Shield', url: '/ai-cybersecurity-shield', description: 'AI-powered security monitoring' },
    { name: 'AI Marketing Automation Hub', url: '/ai-marketing-automation', description: 'Comprehensive marketing automation' },
    { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Intelligent task management' },
    { name: 'AI Expense Tracker Pro', url: '/ai-expense-tracker', description: 'Smart expense management' },
    { name: 'AI Chatbot Builder Pro', url: '/ai-chatbot-builder', description: 'Create intelligent chatbots' },
    { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analytics' },
    { name: 'AI Lead Generation Pro', url: '/ai-lead-generation', description: 'Automated lead generation' },
    { name: 'AI Document Processor Pro', url: '/ai-document-processor', description: 'Intelligent document processing' },
    { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
    { name: 'AI Financial Analyzer Pro', url: '/ai-financial-analyzer', description: 'Comprehensive financial analysis' },
    { name: 'AI Inventory Manager Pro', url: '/ai-inventory-manager', description: 'Smart inventory management' },
    { name: 'AI HR Assistant Pro', url: '/ai-hr-assistant', description: 'HR automation' },
    { name: 'AI Legal Assistant Pro', url: '/ai-legal-assistant', description: 'Legal document analysis' },
    { name: 'AI Translation Hub Pro', url: '/ai-translation-hub', description: 'Professional translation services' },
    { name: 'AI Security Monitor Pro', url: '/ai-security-monitor', description: 'Advanced cybersecurity monitoring' },
    { name: 'AI Real Estate Analyzer', url: '/ai-real-estate-analyzer', description: 'Property analysis & investment' },
    { name: 'AI Manufacturing Intelligence', url: '/ai-manufacturing-intelligence', description: 'Smart manufacturing optimization' },
    { name: 'AI Transportation Optimizer', url: '/ai-transportation-optimizer', description: 'Logistics optimization' },
    { name: 'AI Education Platform Pro', url: '/ai-education-platform', description: 'Personalized learning platform' },
    { name: 'AI Energy Management Pro', url: '/ai-energy-management', description: 'Smart energy optimization' },
    { name: 'AI Insurance Analytics', url: '/ai-insurance-analytics', description: 'Insurance risk assessment' },
    { name: 'AI Email Assistant Pro', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler-pro', description: 'Intelligent scheduling' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'AI Business Intelligence Suite', url: '/ai-business-intelligence', description: 'Comprehensive business analytics' },
    { name: 'AI Supply Chain Optimization', url: '/ai-supply-chain-optimization', description: 'Intelligent supply chain management' },
    { name: 'AI Quality Assurance Pro', url: '/ai-quality-assurance-pro', description: 'Automated quality control' },
    { name: 'AI Human Resources Intelligence', url: '/ai-hr-intelligence', description: 'HR automation' },
    { name: 'AI Legal Intelligence Suite', url: '/ai-legal-intelligence', description: 'Legal document analysis' },
    { name: 'AI Real Estate Analytics', url: '/ai-real-estate-analytics', description: 'Property analysis & investment' },
    { name: 'AI Manufacturing Intelligence', url: '/ai-manufacturing-intelligence', description: 'Smart manufacturing optimization' },
    { name: 'AI Transportation & Logistics', url: '/ai-transportation-logistics', description: 'Logistics optimization' },
    { name: 'AI Education Platform Pro', url: '/ai-education-platform', description: 'Personalized learning platform' },
    { name: 'AI Energy Management', url: '/ai-energy-management', description: 'Smart energy optimization' },
    { name: 'AI Insurance Analytics Pro', url: '/ai-insurance-analytics', description: 'Insurance risk assessment' },
    { name: 'AI Email Intelligence Suite', url: '/ai-email-intelligence', description: 'Smart email management' },
    { name: 'AI Scheduler Intelligence', url: '/ai-scheduler-intelligence', description: 'Intelligent scheduling' },
    { name: 'AI Content Intelligence Pro', url: '/ai-content-intelligence', description: 'Advanced content creation' },
    { name: 'AI Customer Intelligence', url: '/ai-customer-intelligence', description: 'Advanced customer analytics' },
    { name: 'AI Financial Intelligence Pro', url: '/ai-financial-intelligence', description: 'Advanced financial analysis' },
    { name: 'AI Healthcare Intelligence', url: '/ai-healthcare-intelligence', description: 'Medical AI applications' },
    { name: 'AI Cybersecurity Intelligence', url: '/ai-cybersecurity-intelligence', description: 'AI-powered security' },
    { name: 'AI IoT Intelligence Suite', url: '/ai-iot-intelligence', description: 'Internet of Things intelligence' },
    { name: 'AI Blockchain Intelligence', url: '/ai-blockchain-intelligence', description: 'Blockchain and Web3 solutions' },
    { name: 'AI Quantum Computing Solutions', url: '/ai-quantum-computing', description: 'Quantum computing integration' },
    { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Autonomous system development' },
    { name: 'AI Robotics Intelligence', url: '/ai-robotics-intelligence', description: 'Robotic systems' },
    { name: 'AI Environmental Intelligence', url: '/ai-environmental-intelligence', description: 'Environmental monitoring' },
    { name: 'AI Space Technology Solutions', url: '/ai-space-technology', description: 'Space technology applications' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Data Intelligence', url: '/ai-data-intelligence', description: 'Transform data into insights' },
    { name: 'AI 3D & AR Solutions', url: '/ai-3d-ar-solutions', description: '3D models and AR experiences' },
    { name: 'AI Voice & Audio', url: '/ai-voice-audio', description: 'Voice cloning and audio processing' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Advanced forecasting' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },
    { name: 'AI Security & Fraud Detection', url: '/ai-security-fraud-detection', description: 'Advanced fraud prevention' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Intelligent document analysis' }
  ];

  const itServices = [
    { name: 'Cloud Migration & Management', url: '/cloud-migration-management', description: 'Comprehensive cloud services' },
    { name: 'Enterprise Security Solutions', url: '/enterprise-security-solutions', description: 'Advanced security solutions' },
    { name: 'IT Infrastructure Management', url: '/it-infrastructure-management', description: 'Comprehensive IT infrastructure' },
    { name: 'Data Center Solutions Pro', url: '/data-center-solutions-pro', description: 'Enterprise data center design' },
    { name: 'Network Security & Firewall', url: '/network-security-firewall', description: 'Advanced network security' },
    { name: 'IT Consulting & Strategy', url: '/it-consulting-strategy', description: 'Strategic IT consulting' },
    { name: 'Managed IT Services Pro', url: '/managed-it-services-pro', description: 'Comprehensive managed services' },
    { name: 'Cloud Security & Compliance', url: '/cloud-security-compliance', description: 'Cloud security implementation' },
    { name: 'IT Asset Management Pro', url: '/it-asset-management-pro', description: 'IT asset lifecycle management' },
    { name: 'Backup & Disaster Recovery', url: '/backup-disaster-recovery', description: 'Comprehensive backup solutions' },
    { name: 'IT Training & Support', url: '/it-training-support', description: 'IT training programs' },
    { name: 'IT Performance Optimization', url: '/it-performance-optimization', description: 'System performance optimization' },
    { name: 'Cybersecurity Solutions Pro', url: '/cybersecurity-solutions-pro', description: 'Advanced cybersecurity' },
    { name: 'DevOps & CI/CD Pro', url: '/devops-cicd-pro', description: 'Advanced DevOps implementation' },
    { name: 'Database Services Pro', url: '/database-services-pro', description: 'Advanced database services' },
    { name: 'Network Infrastructure Pro', url: '/network-infrastructure-pro', description: 'Enterprise network design' },
    { name: 'IT Support & Helpdesk Pro', url: '/it-support-helpdesk-pro', description: 'Advanced IT support' },
    { name: 'Cloud Migration Pro', url: '/cloud-migration-pro', description: 'Advanced cloud migration' },
    { name: 'Compliance & Governance Pro', url: '/compliance-governance-pro', description: 'IT compliance solutions' },
    { name: 'Developer Tools & Platforms', url: '/developer-tools-platforms', description: 'Advanced development tools' },
    { name: 'Marketing Technology Stack', url: '/marketing-technology-stack', description: 'Marketing technology solutions' },
    { name: 'Productivity Solutions Pro', url: '/productivity-solutions-pro', description: 'Enterprise productivity solutions' },
    { name: 'Blockchain & Web3 Solutions', url: '/blockchain-web3-solutions', description: 'Blockchain development' },
    { name: 'IoT & Edge Computing Pro', url: '/iot-edge-computing-pro', description: 'IoT and edge computing' },
    { name: 'AI Infrastructure Pro', url: '/ai-infrastructure-pro', description: 'AI infrastructure setup' },
    { name: 'Enterprise Integration Pro', url: '/enterprise-integration-pro', description: 'Enterprise system integration' },
    { name: 'Quantum Computing Infrastructure', url: '/quantum-computing-infrastructure', description: 'Quantum computing infrastructure' },
    { name: 'Autonomous Systems Infrastructure', url: '/autonomous-systems-infrastructure', description: 'Autonomous systems infrastructure' },
    { name: 'Space Technology Infrastructure', url: '/space-technology-infrastructure', description: 'Space technology infrastructure' },
    { name: 'Environmental Technology Solutions', url: '/environmental-technology-solutions', description: 'Environmental monitoring' },
    { name: 'Healthcare Technology Solutions', url: '/healthcare-technology-solutions', description: 'Healthcare technology infrastructure' },
    { name: 'Financial Technology Infrastructure', url: '/financial-technology-infrastructure', description: 'Fintech infrastructure' },
    { name: 'Educational Technology Solutions', url: '/educational-technology-solutions', description: 'Educational technology infrastructure' },
    { name: 'Retail Technology Solutions', url: '/retail-technology-solutions', description: 'Retail technology infrastructure' },
    { name: 'Manufacturing Technology Solutions', url: '/manufacturing-technology-solutions', description: 'Manufacturing technology infrastructure' },
    { name: 'Transportation Technology Solutions', url: '/transportation-technology-solutions', description: 'Transportation technology infrastructure' },
    { name: 'Energy Technology Solutions', url: '/energy-technology-solutions', description: 'Energy technology infrastructure' },
    { name: 'Government Technology Solutions', url: '/government-technology-solutions', description: 'Government technology infrastructure' },
    { name: 'Non-Profit Technology Solutions', url: '/non-profit-technology-solutions', description: 'Non-profit technology infrastructure' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent automation' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business apps' },
    { name: 'Expense Tracker Pro', url: '/expense-tracker', description: 'AI expense management' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', description: 'AI task management' },
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics' }
  ];

  const additionalServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial insights' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Demo', url: '/demo' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Health', url: '/system-status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
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
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            </a>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Services →
            </a>
          </div>

          {/* Additional AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              AI Tools
            </h3>
            <ul className="space-y-2">
              {additionalServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Company</h4>
                <ul className="space-y-1">
                  {companyLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Support</h4>
                <ul className="space-y-1">
                  {supportLinks.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;