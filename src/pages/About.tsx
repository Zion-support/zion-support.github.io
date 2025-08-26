
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality and results in everything we do'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results',
      description: 'Focused on delivering measurable business outcomes'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Zion Tech Group established with a vision for the future' },
    { year: '2021', title: 'First AI Solutions', description: 'Launched our first AI-powered business solutions' },
    { year: '2022', title: 'Cloud Platform', description: 'Introduced enterprise cloud infrastructure services' },
    { year: '2023', title: 'Quantum Research', description: 'Began research into quantum computing applications' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded services to international markets' },
    { year: '2025', title: 'Space Tech', description: 'Launched innovative space technology solutions' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with innovative AI solutions, quantum computing, and transformative digital services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress through innovative technology solutions that solve complex business challenges and create sustainable value for our clients and society.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that technology should be a force for good, driving positive change and enabling businesses to reach their full potential in an increasingly digital world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-2xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-300">
                  Serving clients across 25+ countries with innovative technology solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our company's growth and evolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-zion-blue-dark"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate professionals driving innovation and delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30 max-w-2xl mx-auto">
              <Users className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who share our passion for innovation and technology.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
