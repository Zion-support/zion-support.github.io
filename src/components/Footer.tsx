import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Server,
  ShoppingCart,
  Smartphone,
  Database,
  Clock,
  Code,
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}

interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}

const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    links: [
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: Shield },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'AI-Powered SEO', path: '/services/ai-seo', icon: TrendingUp },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
      { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: MessageCircle },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Server },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: BarChart3 },
      { name: 'IT Consulting', path: '/it-consulting', icon: Cpu },
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    links: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Lock },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', icon: Shield },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', icon: Eye },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: CheckCircle }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Brain },
      { name: 'Space Technology', path: '/space-tech', icon: Satellite },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video }
    ]
  },
  {
    title: 'Support & Resources',
    icon: HelpCircle,
    links: [
      { name: 'Help Center', path: '/help', icon: HelpCircle },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Blog', path: '/blog', icon: BookOpen },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Sitemap', path: '/sitemap', icon: FileText }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: TestTube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-600' }
];

export function Footer() {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle section expansion (for mobile)
  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-12">
          {/* Company Section - Takes 2 columns on larger screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation Hub</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with cutting-edge AI, cloud infrastructure, and emerging technologies. 
              We transform ideas into innovative solutions that drive growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Innovation District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white">{section.title}</h3>
              </div>
              
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-2">
                      <link.icon className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Copyright className="w-4 h-4" />
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
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

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
