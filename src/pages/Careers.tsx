import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Users, 
  Rocket, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp, 
  Heart, 
  Star,
  ArrowRight,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Work on cutting-edge technology that\'s shaping the future'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Growth',
      description: 'Continuous learning and professional development opportunities'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Impact',
      description: 'Make a real difference in the world through technology'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Work with clients and teams from around the world'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition',
      description: 'Be recognized for your contributions and achievements'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Culture',
      description: 'Collaborate with brilliant minds in a supportive environment'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI development projects and mentor junior engineers in cutting-edge machine learning solutions.'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain enterprise-grade security solutions for our global client base.'
    },
    {
      title: 'Cloud DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and optimize cloud infrastructure for scalable, high-performance applications.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.'
    }
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We push boundaries and explore new possibilities in technology.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We believe great things happen when great minds work together.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development.'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team and work on cutting-edge AI, quantum computing, and cybersecurity solutions that transform businesses worldwide."
        keywords="careers, jobs, employment, AI engineer, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
                Be part of a team that's shaping the future of technology. Work on
                cutting-edge AI, quantum computing, and cybersecurity solutions that
                transform businesses worldwide.
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're currently expanding our team with talented individuals who are passionate about innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a team that values innovation, growth, and making a real impact in the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore current opportunities to join our growing team of innovators and problem-solvers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{position.department}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium mb-2">
                        {position.type}
                      </span>
                      <p className="text-gray-400 text-sm">{position.experience}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Globe className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <button className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Us Your Resume
              </a>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Take the first step towards an exciting career in technology. We're looking for passionate 
                individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="https://linkedin.com/company/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Follow on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;