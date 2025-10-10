'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', url: '/ai-video-analysis', description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise', description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', description: 'ML forecasting' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai', description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', description: 'Financial predictions' },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai', description: 'Advanced conversations' },
    { name: 'AI Automated Testing', url: '/ai-automated-testing', description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn', description: 'Churn prevention' },
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting', description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'API Development', url: '/api-development', description: 'API development & management' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Comprehensive security' },
    { name: 'Database Management', url: '/database-management', description: 'Data processing & storage' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network design & setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle management' },
    { name: 'IT Security Services', url: '/it-security-services', description: 'Security assessment & monitoring' },
    { name: 'IT Project Management', url: '/it-project-management', description: 'Professional project management' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Microservices & containers' },
    { name: 'AI Integration Services', url: '/ai-integration-services', description: 'AI model integration' },
    { name: 'Blockchain Development', url: '/blockchain-development', description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', url: '/iot-development', description: 'Connected device solutions' },
    { name: 'E-commerce Development', url: '/e-commerce-development', description: 'Online store platforms' },
    { name: 'Advanced API Development', url: '/api-development-advanced', description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', url: '/data-engineering', description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', url: '/cybersecurity-advanced', description: 'Threat hunting & response' },
    { name: 'Cloud Migration', url: '/cloud-migration-advanced', description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', url: '/devops-advanced', description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', url: '/machine-learning-ops', description: 'ML model deployment' },
    { name: 'Enterprise Integration', url: '/enterprise-integration', description: 'System integration' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', url: '/disaster-recovery-advanced', description: 'Business continuity' },
    { name: 'Compliance Automation', url: '/compliance-automation', description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', description: 'Cost reduction' },
    { name: 'Security Automation', url: '/security-automation', description: 'Automated security' },
    { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },
    { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data integration platform' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation platform' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management AI' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing AI' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },
    { name: 'Zion Performance Monitor', url: '/zion-performance-monitor', description: 'Performance monitoring' },
    { name: 'Zion Compliance Manager', url: '/zion-compliance-manager', description: 'Compliance management' },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', description: 'Advanced translation' },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', description: 'Intelligent code review' },
    { name: 'Zion Customer Insights Pro', url: '/zion-customer-insights', description: 'Customer analytics' },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', description: 'Smart email management' },
    { name: 'Zion AI Meeting Assistant', url: '/zion-ai-meeting-assistant', description: 'Meeting automation' },
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', description: 'SEO optimization' },
    { name: 'Zion AI Data Cleaner', url: '/zion-ai-data-cleaner', description: 'Data cleaning & validation' },
    { name: 'Zion AI Contract Analyzer', url: '/zion-ai-contract-analyzer', description: 'Contract analysis' },
    { name: 'Zion AI Survey Builder', url: '/zion-ai-survey-builder', description: 'Intelligent surveys' },
    { name: 'Zion AI Accounting Assistant', url: '/zion-ai-accounting-assistant', description: 'AI accounting' },
    { name: 'Zion AI Recruitment Pro', url: '/zion-ai-recruitment-pro', description: 'AI recruitment' },
    { name: 'Zion AI Content Moderation', url: '/zion-ai-content-moderation', description: 'Content moderation' },
    { name: 'Zion AI Predictive Maintenance', url: '/zion-ai-predictive-maintenance', description: 'Equipment maintenance' },
    { name: 'Zion AI Energy Manager', url: '/zion-ai-energy-manager', description: 'Energy optimization' },
    { name: 'Zion AI Supply Chain Optimizer', url: '/zion-ai-supply-chain-optimizer', description: 'Supply chain AI' },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', description: 'Fraud detection' },
    { name: 'Zion AI Customer Service Pro', url: '/zion-ai-customer-service-pro', description: 'Advanced customer service' },
    { name: 'Zion AI Marketing Automation', url: '/zion-ai-marketing-automation', description: 'Marketing AI' },
    { name: 'Zion AI Document AI', url: '/zion-ai-document-ai', description: 'Document processing' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Consultation', url: '/consultation' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology, 
              artificial intelligence, and innovative software solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-6">AI Services</h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-6">IT Services</h4>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-6">Micro SAAS</h4>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
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
