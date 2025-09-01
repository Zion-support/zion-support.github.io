import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Rocket,
  Users,
  Globe,
  Award,
  Shield,
  Heart,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Clients Served', description: 'Organizations worldwide' },
    { number: '99.9%', label: 'Uptime', description: 'Reliable service delivery' },
    { number: '50+', label: 'Awards Won', description: 'Industry recognition' },
    { number: '25+', label: 'Countries', description: 'Global presence' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Excellence',
      description: 'Delivering quality solutions that exceed expectations',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Integrity',
      description: 'Building trust through honest and ethical practices',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve shared success',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'CEO & Founder',
      description: 'Visionary leader driving innovation and growth',
      image: '/team/kleber.jpg'
    },
    {
      name: 'AI Team',
      role: 'Machine Learning Engineers',
      description: 'Experts in AI and quantum computing',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Specialists',
      description: 'Protecting digital assets and infrastructure',
      image: '/team/security-team.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            We are a forward-thinking technology company dedicated to
            transforming businesses through cutting-edge AI, quantum computing,
            and innovative digital solutions. Our mission is to democratize
            advanced technology and make it accessible to organizations of all
            sizes.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-cyan-400 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize advanced technology and empower organizations with
              AI-powered solutions that drive innovation, efficiency, and
              competitive advantage in the digital age.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered technology solutions,
              shaping the future of business through innovation, sustainability,
              and human-centric design.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
