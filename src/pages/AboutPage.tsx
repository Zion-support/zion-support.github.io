import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  DollarSign,
  Users2,
  Lightbulb,
  Handshake,
  BookOpen,
  Video,
  PenTool,
  Palette,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Navigation,
  Compass2,
  Map,
  Location,
  Home,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star2,
  Heart2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grin,
  Joy,
  Sunglasses,
  Confused,
  Neutral,
  Expressionless,
  Unamused,
  RollingEyes,
  Zany,
  Hugging,
  Nerd,
  Cool,
  Party,
  Sleepy,
  Sick,
  Vomiting,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  PregnantWoman,
  BreastFeeding,
  PersonWithTurban,
  PersonWithSkullcap,
  WomanWithHeadscarf,
  PersonWithVeil,
  PersonWithCrown,
  PersonWithTiara,
  PersonWithGraduationCap,
  PersonWithTuxedo,
  PersonWithDress,
  PersonWithSuit,
  PersonWithTurban2,
  PersonWithSkullcap2,
  WomanWithHeadscarf2,
  PersonWithVeil2,
  PersonWithCrown2,
  PersonWithTiara2,
  PersonWithGraduationCap2,
  PersonWithTuxedo2,
  PersonWithDress2,
  PersonWithSuit2
} from 'lucide-react';

export function AboutPage() {
  const companyStats = [
    { number: '10+', label: 'Years of Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Technologies', icon: Code },
    { number: '99.9%', label: 'Uptime', icon: Server },
    { number: '24/7', label: 'Support', icon: HelpCircle }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'We measure our success by your success, providing dedicated support and continuous improvement.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer experience.'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, NLP, Computer Vision' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum Algorithms, Quantum AI Hybrid' },
    { name: 'Cybersecurity', icon: Shield, description: 'Zero Trust, AI Threat Detection' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Multi-cloud, Edge Computing, Serverless' },
    { name: 'Blockchain', icon: Link, description: 'Smart Contracts, DeFi, Enterprise Solutions' },
    { name: 'IoT & Edge', icon: Wifi, description: 'Connected Devices, Real-time Analytics' }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in technology and innovation.',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      image: '/images/team/sarah-chen.jpg',
      bio: 'PhD in Computer Science with expertise in AI and quantum computing.',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/marcus-rodriguez.jpg',
      bio: 'Full-stack architect with deep expertise in scalable systems.',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      twitter: 'https://twitter.com/marcusrodriguez'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Quantum Research Director',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in quantum algorithms and quantum AI integration.',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson'
    }
  ];

  const awards = [
    {
      title: 'Best AI Innovation 2024',
      organization: 'Tech Innovation Awards',
      year: '2024',
      icon: Award
    },
    {
      title: 'Top Cybersecurity Provider',
      organization: 'Security Excellence Awards',
      year: '2023',
      icon: Shield
    },
    {
      title: 'Quantum Computing Pioneer',
      organization: 'Quantum Technology Summit',
      year: '2023',
      icon: Atom
    },
    {
      title: 'Best Workplace for Innovation',
      organization: 'Great Place to Work',
      year: '2023',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-slate-darker to-zion-slate-dark"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Pioneering the future of technology through innovation, expertise, and unwavering commitment to excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/careers" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Join Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-12 w-12 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize cutting-edge technology and empower organizations of all sizes to achieve their full potential through innovative AI, quantum computing, and cybersecurity solutions.
              </p>
              <p className="text-lg text-zion-slate-light">
                We believe that technology should be accessible, secure, and transformative, enabling businesses to solve complex challenges and create meaningful impact in their industries.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Our Vision</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the global leader in next-generation technology solutions, driving the future of AI, quantum computing, and cybersecurity while building a more connected, secure, and intelligent world.
              </p>
              <p className="text-lg text-zion-slate-light">
                We envision a future where technology seamlessly integrates with human potential, creating unprecedented opportunities for innovation and growth across all sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of innovation and excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zion-slate-dark border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-16 w-16 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge technologies that power our innovative solutions and drive digital transformation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-zion-slate-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <tech.icon className="h-8 w-8 text-zion-cyan mr-3" />
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to delivering exceptional results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zion-slate-dark border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                  <Users className="h-12 w-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-zion-cyan mb-3">{member.role}</p>
                <p className="text-sm text-zion-slate-light mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Industry recognition for our innovative solutions and commitment to excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zion-slate-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <award.icon className="h-16 w-16 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                <p className="text-zion-slate-light mb-2">{award.organization}</p>
                <p className="text-zion-cyan font-semibold">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zion-slate-light mb-8"
          >
            Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}