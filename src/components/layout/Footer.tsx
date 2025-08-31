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
  Calculator,
  Leaf,
  Store,
  Plane,
  Ship,
  Train,
  Car,
  Warehouse,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  UserPlusCircle,
  UserMinusCircle,
  UserXCircle,
  UserCogCircle,
  UserEditCircle,
  UserSearchCircle,
  UserVoiceCircle,
  UserHeartCircle,
  UserStarCircle,
  Code,
  Home,
  Scale
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    },
    {
      title: "Legal & Education",
      icon: BookOpen,
      links: [
        { name: "AI Legal Research Platform", href: "/services/ai-autonomous-legal-research-platform", icon: Scale },
        { name: "AI Educational Content Creation", href: "/services/ai-educational-content-creation-platform", icon: BookOpen },
        { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Home },
        { name: "AI Legal Document Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText }
      ]
    },
    {
      title: "Company & About",
      icon: Building2,
      links: [
        { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
        { name: "Retail & E-commerce", href: "/solutions/retail", icon: Store },
        { name: "Transportation & Logistics", href: "/solutions/transportation", icon: Truck },
        { name: "Energy & Utilities", href: "/solutions/energy", icon: Zap },
        { name: "Education", href: "/solutions/education", icon: GraduationCap },
        { name: "Government", href: "/solutions/government", icon: Building2 },
        { name: "Real Estate", href: "/solutions/real-estate", icon: Home },
        { name: "Media & Entertainment", href: "/solutions/media", icon: Video },
        { name: "Telecommunications", href: "/solutions/telecommunications", icon: Phone },
        { name: "Aerospace & Defense", href: "/solutions/aerospace", icon: Plane }
      ]
    },
    {
      title: "Resources & Support",
      icon: BookOpen,
      links: [
        { name: "Training Programs", href: "/training", icon: GraduationCap },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Research & Development", href: "/research", icon: Lightbulb },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "Training & Certification", href: "/training", icon: GraduationCap },
        { name: "Webinars", href: "/webinars", icon: Monitor },
        { name: "Help & Support", href: "/help", icon: Headphones },
        { name: "Research & Development", href: "/research-development", icon: Lightbulb }
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
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  const contactInfo = [
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, text: "+1 (302) 464-0950", href: "tel:+13024640950" },
    { icon: MapPin, text: "United States", href: "#" },
    { icon: Globe, text: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-zion-slate-light">Innovation • Technology • Growth</p>
              </div>
            </div>
            
            <p className="text-zinc-300 mb-8 max-w-md leading-relaxed">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <a 
                    href={contact.href} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-zion-cyan/20 rounded-lg">
                  <section.icon className="w-5 h-5 text-zion-cyan" />
                </div>
                <h4 className="text-zion-cyan font-semibold text-lg">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.slice(0, 6).map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <link.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
                {section.links.length > 6 && (
                  <li>
                    <Link 
                      to={`/services/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                    >
                      View All {section.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-zion-purple/20">
          {/* Company Links */}
          <div>
            <h4 className="text-zion-cyan font-semibold mb-4">Company</h4>
            <div className="grid grid-cols-2 gap-2">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center"
                >
                  <link.icon className="w-3 h-3 mr-2" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-zion-cyan font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zion-purple/20 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
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
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-purple/20 text-zion-slate-light hover:bg-zion-purple/30 hover:text-zion-cyan rounded-lg transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}