import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive,
  Globe,
  TrendingUp,
  Rocket,
  Building2,
  FileText,
  HelpCircle,
  Settings,
  BarChart3,
  Code,
  Cpu,
  Dna,
  Satellite,
  Building,
  Sparkles,
  Microscope,
  Flask,
  Eye,
  Handshake
} from "lucide-react";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isInnovationOpen, setIsInnovationOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Artificial Intelligence services' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Code, description: 'Cloud infrastructure and DevOps' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security and protection services' },
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: HardDrive, description: 'IT infrastructure management' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp, description: 'Business transformation services' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic', icon: Brain, description: 'Brain-inspired AI computing' },
        { name: 'Synthetic Biology', href: '/services/synthetic-biology', icon: Dna, description: 'AI-powered genetic engineering' },
        { name: 'Space Technology', href: '/services/space-tech', icon: Satellite, description: 'Satellite and space operations' },
        { name: 'Brain-Computer Interface', href: '/services/bci', icon: Brain, description: 'Neural interface technology' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'AI Research Assistant', href: '/micro-saas/ai-research', icon: Brain, description: 'AI-powered research tools' },
        { name: 'Content Generator', href: '/micro-saas/content-generator', icon: FileText, description: 'AI content creation' },
        { name: 'IT Asset Management', href: '/micro-saas/it-assets', icon: HardDrive, description: 'IT asset tracking' },
        { name: 'Business Operations', href: '/micro-saas/business-ops', icon: Building2, description: 'Business process automation' },
        { name: 'Autonomous Drones', href: '/micro-saas/autonomous-drones', icon: Satellite, description: 'Drone fleet management' },
        { name: 'Advanced Robotics', href: '/micro-saas/advanced-robotics', icon: Cpu, description: 'AI-powered robotics' },
        { name: 'Materials Discovery', href: '/micro-saas/materials-discovery', icon: Flask, description: 'AI materials research' },
        { name: 'Quantum Internet', href: '/micro-saas/quantum-internet', icon: Globe, description: 'Quantum-secure networks' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Building,
      color: 'from-zion-blue to-zion-cyan',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale deployments' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Shield, description: 'Medical technology solutions' },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp, description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Settings, description: 'Smart manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government', icon: Shield, description: 'Public sector technology' },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: BarChart3, description: 'E-commerce and retail tech' },
        { name: 'Education Solutions', href: '/solutions/education', icon: FileText, description: 'EdTech and learning platforms' },
        { name: 'Transportation Solutions', href: '/solutions/transportation', icon: Rocket, description: 'Smart mobility and logistics' }
      ]
    },
    {
      name: 'Innovation Lab',
      href: '/innovation-lab',
      icon: Sparkles,
      color: 'from-zion-pink to-zion-purple',
      dropdown: [
        { name: 'Research & Development', href: '/innovation-lab/research', icon: Microscope, description: 'Cutting-edge research' },
        { name: 'Prototype Development', href: '/innovation-lab/prototypes', icon: Flask, description: 'Rapid prototyping' },
        { name: 'Technology Incubator', href: '/innovation-lab/incubator', icon: Rocket, description: 'Startup incubation' },
        { name: 'Future Technologies', href: '/innovation-lab/future-tech', icon: Eye, description: 'Emerging tech exploration' },
        { name: 'Collaborative Projects', href: '/innovation-lab/collaborations', icon: Handshake, description: 'Partnership opportunities' }
      ]
    }
  ];

  const toggleDropdown = (dropdownName: string) => {
    switch (dropdownName) {
      case 'services':
        setIsServicesOpen(!isServicesOpen);
        setIsSolutionsOpen(false);
        setIsMicroSaasOpen(false);
        setIsInnovationOpen(false);
        break;
      case 'solutions':
        setIsSolutionsOpen(!isSolutionsOpen);
        setIsServicesOpen(false);
        setIsMicroSaasOpen(false);
        setIsInnovationOpen(false);
        break;
      case 'microSaas':
        setIsMicroSaasOpen(!isMicroSaasOpen);
        setIsServicesOpen(false);
        setIsSolutionsOpen(false);
        setIsInnovationOpen(false);
        break;
      case 'innovation':
        setIsInnovationOpen(!isInnovationOpen);
        setIsServicesOpen(false);
        setIsSolutionsOpen(false);
        setIsMicroSaasOpen(false);
        break;
    }
  };

  return (
    <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          <button
            onClick={() => toggleDropdown(item.name.toLowerCase().replace(' ', ''))}
            className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
          </button>

          {/* Dropdown Menu */}
          <div className={cn(
            "absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl opacity-0 invisible transition-all duration-300 transform -translate-y-2",
            {
              'opacity-100 visible translate-y-0': 
                (item.name === 'Services' && isServicesOpen) ||
                (item.name === 'Solutions' && isSolutionsOpen) ||
                (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                (item.name === 'Innovation Lab' && isInnovationOpen)
            }
          )}>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-2">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    to={dropdownItem.href}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-slate/50 transition-all duration-200 group/item"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                      <dropdownItem.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover/item:text-zion-cyan transition-colors duration-200">
                        {dropdownItem.name}
                      </h4>
                      <p className="text-zion-slate-light text-xs mt-1">
                        {dropdownItem.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
=======
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from "lucide-react";
export function MainNavigation({ className }) {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    return (<nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground")}>
        Home
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Zap className="w-4 h-4"/>
          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        
        {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2"/>
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
                    <li><Link to="/services/cloud" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud & DevOps</Link></li>
                    <li><Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                    <li><Link to="/services/infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
                    <li><Link to="/services/transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
                    <li><Link to="/services/consulting" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Consulting</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/quantum-neural-network-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Neural Network</Link></li>
                    <li><Link to="/autonomous-business-operations-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Autonomous Operations</Link></li>
                    <li><Link to="/ai-powered-it-asset-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Asset Management</Link></li>
                    <li><Link to="/enhanced-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enhanced Services</Link></li>
                    <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Support</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/enhanced-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>)}
      </div>
      
      {/* Solutions Dropdown */}
      <div className="relative group">
        <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
          <Brain className="w-4 h-4"/>
          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        
        {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2"/>
                    Talent
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Find Experts</Link></li>
                    <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Skill Matching</Link></li>
                    <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Project Teams</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2"/>
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Enterprise Solutions</Link></li>
                    <li><Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Industry Solutions</Link></li>
                    <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
                    <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Marketplace</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          </div>)}
      </div>
      {/* Company Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building2 className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isCompanyOpen && (
          <div
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News</Link></li>
                <li><Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Events</Link></li>
                <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Resources Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <FileText className="w-4 h-4" />
          <span>Resources</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        
        {isResourcesOpen && (
          <div
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Documentation</Link></li>
                <li><Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link></li>
                <li><Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
                <li><Link to="/research-development" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Research</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Support */}
      <Link to="/help" className="text-zion-slate-light hover:text-white transition-colors flex items-center">
        <HelpCircle className="w-4 h-4 mr-1" />
        Support
      </Link>
      {/* Pricing */}
      <Link to="/pricing" className="text-zion-slate-light hover:text-white transition-colors flex items-center">
        <BarChart3 className="w-4 h-4 mr-1" />
        Pricing
      </Link>
      
      <NavLink to="/signup" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-zion-cyan" : "text-muted-foreground", "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1")}>
        Get Started
      </NavLink>
    </nav>);
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
}
