import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
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
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
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
  ChevronRight,
  Star} from 'lucide-react';

const QuickAccess: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const quickLinks = [
    {
      title: "AI Services",
      description: "Machine Learning & Analytics",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20",
      path: "/ai-services",
      features: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      stats: { projects: "150+", accuracy: "95%", clients: "50+" }
    },
    {
      title: "IT Infrastructure",
      description: "Cloud & DevOps Solutions",
      icon: Server,
      color: "from-zion-blue to-zion-purple",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20",
      path: "/it-services",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "24/7 Monitoring"],
      stats: { uptime: "99.99%", savings: "40%", response: "<5min" }
    },
    {
      title: "Cybersecurity",
      description: "Advanced Security Solutions",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20",
      path: "/services/cybersecurity",
      features: ["Zero Trust Architecture", "Threat Detection", "Incident Response", "Compliance"],
      stats: { threats: "1000+", response: "<2min", coverage: "100%" }
    },
    {
      title: "Digital Transformation",
      description: "Business Process Optimization",
      icon: Rocket,
      color: "from-zion-cyan to-zion-purple",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20",
      path: "/services/digital-transformation",
      features: ["Process Automation", "Workflow Optimization", "Change Management", "ROI Tracking"],
      stats: { efficiency: "300%", cost: "60%", time: "80%" }
    },
    {
      title: "Green IT",
      description: "Sustainable Technology",
      icon: Globe,
      color: "from-zion-blue to-zion-cyan",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20",
      path: "/services/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      stats: { energy: "60%", carbon: "75%", savings: "40%" }
    },
    {
      title: "Micro SaaS",
      description: "Ready-to-Deploy Solutions",
      icon: Code,
      color: "from-zion-purple to-zion-cyan",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20",
      path: "/micro-saas",
      features: ["AI Lead Scoring", "Customer Feedback", "Compliance Tools", "Analytics"],
      stats: { solutions: "25+", deployment: "<1hr", success: "90%" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Quick Access</span>
            <Star className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Explore Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (<a key={index} href={link.href} className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center`}>
                  <link.icon className="w-6 h-6 text-white"/>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"/>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {link.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {link.description}
              </p>
            </a>))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2"/>
          </a>
        </div>
      </div>
    </section>);
};
