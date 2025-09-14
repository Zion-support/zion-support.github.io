"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';
ArrowRightBrainCpuDatabaseNetworkShieldZapTargetTrendingUpUsersGlobeRocket

const AI2025_2026TechnologyShowcase = () => {
  const [activeTabsetActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      description: "Revolutionary AI solutions transforming industries worldwide",
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      features: [
        "Neural Network Optimization",
        "Machine Learning Automation",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "Intelligent Automation"
      ],
      stats: [
        { label: "AI Models Deployed"value: "500+" },
        { label: "Accuracy Rate"value: "99.9%" },
        { label: "Processing Speed"value: "1000x" },
        { label: "Cost Reduction"value: "60%" }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: <Cpu className="w-12 h-12 text-purple-600" />,
      features: [
        "Quantum Algorithm Development",
        "Quantum Machine Learning",
        "Cryptographic Security",
        "Optimization Problems",
        "Simulation Capabilities",
        "Quantum Networking"
      ],
      stats: [
        { label: "Qubits Processed"value: "1000+" },
        { label: "Speed Improvement"value: "10000x" },
        { label: "Problems Solved"value: "100+" },
        { label: "Research Papers"value: "50+" }
      ]
    },
    automation: {
      title: "Intelligent Automation",
      description: "Smart automation systems that adapt and learn continuously",
      icon: <Zap className="w-12 h-12 text-green-600" />,
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Smart Scheduling",
        "Resource Management",
        "Quality Control",
        "Predictive Maintenance"
      ],
      stats: [
        { label: "Processes Automated"value: "1000+" },
        { label: "Efficiency Gain"value: "300%" },
        { label: "Error Reduction"value: "95%" },
        { label: "Time Saved"value: "80%" }
      ]
    },
    cloud: {
      title: "Cloud Infrastructure",
      description: "Scalablesecureand intelligent cloud solutions",
      icon: <Globe className="w-12 h-12 text-orange-600" />,
      features: [
        "Multi-Cloud Architecture",
        "Edge Computing",
        "Serverless Functions",
        "Container Orchestration",
        "Auto-Scaling",
        "Global Distribution"
      ],
      stats: [
        { label: "Global Regions"value: "50+" },
        { label: "Uptime"value: "99.99%" },
        { label: "Data Centers"value: "200+" },
        { label: "Peak Performance"value: "100%" }
      ]
    }
  };

  const tabs = [
    { id: 'ai'name: 'AI & ML'icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum'name: 'Quantum'icon: <Cpu className="w-5 h-5" /> },
    { id: 'automation'name: 'Automation'icon: <Zap className="w-5 h-5" /> },
    { id: 'cloud'name: 'Cloud'icon: <Globe className="w-5 h-5" /> }
  ];

  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Technology Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of advanced technologies that are reshaping industries and driving innovation across the globe.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Technology Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Technology Info */}
            <div>
              <div className="flex items-center mb-6">
                {currentTech.icon}
                <div className="ml-4">
                  <h3 className="text-3xl font-bold text-gray-900">{currentTech.title}</h3>
                  <p className="text-lg text-gray-600">{currentTech.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTech.features.map((featureindex) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {currentTech.stats.map((statindex) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual/Interactive Element */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {currentTech.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentTech.title} in Action
                </h4>
                <p className="text-gray-600 mb-6">
                  Experience the power of {currentTech.title.toLowerCase()} through our interactive demos and real-world applications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Performance</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Efficiency</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">88%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Innovation</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how our cutting-edge technologies can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/technologies"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Technologies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2026TechnologyShowcase;