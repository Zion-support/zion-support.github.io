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
      { name: 'AI Meeting Intelligence Pro', url: '/ai-meeting-intelligence', description: 'Advanced meeting analytics' },
      { name: 'AI Time Tracker Pro', url: '/ai-time-tracker', description: 'Intelligent time tracking' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation' },
      { name: 'AI Customer Journey Mapper Pro', url: '/ai-customer-journey-mapper', description: 'Customer journey optimization' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Advanced financial insights' },
      { name: 'AI Invoice Generator Pro', url: '/ai-invoice-generator', description: 'Automated invoicing' },
      { name: 'AI Expense Tracker Pro', url: '/ai-expense-tracker', description: 'Smart expense tracking' },
      { name: 'AI Inventory Optimizer Pro', url: '/ai-inventory-optimizer', description: 'Inventory management' },
      { name: 'AI Personal Finance Pro', url: '/ai-personal-finance', description: 'Personal finance management' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
      { name: 'AI Voice Analytics Pro', url: '/ai-voice-analytics', description: 'Voice analysis & insights' }
    ],
    'Development': [
      { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Document automation' },
      { name: 'AI Cybersecurity Shield Pro', url: '/ai-cybersecurity', description: 'AI-powered security' }
    ],
    'Analytics': [
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
      { name: 'AI Market Research Pro', url: '/ai-market-research', description: 'Market intelligence' },
      { name: 'AI Time Series Analysis', url: '/ai-time-series-analysis', description: 'Time series forecasting' }
    ],
    'Creative': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
      { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music' },
      { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' },
      { name: 'AI Image Generation Studio', url: '/ai-image-generation-studio', description: 'AI image creation' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
      { name: 'AI Meditation Coach Pro', url: '/ai-meditation-coach', description: 'Mindfulness & meditation' },
      { name: 'AI Pet Care Assistant Pro', url: '/ai-pet-care-assistant', description: 'Pet health monitoring' }
    ],
    'Specialized': [
      { name: 'AI Contract Analyzer Pro', url: '/ai-contract-analyzer', description: 'Contract analysis & risk assessment' },
      { name: 'AI Compliance Monitor Pro', url: '/ai-compliance-monitor', description: 'Automated compliance monitoring' },
      { name: 'AI Talent Acquisition Pro', url: '/ai-talent-acquisition', description: 'Intelligent recruitment' },
      { name: 'AI Energy Management Pro', url: '/ai-energy-management', description: 'Smart energy optimization' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
    { name: 'AI Financial Services', href: '/ai-financial-services' },
    { name: 'AI Natural Language Processing', href: '/ai-nlp' },
    { name: 'AI Computer Vision', href: '/computer-vision' },
    { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence' },
    { name: 'AI Space Technology Solutions', href: '/ai-space-technology' },
    { name: 'AI Metaverse Development', href: '/ai-metaverse-development' },
    { name: 'AI Biotechnology Solutions', href: '/ai-biotechnology' },
    { name: 'AI Quantum Machine Learning', href: '/ai-quantum-ml' },
    { name: 'AI Autonomous Vehicle Systems', href: '/ai-autonomous-vehicles' },
    { name: 'AI Smart City Solutions', href: '/ai-smart-cities' },
    { name: 'AI Financial Trading Systems', href: '/ai-trading-systems' },
    { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-intelligence' },
    { name: 'AI Content Moderation Pro', href: '/ai-content-moderation' },
    { name: 'AI Voice Synthesis Studio', href: '/ai-voice-synthesis-studio' },
    { name: 'AI Recommendation Engine Pro', href: '/ai-recommendation-engine' }
  ];

  const itServices = [
    { name: 'Cloud Migration Services', href: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'AI-Powered IT Operations', href: '/ai-powered-it-operations' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions' },
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure' },
    { name: 'IoT Platform Solutions', href: '/iot-platform-solutions' },
    { name: 'Microservices Architecture', href: '/microservices-architecture' },
    { name: 'Data Lake Solutions', href: '/data-lake-solutions' },
    { name: 'API Management Platform', href: '/api-management-platform' },
    { name: 'Disaster Recovery Solutions', href: '/disaster-recovery-solutions' },
    { name: 'Hybrid Cloud Solutions', href: '/hybrid-cloud-solutions' },
    { name: 'Serverless Computing Platform', href: '/serverless-computing-platform' },
    { name: 'Container Orchestration', href: '/container-orchestration' },
    { name: 'Network Security Solutions', href: '/network-security-solutions' },
    { name: 'Data Center Solutions', href: '/data-center-solutions' },
    { name: 'IT Asset Management', href: '/it-asset-management' },
    { name: 'IT Service Management', href: '/it-service-management' },
    { name: 'IT Compliance Solutions', href: '/it-compliance-solutions' },
    { name: 'IT Training & Certification', href: '/it-training-certification' }
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
