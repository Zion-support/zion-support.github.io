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
  Send,
  ArrowRight,
  Star,
  TrendingUp,
  Shield as SecurityIcon,
  Lock,
  Database,
  Network,
  Cpu,
  BarChart3,
  FileText,
  Video,
  BookOpen,
  HelpCircle,
  MessageCircle,
  Handshake,
  Briefcase,
  FileImage,
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
  Play,
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  Truck,
  LifeBuoy,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/ziontechgroup", 
      icon: Linkedin, 
      color: "hover:bg-blue-600/20 hover:text-blue-400" 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/ziontechgroup", 
      icon: Twitter, 
      color: "hover:bg-sky-500/20 hover:text-sky-400" 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Zion-Holdings", 
      icon: Github, 
      color: "hover:bg-gray-600/20 hover:text-gray-400" 
    },
    { 
      name: "YouTube", 
      url: "https://www.youtube.com/@ziontechgroup", 
      icon: Video, 
      color: "hover:bg-red-600/20 hover:text-red-400" 
    },
    { 
      name: "Discord", 
      url: "https://discord.gg/ziontechgroup", 
      icon: MessageCircle, 
      color: "hover:bg-indigo-600/20 hover:text-indigo-400" 
    }
  ];

  const footerSections = [
    {
      title: "Core Services",
      icon: Zap,
      links: [
        { label: "AI Solutions", path: "/services/ai", icon: Brain },
        { label: "Cybersecurity", path: "/services/cybersecurity", icon: Shield },
        { label: "Cloud & DevOps", path: "/services/cloud-devops", icon: Cloud },
        { label: "Digital Transformation", path: "/services/digital-transformation", icon: Rocket },
        { label: "IoT Services", path: "/services/iot", icon: Network },
        { label: "Blockchain", path: "/services/blockchain", icon: Lock }
      ]
    },
    {
      title: "Solutions",
      icon: Building,
      links: [
        { label: "Healthcare", path: "/solutions/healthcare", icon: Heart },
        { label: "Finance", path: "/solutions/finance", icon: BarChart3 },
        { label: "Manufacturing", path: "/solutions/manufacturing", icon: Cpu },
        { label: "Retail", path: "/solutions/retail", icon: ShoppingCart },
        { label: "Energy", path: "/solutions/energy", icon: Zap },
        { label: "Transportation", path: "/solutions/transportation", icon: Truck }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { label: "About Us", path: "/about", icon: Building },
        { label: "Our Team", path: "/about", icon: Users },
        { label: "Careers", path: "/careers", icon: Briefcase },
        { label: "News & Updates", path: "/news", icon: FileText },
        { label: "Case Studies", path: "/case-studies", icon: FileImage },
        { label: "Partners", path: "/partners", icon: Handshake }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { label: "Blog", path: "/blog", icon: FileText },
        { label: "Documentation", path: "/docs", icon: BookOpen },
        { label: "White Papers", path: "/white-papers", icon: FileText },
        { label: "Webinars", path: "/webinars", icon: Video },
        { label: "Research", path: "/research-development", icon: Microscope },
        { label: "Training", path: "/training", icon: GraduationCap }
      ]
    },
    {
      title: "Support",
      icon: HelpCircle,
      links: [
        { label: "Contact Us", path: "/contact", icon: MessageCircle },
        { label: "Help Center", path: "/help-center", icon: HelpCircle },
        { label: "Support Portal", path: "/support", icon: LifeBuoy },
        { label: "FAQ", path: "/faq", icon: HelpCircle },
        { label: "Request Quote", path: "/contact", icon: Send },
        { label: "Emergency Support", path: "/support/emergency", icon: AlertTriangle }
      ]
    }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "kleber@ziontechgroup.com", 
      href: "mailto:kleber@ziontechgroup.com",
      color: "text-zion-cyan hover:text-zion-cyan/80"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+1 302 464 0950", 
      href: "tel:+13024640950",
      color: "text-zion-purple hover:text-zion-purple/80"
    },
    { 
      icon: MapPin, 
      label: "Address", 
      value: "364 E Main St STE 1008, Middletown DE 19709", 
      href: "#",
      color: "text-zion-blue hover:text-zion-blue/80"
    },
    { 
      icon: Globe, 
      label: "Website", 
      value: "ziontechgroup.com", 
      href: "https://ziontechgroup.com",
      color: "text-zion-cyan hover:text-zion-cyan/80"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-zion-slate-light text-sm">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. From AI and cybersecurity 
                to cloud infrastructure and digital transformation, we're your partner in innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    variants={itemVariants}
                    className="flex items-center space-x-3 text-zion-slate-light hover:text-white transition-colors group"
                  >
                    <contact.icon className={`w-4 h-4 ${contact.color}`} />
                    <span className="text-sm">{contact.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-4">
                  <section.icon className="w-5 h-5 text-zion-cyan" />
                  <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                      >
                        <link.icon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-zion-slate to-zion-slate-dark rounded-2xl p-8 mb-12 border border-zion-cyan/20"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get the latest insights on AI, cybersecurity, and emerging technologies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zion-slate/20"
          >
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-zion-slate/20 text-zion-slate-light transition-all duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
