import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Zap as ZapIcon,
  Building,
  Heart,
  Atom,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users2,
  Target2,
  Award2,
  ShoppingCart,
  Truck,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  PenTool,
  GitFork
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: any;
}

const values = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data security and privacy are our top priorities. We build with security by design.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'We measure our success by your success. Your goals become our mission.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We\'re committed to building technology that\'s good for business and the planet.',
    color: 'from-orange-500 to-red-500'
  }
];

interface Value {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
    avatar: '/avatars/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    twitter: 'https://twitter.com/sarahchen'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Ex-Microsoft Principal Engineer with 15+ years in cloud architecture. Expert in scalable AI systems and enterprise solutions.',
    avatar: '/avatars/marcus-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/marcus-rodriguez'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief AI Officer',
    bio: 'Leading AI researcher with 50+ published papers. Former Director of AI Ethics at OpenAI. PhD in Machine Learning from MIT.',
    avatar: '/avatars/emily-watson.jpg',
    linkedin: 'https://linkedin.com/in/emily-watson',
    twitter: 'https://twitter.com/emilywatson'
  },
  {
    name: 'David Kim',
    role: 'Chief Security Officer',
    bio: 'Cybersecurity expert with 20+ years experience. Former CISO at Fortune 500 companies. Certified in CISSP, CISM, and CISA.',
    avatar: '/avatars/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/david-kim'
  },
  {
    name: 'Lisa Thompson',
    role: 'Chief Marketing Officer',
    bio: 'Digital marketing veteran with expertise in B2B SaaS. Former VP of Marketing at Salesforce. MBA from Harvard Business School.',
    avatar: '/avatars/lisa-thompson.jpg',
    linkedin: 'https://linkedin.com/in/lisa-thompson'
  },
  {
    name: 'James Wilson',
    role: 'VP of Engineering',
    bio: 'Full-stack engineering leader with expertise in React, Node.js, and cloud infrastructure. Former Engineering Manager at Netflix.',
    avatar: '/avatars/james-wilson.jpg',
    linkedin: 'https://linkedin.com/in/james-wilson'
  }
];

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized by TechCrunch for breakthrough AI workflow automation technology',
    icon: Award
  },
  {
    year: '2023',
    title: '500+ Enterprise Clients',
    description: 'Successfully onboarded over 500 enterprise customers across 25 countries',
    icon: Users
  },
  {
    year: '2024',
    title: 'ISO 27001 Certification',
    description: 'Achieved international security standard certification for data protection',
    icon: Shield
  },
  {
    year: '2024',
    title: 'AI Ethics Leadership',
    description: 'Named industry leader in responsible AI development by AI Ethics Institute',
    icon: Brain
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Opened offices in London, Singapore, and Tokyo for international growth',
    icon: Globe
  },
  {
    year: '2025',
    title: 'Patent Portfolio',
    description: 'Filed 15+ patents for AI-powered business intelligence and automation',
    icon: Rocket
  }
];

const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and technology, always staying ahead of the curve.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to delivering measurable business value and ROI.',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Ethical AI',
    description: 'We develop AI solutions that are fair, transparent, and beneficial to society as a whole.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Security & Privacy',
    description: 'Your data security and privacy are non-negotiable. We implement enterprise-grade security measures.',
    icon: Lock,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of continuous learning and improvement, both for our team and our AI systems.',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Global Impact',
    description: 'We\'re building technology that can positively impact businesses and communities worldwide.',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500'
  }
];

