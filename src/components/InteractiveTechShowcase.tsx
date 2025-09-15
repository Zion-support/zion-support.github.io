import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    projects: 0,
    satisfaction: 0,
    uptime: 0
  });

  const tabs = [
    { id: 0, name: 'AI Solutions', icon: '🤖', color: 'from-blue-600 to-purple-600' },
    { id: 1, name: 'Quantum Computing', icon: '⚛️', color: 'from-indigo-600 to-purple-600' },
    { id: 2, name: 'Blockchain', icon: '🔗', color: 'from-green-600 to-emerald-600' },
    { id: 3, name: 'IoT Networks', icon: '🌐', color: 'from-orange-600 to-red-600' },
    { id: 4, name: 'Cloud Infrastructure', icon: '☁️', color: 'from-cyan-600 to-blue-600' }
  ];

  const tabContent = [
    {
      title: 'Revolutionary AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence that learns, adapts, and optimizes automatically.',
      features: [
        'Autonomous Business Intelligence',
        'Predictive Analytics Engine',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Machine Learning Pipelines'
      ],
      metrics: { value: '300%', label: 'Efficiency Gain' }
    },
    {
      title: 'Quantum Computing Power',
      description: 'Unlock exponential computational power with quantum solutions that solve complex problems in seconds.',
      features: [
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Quantum Communication'
      ],
      metrics: { value: '10^15x', label: 'Speed Improvement' }
    },
    {
      title: 'Blockchain Innovation',
      description: 'Secure, decentralized solutions powered by advanced blockchain technology for trustless transactions.',
      features: [
        'Smart Contract Development',
        'DeFi Solutions',
        'NFT Marketplaces',
        'Supply Chain Tracking',
        'Digital Identity Management'
      ],
      metrics: { value: '99.99%', label: 'Security Level' }
    },
    {
      title: 'Global IoT Networks',
      description: 'Connect and manage millions of devices worldwide with intelligent IoT platforms and edge computing.',
      features: [
        'Device Management',
        'Real-time Analytics',
        'Edge Computing',
        'Predictive Maintenance',
        'Automated Workflows'
      ],
      metrics: { value: '1M+', label: 'Connected Devices' }
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions that adapt to your business needs with enterprise-grade reliability.',
      features: [
        'Auto-scaling Systems',
        'Multi-cloud Deployment',
        'Disaster Recovery',
        'Load Balancing',
        'Performance Monitoring'
      ],
      metrics: { value: '99.9%', label: 'Uptime SLA' }
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      const targets = { customers: 500, projects: 1000, satisfaction: 99, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          customers: Math.floor(targets.customers * progress),
          projects: Math.floor(targets.projects * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          uptime: Math.floor(targets.uptime * progress * 100) / 100
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);
    };

    animateStats();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      {/* Interactive Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {tabContent[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {tabContent[activeTab].metrics.value}
                </div>
                <div className="text-xl text-gray-600 font-semibold">
                  {tabContent[activeTab].metrics.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">{animatedStats.customers}+</div>
          <div className="text-gray-600 font-semibold">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">{animatedStats.projects}+</div>
          <div className="text-gray-600 font-semibold">Successful Projects</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">{animatedStats.satisfaction}%</div>
          <div className="text-gray-600 font-semibold">Customer Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600 mb-2">{animatedStats.uptime}%</div>
          <div className="text-gray-600 font-semibold">System Uptime</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;