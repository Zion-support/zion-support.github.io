import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Github,
  ArrowUp,
  Heart,
  Shield,
  Users,
  Award,
  Star,
  Zap,
  Brain,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Workflow,
  Database,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Building,
  FileText,
  HelpCircle,
  Target,
  Rocket,
  Atom,
  Network,
  Cpu,
  Wifi,
  Eye,
  Sparkles,
  PhoneCall,
  MailOpen,
  MapPinIcon,
  Calendar,
  Clock3,
  DollarSign,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Globe2,
  Building2,
  Briefcase,
  GraduationCap,
  BookOpen,
  Video,
  PenTool,
  Lightbulb,
  Handshake,
  Users2,
  Cog,
  Palette,
  Settings,
  ShieldCheck,
  Activity,
  TrendingDown,
  Scale,
  Gavel,
  BookOpenIcon,
  Clipboard,
  Microscope,
  CircuitBoard,
  ShoppingCart,
  Home,
  PieChart,
  Calculator,
  Receipt,
  CreditCard,
  PiggyBank,
  TrendingDownIcon,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircleIcon,
  FileCheck,
  ScaleIcon,
  GavelIcon,
  BookOpenIcon2,
  ClipboardIcon
} from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      services: [
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-platform" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
        { name: "AI Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
        { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" },
        { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-trading-risk-management" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio" },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform" },
        { name: "AI Autonomous Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization" },
        { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },
        { name: "AI Quantum Neural Network Platform", href: "/services/ai-quantum-neural-network-platform" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      services: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
        { name: "Edge Computing", href: "/services/edge-computing-solutions" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "IoT Edge Computing", href: "/services/quantum-edge-computing-solutions" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" },
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Zap,
      services: [
        { name: "All Micro SaaS", href: "/services/micro-saas-solutions-comprehensive" },
        { name: "AI Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" },
        { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-trading-risk-management" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio" },
        { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Building },
    { name: "Our Story", href: "/about/story", icon: FileText },
    { name: "Leadership", href: "/leadership", icon: Users },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "News & Events", href: "/news", icon: Calendar },
    { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
    { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026", icon: Rocket },
    { name: "Contact", href: "/contact", icon: Phone }
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Webinars", href: "/webinars", icon: Video },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Research & Development", href: "/research-development", icon: Lightbulb },
    { name: "Help Center", href: "/help", icon: HelpCircle },
    { name: "Status Page", href: "/status", icon: Activity }
  ];

  const solutionLinks = [
    { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Users },
    { name: "Financial Solutions", href: "/solutions/financial", icon: BarChart3 },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing", icon: Cpu },
    { name: "Government Solutions", href: "/solutions/government", icon: Building2 },
    { name: "Retail Solutions", href: "/solutions/retail", icon: Target },
    { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing", icon: Atom },
    { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business", icon: Brain },
    { name: "Blockchain Web3", href: "/solutions/blockchain-web3", icon: Network },
    { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing", icon: Wifi },
    { name: "Space Tech", href: "/solutions/space-tech", icon: Rocket }
  ];

  const supportLinks = [
    { name: "Contact Support", href: "/contact", icon: PhoneCall },
    { name: "Request Quote", href: "/request-quote", icon: DollarSign },
    { name: "Help Center", href: "/help", icon: HelpCircle },
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Status Page", href: "/status", icon: Activity },
    { name: "Support Portal", href: "/help", icon: Cog }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Innovation • Excellence • Results</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI, micro SAAS, and IT infrastructure solutions. 
              Transforming businesses through innovation and technology excellence.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
                { icon: Facebook, href: "https://facebook.com/ziontechgroup", label: "Facebook" },
                { icon: Youtube, href: "https://youtube.com/@ziontechgroup", label: "YouTube" },
                { icon: Github, href: "https://github.com/ziontechgroup", label: "GitHub" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-zinc-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-cyan-400" />
              Services
            </h4>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 6).map((category) => (
                <li key={category.title}>
                  <Link
                    to={category.services[0]?.href || "/services"}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <category.icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    {category.title}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Target className="w-4 h-4 mr-2 text-cyan-400" />
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutionLinks.slice(0, 6).map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <solution.icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    {solution.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Building className="w-4 h-4 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <link.icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-cyan-400" />
              Resources
            </h4>
            <ul className="space-y-2 mb-6">
              {resourceLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <link.icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4 flex items-center">
              <HelpCircle className="w-4 h-4 mr-2 text-cyan-400" />
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <link.icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Innovation
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
                <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
}