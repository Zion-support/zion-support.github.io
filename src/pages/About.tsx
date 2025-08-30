import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Award,
  Target,
  Eye,
  HeartHandshake,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Clock },
    { label: 'AI Solutions Delivered', value: '200+', icon: Brain },
    { label: 'Enterprise Clients', value: '150+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable business value',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Transparency',
      description: 'Open communication and clear expectations are the foundation of our relationships',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual growth',
      icon: Handshake,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Sustainability',
      description: 'We develop solutions that are environmentally responsible and future-focused',
      icon: Leaf,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to transform businesses through innovative technology solutions.',
      icon: Rocket
    },
    {
      year: '2012',
      title: 'First AI Project',
      description: 'Successfully delivered our first AI-powered business intelligence solution to a Fortune 500 company.',
      icon: Brain
    },
    {
      year: '2015',
      title: 'Cybersecurity Division',
      description: 'Launched our cybersecurity services division to address growing enterprise security needs.',
      icon: Shield
    },
    {
      year: '2018',
      title: 'Quantum Computing Initiative',
      description: 'Began research and development in quantum computing and AI applications.',
      icon: Atom
    },
    {
      year: '2020',
      title: 'Micro SaaS Platform',
      description: 'Introduced our Micro SaaS platform, making AI solutions accessible to businesses of all sizes.',
      icon: ShoppingCart
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries with localized solutions.',
      icon: Globe
    },
    {
      year: '2024',
      title: 'AI Revolution',
      description: 'Leading the AI revolution with cutting-edge solutions that transform industries.',
      icon: Zap
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former AI researcher at MIT with 20+ years in technology leadership. PhD in Computer Science.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Innovation'],
      avatar: '/avatars/sarah-chen.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in quantum computing and AI systems. Led development teams at Google and Microsoft.',
      expertise: ['Quantum Computing', 'AI Architecture', 'System Design'],
      avatar: '/avatars/michael-rodriguez.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      bio: 'Leading researcher in machine learning and neural networks. Published 50+ papers in top AI journals.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Research'],
      avatar: '/avatars/emily-watson.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'VP of Cybersecurity',
      bio: 'Former cybersecurity expert at NSA with deep expertise in threat detection and zero-trust architecture.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Zero Trust'],
      avatar: '/avatars/david-kim.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Client Success',
      bio: '15+ years in enterprise software and client relationship management. Expert in digital transformation.',
      expertise: ['Client Success', 'Digital Transformation', 'Enterprise Solutions'],
      avatar: '/avatars/lisa-thompson.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Wilson',
      role: 'VP of Engineering',
      bio: 'Full-stack engineering leader with expertise in cloud architecture and DevOps practices.',
      expertise: ['Cloud Architecture', 'DevOps', 'Engineering Leadership'],
      avatar: '/avatars/james-wilson.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const awards = [
    {
      title: 'AI Innovation Award 2024',
      organization: 'TechCrunch Disrupt',
      description: 'Recognized for breakthrough AI solutions in enterprise automation'
    },
    {
      title: 'Cybersecurity Excellence',
      organization: 'RSA Conference',
      description: 'Awarded for innovative threat detection and response systems'
    },
    {
      title: 'Best AI Platform',
      organization: 'AI Summit',
      description: 'Voted best AI platform for enterprise applications'
    },
    {
      title: 'Innovation Leader',
      organization: 'Forrester Research',
      description: 'Named a leader in AI-powered business solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We are a team of innovators, engineers, and strategists dedicated to transforming businesses 
              through cutting-edge AI technology and strategic digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize AI technology and make cutting-edge solutions accessible to businesses of all sizes, 
                enabling them to compete and thrive in the digital age.
              </p>
              <p className="text-gray-400 mb-8">
                We believe that every organization, regardless of size or industry, should have access to the 
                transformative power of artificial intelligence. Our mission is to bridge the gap between 
                complex AI technology and practical business applications.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Brain className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">AI-First Future</h4>
                    <p className="text-gray-400 text-sm">Leading the transition to an AI-first business world</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Globe className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Global Impact</h4>
                    <p className="text-gray-400 text-sm">Transforming businesses across industries and continents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Leaf className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Sustainable Innovation</h4>
                    <p className="text-gray-400 text-sm">Building solutions that benefit people and the planet</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.color} mb-4`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader, discover the key milestones in our company's evolution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-futuristic"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <item.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and strategic vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                    <Linkedin className="h-4 w-4 text-gray-300" />
                  </a>
                  <a href={member.twitter} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                    <Twitter className="h-4 w-4 text-gray-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry recognition for our innovative solutions and exceptional client service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-yellow-500/20">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">{award.organization}</p>
                    <p className="text-gray-400">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their business with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
