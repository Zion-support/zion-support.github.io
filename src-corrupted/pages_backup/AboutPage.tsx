import React from 'react';

import Card from '../components/Card';
import SEOHead from '../components/SEOHead';
const AboutPage: React.FC = () => (
  <>
    <SEOHead
title="About Us - Zion Tech Group""
      description="Learn about Zion Tech Group's mission to empower businesses with cutting-edge technology solutions. Leading technology company with industry expertise.""
      keywords="about zion tech group, technology company, mission, vision, team, expertise""
      canonicalUrl="https://ziontechgroup.com/about""
    />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">"
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8"",
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"",
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Us
      </motion.h1>
<div className="max-w-4xl mx-auto">"
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-12 text-center leading-relaxed"",
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Zion Tech Group is a leading technology company dedicated to delivering innovative
          solutions that transform businesses and drive growth in the digital age.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">"
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card
title="Our Mission" "
              description="To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth.""
              className="h-full""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card
title="Our Vision" "
              description="To be the global leader in technology solutions, creating a world where every business can leverage technology.""
              className="h-full""
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
    </div>
  </>
);

export default AboutPage;
