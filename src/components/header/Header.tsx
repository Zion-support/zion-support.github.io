import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail, MapPin, Globe, Building2, Users, FileText, HelpCircle, BarChart3, Zap, Brain, Server, Shield, Rocket, Target, Lightbulb, Atom, Lock, Cpu, Database, Network, Wifi, Workflow, Eye, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      isOpen: isServicesOpen,
      setIsOpen: setIsServicesOpen,
      children: [
        {
          title: 'AI & Automation',
          items: [
            { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform', icon: Brain },
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield },
            { name: 'AI Healthcare', href: '/services/ai-healthcare-platform', icon: Users },
            { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain },
            { name: 'AI Trading Platform', href: '/services/ai-financial-trading-platform', icon: BarChart3 }
          ]
        },
        {
          title: 'IT & Infrastructure',
          items: [
            { name: 'Infrastructure Management', href: '/services/it-infrastructure-management', icon: Server },
            { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cpu },
            { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Lock },
            { name: 'Quantum Computing', href: '/services/ai-quantum-computing-solutions', icon: Atom },
            { name: 'Edge Computing', href: '/services/edge-computing-solutions', icon: Wifi },
            { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Network }
          ]
        },
        {
          title: 'Micro SaaS',
          items: [
            { name: 'All Micro SaaS', href: '/services/micro-saas-solutions-comprehensive', icon: Zap },
            { name: 'AI Support Automation', href: '/services/ai-customer-support-automation', icon: Users },
            { name: 'AI Project Management', href: '/services/ai-project-management-platform', icon: Workflow },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform', icon: Target },
            { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow },
            { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: Eye }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      isOpen: isSolutionsOpen,
      setIsOpen: setIsSolutionsOpen,
      children: [
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Healthcare', href: '/solutions/healthcare', icon: Users },
            { name: 'Financial', href: '/solutions/financial', icon: BarChart3 },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu },
            { name: 'Government', href: '/solutions/government', icon: Building2 },
            { name: 'Retail', href: '/solutions/retail', icon: Target }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing', icon: Atom },
            { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business', icon: Brain },
            { name: 'Blockchain Web3', href: '/solutions/blockchain-web3', icon: Network },
            { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing', icon: Wifi },
            { name: 'Space Tech', href: '/solutions/space-tech', icon: Rocket }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building2,
      isOpen: isCompanyOpen,
      setIsOpen: setIsCompanyOpen,
      children: [
        {
          title: 'About Us',
          items: [
            { name: 'Our Story', href: '/about/story', icon: FileText },
            { name: 'Leadership', href: '/leadership', icon: Users },
            { name: 'Careers', href: '/careers', icon: Target },
            { name: 'Partners', href: '/partners', icon: Handshake }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Blog', href: '/blog', icon: FileText },
            { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
            { name: 'White Papers', href: '/white-papers', icon: FileText },
            { name: 'Webinars', href: '/webinars', icon: Video }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      isOpen: isResourcesOpen,
      setIsOpen: setIsResourcesOpen,
      children: [
        {
          title: 'Learning',
          items: [
            { name: 'Documentation', href: '/docs', icon: FileText },
            { name: 'Training', href: '/training', icon: GraduationCap },
            { name: 'Help Center', href: '/help', icon: HelpCircle },
            { name: 'Research & Development', href: '/research-development', icon: Lightbulb }
          ]
        },
        {
          title: 'Support',
          items: [
            { name: 'Contact Us', href: '/contact', icon: Phone },
            { name: 'Request Quote', href: '/request-quote', icon: DollarSign },
            { name: 'Support Portal', href: '/help', icon: HelpCircle },
            { name: 'Status Page', href: '/status', icon: Activity }
          ]
        }
      ]
    }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800/50 shadow-lg' 
        : 'bg-zinc-900/75 backdrop-blur-sm border-b border-zinc-800/30'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-400">Innovation • Excellence • Results</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onMouseEnter={() => item.setIsOpen(true)}
                  onMouseLeave={() => item.setIsOpen(false)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    item.isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {item.isOpen && (
                  <div
                    onMouseEnter={() => item.setIsOpen(true)}
                    onMouseLeave={() => item.setIsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-zinc-900/95 border border-zinc-700/50 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-md z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-8">
                        {item.children?.map((section, sectionIndex) => (
                                                      <div key={sectionIndex}>
                              <h4 className="text-cyan-400 font-semibold mb-4 flex items-center">
                                {section.title === 'AI & Automation' && <Brain className="w-4 h-4 mr-2" />}
                                {section.title === 'IT & Infrastructure' && <Server className="w-4 h-4 mr-2" />}
                                {section.title === 'Micro SaaS' && <Zap className="w-4 h-4 mr-2" />}
                                {section.title === 'Industry Solutions' && <Building2 className="w-4 h-4 mr-2" />}
                                {section.title === 'Technology Solutions' && <Atom className="w-4 h-4 mr-2" />}
                                {section.title === 'About Us' && <Users className="w-4 h-4 mr-2" />}
                                {section.title === 'Resources' && <FileText className="w-4 h-4 mr-2" />}
                                {section.title === 'Learning' && <GraduationCap className="w-4 h-4 mr-2" />}
                                {section.title === 'Support' && <HelpCircle className="w-4 h-4 mr-2" />}
                                {section.title}
                              </h4>
                            <ul className="space-y-3">
                              {section.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={subItem.href}
                                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group/item"
                                  >
                                    <subItem.icon className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors" />
                                    <span className="text-sm">{subItem.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Call to Action */}
                      <div className="mt-6 pt-6 border-t border-zinc-700/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-white font-semibold mb-2">Ready to get started?</h5>
                            <p className="text-gray-400 text-sm">Contact us for a free consultation</p>
                          </div>
                          <Link
                            to="/contact"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Contact Bar for Mobile */}
      <div className="lg:hidden bg-gradient-to-r from-cyan-600 to-blue-600 py-2 px-4">
        <div className="flex items-center justify-center space-x-6 text-white text-sm">
          <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-200 transition-colors">
            <Phone className="w-4 h-4" />
            <span>+1 302 464 0950</span>
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-1 hover:text-cyan-200 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}