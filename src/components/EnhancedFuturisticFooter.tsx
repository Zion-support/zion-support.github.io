import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Award,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
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
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Send,
  CheckCircle,
  Star,
  Award as AwardIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const EnhancedFuturisticFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const footerSections = [
    {
      title: 'Services',
      items: [
        { label: 'AI Solutions', href: '/ai-services', icon: Brain },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { label: 'Cybersecurity', href: '/security', icon: Shield },
        { label: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { label: 'Micro SaaS', href: '/micro-saas', icon: Code },
        { label: 'IT Consulting', href: '/services/it-consulting', icon: Users }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { label: 'Startups', href: '/solutions/startups', icon: Zap },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: HeartPulse },
        { label: 'Finance', href: '/solutions/finance', icon: DollarSign },
        { label: 'Education', href: '/solutions/education', icon: BookOpen },
        { label: 'Government', href: '/solutions/government', icon: ShieldCheck }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Team', href: '/team', icon: Users },
        { label: 'Careers', href: '/careers', icon: Briefcase },
        { label: 'Press', href: '/press', icon: FileText },
        { label: 'Partners', href: '/partners', icon: Handshake },
        { label: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog', icon: FileText },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { label: 'Documentation', href: '/docs', icon: BookOpen },
        { label: 'Webinars', href: '/webinars', icon: Video },
        { label: 'Support', href: '/support', icon: HelpCircle },
        { label: 'API Reference', href: '/api', icon: Code }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-300' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Heart },
    { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
    { label: 'Team Members', value: '50+', icon: UsersIcon },
    { label: 'Countries Served', value: '25+', icon: GlobeIcon },
    { label: 'Years Experience', value: '10+', icon: AwardIcon },
    { label: 'Innovation Awards', value: '15+', icon: Star }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zion-cyan/5 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-3 h-3 bg-zion-cyan rounded-full opacity-40 shadow-glow-cyan"></div>
      </div>
      <div className="absolute top-20 right-20 animate-float-delayed">
        <div className="w-2 h-2 bg-zion-purple rounded-full opacity-40 shadow-glow-purple"></div>
      </div>
      <div className="absolute bottom-20 left-20 animate-float">
        <div className="w-4 h-4 bg-zion-pink rounded-full opacity-30 shadow-glow-pink"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-16"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 xl:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron gradient-text">Zion Tech Group</h3>
                  <p className="text-sm text-zion-gray-light">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-zion-gray-light mb-6 leading-relaxed">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with our comprehensive tech ecosystem.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-zion-gray-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-gray-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-gray-light">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-gray-light">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-lg transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="flex items-center space-x-2 text-zion-gray-light hover:text-zion-cyan transition-colors duration-200 group"
                      >
                        <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card max-w-2xl mx-auto text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Stay Updated with Innovation
            </h3>
            <p className="text-zion-gray-light mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                  required
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                type="submit"
                className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-gray-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Accordion for Small Screens */}
          <div className="lg:hidden mb-8">
            {footerSections.map((section) => (
              <div key={section.title} className="border-b border-zion-cyan/20">
                <button
                  onClick={() => toggleAccordion(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left text-white font-semibold"
                  aria-expanded={activeAccordion === section.title}
                >
                  <span>{section.title}</span>
                  <div className={`w-5 h-5 transition-transform duration-200 ${
                    activeAccordion === section.title ? 'rotate-180' : ''
                  }`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeAccordion === section.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-4 space-y-2">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.href}
                              className="flex items-center space-x-2 text-zion-gray-light hover:text-zion-cyan transition-colors duration-200 pl-4"
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20 bg-zion-slate-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-gray-light">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-zion-gray-light">Made with</span>
                <Heart className="w-4 h-4 text-zion-pink animate-pulse" />
                <span className="text-sm text-zion-gray-light">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-glow-blue-lg transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

// Helper component for building icon
const Building: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// Helper component for handshake icon
const Handshake: React.FC<{ className?: string }> = ({ className }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);