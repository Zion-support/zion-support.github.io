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
<<<<<<< HEAD
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
<<<<<<< HEAD
  Truck,
  Package,
  FileText,
=======
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
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
=======
  Leaf,
  Space,
  Handshake,
  Calendar,
  FileText,
  BarChart3,
  Video
>>>>>>> add-innovative-services-2025
} from 'lucide-react';

<<<<<<< HEAD
const footerSections = {
  aiServices: {
    title: 'AI Services',
    items: [
<<<<<<< HEAD
      { name: 'AI Autonomous Trading', href: '/ai-services/autonomous-trading', icon: DollarSign, description: 'AI-powered financial trading platform' },
      { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Quantum AI consciousness research' },
      { name: 'AI Business Operations', href: '/ai-services/business-operations', icon: Building, description: 'Autonomous business management' },
      { name: 'AI Healthcare Diagnosis', href: '/ai-services/healthcare-diagnosis', icon: Heart, description: 'AI-powered medical diagnosis' },
      { name: 'AI Content Creation', href: '/ai-services/content-creation', icon: FileText, description: 'Autonomous content generation' },
      { name: 'AI Supply Chain', href: '/ai-services/supply-chain', icon: Truck, description: 'AI-powered supply chain optimization' }
=======
      { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Advanced AI consciousness research platform' },
=======
const footerNavigation = {
  cuttingEdgeInnovations: {
    title: 'Cutting-Edge Innovations',
    items: [
      { name: 'AI Business Automation Suite', href: '/innovative-services#ai-automation', icon: Brain, description: 'AI-powered business process automation' },
      { name: 'Quantum Computing as a Service', href: '/innovative-services#quantum-computing', icon: Atom, description: 'Quantum computing solutions' },
      { name: 'Enterprise Blockchain Platform', href: '/innovative-services#blockchain', icon: Lock, description: 'Enterprise blockchain solutions' },
      { name: 'IoT Edge Computing Platform', href: '/innovative-services#iot-edge', icon: Wifi, description: 'IoT and edge computing platform' },
      { name: 'Zero Trust Cybersecurity', href: '/innovative-services#cybersecurity', icon: Shield, description: 'Advanced cybersecurity platform' },
      { name: 'Digital Twin Technology', href: '/innovative-services#digital-twin', icon: Eye, description: 'Digital twin and simulation platform' },
      { name: 'Metaverse & VR Platform', href: '/innovative-services#metaverse', icon: Globe2, description: 'Metaverse and virtual reality platform' },
      { name: 'Green Tech Solutions', href: '/innovative-services#green-tech', icon: Leaf, description: 'Sustainability and green technology' }
    ],
  },
  aiServices: {
    title: 'AI Services',
    items: [
      { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Advanced AI consciousness research' },
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
      { name: 'Quantum Emotion Processor', href: '/ai-services/quantum-emotion', icon: Heart, description: 'Quantum-powered emotional intelligence' },
      { name: 'AI Autonomous Systems', href: '/ai-services/autonomous-systems', icon: Cpu, description: 'Self-managing AI infrastructure' },
      { name: 'Neural Network Architect', href: '/ai-services/neural-architect', icon: Network, description: 'Custom neural network design' },
      { name: 'AI Ethics Framework', href: '/ai-services/ai-ethics', icon: Shield, description: 'Ethical AI development tools' },
      { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics', icon: TrendingUp, description: 'AI-powered business insights' }
<<<<<<< HEAD
>>>>>>> add-innovative-services-2025
=======
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
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
    ],
  },
  itServices: {
    title: 'IT Services',
    items: [
      { name: 'Infrastructure Management', href: '/services/infrastructure', icon: Server, description: 'Complete infrastructure solutions' },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Digital transformation consulting' },
      { name: 'IT Consulting', href: '/services/consulting', icon: Users, description: 'Expert IT consulting services' },
      { name: 'Enterprise IT', href: '/services/enterprise-it', icon: Building, description: 'Enterprise-grade IT solutions' },
      { name: 'Green IT Solutions', href: '/services/green-it', icon: Leaf, description: 'Sustainable IT infrastructure' },
      { name: 'Space Technology', href: '/services/space-technology', icon: Space, description: 'Space tech solutions' }
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Business Solutions', href: '/solutions/business', icon: Briefcase, description: 'Comprehensive business solutions' },
      { name: 'Technology Solutions', href: '/solutions/technology', icon: Cpu, description: 'Advanced technology solutions' },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: Building, description: 'Industry-specific solutions' },
      { name: 'Innovation Hub', href: '/solutions/innovation', icon: Lightbulb, description: 'Innovation and R&D services' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Learn about our mission and values' },
      { name: 'Team', href: '/team', icon: Users, description: 'Meet our expert team' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
      { name: 'News', href: '/news', icon: FileText, description: 'Latest company updates' },
      { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming events' }
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights and articles' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories and results' },
      { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research and analysis' },
      { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational webinars' },
      { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { name: 'Support', href: '/support', icon: HelpCircle, description: 'Technical support and help' }
    ],
  },
  support: {
    title: 'Support & Legal',
    items: [
      { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: '24/7 customer support' },
      { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Comprehensive help resources' },
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
                  Leading the future of technology with cutting-edge AI services, innovative solutions, 
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

<<<<<<< HEAD
            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-white mb-4"
                >
                  {section.title}
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {section.items.map((item, index) => (
                    <motion.li
                      key={index}
=======
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
                  <span>{section.title}</span>
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={item.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm flex items-center space-x-2 group"
                      >
                        <item.icon className="w-3 h-3 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-zion-slate-light text-sm">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};