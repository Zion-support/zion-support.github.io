import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Users, Briefcase, Phone, Mail, MapPin, Brain, BarChart3, Code, Palette, Target } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname.startsWith('/services'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Quantum Technology', href: '/services/quantum-technology' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', href: '/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Advanced Services 2025', href: '/advanced-innovative-services-2025', highlight: true },
        { name: 'View All Services', href: '/services' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions/enterprise', 
      current: location.pathname.startsWith('/solutions'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/services/quantum-technology' },
        { name: 'Manufacturing', href: '/autonomous-business-operations-platform' },
        { name: 'Retail & E-commerce', href: '/services/industry-solutions' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: location.pathname.startsWith('/about') || location.pathname.startsWith('/team') || location.pathname.startsWith('/partners'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' },
        { name: 'Mission & Vision', href: '/mission' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/blog', 
      current: location.pathname.startsWith('/blog') || location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/webinars'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Events', href: '/events' },
        { name: 'Help Center', href: '/help' }
      ]
    },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior insights', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Brain },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', description: 'Future-ready business management', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Brain },
        { name: 'AI Business Platform 2026', path: '/ai-autonomous-business-platform-2026', description: 'Next-gen business platform', icon: Brain },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: Target },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes', icon: Shield },
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare', description: 'Patient care optimization', icon: Heart }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'AI-powered business management' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete AI business platform' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: Shield },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye },
        { name: 'Advanced Services 2025', path: '/advanced-innovative-services-2025', description: 'Cutting-edge 2025 solutions', icon: Rocket }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                    onMouseEnter={() => {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'Company') setIsCompanyOpen(true);
                      if (item.name === 'Resources') setIsResourcesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'Company') setIsCompanyOpen(false);
                      if (item.name === 'Resources') setIsResourcesOpen(false);
                    }}
                  >
                    <span className={`${
                      item.current
                        ? 'text-zion-cyan'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}>
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 ml-1 text-muted-foreground group-hover:text-foreground" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-zion-slate/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 ${
                      item.name === 'Services' && isServicesOpen ? 'opacity-100 visible translate-y-0' : ''
                    } ${
                      item.name === 'Company' && isCompanyOpen ? 'opacity-100 visible translate-y-0' : ''
                    } ${
                      item.name === 'Resources' && isResourcesOpen ? 'opacity-100 visible translate-y-0' : ''
                    }`}
                    onMouseEnter={() => {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'Company') setIsCompanyOpen(true);
                      if (item.name === 'Resources') setIsResourcesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'Company') setIsCompanyOpen(false);
                      if (item.name === 'Resources') setIsResourcesOpen(false);
                    }}
                  >
                    <div className="p-4 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            dropdownItem.highlight
                              ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/10'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Contact Info, Social Links, Theme Toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon} w-4 h-4`}></i>
                </a>
              ))}
            </div>

            <ThemeToggle />
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-border">
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{contact.text}</span>
                      </a>
                    );
                  })}
                </div>
                
                <div className="pt-4 flex items-center justify-between">
                  <ThemeToggle />
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;