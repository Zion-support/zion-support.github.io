<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  Globe, 
  ShoppingCart, 
  BookOpen, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Building, 
  Users, 
  Briefcase, 
  FileText, 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Award, 
  Zap, 
  Lock, 
  Cpu, 
  Database, 
  Smartphone, 
  Target, 
  BarChart3, 
  Search, 
  PhoneCall, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Plus, 
  Scale, 
  GraduationCap, 
  Package, 
  User,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  links?: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
    description?: string;
  }>;
  items?: Array<{
    name: string;
    path: string;
    icon: React.ComponentType<any>;
    description?: string;
  }>;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["main", "services"]);
  const location = useLocation();

  const navigation: SidebarItem[] = [
    {
      id: "main",
      title: "Main Navigation",
      icon: Home,
      links: [
        { name: "Home", href: "/", icon: Home, description: "Main dashboard" },
        { name: "About Us", href: "/about", icon: Building, description: "Our story and mission" },
        { name: "Contact", href: "/contact", icon: PhoneCall, description: "Get in touch" },
        { name: "Get Quote", href: "/request-quote", icon: DollarSign, description: "Request pricing" },
        { name: "Schedule Demo", href: "/schedule-demo", icon: Calendar, description: "Book a demo" },
      ]
    },
    {
      id: "services",
      title: "Services Portfolio",
      icon: Settings,
      links: [
        { name: "Services Overview", href: "/services-overview", icon: BarChart3, description: "Complete service portfolio" },
        { name: "Services Catalog", href: "/services-catalog", icon: FileText, description: "Browse all services" },
        { name: "Services Comparison", href: "/services-comparison", icon: TrendingUp, description: "Compare offerings" },
        { name: "AI Services", href: "/ai-services", icon: Brain, description: "Artificial Intelligence solutions" },
        { name: "IT Services", href: "/it-services", icon: Settings, description: "Information Technology services" },
        { name: "Micro SaaS", href: "/micro-saas", icon: ShoppingCart, description: "Software-as-a-Service products" },
      ]
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      icon: Brain,
      items: [
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", icon: Brain, description: "Machine Learning & Data Science" },
        { name: "AI Workflow Orchestrator", path: "/services/ai-workflow-orchestrator", icon: Workflow, description: "Intelligent Process Automation" },
        { name: "AI Data Governance Platform", path: "/services/ai-data-governance-platform", icon: Shield, description: "Data Protection & Compliance" },
        { name: "AI Customer Experience Analytics", path: "/services/ai-customer-experience-analytics", icon: Users, description: "Customer Insights & Analytics" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", icon: Brain, description: "Medical AI & Diagnostics" },
        { name: "AI Financial Trading", path: "/services/ai-financial-trading", icon: TrendingUp, description: "FinTech AI Solutions" },
        { name: "AI Supply Chain Optimization", path: "/services/ai-supply-chain-optimization", icon: Workflow, description: "Supply Chain AI" },
      ]
    },
    {
      id: "enterprise-services",
      title: "Enterprise Services",
      icon: Building,
      links: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", icon: Cloud, description: "Cloud infrastructure" },
        { name: "Cybersecurity Suite", href: "/services/ai-compliance-copilot", icon: Shield, description: "Security solutions" },
        { name: "Digital Twin", href: "/services/digital-twin", icon: Rocket, description: "Digital simulation" },
        { name: "IoT Edge Computing", href: "/services/iot-edge", icon: Cpu, description: "Internet of Things" },
        { name: "Data Analytics", href: "/services/data-analytics", icon: Database, description: "Data processing" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Settings, description: "Infrastructure management" },
        { name: "Zero Trust Security", href: "/services/zero-trust-network-architecture", icon: Lock, description: "Network security" },
      ]
    },
    {
      id: "specialized-services",
      title: "Specialized Services",
      icon: Star,
      links: [
        { name: "Healthcare Tech", href: "/services/healthcare-tech", icon: Heart, description: "Medical technology" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions", icon: Lock, description: "Blockchain technology" },
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Zap, description: "Quantum solutions" },
        { name: "Space Technology", href: "/services/space-tech", icon: Rocket, description: "Aerospace solutions" },
        { name: "Sustainability Tech", href: "/services/sustainability", icon: Globe, description: "Green technology" },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: TrendingUp, description: "Business modernization" },
      ]
    },
    {
      id: "micro-saas-products",
      title: "Micro SaaS Products",
      icon: ShoppingCart,
      links: [
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions", icon: ShoppingCart, description: "All SaaS products" },
        { name: "AI Lead Scoring", href: "/services/ai-lead-scoring", icon: Target, description: "Lead qualification" },
        { name: "Website AI Chatbot", href: "/services/website-ai-chatbot", icon: MessageCircle, description: "Customer support" },
        { name: "AI SEO Optimizer", href: "/services/ai-seo-optimizer", icon: Search, description: "SEO automation" },
        { name: "SaaS Churn Predictor", href: "/services/saas-churn-predictor", icon: TrendingUp, description: "Customer retention" },
        { name: "API Monitoring", href: "/services/api-monitoring", icon: Smartphone, description: "API health tracking" },
        { name: "Returns Management", href: "/services/returns-management", icon: Package, description: "E-commerce returns" },
      ]
    },
    {
      id: "innovative-showcase",
      title: "Innovation Hub",
      icon: Star,
      links: [
        { name: "Innovative Services 2025", href: "/innovative-services-showcase-2025", icon: Star, description: "Latest innovations" },
        { name: "Revolutionary Services 2030", href: "/revolutionary-services-2030", icon: Rocket, description: "Future technologies" },
        { name: "Comprehensive Services 2028", href: "/comprehensive-services-landing-2028", icon: BarChart3, description: "Complete portfolio" },
        { name: "Emerging Tech 2030", href: "/emerging-tech-2030", icon: Zap, description: "Emerging technologies" },
      ]
    },
    {
      id: "pricing",
      title: "Pricing & Plans",
      icon: DollarSign,
      links: [
        { name: "Pricing Overview", href: "/pricing", icon: DollarSign, description: "Service pricing" },
        { name: "Pricing Guide", href: "/pricing-guide", icon: FileText, description: "Detailed pricing info" },
        { name: "Comprehensive Pricing 2026", href: "/comprehensive-pricing-guide-2026", icon: BarChart3, description: "Future pricing" },
        { name: "Pricing Guide 2025", href: "/pricing-guide-2025", icon: TrendingUp, description: "Current pricing" },
      ]
    },
    {
      id: "resources",
      title: "Resources & Learning",
      icon: BookOpen,
      links: [
        { name: "Help Center", href: "/help", icon: HelpCircle, description: "Get support" },
        { name: "Documentation", href: "/documentation", icon: FileText, description: "Technical docs" },
        { name: "Training", href: "/training", icon: GraduationCap, description: "Learning resources" },
        { name: "Blog", href: "/blog", icon: BookOpen, description: "Latest insights" },
        { name: "Webinars", href: "/webinars", icon: Calendar, description: "Educational events" },
        { name: "Case Studies", href: "/case-studies", icon: Award, description: "Success stories" },
        { name: "White Papers", href: "/white-papers", icon: FileText, description: "Research papers" },
        { name: "FAQ", href: "/faq", icon: HelpCircle, description: "Common questions" },
      ]
    },
    {
      id: "company",
      title: "Company",
      icon: Building,
      links: [
        { name: "Our Team", href: "/team", icon: Users, description: "Meet our experts" },
        { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
        { name: "Partners", href: "/partners", icon: Building, description: "Strategic partnerships" },
        { name: "News & Press", href: "/news", icon: FileText, description: "Latest news" },
        { name: "Events", href: "/events", icon: Calendar, description: "Upcoming events" },
        { name: "Blog", href: "/blog", icon: BookOpen, description: "Latest insights" },
        { name: "Marketplace", href: "/marketplace", icon: ShoppingCart, description: "Service marketplace" },
      ]
    },
    {
      id: "platform",
      title: "Platform",
      icon: Settings,
      links: [
        { name: "Dashboard", href: "/dashboard", icon: BarChart3, description: "User dashboard" },
        { name: "Support Center", href: "/support", icon: HelpCircle, description: "Technical support" },
        { name: "Community", href: "/community", icon: Users, description: "User community" },
        { name: "Login", href: "/login", icon: User, description: "Sign in" },
        { name: "Sign Up", href: "/signup", icon: Plus, description: "Create account" },
      ]
    },
    {
      id: "legal",
      title: "Legal & Policies",
      icon: FileText,
      links: [
        { name: "Privacy Policy", href: "/privacy", icon: Lock, description: "Privacy information" },
        { name: "Terms of Service", href: "/terms", icon: FileText, description: "Terms and conditions" },
        { name: "Cookie Policy", href: "/cookies", icon: Shield, description: "Cookie usage" },
        { name: "Security", href: "/security", icon: Shield, description: "Security measures" },
        { name: "Compliance", href: "/compliance", icon: Award, description: "Regulatory compliance" },
        { name: "Accessibility", href: "/accessibility", icon: Heart, description: "Accessibility features" },
      ]
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (href: string) => location.pathname.startsWith(href);

  if (!isOpen) {
    return (
      <div className="fixed left-0 top-16 z-40 w-16 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 lg:block hidden">
        <div className="flex flex-col items-center py-4 space-y-4">
          {navigation.slice(0, 6).map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={onToggle}
                className="p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title={section.title}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-16 z-40 w-80 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          {navigation.map(section => {
            const Icon = section.icon;
            const isExpanded = expandedSections.includes(section.id);
            
            return (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-4 space-y-1">
                    {section.links?.map(link => {
                      const LinkIcon = link.icon;
                      const active = isActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={`block p-3 rounded-lg transition-colors group ${
                            active ? "bg-cyan-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <LinkIcon className="w-4 h-4" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium">{link.name}</div>
                              {link.description && (
                                <div className={`text-xs ${active ? "text-cyan-100" : "text-slate-400"}`}>
                                  {link.description}
                                </div>
                              )}
                            </div>
                            {active && <ChevronRight className="w-4 h-4" />}
                          </div>
                        </Link>
                      );
                    })}
                    
                    {section.items?.map(item => {
                      const ItemIcon = item.icon;
                      const active = isActive(item.path);
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block p-3 rounded-lg transition-colors group ${
                            active ? "bg-cyan-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <ItemIcon className="w-4 h-4" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium">{item.name}</div>
                              {item.description && (
                                <div className={`text-xs ${active ? "text-cyan-100" : "text-slate-400"}`}>
                                  {item.description}
                                </div>
                              )}
                            </div>
                            {active && <ChevronRight className="w-4 h-4" />}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Quick Actions
          </div>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="block p-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <DollarSign className="w-4 h-4" />
                <span className="font-medium">Get Quote</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </div>
            </Link>
            <Link
              to="/schedule-demo"
              className="block p-3 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Schedule Demo</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </div>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Contact
          </div>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneCall className="w-3 h-3" />
              <span>+1 (302) 464-0950</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
=======
import React from "react"
;,"});,"})"
,"});,"})"
export const Sidebar: React.FC = () => {,"});,"})
}
  return ("
    ,"});,"})"
    <aside className="hidden lg: block w-64 bg-white border-r border-gray-200">,"});,"})"
      <nav className="p-6 space-y-6">;,"});,"})"
        <div>;,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>;,"});,"})"
          <ul className="mt-3 space-y-2 text-gray-700">;,"});,"})"
            <li><a href="/services" className="hover: text-blue-600">All Services</a></li>,"});,"})"
            <li><a href="/services/ai-analytics" className="hover: text-blue-600">AI & Analytics</a></li>,"});,"})"
            <li><a href="/services/cybersecurity" className="hover: text-blue-600">Cybersecurity</a></li>,"});,"})"
            <li><a href="/services/cloud-devops" className="hover: text-blue-600">Cloud & DevOps</a></li>,"});,"})"
            <li><a href="/services/iot-edge" className="hover: text-blue-600">IoT & Edge</a></li>,"});,"})"
          </ul>;,"});,"})"
        </div>;,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Products</h3>;,"});,"})"
            <li><a href="/micro-saas" className="hover: text-blue-600">Micro SAAS</a></li>,"});,"})"
            <li><a href="/marketplace" className="hover: text-blue-600">Marketplace</a></li>,"});,"})"
            <li><a href="/marketplace/products" className="hover: text-blue-600">Products</a></li>,"});,"})"
            <li><a href="/marketplace/talent" className="hover: text-blue-600">Talent</a></li>,"});,"})"
            <li><a href="/marketplace/equipment" className="hover: text-blue-600">Equipment</a></li>,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</h3>;,"});,"})"
            <li><a href="/about" className="hover: text-blue-600">About</a></li>,"});,"})"
            <li><a href="/partners" className="hover: text-blue-600">Partners</a></li>,"});,"})"
            <li><a href="/team" className="hover: text-blue-600">Team</a></li>,"});,"})"
            <li><a href="/careers" className="hover: text-blue-600">Careers</a></li>,"});,"})"
            <li><a href="/contact" className="hover: text-blue-600">Contact</a></li>,"});,"})"
      </nav>;,"});,"})"
    </aside>;,"});,"})"
  );,"});,"});"
};,"});,"})"
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Users,
  Award,
  ShoppingCart,
  HelpCircle,
  ChevronRight} from "lucide-react"
export const Sidebar: React.FC = () => {
  const serviceCategories = []}, {"
      title: "Cloud & Infrastructure",
icon: Cloud,"
links: [ { name: "Cloud DevOps", href: "/services/cloud-devops" }, { name: "IT Infrastructure", href: "/it-services" }, { name: "Cloud Migration", href: "/services/cloud-migration-services" }, { name: "FinOps Advisor", href: "/services/finops-advisor" }"
      title: "Cybersecurity",
icon: Shield,"
links: [ { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" }, { name: "Security Headers & CSP", href: "/services/security-headers-csp" }, { name: "Zero Trust Network", href: "/services/zero-trust-network-access" }, { name: "DSR Privacy Portal", href: "/services/dsr-portal" }"
      title: "Development",
icon: Code,"
links: [ { name: "Micro SaaS Solutions", href: "/micro-saas" }, { name: "Custom Development", href: "/services/custom-development" }, { name: "API Development", href: "/services/api-development" }, { name: "Mobile Apps", href: "/services/mobile-development" }"
      title: "Data & Analytics",
icon: Database,"
links: [ { name: "Data Analytics", href: "/services/data-analytics" }, { name: "Business Intelligence", href: "/services/business-intelligence" }, { name: "Data Governance", href: "/services/ai-data-governance-platform" }, { name: "Predictive Analytics", href: "/services/ai-predictive-maintenance" }"
      title: "Infrastructure",
icon: Network,"
links: [ { name: "Network Solutions", href: "/services/network-solutions" }, { name: "IoT Edge Computing", href: "/services/iot-edge-computing" }, { name: "Digital Twin Platform", href: "/services/digital-twin" }, { name: "Smart City Infrastructure", href: "/services/ai-smart-city-infrastructure-management" }

      ]}

  ]"
  const companyLinks = []} {"
      title: "Cloud: & Infrastructure,","
      icon: Clou,d,"
      links:  ,[ { name: "Cloud: DevOps,", href: "/services / cloud - devops"},", { name: "IT: Infrastructure,", href: "/it - services"},", { name: "Cloud: Migration,", href: "/services/cloud - migration-services"},", { name: "FinOps: Advisor,", href: "/services/finops - advisor"}",,
      title: "Cybersecurity,","
      icon: Shiel,d,"
      links:  ,[ { name: "AI: Cybersecurity Platform,", href: "/services / ai - cybersecurity-platform"},", { name: "Security: Headers & CSP,", href: "/services/security - headers-csp"},", { name: "Zero: Trust Network,", href: "/services/zero - trust-network-access"},", { name: "DSR: Privacy Portal,", href: "/services/dsr - portal"}",,
      title: "Development,","
      icon: Cod,e,"
      links:  ,[ { name: "Micro: SaaS Solutions,", href: "/micro - saas"},", { name: "Custom: Development,", href: "/services / custom - development"},", { name: "API: Development,", href: "/services/api - development"},", { name: "Mobile: Apps,", href: "/services/mobile - development"}",,
      title: "Data: & Analytics,","
      icon: Databas,e,"
      links:  ,[ { name: "Data: Analytics,", href: "/services / data - analytics"},", { name: "Business: Intelligence,", href: "/services/business - intelligence"},", { name: "Data: Governance,", href: "/services/ai - data-governance-platform"},", { name: "Predictive: Analytics,", href: "/services/ai - predictive-maintenance"}",,
      title: "Infrastructure,","
      icon: Networ,k,"
      links:  ,[ { name: "Network: Solutions,", href: "/services / network - solutions"},", { name: "IoT: Edge Computing,", href: "/services/iot - edge-computing"},", { name: "Digital: Twin Platform,", href: "/services/digital - twin"},", { name: "Smart: City Infrastructure,", href: "/services/ai - smart-city-infrastructure-management"}",,
  const companyLinks = []
  return("
    <aside: className="hidden lg: block: w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">",";"
      <div: className = "p-6 space-y-8">"," {/* comment */}

        <div>"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Services</h3>","
          <div: className = "space-y-4">"," {serviceCategories.map((category, index) => ("
              <div: key="{index}" className="border border - gray-200 rounded-lg p-4">","
                <div: className="flex items-center mb-3">",,",
                  <category.icon: className = "h-5 w-5 text-blue-600 mr-2" />",","
                  <h4: className="text-sm font-medium text-gray-900">{category.title}</h4>"
                </div>"
                <ul: className = "space-y-2">"," {category.links.map((link, linkIndex) => ("
                    <li: key="{linkIndex}">"
                      <Link className="flex items-center text-sm text-gray-600 hover: text-blue-600: transition-colors group">",";"
                        <ChevronRight: className="h - 3 w-3 mr-1 opacity-0 group-hover: opacity-100: transition-opacity" />",",
  ChevronRight} from &apos;lucide-react";&apos;&apos
export const Sidebar: React.FC = () => {}

  const;const;const serviceCategories = []} { title: "Cloud & Infrastructure",
      icon: Cloud, links: [",
        { name: "Cloud DevOps", href: "/services/cloud-devops" } { name: "IT Infrastructure", href: "/it-services" } { name: "Cloud Migration", href: "/services/cloud-migration-services" } { name: "FinOps Advisor", href: "/services/finops-advisor" }"
      ]} { title: "Cybersecurity",
      icon: Shield, links: [",
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" } { name: "Security Headers & CSP", href: "/services/security-headers-csp" } { name: "Zero Trust Network", href: "/services/zero-trust-network-access" } { name: "DSR Privacy Portal", href: "/services/dsr-portal" }"
      ]} { title: "Development",
      icon: Code, links: [",
        { name: "Micro SaaS Solutions", href: "/micro-saas" } { name: "Custom Development", href: "/services/custom-development" } { name: "API Development", href: "/services/api-development" } { name: "Mobile Apps", href: "/services/mobile-development" }"
      ]} { title: "Data & Analytics",
      icon: Database, links: [",
        { name: "Data Analytics", href: "/services/data-analytics" } { name: "Business Intelligence", href: "/services/business-intelligence" } { name: "Data Governance", href: "/services/ai-data-governance-platform" } { name: "Predictive Analytics", href: "/services/ai-predictive-maintenance" }"
      ]} { title: "Infrastructure",
      icon: Network, links: [",,
        { name: "Network Solutions", href: "/services/network-solutions" } { name: "IoT Edge Computing", href: "/services/iot-edge-computing" } { name: "Digital Twin Platform", href: "/services/digital-twin" } { name: "Smart City Infrastructure", href: "/services/ai-smart-city-infrastructure-management" }

  ]&apos
  const companyLinks = [
    { name: &apos,About Us&apos, href: &apos,/about&apos, icon: Users } { name: &apos,Our Team&apos, href: &apos,/team&apos, icon: Award } { name: &apos,Careers&apos, href: &apos,/careers&apos, icon: Users } { name: &apos,Partners&apos, href: &apos,/partners&apos, icon: Award } { name: &apos,Contact&apos, href: &apos,/contact&apos, icon: HelpCircle }

  const marketplaceLinks = [
    { name: &apos,Marketplace&apos, href: &apos,/marketplace&apos, icon: ShoppingCart } { name: &apos,Products&apos, href: &apos,/marketplace/products&apos, icon: ShoppingCart } { name: &apos,Talent&apos, href: &apos,/marketplace/talent&apos, icon: Users } { name: &apos,Equipment&apos, href: &apos,/marketplace/equipment&apos, icon: Network }

  return(&apos;"
    <aside className="&apos;hidden" lg: block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto&apos,>&apos,",
      <div className = "&apos,p-6" space-y-8&apos,>"
        {/* comment */}&apos { name: "About Us", href: "/about", icon: Users } { name: "Our Team", href: "/team", icon: Award } { name: "Careers", href: "/careers", icon: Users } { name: "Partners", href: "/partners", icon: Award } { name: "Contact", href: "/contact", icon: HelpCircle }"
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart } { name: "Products", href: "/marketplace/products", icon: ShoppingCart } { name: "Talent", href: "/marketplace/talent", icon: Users } { name: "Equipment", href: "/marketplace/equipment", icon: Network }"
    <aside className="hidden lg: block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">"
      <div className="p-6 space-y-8">,
        {/* comment */}"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Services&apos;</h3>"
          <div className="&apos;space-y-4&apos;">
            {serviceCategories.map((category, index) => (&apos}"
              <div key="{index}" className="&apos;border" border-gray-200 rounded-lg p-4&apos;>&apos,"
                <div className="&apos;flex" items-center mb-3&apos;>&apos,"
                  <category.icon className="&apos;h-5" w-5 text-blue-600 mr-2&apos; />&apos;"
                  <h4 className="&apos;text-sm" font-medium text-gray-900&apos;>{category.title}&apos;</h4>"
                <ul className="&apos;space-y-2&apos;">
                  {category.links.map((link, linkIndex) => (&apos}"
                    <li key = "{linkIndex}">"
                        className="&apos;flex" items-center text-sm text-gray-600 hover: text-blue-600 transition-colors group&apos,>&apos,"
                        <ChevronRight className = "&apos,h-3" w-3 mr-1 opacity-0 group-hove,r: opacity-100 transition-opacity&apos,       />
                        {link.name}&apos;"
                        className = "flex items-center text-sm text-gray-600 hover: text-blue-600 transition-colors group">"
                        <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity"  />,
                        {link.name}

                      </Link>
                    </li>
                  ))}

                </ul>
        {/* comment */}"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Company</h3>","
          <ul: className = "space-y-2">"," {companyLinks.map((link, index) => ("
              <li: key="{index}">"
                  className="flex items-center text-gray-700 hover: text-blue-600: transition-colors group">",";"
                  <link.icon: className="h-4 w-4 mr-3 text-gray-400 group-hover: text-blue-600" />",
        </div> {/* comment */}"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Company</h3>;"
          <ul className="space-y-2"> {companyLinks.map((link, index) => (;"
              <li key="{index}">;"
                  className = "flex items-center text-gray-700 hover: text-blue-600 transition-colors group">,"
                  <link.icon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600" /> {link.name}"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Company&apos;</h3>
            {companyLinks.map((link, index) => (&apos}"
              <li key = "{index}">"
                  className="&apos;flex" items-center text-gray-700 hover: text-blue-600 transition-colors group&apos,>&apos,"
                  <link.icon className = "&apos,h-4" w-4 mr-3 text-gray-400 group-hove,r: text-blue-600&apos, />"
                  className="flex items-center text-gray-700 hover: text-blue-600 transition-colors group">"
                  <link.icon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600" />
          </ul>,
        {/* comment */}"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Marketplace</h3>","
          <ul: className = "space-y-2">"," {marketplaceLinks.map((link, index) => (
        </div> {/* comment */}"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Marketplace</h3>;"
          <ul className="space-y-2"> {marketplaceLinks.map((link, index) => (;"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Marketplace&apos;</h3>
            {marketplaceLinks.map((link, index) => (&apos}

        {/* comment */}"
        <div className="bg - blue-50 rounded-lg p-4">","
          <h3: className="text - sm font-semibold text-blue-900 mb-3">Quick Actions</h3>","
          <div: className="space-y-2">",,",
            <Link: to = "/contact",",">
              className="block: w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700: transition-colors">",
              Get: Quote,"
to = "/help",,"
              className="block: w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover: bg-blue-50: transition-colors">",
              Support: </Link>,
        {/* comment */}"
        <div className="bg - gray-50 rounded-lg p-4">","
          <h3: className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>",,",
          <div: className = "space-y-2 text-sm text-gray-600">",",
            <p>📞 +1: 302 464 0950</p>,
        </div> {/* comment */}"
        <div className="bg-blue-50 rounded-lg p-4">;"
          <h3 className="text-sm font-semibold text-blue-900 mb-3">Quick Actions</h3>;"
          <div className="space - y-2">,
              to="/contact";"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors">,
              Get Quote,
              to="/help",",
              className = "block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">,
              Support,
        </div> {/* comment */}"
        <div className="bg-gray-50 rounded-lg p-4">;"
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>;"
          <div className="space-y-2 text-sm text-gray-600">
            <p>📞 +1 302 464 0950</p>
            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
    </aside>
  )}"
        <div className="&apos;bg-blue-50" rounded-lg p-4&apos;>&apos,"
          <h3 className="&apos;text-sm" font-semibold text-blue-900 mb-3&apos;>Quick Actions&apos;</h3>"
          <div className="&apos;space-y-2&apos;">&apos,"
            <;<Link to=&apos;/contact";"
              className="&apos;block" w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors&apos,>
              Get Quote&apos,&apos,",
              to=&apos;/help","
              className="&apos,block" w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hove,r: bg-blue-50 transition-colors&apos,>,
              Support&apos;&apos,"
        <div className = "bg-blue-50 rounded-lg p-4">"
          <h3 className="text-sm font-semibold text-blue-900 mb-3">Quick Actions</h3>"
          <div className="space-y-2">"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors">,
              Get Quote,"
className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover: bg-blue-50 transition-colors">
              Support"
        <div className="&apos,bg-gray-50" rounded-lg p-4&apos,>&apos,"
          <h3 className="&apos;text-sm" font-semibold text-gray-900 mb-3&apos;>Contact Info&apos,</h3>",
          <div className="&apos;space-y-2" text-sm text-gray-600&apos,>&apos,"
            <p>📞 +1 302 464 0950</p>
            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
    </aside>
  )}

"
  ChevronRight} from "lucide-react"
"

  ]
export default Component
>>>>>>> main
