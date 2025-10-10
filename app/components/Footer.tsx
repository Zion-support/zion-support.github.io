import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSaasServices = {
    'Productivity': [
      { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning', price: '$99/mo' },
      { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Smart task management', price: '$49/mo' },
      { name: 'AI Workflow Automation Pro', url: '/ai-workflow-automation', description: 'Process automation', price: '$79/mo' },
      { name: 'AI Meeting Intelligence Pro', url: '/ai-meeting-intelligence', description: 'Advanced meeting analytics', price: '$89/mo' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling', price: '$39/mo' },
      { name: 'AI Time Tracker Pro', url: '/ai-time-tracker', description: 'Smart time tracking', price: '$34/mo' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation', price: '$89/mo' },
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation', price: '$149/mo' },
      { name: 'AI Social Media Manager Pro', url: '/ai-social-media-manager', description: 'Automated social media', price: '$69/mo' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns', price: '$59/mo' },
      { name: 'AI SEO Optimizer Pro', url: '/ai-seo-optimizer', description: 'SEO automation', price: '$79/mo' },
      { name: 'AI Lead Generation Pro', url: '/ai-lead-generation', description: 'Automated lead generation', price: '$99/mo' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence Pro', url: '/ai-crm', description: 'Smart CRM solutions', price: '$89/mo' },
      { name: 'AI Financial Analyzer Pro', url: '/ai-financial-analyzer', description: 'Advanced financial insights', price: '$79/mo' },
      { name: 'AI Invoice Generator Pro', url: '/ai-invoice-generator', description: 'Automated invoicing', price: '$49/mo' },
      { name: 'AI Expense Tracker Pro', url: '/ai-expense-tracker', description: 'Smart expense tracking', price: '$29/mo' },
      { name: 'AI Customer Insights Pro', url: '/ai-customer-insights', description: 'Deep customer analytics', price: '$99/mo' },
      { name: 'AI Vendor Manager Pro', url: '/ai-vendor-manager', description: 'Smart vendor management', price: '$99/mo' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot Pro', url: '/ai-customer-support-bot', description: '24/7 AI support', price: '$99/mo' },
      { name: 'AI Chatbot Builder Pro', url: '/ai-chatbot-builder', description: 'Custom chatbot creation', price: '$69/mo' },
      { name: 'AI Email Assistant Pro', url: '/ai-email-assistant', description: 'Smart email management', price: '$39/mo' },
      { name: 'AI Email Security Pro', url: '/ai-email-security', description: 'Advanced email protection', price: '$49/mo' }
    ],
    'Development & Technical': [
      { name: 'AI Code Review Assistant Pro', url: '/ai-code-generation', description: 'Automated code analysis', price: '$89/mo' },
      { name: 'AI Mobile App Builder Pro', url: '/ai-mobile-app-development', description: 'Mobile app development', price: '$149/mo' },
      { name: 'AI Document Processor Pro', url: '/ai-document-processing', description: 'Document automation', price: '$79/mo' },
      { name: 'AI Code Quality Pro', url: '/ai-code-quality', description: 'Advanced code quality analysis', price: '$79/mo' },
      { name: 'AI Test Automation Pro', url: '/ai-test-automation', description: 'Intelligent test automation', price: '$89/mo' },
      { name: 'AI API Manager Pro', url: '/ai-api-manager', description: 'Comprehensive API management', price: '$99/mo' }
    ],
    'Analytics & Data': [
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis', price: '$99/mo' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards', price: '$69/mo' },
      { name: 'AI Performance Monitor Pro', url: '/ai-performance-monitor', description: 'Comprehensive monitoring', price: '$89/mo' },
      { name: 'AI Feedback Analyzer Pro', url: '/ai-feedback-analyzer', description: 'Advanced feedback analysis', price: '$59/mo' }
    ],
    'Creative & Media': [
      { name: 'AI Voice Cloning Studio Pro', url: '/ai-voice-cloning', description: 'Realistic voice synthesis', price: '$79/mo' },
      { name: 'AI Music Composer Pro', url: '/ai-music-composition', description: 'AI-generated music', price: '$59/mo' },
      { name: 'AI Fashion Design Studio Pro', url: '/ai-fashion-design', description: 'AI fashion design', price: '$89/mo' },
      { name: 'AI 3D Generation Studio Pro', url: '/ai-3d-generation', description: 'AI 3D content creation', price: '$199/mo' },
      { name: 'AI Logo Designer Pro', url: '/ai-logo-designer', description: 'Professional logo creation', price: '$59/mo' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant Pro', url: '/ai-healthcare', description: 'Medical AI support', price: '$49/mo' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans', price: '$39/mo' }
    ],
    'Legal & Compliance': [
      { name: 'AI Contract Analyzer Pro', url: '/ai-contract-analyzer', description: 'Intelligent contract analysis', price: '$149/mo' },
      { name: 'AI Compliance Manager Pro', url: '/ai-compliance-manager', description: 'Automated compliance management', price: '$149/mo' }
    ],
    'E-commerce & Inventory': [
      { name: 'AI Inventory Optimizer Pro', url: '/ai-inventory-optimizer', description: 'Smart inventory management', price: '$79/mo' }
    ],
    'Data Management': [
      { name: 'AI Backup Manager Pro', url: '/ai-backup-manager', description: 'Intelligent backup management', price: '$39/mo' },
      { name: 'AI Database Optimizer Pro', url: '/ai-database-optimizer', description: 'Advanced database optimization', price: '$119/mo' }
    ],
    'Cloud & Infrastructure': [
      { name: 'AI Cloud Cost Optimizer Pro', url: '/ai-cloud-cost-optimizer', description: 'Intelligent cloud cost optimization', price: '$79/mo' }
    ],
    'Knowledge Management': [
      { name: 'AI Knowledge Base Pro', url: '/ai-knowledge-base', description: 'Intelligent knowledge management', price: '$69/mo' }
    ],
    'Operations': [
      { name: 'AI Incident Response Pro', url: '/ai-incident-response', description: 'Automated incident response', price: '$199/mo' },
      { name: 'AI Workflow Designer Pro', url: '/ai-workflow-designer', description: 'Visual workflow design', price: '$89/mo' }
    ],
    'Training & Education': [
      { name: 'AI Training Platform Pro', url: '/ai-training-platform', description: 'Intelligent training platform', price: '$79/mo' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', price: '$1,500/mo' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery', price: '$5,000/mo' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence', price: '$3,500/mo' },
    { name: 'AI Space Technology Solutions', href: '/ai-space-technology', price: '$4,500/mo' },
    { name: 'AI Metaverse Development', href: '/ai-metaverse-development', price: '$3,000/mo' },
    { name: 'AI Biotechnology Solutions', href: '/ai-biotechnology', price: '$4,000/mo' },
    { name: 'AI Smart City Solutions', href: '/ai-smart-city', price: '$2,500/mo' },
    { name: 'AI Edge Computing Solutions', href: '/ai-edge-computing', price: '$1,800/mo' },
    { name: 'AI Digital Twin Platform', href: '/ai-digital-twin', price: '$2,200/mo' },
    { name: 'AI Advanced Robotics', href: '/ai-advanced-robotics', price: '$3,500/mo' },
    { name: 'AI Quantum Machine Learning', href: '/ai-quantum-ml', price: '$6,000/mo' },
    { name: 'AI Autonomous Vehicle Systems', href: '/ai-autonomous-vehicles', price: '$4,500/mo' },
    { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence', price: '$2,800/mo' },
    { name: 'AI Financial Trading Platform', href: '/ai-financial-trading', price: '$3,200/mo' },
    { name: 'AI Content Moderation Pro', href: '/ai-content-moderation', price: '$1,500/mo' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-intelligence', price: '$2,200/mo' },
    { name: 'AI Energy Management System', href: '/ai-energy-management', price: '$1,800/mo' },
    { name: 'AI Retail Intelligence', href: '/ai-retail-intelligence', price: '$2,000/mo' },
    { name: 'AI Agriculture Solutions', href: '/ai-agriculture', price: '$1,600/mo' },
    { name: 'AI Construction Management', href: '/ai-construction', price: '$2,500/mo' },
    { name: 'AI Logistics Optimization', href: '/ai-logistics', price: '$1,900/mo' },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', price: '$2,300/mo' },
    { name: 'AI Real Estate Intelligence', href: '/ai-real-estate', price: '$1,700/mo' },
    { name: 'AI Entertainment Production', href: '/ai-entertainment', price: '$2,800/mo' },
    { name: 'AI Sports Analytics', href: '/ai-sports', price: '$1,500/mo' },
    { name: 'AI Gaming Intelligence', href: '/ai-gaming', price: '$2,000/mo' },
    { name: 'AI Travel Optimization', href: '/ai-travel', price: '$1,200/mo' },
    { name: 'AI Hospitality Solutions', href: '/ai-hospitality', price: '$1,800/mo' },
    { name: 'AI Government Services', href: '/ai-government', price: '$3,500/mo' },
    { name: 'AI Non-Profit Solutions', href: '/ai-nonprofit', price: '$800/mo' }
  ];

  const itServices = [
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations', price: '$2,500/mo' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-infrastructure', price: '$8,000/mo' },
    { name: 'Edge Computing Solutions', href: '/edge-computing', price: '$1,800/mo' },
    { name: '5G Network Infrastructure', href: '/5g-infrastructure', price: '$3,500/mo' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure', price: '$2,200/mo' },
    { name: 'IoT Platform Solutions', href: '/iot-platform', price: '$1,500/mo' },
    { name: 'Microservices Architecture', href: '/microservices', price: '$2,000/mo' },
    { name: 'Serverless Computing', href: '/serverless', price: '$1,200/mo' },
    { name: 'Data Lake Solutions', href: '/data-lake', price: '$1,800/mo' },
    { name: 'API Gateway Solutions', href: '/api-gateway', price: '$1,000/mo' },
    { name: 'Content Delivery Network', href: '/cdn', price: '$800/mo' },
    { name: 'Identity and Access Management', href: '/iam', price: '$1,500/mo' },
    { name: 'Disaster Recovery Solutions', href: '/disaster-recovery', price: '$1,200/mo' },
    { name: 'Network Monitoring Solutions', href: '/network-monitoring', price: '$1,000/mo' },
    { name: 'Application Performance Monitoring', href: '/apm', price: '$1,300/mo' },
    { name: 'Log Management Solutions', href: '/log-management', price: '$900/mo' },
    { name: 'Configuration Management', href: '/config-management', price: '$1,100/mo' },
    { name: 'IT Asset Management', href: '/it-asset-management', price: '$800/mo' },
    { name: 'IT Service Management', href: '/itsm', price: '$1,400/mo' },
    { name: 'IT Governance Solutions', href: '/it-governance', price: '$1,600/mo' },
    { name: 'IT Training and Development', href: '/it-training', price: '$1,000/mo' },
    { name: 'IT Consulting Services', href: '/it-consulting', price: '$2,500/mo' },
    { name: 'IT Project Management', href: '/it-project-management', price: '$1,800/mo' },
    { name: 'IT Security Operations', href: '/it-security-ops', price: '$2,200/mo' },
    { name: 'IT Compliance Solutions', href: '/it-compliance', price: '$1,700/mo' },
    { name: 'IT Innovation Lab', href: '/it-innovation-lab', price: '$3,000/mo' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
              Trusted by Fortune 500 companies worldwide with 99.9% uptime and 24/7 expert support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <a 
                    href="tel:+13024640950" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg"
                  >
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400">Primary Contact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <address className="text-gray-300 not-italic font-medium">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </address>
                  <p className="text-sm text-gray-400">Headquarters</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-gray-300 font-medium">Business Hours</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                  <p className="text-sm text-gray-400">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services - Categorized */}
          <div className="lg:col-span-3">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(microSaasServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-white font-medium mb-3 text-sm border-b border-cyan-400/20 pb-1">{category}</h4>
                  <ul className="space-y-2">
                    {services.slice(0, 4).map((service) => (
                      <li key={service.name}>
                        <a href={service.url}
                          className="group flex items-center justify-between text-xs text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="truncate">{service.name}</span>
                            <ArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                          <span className="text-cyan-400 text-xs font-medium">{service.price}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-white transition-colors"
              >
                View All Micro SAAS Solutions →
              </a>
            </div>
          </div>

          {/* AI & IT Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3 border-b border-purple-400/20 pb-1">AI Services</h4>
                <ul className="space-y-2">
                  {aiServices.slice(0, 8).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="group flex items-center justify-between text-xs text-gray-300 hover:text-purple-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="truncate">{service.name}</span>
                          <ArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-purple-400 text-xs font-medium">{service.price}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-300 mb-3 border-b border-green-400/20 pb-1">IT Services</h4>
                <ul className="space-y-2">
                  {itServices.slice(0, 8).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="group flex items-center justify-between text-xs text-gray-300 hover:text-green-400 transition-colors p-2 rounded hover:bg-slate-800/50"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="truncate">{service.name}</span>
                          <ArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-green-400 text-xs font-medium">{service.price}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-white transition-colors"
              >
                View All AI & IT Services →
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-600"
              />
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Sitemap
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
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
