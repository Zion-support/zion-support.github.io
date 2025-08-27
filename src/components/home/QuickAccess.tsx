import React from 'react';
import { motion } from 'framer-motion';
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
  VolumeX
} from 'lucide-react';

const QuickAccess: React.FC = () => {
  const quickLinks = [
    {
      title: "AI Services",
      description: "Machine Learning & Analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/ai-services",
      category: "Technology"
    },
    {
      title: "Cybersecurity",
      description: "Protection & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "/cybersecurity",
      category: "Security"
    },
    {
      title: "Cloud Solutions",
      description: "Migration & Optimization",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      link: "/cloud-solutions",
      category: "Infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "Business Process Automation",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      link: "/digital-transformation",
      category: "Consulting"
    },
    {
      title: "IoT & Blockchain",
      description: "Emerging Technologies",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      link: "/emerging-tech",
      category: "Innovation"
    },
    {
      title: "Enterprise Solutions",
      description: "Large-scale Implementations",
      icon: Building,
      color: "from-indigo-500 to-purple-500",
      link: "/enterprise",
      category: "Business"
    }
  ];

  const categories = [
    { name: "Technology", count: 15, color: "from-purple-500 to-pink-500" },
    { name: "Security", count: 8, color: "from-red-500 to-orange-500" },
    { name: "Infrastructure", count: 12, color: "from-blue-500 to-cyan-500" },
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
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
    </section>
  );
};

export { QuickAccess };
