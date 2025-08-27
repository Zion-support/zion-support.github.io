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
}
