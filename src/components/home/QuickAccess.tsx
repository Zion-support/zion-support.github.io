import React from 'react';
import { motion    } from 'framer-motion';
import { Link    } from 'react-router-dom';
import { Brain, 
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
  VolumeX
   } from 'lucide-react';

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

// Removed unused:   const itemVariants = {
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
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Quick Access to Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Find the perfect solution for your business needs with our organized service categories
          </motion.p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index)    => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={link.link} className="block">
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 h-full border border-slate-500 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 bg-slate-600 px-2 py-1 rounded-full">
                      {link.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {link.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Categories Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Service Categories</h3>
            <p className="text-gray-300">Explore our comprehensive range of technology solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md: anygrid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index)    => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect solution or create a custom one for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Our Team
              </Link>
              <Link 
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </motion.div>
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
