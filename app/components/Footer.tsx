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
      { name: 'AI Quantum Task Optimizer', url: '/ai-quantum-task-optimizer', description: 'Quantum-powered optimization' },
      { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: '3D immersive workspace' },
      { name: 'AI Neural Memory Assistant', url: '/ai-neural-memory-assistant', description: 'AI memory enhancement' },
      { name: 'AI Telepathic Interface Pro', url: '/ai-telepathic-interface', description: 'Mind-controlled computing' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Holographic Content Studio', url: '/ai-holographic-content-studio', description: '3D holographic content' },
      { name: 'AI Quantum Content Optimizer', url: '/ai-quantum-content-optimizer', description: 'Quantum content optimization' },
      { name: 'AI Neural Story Architect', url: '/ai-neural-story-architect', description: 'AI story creation' },
      { name: 'AI Telepathic Marketing Pro', url: '/ai-telepathic-marketing', description: 'Mind-reading marketing' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Quantum Financial Oracle', url: '/ai-quantum-financial-oracle', description: 'Quantum financial prediction' },
      { name: 'AI Holographic Boardroom', url: '/ai-holographic-boardroom', description: '3D boardroom experience' },
      { name: 'AI Neural Business Strategist', url: '/ai-neural-business-strategist', description: 'AI business strategy' },
      { name: 'AI Telepathic Sales Pro', url: '/ai-telepathic-sales', description: 'Mind-reading sales' }
    ],
    'Customer Service': [
      { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
      { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
      { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' }
    ],
    'Development': [
      { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
      { name: 'AI Mobile App Builder', url: '/ai-mobile-app-development', description: 'Mobile app development' },
      { name: 'AI Document Processor', url: '/ai-document-processing', description: 'Document automation' }
    ],
    'Analytics': [
      { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Data insights & analytics' },
      { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
      { name: 'AI Data Analytics Pro', url: '/ai-data-analytics', description: 'Advanced data analysis' }
    ],
    'Creative': [
      { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
      { name: 'AI Holographic Design Studio', url: '/ai-holographic-design-studio', description: '3D holographic design' },
      { name: 'AI Quantum Art Generator', url: '/ai-quantum-art-generator', description: 'Quantum art creation' },
      { name: 'AI Neural Music Composer', url: '/ai-neural-music-composer', description: 'Neural music composition' },
      { name: 'AI Telepathic Creative Assistant', url: '/ai-telepathic-creative-assistant', description: 'Mind-controlled creativity' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Quantum Health Optimizer', url: '/ai-quantum-health-optimizer', description: 'Quantum health optimization' },
      { name: 'AI Holographic Medical Scanner', url: '/ai-holographic-medical-scanner', description: '3D medical scanning' },
      { name: 'AI Neural Wellness Coach', url: '/ai-neural-wellness-coach', description: 'Neural wellness coaching' },
      { name: 'AI Telepathic Therapy Pro', url: '/ai-telepathic-therapy', description: 'Mind-reading therapy' }
    ],
    'Sales': [
      { name: 'AI Sales Automation Hub', url: '/ai-sales-automation', description: 'Sales optimization' }
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
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
<<<<<<< HEAD
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
