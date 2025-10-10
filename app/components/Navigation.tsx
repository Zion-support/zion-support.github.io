import React, { useState, useEffect } from 'react';
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'AI document processing' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-chatbot', description: 'AI customer support chatbot' },
        { name: 'Machine Learning', path: '/machine-learning', description: 'Advanced ML solutions' },
        { name: 'Natural Language Processing', path: '/nlp', description: 'NLP applications' },
        { name: 'Computer Vision', path: '/computer-vision', description: 'Computer vision solutions' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: '3D content generation' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'Voice synthesis technology' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Quantum AI solutions' },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'Autonomous system development' },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'Blockchain AI integration' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'Edge AI solutions' },
        { name: 'AI Metaverse Solutions', path: '/ai-metaverse-solutions', description: 'Metaverse AI development' },
        { name: 'AI Climate Solutions', path: '/ai-climate-solutions', description: 'Climate technology AI' },
        { name: 'AI Space Technology', path: '/ai-space-technology', description: 'Space technology AI' },
        { name: 'AI Biotechnology', path: '/ai-biotechnology', description: 'Biotech AI solutions' },
        { name: 'AI Robotics', path: '/ai-robotics', description: 'Robotic AI systems' },
        { name: 'AI Digital Twin', path: '/ai-digital-twin', description: 'Digital twin technology' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Development operations' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud solutions' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'Cloud Migration Services', path: '/cloud-migration-services', description: 'Professional cloud migration' },
        { name: 'Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile application development' },
        { name: 'Web Development', path: '/web-development', description: 'Web application development' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network setup and management' },
        { name: 'IT Support', path: '/it-support', description: 'Technical support services' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'BI solutions and analytics' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Enterprise-grade solutions' },
        { name: 'Blockchain Solutions', path: '/blockchain', description: 'Blockchain development' },
        { name: 'Quantum Computing Infrastructure', path: '/quantum-computing-infrastructure', description: 'Quantum computing setup' },
        { name: 'Autonomous Systems Development', path: '/autonomous-systems-development', description: 'Autonomous system development' },
        { name: 'Metaverse Development', path: '/metaverse-development', description: 'Metaverse platform development' },
        { name: 'Edge Computing Solutions', path: '/edge-computing-solutions', description: 'Edge computing infrastructure' },
        { name: 'Climate Technology Solutions', path: '/climate-technology-solutions', description: 'Climate tech solutions' },
        { name: 'Space Technology Services', path: '/space-technology-services', description: 'Space technology development' },
        { name: 'Biotechnology IT Solutions', path: '/biotechnology-it-solutions', description: 'Biotech IT infrastructure' },
        { name: 'Advanced Robotics Systems', path: '/advanced-robotics-systems', description: 'Robotic system development' },
        { name: 'Digital Twin Development', path: '/digital-twin-development', description: 'Digital twin creation' },
        { name: 'Advanced Cybersecurity', path: '/advanced-cybersecurity', description: 'Advanced security solutions' },
        { name: 'Smart City Solutions', path: '/smart-city-solutions', description: 'Smart city technology' },
        { name: 'FinTech Solutions', path: '/fintech-solutions', description: 'Financial technology solutions' },
        { name: 'HealthTech Infrastructure', path: '/healthtech-infrastructure', description: 'Healthcare technology infrastructure' },
        { name: 'EdTech Solutions', path: '/edtech-solutions', description: 'Educational technology solutions' },
        { name: 'RetailTech Solutions', path: '/retailtech-solutions', description: 'Retail technology solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tool' },
        { name: 'AI Task Manager Pro', path: '/task-manager-pro', description: 'Smart task management' },
        { name: 'AI Scheduler Pro', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI CRM Intelligence', path: '/ai-crm', description: 'Smart CRM solutions' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'Smart email management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'SEO automation' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'Automated lead generation' },
        { name: 'AI Video Generator Pro', path: '/ai-video-generation', description: 'AI-powered video creation' },
        { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
        { name: 'AI Music Composition Suite', path: '/ai-music-composition', description: 'AI-generated music' },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI fashion design' },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI 3D content creation' },
        { name: 'AI Healthcare Assistant', path: '/ai-healthcare', description: 'Medical AI support' },
        { name: 'AI Fitness Coach Pro', path: '/ai-fitness-coach', description: 'Personalized fitness plans' },
        { name: 'AI Sales Automation Hub', path: '/ai-sales-automation', description: 'Sales optimization' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Home
            </a>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors duration-200">
              About
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{category.title}</h4>
                          <p className="text-sm text-gray-600">{category.services.length} services available</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="/enterprise" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Enterprise
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Pricing
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Case Studies
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Blog
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Home
              </a>
              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                About
              </a>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-medium py-2">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="text-cyan-400 font-medium py-1">{category.title}</div>
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <a
                        key={serviceIndex}
                        href={service.path}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 ml-4"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>

              <a href="/enterprise" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Enterprise
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Pricing
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Case Studies
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Blog
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                Contact
              </a>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700">
                <div className="space-y-2">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;