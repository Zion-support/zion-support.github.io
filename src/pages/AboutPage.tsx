import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Clock, 
  Globe, 
  Star, 
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Rocket,
  Shield,
  Zap,
  Cloud,
  Database,
  Lock,
  Activity,
  TrendingUp,
  Heart,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function AboutPage() {
  const stats = [
    { label: 'Years of Innovation', value: '15+', icon: Clock },
    { label: 'Global Clients', value: '500+', icon: Users },
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'ROI Average', value: '300%', icon: TrendingUp },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your security is our priority. We implement enterprise-grade security measures in everything we do.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'We\'re committed to building a sustainable future through responsible technology solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We work to create positive change on a global scale through innovative technology solutions.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI and machine learning solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation quantum technology',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Comprehensive data intelligence platforms',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Micro SaaS',
      description: 'Innovative software-as-a-service solutions',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.'
    },
    {
      year: '2012',
      title: 'First AI Project',
      description: 'Successfully delivered our first artificial intelligence solution for a Fortune 500 company.'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 45+ countries worldwide.'
    },
    {
      year: '2018',
      title: 'Quantum Computing',
      description: 'Launched our quantum computing division and research initiatives.'
    },
    {
      year: '2021',
      title: 'Micro SaaS Platform',
      description: 'Introduced our revolutionary micro SaaS platform for rapid business transformation.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a global leader in AI, quantum computing, and innovative technology solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Innovation Company</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to delivering cutting-edge AI, quantum computing, and technology solutions worldwide." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI innovation, quantum computing, company mission, technology leadership" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of technology with revolutionary AI, quantum computing, and innovative 
              solutions that transform businesses and drive global innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To democratize cutting-edge technology and empower businesses worldwide with innovative 
                AI, quantum computing, and digital transformation solutions that drive unprecedented 
                growth and competitive advantage.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the global leader in revolutionary technology solutions, shaping the future of 
                business through AI innovation, quantum computing breakthroughs, and sustainable 
                digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in cutting-edge technologies that are shaping the future of business and society.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to global technology leader - the milestones that define our success story.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-gray-900"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-purple-400 font-medium">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-green-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}