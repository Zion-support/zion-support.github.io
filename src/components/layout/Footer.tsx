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
  Bot,
  Code,
  Settings,
  ChevronUp
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      links: [
        { name: "AI Business Operations", href: "/services/ai-autonomous-business-operations-platform", icon: Bot },
        { name: "Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", icon: BarChart3 },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: TrendingUp },
        { name: "Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: Target },
        { name: "Customer Support AI", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp },
        { name: "HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "Predictive Maintenance", href: "/services/ai-predictive-maintenance", icon: Settings }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      links: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Atom },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", icon: DollarSign },
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles },
        { name: "Blockchain Enterprise", href: "/services/blockchain-enterprise-solutions", icon: Network },
        { name: "IT Services", href: "/it-services", icon: Server },
        { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      links: [
        { name: "Healthcare & Medical", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
        { name: "Government & Public", href: "/solutions/government", icon: Building2 },
        { name: "Retail & E-commerce", href: "/solutions/retail", icon: ShoppingCart },
        { name: "Enterprise Solutions", href: "/enterprise", icon: Building2 },
        { name: "Digital Transformation", href: "/digital-transformation", icon: Sparkles },
        { name: "Industry Overview", href: "/industry-solutions", icon: Target }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      links: [
        { name: "Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI-Powered SEO", href: "/services/ai-powered-seo", icon: Search },
        { name: "Healthcare Platform", href: "/services/ai-healthcare-platform", icon: Heart },
        { name: "Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "Compliance Assistant", href: "/services/ai-compliance-assistant", icon: CheckCircle },
        { name: "Micro SaaS Solutions", href: "/micro-saas", icon: Layers },
        { name: "Emerging Tech Hub", href: "/emerging-tech", icon: Lightbulb }
      ]
    },
    {
      title: "Company & About",
      icon: Building2,
      links: [
        { name: "About Zion Tech Group", href: "/about", icon: Users },
        { name: "Leadership Team", href: "/leadership", icon: Award },
        { name: "Careers & Jobs", href: "/careers", icon: Briefcase },
        { name: "Partners & Alliances", href: "/partners", icon: Handshake },
        { name: "News & Press", href: "/news", icon: FileText },
        { name: "Events & Webinars", href: "/events", icon: Calendar },
        { name: "Contact Us", href: "/contact", icon: MessageCircle },
        { name: "Get Started", href: "/get-started", icon: Rocket }
      ]
    },
    {
      title: "Resources & Support",
      icon: BookOpen,
      links: [
        { name: "API Documentation", href: "/docs", icon: Code },
        { name: "Blog & Insights", href: "/blog", icon: FileText },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "Training & Certification", href: "/training", icon: GraduationCap },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Help & Support", href: "/help", icon: Headphones },
        { name: "Research & Development", href: "/research-development", icon: Lightbulb }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Pricing Guide", href: "/pricing", icon: BarChart3 },
    { name: "Solutions Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "All Services", href: "/services", icon: Zap },
    { name: "Support Center", href: "/support", icon: HelpCircle }
  ];

  const showcaseLinks = [
    { name: "2025 Services Showcase", href: "/comprehensive-services-showcase-2025", icon: Star },
    { name: "AI Innovation 2025", href: "/innovative-ai-services-showcase-2025", icon: Brain },
    { name: "2026 Innovation Hub", href: "/innovative-services-showcase-2026", icon: Rocket },
    { name: "2032 Future Vision", href: "/innovative-services-showcase-2032", icon: Sparkles }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker border-t border-zion-purple/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(6,182,212,0.1)_49%,rgba(6,182,212,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm font-medium">Innovation • Technology • Growth</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. Empowering businesses with cutting-edge technology solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>Global Technology Solutions</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Service Categories - Each spans 1 column */}
          {footerSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Icon className="w-5 h-5 mr-2 text-zion-cyan" />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 8).map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                        >
                          <LinkIcon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform text-zion-purple" />
                          <span className="text-sm">{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-zion-purple/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-zion-cyan" />
                Quick Actions
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center p-3 bg-zion-purple/10 rounded-lg hover:bg-zion-purple/20 transition-colors group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-zion-cyan group-hover:scale-110 transition-transform" />
                      <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Innovation Showcases */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-zion-cyan" />
                Innovation Showcases
              </h4>
              <div className="space-y-2">
                {showcaseLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center p-2 hover:bg-zion-purple/10 rounded-lg transition-colors group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-zion-purple group-hover:text-zion-cyan transition-colors" />
                      <span className="text-zion-slate-light group-hover:text-white text-sm">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-zion-cyan" />
                Stay Updated
              </h4>
              <p className="text-zion-slate-light text-sm mb-4">
                Subscribe to our newsletter for the latest updates on AI innovations and technology solutions.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-purple/30 rounded-l-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-r-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-purple/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="text-xs mt-1">Innovating the future of technology solutions worldwide.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-zion-purple">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-purple/20 rounded-lg hover:bg-zion-purple/30 transition-colors group"
              aria-label="Scroll to top"
            >
              <span className="text-zion-slate-light group-hover:text-white text-sm">Back to Top</span>
              <ChevronUp className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}