import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DynamicContentShowcaseProps {
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'AI Services',
      content: [
        { title: 'Machine Learning Models', description: 'Custom ML solutions for your business', link: '/ai-services', icon: '🧠' },
        { title: 'Natural Language Processing', description: 'Advanced text analysis and understanding', link: '/ai-services', icon: '💬' },
        { title: 'Computer Vision', description: 'Image and video analysis solutions', link: '/ai-services', icon: '👁️' },
        { title: 'Predictive Analytics', description: 'Data-driven insights and forecasting', link: '/ai-services', icon: '📊' }
      ]
    },
    {
      name: 'IT Solutions',
      content: [
        { title: 'Cloud Migration', description: 'Seamless transition to cloud infrastructure', link: '/cloud-services', icon: '☁️' },
        { title: 'Cybersecurity', description: 'Advanced security solutions and monitoring', link: '/cybersecurity', icon: '🔒' },
        { title: 'DevOps & CI/CD', description: 'Streamlined development and deployment', link: '/devops', icon: '🔄' },
        { title: 'Database Management', description: 'Optimized data storage and retrieval', link: '/database-management', icon: '🗄️' }
      ]
    },
    {
      name: 'Micro SaaS',
      content: [
        { title: 'AI Content Generator', description: 'Automated content creation for marketing', link: '/ai-content-generation', icon: '✍️' },
        { title: 'Project Manager AI', description: 'Intelligent project tracking and management', link: '/ai-project-manager', icon: '📋' },
        { title: 'Customer Support Bot', description: '24/7 AI-powered customer service', link: '/ai-customer-support', icon: '🤖' },
        { title: 'Analytics Dashboard', description: 'Real-time business intelligence', link: '/ai-analytics', icon: '📈' }
      ]
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive AI and IT solutions tailored to your needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tabs[activeTab].content.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;