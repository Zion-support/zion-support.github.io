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
    'Productivity & Management': [
      { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
      { name: 'AI Task Manager Pro', url: '/task-manager-pro', description: 'Smart task management' },
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' },
      { name: 'AI Time Tracker Pro', url: '/ai-time-tracker', description: 'Time tracking & analytics' },
      { name: 'AI Meeting Notes Generator', url: '/ai-meeting-notes-generator', description: 'Automated meeting notes' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager Pro', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer Pro', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation Pro', url: '/ai-lead-generation', description: 'Automated lead generation' },
      { name: 'AI Newsletter Designer', url: '/ai-newsletter-designer', description: 'Professional newsletters' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence Pro', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Fintech Analyzer Pro', url: '/ai-fintech', description: 'Financial analysis' },
      { name: 'AI Financial Analyzer Pro', url: '/ai-financial-analyzer', description: 'Advanced financial insights' },
      { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-solutions', description: 'E-commerce optimization' },
      { name: 'AI Invoice Generator Pro', url: '/ai-invoice-generator', description: 'Automated invoicing' },
      { name: 'AI Contract Generator Pro', url: '/ai-contract-generator', description: 'Legal contract automation' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot Pro', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder Pro', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant Pro', url: '/ai-email-assistant', description: 'Smart email management' }
    ],
    'Development & Technical': [
      { name: 'AI Code Review Assistant Pro', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder Pro', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Document Processor Pro', url: '/ai-document-processing', description: 'Document automation' },
      { name: 'AI Website Builder Pro', url: '/ai-website-builder', description: 'AI-powered web development' },
      { name: 'AI Cybersecurity Shield Pro', url: '/ai-cybersecurity', description: 'Advanced security protection' }
    ],
    'Analytics & Data': [
      { name: 'AI Analytics Dashboard Pro', url: '/ai-analytics', description: 'Data insights & analytics' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis' }
    ],
    'Creative & Media': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'AI Voice Cloning Studio Pro', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
      { name: 'AI Music Composer Pro', url: '/ai-music-composition', description: 'AI-generated music' },
      { name: 'AI Fashion Designer Pro', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation Studio Pro', url: '/ai-3d-generation', description: 'AI 3D content creation' },
      { name: 'AI Logo Designer Pro', url: '/ai-logo-designer', description: 'Professional logo design' },
      { name: 'AI Art Gallery Pro', url: '/ai-art-gallery', description: 'Digital art creation' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant Pro', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
      { name: 'AI Healthcare Diagnostician', url: '/ai-healthcare-diagnostician', description: 'Medical diagnosis assistance' }
    ],
    'Sales & Business': [
      { name: 'AI Sales Automation Hub Pro', url: '/ai-sales-automation', description: 'Sales optimization' },
      { name: 'AI Lead Generation Pro', url: '/ai-lead-generation', description: 'Automated lead generation' }
    ],
    'Advanced AI Services': [
      { name: 'AI Quantum Computing Simulator', url: '/ai-quantum-computing-simulator', description: 'Quantum algorithm simulation' },
      { name: 'AI Autonomous Vehicle Simulator', url: '/ai-autonomous-vehicle-simulator', description: 'AV testing & validation' },
      { name: 'AI Drug Discovery Platform', url: '/ai-drug-discovery-platform', description: 'Pharmaceutical research' },
      { name: 'AI Climate Change Predictor', url: '/ai-climate-change-predictor', description: 'Environmental modeling' },
      { name: 'AI Space Mission Planner', url: '/ai-space-mission-planner', description: 'Space mission optimization' },
      { name: 'AI Metaverse Builder Pro', url: '/ai-metaverse-builder', description: 'Virtual world creation' }
    ]
  };

  const aiServices = [
    // Core AI Technologies
    { name: 'Machine Learning Solutions', href: '/machine-learning' },
    { name: 'Deep Learning Platform', href: '/deep-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Reinforcement Learning', href: '/ai-reinforcement-learning' },
    
    // Advanced AI Research
    { name: 'AI Research & Development Lab', href: '/ai-research-lab' },
    { name: 'AI Ethics & Governance', href: '/ai-ethics' },
    { name: 'AI Model Explainability', href: '/ai-model-explainability' },
    { name: 'AI Federated Learning', href: '/ai-federated-learning' },
    { name: 'AI Transfer Learning', href: '/ai-transfer-learning' },
    { name: 'AI AutoML Platform', href: '/ai-automl-platform' },
    
    // Industry-Specific AI
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing' },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation' },
    
    // Cutting-Edge AI
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing' },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse-solutions' },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions' },
    { name: 'AI Space Technology', href: '/ai-space-technology' },
    { name: 'AI Biotechnology', href: '/ai-biotechnology' },
    { name: 'AI Robotics', href: '/ai-robotics' },
    { name: 'AI Digital Twin', href: '/ai-digital-twin' }
  ];

  const itServices = [
    // Core IT Infrastructure
    { name: 'Cloud Services & Migration', href: '/cloud-services' },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security' },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure' },
    { name: 'Data Center Solutions', href: '/data-center' },
    { name: 'Network Security & Firewall', href: '/network-security' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting' },
    
    // Advanced IT Services
    { name: 'AI-Powered Data Center Management', href: '/ai-data-center-management' },
    { name: 'Edge Computing Infrastructure', href: '/edge-computing' },
    { name: '5G Network Implementation', href: '/5g-networks' },
    { name: 'Blockchain Infrastructure Services', href: '/blockchain-infrastructure' },
    { name: 'IoT Platform Development', href: '/iot-platform' },
    { name: 'AI Hardware Optimization', href: '/ai-hardware' },
    
    // Security & Compliance
    { name: 'Quantum-Safe Cryptography', href: '/quantum-safe-cryptography' },
    { name: 'Advanced Network Security', href: '/advanced-network-security' },
    { name: 'Hybrid Cloud Management', href: '/hybrid-cloud' },
    { name: 'AI-Powered IT Operations', href: '/ai-it-operations' },
    { name: 'Compliance & Governance Solutions', href: '/compliance' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    
    // Management & Support
    { name: 'Managed IT Services', href: '/managed-it' },
    { name: 'IT Asset Management', href: '/it-asset-management' },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery' },
    { name: 'IT Training & Certification', href: '/it-training' },
    { name: 'Performance Monitoring & Analytics', href: '/it-performance' },
    { name: 'IT Support & Helpdesk', href: '/it-support' },
    
    // Development & Tools
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'Developer Tools', href: '/developer-tools' },
    { name: 'Marketing Tools', href: '/marketing-tools' },
    { name: 'Productivity Solutions', href: '/productivity' },
    
    // Specialized Services
    { name: 'Digital Transformation Consulting', href: '/digital-transformation' },
    { name: 'Vendor Management Services', href: '/vendor-management' },
    { name: 'IT Project Management', href: '/it-project-management' },
    { name: 'Technology Innovation Lab', href: '/innovation-lab' },
    { name: 'Cloud Migration', href: '/cloud-migration' }
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
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services - Categorized */}
          <div className="lg:col-span-3">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(microSaasServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-white font-medium mb-2 text-sm">{category}</h4>
                  <ul className="space-y-1">
                    {services.slice(0, 3).map((service) => (
                      <li key={service.name}>
                        <a href={service.url}
                          className="group flex items-center text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          <span>{service.name}</span>
                          <ArrowRight className="w-2 h-2 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            </a>
          </div>

          {/* AI & IT Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-300 mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
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
