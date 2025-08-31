import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Building2,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Brain,
  Rocket,
  Atom,
  Satellite,
  Building
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Clients Worldwide', icon: Users },
    { number: '50+', label: 'AI Solutions', icon: Target },
    { number: '99.9%', label: 'Uptime', icon: Award },
    { number: '24/7', label: 'Support', icon: TrendingUp }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering results',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on transparency and reliability',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Former Google AI researcher with 15+ years in machine learning',
      image: '/images/team/sarah-chen.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Ex-Microsoft engineer specializing in cloud architecture',
      image: '/images/team/michael-rodriguez.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Technology Officer',
      bio: 'Quantum computing expert with PhD from MIT',
      image: '/images/team/james-wilson.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Product',
      bio: 'Product leader with experience at Amazon and Salesforce',
      image: '/images/team/lisa-thompson.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Platform Launch',
      description: 'Successfully launched our flagship AI-powered business platform'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $25M to expand our AI capabilities and team'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve clients in 25+ countries worldwide'
    },
    {
      year: '2024',
      title: 'Quantum Computing Initiative',
      description: 'Launched our quantum computing research division'
    },
    {
      year: '2025',
      title: 'AI Ethics Leadership',
      description: 'Leading industry standards for responsible AI development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-50 dark:from-zion-slate-900 dark:via-zion-slate-800 dark:to-zion-slate-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-zion-slate-800 border-b border-zion-slate-200 dark:border-zion-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zion-slate-900 dark:text-white mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto"
          >
            We're a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge AI technology.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-500 to-zion-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zion-slate-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-600 dark:text-zion-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white dark:bg-zion-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-zion-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate-600 dark:text-zion-slate-400 mb-6">
                To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. We believe that AI should be a force for good, driving innovation, efficiency, and growth across industries.
              </p>
              <p className="text-lg text-zion-slate-600 dark:text-zion-slate-400 mb-8">
                From startups to Fortune 500 companies, we're helping organizations harness the power of AI to solve complex challenges and unlock new opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-zion-500 hover:bg-zion-600 text-white rounded-lg transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-400 to-zion-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Brain className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Future</h3>
                  <p className="text-zion-100">
                    We're building the foundation for the next generation of intelligent business solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-zion-slate-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape our company culture.
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
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate-600 dark:text-zion-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white dark:bg-zion-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-zion-slate-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto">
              Experienced professionals passionate about AI innovation and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zion-slate-700 rounded-xl shadow-lg border border-zion-slate-200 dark:border-zion-slate-600 p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-400 to-zion-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-zion-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-zion-slate-600 dark:text-zion-slate-400 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-zion-slate-400 hover:text-zion-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-zion-slate-400 hover:text-zion-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-zion-slate-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto">
              Key milestones in our mission to democratize AI technology.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-zion-200 dark:bg-zion-slate-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-zion-slate-800 p-6 rounded-lg shadow-lg border border-zion-slate-200 dark:border-zion-slate-600">
                      <div className="text-2xl font-bold text-zion-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-zion-slate-600 dark:text-zion-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-500 rounded-full border-4 border-white dark:border-zion-slate-800"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-500 to-zion-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-zion-100 mb-8"
          >
            Join hundreds of companies already leveraging our AI solutions to drive growth and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-zion-600 font-semibold rounded-lg hover:bg-zion-50 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