>>>>>>> origin/main
export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2020; // Assuming founded in 2020

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '50+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what's possible with AI and emerging technologies.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating technology solutions that make a positive difference in the world.',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const expertise = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      services: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation & Workflows',
        'AI-Powered Business Intelligence'
      ]
    },
    {
      category: 'Quantum Computing',
      icon: Atom,
      services: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Quantum-AI Hybrid Systems',
        'Quantum Security Solutions',
        'Quantum Optimization',
        'Quantum Simulation'
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      services: [
        'Cloud Infrastructure Design',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Multi-Cloud Strategies',
        'FinOps & Cost Optimization'
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      services: [
        'Zero Trust Architecture',
        'AI-Powered Threat Detection',
        'Compliance Automation',
        'Security Headers & CSP',
        'Privacy & Data Protection',
        'Incident Response'
      ]
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      expertise: 'AI Strategy & Quantum Computing',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Team',
      role: 'Machine Learning Engineers',
      expertise: 'Deep Learning & Neural Networks',
      avatar: '🤖'
    },
    {
      name: 'DevOps Team',
      role: 'Cloud & Infrastructure',
      expertise: 'Scalable Systems & Automation',
      avatar: '⚙️'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Specialists',
      expertise: 'Threat Detection & Compliance',
      avatar: '🔒'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI and quantum computing.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Successfully deployed AI-powered business intelligence solutions for enterprise clients.'
    },
    {
      year: '2022',
      title: 'Quantum Computing Initiative',
      description: 'Launched quantum computing research and development program.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded services to international markets and established strategic partnerships.'
    },
    {
      year: '2024',
      title: 'AI-Quantum Hybrid Platform',
      description: 'Developed breakthrough AI-quantum hybrid computing platform.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries in AI, quantum computing, and emerging technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to democratize AI and quantum computing, our innovative solutions, and our commitment to client success."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mr-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
            </div>
            
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              We are pioneers in democratizing artificial intelligence and quantum computing, 
              empowering businesses to harness the full potential of cutting-edge technologies 
              for unprecedented growth and innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Services
=======
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneering the future of AI-powered business solutions. We're transforming how organizations operate, 
              innovate, and grow through cutting-edge technology and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/careers"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
              >
                Join Our Team
>>>>>>> origin/main
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Target2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Mission</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize access to cutting-edge AI and quantum computing technologies, 
                    enabling businesses of all sizes to leverage the power of artificial intelligence 
                    for unprecedented growth and competitive advantage.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 border border-purple-400/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Vision</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI and quantum computing solutions, driving the 
                    next industrial revolution and creating a future where technology serves 
                    humanity's greatest challenges and opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  {[
                    'Pioneering AI and quantum computing solutions',
                    'Proven track record with enterprise clients',
                    'Cutting-edge research and development',
                    '24/7 expert support and maintenance',
                    'Scalable and secure infrastructure',
                    'Continuous innovation and updates'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in the most advanced and transformative technologies of our time.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.category}</h3>
                </div>
                <div className="space-y-3">
                  {area.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind our innovative solutions and cutting-edge technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader: the milestones that shaped our company.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies that have already embraced the future 
              with Zion Tech Group's AI and quantum computing solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
=======
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize AI technology and make advanced business intelligence accessible to organizations of all sizes. 
              We believe that every business deserves access to the tools that can transform their operations and drive growth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Through our innovative AI-powered solutions, we're helping businesses automate complex workflows, 
              gain deeper insights from their data, and make smarter, faster decisions that drive real results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered business solutions, setting the standard for innovation, 
              ethics, and customer success in the artificial intelligence industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              We envision a future where AI seamlessly enhances human capabilities, enabling businesses to 
              achieve unprecedented levels of efficiency, creativity, and growth while maintaining the highest 
              standards of security and ethical responsibility.
            </p>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">25+</div>
            <div className="text-gray-400">Countries Served</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">15+</div>
            <div className="text-gray-400">Patents Filed</div>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our experienced team brings together expertise from leading tech companies and research institutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-zion-cyan font-medium">{member.role}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.188V9h3.188v1.561c.761-1.591 2.086-1.925 2.086-1.925 1.086 0 1.317 1.317 1.317 2.111v6.765z"/>
                      <path d="M3.996 7.5c0 1.934-1.317 3.5-2.996 3.5S-1 9.434-1 7.5C-1 5.566.317 4 2.996 4s2.996 1.566 2.996 3.5z"/>
                    </svg>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones that mark our journey of innovation and growth in the AI industry.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-zion-cyan font-bold">{achievement.year}</div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations already leveraging our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}