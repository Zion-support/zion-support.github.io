import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Users,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Zap,
  Target,
  Lightbulb,
  CheckCircle,
  Star,
  TrendingUp,
  Briefcase,
  BookOpen,
  FileText,
  Video,
  HelpCircle,
  MessageCircle,
  Calculator,
  Settings,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  ExternalLink,
  Building,
  Store,
  Handshake,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2
} from 'lucide-react';

export const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services", icon: Brain },
        { name: "Quantum Computing", href: "/quantum-services", icon: Zap },
        { name: "Cybersecurity", href: "/cybersecurity", icon: Shield },
        { name: "Cloud Infrastructure", href: "/cloud-services", icon: Cloud },
        { name: "Digital Transformation", href: "/digital-transformation", icon: Rocket },
        { name: "IT Consulting", href: "/it-consulting", icon: Users }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Solutions", href: "/enterprise", icon: Building },
        { name: "SMB Solutions", href: "/smb", icon: Store },
        { name: "Startup Solutions", href: "/startups", icon: Rocket },
        { name: "Industry Solutions", href: "/industries", icon: Target },
        { name: "Custom Development", href: "/custom-development", icon: Code },
        { name: "Integration Services", href: "/integration", icon: ExternalLink }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
        { name: "Finance", href: "/industries/finance", icon: DollarSign },
        { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
        { name: "Retail", href: "/industries/retail", icon: ShoppingBag },
        { name: "Education", href: "/industries/education", icon: GraduationCap },
        { name: "Government", href: "/industries/government", icon: Building2 }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: Users },
        { name: "Our Team", href: "/team", icon: Users },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "News & Events", href: "/news", icon: FileText },
        { name: "Contact", href: "/contact", icon: MessageCircle }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
        { name: "White Papers", href: "/white-papers", icon: FileText },
        { name: "Webinars", href: "/webinars", icon: Video },
        { name: "Documentation", href: "/docs", icon: BookOpen },
        { name: "Support", href: "/support", icon: HelpCircle }
      ]
    }
  ];

  const quickActions = [
    { name: "Get Quote", href: "/quote", icon: Calculator, variant: "primary" },
    { name: "Book Demo", href: "/demo", icon: Video, variant: "secondary" },
    { name: "Free Consultation", href: "/consultation", icon: MessageCircle, variant: "outline" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/zion-tech-group", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:text-sky-400" },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:text-blue-600" },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:text-pink-400" },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:text-red-400" }
  ];

  const certifications = [
    { name: "ISO 27001", icon: Shield, description: "Information Security" },
    { name: "SOC 2 Type II", icon: CheckCircle, description: "Security & Availability" },
    { name: "GDPR Compliant", icon: Lock, description: "Data Protection" },
    { name: "FedRAMP Ready", icon: Award, description: "Government Security" }
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-cyan-400/70">Innovating Tomorrow</div>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading technology solutions provider offering cutting-edge AI, quantum computing, 
              cybersecurity, and digital transformation services to drive innovation and growth.
            </p>

            {/* Quick Actions */}
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : action.variant === 'secondary'
                      ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      : 'text-cyan-400 hover:text-white border border-cyan-400 hover:bg-cyan-400'
                  }`}
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title}
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-2"></div>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Certifications & Awards</h4>
            <p className="text-gray-400">Trusted by enterprises worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{cert.name}</div>
                <div className="text-xs text-gray-400">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Phone</div>
                <div className="text-gray-400">+1 302 464 0950</div>
                <div className="text-sm text-gray-500">24/7 Support Available</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Email</div>
                <div className="text-gray-400">kleber@ziontechgroup.com</div>
                <div className="text-sm text-gray-500">Response within 2 hours</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Office</div>
                <div className="text-gray-400">364 E Main St STE 1008</div>
                <div className="text-gray-400">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400 hidden sm:inline" />
              <span className="hidden sm:inline">for innovation</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-2">Stay Updated with Innovation</h4>
            <p className="text-gray-400 mb-6">Get the latest insights on AI, quantum computing, and emerging technologies</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};