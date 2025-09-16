import React from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import SEOHead from '../components/SEOHead';
const HomePage: React.FC = () => (
  <>
    <SEOHead
title="Zion Tech Group - Leading AI & Technology Solutions""
      description="Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure. Leading technology company delivering innovative solutions for a smarter future.""
      keywords="AI solutions, cybersecurity, cloud infrastructure, machine learning, automation, technology consulting, digital transformation""
    />
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">"
    {/* Hero Section */}
    <motion.div
className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"",
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
<div className="text-center mb-16">"
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"",
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Zion Tech Group
        </motion.h1>
        <motion.p
className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"",
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Leading AI & Technology Solutions for a Smarter Future
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="lg" onClick={() => alert('Learn More!')}>'
            Explore Our Services
          </Button>
        </motion.div>
      </div>
      {/* Services Grid */}
      <motion.div
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"",
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceCard
            title="AI Services""
            description="Transform your business with cutting-edge AI solutions.""
            icon="✨"",
            features={['Machine Learning', 'NLP', 'Computer Vision', 'AI Consulting']}'
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceCard
            title="Cybersecurity""
            description="Protect your digital assets with advanced security solutions.""
            icon="🔒"",
            features={['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']}'
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceCard
            title="Cloud Infrastructure""
            description="Scale your operations with robust cloud solutions.""
            icon="☁️"",
            features={['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Cost Optimization']}'
          />
        </motion.div>
      </motion.div>
      {/* Why Choose Us Section */}
      <motion.div
className="text-center""
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">",
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">",
          {[
{ title: "Innovation", description: "Pioneering the next generation of technology." },"
            { title: "Expertise", description: "Team of industry-leading professionals." },"
            { title: "Reliability", description: "Trusted solutions for critical operations." },"
            { title: "Scalability", description: "Solutions designed to grow with you." },"
            { title: "Security", description: "Robust protection for all your data." },"
            { title: "Support", description: "24/7 dedicated customer assistance." }"
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card
                title={item.title}
                description={item.description}
                className="h-full""
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </div>
  </>
);

export default HomePage;
