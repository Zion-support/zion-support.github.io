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
  Youtube,
  Briefcase,
  Handshake,
  Video,
  GraduationCap,
  HelpCircle
} from 'lucide-react';

const footerSections = [
  {
    title: "Services",
    icon: Zap,
    links: [
      { name: "AI Solutions", href: "/services/ai", icon: Brain },
      { name: "Cloud Services", href: "/services/cloud", icon: Cloud },
      { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
      { name: "Infrastructure", href: "/services/infrastructure", icon: Server },
      { name: "Digital Transformation", href: "/services/transformation", icon: Sparkles },
      { name: "Consulting", href: "/services/consulting", icon: Users },
      { name: "All Services", href: "/services", icon: Layers }
    ]
  },
  {
    title: "Solutions",
    icon: Target,
    links: [
      { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
      { name: "Financial Services", href: "/solutions/financial", icon: DollarSign },
      { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
      { name: "Government", href: "/solutions/government", icon: Building2 },
      { name: "Retail", href: "/solutions/retail", icon: Briefcase },
      { name: "Enterprise", href: "/solutions/enterprise", icon: Building2 },
      { name: "All Solutions", href: "/solutions", icon: Target }
    ]
  },
  {
    title: "Company",
    icon: Building2,
    links: [
      { name: "About Us", href: "/about", icon: Users },
      { name: "Leadership", href: "/leadership", icon: Star },
      { name: "Careers", href: "/careers", icon: Briefcase },
      { name: "Partners", href: "/partners", icon: Handshake },
      { name: "News", href: "/news", icon: FileText },
      { name: "Contact", href: "/contact", icon: MessageCircle }
    ]
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      { name: "Blog", href: "/blog", icon: FileText },
      { name: "Documentation", href: "/documentation", icon: BookOpen },
      { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
      { name: "Webinars", href: "/webinars", icon: Video },
      { name: "Training", href: "/training", icon: GraduationCap },
      { name: "Help Center", href: "/help-center", icon: HelpCircle },
      { name: "FAQ", href: "/faq", icon: HelpCircle }
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
  { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
  { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
];

const contactInfo = {
  email: "kleber@ziontechgroup.com",
  phone: "+1 (302) 464-0950",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-zion-slate-darker via-zion-blue-dark to-zion-slate-darker border-t border-zion-purple/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-slate-400 font-medium">Innovation • Technology • Growth</p>
              </div>
            </Link>
            <p className="text-slate-300 max-w-sm leading-relaxed mb-6">
              Leading the future of technology with cutting-edge AI solutions, quantum computing innovations, 
              and transformative digital experiences that empower businesses to achieve unprecedented growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-purple/20 rounded-lg group-hover:bg-zion-cyan/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-cyan/20 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/data-protection" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Data Protection
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Accessibility
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};