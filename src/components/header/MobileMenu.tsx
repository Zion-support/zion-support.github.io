import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Zap, 
  Brain, 
  Target, 
  Building2, 
  BookOpen,
  Phone,
  Mail,
  BarChart3,
  Bot,
  MessageCircle,
  Workflow,
  TrendingUp,
  Users,
  Settings,
  Cloud,
  Atom,
  DollarSign,
  Server,
  Shield,
  Sparkles,
  Network,
  Heart,
  Factory,
  ShoppingCart,
  Rocket,
  Satellite,
  Truck,
  Search,
  FileText,
  CheckCircle,
  Layers,
  Lightbulb,
  Award,
  Briefcase,
  Handshake,
  Calendar,
  Code,
  Video,
  GraduationCap,
  Headphones,
  Star,
  ExternalLink
} from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
  };

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      links: [
        { name: "AI Business Operations", href: "/services/ai-autonomous-business-operations-platform", icon: Bot },
        { name: "Customer Analytics", href: "/services/ai-customer-experience-analytics-platform", icon: BarChart3 },
        { name: "Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: TrendingUp },
        { name: "Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: Target },
        { name: "Customer Support AI", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp },
        { name: "HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "Predictive Maintenance", href: "/services/ai-predictive-maintenance", icon: Settings }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      links: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
        { name: "Cloud FinOps", href: "/services/cloud-finops-optimizer", icon: DollarSign },
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions", icon: Network }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Rocket,
      links: [
        { name: "Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
        { name: "Healthcare Platform", href: "/services/ai-healthcare-platform", icon: Heart },
        { name: "Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "Compliance Assistant", href: "/services/ai-compliance-assistant", icon: CheckCircle }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: "Industry Solutions",
      icon: Target,
      links: [
        { name: "Healthcare & Medical", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
        { name: "Government & Public", href: "/solutions/government", icon: Building2 },
        { name: "Retail & E-commerce", href: "/solutions/retail", icon: ShoppingCart }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Building2,
      links: [
        { name: "Digital Transformation", href: "/digital-transformation", icon: Sparkles },
        { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
        { name: "Enterprise Platform", href: "/enterprise", icon: Building2 },
        { name: "Industry Overview", href: "/industry-solutions", icon: Target }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Leadership Team", href: "/leadership", icon: Award },
    { name: "Careers & Jobs", href: "/careers", icon: Briefcase },
    { name: "Partners & Alliances", href: "/partners", icon: Handshake },
    { name: "News & Press", href: "/news", icon: FileText },
    { name: "Events & Webinars", href: "/events", icon: Calendar },
    { name: "Contact Us", href: "/contact", icon: MessageCircle }
  ];

  const resourceLinks = [
    { name: "API Documentation", href: "/docs", icon: Code },
    { name: "Blog & Insights", href: "/blog", icon: FileText },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
    { name: "Training & Certification", href: "/training", icon: GraduationCap },
    { name: "Webinars", href: "/webinars", icon: Video },
    { name: "Help & Support", href: "/help", icon: Headphones }
  ];

  const quickActions = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Pricing Guide", href: "/pricing", icon: BarChart3 },
    { name: "Solutions Marketplace", href: "/marketplace", icon: ShoppingCart }
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zion-purple/30">
            <div>
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <p className="text-sm text-zion-cyan">Explore our solutions</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zion-slate-light hover:text-white hover:bg-zion-purple/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Home Link */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center p-3 rounded-lg bg-zion-purple/10 hover:bg-zion-purple/20 transition-colors group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Home</span>
            </Link>

            {/* Services Section */}
            <div>
              <button
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-zion-cyan mr-3" />
                  <span className="text-white font-medium">Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-zion-slate-light transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {openSection === 'services' && (
                <div className="ml-8 mt-2 space-y-4">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.title}>
                        <div className="flex items-center mb-2">
                          <Icon className="w-4 h-4 text-zion-purple mr-2" />
                          <span className="text-zion-cyan text-sm font-medium">{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.links.slice(0, 5).map((link) => {
                            const LinkIcon = link.icon;
                            return (
                              <Link
                                key={link.href}
                                to={link.href}
                                onClick={handleLinkClick}
                                className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                              >
                                <LinkIcon className="w-3 h-3 text-zion-slate-light mr-3 group-hover:scale-110 transition-transform" />
                                <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    to="/services"
                    onClick={handleLinkClick}
                    className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors text-zion-cyan hover:text-zion-cyan-light"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">View All Services</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Section */}
            <div>
              <button
                onClick={() => toggleSection('solutions')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-zion-cyan mr-3" />
                  <span className="text-white font-medium">Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-zion-slate-light transition-transform ${openSection === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {openSection === 'solutions' && (
                <div className="ml-8 mt-2 space-y-4">
                  {solutionCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.title}>
                        <div className="flex items-center mb-2">
                          <Icon className="w-4 h-4 text-zion-purple mr-2" />
                          <span className="text-zion-cyan text-sm font-medium">{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.links.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                              <Link
                                key={link.href}
                                to={link.href}
                                onClick={handleLinkClick}
                                className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                              >
                                <LinkIcon className="w-3 h-3 text-zion-slate-light mr-3 group-hover:scale-110 transition-transform" />
                                <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    to="/solutions"
                    onClick={handleLinkClick}
                    className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors text-zion-cyan hover:text-zion-cyan-light"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">View All Solutions</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Company Section */}
            <div>
              <button
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 text-zion-cyan mr-3" />
                  <span className="text-white font-medium">Company</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-zion-slate-light transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {openSection === 'company' && (
                <div className="ml-8 mt-2 space-y-1">
                  {companyLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-zion-slate-light mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Section */}
            <div>
              <button
                onClick={() => toggleSection('resources')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-zion-cyan mr-3" />
                  <span className="text-white font-medium">Resources</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-zion-slate-light transition-transform ${openSection === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {openSection === 'resources' && (
                <div className="ml-8 mt-2 space-y-1">
                  {resourceLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-zion-slate-light mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link
              to="/pricing"
              onClick={handleLinkClick}
              className="flex items-center p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
            >
              <BarChart3 className="w-5 h-5 text-zion-cyan mr-3" />
              <span className="text-white font-medium">Pricing</span>
            </Link>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-zion-purple/30">
              <h3 className="text-zion-cyan font-medium mb-3 flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.href}
                      to={action.href}
                      onClick={handleLinkClick}
                      className="flex items-center p-3 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg hover:from-zion-purple/30 hover:to-zion-cyan/30 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-white text-sm font-medium">{action.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zion-purple/30 bg-zion-slate-darker/50">
            <div className="space-y-3">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-sm hover:text-zion-cyan transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href="tel:+13024640950" 
                    className="text-sm hover:text-zion-cyan transition-colors"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
              
              {/* Innovation Showcases */}
              <div className="pt-3 border-t border-zion-purple/20">
                <h4 className="text-zion-cyan text-xs font-medium mb-2 flex items-center">
                  <Star className="w-3 h-3 mr-2" />
                  Innovation Showcases
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/comprehensive-services-showcase-2025"
                    onClick={handleLinkClick}
                    className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    2025 Showcase
                  </Link>
                  <Link
                    to="/innovative-services-showcase-2026"
                    onClick={handleLinkClick}
                    className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    2026 Innovation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}