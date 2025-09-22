:src/pages/About.tsx
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
:src/pages/About.tsx
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI-powered solutions,
            micro SaaS platforms, and comprehensive IT services.
          </p>
        </div>

:src/pages/About.tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive
              innovation, efficiency, and growth. We believe in the transformative
              power of AI and modern software architecture.
            </p>
            <p className="text-gray-300">
              Our team of expert engineers, data scientists, and business strategists
              work together to deliver solutions that not only meet today's needs but
              anticipate tomorrow's challenges.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10+ years of industry experience</li>
              <li>• 500+ successful projects</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• 24/7 customer support</li>
              <li>• Enterprise-grade security</li>
            </ul>
          </div>
:src/pages/About.tsx
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-400">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SB</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Brown</h3>
              <p className="text-gray-400">Head of Design</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Expert Team"
              description="Our team consists of industry experts with years of experience in AI, cybersecurity, and cloud technologies."
            />
            <Card
              title="Proven Track Record"
              description="We have successfully delivered 500+ projects for clients across various industries worldwide."
            />
            <Card
              title="24/7 Support"
              description="Our dedicated support team is available around the clock to ensure your systems run smoothly."
            />
            <Card
              title="Cutting-Edge Technology"
              description="We stay ahead of the curve by adopting the latest technologies and best practices in the industry."
            />
            <Card
              title="Custom Solutions"
              description="Every solution we deliver is tailored to meet the specific needs and requirements of our clients."
            />
            <Card
              title="Competitive Pricing"
              description="We offer competitive pricing without compromising on quality, ensuring the best value for your investment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
