
import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
import { 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
<<<<<<< HEAD
  Shield,
  Award,
  Target,
  Brain,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
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
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Activity,
  AlertTriangle,
  CheckSquare,
  Clock,
  DollarSign,
  Download,
  EyeOff,
  File,
  FileCheck,
  FileX,
  Filter,
  Flag,
  Folder,
  FolderOpen,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe2,
  Hash,
  Headphones,
  HeartOff,
  HelpCircle2,
  Home,
  Image,
  Inbox,
  Info,
  Key,
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
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Monitor2,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCw,
  RefreshCcw,
  Repeat,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server2,
  Settings2,
  Share,
  Share2,
  Shield2,
  ShieldOff,
  ShoppingBag,
  ShoppingCart2,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slash,
  Sliders,
  Smartphone2,
  Smile,
  Speaker,
  Square,
  Star2,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target2,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  TrendingDown,
  TrendingUp2,
  Truck,
  Tv,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users2,
  Video2,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
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
  CheckCircle,
  Lightbulb,
  Rocket,
  Star
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
} from 'lucide-react';

export default function About() {
  const values = [
    {
<<<<<<< HEAD
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
      color: "from-zion-green to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.",
      color: "from-zion-purple to-pink-500"
=======
      icon: <Lightbulb className="w-12 h-12 text-zion-cyan" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.'
    },
    {
      icon: <Shield className="w-12 h-12 text-zion-cyan" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client relationships.'
    },
    {
      icon: <Users className="w-12 h-12 text-zion-cyan" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: <Heart className="w-12 h-12 text-zion-cyan" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all our interactions.'
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients", description: "Serving businesses worldwide" },
    { value: "25+", label: "Countries", description: "Global presence" },
    { value: "1000+", label: "Projects", description: "Successfully delivered" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Leading our AI and quantum computing initiatives with 15+ years of experience in emerging technologies.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      description: "Expert in zero-trust architecture and advanced threat protection with certifications in multiple security frameworks.",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
<<<<<<< HEAD
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Mission</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to advanced technology and empower businesses of all sizes to achieve 
                unprecedented growth through innovative AI solutions, quantum computing, and comprehensive IT services.
              </p>
              <p className="text-zion-slate-light">
                We believe that cutting-edge technology should be accessible to everyone, not just large corporations. 
                Our team of experts works tirelessly to develop solutions that level the playing field and enable 
                businesses to compete in the digital age.
              </p>
            </motion.div>

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
=======
      <SEO 
        title="About Zion Tech Group - Leading Technology Innovation"
        description="Learn about Zion Tech Group's mission to democratize advanced technology, our team of experts, and our commitment to innovation in AI, cybersecurity, and emerging technologies."
        keywords="about Zion Tech Group, technology company, AI innovation, cybersecurity, quantum computing, team"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're a team of innovators, researchers, and technology experts dedicated to 
              democratizing advanced technology and shaping the future of human-AI collaboration.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#mission"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Target className="mr-2 w-5 h-5" />
                Our Mission
              </a>
              <a 
                href="#team"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Meet Our Team
              </a>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
=======
      {/* Mission Section */}
      <section id="mission" className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                To democratize advanced technology and create a future where AI and human intelligence 
                work together to solve humanity's greatest challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Transforming the Future Through Technology
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  At Zion Tech Group, we believe that advanced technology should be accessible to everyone, 
                  not just large corporations. Our mission is to bridge the gap between cutting-edge research 
                  and practical business applications.
                </p>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  We're pioneering the development of consciousness simulation, advanced AI systems, and 
                  quantum computing solutions that will revolutionize how businesses operate and how humans 
                  interact with technology.
                </p>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Ethical AI Development</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Sustainable Innovation</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  <span className="text-white font-medium">Human-Centric Design</span>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
                  <div className="text-center">
                    <Rocket className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                    <p className="text-zion-slate-light">
                      To create a world where technology enhances human potential, 
                      where AI serves as a collaborative partner, and where innovation 
                      drives sustainable progress for all.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
=======
      <section id="team" className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Brilliant minds from diverse backgrounds, united by a passion for innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-zion-cyan font-medium mb-1">{member.role}</p>
                    <p className="text-zion-slate-light text-sm mb-4">{member.expertise}</p>
                    <p className="text-zion-slate-light leading-relaxed">{member.description}</p>
                  </div>
                </div>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
=======
      {/* Milestones Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones that have shaped our company and our impact on the technology landscape
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-zion-cyan to-zion-blue"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-slate-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                      <div className="text-zion-cyan font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zion-slate-light">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Shaping the Future</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Ready to be part of the next technological revolution? Let's work together to create 
              solutions that will change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="mr-2 w-5 h-5" />
                Start a Project
              </a>
              <a 
                href="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Join Our Team
              </a>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
