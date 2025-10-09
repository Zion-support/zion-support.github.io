import React from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'AI Inventory Manager Pro', url: '/ai-inventory-manager', description: 'AI inventory optimization' },
    { name: 'AI HR Assistant Pro', url: '/ai-hr-assistant', description: 'AI HR management' },
    { name: 'AI Financial Advisor Pro', url: '/ai-financial-advisor', description: 'AI financial planning' },
    { name: 'AI Legal Assistant Pro', url: '/ai-legal-assistant', description: 'AI legal support' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'AI SEO optimization' },
    { name: 'AI Translation Hub', url: '/ai-translation-hub', description: 'AI translation services' },
    { name: 'AI Security Monitor', url: '/ai-security-monitor', description: 'AI security monitoring' },
    { name: 'AI Real Estate Analyzer', url: '/ai-real-estate-analyzer', description: 'AI real estate analysis' },
    { name: 'AI Healthcare Assistant', url: '/ai-healthcare-assistant', description: 'AI healthcare support' },
    { name: 'AI Education Platform', url: '/ai-education-platform', description: 'AI learning platform' },
    { name: 'AI Manufacturing Optimizer', url: '/ai-manufacturing-optimizer', description: 'AI manufacturing optimization' }
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
    { name: 'AI Real Estate Intelligence', url: '/ai-real-estate-intelligence', description: 'Real estate AI' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare-solutions', description: 'Medical AI' },
    { name: 'AI Education Technology', url: '/ai-education-technology', description: 'EdTech AI' },
    { name: 'AI Manufacturing Intelligence', url: '/ai-manufacturing-intelligence', description: 'Manufacturing AI' },
    { name: 'AI Transportation & Logistics', url: '/ai-transportation-logistics', description: 'Logistics AI' },
    { name: 'AI Insurance Technology', url: '/ai-insurance-technology', description: 'InsurTech AI' },
    { name: 'AI Agriculture Technology', url: '/ai-agriculture-technology', description: 'AgTech AI' },
    { name: 'AI Food Service Intelligence', url: '/ai-food-service-intelligence', description: 'FoodTech AI' },
    { name: 'AI Event Management', url: '/ai-event-management', description: 'Event AI' },
    { name: 'AI Travel Intelligence', url: '/ai-travel-intelligence', description: 'Travel AI' },
    { name: 'AI Pet Care Technology', url: '/ai-pet-care-technology', description: 'PetTech AI' },
    { name: 'AI Legal Technology', url: '/ai-legal-technology', description: 'LegalTech AI' },
    { name: 'AI Financial Technology', url: '/ai-financial-technology', description: 'FinTech AI' },
    { name: 'AI Marketing Intelligence', url: '/ai-marketing-intelligence', description: 'MarTech AI' },
    { name: 'AI Human Resources Technology', url: '/ai-hr-technology', description: 'HRTech AI' }
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
    { name: 'AI Infrastructure & MLOps', url: '/ai-infrastructure-mlops', description: 'AI infrastructure' },
    { name: 'Enterprise Integration Services', url: '/enterprise-integration', description: 'System integration' },
    { name: 'Disaster Recovery & Business Continuity', url: '/disaster-recovery', description: 'Business continuity' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle management' },
    { name: 'IT Training & Certification', url: '/it-training-certification', description: 'IT training programs' },
    { name: 'IT Performance Monitoring', url: '/it-performance-monitoring', description: 'Performance optimization' },
    { name: 'IT Security Consulting', url: '/it-security-consulting', description: 'Security consulting' },
    { name: 'IT Project Management', url: '/it-project-management', description: 'Project delivery' },
    { name: 'IT Vendor Management', url: '/it-vendor-management', description: 'Vendor relationships' },
    { name: 'IT Change Management', url: '/it-change-management', description: 'Change processes' },
    { name: 'IT Service Desk', url: '/it-service-desk', description: 'Help desk services' },
    { name: 'IT Documentation Services', url: '/it-documentation', description: 'Technical documentation' },
    { name: 'IT Quality Assurance', url: '/it-quality-assurance', description: 'QA & testing' },
    { name: 'IT Innovation Lab', url: '/it-innovation-lab', description: 'Innovation & R&D' }
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
    { name: 'Demo', url: '/demo' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Health', url: '/system-status' },
    { name: 'Help Center', url: '/help' },
    { name: 'Community', url: '/community' },
    { name: 'Training', url: '/training' },
    { name: 'FAQ', url: '/faq' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Data Protection', url: '/data-protection' },
    { name: 'Accessibility', url: '/accessibility' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
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
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1">
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