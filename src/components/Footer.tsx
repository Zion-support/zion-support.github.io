import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' },
    { name: 'AI Legal Document Analyzer', url: '/ai-legal-analyzer', description: 'Legal document analysis' },
    { name: 'AI Real Estate Assistant', url: '/ai-real-estate', description: 'Property analysis & valuation' },
    { name: 'AI Supply Chain Optimizer', url: '/ai-supply-chain', description: 'Supply chain optimization' },
    { name: 'AI HR Recruiter Pro', url: '/ai-hr-recruiter', description: 'Intelligent recruitment' },
    { name: 'AI Energy Management', url: '/ai-energy-management', description: 'Smart energy optimization' },
    { name: 'AI Travel Planner', url: '/ai-travel-planner', description: 'Intelligent travel planning' },
    { name: 'AI Event Management', url: '/ai-event-management', description: 'AI-powered event planning' },
    { name: 'AI Inventory Tracker', url: '/ai-inventory-tracker', description: 'Smart inventory management' },
    { name: 'AI Customer Feedback Analyzer', url: '/ai-feedback-analyzer', description: 'Sentiment analysis' },
    { name: 'AI Compliance Monitor', url: '/ai-compliance-monitor', description: 'Regulatory compliance' },
    { name: 'AI Translation Pro', url: '/ai-translation-pro', description: 'Advanced translation' },
    { name: 'AI Weather Predictor', url: '/ai-weather-predictor', description: 'Weather forecasting' },
    { name: 'AI Tax Optimizer', url: '/ai-tax-optimizer', description: 'Tax planning & optimization' },
    { name: 'AI Learning Management', url: '/ai-learning-management', description: 'Personalized education' },
    { name: 'AI Restaurant Manager', url: '/ai-restaurant-manager', description: 'Restaurant operations' },
    { name: 'AI Fleet Management', url: '/ai-fleet-management', description: 'Fleet optimization' },
    { name: 'AI Insurance Analyzer', url: '/ai-insurance-analyzer', description: 'Insurance analysis' },
    { name: 'AI Construction Manager', url: '/ai-construction-manager', description: 'Construction project management' },
    { name: 'AI Healthcare Assistant', url: '/ai-healthcare-assistant', description: 'Medical AI assistance' },
    { name: 'AI Agriculture Optimizer', url: '/ai-agriculture-optimizer', description: 'Smart farming solutions' }
  ];

  const aiServices = [
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' },
    { name: 'AI Research & Development', url: '/ai-research', description: 'Cutting-edge AI research' },
    { name: 'AI Ethics & Governance', url: '/ai-ethics', description: 'Responsible AI deployment' },
    { name: 'AI Edge Computing', url: '/ai-edge', description: 'Edge AI deployment' },
    { name: 'AI Data Engineering', url: '/ai-data-engineering', description: 'AI data pipelines' },
    { name: 'AI Model Operations (MLOps)', url: '/ai-mlops', description: 'ML model management' },
    { name: 'AI Conversational Intelligence', url: '/ai-conversational', description: 'Advanced chatbots' },
    { name: 'AI Predictive Maintenance', url: '/ai-predictive-maintenance', description: 'Equipment monitoring' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Fraud prevention' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendations', description: 'Personalized recommendations' },
    { name: 'AI Time Series Analysis', url: '/ai-time-series', description: 'Forecasting & analysis' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Advanced image processing' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS/Azure/GCP setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity' },
    { name: 'AI-Powered Infrastructure', url: '/ai-infrastructure', description: 'Intelligent infrastructure' },
    { name: 'Quantum-Safe Security', url: '/quantum-security', description: 'Future-proof security' },
    { name: 'Edge Computing Solutions', url: '/edge-computing', description: 'Distributed computing' },
    { name: 'Hybrid Cloud Management', url: '/hybrid-cloud', description: 'Multi-cloud orchestration' },
    { name: 'AI DevOps Platform', url: '/ai-devops', description: 'Intelligent DevOps' },
    { name: 'Zero-Trust Architecture', url: '/zero-trust', description: 'Zero-trust security' },
    { name: 'Data Center Modernization', url: '/data-center', description: 'Infrastructure transformation' },
    { name: 'Network Security Operations Center', url: '/soc', description: '24/7 security monitoring' },
    { name: 'API Management Platform', url: '/api-management', description: 'API lifecycle management' },
    { name: 'Disaster Recovery as a Service', url: '/draas', description: 'Business continuity' },
    { name: 'IT Service Management', url: '/itsm', description: 'Comprehensive ITSM' }
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
    { name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics' },
    { name: 'Neural Interface Technology', url: '/neural-interface', description: 'Brain-computer interfaces' },
    { name: 'Space Technology Solutions', url: '/space-tech', description: 'Satellite & space systems' },
    { name: 'Biometric Security Systems', url: '/biometric-security', description: 'Advanced authentication' },
    { name: 'Digital Twin Technology', url: '/digital-twin', description: 'Virtual system replicas' },
    { name: 'Augmented Reality Solutions', url: '/ar-solutions', description: 'Immersive AR applications' },
    { name: 'Virtual Reality Platforms', url: '/vr-platforms', description: 'VR experiences' },
    { name: '5G Network Solutions', url: '/5g-networks', description: 'Next-gen connectivity' },
    { name: 'Smart City Solutions', url: '/smart-city', description: 'Urban infrastructure' },
    { name: 'Autonomous Vehicle Systems', url: '/autonomous-vehicles', description: 'Self-driving technology' },
    { name: 'Precision Medicine Platform', url: '/precision-medicine', description: 'Personalized healthcare' },
    { name: 'Climate Tech Solutions', url: '/climate-tech', description: 'Environmental technology' },
    { name: 'Advanced Robotics', url: '/advanced-robotics', description: 'Next-gen robotics' },
    { name: 'Metaverse Development', url: '/metaverse', description: 'Virtual world creation' },
    { name: 'Advanced Materials AI', url: '/materials-ai', description: 'AI materials discovery' },
    { name: 'Synthetic Biology Platform', url: '/synthetic-biology', description: 'AI-driven biotechnology' }
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
                  <Link
                    to={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
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