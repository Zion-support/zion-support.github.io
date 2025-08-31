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
        { name: "AI Autonomous Research Assistant", href: "/services/ai-autonomous-research-assistant", icon: Brain },
        { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield },
        { name: "AI Healthcare Diagnostics Platform", href: "/services/ai-healthcare-diagnostics-platform", icon: Heart },

        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: TrendingUp },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Building2 },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Heart },
        { name: "AI Educational Content Creation", href: "/services/ai-educational-content-creation-platform", icon: BookOpen },
        { name: "AI Autonomous Education Platform", href: "/services/ai-autonomous-education-platform", icon: GraduationCap },
        { name: "AI Autonomous Creative Studio", href: "/services/ai-autonomous-creative-studio", icon: Palette },
        { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "AI Legal Research Platform", href: "/services/ai-autonomous-legal-research-platform", icon: FileText },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Building2 },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
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
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions", icon: Network },
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Atom },
        { name: "IoT & Edge Computing", href: "/services/iot-edge-computing", icon: Wifi },
        { name: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
        { name: "Performance Monitoring", href: "/services/performance-monitoring", icon: Activity },
        { name: "Disaster Recovery", href: "/services/disaster-recovery", icon: Shield },
        { name: "Network Security", href: "/services/network-security", icon: Lock },
        { name: "API Management", href: "/services/api-management", icon: Code },
        { name: "Microservices Architecture", href: "/services/microservices-architecture", icon: Layers }
      ]
    },
    {
      title: "Industry Solutions",
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
        { name: "Blog & Insights", href: "/blog", icon: PenTool },
        { name: "Documentation", href: "/docs", icon: BookOpen },
        { name: "Help Center", href: "/help", icon: HelpCircle },
        { name: "Community", href: "/community", icon: Users },
        { name: "ROI Calculator", href: "/tools/roi-calculator", icon: Calculator },
        { name: "Security Assessment", href: "/tools/security-assessment", icon: Shield },
        { name: "Performance Monitor", href: "/tools/performance-monitor", icon: Activity }
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
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
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
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. We help businesses leverage cutting-edge technology 
              to drive innovation and growth.
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
        </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20 bg-zion-slate-darkest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
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