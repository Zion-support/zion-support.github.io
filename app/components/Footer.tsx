'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, ArrowRight, Globe, Users, Shield, Zap, BarChart, Cpu, Target, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Rocket, Car, Building, TreePine, Home, Scale, Trophy, Gamepad2, Share2, Truck, Factory } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbot', url: '/ai-chatbot-builder' },
    { name: 'AI CRM', url: '/ai-crm' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Financial Services', url: '/ai-financial-services' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
    { name: 'AI Document Processing', url: '/ai-document-processing' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing' },
    { name: 'AI Video Analysis', url: '/ai-video-analysis' },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis' },
    { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise' },
    { name: 'AI Content Moderation', url: '/ai-content-moderation' },
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence' },
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics' },
    { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai' },
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics' },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting' },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics' },
    { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai' },
    { name: 'AI Automated Testing', url: '/ai-automated-testing' },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management' },
    { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn' },
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting' },
    { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant' },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro' },
    { name: 'AI Quantum Computing', url: '/ai-quantum-computing' },
    { name: 'AI Metaverse Solutions', url: '/ai-metaverse-solutions' },
    { name: 'AI Climate Intelligence', url: '/ai-climate-intelligence' },
    { name: 'AI Space Technology', url: '/ai-space-technology' },
    { name: 'AI Brain-Computer Interface', url: '/ai-brain-computer-interface' },
    { name: 'AI Digital Twin', url: '/ai-digital-twin' },
    { name: 'AI Autonomous Vehicles', url: '/ai-autonomous-vehicles' },
    { name: 'AI Smart Cities', url: '/ai-smart-cities' },
    { name: 'AI Precision Medicine', url: '/ai-precision-medicine' },
    { name: 'AI Agricultural Intelligence', url: '/ai-agricultural-intelligence' },
    { name: 'AI Energy Optimization', url: '/ai-energy-optimization' },
    { name: 'AI Cybersecurity AI', url: '/ai-cybersecurity-ai' },
    { name: 'AI Real Estate Intelligence', url: '/ai-real-estate-intelligence' },
    { name: 'AI Legal Tech', url: '/ai-legal-tech' },
    { name: 'AI Sports Analytics', url: '/ai-sports-analytics' },
    { name: 'AI Gaming Intelligence', url: '/ai-gaming-intelligence' },
    { name: 'AI Social Media Intelligence', url: '/ai-social-media-intelligence' },
    { name: 'AI Supply Chain AI', url: '/ai-supply-chain-ai' },
    { name: 'AI Manufacturing Intelligence', url: '/ai-manufacturing-intelligence' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
    { name: 'API Development', url: '/api-development' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions' },
    { name: 'Database Management', url: '/database-management' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd' },
    { name: 'IT Support', url: '/it-support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi' },
    { name: 'Custom Software', url: '/custom-software' },
    { name: 'Network Infrastructure', url: '/network-infrastructure' },
    { name: 'IT Asset Management', url: '/it-asset-management' },
    { name: 'IT Security Services', url: '/it-security-services' },
    { name: 'IT Project Management', url: '/it-project-management' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development' },
    { name: 'AI Integration Services', url: '/ai-integration-services' },
    { name: 'Blockchain Development', url: '/blockchain-development' },
    { name: 'IoT Development', url: '/iot-development' },
    { name: 'E-commerce Development', url: '/e-commerce-development' },
    { name: 'Advanced API Development', url: '/api-development-advanced' },
    { name: 'Data Engineering', url: '/data-engineering' },
    { name: 'Advanced Cybersecurity', url: '/cybersecurity-advanced' },
    { name: 'Cloud Migration', url: '/cloud-migration-advanced' },
    { name: 'Advanced DevOps & SRE', url: '/devops-advanced' },
    { name: 'MLOps & AI Operations', url: '/machine-learning-ops' },
    { name: 'Enterprise Integration', url: '/enterprise-integration' },
    { name: 'Performance Optimization', url: '/performance-optimization' },
    { name: 'Disaster Recovery', url: '/disaster-recovery-advanced' },
    { name: 'Compliance Automation', url: '/compliance-automation' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization' },
    { name: 'Security Automation', url: '/security-automation' },
    { name: 'Data Visualization & BI', url: '/data-visualization' },
    { name: 'Workflow Automation', url: '/workflow-automation' },
    { name: 'Cloud-Native Security', url: '/cloud-native-security' },
    { name: 'Quantum Computing Infrastructure', url: '/quantum-computing-infrastructure' },
    { name: 'Edge Computing Solutions', url: '/edge-computing-solutions' },
    { name: '5G Network Implementation', url: '/5g-network-implementation' },
    { name: 'AR/VR Development', url: '/ar-vr-development' },
    { name: 'Blockchain Infrastructure', url: '/blockchain-infrastructure' },
    { name: 'IoT Platform Development', url: '/iot-platform-development' },
    { name: 'Microservices Architecture', url: '/microservices-architecture' },
    { name: 'Serverless Computing', url: '/serverless-computing' },
    { name: 'Container Orchestration', url: '/container-orchestration' },
    { name: 'API Gateway Management', url: '/api-gateway-management' },
    { name: 'Data Lake Solutions', url: '/data-lake-solutions' },
    { name: 'Real-time Analytics', url: '/real-time-analytics' },
    { name: 'Disaster Recovery', url: '/disaster-recovery' },
    { name: 'Compliance Management', url: '/compliance-management' },
    { name: 'IT Transformation', url: '/it-transformation' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization' },
    { name: 'Performance Monitoring', url: '/performance-monitoring' },
    { name: 'Security Operations Center', url: '/security-operations-center' },
    { name: 'IT Governance', url: '/it-governance' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' },
    { name: 'Zion Data Sync', url: '/zion-data-sync' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet' },
    { name: 'Zion Project Master', url: '/zion-project-master' },
    { name: 'Zion Email Automation', url: '/zion-email-automation' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation' },
    { name: 'Zion Performance Monitor', url: '/zion-performance-monitor' },
    { name: 'Zion Compliance Manager', url: '/zion-compliance-manager' },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor' },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro' },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer' },
    { name: 'Zion Customer Insights Pro', url: '/zion-customer-insights' },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant' },
    { name: 'Zion AI Meeting Assistant', url: '/zion-ai-meeting-assistant' },
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer' },
    { name: 'Zion AI Data Cleaner', url: '/zion-ai-data-cleaner' },
    { name: 'Zion AI Contract Analyzer', url: '/zion-ai-contract-analyzer' },
    { name: 'Zion AI Survey Builder', url: '/zion-ai-survey-builder' },
    { name: 'Zion AI Accounting Assistant', url: '/zion-ai-accounting-assistant' },
    { name: 'Zion AI Recruitment Pro', url: '/zion-ai-recruitment-pro' },
    { name: 'Zion AI Content Moderation', url: '/zion-ai-content-moderation' },
    { name: 'Zion AI Predictive Maintenance', url: '/zion-ai-predictive-maintenance' },
    { name: 'Zion AI Energy Manager', url: '/zion-ai-energy-manager' },
    { name: 'Zion AI Supply Chain Optimizer', url: '/zion-ai-supply-chain-optimizer' },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector' },
    { name: 'Zion AI Customer Service Pro', url: '/zion-ai-customer-service-pro' },
    { name: 'Zion AI Marketing Automation', url: '/zion-ai-marketing-automation' },
    { name: 'Zion AI Document AI', url: '/zion-ai-document-ai' },
    { name: 'Zion AI Voice Assistant', url: '/zion-ai-voice-assistant' },
    { name: 'Zion AI Image Generator', url: '/zion-ai-image-generator' },
    { name: 'Zion AI Video Generator', url: '/zion-ai-video-generator' },
    { name: 'Zion AI Music Composer', url: '/zion-ai-music-composer' },
    { name: 'Zion AI Code Generator', url: '/zion-ai-code-generator' },
    { name: 'Zion AI Website Builder', url: '/zion-ai-website-builder' },
    { name: 'Zion AI App Builder', url: '/zion-ai-app-builder' },
    { name: 'Zion AI Chatbot Builder', url: '/zion-ai-chatbot-builder' },
    { name: 'Zion AI Email Writer', url: '/zion-ai-email-writer' },
    { name: 'Zion AI Social Media Manager', url: '/zion-ai-social-media-manager' },
    { name: 'Zion AI SEO Analyzer', url: '/zion-ai-seo-analyzer' },
    { name: 'Zion AI Keyword Research', url: '/zion-ai-keyword-research' },
    { name: 'Zion AI Competitor Analysis', url: '/zion-ai-competitor-analysis' },
    { name: 'Zion AI Price Optimizer', url: '/zion-ai-price-optimizer' },
    { name: 'Zion AI Inventory Optimizer', url: '/zion-ai-inventory-optimizer' },
    { name: 'Zion AI Customer Segmentation', url: '/zion-ai-customer-segmentation' },
    { name: 'Zion AI Sales Predictor', url: '/zion-ai-sales-predictor' },
    { name: 'Zion AI Risk Assessment', url: '/zion-ai-risk-assessment' },
    { name: 'Zion AI Compliance Checker', url: '/zion-ai-compliance-checker' },
    { name: 'Zion AI Performance Optimizer', url: '/zion-ai-performance-optimizer' },
    { name: 'Zion AI Data Visualizer', url: '/zion-ai-data-visualizer' },
    { name: 'Zion AI Report Generator', url: '/zion-ai-report-generator' },
    { name: 'Zion AI Meeting Scheduler', url: '/zion-ai-meeting-scheduler' },
    { name: 'Zion AI Task Manager', url: '/zion-ai-task-manager' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-xs text-cyan-400">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Leading provider of advanced AI and IT solutions that transform businesses worldwide. 
              We deliver cutting-edge technology with 50% cost savings.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 10).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/ai-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 10).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/it-services" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All IT Services
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Micro SaaS</h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 10).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All Micro SaaS
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
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
              © 2024 Zion Tech Group. All rights reserved. | 50% cost savings vs market rates
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;