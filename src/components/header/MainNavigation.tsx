import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
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

  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          <button 
            onMouseEnter={() => {
              if (item.name === 'Services') setIsServicesOpen(true);
              if (item.name === 'Micro SAAS') setIsMicroSaasOpen(true);
              if (item.name === 'Solutions') setIsSolutionsOpen(true);
              if (item.name === 'Innovation Lab') setIsInnovationOpen(true);
            }}
            onMouseLeave={() => {
              if (item.name === 'Services') setIsServicesOpen(false);
              if (item.name === 'Micro SAAS') setIsMicroSaasOpen(false);
              if (item.name === 'Solutions') setIsSolutionsOpen(false);
              if (item.name === 'Innovation Lab') setIsInnovationOpen(false);
            }}
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <item.icon className="w-4 h-4"/>
            <span>{item.name}</span>
            <ChevronDown className="w-3 h-3"/>
          </button>
          
          {((item.name === 'Services' && isServicesOpen) ||
            (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
            (item.name === 'Solutions' && isSolutionsOpen) ||
            (item.name === 'Innovation Lab' && isInnovationOpen)) && (
            <div
              onMouseEnter={() => {
                if (item.name === 'Services') setIsServicesOpen(true);
                if (item.name === 'Micro SAAS') setIsMicroSaasOpen(true);
                if (item.name === 'Solutions') setIsSolutionsOpen(true);
                if (item.name === 'Innovation Lab') setIsInnovationOpen(true);
              }}
              onMouseLeave={() => {
                if (item.name === 'Services') setIsServicesOpen(false);
                if (item.name === 'Micro SAAS') setIsMicroSaasOpen(false);
                if (item.name === 'Solutions') setIsSolutionsOpen(false);
                if (item.name === 'Innovation Lab') setIsInnovationOpen(false);
              }}
              className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {item.dropdown.slice(0, Math.ceil(item.dropdown.length / 2)).map((subItem) => (
                        <li key={subItem.name}>
                          <Link 
                            to={subItem.href} 
                            className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                          >
                            <subItem.icon className="w-3 h-3 mr-2" />
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                      <Rocket className="w-4 h-4 mr-2" />
                      More {item.name}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {item.dropdown.slice(Math.ceil(item.dropdown.length / 2)).map((subItem) => (
                        <li key={subItem.name}>
                          <Link 
                            to={subItem.href} 
                            className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                          >
                            <subItem.icon className="w-3 h-3 mr-2" />
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      
      <NavLink
        to="/about"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        About
      </NavLink>
      
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
