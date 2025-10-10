'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    // Conversational AI
    { name: 'AI Enterprise Chatbots', url: '/ai-chatbots-enterprise', description: 'Enterprise-grade chatbots' },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },
    { name: 'AI Conversational AI', url: '/ai-conversational-ai', description: 'Advanced conversations' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: 'AI customer support' },
    
    // Computer Vision
    { name: 'AI Computer Vision Pro', url: '/ai-computer-vision-pro', description: 'Image & video analysis' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' },
    { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive work environments' },
    { name: 'AI Video Analytics Pro', url: '/ai-video-analytics-pro', description: 'Video content analysis' },
    
    // AI Analytics
    { name: 'AI Analytics Pro', url: '/ai-analytics-pro', description: 'Advanced data insights' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },
    { name: 'AI HR Analytics Suite', url: '/ai-hr-analytics-suite', description: 'HR analytics' },
    
    // AI Automation
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process optimization' },
    { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-operating systems' },
    { name: 'AI Email Automation', url: '/ai-email-automation', description: 'Email marketing AI' },
    { name: 'AI Supply Chain Optimizer', url: '/ai-supply-chain-optimizer', description: 'Supply chain AI' },
    
    // Content AI
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' },
    { name: 'AI Video Generation', url: '/ai-video-generation', description: 'AI video creation' },
    { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Automated content filtering' },
    { name: 'AI Document AI', url: '/ai-document-ai', description: 'Document processing' },
    
    // Healthcare AI
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },
    { name: 'AI Drug Discovery Pro', url: '/ai-drug-discovery-pro', description: 'Pharmaceutical research' },
    { name: 'AI Clinical Trials', url: '/ai-clinical-trials-optimization', description: 'Clinical trial optimization' },
    { name: 'AI Healthcare Analytics', url: '/ai-healthcare-analytics', description: 'Healthcare insights' },
    
    // Financial AI
    { name: 'AI Fraud Detection Pro', url: '/ai-fraud-detection-pro', description: 'Financial fraud detection' },
    { name: 'AI Algorithmic Trading', url: '/ai-algorithmic-trading', description: 'Automated trading' },
    { name: 'AI Credit Scoring', url: '/ai-credit-scoring', description: 'Credit risk assessment' },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting-ai', description: 'Financial predictions' },
    
    // AI Security
    { name: 'AI Cybersecurity Suite', url: '/ai-cybersecurity-suite', description: 'Advanced threat protection' },
    { name: 'AI Threat Hunting', url: '/ai-threat-hunting', description: 'Proactive threat hunting' },
    { name: 'AI Compliance Automation', url: '/ai-compliance-automation', description: 'Compliance management' },
    
    // Edge AI
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },
    { name: 'AI 5G Optimization', url: '/ai-5g-optimization', description: '5G network optimization' }
  ]

  const itServices = [
    // Cloud Services
    { name: 'Cloud Infrastructure Pro', url: '/cloud-infrastructure-pro', description: 'Enterprise cloud solutions' },
    { name: 'Advanced Cloud Migration', url: '/cloud-migration-advanced', description: 'Zero-downtime migration' },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', description: 'Cost reduction' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Microservices & containers' },
    
    // Cybersecurity
    { name: 'Advanced Cybersecurity Suite', url: '/cybersecurity-advanced', description: 'Threat hunting & response' },
    { name: 'Security Automation Platform', url: '/security-automation', description: 'Automated security' },
    { name: 'Compliance Automation', url: '/compliance-automation', description: 'Regulatory compliance' },
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' },
    
    // DevOps & CI/CD
    { name: 'Advanced DevOps & SRE', url: '/devops-advanced', description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', url: '/machine-learning-ops', description: 'ML model deployment' },
    { name: 'Container Orchestration', url: '/container-orchestration', description: 'Kubernetes management' },
    { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },
    
    // Development
    { name: 'Custom Software Development', url: '/custom-software-development', description: 'Tailored solutions' },
    { name: 'Advanced API Development', url: '/api-development-advanced', description: 'Enterprise-grade APIs' },
    { name: 'Blockchain Development', url: '/blockchain-development', description: 'Smart contracts & DeFi' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    
    // Infrastructure
    { name: 'Network Infrastructure Pro', url: '/network-infrastructure-pro', description: 'Enterprise networking' },
    { name: 'Advanced Disaster Recovery', url: '/disaster-recovery-advanced', description: 'Business continuity' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'App optimization' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle management' },
    
    // Data & Analytics
    { name: 'Data Engineering', url: '/data-engineering', description: 'Data pipeline development' },
    { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },
    { name: 'Big Data Solutions', url: '/big-data-solutions', description: 'Large-scale processing' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    
    // Mobile Solutions
    { name: 'Mobile Development Pro', url: '/mobile-development-pro', description: 'Native & cross-platform' },
    { name: 'Mobile App Optimization', url: '/mobile-app-optimization', description: 'Performance enhancement' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    
    // IT Support
    { name: 'Enterprise IT Support', url: '/it-support-enterprise', description: '24/7 technical support' },
    { name: 'IT Support', url: '/it-support', description: 'Technical support' },
    
    // Consulting
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital innovation' },
    { name: 'Enterprise Integration', url: '/enterprise-integration', description: 'System integration' }
  ]

  const microSaasServices = [
    // AI-Powered Tools
    { name: 'Zion AI Content Studio Pro', url: '/zion-ai-content-studio-pro', description: 'AI content creation' },
    { name: 'Zion Analytics Intelligence', url: '/zion-analytics-intelligence', description: 'Business intelligence' },
    { name: 'Zion Security Shield Pro', url: '/zion-security-shield-pro', description: 'Cybersecurity monitoring' },
    { name: 'Zion Workflow Automation Engine', url: '/zion-workflow-automation-engine', description: 'Process automation' },
    
    // CRM & Sales
    { name: 'Zion CRM Intelligence Suite', url: '/zion-crm-intelligence-suite', description: 'AI-enhanced CRM' },
    { name: 'Zion Email Marketing Pro', url: '/zion-email-marketing-pro', description: 'Email marketing AI' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Customer Support Bot', url: '/zion-customer-support-bot', description: 'AI customer support' },
    
    // Project & Productivity
    { name: 'Zion Project Management AI', url: '/zion-project-management-ai', description: 'Project management' },
    { name: 'Zion Social Media Manager', url: '/zion-social-media-manager', description: 'Social media management' },
    { name: 'Zion Invoice & Billing AI', url: '/zion-invoice-billing-ai', description: 'Smart invoicing' },
    { name: 'Zion Document AI Processor', url: '/zion-document-ai-processor', description: 'Document processing' },
    
    // Analytics & Insights
    { name: 'Zion Video Analytics Pro', url: '/zion-video-analytics-pro', description: 'Video analysis' },
    { name: 'Zion HR Analytics Suite', url: '/zion-hr-analytics-suite', description: 'HR analytics' },
    { name: 'Zion Supply Chain Optimizer', url: '/zion-supply-chain-optimizer', description: 'Supply chain AI' },
    { name: 'Zion Financial Forecasting AI', url: '/zion-financial-forecasting-ai', description: 'Financial predictions' },
    
    // Specialized Tools
    { name: 'Zion Healthcare Analytics', url: '/zion-healthcare-analytics', description: 'Healthcare insights' },
    { name: 'Zion IoT Device Manager', url: '/zion-iot-device-manager', description: 'IoT management' },
    { name: 'Zion Compliance Manager Pro', url: '/zion-compliance-manager-pro', description: 'Compliance management' },
    { name: 'Zion Learning Management AI', url: '/zion-learning-management-ai', description: 'Learning management' },
    
    // Advanced Solutions
    { name: 'Zion Energy Management System', url: '/zion-energy-management-system', description: 'Energy optimization' },
    { name: 'Zion Real Estate Analytics', url: '/zion-real-estate-analytics', description: 'Real estate insights' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', description: 'Advanced translation' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' },
    { name: 'News', url: '/news' },
    { name: 'Press', url: '/press' }
  ]

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' }
  ]

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' },
    { name: 'Migration Services', url: '/migration-services' },
    { name: 'Training Programs', url: '/training-programs' }
  ]

  const industryLinks = [
    { name: 'Healthcare', url: '/healthcare-solutions' },
    { name: 'Financial Services', url: '/financial-solutions' },
    { name: 'Manufacturing', url: '/manufacturing-solutions' },
    { name: 'Retail', url: '/retail-solutions' },
    { name: 'Education', url: '/education-solutions' },
    { name: 'Government', url: '/government-solutions' },
    { name: 'Energy', url: '/energy-solutions' },
    { name: 'Transportation', url: '/transportation-solutions' }
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
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
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

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-12 pt-8 border-t border-gray-700">
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
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((link, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
})

Footer.displayName = 'Footer';

export default Footer;
