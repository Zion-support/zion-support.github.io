import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Target,
  Zap,
  BarChart3,
  MessageCircle,
  Workflow,
  TrendingUp,
  Building2,
  Heart,
  BookOpen,
  FileText,
  Users,
  Home,
  Truck,
  Database,
  Factory,
  Atom,
  Satellite,
  Server,
  Network,
  DollarSign,
  Sparkles,
  Rocket,
  Star,
  Search,
  Layers,
  Phone,
  Mail,
  MapPin,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const footerSections = [
  {
    title: "AI & Automation Services",
    icon: Brain,
    links: [
      { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
      { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
      { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
      { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: TrendingUp },
      { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Building2 },
      { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
      { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
      { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Heart },
      { name: "AI Educational Content Creation", href: "/services/ai-educational-content-creation-platform", icon: BookOpen },
      { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
      { name: "AI Legal Research Platform", href: "/services/ai-autonomous-legal-research-platform", icon: FileText },
      { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
      { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Building2 },
      { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
      { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    links: [
      { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
      { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
      { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
      { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions", icon: Network },
      { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
      { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", icon: DollarSign },
      { name: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles },
      { name: "Emerging Technologies", href: "/emerging-tech", icon: Rocket }
    ]
  },
  {
    title: "Industry Solutions",
    icon: Target,
    links: [
      { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
      { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
      { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
      { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
      { name: "Retail Solutions", href: "/solutions/retail", icon: Briefcase },
      { name: "Enterprise Solutions", href: "/enterprise", icon: Building2 },
      { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
      { name: "Industry Overview", href: "/industry-solutions", icon: Target }
    ]
  },
  {
    title: "Emerging Technologies",
    icon: Sparkles,
    links: [
      { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
      { name: "Quantum Computing", href: "/services/ai-quantum-computing-solutions", icon: Atom },
      { name: "Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
      { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
      { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield },
      { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions-comprehensive", icon: Layers },
      { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026", icon: Star },
      { name: "2025 Services Showcase", href: "/comprehensive-services-showcase-2025", icon: Star },
      { name: "Future Technologies", href: "/innovative-services-showcase-2032", icon: Rocket }
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
  { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
  { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
];

const contactInfo = {
  email: "kleber@ziontechgroup.com",
  phone: "+1 (302) 464-0950",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker border-t border-zion-purple/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-slate-400 font-medium">Innovation • Technology • Growth</p>
              </div>
            </Link>
            <p className="text-slate-300 max-w-sm leading-relaxed mb-6">
              Leading the future of technology with cutting-edge AI solutions, quantum computing innovations, 
              and transformative digital experiences that empower businesses to achieve unprecedented growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-cyan/20 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/legal" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};