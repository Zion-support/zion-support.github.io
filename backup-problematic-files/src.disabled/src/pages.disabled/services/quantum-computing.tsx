import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
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
  City,
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

export default function QuantumComputing() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Harness the power of quantum bits for exponential computational speed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Quantum AI',
      description: 'Combine quantum computing with artificial intelligence for breakthrough insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution and entanglement',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems in seconds instead of years',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Quantum Machine Learning',
      description: 'Accelerate ML algorithms with quantum-enhanced processing',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Quantum Networking',
      description: 'Secure quantum communication networks for ultra-fast data transfer',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const applications = [
    {
      title: 'Financial Modeling',
      description: 'Revolutionize risk assessment, portfolio optimization, and trading strategies',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerate pharmaceutical research with quantum molecular simulations',
      icon: Microscope,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Climate Modeling',
      description: 'Complex climate simulations for accurate environmental predictions',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Solve logistics problems with quantum optimization algorithms',
      icon: Network,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    'Superconducting Qubits & Quantum Circuits',
    'Quantum Error Correction & Fault Tolerance',
    'Quantum Entanglement & Superposition',
    'Quantum Gates & Quantum Algorithms',
    'Cryogenic Systems & Quantum Control',
    'Quantum-Classical Hybrid Computing',
    'Quantum Software Development Kits',
    'Quantum Cloud Computing Platforms',
    'Quantum Sensing & Metrology',
    'Post-Quantum Cryptography'
  ];

  const benefits = [
    'Solve problems 100x faster than classical computers',
    'Enable breakthroughs in scientific research',
    'Revolutionize financial modeling and optimization',
    'Accelerate drug discovery and materials science',
    'Provide unbreakable quantum encryption',
    'Enable quantum machine learning applications',
    'Transform logistics and supply chain optimization',
    'Advance artificial intelligence capabilities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              Quantum Computing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Future of Computing is
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Quantum
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience the power of quantum computing that solves previously 
              impossible problems. Our quantum solutions deliver exponential 
              performance gains for complex computational challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Quantum Demo
                <Atom className="w-5 h-5" />
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
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum platform delivers unprecedented computational power 
              for the most challenging problems in science and business.
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
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
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

      {/* Applications Section */}
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
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing transforms industries by solving problems that 
              were previously impossible with classical computers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${application.color} w-fit mb-6`}>
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {application.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {application.description}
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
              Advanced Quantum Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge quantum technologies and research-backed 
              methodologies for reliable quantum computing solutions.
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
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
              Quantum Advantage Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the transformative power of quantum computing that 
              delivers exponential performance improvements and breakthrough solutions.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join leading organizations that are already leveraging quantum 
              computing to solve the world's most complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Quantum Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Quantum Team
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}