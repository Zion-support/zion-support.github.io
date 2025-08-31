import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Settings,
  Users,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Rocket,
  Zap,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Cpu,
  Smartphone,
  Lock,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  Target,
  Building2,
  Server,
  Network,
  Activity,
  TrendingUp,
  Workflow,
  DollarSign,
  Atom,
  Satellite,
  Heart,
  Factory,
  ShoppingCart,
  Briefcase,
  Award,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  HelpCircle,
  Handshake,
  PenTool,
  Monitor,
  Layers,
  Star,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ModernSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Contact', href: '/contact', icon: Phone },
      { name: 'Pricing', href: '/pricing', icon: DollarSign },
      { name: 'Support', href: '/support', icon: HelpCircle },
    ],
    services: [
      {
        name: 'AI & Automation',
        icon: Brain,
        items: [
          { name: 'AI Enterprise Intelligence', href: '/services/ai-enterprise-intelligence-platform', icon: BarChart3 },
          { name: 'AI Autonomous Business', href: '/services/ai-autonomous-business-operations-platform', icon: Settings },
          { name: 'AI Customer Analytics', href: '/services/ai-customer-experience-analytics-platform', icon: Users },
          { name: 'AI Project Management', href: '/services/ai-project-management-platform', icon: Workflow },
          { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform', icon: Zap },
          { name: 'AI Data Analytics', href: '/services/ai-data-analytics-platform', icon: Database },
          { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-dashboard', icon: TrendingUp },
          { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow },
        ]
      },
      {
        name: 'Cloud & Infrastructure',
        icon: Cloud,
        items: [
          { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', icon: Atom },
          { name: 'Infrastructure Management', href: '/services/it-infrastructure-management', icon: Server },
          { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
          { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
          { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Lock },
          { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', icon: Network },
          { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Sparkles },
          { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: DollarSign },
        ]
      },
      {
        name: 'Specialized Solutions',
        icon: Target,
        items: [
          { name: 'Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', icon: Heart },
          { name: 'Financial Trading', href: '/services/ai-financial-trading-platform', icon: TrendingUp },
          { name: 'Space Technology', href: '/services/ai-space-technology-platform', icon: Satellite },
          { name: 'Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-platform', icon: Activity },
          { name: 'Legal Document Automation', href: '/services/ai-legal-document-automation-platform', icon: FileText },
          { name: 'HR Management', href: '/services/ai-hr-platform', icon: Users },
          { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions-comprehensive', icon: Layers },
          { name: 'Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp },
        ]
      }
    ],
    solutions: [
      {
        name: 'Industry Solutions',
        icon: Building2,
        items: [
          { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
          { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
          { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory },
          { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart },
          { name: 'Government', href: '/solutions/government', icon: Building2 },
        ]
      },
      {
        name: 'Technology Solutions',
        icon: Rocket,
        items: [
          { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing', icon: Atom },
          { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business', icon: Brain },
          { name: 'Blockchain & Web3', href: '/solutions/blockchain-web3', icon: Network },
          { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing', icon: Smartphone },
          { name: 'Space Technology', href: '/solutions/space-tech', icon: Satellite },
        ]
      }
    ],
    company: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Leadership', href: '/leadership', icon: Award },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'News', href: '/news', icon: FileText },
      { name: 'Events', href: '/events', icon: Calendar },
      { name: 'Partners', href: '/partners', icon: Handshake },
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: PenTool },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'White Papers', href: '/white-papers', icon: BookOpen },
      { name: 'Documentation', href: '/docs', icon: Monitor },
      { name: 'Research & Development', href: '/research-development', icon: Lightbulb },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Training', href: '/training', icon: GraduationCap },
      { name: 'Help Center', href: '/help', icon: HelpCircle },
    ],
    innovation: [
      { name: 'Innovation Hub', href: '/innovative-services-hub', icon: Rocket },
      { name: 'Innovation Showcase 2026', href: '/innovative-services-showcase-2026', icon: Star },
      { name: 'Innovation Showcase 2032', href: '/innovative-services-showcase-2032', icon: Sparkles },
      { name: 'Services Showcase 2025', href: '/comprehensive-services-showcase-2025', icon: Layers },
      { name: 'Pricing Guide 2032', href: '/comprehensive-pricing-guide-2032', icon: DollarSign },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', icon: Lock },
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Cookie Policy', href: '/cookies', icon: Lock },
      { name: 'Accessibility', href: '/accessibility', icon: Users },
      { name: 'Security', href: '/security', icon: Shield },
      { name: 'Compliance', href: '/compliance', icon: CheckCircle },
    ]
  };

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
      { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    ]
  };

  const isLinkActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/' && location.pathname.startsWith(href));
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-24 left-4 z-50 p-2 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700/50 z-40 transform transition-transform duration-300 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 space-y-6">
          {/* Quick Access */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Quick Access
            </h3>
            <div className="space-y-1">
              {navigation.main.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isLinkActive(item.href)
                        ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Services
              </h3>
              <button
                onClick={() => toggleSection('services')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('services') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('services') && (
              <div className="space-y-2">
                {navigation.services.map((category) => {
                  const CategoryIcon = category.icon;
                  const categoryKey = `services-${category.name}`;
                  return (
                    <div key={category.name} className="space-y-1">
                      <button
                        onClick={() => toggleSection(categoryKey)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400 rounded-lg transition-all"
                      >
                        <div className="flex items-center">
                          <CategoryIcon className="w-4 h-4 mr-3" />
                          {category.name}
                        </div>
                        <ChevronRight className={`w-3 h-3 transition-transform ${
                          expandedSections.includes(categoryKey) ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {expandedSections.includes(categoryKey) && (
                        <div className="ml-4 space-y-1">
                          {category.items.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                                  isLinkActive(item.href)
                                    ? 'bg-cyan-500/20 text-cyan-400'
                                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-cyan-400'
                                }`}
                              >
                                <ItemIcon className="w-3 h-3 mr-3" />
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-sm text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                >
                  <Layers className="w-4 h-4 mr-3" />
                  View All Services
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Solutions
              </h3>
              <button
                onClick={() => toggleSection('solutions')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('solutions') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('solutions') && (
              <div className="space-y-2">
                {navigation.solutions.map((category) => {
                  const CategoryIcon = category.icon;
                  const categoryKey = `solutions-${category.name}`;
                  return (
                    <div key={category.name} className="space-y-1">
                      <button
                        onClick={() => toggleSection(categoryKey)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400 rounded-lg transition-all"
                      >
                        <div className="flex items-center">
                          <CategoryIcon className="w-4 h-4 mr-3" />
                          {category.name}
                        </div>
                        <ChevronRight className={`w-3 h-3 transition-transform ${
                          expandedSections.includes(categoryKey) ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {expandedSections.includes(categoryKey) && (
                        <div className="ml-4 space-y-1">
                          {category.items.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                                  isLinkActive(item.href)
                                    ? 'bg-cyan-500/20 text-cyan-400'
                                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-cyan-400'
                                }`}
                              >
                                <ItemIcon className="w-3 h-3 mr-3" />
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <Link
                  to="/solutions"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-sm text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                >
                  <Target className="w-4 h-4 mr-3" />
                  View All Solutions
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </Link>
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Company
              </h3>
              <button
                onClick={() => toggleSection('company')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('company') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('company') && (
              <div className="space-y-1">
                {navigation.company.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isLinkActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Resources Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Resources
              </h3>
              <button
                onClick={() => toggleSection('resources')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('resources') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('resources') && (
              <div className="space-y-1">
                {navigation.resources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isLinkActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Innovation Hub */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                Innovation Hub
              </h3>
              <button
                onClick={() => toggleSection('innovation')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('innovation') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('innovation') && (
              <div className="space-y-1">
                {navigation.innovation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isLinkActive(item.href)
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'text-slate-300 hover:bg-slate-800/50 hover:text-purple-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Legal Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Legal & Compliance
              </h3>
              <button
                onClick={() => toggleSection('legal')}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedSections.includes('legal') ? 'rotate-180' : ''
                }`} />
              </button>
            </div>
            
            {expandedSections.includes('legal') && (
              <div className="space-y-1">
                {navigation.legal.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isLinkActive(item.href)
                          ? 'bg-slate-500/20 text-slate-400'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4 pt-6 border-t border-slate-700/50">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center text-slate-400">
                <Phone className="w-3 h-3 mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-3 h-3 mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-slate-400">
                <MapPin className="w-3 h-3 mr-2 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-2 pt-2">
                {contactInfo.social.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-800/50 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 rounded transition-all"
                      aria-label={social.name}
                    >
                      <SocialIcon className="w-3 h-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3 pt-4">
            <div className="grid grid-cols-1 gap-2">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing" 
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 text-center border border-slate-600 hover:border-cyan-500"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernSidebar;