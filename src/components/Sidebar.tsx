import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Cloud,
  Lock,
  Workflow,
  Eye,
  Key,
  Sparkles,
  Heart,
  ArrowUpRight,
  CheckCircle2,
  Star as StarIcon,
  Building,
  ShoppingBag,
  DollarSign,
  Menu,
  Home,
  Settings,
  HelpCircle,
  FileText,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  items: {
    name: string;
    path: string;
    description: string;
    icon: React.ComponentType<any>;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      title: "Main Navigation",
      description: "Essential pages and core functionality",
      icon: Home,
      items: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group", icon: Home },
        { name: "About Us", path: "/about", description: "Learn about our company", icon: Users },
        { name: "Our Team", path: "/team", description: "Meet our experts", icon: Users },
        { name: "Contact", path: "/contact", description: "Get in touch with us", icon: MessageSquare },
        { name: "Careers", path: "/careers", description: "Join our team", icon: Rocket },
        { name: "Blog & News", path: "/blog", description: "Latest insights and updates", icon: FileText }
      ]
    },
    {
      title: "AI & Technology Services",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      items: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Self-operating AI platforms", icon: Workflow },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Data-driven insights", icon: BarChart3 },
        { name: "AI Customer Intelligence", path: "/services/ai-customer-intelligence", description: "Customer behavior analysis", icon: Users },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation", description: "Intelligent process automation", icon: Workflow },
        { name: "AI Predictive Analytics", path: "/services/ai-predictive-analytics", description: "Future-focused analytics", icon: TrendingUp },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI-powered research automation", icon: Brain }
      ]
    },
    {
      title: "Infrastructure & Security",
      description: "Robust technology infrastructure and security",
      icon: Shield,
      items: [
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Enterprise infrastructure solutions", icon: Cpu },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", description: "Cloud solutions & automation", icon: Cloud },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Advanced security solutions", icon: Shield },
        { name: "SOC2 Compliance", path: "/services/soc2-compliance", description: "Compliance automation", icon: CheckCircle2 },
        { name: "5G Enterprise Solutions", path: "/services/5g-enterprise-solutions", description: "Next-gen connectivity", icon: Network },
        { name: "Quantum Secure Cloud", path: "/services/quantum-secure-cloud", description: "Future-proof security", icon: Lock }
      ]
    },
    {
      title: "Micro SAAS & Development",
      description: "Scalable software solutions and development",
      icon: Code,
      items: [
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Custom software solutions", icon: Code },
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", description: "Distributed ledger technology", icon: Key },
        { name: "IoT & Data Analytics", path: "/services/iot-data-analytics", description: "Connected intelligence", icon: Database },
        { name: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management", icon: Database },
        { name: "Digital Transformation", path: "/solutions/digital-transformation", description: "Business modernization", icon: Rocket },
        { name: "Enterprise Solutions", path: "/solutions/enterprise", description: "Enterprise-grade platforms", icon: Building }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Specialized solutions for specific industries",
      icon: Target,
      items: [
        { name: "Healthcare", path: "/solutions/healthcare", description: "Digital health transformation", icon: Heart },
        { name: "Financial Services", path: "/solutions/financial-services", description: "Fintech innovation", icon: DollarSign },
        { name: "Manufacturing", path: "/solutions/manufacturing", description: "Smart manufacturing", icon: Target },
        { name: "Retail & E-commerce", path: "/solutions/retail-ecommerce", description: "Digital commerce", icon: ShoppingBag },
        { name: "Government & Defense", path: "/solutions/government", description: "Public sector solutions", icon: Shield },
        { name: "Education", path: "/solutions/education", description: "Educational technology", icon: Lightbulb }
      ]
    },
    {
      title: "Company & Support",
      description: "Resources and support for our clients",
      icon: HelpCircle,
      items: [
        { name: "Help Center", path: "/help-center", description: "Get help and support", icon: HelpCircle },
        { name: "Documentation", path: "/docs", description: "Technical documentation", icon: FileText },
        { name: "Case Studies", path: "/case-studies", description: "Success stories", icon: Award },
        { name: "Pricing", path: "/pricing", description: "Transparent pricing plans", icon: DollarSign },
        { name: "Partners", path: "/partners", description: "Strategic partnerships", icon: Users },
        { name: "Events & Webinars", path: "/events", description: "Upcoming events", icon: Calendar }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  const filteredNavigation = navigationItems.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white neon-text-cyan">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-cyan-500/20">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
              />
            </form>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {filteredNavigation.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-200">
                        <section.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-400">{section.description}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      activeSection === section.title ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {activeSection === section.title && (
                    <div className="ml-11 space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.path}
                          onClick={onClose}
                          className={`flex items-start space-x-3 p-3 rounded-lg transition-colors duration-200 group ${
                            location.pathname === item.path 
                              ? 'bg-cyan-500/20 border border-cyan-500/30' 
                              : 'hover:bg-cyan-500/10'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                            location.pathname === item.path 
                              ? 'bg-cyan-500/30' 
                              : 'bg-cyan-500/20 group-hover:bg-cyan-500/30'
                          }`}>
                            <item.icon className="w-3 h-3 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm font-medium transition-colors duration-200 ${
                              location.pathname === item.path 
                                ? 'text-cyan-400' 
                                : 'text-gray-300 group-hover:text-cyan-400'
                            }`}>
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="p-6 border-t border-cyan-500/20 space-y-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={onClose}
              className="btn-futuristic w-full text-center"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;