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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;