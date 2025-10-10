'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
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
  const aiServices = [
    { name: 'AI Enterprise Solutions', href: '/ai-enterprise-solutions-pro', icon: Brain, description: 'Comprehensive AI Platform' },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation-pro', icon: Target, description: 'AI-Powered Marketing' },
    { name: 'AI Customer Support', href: '/ai-customer-support-pro', icon: Users, description: 'Intelligent Support Systems' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics-pro', icon: BarChart, description: 'Advanced Data Intelligence' },
    { name: 'AI Content Generation', href: '/ai-content-generation-pro', icon: Code, description: 'AI Content Creation' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare-solutions-pro', icon: Shield, description: 'Medical AI Platform' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech-solutions-pro', icon: TrendingUp, description: 'Financial AI Services' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions-pro', icon: Globe, description: 'E-commerce AI Platform' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant-pro', icon: Brain, description: 'Voice AI Platform' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-pro', icon: Settings, description: 'Industrial AI' },
    { name: 'AI Supply Chain', href: '/ai-supply-chain-pro', icon: BarChart, description: 'Supply Chain AI' },
    { name: 'AI Quality Control', href: '/ai-quality-control-pro', icon: Shield, description: 'Quality Control AI' },
    { name: 'AI Energy Management', href: '/ai-energy-management-pro', icon: Zap, description: 'Energy AI Solutions' },
    { name: 'AI Legal Analysis', href: '/ai-legal-analysis-pro', icon: FileText, description: 'Legal AI Platform' },
    { name: 'AI Real Estate', href: '/ai-real-estate-pro', icon: Globe, description: 'Real Estate AI' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions-pro', icon: Users, description: 'HR AI Platform' },
    { name: 'AI Insurance', href: '/ai-insurance-pro', icon: Shield, description: 'Insurance AI' },
    { name: 'AI Education', href: '/ai-education-pro', icon: Users, description: 'Educational AI' },
    { name: 'AI Transportation', href: '/ai-transportation-pro', icon: Globe, description: 'Transportation AI' },
    { name: 'AI Environmental', href: '/ai-environmental-pro', icon: Globe, description: 'Environmental AI' },
    { name: 'AI Retail', href: '/ai-retail-pro', icon: Globe, description: 'Retail AI' },
    { name: 'AI Sports', href: '/ai-sports-pro', icon: BarChart, description: 'Sports AI' },
    { name: 'AI Mental Health', href: '/ai-mental-health-pro', icon: Users, description: 'Mental Health AI' }
  ];
  const itServices = [
    { name: 'Cloud Migration Pro', href: '/cloud-migration-pro', icon: Cloud, description: 'Zero-Downtime Migration' },
    { name: 'Cloud Security Suite', href: '/cloud-security-suite-pro', icon: Shield, description: 'AI-Powered Security' },
    { name: 'DevOps CI/CD Pro', href: '/devops-cicd-pro', icon: Settings, description: 'Automated Development' },
    { name: 'Database Management Pro', href: '/database-management-pro', icon: Database, description: 'AI-Optimized Databases' },
    { name: 'Network Security Pro', href: '/network-security-pro', icon: Shield, description: 'Advanced Network Protection' },
    { name: 'Managed IT Services Pro', href: '/managed-it-services-pro', icon: Settings, description: '24/7 IT Support' },
    { name: 'IT Consulting Pro', href: '/it-consulting-pro', icon: Users, description: 'Strategic IT Consulting' },
    { name: 'Data Backup & Recovery Pro', href: '/data-backup-recovery-pro', icon: Database, description: 'Disaster Recovery' },
    { name: 'Mobile Device Management Pro', href: '/mobile-device-management-pro', icon: Smartphone, description: 'Enterprise MDM' },
    { name: 'IT Asset Management Pro', href: '/it-asset-management-pro', icon: Settings, description: 'Asset Lifecycle Management' },
    { name: 'Website Hosting Pro', href: '/website-hosting-pro', icon: Globe, description: 'High-Performance Hosting' },
    { name: 'Compliance Audit Pro', href: '/compliance-audit-pro', icon: Shield, description: 'Automated Compliance' },
    { name: 'IT Performance Monitoring Pro', href: '/it-performance-monitoring-pro', icon: BarChart, description: 'Real-Time Monitoring' },
    { name: 'IT Training Pro', href: '/it-training-pro', icon: Users, description: 'Professional IT Training' },
    { name: 'IT Project Management Pro', href: '/it-project-management-pro', icon: Settings, description: 'IT Project Delivery' },
    { name: 'Vulnerability Assessment Pro', href: '/vulnerability-assessment-pro', icon: Shield, description: 'Security Assessment' },
    { name: 'Hybrid Cloud Pro', href: '/hybrid-cloud-pro', icon: Cloud, description: 'Seamless Cloud Integration' },
    { name: 'Data Migration Pro', href: '/data-migration-pro', icon: Database, description: 'Secure Data Migration' },
    { name: 'API Development Pro', href: '/api-development-pro', icon: Globe, description: 'Custom API Development' },
    { name: 'IT Governance Pro', href: '/it-governance-pro', icon: Settings, description: 'Strategic IT Governance' }
  ];
  const microSaasServices = [
    { name: 'AI Customer Success Pro', href: '/ai-customer-success-pro', icon: Users, description: 'Customer Success AI' },
    { name: 'AI Content Studio Pro', href: '/ai-content-studio-pro', icon: Code, description: 'Content Creation AI' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: BarChart, description: 'Business Intelligence' },
    { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro', icon: Mail, description: 'Email Marketing AI' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder-pro', icon: Users, description: 'Chatbot Platform' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer-pro', icon: Search, description: 'SEO AI Tools' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro', icon: Globe, description: 'Social Media AI' },
    { name: 'AI Project Manager Pro', href: '/ai-project-manager-pro', icon: CheckSquare, description: 'Project Management AI' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator-pro', icon: BarChart, description: 'Invoice AI' },
    { name: 'AI Writing Assistant Pro', href: '/ai-writing-assistant-pro', icon: Code, description: 'Writing AI' },
    { name: 'AI Design Studio Pro', href: '/ai-design-studio-pro', icon: Sparkles, description: 'Design AI' },
    { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: Code, description: 'Development AI' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization-pro', icon: BarChart, description: 'Data Viz AI' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation-pro', icon: Zap, description: 'Automation AI' },
    { name: 'AI Customer Feedback Pro', href: '/ai-customer-feedback-pro', icon: MessageCircle, description: 'Feedback AI' },
    { name: 'AI Inventory Manager Pro', href: '/ai-inventory-manager-pro', icon: Package, description: 'Inventory AI' },
    { name: 'AI Legal Document Pro', href: '/ai-legal-document-pro', icon: Scale, description: 'Legal AI' },
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare-assistant-pro', icon: Heart, description: 'Healthcare AI' },
    { name: 'AI Real Estate Pro', href: '/ai-real-estate-pro', icon: Home, description: 'Real Estate AI' },
    { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', icon: GraduationCap, description: 'Education AI' },
    { name: 'AI Fintech Suite Pro', href: '/ai-fintech-suite-pro', icon: CreditCard, description: 'Fintech AI' },
    { name: 'AI Transportation Pro', href: '/ai-transportation-pro', icon: Truck, description: 'Transportation AI' },
    { name: 'AI Environmental Pro', href: '/ai-environmental-pro', icon: Leaf, description: 'Environmental AI' },
    { name: 'AI Retail Pro', href: '/ai-retail-pro', icon: ShoppingBag, description: 'Retail AI' },
    { name: 'AI Sports Pro', href: '/ai-sports-pro', icon: Trophy, description: 'Sports AI' },
    { name: 'AI Mental Health Pro', href: '/ai-mental-health-pro', icon: Heart, description: 'Mental Health AI' }
  ];
  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum Solutions' },
    { name: 'Robotics & Automation', href: '/robotics', icon: Brain, description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe, description: 'Connected Devices' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-Managing Systems' },
    { name: '5G Implementation', href: '/5g-implementation', icon: Globe, description: '5G Solutions' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Brain, description: '3D AI Solutions' },
    { name: 'Holographic Workspace', href: '/ai-holographic-workspace', icon: Brain, description: 'Holographic AI' }
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
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
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>
              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
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