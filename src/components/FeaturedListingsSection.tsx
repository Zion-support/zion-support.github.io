import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Zap,
  Rocket,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
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

const FeaturedListingsSection: React.FC = () => {
  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      category: "AI & Analytics",
      rating: 4.9,
      reviews: 127,
      price: "$2,500",
      duration: "2-3 weeks",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      link: "/ai-services/business-intelligence"
    },
    {
      id: 2,
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solution protecting your business from modern cyber threats",
      category: "Cybersecurity",
      rating: 4.8,
      reviews: 89,
      price: "$3,200",
      duration: "3-4 weeks",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "24/7 Monitoring"],
      link: "/cybersecurity/enterprise-suite"
    },
    {
      id: 3,
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud and optimize performance for maximum efficiency",
      category: "Cloud Solutions",
      rating: 4.7,
      reviews: 156,
      price: "$4,100",
      duration: "4-6 weeks",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      features: ["Migration Planning", "Performance Tuning", "Cost Optimization", "Ongoing Support"],
      link: "/cloud-solutions/migration"
    },
    {
      id: 4,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business processes and technology stack",
      category: "Consulting",
      rating: 4.9,
      reviews: 203,
      price: "$5,500",
      duration: "6-8 weeks",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: ["Strategy Development", "Process Optimization", "Change Management", "ROI Tracking"],
      link: "/consulting/digital-transformation"
    },
    {
      id: 5,
      title: "IoT Infrastructure Development",
      description: "Build scalable IoT solutions for smart cities, manufacturing, and connected devices",
      category: "Emerging Tech",
      rating: 4.6,
      reviews: 78,
      price: "$3,800",
      duration: "5-7 weeks",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      features: ["Device Management", "Data Analytics", "Security Protocols", "Scalability Planning"],
      link: "/emerging-tech/iot-infrastructure"
    },
    {
      id: 6,
      title: "Blockchain Business Solutions",
      description: "Implement blockchain technology to enhance transparency and efficiency in your operations",
      category: "Blockchain",
      rating: 4.5,
      reviews: 92,
      price: "$4,500",
      duration: "6-8 weeks",
      icon: Lock,
      color: "from-indigo-500 to-purple-500",
      features: ["Smart Contracts", "Supply Chain Tracking", "Digital Identity", "DeFi Integration"],
      link: "/blockchain/business-solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured Services & Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our most popular and highly-rated technology solutions that are transforming businesses worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">{service.category}</div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{service.rating}</span>
                        <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-600">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Our team can create a custom solution tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Request Custom Quote
              </Link>
              <Link 
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FeaturedListingsSection };
export default FeaturedListingsSection;