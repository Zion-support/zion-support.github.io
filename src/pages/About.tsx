import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

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
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cybersecurity,
            and cloud infrastructure. Our mission is to transform businesses through
            innovative technology solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12" variants={itemVariants}>
          {[
            { id: 'mission', label: 'Our Mission' },
            { id: 'team', label: 'Our Team' },
            { id: 'values', label: 'Our Values' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
          {activeTab === 'mission' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>
              <Card
                title="Our Mission"
                description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age."
                icon="🎯"
              />
              <Card
                title="Our Vision"
                description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world."
                icon="🚀"
              />
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  title={member.name}
                  description={member.description}
                  icon={member.image}
                  className="text-center"
                >
                  <div className="mt-4">
                    <p className="text-cyan-400 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.expertise}</p>
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
              <Card
                title="Innovation"
                description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve complex problems."
                icon="💡"
              />
              <Card
                title="Excellence"
                description="We maintain the highest standards in everything we do, from our code quality to our customer service and support."
                icon="⭐"
              />
              <Card
                title="Integrity"
                description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners."
                icon="🤝"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
