import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
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
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation', price: '$79/mo' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling', price: '$39/mo' },
      { name: 'AI Focus Timer Pro', url: '/ai-focus-timer', description: 'Enhanced focus sessions', price: '$24/mo' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation', price: '$89/mo' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', price: '$69/mo' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns', price: '$59/mo' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation', price: '$79/mo' },
      { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation', price: '$99/mo' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions', price: '$89/mo' },
      { name: 'AI Personal Finance Optimizer', url: '/ai-personal-finance-optimizer', description: 'Personal finance management', price: '$49/mo' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Advanced financial insights', price: '$79/mo' },
      { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', price: '$99/mo' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', price: '$99/mo' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation', price: '$69/mo' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management', price: '$39/mo' },
      { name: 'AI Meeting Assistant Pro', url: '/ai-meeting-assistant', description: 'Meeting management', price: '$79/mo' }
    ],
    'Development': [
      { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', price: '$89/mo' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development', price: '$149/mo' },
      { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Document automation', price: '$79/mo' },
      { name: 'AI Language Translation Pro', url: '/ai-language-translation-pro', description: 'Advanced translation', price: '$69/mo' }
    ],
    'Analytics': [
      { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Data insights & analytics', price: '$99/mo' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards', price: '$69/mo' },
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis', price: '$99/mo' },
      { name: 'AI Blockchain Analytics Pro', url: '/ai-blockchain-analytics', description: 'Blockchain data analysis', price: '$199/mo' }
    ],
    'Creative': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation', price: '$149/mo' },
      { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis', price: '$79/mo' },
      { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music', price: '$59/mo' },
      { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design', price: '$89/mo' },
      { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation', price: '$199/mo' },
      { name: 'AI Metaverse Builder Pro', url: '/ai-metaverse-builder', description: 'Virtual world creation', price: '$249/mo' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI support', price: '$49/mo' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans', price: '$39/mo' },
      { name: 'AI Mental Health Companion', url: '/ai-mental-health-companion', description: 'Mental health support', price: '$79/mo' },
      { name: 'AI Sleep Optimizer Pro', url: '/ai-sleep-optimizer', description: 'Sleep optimization', price: '$34/mo' }
    ],
    'Emerging Tech': [
      { name: 'AI Climate Intelligence Pro', url: '/ai-climate-intelligence', description: 'Climate monitoring', price: '$199/mo' },
      { name: 'AI Quantum Simulator Pro', url: '/ai-quantum-simulator', description: 'Quantum computing simulation', price: '$299/mo' },
      { name: 'AI Space Analytics Pro', url: '/ai-space-analytics', description: 'Space data analysis', price: '$399/mo' },
      { name: 'AI Digital Twin Creator Pro', url: '/ai-digital-twin', description: 'Digital twin creation', price: '$329/mo' }
    ]
  };

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
    { name: 'AI Fraud Detection', href: '/ai-cybersecurity' },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Robotics', href: '/ai-robotics' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure' },
    { name: 'Autonomous Systems Development', href: '/autonomous-systems-development' },
    { name: 'Metaverse Development', href: '/metaverse-development' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions' },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions' },
    { name: 'Space Technology Services', href: '/space-technology-services' },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems' },
    { name: 'Digital Twin Development', href: '/digital-twin-development' },
    { name: 'Advanced Cybersecurity', href: '/advanced-cybersecurity' },
    { name: 'Smart City Solutions', href: '/smart-city-solutions' },
    { name: 'FinTech Solutions', href: '/fintech-solutions' },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure' },
    { name: 'EdTech Solutions', href: '/edtech-solutions' },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions' },
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
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(microSaasServices).map(([category, services]) => (
                <div key={category}>
                  <h4 className="text-white font-medium mb-3 text-sm border-b border-cyan-400/20 pb-1">{category}</h4>
                  <ul className="space-y-2">
                    {services.slice(0, 4).map((service) => (
                      <li key={service.name}>
                        <a href={service.url}
                          className="group flex items-center justify-between text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="truncate">{service.name}</span>
                            <ArrowRight className="w-2 h-2 ml-1 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                          </div>
                          <span className="text-cyan-400 text-xs font-medium ml-2">{service.price}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-white transition-colors text-sm"
              >
                View All Micro SAAS →
              </a>
              <a href="/pricing"
                className="inline-flex items-center text-purple-400 hover:text-white transition-colors text-sm"
              >
                View Pricing Plans →
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
                        className="group flex items-center justify-between text-xs text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        <span className="truncate">{service.name}</span>
                        <span className="text-purple-400 text-xs font-medium ml-2">{service.price}</span>
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
                        className="group flex items-center justify-between text-xs text-gray-300 hover:text-green-400 transition-colors duration-300"
                      >
                        <span className="truncate">{service.name}</span>
                        <span className="text-green-400 text-xs font-medium ml-2">{service.price}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-white transition-colors text-sm"
              >
                View All Services →
              </a>
              <a href="/enterprise"
                className="inline-flex items-center text-orange-400 hover:text-white transition-colors text-sm"
              >
                Enterprise Solutions →
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated with Zion Tech Group</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Get the latest insights on AI, quantum computing, autonomous systems, and cutting-edge technology trends. 
                  Join 50,000+ professionals who trust our expertise for industry updates, case studies, and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-600"
                  />
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-cyan-400/20">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Why Subscribe?</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Weekly AI & technology insights
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Exclusive case studies and success stories
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Early access to new service launches
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Industry reports and market analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    Special offers and discounts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Founded: 2020</p>
                <p>Headquarters: Middletown, DE</p>
                <p>Employees: 500+</p>
                <p>Clients: 10,000+</p>
                <p>Uptime: 99.9%</p>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h4 className="text-white font-semibold mb-4">Certifications & Compliance</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>ISO 27001 Certified</p>
                <p>SOC 2 Type II</p>
                <p>GDPR Compliant</p>
                <p>HIPAA Compliant</p>
                <p>PCI DSS Level 1</p>
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <h4 className="text-white font-semibold mb-4">Awards & Recognition</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Best AI Company 2024</p>
                <p>Top 100 Tech Companies</p>
                <p>Innovation Excellence Award</p>
                <p>Customer Choice Award</p>
                <p>Fastest Growing Company</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Sitemap
                </a>
                <a href="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Accessibility
                </a>
                <a href="/security" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Security
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
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
