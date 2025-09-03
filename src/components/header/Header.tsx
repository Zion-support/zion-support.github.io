import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Zap, 
  Brain, 
  Server, 
  Building2, 
  Users, 
  Phone, 
  Mail, 
  ChevronDown,
  ArrowRight,
  Target,
  Shield,
  Cloud,
  Database,
  Network,
  Globe,
  MessageCircle,
  BarChart3,
  DollarSign,
  FileText,
  Briefcase,
  HelpCircle,
  BookOpen,
  Star,
  TrendingUp,
  Lock,
  Cpu,
  Atom,
  Rocket,
  Lightbulb,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Services',
      href: '/services',
      icon: Server,
      dropdown: [
        {
          title: 'AI & Automation Services',
          icon: Brain,
          color: 'text-purple-400',
          services: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-dashboard', price: 'From $2,999/month' },
            { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', price: 'From $1,499/month' },
            { name: 'AI Project Management', href: '/services/ai-project-management-platform', price: 'From $2,299/month' },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform', price: 'From $1,799/month' },
            { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform', price: 'From $4,999/month' },
            { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', price: 'From $3,299/month' },
            { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', price: 'From $5,999/month' },
            { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', price: 'From $3,799/month' },
            { name: 'AI Educational Content Creation', href: '/services/ai-educational-content-creation-platform', price: 'From $1,999/month' },
            { name: 'AI Legal Automation', href: '/services/ai-legal-document-automation-platform', price: 'From $2,799/month' },
            { name: 'AI HR Platform', href: '/services/ai-hr-platform', price: 'From $2,199/month' },
            { name: 'AI Real Estate Analytics', href: '/services/ai-real-estate-investment-analytics-platform', price: 'From $3,499/month' },
            { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', price: 'From $4,299/month' },
            { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', price: 'From $5,499/month' },
            { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', price: 'From $6,999/month' },
            { name: 'AI Quantum Neural Network', href: '/services/ai-quantum-neural-network-platform', price: 'From $9,999/month' },
            { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', price: 'From $12,999/month' },
            { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-threat-intelligence', price: 'From $3,999/month' }
          ]
        },
        {
          title: 'Micro SAAS Solutions',
          icon: Building2,
          color: 'text-blue-400',
          services: [
            { name: 'Content Creation Studio', href: '/services/content-creation-studio', price: 'From $299/month' },
            { name: 'Project Management Hub', href: '/services/project-management-hub', price: 'From $199/month' },
            { name: 'Customer Support Center', href: '/services/customer-support-center', price: 'From $149/month' },
            { name: 'Sales Analytics Dashboard', href: '/services/sales-analytics-dashboard', price: 'From $399/month' },
            { name: 'Email Marketing Automation', href: '/services/email-marketing-automation', price: 'From $99/month' },
            { name: 'Social Media Management', href: '/services/social-media-management', price: 'From $199/month' },
            { name: 'Inventory Management System', href: '/services/inventory-management-system', price: 'From $249/month' },
            { name: 'Time Tracking & Billing', href: '/services/time-tracking-billing', price: 'From $79/month' },
            { name: 'Document Management', href: '/services/document-management', price: 'From $129/month' },
            { name: 'Team Collaboration Platform', href: '/services/team-collaboration-platform', price: 'From $179/month' },
            { name: 'Lead Generation System', href: '/services/lead-generation-system', price: 'From $349/month' },
            { name: 'Customer Feedback Platform', href: '/services/customer-feedback-platform', price: 'From $99/month' },
            { name: 'Analytics & Reporting Suite', href: '/services/analytics-reporting-suite', price: 'From $199/month' },
            { name: 'API Management Platform', href: '/services/api-management-platform', price: 'From $299/month' },
            { name: 'Data Visualization Tools', href: '/services/data-visualization-tools', price: 'From $149/month' },
            { name: 'Workflow Automation Engine', href: '/services/workflow-automation-engine', price: 'From $249/month' }
          ]
        },
        {
          title: 'IT Infrastructure & Cloud',
          icon: Cloud,
          color: 'text-green-400',
          services: [
            { name: 'Cloud Migration Services', href: '/services/cloud-migration-services', price: 'From $2,999/project' },
            { name: 'DevOps Automation', href: '/services/devops-automation', price: 'From $1,999/month' },
            { name: 'Cybersecurity Solutions', href: '/services/cybersecurity-solutions', price: 'From $1,499/month' },
            { name: 'IT Infrastructure Management', href: '/services/it-infrastructure-management', price: 'From $2,499/month' },
            { name: 'Digital Transformation', href: '/services/digital-transformation', price: 'From $5,999/project' },
            { name: 'Green IT Solutions', href: '/services/green-it-solutions', price: 'From $1,799/month' },
            { name: 'Space Technology Solutions', href: '/services/space-technology-solutions', price: 'From $9,999/month' },
            { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions', price: 'From $3,499/month' },
            { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service', price: 'From $7,999/month' },
            { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure', price: 'From $2,999/month' },
            { name: 'IoT Platform Management', href: '/services/iot-platform-management', price: 'From $1,999/month' },
            { name: 'Data Center Solutions', href: '/services/data-center-solutions', price: 'From $4,999/month' },
            { name: 'Network Security', href: '/services/network-security', price: 'From $1,299/month' },
            { name: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery', price: 'From $999/month' },
            { name: 'Performance Monitoring', href: '/services/performance-monitoring', price: 'From $799/month' },
            { name: 'Compliance & Governance', href: '/services/compliance-governance', price: 'From $1,999/month' }
          ]
        },
        {
          title: 'Quantum Computing',
          icon: Atom,
          color: 'text-cyan-400',
          services: [
            { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', price: 'From $8,999/month' },
            { name: 'Quantum Trading Platform', href: '/services/quantum-ai-trading-platform', price: 'From $12,999/month' },
            { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', price: 'From $6,999/month' },
            { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', price: 'From $9,999/month' },
            { name: 'Quantum Cryptography', href: '/services/quantum-cryptography', price: 'From $7,499/month' },
            { name: 'Quantum Simulation', href: '/services/quantum-simulation', price: 'From $5,999/month' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: DollarSign
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: MessageCircle, color: 'bg-zion-purple hover:bg-zion-purple-dark' },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg border-b border-zion-purple/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-zion-purple group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-purple transition-colors">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 hidden sm:block">
                AI • Quantum • Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-purple transition-colors cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors ${
                      location.pathname === item.href
                        ? 'text-zion-purple'
                        : 'text-white hover:text-zion-purple'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-zion-slate-dark/95 backdrop-blur-md border border-zion-purple/20 rounded-lg shadow-2xl p-6"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {item.dropdown.map((category) => (
                        <div key={category.title} className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <category.icon className={`h-5 w-5 ${category.color}`} />
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-2 rounded-lg hover:bg-zion-slate transition-colors group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-white group-hover:text-zion-purple transition-colors">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{service.price}</p>
                                  </div>
                                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-zion-purple transition-colors opacity-0 group-hover:opacity-100" />
                                </div>
                              </Link>
                            ))}
                          </div>
                          {category.services.length > 6 && (
                            <Link
                              to={item.href}
                              className="text-sm text-zion-purple hover:text-zion-purple-light transition-colors flex items-center space-x-1"
                            >
                              <span>View All {category.services.length} Services</span>
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-gray-300 hover:text-zion-purple transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-1 text-gray-300 hover:text-zion-purple transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className={`${action.color} text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105`}
                >
                  <action.icon className="h-4 w-4" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-zion-purple transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-zion-purple/20">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Contact Info */}
              <div className="flex items-center justify-between pb-4 border-b border-zion-slate">
                <div className="flex items-center space-x-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-zion-purple"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-zion-purple"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'bg-zion-purple/20 text-zion-purple'
                          : 'text-white hover:bg-zion-slate'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className={`${action.color} text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <action.icon className="h-4 w-4" />
                    <span className="font-medium">{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}