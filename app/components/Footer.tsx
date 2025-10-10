'use client'
import React, { memo } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react'
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
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
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' },
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
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },
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
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ]

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ]

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
=======
import { Link } from 'react-router-dom';
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
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' },
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' },
    { name: 'Cloud Infrastructure Manager', url: '/cloud-infrastructure-manager', description: 'Cloud management' },
    { name: 'Email Marketing Automation', url: '/email-marketing-automation', description: 'Email marketing' },
    { name: 'Project Management Pro', url: '/project-management-pro', description: 'Project management' },
    { name: 'E-commerce Analytics Pro', url: '/ecommerce-analytics-pro', description: 'E-commerce analytics' },
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & recruitment' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Content creation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Lead qualification' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email automation' },
    { name: 'AI Content Generator', url: '/ai-content-generator', description: 'Content generation' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Lead generation' }
  ];
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Pioneering the future of AI and IT solutions. We transform businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>AI Services</span>
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    {service.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-purple-400" />
              <span>IT Services</span>
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    {service.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
              <li className="pt-2 border-t border-purple-500/20">
                <Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </ul>
          </div>
          
          {/* Micro SAAS */}
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-400" />
              <span>Micro SAAS</span>
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    {service.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
              <li className="pt-2 border-t border-green-500/20">
                <Link 
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All Micro SAAS
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
                <a href="https://youtube.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  YouTube
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com</p>
                <p>📞 +1 302 464 0950</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 gap-y-2">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Sitemap
              </a>
=======
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
})

Footer.displayName = 'Footer'
export default Footer
=======
  );
});
Footer.displayName = 'Footer';
export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
