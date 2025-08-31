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
  Store,
  Brain,
  Zap,
  Server,
  Shield,
  Cloud,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Rocket,
  Target,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Eye,
  Workflow,
  Atom,
  MessageCircle,
  PenTool,
  TrendingUp,
  Lock,
  Cpu,
  Network,
  Database,
  Monitor,
  Smartphone,
  Code,
  Palette,
  Settings,
  Cog,
  BarChart,
  Activity,
  Wifi,
  HardDrive
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation",
      icon: Brain,
      links: [
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-platform" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Trading Platform", href: "/services/ai-financial-trading-platform" },
        { name: "AI Healthcare", href: "/services/ai-healthcare-platform" },
        { name: "AI Content Studio", href: "/services/ai-content-creation-studio" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "Customer Experience AI", href: "/services/ai-customer-experience-analytics-platform" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" },
        { name: "Supply Chain AI", href: "/services/ai-supply-chain-optimization" },
        { name: "AI Website Chatbot", href: "/services/website-ai-chatbot" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      links: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
        { name: "Edge Computing", href: "/services/edge-computing-solutions" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Digital Transformation", href: "/services/digital-transformation" }
      ]
    },
    {
      title: "Solutions",
      icon: Target,
      links: [
        { name: "Enterprise Solutions", href: "/enterprise" },
        { name: "Industry Solutions", href: "/solutions" },
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions-comprehensive" },
        { name: "AI Interview Assessment", href: "/services/interview-assessment-ai" },
        { name: "Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "Talent", href: "/talent" }
      ]
    },
    {
      title: "Company",
      icon: Building2,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Events", href: "/events" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Webinars", href: "/webinars" },
        { name: "Training", href: "/training" },
        { name: "Research", href: "/research-development" },
        { name: "Services Catalog", href: "/services-catalog" },
        { name: "AI Services Showcase", href: "/ai-services-showcase" }
      ]
    }
  ];

  const quickActions = [
    { name: "Request Quote", href: "/request-quote", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { name: "Get Started", href: "/signup", icon: Rocket, color: "from-purple-500 to-pink-500" },
    { name: "Browse Marketplace", href: "/marketplace", icon: Store, color: "from-green-500 to-emerald-500" },
    { name: "Find Experts", href: "/talent", icon: Users, color: "from-orange-500 to-red-500" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
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
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zinc-400">
                <Mail className="w-4 h-4" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="flex items-center space-x-2 px-3 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg transition-colors group"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${action.color} rounded-md flex items-center justify-center`}>
                      <action.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <section.icon className="w-4 h-4 mr-2 text-zion-cyan" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zinc-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {section.links.length > 8 && (
                  <li>
                    <Link 
                      to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zinc-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zinc-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}