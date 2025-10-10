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
      { name: 'AI Meeting Intelligence Pro', url: '/ai-meeting-intelligence', description: 'Smart meeting management' },
      { name: 'AI Document Intelligence Pro', url: '/ai-document-intelligence', description: 'Document analysis & insights' },
      { name: 'AI Personal Assistant Pro', url: '/ai-personal-assistant', description: 'Personal AI assistant' },
      { name: 'AI Team Collaboration Hub', url: '/ai-team-collaboration', description: 'Team collaboration platform' },
      { name: 'AI Task Manager Pro', url: '/ai-task-manager', description: 'Smart task management' },
      { name: 'AI Workflow Automation Pro', url: '/ai-workflow-automation', description: 'Process automation' },
      { name: 'AI Meeting Scheduler Pro', url: '/ai-meeting-scheduler', description: 'Intelligent scheduling' },
      { name: 'AI Time Tracker Pro', url: '/ai-time-tracker', description: 'Time tracking & analytics' },
      { name: 'AI Note-Taking Assistant Pro', url: '/ai-note-taking', description: 'Smart note-taking' },
      { name: 'AI Calendar Optimizer Pro', url: '/ai-calendar-optimizer', description: 'Calendar optimization' },
      { name: 'AI Focus Manager Pro', url: '/ai-focus-manager', description: 'Focus & productivity management' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Blog Generator Pro', url: '/ai-blog-generator', description: 'Blog content creation' },
      { name: 'AI Copywriting Assistant Pro', url: '/ai-copywriting-assistant', description: 'Professional copywriting' },
      { name: 'AI Technical Writer Pro', url: '/ai-technical-writer', description: 'Technical documentation' },
      { name: 'AI Content Translator Pro', url: '/ai-content-translator', description: 'Multi-language translation' },
      { name: 'AI Video Creator Pro', url: '/ai-video-creator', description: 'AI-powered video creation' },
      { name: 'AI Podcast Studio Pro', url: '/ai-podcast-studio', description: 'Podcast production suite' },
      { name: 'AI Graphic Design Studio', url: '/ai-graphic-design', description: 'AI graphic design' },
      { name: 'AI Website Builder Pro', url: '/ai-website-builder', description: 'AI website builder' },
      { name: 'AI Social Media Manager Pro', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer Pro', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation Pro', url: '/ai-lead-generation', description: 'Automated lead generation' },
      { name: 'AI Ad Campaign Manager Pro', url: '/ai-ad-campaign-manager', description: 'Ad campaign management' },
      { name: 'AI Influencer Marketing Pro', url: '/ai-influencer-marketing', description: 'Influencer marketing' },
      { name: 'AI Content Calendar Pro', url: '/ai-content-calendar', description: 'Content planning' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence Pro', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Business Intelligence Pro', url: '/ai-business-intelligence', description: 'Business intelligence' },
      { name: 'AI Sales Automation Pro', url: '/ai-sales-automation', description: 'Sales automation' },
      { name: 'AI Customer Analytics Pro', url: '/ai-customer-analytics', description: 'Customer insights' },
      { name: 'AI Market Research Pro', url: '/ai-market-research', description: 'Market research' },
      { name: 'AI Financial Analyzer Pro', url: '/ai-financial-analyzer', description: 'Financial analysis' },
      { name: 'AI Invoice Generator Pro', url: '/ai-invoice-generator', description: 'Invoice automation' },
      { name: 'AI Expense Tracker Pro', url: '/ai-expense-tracker', description: 'Expense tracking' },
      { name: 'AI Stock Portfolio Manager', url: '/ai-stock-portfolio-manager', description: 'Portfolio management' },
      { name: 'AI Tax Optimizer Pro', url: '/ai-tax-optimizer', description: 'Tax optimization' },
      { name: 'AI Budget Planner Pro', url: '/ai-budget-planner', description: 'Budget planning' },
      { name: 'AI Credit Score Optimizer', url: '/ai-credit-optimizer', description: 'Credit score improvement' },
      { name: 'AI Investment Advisor Pro', url: '/ai-investment-advisor', description: 'Investment advice' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot Pro', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder Pro', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant Pro', url: '/ai-email-assistant', description: 'Smart email management' }
    ],
    'Development & Security': [
      { name: 'AI Code Review Assistant Pro', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder Pro', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Cybersecurity Shield Pro', url: '/ai-cybersecurity', description: 'AI-powered security' },
      { name: 'AI Document Processor Pro', url: '/ai-document-processing', description: 'Document automation' },
      { name: 'AI Password Manager Pro', url: '/ai-password-manager', description: 'Password management' }
    ],
    'Analytics & Data': [
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' }
    ],
    'Creative & Media': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'AI Voice Cloning Studio Pro', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
      { name: 'AI Music Composer Pro', url: '/ai-music-composition', description: 'AI-generated music' },
      { name: 'AI Fashion Design Studio Pro', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation Studio Pro', url: '/ai-3d-generation', description: 'AI 3D content creation' },
      { name: 'AI Logo Designer Pro', url: '/ai-logo-designer', description: 'AI logo design' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant Pro', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity' },
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare' },
    { name: 'AI Financial Advisor Pro', href: '/ai-financial-advisor' },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain' },
    { name: 'AI Legal Assistant Pro', href: '/ai-legal-assistant' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing' },
    { name: 'AI Education Platform Pro', href: '/ai-education' },
    { name: 'AI Customer Service Automation', href: '/ai-customer-service' },
    { name: 'AI Fraud Detection System', href: '/ai-fraud-detection' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
    { name: 'AI Natural Language Processing', href: '/ai-nlp' },
    { name: 'AI Computer Vision', href: '/computer-vision' },
    { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant' },
    { name: 'AI Recommendation Engine Pro', href: '/ai-recommendation-engine' },
    { name: 'AI Chatbot Platform Pro', href: '/ai-chatbot-platform' },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics' },
    { name: 'AI Content Moderation Pro', href: '/ai-content-moderation' },
    { name: 'AI Process Automation Pro', href: '/ai-process-automation' },
    { name: 'AI Quality Assurance Pro', href: '/ai-quality-assurance' }
  ];

  const itServices = [
    { name: 'Cloud Migration Services', href: '/cloud-migration' },
    { name: 'Enterprise IT Infrastructure', href: '/enterprise-infrastructure' },
    { name: 'DevOps & CI/CD Automation', href: '/devops-automation' },
    { name: 'Database Management & Optimization', href: '/database-management' },
    { name: 'Network Security & Firewall', href: '/network-security' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting' },
    { name: 'Managed IT Services', href: '/managed-it-services' },
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
    { name: 'Web Development Services', href: '/web-development' },
    { name: 'Data Center Solutions', href: '/data-center-solutions' },
    { name: 'IT Support & Helpdesk', href: '/it-support' },
    { name: 'Cloud Security & Compliance', href: '/cloud-security' },
    { name: 'IT Asset Management', href: '/it-asset-management' },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery' },
    { name: 'IT Training & Support', href: '/it-training' },
    { name: 'IT Performance Optimization', href: '/it-performance' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'Compliance & Governance', href: '/compliance' },
    { name: 'Developer Tools & Platforms', href: '/developer-tools' },
    { name: 'Marketing Technology Solutions', href: '/marketing-tools' },
    { name: 'Productivity Solutions', href: '/productivity' }
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
