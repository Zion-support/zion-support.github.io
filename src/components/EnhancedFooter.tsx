import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
  CheckCircle,
  Heart,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Building,
  DollarSign,
  Truck,
  Factory,
  ShoppingBag,
  GraduationCap,
  Handshake,
  Newspaper,
  Terminal,
  FileText,
  PenTool
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Core Services",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services", icon: Brain },
        { name: "IT Services", href: "/it-services", icon: Cpu },
        { name: "Micro SaaS", href: "/micro-saas", icon: ShoppingCart },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Cybersecurity", href: "/services/ai-cybersecurity-platform", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: TrendingUp }
      ]
    },
    {
      title: "AI Solutions",
      links: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: Brain },
        { name: "AI Content Creation", href: "/services/ai-content-marketing-suite", icon: PenTool },
        { name: "AI Project Management", href: "/services/ai-project-management", icon: Workflow },
        { name: "AI Financial Analytics", href: "/services/ai-financial-analytics", icon: DollarSign },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform", icon: Heart },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: TrendingUp }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise", icon: Building },
        { name: "Healthcare Solutions", href: "/solutions/healthcare", icon: Heart },
        { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: Truck },
        { name: "Government", href: "/solutions/government", icon: Building },
        { name: "Education", href: "/solutions/education", icon: GraduationCap }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: Users },
        { name: "Our Team", href: "/team", icon: Users },
        { name: "Careers", href: "/careers", icon: Star },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "News", href: "/news", icon: Newspaper },
        { name: "Blog", href: "/blog", icon: BookOpen }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/documentation", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developers", icon: Terminal },
        { name: "Help Center", href: "/help", icon: HelpCircle },
        { name: "Training", href: "/training", icon: BookOpen },
        { name: "White Papers", href: "/white-papers", icon: FileText }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact", icon: MessageCircle },
        { name: "Support Portal", href: "/support", icon: HelpCircle },
        { name: "Status Page", href: "/status", icon: CheckCircle },
        { name: "FAQ", href: "/faq", icon: MessageCircle },
        { name: "Request Quote", href: "/request-quote", icon: DollarSign },
        { name: "Live Chat", href: "/chat", icon: MessageCircle }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: 'https://maps.google.com' },
    { icon: Globe, text: 'https://ziontechgroup.com', href: 'https://ziontechgroup.com' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                <section.icon className="w-5 h-5" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Globe2 className="w-6 h-6" />
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
