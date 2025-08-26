import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, CheckCircle, TrendingUp, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering exceptional results and exceeding client expectations'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our relationships'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to transform business through technology'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered AI solutions for healthcare industry leader'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Grew team and expanded service offerings across multiple industries'
    },
    {
      year: '2023',
      title: 'Innovation Leader',
      description: 'Recognized as a leader in AI and emerging technology solutions'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Expanding services internationally and developing cutting-edge AI platforms'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with expertise in AI, quantum computing, and emerging technologies'
    },
    {
      name: 'Our Team',
      role: 'Technology Experts',
      description: 'Dedicated professionals passionate about innovation and delivering exceptional results'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Zion Tech Group
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              innovative AI solutions, quantum computing, and emerging technologies that drive growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-zion-slate-light mb-6">
                To empower organizations with cutting-edge technology solutions that drive innovation, 
                efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <p className="text-lg text-zion-slate-light">
                We believe that technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to develop solutions that not only meet 
                today's challenges but anticipate tomorrow's opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">What We Do</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">AI & Machine Learning Solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Quantum Computing & Emerging Tech</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Enterprise IT & Cloud Solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Industry-Specific Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From startup to industry leader, our growth reflects our commitment to innovation and excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-start mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our innovative technology solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
