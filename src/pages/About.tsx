import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for modern businesses. We provide comprehensive IT services, AI solutions, and 
            digital transformation consulting.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our team of experts is dedicated to helping organizations leverage cutting-edge 
            technology to achieve their goals and drive growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;