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
      { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Home },
      { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
      { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", icon: Database },
      { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", icon: Factory },
      { name: "AI Quantum Neural Network", href: "/services/ai-quantum-neural-network-platform", icon: Atom },
      { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
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
      { name: "Retail Solutions", href: "/solutions/retail", icon: Building2 },
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
  },
  {
    title: "Legal & Education",
    icon: BookOpen,
    links: [
      { name: "Terms of Service", href: "/terms", icon: FileText },
      { name: "Privacy Policy", href: "/privacy", icon: Shield },
      { name: "Cookie Policy", href: "/cookies", icon: Shield },
      { name: "Accessibility", href: "/accessibility", icon: Users },
      { name: "Help Center", href: "/help", icon: BookOpen },
      { name: "Support", href: "/support", icon: MessageCircle }
    ]
  }
];



  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickLinks = [
    { name: "Get Started", href: "/contact", icon: Rocket },
    { name: "Request Quote", href: "/contact", icon: TrendingUp },
    { name: "Pricing Guide", href: "/pricing", icon: BarChart3 },
    { name: "Comprehensive Services 2026", href: "/comprehensive-services-showcase-2026", icon: Star },
    { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant", icon: Brain },
    { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield },
    { name: "AI Healthcare", href: "/services/ai-healthcare-diagnostics-platform", icon: Heart },
    { name: "All Services", href: "/services", icon: Zap },
    { name: "Support Center", href: "/help", icon: HelpCircle }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Our Team", href: "/team", icon: Users },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "Investors", href: "/investors", icon: DollarSign },
    { name: "Press & Media", href: "/press", icon: FileText },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Legal", href: "/legal", icon: Scale }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];



export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker border-t border-zion-purple/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            
            <p className="text-zinc-300 mb-8 max-w-md leading-relaxed">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">{section.title}</h3>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-slate-400 font-medium">Innovation • Technology • Growth</p>
              </div>
            </div>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, quantum computing innovations, 
              and transformative digital experiences that empower businesses to achieve unprecedented growth.
            </p>
          </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+13024640950" className="hover:underline">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest innovations and industry insights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-zion-purple/20 pt-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <h4 className="text-white font-semibold">Quick Access</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/20 hover:bg-zion-purple/20 hover:border-zion-cyan/30 transition-all duration-300 group"
              >
                <link.icon className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform" />
                <span className="text-zinc-300 group-hover:text-white transition-colors text-sm font-medium">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-6 mb-8 border border-zion-purple/30">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-zinc-300 text-sm">
                Get the latest updates on AI innovations, technology trends, and exclusive insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-2">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;