import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '👩‍💼',
      description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments.',
    },
    {
      name: 'Emily Johnson',
      role: 'Security Director',
      expertise: 'Cybersecurity',
      image: '👩‍🔬',
      description: 'Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements.',
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      expertise: 'Digital Transformation',
      image: '👨‍💼',
      description: 'Driving product strategy and digital transformation initiatives for our enterprise clients.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-8"
          variants={itemVariants}
        >
          About Zion Tech Group
        </motion.h1>
        <motion.div className="prose max-w-4xl" variants={itemVariants}>
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech is a leading technology company specializing in innovative
            solutions for businesses of all sizes. We combine cutting-edge
            technology with deep industry expertise to deliver exceptional
            results.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to helping our
            clients achieve their technology goals and drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with AI-driven solutions that automate processes, enhance productivity,
                and drive exponential growth through innovative technology.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s leading provider of intelligent business solutions that transform
                how companies operate and compete in the digital age.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
