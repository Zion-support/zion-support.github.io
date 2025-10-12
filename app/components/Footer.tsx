'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight } from 'lucide-react';

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
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media management' },
    { name: 'AI Email Marketing Pro', url: '/ai-email-marketing-pro', description: 'Intelligent email campaigns' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'Smart project coordination' },
    { name: 'AI Customer Support Pro', url: '/ai-customer-support-pro', description: 'Advanced customer service' },
    { name: 'AI Video Editor Pro', url: '/ai-video-editor-pro', description: 'Professional video editing' },
    { name: 'AI Translation Service', url: '/ai-translation-service', description: 'Real-time language translation' },
    { name: 'AI Voice Assistant Pro', url: '/ai-voice-assistant-pro', description: 'Enterprise voice solutions' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Advanced business analytics' },
    { name: 'AI Smart Scheduler', url: '/ai-smart-scheduler', description: 'Intelligent scheduling system' },
    { name: 'AI Content Moderation Pro', url: '/ai-content-moderation-pro', description: 'Advanced content filtering' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoice creation' },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Smart expense management' },
    { name: 'AI Contract Analyzer Pro', url: '/ai-contract-analyzer-pro', description: 'Legal document analysis' },
    { name: 'AI Survey Builder Pro', url: '/ai-survey-builder-pro', description: 'Intelligent survey creation' },
    { name: 'AI Accounting Pro', url: '/ai-accounting-pro', description: 'Advanced accounting automation' },
    { name: 'AI Recruitment Pro', url: '/ai-recruitment-pro', description: 'Smart talent acquisition' },
    { name: 'AI Predictive Maintenance Pro', url: '/ai-predictive-maintenance-pro', description: 'Advanced equipment monitoring' },
    { name: 'AI Energy Manager Pro', url: '/ai-energy-manager-pro', description: 'Smart energy optimization' },
    { name: 'AI Supply Chain Pro', url: '/ai-supply-chain-pro', description: 'Advanced supply chain AI' },
    { name: 'AI Fraud Detection Pro', url: '/ai-fraud-detection-pro', description: 'Advanced fraud prevention' },
    { name: 'AI Marketing Automation Pro', url: '/ai-marketing-automation-pro', description: 'Complete marketing automation' },
    { name: 'AI Document AI Pro', url: '/ai-document-ai-pro', description: 'Advanced document processing' },
    { name: 'AI 3D Generation Pro', url: '/ai-3d-generation-pro', description: 'Professional 3D content creation' },
    { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems Pro', url: '/ai-autonomous-systems-pro', description: 'Self-operating AI systems' },
    { name: 'AI Blockchain Solutions Pro', url: '/ai-blockchain-solutions-pro', description: 'Decentralized AI applications' },
    { name: 'AI Edge Computing Pro', url: '/ai-edge-computing-pro', description: 'Advanced distributed processing' },
    { name: 'AI Quantum Computing', url: '/ai-quantum-computing', description: 'Quantum AI processing' },
    { name: 'AI AR/VR Solutions Pro', url: '/ai-ar-vr-solutions-pro', description: 'Advanced immersive experiences' },
    { name: 'AI IoT Analytics Pro', url: '/ai-iot-analytics-pro', description: 'Advanced IoT intelligence' },
    { name: 'AI Machine Learning Pro', url: '/ai-machine-learning-pro', description: 'Advanced ML algorithms' }
  ];

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
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Complete digital overhaul' },
    { name: 'IT Infrastructure Management', url: '/it-infrastructure-management', description: 'Comprehensive infrastructure oversight' },
    { name: 'Cloud Migration Services', url: '/cloud-migration-services', description: 'Seamless cloud transitions' },
    { name: 'IT Security Auditing', url: '/it-security-auditing', description: 'Comprehensive security assessments' },
    { name: 'IT Training & Support', url: '/it-training-support', description: 'Staff training and support' },
    { name: 'IT Strategy Planning', url: '/it-strategy-planning', description: 'Strategic IT roadmaps' },
    { name: 'IT Cost Optimization', url: '/it-cost-optimization', description: 'Cost reduction strategies' },
    { name: 'IT Compliance Management', url: '/it-compliance-management', description: 'Regulatory compliance' },
    { name: 'IT Disaster Recovery', url: '/it-disaster-recovery', description: 'Business continuity planning' },
    { name: 'IT Vendor Management', url: '/it-vendor-management', description: 'Vendor relationship management' },
    { name: 'IT Change Management', url: '/it-change-management', description: 'Organizational change support' },
    { name: 'IT Risk Assessment', url: '/it-risk-assessment', description: 'Comprehensive risk analysis' },
    { name: 'IT Governance', url: '/it-governance', description: 'IT governance frameworks' },
    { name: 'IT Service Management', url: '/it-service-management', description: 'ITSM implementation' },
    { name: 'IT Capacity Planning', url: '/it-capacity-planning', description: 'Resource capacity planning' },
    { name: 'IT Performance Monitoring', url: '/it-performance-monitoring', description: 'System performance tracking' },
    { name: 'IT Backup Solutions', url: '/it-backup-solutions', description: 'Data backup strategies' },
    { name: 'IT Monitoring & Alerting', url: '/it-monitoring-alerting', description: 'Proactive system monitoring' },
    { name: 'IT Patch Management', url: '/it-patch-management', description: 'System update management' },
    { name: 'IT License Management', url: '/it-license-management', description: 'Software license optimization' },
    { name: 'IT Documentation', url: '/it-documentation', description: 'Technical documentation services' },
    { name: 'IT Quality Assurance', url: '/it-quality-assurance', description: 'Quality testing services' },
    { name: 'IT Innovation Consulting', url: '/it-innovation-consulting', description: 'Technology innovation guidance' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion AI Social Media Pro', url: '/zion-ai-social-media-pro', description: 'Advanced social media automation' },
    { name: 'Zion AI Email Marketing Pro', url: '/zion-ai-email-marketing-pro', description: 'Intelligent email campaigns' },
    { name: 'Zion AI Project Manager Pro', url: '/zion-ai-project-manager-pro', description: 'Advanced project coordination' },
    { name: 'Zion AI Customer Service Pro', url: '/zion-ai-customer-service-pro', description: 'Enterprise customer service' },
    { name: 'Zion AI Video Editor Pro', url: '/zion-ai-video-editor-pro', description: 'Professional video editing' },
    { name: 'Zion AI Translation Pro', url: '/zion-ai-translation-pro', description: 'Advanced language translation' },
    { name: 'Zion AI Voice Assistant Pro', url: '/zion-ai-voice-assistant-pro', description: 'Enterprise voice solutions' },
    { name: 'Zion AI Analytics Dashboard Pro', url: '/zion-ai-analytics-dashboard-pro', description: 'Advanced business analytics' },
    { name: 'Zion AI Smart Scheduler Pro', url: '/zion-ai-smart-scheduler-pro', description: 'Intelligent scheduling system' },
    { name: 'Zion AI Content Moderation Pro', url: '/zion-ai-content-moderation-pro', description: 'Advanced content filtering' },
    { name: 'Zion AI Invoice Generator Pro', url: '/zion-ai-invoice-generator-pro', description: 'Automated invoice creation' },
    { name: 'Zion AI Expense Tracker Pro', url: '/zion-ai-expense-tracker-pro', description: 'Smart expense management' },
    { name: 'Zion AI Contract Analyzer Pro', url: '/zion-ai-contract-analyzer-pro', description: 'Legal document analysis' },
    { name: 'Zion AI Survey Builder Pro', url: '/zion-ai-survey-builder-pro', description: 'Intelligent survey creation' },
    { name: 'Zion AI Accounting Pro', url: '/zion-ai-accounting-pro', description: 'Advanced accounting automation' },
    { name: 'Zion AI Recruitment Pro', url: '/zion-ai-recruitment-pro', description: 'Smart talent acquisition' },
    { name: 'Zion AI Predictive Maintenance Pro', url: '/zion-ai-predictive-maintenance-pro', description: 'Advanced equipment monitoring' },
    { name: 'Zion AI Energy Manager Pro', url: '/zion-ai-energy-manager-pro', description: 'Smart energy optimization' },
    { name: 'Zion AI Supply Chain Pro', url: '/zion-ai-supply-chain-pro', description: 'Advanced supply chain AI' },
    { name: 'Zion AI Fraud Detection Pro', url: '/zion-ai-fraud-detection-pro', description: 'Advanced fraud prevention' },
    { name: 'Zion AI Marketing Automation Pro', url: '/zion-ai-marketing-automation-pro', description: 'Complete marketing automation' },
    { name: 'Zion AI Document AI Pro', url: '/zion-ai-document-ai-pro', description: 'Advanced document processing' },
    { name: 'Zion AI 3D Generation Pro', url: '/zion-ai-3d-generation-pro', description: 'Professional 3D content creation' },
    { name: 'Zion AI Holographic Workspace', url: '/zion-ai-holographic-workspace', description: 'Immersive work environments' },
    { name: 'Zion AI Autonomous Systems Pro', url: '/zion-ai-autonomous-systems-pro', description: 'Self-operating AI systems' },
    { name: 'Zion AI Blockchain Solutions Pro', url: '/zion-ai-blockchain-solutions-pro', description: 'Decentralized AI applications' },
    { name: 'Zion AI Edge Computing Pro', url: '/zion-ai-edge-computing-pro', description: 'Advanced distributed processing' },
    { name: 'Zion AI Quantum Computing', url: '/zion-ai-quantum-computing', description: 'Quantum AI processing' },
    { name: 'Zion AI AR/VR Solutions Pro', url: '/zion-ai-ar-vr-solutions-pro', description: 'Advanced immersive experiences' },
    { name: 'Zion AI IoT Analytics Pro', url: '/zion-ai-iot-analytics-pro', description: 'Advanced IoT intelligence' },
    { name: 'Zion AI Machine Learning Pro', url: '/zion-ai-machine-learning-pro', description: 'Advanced ML algorithms' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
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
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
<<<<<<< HEAD
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
                <div>
                  <span className="font-medium">364 E Main St STE 1008</span><br />
                  <span className="text-gray-400">Middletown DE 19709</span>
                </div>
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
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Cloud className="w-5 h-5 text-white" />
              </div>
=======
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Database className="w-5 h-5 mr-2 text-purple-400" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
<<<<<<< HEAD
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-purple-500/20">
                <Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
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

<<<<<<< HEAD
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

<<<<<<< HEAD
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
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
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
