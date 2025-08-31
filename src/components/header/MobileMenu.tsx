import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  Building2, 
  FileText, 
  Target,
  Rocket,
  Cloud,
  Heart,
  DollarSign,
  Factory,
  Briefcase,
  Award,
  Handshake,
  Calendar,
  BookOpen,
  Monitor,
  GraduationCap,
  Headphones,
  Sparkles,
  Satellite,
  Atom,
  Search,
  Layers,
  Star,
  Phone,
  Mail,
  User,
  ShoppingBag,
  Home,
  ArrowRight
} from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
  };

  const menuSections = [
    {
      title: "Services",
      icon: Zap,
      items: [
        {
          category: "AI & Automation",
          icon: Brain,
          links: [
            { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard" },
            { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
            { name: "AI Project Management", href: "/services/ai-project-management-platform" },
            { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform" },
            { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
            { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" }
          ]
        },
        {
          category: "Cloud & Infrastructure",
          icon: Cloud,
          links: [
            { name: "Cloud & DevOps", href: "/services/cloud-devops" },
            { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
            { name: "Cybersecurity Solutions", href: "/services/cybersecurity" },
            { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions" },
            { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions" },
            { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" }
          ]
        },
        {
          category: "Specialized AI",
          icon: Sparkles,
          links: [
            { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform" },
            { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" },
            { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform" },
            { name: "AI Supply Chain", href: "/services/ai-supply-chain-optimization-platform" },
            { name: "AI HR Platform", href: "/services/ai-hr-platform" },
            { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" }
          ]
        },
        {
          category: "Emerging Technologies",
          icon: Rocket,
          links: [
            { name: "AI Space Technology", href: "/services/ai-space-technology-platform" },
            { name: "Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
            { name: "Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform" },
            { name: "AI-Powered SEO", href: "/services/ai-powered-seo" },
            { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions-comprehensive" },
            { name: "2026 Innovation Showcase", href: "/innovative-services-showcase-2026" }
          ]
        }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      items: [
        {
          category: "Industry Solutions",
          icon: Target,
          links: [
            { name: "Healthcare Solutions", href: "/solutions/healthcare" },
            { name: "Financial Services", href: "/solutions/financial" },
            { name: "Manufacturing", href: "/solutions/manufacturing" },
            { name: "Government Solutions", href: "/solutions/government" },
            { name: "Retail Solutions", href: "/solutions/retail" },
            { name: "Enterprise Solutions", href: "/enterprise" }
          ]
        }
      ]
    },
    {
      title: "Company",
      icon: Building2,
      items: [
        {
          category: "About Zion Tech",
          icon: Building2,
          links: [
            { name: "About Us", href: "/about" },
            { name: "Leadership Team", href: "/leadership" },
            { name: "Careers & Jobs", href: "/careers" },
            { name: "Partners & Alliances", href: "/partners" },
            { name: "News & Press", href: "/news" },
            { name: "Events & Webinars", href: "/events" }
          ]
        }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      items: [
        {
          category: "Knowledge Hub",
          icon: BookOpen,
          links: [
            { name: "Documentation", href: "/docs" },
            { name: "Blog & Insights", href: "/blog" },
            { name: "White Papers", href: "/white-papers" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Training & Certification", href: "/training" },
            { name: "Webinars", href: "/webinars" },
            { name: "Help & Support", href: "/help" }
          ]
        }
      ]
    }
  ];

  const quickActions = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: Phone },
    { name: "Pricing Guide", href: "/pricing", icon: DollarSign },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag }
  ];

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark border-l border-zion-purple/30 shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Menu</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zion-slate-light hover:text-white hover:bg-zion-purple/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Home Link */}
            <div className="p-4 border-b border-zion-purple/10">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors group"
              >
                <Home className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Home</span>
              </Link>
            </div>

            {/* Menu Sections */}
            <div className="p-4 space-y-2">
              {menuSections.map((section) => (
                <div key={section.title} className="border border-zion-purple/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-4 bg-zion-purple/10 hover:bg-zion-purple/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white font-medium">{section.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-zion-slate-light transition-transform duration-200 ${
                        expandedSection === section.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedSection === section.title && (
                    <div className="bg-zion-slate-darker">
                      {section.items.map((item, index) => (
                        <div key={index} className="p-4 border-t border-zion-purple/10">
                          <div className="flex items-center space-x-2 mb-3">
                            <item.icon className="w-4 h-4 text-zion-purple" />
                            <h4 className="text-zion-purple font-medium text-sm">{item.category}</h4>
                          </div>
                          <ul className="space-y-2 ml-6">
                            {item.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  onClick={handleLinkClick}
                                  className="flex items-center justify-between py-2 px-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded transition-colors group"
                                >
                                  <span className="text-sm">{link.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="p-4 border-t border-zion-purple/20">
              <div className="space-y-2">
                <Link
                  to="/pricing"
                  onClick={handleLinkClick}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors group"
                >
                  <DollarSign className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Pricing</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer - Quick Actions */}
          <div className="border-t border-zion-purple/20 p-4">
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  onClick={handleLinkClick}
                  className="flex flex-col items-center space-y-2 p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/20 hover:bg-zion-purple/20 hover:border-zion-cyan/30 transition-all duration-300 group"
                >
                  <action.icon className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors text-xs font-medium text-center">
                    {action.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-zion-purple/10">
              <div className="space-y-2">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}