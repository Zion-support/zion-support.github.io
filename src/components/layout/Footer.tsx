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
  Layers
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
        { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
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
        { name: "Revolutionary Services 2025", href: "/revolutionary-services-showcase-2025", icon: Rocket },
        { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026", icon: Star },
        { name: "2025 Services Showcase", href: "/comprehensive-services-showcase-2025", icon: Star },
        { name: "Future Technologies", href: "/innovative-services-showcase-2032", icon: Rocket }
      ]
    },
    {
      title: "Company & About",
      icon: Building2,
      links: [
        { name: "About Zion Tech Group", href: "/about", icon: Users },
        { name: "Leadership Team", href: "/leadership", icon: Award },
        { name: "Careers & Jobs", href: "/careers", icon: Users },
        { name: "Partners & Alliances", href: "/partners", icon: Handshake },
        { name: "News & Press", href: "/news", icon: FileText },
        { name: "Events & Webinars", href: "/events", icon: Calendar },
        { name: "Contact Us", href: "/contact", icon: Phone },
        { name: "Get Started", href: "/get-started", icon: Rocket }
      ]
    },
    {
      title: "Resources & Support",
      icon: BookOpen,
      links: [
        { name: "Documentation", href: "/docs", icon: BookOpen },
        { name: "Blog & Insights", href: "/blog", icon: FileText },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "Training & Certification", href: "/training", icon: GraduationCap },
        { name: "Webinars", href: "/webinars", icon: Monitor },
        { name: "Help & Support", href: "/help", icon: Headphones },
        { name: "Research & Development", href: "/research-development", icon: Lightbulb }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp },
    { name: "Pricing Guide", href: "/pricing", icon: BarChart3 },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "All Services", href: "/services", icon: Zap },
    { name: "Support Center", href: "/help", icon: HelpCircle }
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
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <div className="text-xs text-zion-cyan font-medium">Innovation • Technology • Growth</div>
              </div>
            </div>
            
            <p className="text-zinc-300 mb-8 max-w-md leading-relaxed">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey 
              with cutting-edge technology and expert guidance.
            </p>
            
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
                <span>Delaware, United States</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Follow Us</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zion-purple/20 rounded-lg text-zion-slate-light hover:bg-zion-cyan/20 hover:text-zion-cyan transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections - Each spans 1 column */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-zion-purple/20">
                <section.icon className="w-4 h-4 text-zion-cyan" />
                <h4 className="text-white font-semibold text-sm">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-zinc-400 hover:text-zion-cyan transition-colors text-sm group"
                    >
                      {link.icon && <link.icon className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />}
                      <span className="hover:underline">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <div className="text-center lg:text-left">
              <p className="text-zinc-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zinc-500 text-xs mt-1">
                Transforming businesses through innovative technology solutions since 2020.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center space-x-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-400 hover:text-zion-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-zinc-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 p-2 bg-zion-purple/20 hover:bg-zion-cyan/20 text-zion-slate-light hover:text-zion-cyan rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:block">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Industry Leader</span>
              </div>
            </div>
            <div className="text-zinc-500 text-xs">
              Built with ❤️ using cutting-edge technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}