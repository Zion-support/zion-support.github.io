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
      { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
      { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Smart task management' },
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' },
      { name: 'AI Meeting Intelligence', url: '/ai-meeting-intelligence', description: 'Meeting analytics' },
      { name: 'AI Habit Tracker Pro', url: '/ai-habit-tracker', description: 'Smart habit formation' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation' },
      { name: 'AI Website Builder Pro', url: '/ai-website-builder', description: 'AI-powered websites' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Advanced financial insights' },
      { name: 'AI Investment Tracker Pro', url: '/ai-investment-tracker', description: 'Smart investment management' },
      { name: 'AI Contract Analyzer Pro', url: '/ai-contract-analyzer', description: 'Legal contract analysis' },
      { name: 'AI Inventory Optimizer Pro', url: '/ai-inventory-optimizer', description: 'Smart inventory management' },
      { name: 'AI Customer Insights Pro', url: '/ai-customer-insights', description: 'Deep customer analytics' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' }
    ],
    'Development': [
      { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Document automation' },
      { name: 'AI Password Manager Pro', url: '/ai-password-manager', description: 'Advanced password management' }
    ],
    'Analytics': [
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
      { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'AI-powered insights' }
    ],
    'Creative': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
      { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music' },
      { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' },
      { name: 'AI Logo Designer Pro', url: '/ai-logo-designer', description: 'Professional logo creation' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
      { name: 'AI Sleep Optimizer Pro', url: '/ai-sleep-optimizer', description: 'Intelligent sleep analysis' },
      { name: 'AI Meditation Guide Pro', url: '/ai-meditation-guide', description: 'Personalized meditation' }
    ],
    'Lifestyle': [
      { name: 'AI Recipe Generator Pro', url: '/ai-recipe-generator', description: 'Creative recipe creation' },
      { name: 'AI Language Tutor Pro', url: '/ai-language-tutor', description: 'Personalized language learning' },
      { name: 'AI Garden Planner Pro', url: '/ai-garden-planner', description: 'Smart gardening' },
      { name: 'AI Pet Care Pro', url: '/ai-pet-care', description: 'Comprehensive pet care' },
      { name: 'AI Travel Planner Pro', url: '/ai-travel-planner', description: 'Intelligent travel planning' },
      { name: 'AI Home Automation Pro', url: '/ai-home-automation', description: 'Smart home control' }
    ],
    'Career & Education': [
      { name: 'AI Resume Builder Pro', url: '/ai-resume-builder', description: 'Intelligent resume creation' },
      { name: 'AI Learning Path Pro', url: '/ai-learning-path', description: 'Personalized learning' },
      { name: 'AI Event Planner Pro', url: '/ai-event-planner', description: 'Complete event management' }
    ],
    'Sales': [
      { name: 'AI Sales Automation Pro', url: '/ai-sales-automation', description: 'Sales optimization' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Robotics', href: '/ai-robotics' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence' },
    { name: 'AI Space Technology', href: '/ai-space-technology' },
    { name: 'AI Metaverse Development', href: '/ai-metaverse-development' },
    { name: 'AI Biotechnology Solutions', href: '/ai-biotechnology' },
    { name: 'AI Smart City Platform', href: '/ai-smart-city' },
    { name: 'AI Edge Computing Solutions', href: '/ai-edge-computing' },
    { name: 'AI Quantum Machine Learning', href: '/ai-quantum-ml' },
    { name: 'AI Autonomous Vehicles', href: '/ai-autonomous-vehicles' },
    { name: 'AI Digital Twin Platform', href: '/ai-digital-twin' },
    { name: 'AI Advanced Robotics', href: '/ai-advanced-robotics' },
    { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence' },
    { name: 'AI FinTech Solutions', href: '/ai-fintech-solutions' },
    { name: 'AI HealthTech Platform', href: '/ai-healthtech-platform' },
    { name: 'AI EdTech Solutions', href: '/ai-edtech-solutions' },
    { name: 'AI RetailTech Solutions', href: '/ai-retailtech-solutions' }
  ];

  const itServices = [
    { name: 'Cloud Migration Services', href: '/cloud-migration' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support & Helpdesk', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Blockchain & Web3', href: '/blockchain' },
    { name: 'AI Infrastructure Management', href: '/ai-infrastructure-management' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure' },
    { name: 'Metaverse Development Platform', href: '/metaverse-development-platform' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions' },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions' },
    { name: 'Space Technology Services', href: '/space-technology-services' },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems' },
    { name: 'Digital Twin Development', href: '/digital-twin-development' },
    { name: 'Advanced Cybersecurity Solutions', href: '/advanced-cybersecurity-solutions' },
    { name: 'Smart City Solutions', href: '/smart-city-solutions' },
    { name: 'FinTech Infrastructure', href: '/fintech-infrastructure' },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure' },
    { name: 'EdTech Solutions', href: '/edtech-solutions' },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions' }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-4">
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
                          <span className="truncate">{service.name}</span>
                          <ArrowRight className="w-2 h-2 ml-1 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
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

          {/* AI Services */}
          <div className="lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-1">
              {aiServices.slice(0, 12).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs block py-1"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4 text-sm"
            >
              View All AI Services →
            </a>
          </div>

          {/* IT Services */}
          <div className="lg:col-span-3">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-1">
              {itServices.slice(0, 12).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs block py-1"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/it-services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4 text-sm"
            >
              View All IT Services →
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
