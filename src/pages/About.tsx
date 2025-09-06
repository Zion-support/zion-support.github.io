import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          We are a leading technology company specializing in AI services, micro SaaS development, and enterprise IT solutions.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>AI-powered applications and machine learning solutions</li>
          <li>Micro SaaS product development and deployment</li>
          <li>Cloud migration and infrastructure optimization</li>
          <li>Cybersecurity and compliance solutions</li>
          <li>Data analytics and business intelligence</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p className="text-gray-700"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;