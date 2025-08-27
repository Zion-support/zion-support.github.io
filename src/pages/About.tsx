import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Heart, 
  Lightbulb, 
  Rocket, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Clock,
  BarChart3,
  Cpu,
  Database,
  Network,
  Lock,
  Leaf,
  Eye,
  Handshake,
  Code,
  Server
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Clients Worldwide', icon: Users },
    { number: '50+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

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

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology.',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'First AI Platform Launch',
      description: 'Successfully deployed our first AI-powered business intelligence platform.',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve Fortune 500 companies and government agencies.',
      icon: Building
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Named one of the top 10 AI companies by TechCrunch.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Became the leading provider of AI workflow orchestration solutions.',
      icon: TrendingUp
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and shape the future of AI-powered business.',
      icon: Eye
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former AI researcher at Stanford with 15+ years in machine learning and business intelligence.',
      image: '/api/placeholder/200/200',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI infrastructure with experience at Google and Amazon.',
      image: '/api/placeholder/200/200',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief AI Officer',
      bio: 'Leading researcher in neural networks and AI ethics with 50+ published papers.',
      image: '/api/placeholder/200/200',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Customer Success',
      bio: '15+ years in customer experience and enterprise software implementation.',
      image: '/api/placeholder/200/200',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const technologies = [
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Custom Neural Networks'],
      icon: Brain
    },
    {
      category: 'Cloud Infrastructure',
      items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      icon: Cloud
    },
    {
      category: 'Security & Compliance',
      items: ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'Zero Trust', 'End-to-End Encryption'],
      icon: Shield
    },
    {
      category: 'Data & Analytics',
      items: ['Apache Spark', 'Snowflake', 'Tableau', 'Power BI', 'Custom Dashboards'],
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI Innovation & Technology Leadership</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to democratize AI technology, our innovative team, and our commitment to customer success and security." />
        <meta name="keywords" content="about us, company, mission, team, Zion Tech Group, AI company, technology leadership" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
                We're a team of innovators, engineers, and visionaries dedicated to democratizing AI technology and empowering businesses to achieve the extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 2020</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. We believe that AI should be a force for good, driving innovation, efficiency, and growth across industries.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our platform empowers organizations to harness the full potential of AI, from simple automation to complex decision-making systems, all while maintaining the highest standards of security and ethical AI practices.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To create a world where every business can leverage the power of AI to solve complex challenges, make data-driven decisions, and create meaningful impact in their communities.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We envision a future where AI is not just a tool, but a trusted partner that enhances human capabilities and enables new possibilities that were once thought impossible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Core Values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Journey
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <milestone.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                          <p className="text-slate-600 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Meet Our Leadership Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-slate-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Users className="w-4 h-4" />
                      </a>
                      <a href={member.twitter} className="text-slate-400 hover:text-blue-600 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <Users className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Technology Stack
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">{tech.category}</h3>
                    <ul className="space-y-2">
                      {tech.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of companies already leveraging our AI technology to drive growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;