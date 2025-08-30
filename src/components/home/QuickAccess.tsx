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
  Star,
  Sparkles
} from 'lucide-react';

const QuickAccess: React.FC = () => {;
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
      borderColor: "border-zion-purple/20",;
      path: "/micro-saas",;
      features: ["AI Lead Scoring", "Customer Feedback", "Compliance Tools", "Analytics"],;
      stats: { solutions: "25+", deployment: "<1hr", success: "90%" };
    };
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 20,
  scale: 0.95 




},
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {;
        duration: 0.5,;
        ease: "easeOut";
      };
    };
  };

  const hoverVariants = {
  hover: { 
      y: -8, 
      scale: 1.02,
      transition: {
        duration: 0.3,
  ease: "easeOut"
      ;
;
;


};
    };
  };

  return (
    <section className = "py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 




}}
          whileInView = {
  { opacity: 1,
  y: 0 




}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {
  { duration: 0.6,
  delay: 0.2 




}}
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
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access cutting-edge technology solutions designed to transform your business. 
            From AI-powered insights to sustainable IT infrastructure, we have everything you need.
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              variants={hoverVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCategory(link.title)}
              onHoverEnd={() => setHoveredCategory(null)}
              onClick={() => setSelectedCategory(selectedCategory === link.title ? null : link.title)}
              className={`group cursor-pointer ${link.bgColor} ${link.borderColor} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25`}
            >
              {/* Icon and Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <link.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: hoveredCategory === link.title ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-zion-cyan transition-colors" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>

              {/* Features Preview */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {link.features.slice(0, 2).map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial = {
  { opacity: 0,
  x: -10 




}}
                      whileInView = {
  { opacity: 1,
  x: 0 




}}
                      transition = {
  { duration: 0.4,
  delay: 0.1 + idx * 0.1 




}}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-xs text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      <span className="truncate">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm">
                  {Object.entries(link.stats).slice(0, 2).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial = {
  { opacity: 0,
  scale: 0.8 




}}
                      whileInView = {
  { opacity: 1,
  scale: 1 




}}
                      transition = {
  { duration: 0.4,
  delay: 0.2 + idx * 0.1 




}}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-lg font-bold text-zion-cyan">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto"
              >
                <Link
                  to={link.path}
                  className={`inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${link.color} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25`}
                >
                  Explore {link.title}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 




}}
          whileInView = {
  { opacity: 1,
  y: 0 




}}
          transition = {
  { duration: 0.8,
  delay: 0.4 




}}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation, 
              improve efficiency, and create sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-300"
              >
                View All Services
              </Link>
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
};

export default QuickAccess;
