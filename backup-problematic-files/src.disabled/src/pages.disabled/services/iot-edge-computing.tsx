import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Zap, 
  Brain, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Database,
  Atom,
  Rocket,
  Star,
  Award,
  MessageSquare,
  Video,
  Play,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  MailIcon,
  Phone,
  MapPin,
  Search,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars,
  Camera,
  Video2,
  Film,
  Tv,
  Radio,
  Speaker,
  Headphones,
  Mic,
  Phone2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Clock2,
  Calendar,
  Calendar2,
  User,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2
} from 'lucide-react';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Real-time data processing at the network edge for instant insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless connection of devices across multiple protocols and networks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Low Latency',
      description: 'Ultra-fast response times for critical real-time applications',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Intelligent decision-making directly on IoT devices and edge nodes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security protocols for distributed edge computing environments',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distributed edge infrastructure for worldwide coverage and reliability',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Intelligent urban infrastructure with real-time monitoring and control',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation and predictive maintenance systems',
      icon: Factory,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Connected Vehicles',
      description: 'Autonomous driving and intelligent transportation systems',
      icon: Car,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Smart Homes',
      description: 'Automated home systems with edge-based intelligence',
      icon: Home,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    'Edge Computing Platforms & Frameworks',
    'IoT Device Management & Provisioning',
    'Real-time Data Processing & Analytics',
    'Edge AI & Machine Learning Models',
    '5G & Low-Power Wide-Area Networks',
    'Edge Security & Privacy Protection',
    'Distributed Computing & Load Balancing',
    'Edge-to-Cloud Data Synchronization',
    'IoT Protocol Support (MQTT, CoAP, HTTP)',
    'Edge Device Monitoring & Management'
  ];

  const benefits = [
    'Reduce latency by 90% compared to cloud-only solutions',
    'Lower bandwidth costs by processing data locally',
    'Enable real-time decision making and automation',
    'Improve reliability with distributed edge infrastructure',
    'Enhance privacy by keeping sensitive data local',
    'Scale IoT deployments efficiently and cost-effectively',
    'Support offline operation and intermittent connectivity',
    'Enable new use cases requiring real-time response'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              IoT Edge Computing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Computing at the
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                {' '}Edge of Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your IoT infrastructure with edge computing that brings 
              intelligence closer to your devices. Enable real-time processing, 
              reduce latency, and unlock new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Build Edge Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Edge Computing Demo
                <Cpu className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our edge computing platform delivers the performance, reliability, 
              and intelligence needed for next-generation IoT applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Edge Computing Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From smart cities to industrial automation, edge computing enables 
              innovative solutions across diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${useCase.color} w-fit mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technologies to provide reliable, scalable, 
              and secure edge computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the transformative benefits of edge computing that 
              revolutionize IoT deployments and enable new capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build at the Edge?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join leading organizations that are already leveraging edge computing 
              to transform their IoT infrastructure and enable new capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Edge Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Edge Team
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}