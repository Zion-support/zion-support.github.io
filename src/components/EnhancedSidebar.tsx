import React, { useState } from 'react.ts';
import { Link, useLocation  } from 'react-router-dom.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';


export const EnhancedSidebar: React.FC = (): JSX.Element => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection = (section: anystring)  => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (path: anystring)  => location.pathname === path;

  const navigationSections = [
    {
      title: "Main Navigation",
      icon: Home,
      items: [
        { name: "Home", href: "/", icon: Home },
        { name: "Services", href: "/services", icon: Zap },
        { name: "Solutions", href: "/solutions", icon: Target },
        { name: "Pricing", href: "/pricing", icon: DollarSign },
        { name: "About", href: "/about", icon: Users },
        { name: "Contact", href: "/contact", icon: MessageCircle },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      items: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: Brain },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics", icon: Heart },
        { name: "AI Legal Document Analysis", href: "/services/ai-legal-document-analysis", icon: FileText },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading", icon: TrendingUp },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization", icon: Truck },
        { name: "AI Content Creation", href: "/services/ai-content-creation", icon: PenTool },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation", icon: Target },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Project Management", href: "/services/ai-project-management", icon: Briefcase },
        { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance", icon: Eye },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      items: [
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server },
        { name: "Digital Twin Platform", href: "/services/digital-twin", icon: Cpu },
        { name: "IoT Edge Computing", href: "/services/iot-edge-computing", icon: Wifi },
        { name: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
        { name: "Micro SaaS Products", href: "/services/micro-saas", icon: ShoppingCart },
        { name: "Micro CRM", href: "/services/micro-crm", icon: Users },
        { name: "Helpdesk Platform", href: "/services/helpdesk", icon: HelpCircle },
        { name: "Website Analytics", href: "/services/website-analytics", icon: Eye },
        { name: "IT Helpdesk", href: "/services/it-helpdesk", icon: Settings }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      items: [
        { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite", icon: Shield },
        { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access", icon: Lock },
        { name: "Security Headers & CSP", href: "/services/security-headers-csp", icon: Shield },
        { name: "DSR Privacy Portal", href: "/services/dsr-portal", icon: Lock },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", icon: CheckCircle },
        { name: "AI Compliance Copilot", href: "/services/ai-compliance-copilot", icon: CheckCircle },
        { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation", icon: CheckCircle },
        { name: "GDPR Cookie Compliance", href: "/services/gdpr-cookie-compliance", icon: CheckCircle }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Atom,
      items: [
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Atom },
        { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform", icon: Atom },
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", icon: Atom },
        { name: "Space Technology", href: "/services/space-tech", icon: Rocket },
        { name: "Sustainable Technology", href: "/services/sustainable-technology", icon: Leaf },
        { name: "Green IT Solutions", href: "/services/green-it", icon: Leaf },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning", icon: Atom },
        { name: "Quantum Financial Trading", href: "/services/quantum-financial-trading", icon: TrendingUp }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      items: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise", icon: Building },
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Solutions", href: "/solutions/financial", icon: TrendingUp },
        { name: "Government Solutions", href: "/solutions/government", icon: Shield },
        { name: "SMB Solutions", href: "/solutions/smb", icon: Building },
        { name: "Startup Solutions", href: "/solutions/startup", icon: Rocket },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Factory },
        { name: "Retail Solutions", href: "/solutions/retail", icon: ShoppingCart },
        { name: "Education Solutions", href: "/solutions/education", icon: BookOpen },
        { name: "Energy Solutions", href: "/solutions/energy", icon: Zap }
      ]
    },
    {
      title: "Resources & Support",
      icon: BookOpen,
      items: [
        { name: "Blog & Insights", href: "/blog", icon: FileText },
        { name: "Case Studies", href: "/case-studies", icon: Target },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Users },
        { name: "Documentation", href: "/docs", icon: Code },
        { name: "API Reference", href: "/api-docs", icon: Code },
        { name: "Developer Portal", href: "/developers", icon: Code },
        { name: "Training & Certification", href: "/training", icon: Award },
        { name: "Community Forum", href: "/community", icon: Users },
        { name: "FAQ & Help Center", href: "/faq", icon: HelpCircle },
        { name: "Pricing Guide 2025", href: "/pricing-guide-2025", icon: DollarSign },
        { name: "Comprehensive Pricing 2027", href: "/comprehensive-pricing-guide-2027", icon: DollarSign }
      ]
    },
    {
      title: "Quick Actions",
      icon: Zap,
      items: [
        { name: "Request Quote", href: "/request-quote", icon: MessageCircle },
        { name: "Schedule Demo", href: "/schedule-demo", icon: Calendar },
        { name: "Get Support", href: "/support", icon: HelpCircle },
        { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { name: "Login", href: "/login", icon: User },
        { name: "Sitemap", href: "/sitemap", icon: Globe }
      ]
    }
  ];

  return (
    <div className="w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 h-screen overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {section.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    expandedSections.has(section.title) ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-8 space-y-1"
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 group ${
                          isActive(item.href)
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}