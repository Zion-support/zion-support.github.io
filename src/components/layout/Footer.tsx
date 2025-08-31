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
  Smartphone
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Core AI Services",
      icon: Brain,
      links: [
        { name: "AI Autonomous Research Assistant", href: "/services/ai-autonomous-research-assistant", icon: Brain },
        { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield },
        { name: "AI Healthcare Diagnostics Platform", href: "/services/ai-healthcare-diagnostics-platform", icon: Heart },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Zap },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform", icon: Database },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: TrendingUp },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
        { name: "AI Content Marketing Studio", href: "/services/ai-content-marketing-studio", icon: PenTool },
        { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", icon: Database },
        { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", icon: Factory },
        { name: "AI Quantum Neural Network", href: "/services/ai-quantum-neural-network-platform", icon: Atom },
        { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "AI Customer Churn Predictor", href: "/services/ai-powered-customer-churn-predictor", icon: TrendingDown },
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-intelligence-platform", icon: Shield }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      links: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform", icon: Lock },
        { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions", icon: Network },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", icon: DollarSign }
      ]
    },
    {
      title: "Specialized Solutions",
      icon: Target,
      links: [
        { name: "Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Heart },
        { name: "Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
        { name: "Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-platform", icon: Truck },
        { name: "Legal Document Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "HR Management Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions-comprehensive", icon: Layers },
        { name: "Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building2,
      links: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Factory },
        { name: "Retail & E-commerce", href: "/solutions/retail", icon: ShoppingCart },
        { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
        { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing", icon: Atom },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", icon: Brain },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3", icon: Network }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "About Us", href: "/about", icon: Users },
        { name: "Leadership", href: "/leadership", icon: Award },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "News", href: "/news", icon: FileText },
        { name: "Events", href: "/events", icon: Calendar },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "Contact", href: "/contact", icon: Phone },
        { name: "Team", href: "/about#team", icon: Users }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { name: "Blog", href: "/blog", icon: PenTool },
        { name: "Case Studies", href: "/case-studies", icon: FileText },
        { name: "White Papers", href: "/white-papers", icon: BookOpen },
        { name: "Documentation", href: "/docs", icon: Monitor },
        { name: "Research & Development", href: "/research-development", icon: Lightbulb },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Training", href: "/training", icon: GraduationCap },
        { name: "Help Center", href: "/help", icon: HelpCircle }
      ]
    },
    {
      title: "Innovation Hub",
      icon: Rocket,
      links: [
        { name: "Innovation Services Hub", href: "/innovative-services-hub", icon: Rocket },
        { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026", icon: Star },
        { name: "Innovation Showcase 2032", href: "/innovative-services-showcase-2032", icon: Sparkles },
        { name: "Comprehensive Services 2025", href: "/comprehensive-services-showcase-2025", icon: Layers },
        { name: "Comprehensive Services 2026", href: "/comprehensive-services-showcase-2026", icon: Rocket },
        { name: "Pricing Guide 2032", href: "/comprehensive-pricing-guide-2032", icon: DollarSign },
        { name: "All Services", href: "/services", icon: Layers },
        { name: "All Solutions", href: "/solutions", icon: Target },
        { name: "Pricing", href: "/pricing", icon: DollarSign }
      ]
    },
    {
      title: "Support & Legal",
      icon: Shield,
      links: [
        { name: "Support Center", href: "/support", icon: Headphones },
        { name: "Privacy Policy", href: "/privacy", icon: Lock },
        { name: "Terms of Service", href: "/terms", icon: FileText },
        { name: "Cookie Policy", href: "/cookies", icon: Lock },
        { name: "Accessibility", href: "/accessibility", icon: Users },
        { name: "Security", href: "/security", icon: Shield },
        { name: "Compliance", href: "/compliance", icon: CheckCircle },
        { name: "Sitemap", href: "/sitemap", icon: Layers }
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

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay Updated with Innovation
              </h3>
              <p className="text-slate-300 mb-6">
                Get the latest insights on AI, technology trends, and industry innovations delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Company Info */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center space-x-3 group mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-slate-400 font-medium">Innovation • Technology • Growth</p>
              </div>
            </Link>
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
              <div className="flex items-center space-x-3 text-zinc-400">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
            {footerSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={section.title} className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400 flex items-center">
                    <IconComponent className="w-5 h-5 mr-3" />
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <li key={link.name}>
                          <Link 
                            to={link.href} 
                            className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-sm"
                          >
                            <LinkIcon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {link.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="border-t border-slate-700/50 pt-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Contact Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start text-slate-300">
                    <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                    <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 flex items-center">
                  <Star className="w-5 h-5 mr-3" />
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                        aria-label={social.name}
                      >
                        <SocialIcon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-400">
                  Connect with us on social media for the latest updates and insights.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 flex items-center">
                  <Rocket className="w-5 h-5 mr-3" />
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <Link 
                    to="/contact" 
                    className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="block w-full px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-lg transition-all duration-300 text-center border border-slate-600 hover:border-cyan-500"
                  >
                    View Pricing
                  </Link>
                  <Link 
                    to="/support" 
                    className="block w-full px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-lg transition-all duration-300 text-center border border-slate-600 hover:border-cyan-500"
                  >
                    Get Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
                  <span>•</span>
                  <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
                  <span>•</span>
                  <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookies</Link>
                  <span>•</span>
                  <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 rounded-lg transition-all duration-300 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}