import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Heart,
  Factory,
  Briefcase,
  Award,
  Truck,
  Layers,
  Calendar,
  PenTool,
  Sparkles
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const servicesCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: TrendingUp },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Heart },
        { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      services: [
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions", icon: Network },
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", icon: DollarSign }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      services: [
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server },
        { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", icon: Factory },
        { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "AI Smart Home Energy", href: "/services/ai-smart-home-energy-management-platform", icon: Leaf },
        { name: "AI Carbon Footprint Management", href: "/services/ai-carbon-footprint-management-platform", icon: Leaf },
        { name: "AI Mental Health Support", href: "/services/ai-mental-health-support-platform", icon: Heart }
      ]
    }
  ];

  const solutionsCategories = [
    {
      title: "Industry Solutions",
      icon: Target,
      solutions: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Solutions", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Factory },
        { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
        { name: "Retail Solutions", href: "/solutions/retail", icon: ShoppingCart }
      ]
    },
    {
      title: "Technology Solutions",
      icon: Cpu,
      solutions: [
        { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing", icon: Atom },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", icon: Brain },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3", icon: Network },
        { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing", icon: Wifi },
        { name: "Space Technology", href: "/solutions/space-tech", icon: Satellite }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Leadership", href: "/leadership", icon: Users },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "News", href: "/news", icon: FileText },
    { name: "Events", href: "/events", icon: Calendar }
  ];

  const resourceLinks = [
    { name: "Documentation", href: "/docs", icon: FileText },
    { name: "Blog", href: "/blog", icon: PenTool },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Webinars", href: "/webinars", icon: Video },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Case Studies", href: "/case-studies", icon: Award },
    { name: "Research & Development", href: "/research-development", icon: Lightbulb },
    { name: "Support", href: "/support", icon: HelpCircle },
    { name: "Help Center", href: "/help", icon: HelpCircle }
  ];

  return (
    <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
      {/* Home */}
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
            isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
          )
        }
      >
        Home
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsServicesOpen(true)} 
          onMouseLeave={() => setIsServicesOpen(false)} 
          className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
        >
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isServicesOpen && (
          <div 
            className="absolute top-full left-0 w-[800px] bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl p-6 z-50"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="grid grid-cols-3 gap-6">
              {servicesCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-2 text-zion-cyan font-semibold">
                    <category.icon className="w-5 h-5" />
                    <span>{category.title}</span>
                  </div>
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-zion-purple/10 transition-colors group"
                      >
                        <service.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-zion-purple/20">
              <Link
                to="/services"
                className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-white transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsSolutionsOpen(true)} 
          onMouseLeave={() => setIsSolutionsOpen(false)} 
          className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
        >
          <Target className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isSolutionsOpen && (
          <div 
            className="absolute top-full left-0 w-[600px] bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl p-6 z-50"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <div className="grid grid-cols-2 gap-6">
              {solutionsCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-2 text-zion-cyan font-semibold">
                    <category.icon className="w-5 h-5" />
                    <span>{category.title}</span>
                  </div>
                  <div className="space-y-2">
                    {category.solutions.map((solution, solutionIndex) => (
                      <Link
                        key={solutionIndex}
                        to={solution.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-zion-purple/10 transition-colors group"
                      >
                        <solution.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light group-hover:text-white">{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-zion-purple/20">
              <Link
                to="/solutions"
                className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-white transition-colors"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsCompanyOpen(true)} 
          onMouseLeave={() => setIsCompanyOpen(false)} 
          className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
        >
          <Building2 className="w-4 h-4"/>
          <span>Company</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isCompanyOpen && (
          <div 
            className="absolute top-full left-0 w-[300px] bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl p-6 z-50"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-zion-purple/10 transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan" />
                  <span className="text-sm text-zion-slate-light group-hover:text-white">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsResourcesOpen(true)} 
          onMouseLeave={() => setIsResourcesOpen(false)} 
          className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-3 py-2 rounded-md hover:bg-zion-cyan/5"
        >
          <FileText className="w-4 h-4"/>
          <span>Resources</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {isResourcesOpen && (
          <div 
            className="absolute top-full left-0 w-[400px] bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl p-6 z-50"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <div className="grid grid-cols-2 gap-4">
              {resourceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-zion-purple/10 transition-colors group"
                >
                  <link.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan" />
                  <span className="text-sm text-zion-slate-light group-hover:text-white">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <NavLink 
        to="/pricing" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
            isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
          )
        }
      >
        <div className="flex items-center space-x-2">
          <DollarSign className="w-4 h-4" />
          <span>Pricing</span>
        </div>
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          cn("text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md", 
            isActive ? "text-zion-cyan bg-zion-cyan/10" : "text-muted-foreground hover:text-zion-cyan hover:bg-zion-cyan/5"
          )
        }
      >
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-4 h-4" />
          <span>Contact</span>
        </div>
      </NavLink>
    </nav>
  );
}