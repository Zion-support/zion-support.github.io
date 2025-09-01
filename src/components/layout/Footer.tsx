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
  Database
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
        { name: "Retail Solutions", href: "/solutions/retail", icon: Briefcase },
        { name: "Enterprise Solutions", href: "/enterprise", icon: Building2 },
        { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
        { name: "Industry Overview", href: "/industry-solutions", icon: Target }
      ]
    },
    {
      title: "Company & Resources",
      icon: Building2,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership", href: "/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Events", href: "/events" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Case Studies", href: "/case-studies" }
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
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Transforming businesses through innovative AI, cloud, and technology solutions. 
              We help organizations of all sizes accelerate their digital transformation journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
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

        {/* Additional Resources Section */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/white-papers" className="text-zinc-400 hover:text-white transition-colors">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-zinc-400 hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-zinc-400 hover:text-white transition-colors">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/research-development" className="text-zinc-400 hover:text-white transition-colors">
                    Research & Development
                  </Link>
                </li>
              </ul>
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

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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