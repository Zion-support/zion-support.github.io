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
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Briefcase,
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
  TrendingUp,
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
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Truck,
  Package,
  FileText,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

const footerNavigation = {
  aiServices: {
    title: 'AI Services',
    items: [
      { name: 'AI Autonomous Trading', href: '/ai-services/autonomous-trading', icon: DollarSign, description: 'AI-powered financial trading platform' },
      { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Quantum AI consciousness research' },
      { name: 'AI Business Operations', href: '/ai-services/business-operations', icon: Building, description: 'Autonomous business management' },
      { name: 'AI Healthcare Diagnosis', href: '/ai-services/healthcare-diagnosis', icon: Heart, description: 'AI-powered medical diagnosis' },
      { name: 'AI Content Creation', href: '/ai-services/content-creation', icon: FileText, description: 'Autonomous content generation' },
      { name: 'AI Supply Chain', href: '/ai-services/supply-chain', icon: Truck, description: 'AI-powered supply chain optimization' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: BarChart3, description: 'Intelligent business analytics' },
      { name: 'Customer Experience Hub', href: '/micro-saas/customer-experience', icon: Users, description: '360° customer journey management' },
      { name: 'Quantum Computing Suite', href: '/micro-saas/quantum-computing', icon: Atom, description: 'Quantum computing solutions' },
      { name: 'Supply Chain Optimizer', href: '/micro-saas/supply-chain', icon: Globe, description: 'AI-powered supply chain management' },
      { name: 'Cybersecurity Platform', href: '/micro-saas/cybersecurity', icon: ShieldCheck, description: 'Advanced threat protection' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge computing solutions' },
      { name: 'Content Creation AI', href: '/micro-saas/content-creation', icon: FileText, description: 'AI-powered content generation' },
      { name: 'HR Management Suite', href: '/micro-saas/hr-platform', icon: Briefcase, description: 'Modern HR management platform' }
    ],
  },
  itServices: {
    title: 'IT Services',
    items: [
      { name: 'Infrastructure Management', href: '/it-services/infrastructure', icon: Server, description: 'Complete infrastructure solutions' },
      { name: 'Digital Transformation', href: '/it-services/digital-transformation', icon: Zap, description: 'Digital transformation consulting' },
      { name: 'IT Consulting', href: '/it-services/consulting', icon: Users, description: 'Expert IT consulting services' },
      { name: 'Onsite Support', href: '/it-services/onsite-support', icon: Wifi, description: '24/7 onsite technical support' },
      { name: 'Green IT Solutions', href: '/it-services/green-it', icon: Heart, description: 'Sustainable IT infrastructure' },
      { name: '5G Network Solutions', href: '/it-services/5g-solutions', icon: Satellite, description: 'Next-gen network infrastructure' }
    ],
  },
  emergingTech: {
    title: 'Emerging Tech',
    items: [
      { name: 'Quantum Computing', href: '/emerging-tech/quantum-computing', icon: Atom, description: 'Quantum computing solutions' },
      { name: 'Blockchain & DeFi', href: '/emerging-tech/blockchain-defi', icon: Lock, description: 'Blockchain and DeFi platforms' },
      { name: 'Space Technology', href: '/emerging-tech/space-tech', icon: Satellite, description: 'Space technology innovations' },
      { name: 'Biotechnology', href: '/emerging-tech/biotech', icon: Dna, description: 'Biotech and healthcare solutions' },
      { name: 'Nanotechnology', href: '/emerging-tech/nanotech', icon: Microscope, description: 'Nanotechnology applications' },
      { name: 'Augmented Reality', href: '/emerging-tech/ar-vr', icon: Eye, description: 'AR/VR development services' }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'AI Products', href: '/marketplace/ai-products', icon: Brain, description: 'AI-powered products and tools' },
      { name: 'IT Equipment', href: '/marketplace/it-equipment', icon: Monitor, description: 'Professional IT equipment' },
      { name: 'Software Solutions', href: '/marketplace/software', icon: Code, description: 'Enterprise software solutions' },
      { name: 'Professional Services', href: '/marketplace/services', icon: Briefcase, description: 'Expert professional services' },
      { name: 'Talent Network', href: '/marketplace/talent', icon: Users, description: 'Skilled professionals network' },
      { name: 'Innovation Hub', href: '/marketplace/innovation', icon: Lightbulb, description: 'Innovation and R&D services' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Learn about our mission and values' },
      { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and updates' },
      { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with us' },
      { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation guide' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Comprehensive help resources' },
      { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: '24/7 customer support' },
      { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Legal terms and conditions' },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection and privacy' },
      { name: 'Security', href: '/security', icon: ShieldCheck, description: 'Security measures and protocols' },
      { name: 'System Status', href: '/status', icon: Activity, description: 'Real-time system status' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-zion-cyan/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                      ZION TECH GROUP
                    </h3>
                    <p className="text-sm text-zion-slate-light">Innovation • Intelligence • Impact</p>
                  </div>
                </div>
                
                <p className="text-zion-slate-light leading-relaxed">
                  Leading the future of technology with cutting-edge AI services, innovative micro SAAS solutions, 
                  and comprehensive IT services. Empowering businesses to thrive in the digital age.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Phone className="w-4 h-4 text-zion-cyan" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-zion-cyan transition-colors duration-300">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Mail className="w-4 h-4 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors duration-300">
                      {contactInfo.website.replace('https://', '')}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 text-zion-cyan" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-zion-slate-light ${social.color} hover:bg-zion-cyan/10 hover:border-zion-cyan/40 transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation sections */}
            {Object.entries(footerNavigation).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-zion-cyan flex items-center space-x-2">
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={item.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm leading-relaxed block group"
                      >
                        <div className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                          <item.icon className="w-3 h-3 text-zion-cyan mt-1 flex-shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-xs text-zion-slate-light/70 mt-1 ml-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg text-white shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};