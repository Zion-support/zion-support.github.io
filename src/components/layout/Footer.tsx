import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  Zap,
  Brain,
  Server,
  Shield,
  Users,
  Building2,
  FileText,
  Rocket,
  Target,
  Atom,
  Network,
  Cloud,
  Lock,
  TrendingUp,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Star,
  HelpCircle,
  BarChart3,
  ShoppingCart,
  Heart,
  Factory,
  DollarSign,
  Briefcase,
  Award,
  ExternalLink,
  ArrowUp,
  Sparkles,
  CheckCircle,
  Monitor,
  Headphones,
  Truck,
  Search,
  Layers,
  Database,
  Settings,
  Smartphone,
  HardDrive
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Core AI Services",
      icon: Brain,
      links: [
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform", icon: BarChart3 },
        { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform", icon: Settings },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", icon: Users },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Zap },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform", icon: Database },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: TrendingUp },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
        { name: "AI Content Marketing Studio", href: "/services/ai-content-marketing-studio", icon: PenTool },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-platform", icon: Shield },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant", icon: Lightbulb },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-platform", icon: Truck },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
        { name: "AI Healthcare", href: "/services/ai-healthcare-platform", icon: Heart },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: Users },
        { name: "AI Customer Experience Optimization", href: "/services/ai-customer-experience-optimization-platform", icon: Users },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", icon: Shield }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      links: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", icon: Server },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: HardDrive },
        { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
        { name: "Edge Computing", href: "/services/edge-computing-solutions", icon: Cpu },
        { name: "IoT Edge Computing", href: "/services/iot-edge", icon: Wifi },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions", icon: Network },
        { name: "Micro SAAS Solutions", href: "/services/micro-saas-solutions", icon: Zap },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio", icon: PenTool }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      links: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Solutions", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Factory },
        { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
        { name: "Retail Solutions", href: "/solutions/retail", icon: ShoppingCart },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", icon: Brain },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3", icon: Network },
        { name: "Space Technology", href: "/solutions/space-tech", icon: Satellite }
      ]
    },
    {
      title: "Resources & Support",
      icon: FileText,
      links: [
        { name: "Blog", href: "/blog", icon: BookOpen },
        { name: "Documentation", href: "/documentation", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Training", href: "/training", icon: GraduationCap },
        { name: "Support", href: "/support", icon: HelpCircle },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Research & Development", href: "/research-development", icon: Lightbulb }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "News", href: "/news", icon: FileText },
    { name: "Events", href: "/events", icon: Calendar }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:text-blue-600" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-blue-400" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github, color: "hover:text-gray-600" },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:text-blue-600" },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:text-pink-500" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light text-sm">Future Technology Solutions</p>
              </div>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed mb-6 max-w-md">
              Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation. 
              We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                <section.icon className="w-5 h-5 mr-2" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      {link.icon && <link.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-zion-slate-light">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}