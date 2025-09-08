import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Star, CheckCircle, Zap, Shield, Brain, Rocket, Heart } from 'lucide-react';

export default function About() {
  const companyStats = [
    {
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects worldwide'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Expert professionals across multiple domains'
    },
    {
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach and international presence'
    },
    {
      number: '99.9%',
      label: 'Client Satisfaction',
      description: 'Consistently high customer satisfaction rates'
    }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Integrity',
      description: 'We build trust through honest communication, ethical practices, and reliable delivery.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, establishing new regional headquarters.',
      achievement: 'International Growth'
    },
    {
      year: '2023',
      title: 'Series B Funding',
      description: 'Secured $50M in funding to accelerate product development and market expansion.',
      achievement: 'Major Investment'
    },
    {
      year: '2022',
      title: 'AI Platform Launch',
      description: 'Launched our flagship AI platform, revolutionizing business intelligence.',
      achievement: 'Product Innovation'
    },
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to democratize advanced technology.',
      achievement: 'Company Founded'
    }
  ];

  const leadership = [
    {
      name: 'Kleber Oliveira',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Innovation']
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in AI, machine learning, and scalable architecture.',
      expertise: ['AI/ML', 'System Architecture', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Operations Officer',
      bio: 'Operations specialist focused on scaling processes and ensuring operational excellence.',
      expertise: ['Process Optimization', 'Team Management', 'Quality Assurance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and journey to democratize advanced technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize advanced technology, making AI, 
              quantum computing, and cutting-edge solutions accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Globe className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Award className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                To democratize advanced technology by making AI, quantum computing, 
                and cutting-edge solutions accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                We believe that every organization, regardless of size or industry, 
                should have access to the transformative power of modern technology. 
                Our team of experts works tirelessly to bridge the gap between 
                complex technological innovations and practical business applications.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium">Trusted by 500+ companies worldwide</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">AI-Powered Solutions</h3>
                      <p className="text-slate-300 text-sm">Intelligent automation and insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Enterprise Security</h3>
                      <p className="text-slate-300 text-sm">Zero-trust architecture and compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Rapid Implementation</h3>
                      <p className="text-slate-300 text-sm">Quick deployment and value delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our impact and achievements in numbers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-slate-300">{stat.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones in our company's growth and development.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-slate-300 mb-2">{milestone.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {milestone.achievement}
                  </span>
                </div>
                
                {index < milestones.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the visionaries driving our company's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{leader.role}</p>
                <p className="text-slate-300 mb-6">{leader.bio}</p>
                <div className="space-y-2">
                  {leader.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us on Our Mission
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's work together to build the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
