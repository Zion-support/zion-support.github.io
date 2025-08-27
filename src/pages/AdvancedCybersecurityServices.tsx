import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Key, 
  Search,
  ChevronDown,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Cpu,
  Database,
  Network,
  Code,
  Atom,
  Brain,
  Zap,
  AlertTriangle,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
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
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Users,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Globe2,
  Zap2,
  Shield2,
  Lock2,
  Eye2,
  Fingerprint2,
  Key2
} from 'lucide-react';
import { ADVANCED_CYBERSECURITY_SERVICES_2027 } from '../data/advancedCybersecurityServices2027';

const AdvancedCybersecurityServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('innovation');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Security', icon: Shield, color: 'from-blue-500 to-purple-600' },
    { id: 'AI Security', name: 'AI Security', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Quantum Security', name: 'Quantum Security', icon: Atom, color: 'from-indigo-500 to-blue-600' },
    { id: 'Network Security', name: 'Network Security', icon: Network, color: 'from-green-500 to-teal-600' },
    { id: 'Endpoint Security', name: 'Endpoint Security', icon: Monitor, color: 'from-orange-500 to-red-600' },
    { id: 'Cloud Security', name: 'Cloud Security', icon: Cloud, color: 'from-yellow-500 to-orange-600' }
  ];

  const filteredServices = ADVANCED_CYBERSECURITY_SERVICES_2027.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricing.monthly - b.pricing.monthly;
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      default:
        return 0;
    }
  });

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'from-red-500 to-pink-600';
      case 'Breakthrough': return 'from-purple-500 to-indigo-600';
      case 'Advanced': return 'from-blue-500 to-cyan-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Revolutionary': return 'bg-gradient-to-r from-red-500 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getSecurityIcon = (category: string) => {
    switch (category) {
      case 'AI Security': return Brain;
      case 'Quantum Security': return Atom;
      case 'Network Security': return Network;
      case 'Endpoint Security': return Monitor;
      case 'Cloud Security': return Cloud;
      default: return Shield;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Security Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Security Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center animate-pulse">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center animate-bounce">
                <Lock className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
            Advanced Cybersecurity Services 2027
          </h1>
          <p className="text-xl md:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto">
            Protect your digital assets with cutting-edge cybersecurity solutions. 
            From AI-powered threat detection to quantum cryptography, we deliver military-grade security for the modern world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan/20">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-gray-light">Military-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple/20">
              <Brain className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-gray-light">AI-Powered Protection</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-slate-dark/50 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-pink/20">
              <Atom className="w-5 h-5 text-zion-pink" />
              <span className="text-zion-gray-light">Quantum-Secured</span>
            </div>
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Shield, label: 'Threats Blocked', value: '99.9%', color: 'from-green-500 to-emerald-600' },
            { icon: Eye, label: '24/7 Monitoring', value: 'Always On', color: 'from-blue-500 to-cyan-600' },
            { icon: Lock, label: 'Encryption', value: 'AES-256', color: 'from-purple-500 to-indigo-600' },
            { icon: Brain, label: 'AI Detection', value: '10x Faster', color: 'from-orange-500 to-red-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-gray-dark">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-zion-cyan/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search cybersecurity services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl px-4 py-3 text-zion-gray-light placeholder-zion-gray-dark focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-gray-dark" />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl px-4 py-3 text-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-gray-dark pointer-events-none" />
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-xl px-4 py-3 text-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 appearance-none"
              >
                <option value="innovation">Sort by Innovation Level</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-gray-dark pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                  : 'bg-zion-slate-dark/30 border-zion-cyan/20 text-zion-gray-light hover:border-zion-cyan/40 hover:bg-zion-slate-dark/50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zion-slate-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className={`absolute -top-3 right-6 ${getBadgeColor(service.badge)} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                {service.badge}
              </div>

              {/* Security Icon */}
              <div className="text-6xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-zion-gray-light mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zion-gray-dark mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="bg-zion-slate-dark/30 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zion-gray-dark">Monthly</span>
                  <span className="text-2xl font-bold text-zion-cyan">
                    ${service.pricing.monthly.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-zion-gray-dark">
                  <span>Yearly</span>
                  <span className="text-zion-purple">
                    ${service.pricing.yearly.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Security Features */}
              <div className="mb-4">
                <h4 className="text-zion-gray-light font-semibold mb-2">Security Features:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zion-gray-dark">
                    <Shield className="w-4 h-4 text-zion-cyan" />
                    {service.securityFeatures.threatDetection}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-gray-dark">
                    <Lock className="w-4 h-4 text-zion-purple" />
                    {service.securityFeatures.encryption}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-gray-dark">
                    <Eye className="w-4 h-4 text-zion-pink" />
                    {service.securityFeatures.monitoring}
                  </div>
                </div>
              </div>

              {/* Compliance */}
              <div className="mb-4">
                <h4 className="text-zion-gray-light font-semibold mb-2">Compliance:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.securityFeatures.compliance.slice(0, 3).map((comp, idx) => (
                    <span key={idx} className="bg-zion-slate-dark/30 text-zion-gray-dark text-xs px-2 py-1 rounded-full">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* ROI and Market Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="text-center">
                  <div className="text-zion-gray-dark">ROI</div>
                  <div className="text-zion-green font-semibold">{service.roi}</div>
                </div>
                <div className="text-center">
                  <div className="text-zion-gray-dark">Market Size</div>
                  <div className="text-zion-purple font-semibold">{service.marketSize}</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-zion-slate-dark/20 rounded-xl p-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-gray-dark mb-1">
                  <Phone className="w-4 h-4" />
                  {service.contactInfo.phone}
                </div>
                <div className="flex items-center gap-2 text-zion-gray-dark">
                  <Mail className="w-4 h-4" />
                  {service.contactInfo.email}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/20">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-zion-gray-light mb-6">
              Ready to Fortify Your Digital Defenses?
            </h2>
            <p className="text-xl text-zion-gray-dark mb-8 max-w-3xl mx-auto">
              Don't wait for a breach to happen. Our cybersecurity experts are ready to help you 
              implement the most advanced security solutions and protect your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Security Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Security Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedCybersecurityServices;