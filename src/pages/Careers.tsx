import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  DollarSign, 
  ArrowRight, 
  CheckCircle,
  Users,
  Rocket,
  Lightbulb,
  Globe,
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Atom,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
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
  Activity,
  AlertTriangle,
  CheckSquare,
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
  HelpCircle,
  HelpCircle2,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link2,
  List,
  Loader,
  Loader2,
  Lock,
  Lock2,
  Mail,
  Maximize,
  Maximize2,
  Menu,
  MessageCircle,
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
  Settings,
  Settings2,
  Share,
  Share2,
  Shield2,
  ShieldCheck,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
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
  Star,
  Star2,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target,
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
  TrendingUp,
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
  Video,
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
} from 'lucide-react';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Positions', count: 12 },
    { id: 'engineering', label: 'Engineering', count: 5 },
    { id: 'ai', label: 'AI & ML', count: 3 },
    { id: 'design', label: 'Design', count: 2 },
    { id: 'business', label: 'Business', count: 2 }
  ];

  const positions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years experience in machine learning and AI development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in mathematics and statistics'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions for clients',
        'Lead research initiatives in emerging AI technologies',
        'Mentor junior engineers and conduct code reviews',
        'Collaborate with cross-functional teams on AI projects',
        'Stay current with latest AI research and trends'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'Quantum Computing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $180K',
      description: 'Research and develop quantum algorithms and quantum-classical hybrid systems.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years experience in quantum computing research',
        'Knowledge of quantum algorithms and quantum mechanics',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong mathematical and analytical skills'
      ],
      responsibilities: [
        'Research quantum algorithms for business applications',
        'Develop quantum simulation and optimization tools',
        'Collaborate with academic and industry partners',
        'Publish research papers and present at conferences',
        'Contribute to quantum computing strategy and roadmap'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140K - $190K',
      description: 'Design and implement comprehensive cybersecurity solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cybersecurity architecture',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with zero-trust security models',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ],
      responsibilities: [
        'Design security architectures for client systems',
        'Implement zero-trust security frameworks',
        'Conduct security assessments and penetration testing',
        'Develop security policies and procedures',
        'Lead incident response and threat hunting'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture'
      ],
      responsibilities: [
        'Develop frontend and backend components',
        'Design and implement RESTful APIs',
        'Optimize application performance and scalability',
        'Collaborate with design and product teams',
        'Participate in code reviews and technical discussions'
      ]
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90K - $130K',
      description: 'Create intuitive and beautiful user experiences for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '4+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, or similar tools',
        'Experience with design systems and component libraries',
        'Portfolio demonstrating complex application design'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create user experience flows and wireframes',
        'Develop and maintain design systems',
        'Conduct user research and usability testing',
        'Collaborate with development teams on implementation'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Business',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$110K - $160K',
      description: 'Lead product strategy and development for our AI and technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products and services',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and leadership abilities'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Gather and prioritize product requirements',
        'Work with engineering teams on product development',
        'Analyze market trends and competitive landscape',
        'Drive product launches and go-to-market strategies'
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Work on cutting-edge technologies that are shaping the future'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Your work will impact businesses and users worldwide'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of brilliant minds working together'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    },
    {
      icon: Zap,
      title: 'Fast Growth',
      description: 'Rapid career advancement in a growing company'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, and retirement plans'
    }
  ];

  const filteredPositions = activeTab === 'all' 
    ? positions 
    : positions.filter(position => position.department.toLowerCase().includes(activeTab));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Explore exciting career opportunities at Zion Tech Group. Join our team of innovators in AI, cybersecurity, cloud solutions, and emerging technologies."
        keywords="careers, jobs, employment, Zion Tech Group, AI, cybersecurity, cloud, technology jobs"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Briefcase className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Join Our <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Mission
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Help us revolutionize technology and build the future. Join a team of innovators, 
                problem-solvers, and visionaries working on cutting-edge AI and quantum solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#positions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Contact Recruiting
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Work at <span className="text-zion-cyan">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join a company that values innovation, collaboration, and making a real impact in the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Cutting-Edge Technology',
                description: 'Work with the latest AI, quantum computing, and emerging technologies that define the future.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Collaborative Culture',
                description: 'Join a diverse team of experts who value innovation, creativity, and mutual support.'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-zion-cyan" />,
                title: 'Career Growth',
                description: 'Continuous learning opportunities, mentorship programs, and clear career progression paths.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Work-Life Balance',
                description: 'Flexible remote work options, competitive benefits, and a healthy work environment.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Open <span className="text-zion-cyan">Positions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role for your skills and passion. We're always looking for talented individuals 
              to join our growing team.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 border border-zion-slate/20'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-zion-slate-light mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Briefcase className="w-4 h-4 text-zion-cyan mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <MapPin className="w-4 h-4 text-zion-cyan mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Clock className="w-4 h-4 text-zion-cyan mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Award className="w-4 h-4 text-zion-cyan mr-2" />
                        {position.experience}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <DollarSign className="w-4 h-4 text-zion-cyan mr-2" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 lg:flex-shrink-0">
                    <Link 
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
