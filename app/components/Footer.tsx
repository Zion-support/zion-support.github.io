import React, { memo } from 'react';
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
      { name: 'AI Task Manager Pro', url: '/task-manager-pro', description: 'Smart task management' },
      { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
      { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
    ],
    'Content & Marketing': [
      { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
      { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
      { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
      { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation' },
      { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation' }
    ],
    'Business & Finance': [
      { name: 'AI CRM Intelligence', url: '/ai-crm', description: 'Smart CRM solutions' },
      { name: 'AI Fintech Analyzer', url: '/ai-fintech', description: 'Financial analysis' },
      { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Advanced financial insights' },
      { name: 'AI E-commerce Optimizer', url: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' }
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
      { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
      { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music' },
      { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design' },
      { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' }
    ],
    'Health & Wellness': [
      { name: 'AI Healthcare Assistant', url: '/ai-healthcare', description: 'Medical AI support' },
      { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' }
    ],
    'Sales': [
      { name: 'AI Sales Automation Hub', url: '/ai-sales-automation', description: 'Sales optimization' }
    ]
  };

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'AI project management' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'AI social media automation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-chatbot', description: 'AI customer support chatbot' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'Advanced ML solutions' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'NLP applications' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Computer vision solutions' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content generation' },
    { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Voice synthesis technology' },
    { name: 'AI Quantum Computing', url: '/ai-quantum-computing', description: 'Quantum AI solutions' },
    { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Autonomous system development' },
    { name: 'AI Blockchain Solutions', url: '/ai-blockchain-solutions', description: 'Blockchain AI integration' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Edge AI solutions' },
    { name: 'AI Metaverse Solutions', url: '/ai-metaverse-solutions', description: 'Metaverse AI development' },
    { name: 'AI Climate Solutions', url: '/ai-climate-solutions', description: 'Climate technology AI' },
    { name: 'AI Space Technology', url: '/ai-space-technology', description: 'Space technology AI' },
    { name: 'AI Biotechnology', url: '/ai-biotechnology', description: 'Biotech AI solutions' },
    { name: 'AI Robotics', url: '/ai-robotics', description: 'Robotic AI systems' },
    { name: 'AI Digital Twin', url: '/ai-digital-twin', description: 'Digital twin technology' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'Cloud Migration Services', url: '/cloud-migration-services', description: 'Professional cloud migration' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile application development' },
    { name: 'Web Development', url: '/web-development', description: 'Web application development' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup and management' },
    { name: 'IT Support', url: '/it-support', description: 'Technical support services' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'BI solutions and analytics' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions' },
    { name: 'Blockchain Solutions', url: '/blockchain', description: 'Blockchain development' },
    { name: 'Quantum Computing Infrastructure', url: '/quantum-computing-infrastructure', description: 'Quantum computing setup' },
    { name: 'Autonomous Systems Development', url: '/autonomous-systems-development', description: 'Autonomous system development' },
    { name: 'Metaverse Development', url: '/metaverse-development', description: 'Metaverse platform development' },
    { name: 'Edge Computing Solutions', url: '/edge-computing-solutions', description: 'Edge computing infrastructure' },
    { name: 'Climate Technology Solutions', url: '/climate-technology-solutions', description: 'Climate tech solutions' },
    { name: 'Space Technology Services', url: '/space-technology-services', description: 'Space technology development' },
    { name: 'Biotechnology IT Solutions', url: '/biotechnology-it-solutions', description: 'Biotech IT infrastructure' },
    { name: 'Advanced Robotics Systems', url: '/advanced-robotics-systems', description: 'Robotic system development' },
    { name: 'Digital Twin Development', url: '/digital-twin-development', description: 'Digital twin creation' },
    { name: 'Advanced Cybersecurity', url: '/advanced-cybersecurity', description: 'Advanced security solutions' },
    { name: 'Smart City Solutions', url: '/smart-city-solutions', description: 'Smart city technology' },
    { name: 'FinTech Solutions', url: '/fintech-solutions', description: 'Financial technology solutions' },
    { name: 'HealthTech Infrastructure', url: '/healthtech-infrastructure', description: 'Healthcare technology infrastructure' },
    { name: 'EdTech Solutions', url: '/edtech-solutions', description: 'Educational technology solutions' },
    { name: 'RetailTech Solutions', url: '/retailtech-solutions', description: 'Retail technology solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Press', url: '/press' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' },
    { name: 'Contact', url: '/contact' },
    { name: 'Newsletter', url: '/newsletter' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">IT Services</h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Micro SAAS Services Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Our Micro SAAS Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(microSaasServices).map(([category, services]) => (
              <div key={category} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">{category}</h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);