
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  Lightbulb,
  Building2,
  Rocket,
  Eye,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Zap, value: '99.9%', label: 'Uptime SLA' }
  ];

  const values = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading technology partner that transforms businesses through innovative solutions and cutting-edge expertise.'
    },
    {
      icon: Heart,
      title: 'Mission',
      description: 'Empower organizations with transformative technology solutions that drive growth, efficiency, and competitive advantage.'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Creating sustainable technological advancement that benefits businesses, communities, and the world at large.'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Zion Tech Group was established with a vision to revolutionize business technology solutions.'
    },
    {
      year: '2012',
      title: 'Global Expansion',
      description: 'Expanded operations to serve international markets and established strategic partnerships.'
    },
    {
      year: '2016',
      title: 'AI Innovation',
      description: 'Launched our AI services division, pioneering intelligent automation solutions.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Became a leader in digital transformation services during the global shift to remote work.'
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Introduced quantum computing services and next-generation cybersecurity solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital excellence across the globe.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zion-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
                  <stat.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              The principles that guide our every decision and drive our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <value.icon className="w-16 h-16 text-zion-cyan mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-cyan/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              From humble beginnings to global technology leadership - our story of innovation and growth.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zion-cyan/30"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8 ml-auto'}`}>
                  <div className="bg-zion-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
                    <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zion-cyan/80">{item.description}</p>
                  </div>
                </div>
                <div className={`absolute top-6 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-slate-dark ${
                  index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Leadership Team</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving innovation and delivering exceptional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief Executive Officer',
                description: 'Visionary leader with 20+ years in technology innovation and business transformation.'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                description: 'Expert in emerging technologies with deep expertise in AI, quantum computing, and cybersecurity.'
              },
              {
                name: 'Dr. James Thompson',
                role: 'Chief Innovation Officer',
                description: 'Pioneering researcher in quantum technologies and next-generation computing solutions.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 text-center"
              >
                <div className="w-24 h-24 bg-zion-cyan/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan mb-4">{member.role}</div>
                <p className="text-zion-cyan/80">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Join hundreds of organizations that trust Zion Tech Group to drive their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
