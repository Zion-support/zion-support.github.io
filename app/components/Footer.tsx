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
  ]

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ]
'use client'
import React from 'react'
import Link from 'next/link'
import { Brain, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer: React.FC = () => {
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
                </div><Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                </div><span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
            <div className="space-y-4">
              </div><div className="flex items-center text-sm text-gray-300 group">
                </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  </div><Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                </div><div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  </div><Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                </div><div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  </div><MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008</span><br />
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                </div><div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  </div><Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            </div><h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">
              </h3><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                </div><Brain className="w-5 h-5 text-white" />
              </div>
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                </ul><li key={index}>
                  </li><Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cyan-500/20">
                </li><Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All AI Services
                  </Link><Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            </div><h3 className="text-lg font-semibold mb-6 flex items-center">
              </h3><Cpu className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS Tools
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                </ul><li key={index}>
                  </li><Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-start"
                  >
                    </Link><ArrowRight className="w-3 h-3 text-cyan-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      </div><div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            </div><h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center neon-text-enhanced">
              </h3><div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                </div><Cloud className="w-5 h-5 text-white" />
              </div>
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                </ul><li key={index}>
                  </li><Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-purple-500/20">
                </li><Link 
                  to="/it-services"
                  className="text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All IT Services
                  </Link><Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="hover:text-cyan-400 transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div className="cyber-card-enhanced p-6 rounded-2xl">
            </div><h3 className="text-lg font-bold mb-6 text-green-400 flex items-center neon-text-enhanced">
              </h3><div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                </div><Code className="w-5 h-5 text-white" />
              </div>
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                </ul><li key={index}>
                  </li><Link 
                    to={service.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-green-500/20">
                </li><Link 
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 text-sm font-semibold flex items-center group">
                  View All Micro SAAS
                  </Link><Zap className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12 pt-8 border-t border-gray-700">
          </div><div>
            </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                </ul><li key={index}>
                  </li><Link 
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
            </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                </ul><li key={index}>
                  </li><Link 
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
            </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                </ul><li key={index}>
                  </li><Link 
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
            </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              </ul><li>
                </li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Free Consultation
                </Link>
              </li>
              <li>
                </li><Link to="/demo" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                </li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                </li><Link to="/support" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                </li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                </li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            </div><h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="space-y-3">
              </div><div className="flex space-x-4">
                </div><a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </div>
              <div className="flex space-x-4">
                </div><a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
                <a href="https://youtube.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  YouTube
                </a>
              </div>
              <div className="text-sm text-gray-400">
                </div><p>📧 kleber@ziontechgroup.com</p>
                <p>📞 +1 302 464 0950</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 mt-12 pt-8">
          </div><div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            </div><div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              </div><div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                </div><Brain className="w-4 h-4 text-white" />
              </div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 gap-y-2">
              </div><a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
            <Link 
              href="/consultation" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer';

export default Footer;
