<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "AI Innovation",
      content: "Discover the latest breakthroughs in artificial intelligence and machine learning technologies.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Automated Decision Making"]
    },
    {
      title: "Digital Transformation",
      content: "Transform your business with cutting-edge digital solutions and modern technologies.",
      features: ["Cloud Migration", "API Integration", "Microservices Architecture", "DevOps Automation"]
    },
    {
      title: "Enterprise Solutions",
      content: "Scale your business with enterprise-grade solutions designed for growth and efficiency.",
      features: ["Scalable Infrastructure", "Security Compliance", "Performance Optimization", "24/7 Support"]
=======
import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const futureContent = [
    {
      title: "Quantum Computing Integration",
      description: "Next-generation quantum algorithms for enterprise applications.",
      status: "Coming Soon",
      icon: "⚛️"
    },
    {
      title: "Autonomous AI Systems",
      description: "Self-managing AI that adapts and optimizes without human intervention.",
      status: "In Development",
      icon: "🧠"
    },
    {
      title: "Advanced Neural Networks",
      description: "State-of-the-art deep learning models for complex problem solving.",
      status: "Beta Testing",
      icon: "🔬"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of technology with our interactive showcase of innovative solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === index
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {tabs[activeTab]?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tabs[activeTab]?.content}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {tabs[activeTab]?.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
=======
import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: 'AI Solutions', icon: '🤖' },
    { id: 'cloud', label: 'Cloud Services', icon: '☁️' },
    { id: 'security', label: 'Cybersecurity', icon: '🔒' },
  ];

  const content = {
    ai: {
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ]
    },
    cloud: {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern enterprises.',
      features: [
        'Multi-Cloud Strategy',
        'Container Orchestration',
        'Serverless Computing',
        'Edge Computing'
      ]
    },
    security: {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets.',
      features: [
        'Threat Detection',
        'Identity Management',
        'Data Encryption',
        'Compliance Monitoring'
      ]
    }
  };

  return (
    <section className='bg-white py-16 rounded-2xl shadow-lg'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>
          2026 Technology Showcase
        </h2>
        
        <div className='max-w-4xl mx-auto'>
          {/* Tab Navigation */}
          <div className='flex justify-center mb-8'>
            <div className='bg-gray-100 rounded-lg p-1 flex'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className='mr-2'>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className='text-xl text-gray-600 mb-8'>
              {content[activeTab as keyof typeof content].description}
            </p>
            
            <div className='grid md:grid-cols-2 gap-6'>
              {content[activeTab as keyof typeof content].features.map((feature, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
                    <svg className='w-4 h-4 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-700 font-medium'>{feature}</span>
                </div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6a72
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
=======
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Future Innovations 2026
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {futureContent.map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-200 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-cyan-300">{item.status}</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 4 },
    { id: 'automation', name: 'Automation', count: 3 },
    { id: 'analytics', name: 'Analytics', count: 3 },
    { id: 'consulting', name: 'Consulting', count: 2 }
  ];

  const contentItems = [
    { id: 1, title: "AI-Powered Customer Service", category: "ai", featured: true },
    { id: 2, title: "Process Automation Suite", category: "automation", featured: false },
    { id: 3, title: "Real-time Analytics Dashboard", category: "analytics", featured: true },
    { id: 4, title: "Digital Transformation Strategy", category: "consulting", featured: false },
    { id: 5, title: "Machine Learning Models", category: "ai", featured: false },
    { id: 6, title: "Workflow Optimization", category: "automation", featured: true },
    { id: 7, title: "Business Intelligence Tools", category: "analytics", featured: false },
    { id: 8, title: "Change Management Consulting", category: "consulting", featured: true }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Interactive Content Showcase 2026
      </h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 ${
              item.featured ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {item.featured && (
              <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                Featured
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Discover how this solution can transform your business operations and drive growth.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No content found for the selected category.</p>
        </div>
      )}
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6a72
=======
import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Interactive Content Showcase 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Interactive Demos
            </h3>
            <p className="text-gray-600 mb-4">
              Experience our AI solutions through interactive demonstrations
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Try Demo
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Live Webinars
            </h3>
            <p className="text-gray-600 mb-4">
              Join our experts for live sessions on AI implementation
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
  );
};

export default InteractiveContentShowcase2026;