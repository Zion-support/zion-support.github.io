import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Building2,
  Cpu,
  Atom,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Lightbulb,
  Star,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We believe in pushing the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "We prioritize the security and privacy of your data with enterprise-grade protection and compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering strong partnerships and open communication."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and advanced technology solutions."
    },
    {
      year: "2021",
      title: "First AI Platform Launch",
      description: "Successfully launched our first AI-powered business solution, serving 50+ clients."
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Expanded to serve Fortune 500 companies and government agencies with advanced AI solutions."
    },
    {
      year: "2023",
      title: "Global Presence",
      description: "Opened offices in Europe and Asia, serving clients across 25+ countries."
    },
    {
      year: "2024",
      title: "AI Innovation Leader",
      description: "Recognized as a leader in AI innovation, serving 500+ enterprise clients worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI Research Director at Google, PhD in Computer Science from Stanford, 15+ years in AI and enterprise software."
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Microsoft Principal Engineer, specialized in cloud architecture and AI infrastructure, led teams of 100+ engineers."
    },
    {
      name: "Dr. James Kim",
      role: "Chief AI Officer",
      bio: "Leading AI researcher with 50+ published papers, former professor at MIT, expert in machine learning and neural networks."
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      bio: "20+ years in operations management, former VP at Amazon, expert in scaling technology companies and customer success."
    }
  ];

  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced ML models, neural networks, and autonomous systems'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and hybrid quantum-classical systems'
    },
    {
      icon: Database,
      title: 'Big Data & Analytics',
      description: 'Real-time data processing, predictive analytics, and business intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automation, and continuous deployment'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat detection, zero-trust architecture, and compliance frameworks'
    },
    {
      icon: Lock,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and digital asset management'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for innovation in AI and emerging technologies'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Expansion',
      description: 'Consistent year-over-year growth and global market expansion'
    },
    {
      icon: Users,
      title: 'Client Base',
      description: 'Serving Fortune 500 companies and innovative startups worldwide'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operations across 25+ countries with localized expertise'
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Enterprise Clients" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Brain, number: "50+", label: "AI Solutions" },
    { icon: Shield, number: "99.9%", label: "Uptime SLA" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to democratize AI technology, our innovative solutions, and the team driving the future of enterprise technology." />
        <meta name="keywords" content="about Zion Tech Group, AI company, technology solutions, enterprise AI, company mission, team" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology through innovative AI solutions, quantum computing, 
                and cutting-edge digital transformation services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-zinc-300 mb-6">
                  At Zion Tech Group, we believe that advanced technology should be accessible to every organization, 
                  regardless of size or industry. Our mission is to democratize AI and cutting-edge technology solutions, 
                  empowering businesses to innovate, grow, and compete in the digital age.
                </p>
                <p className="text-lg text-zinc-300 mb-6">
                  We're committed to delivering enterprise-grade solutions that drive real business value, 
                  while maintaining the highest standards of security, reliability, and customer success.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">AI-Powered Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Enterprise Security</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Vision 2030</h3>
                    <p className="text-zinc-300">
                      To become the world's leading provider of AI-powered business solutions, 
                      transforming how organizations operate and compete in the digital economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our mission and drive our success in transforming businesses through technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies that power our solutions and drive innovation across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <tech.icon className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                From startup to global AI leader - here's how we've grown and evolved over the years.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 h-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 z-10 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}></div>
                    <div className={`bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 max-w-md ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zinc-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds behind our innovative solutions and technological breakthroughs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Achievements</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Milestones and accomplishments that demonstrate our commitment to excellence and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    <achievement.icon className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{achievement.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the hundreds of companies that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
