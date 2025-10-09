import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
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
        { name: 'Machine Learning', path: '/machine-learning', description: 'Custom ML models & analytics' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Manufacturing', path: '/ai-manufacturing', description: 'Smart manufacturing solutions' },
        { name: 'AI E-commerce', path: '/ai-ecommerce', description: 'E-commerce AI platforms' },
        { name: 'AI Education', path: '/ai-education', description: 'Personalized learning platforms' },
        { name: 'AI Transportation', path: '/ai-transportation', description: 'Smart transportation solutions' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen quantum computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing AI systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized AI solutions' },
        { name: 'IoT & Edge AI', path: '/iot-edge-ai', description: 'Edge computing AI solutions' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Advanced predictive modeling' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Computer vision solutions' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Speech recognition & synthesis' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendations' },
        { name: 'AI Sentiment Analysis', path: '/ai-sentiment-analysis', description: 'Real-time sentiment analysis' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' }
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
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'AWS, Azure, GCP migration' },
        { name: 'Infrastructure as Code', path: '/infrastructure-as-code', description: 'Automated provisioning' },
        { name: 'Cloud Cost Optimization', path: '/cloud-cost-optimization', description: 'AI-powered cost reduction' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Backup & recovery solutions' },
        { name: 'Cybersecurity Suite', path: '/cybersecurity-suite', description: 'Comprehensive security' },
        { name: 'Zero Trust Security', path: '/zero-trust-security', description: 'Advanced security architecture' },
        { name: 'Compliance Management', path: '/compliance-management', description: 'GDPR, HIPAA, SOX compliance' },
        { name: 'Identity & Access Management', path: '/identity-access-management', description: 'SSO, MFA, IAM solutions' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Development automation' },
        { name: 'Container Orchestration', path: '/container-orchestration', description: 'Kubernetes & Docker' },
        { name: 'Mobile App Development', path: '/mobile-app-development', description: 'Native & cross-platform' },
        { name: 'Web Development', path: '/web-development', description: 'Modern web applications' },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization' },
        { name: 'Data Warehousing', path: '/data-warehousing', description: 'Enterprise data solutions' },
        { name: 'Data Integration', path: '/data-integration', description: 'Real-time data sync' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Advanced BI solutions' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Enterprise networking' },
        { name: 'SD-WAN Solutions', path: '/sd-wan-solutions', description: 'Software-defined WAN' },
        { name: '5G & Edge Computing', path: '/5g-edge-computing', description: 'Next-gen connectivity' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 technical support' },
        { name: 'Managed IT Services', path: '/managed-it-services', description: 'Complete IT management' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'IT Project Management', path: '/it-project-management', description: 'End-to-end project delivery' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale IT solutions' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure design' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps' },
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project management' },
        { name: 'AI Document Manager', path: '/ai-document-manager', description: 'Smart document organization' },
        { name: 'AI Time Tracker', path: '/ai-time-tracker', description: 'Intelligent time tracking' },
        { name: 'AI Goal Tracker', path: '/ai-goal-tracker', description: 'Smart goal setting & tracking' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design creation' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'Intelligent chatbots' },
        { name: 'AI Ticket System', path: '/ai-ticket-system', description: 'Intelligent ticket management' },
        { name: 'AI Call Center', path: '/ai-call-center', description: 'Virtual call center' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Real-time AI chat' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Smart expense management' },
        { name: 'AI Payment Processor', path: '/ai-payment-processor', description: 'Intelligent payment processing' },
        { name: 'AI Financial Planner', path: '/ai-financial-planner', description: 'AI-powered financial planning' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Employee performance monitoring' },
        { name: 'AI Recruiting Tool', path: '/ai-recruiting-tool', description: 'Smart candidate screening' },
        { name: 'AI Learning Platform', path: '/ai-learning-platform', description: 'Personalized employee training' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'Build native mobile apps' },
        { name: 'AI Website Builder', path: '/ai-website-builder', description: 'Create professional websites' },
        { name: 'AI Code Assistant', path: '/ai-code-assistant', description: 'AI-powered code generation' },
        { name: 'AI Bug Tracker', path: '/ai-bug-tracker', description: 'Intelligent bug detection' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' },
        { name: 'AI Manufacturing', path: '/ai-manufacturing', description: 'Smart manufacturing solutions' },
        { name: 'AI E-commerce', path: '/ai-ecommerce', description: 'E-commerce AI platforms' },
        { name: 'AI Education', path: '/ai-education', description: 'Personalized learning platforms' },
        { name: 'AI Transportation', path: '/ai-transportation', description: 'Smart transportation solutions' },
        { name: 'Machine Learning', path: '/machine-learning', description: 'Custom ML models & analytics' },
        { name: 'IoT & Edge AI', path: '/iot-edge-ai', description: 'Edge computing AI solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 5).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 5 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
