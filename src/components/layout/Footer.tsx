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

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube }
];

const contactInfo = [
  { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
  { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
  { icon: MapPin, text: "364 E Main St STE 1008 Middletown DE 19709", href: "#" }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering businesses with cutting-edge AI, IT, and Micro SaaS solutions. 
              We transform ideas into innovative technology solutions that drive growth and efficiency.
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
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
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

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved.
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