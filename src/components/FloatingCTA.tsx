import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { MessageCircle, 
  X, 
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  Star,
  Shield,
  Brain,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  TrendingUp,
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

const FloatingCTA: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show CTA after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)}, 5000);

    return () => clearTimeout(timer)}, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with an expert",
      action: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      action: "info@ziontechgroup.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a consultation",
      action: "Book Now",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const quickServices = [
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
      >
        <div className="relative">
          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? '✕' : '💬'}
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-20 right-0 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 min-w-[200px]"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-semibold">Contact Us</div>
                      <div className="text-sm text-gray-400">Get in touch</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/services"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">🚀</span>
                    <div>
                      <div className="font-semibold">Our Services</div>
                      <div className="text-sm text-gray-400">Explore solutions</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/quote"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">💰</span>
                    <div>
                      <div className="font-semibold">Get Quote</div>
                      <div className="text-sm text-gray-400">Request pricing</div>
                    </div>
                  </Link>
                  
                  <div className="border-t border-slate-600 pt-3">
                    <div className="text-center text-sm text-gray-400 mb-2">
                      Available 24/7
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-semibold">Online Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 max-w-2xl w-full border border-slate-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                  <p className="text-gray-300">We're here to help transform your business</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-600 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4 mb-8">
                {contactMethods.map((method, index)  => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-6 border border-slate-500 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                    <div className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors duration-300">
                      {method.action}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Access to Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickServices.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center p-4 bg-slate-700 rounded-xl border border-slate-500 hover:border-cyan-400 transition-all duration-300 group"
                    >
                      <service.icon className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span>500+ Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )};

export default FloatingCTA;
