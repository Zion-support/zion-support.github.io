
import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { SEO } from '@/components/SEO';
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
<<<<<<< HEAD
  Globe, 
  Users,
  TrendingUp,
  Shield,
  Award,
  Target,
  Brain,
  Cloud,
  Zap,
=======
  Users, 
  Award, 
  TrendingUp,
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  ArrowRight,
  CheckCircle,
  Star,
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
<<<<<<< HEAD
  Layers,
  Layout,
  LifeBuoy,
  Link as LinkIcon,
  Link2,
  List,
  Loader,
  Loader2,
  Lock2,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  Menu,
  MessageSquare,
=======
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  Mic,
  MicOff,
  Volume2,
  VolumeX,
<<<<<<< HEAD
  Watch,
  Wifi2,
  WifiOff,
  Wind,
  X,
  XCircle,
  XSquare,
  Youtube,
  Zap2,
  ZoomIn,
  ZoomOut
=======
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
<<<<<<< HEAD
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      color: "from-zion-cyan to-zion-blue"
=======
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
    },
    {
      icon: Award,
      value: "99%",
      label: "Client Satisfaction",
      description: "Proven track record"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and forward-thinking solutions that drive business transformation."
    },
    {
      icon: Shield,
      title: "Excellence & Quality",
      description: "Every project we undertake is executed with the highest standards of quality, security, and performance."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work closely with our clients to understand their needs and deliver solutions that exceed expectations."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Our solutions are designed to scale and adapt to future technological advancements and business needs."
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in technology innovation and business transformation.",
      expertise: ["AI & Machine Learning", "Strategic Planning", "Business Development"]
    },
    {
      name: "AI Team",
      role: "AI Research & Development",
      description: "Expert team specializing in cutting-edge artificial intelligence and machine learning solutions.",
      expertise: ["Neural Networks", "Computer Vision", "Natural Language Processing"]
    },
    {
<<<<<<< HEAD
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize advanced technology."
    },
    {
      year: "2021",
      title: "AI Breakthrough",
      description: "Launched our first AI-powered business solutions platform."
    },
    {
      year: "2022",
      title: "Quantum Initiative",
      description: "Started quantum computing research and development program."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries worldwide."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and quantum technology solutions."
=======
      name: "Security Team",
      role: "Cybersecurity Specialists",
      description: "Dedicated professionals ensuring the highest levels of digital security and compliance.",
      expertise: ["Threat Detection", "Zero Trust Architecture", "Compliance"]
    },
    {
      name: "Development Team",
      role: "Software Engineers",
      description: "Skilled developers creating robust, scalable, and innovative software solutions.",
      expertise: ["Full-Stack Development", "Cloud Architecture", "DevOps"]
    }
  ];

  const technologies = [
    {
      category: "Artificial Intelligence",
      items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "AI Ethics"]
    },
    {
      category: "Cybersecurity",
      items: ["Zero Trust", "Threat Intelligence", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Multi-Cloud", "DevOps", "Containerization", "Serverless", "Edge Computing"]
    },
    {
      category: "Emerging Tech",
      items: ["Quantum Computing", "Blockchain", "IoT", "5G", "Biotechnology"]
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-zion-cyan">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We are a global technology company dedicated to transforming businesses through cutting-edge AI solutions, 
              quantum computing, and comprehensive IT services. Our mission is to democratize access to advanced 
              technology and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-zion-cyan mb-1">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI, cybersecurity, and emerging technology solutions."
        keywords="about us, company, mission, vision, team, expertise, AI, cybersecurity, technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transforming Business Through
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Zion Tech Group is a leading technology company dedicated to empowering businesses 
                with cutting-edge AI solutions, cybersecurity excellence, and digital transformation services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                    to leverage the power of AI, cybersecurity, and emerging technologies to achieve sustainable growth 
                    and competitive advantage in the digital economy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI-powered business solutions, pioneering the next generation 
                    of technology that transforms how businesses operate, compete, and thrive in an increasingly 
                    digital and AI-driven world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we deliver
              </p>
            </motion.div>
<<<<<<< HEAD

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Vision</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the global leader in AI consciousness, quantum computing, and autonomous solutions that 
                transform how businesses operate and compete in the digital economy.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where AI and quantum technologies work seamlessly together to solve humanity's 
                greatest challenges, from climate change to healthcare, while driving unprecedented business innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Leadership</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              World-class experts leading the charge in AI, quantum computing, and technology innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology and business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-2">{milestone.title}</h4>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-zion-cyan to-zion-purple mx-8"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
=======
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate experts dedicated to delivering exceptional technology solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                  <div className="text-blue-400 text-center mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm mb-4 text-center">{member.description}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's work together to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
=======
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function About() {
	return (
		<>
			<SEO
				title="About Zion - The Future of AI & Tech Marketplace"
				description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence."
				keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
				canonical="https://ziontechgroup.com/about"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>About Zion</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							The world's first free marketplace dedicated to high-tech and artificial intelligence
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions.
								We believe that innovation thrives when barriers are removed and connections are made.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Our platform brings together talented AI specialists, innovative companies, and the latest
								technological solutions in one seamless ecosystem.
							</p>
							<p className="text-zion-slate-light text-lg">
								By connecting talent with opportunity and innovation with implementation, we're creating
								a global community where the future of technology is being built today.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
								alt="Team collaboration"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								We envision a world where AI and technology are accessible to all, regardless of geographical
								or financial constraints. A world where the best minds can collaborate to solve the most
								challenging problems.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Zion is building that world by creating a transparent, ethical, and inclusive platform
								that puts people at the center of technological advancement.
							</p>
							<p className="text-zion-slate-light text-lg">
								Our goal is to become the premier destination for AI and tech innovation, fostering
								a community that shapes the future of how we live, work, and interact with technology.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden lg:order-first">
							<img
								src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
								alt="Tech innovation"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
								<p className="text-zion-slate-light">
									We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
								</p>
							</div>
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Community</h3>
								<p className="text-zion-slate-light">
									We foster a collaborative environment where diverse perspectives and expertise come together to create something extraordinary.
								</p>
							</div>
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Trust</h3>
								<p className="text-zion-slate-light">
									We build and maintain trust through transparency, ethical practices, and reliable service delivery.
								</p>
							</div>
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-3xl font-bold text-white mb-8">Join Our Mission</h2>
						<p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
							Whether you're an AI specialist looking to showcase your skills, a company seeking innovative solutions, 
							or someone passionate about the future of technology, Zion is the place for you.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/services"
								className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
							>
								Explore Our Services
							</a>
							<a
								href="/contact"
								className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
							>
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
=======
        {/* Technology Expertise */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technology Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive knowledge across cutting-edge technologies and industry best practices
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our expertise and innovative solutions can transform your business 
                and drive sustainable growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
