import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We deliver exceptional results with attention to detail and commitment to excellence.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring alignment and shared success.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparent communication in all our work.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We are a team of passionate technologists dedicated to transforming businesses through innovative solutions
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-gray-700/50">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe in the transformative power of technology 
              and are committed to delivering solutions that make a real difference.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Story */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded in 2019, we started as a small team of developers with a big vision: 
              to make advanced technology accessible to businesses of all sizes. What began 
              as a passion project has grown into a full-service technology company serving 
              clients across various industries.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our journey has been marked by continuous learning, innovation, and a deep 
              commitment to our clients' success. We've helped startups scale their operations, 
              enterprises modernize their systems, and everything in between.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, we're proud to be at the forefront of technological innovation, 
              helping businesses navigate the digital landscape and achieve their goals 
              through smart, sustainable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;