import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  BrainIcon, 
  RocketLaunchIcon, 
  LightBulbIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const AIInnovationShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('automation');

  const innovations = {
    automation: {
      title: "AI-Powered Business Automation",
      description: "Revolutionize your operations with intelligent automation that learns, adapts, and optimizes continuously.",
      features: [
        "Intelligent Process Automation",
        "Predictive Analytics Integration",
        "Real-time Decision Making",
        "Self-Healing Systems",
        "Cross-Platform Integration"
      ],
      stats: [
        { label: "Efficiency Gain", value: "300%" },
        { label: "Cost Reduction", value: "45%" },
        { label: "Error Reduction", value: "90%" }
      ],
      image: "/api/placeholder/600/400"
    },
    intelligence: {
      title: "Advanced AI Intelligence",
      description: "Deploy cutting-edge AI models that understand context, make predictions, and provide actionable insights.",
      features: [
        "Natural Language Processing",
        "Computer Vision Capabilities",
        "Predictive Modeling",
        "Sentiment Analysis",
        "Recommendation Engines"
      ],
      stats: [
        { label: "Accuracy Rate", value: "98.5%" },
        { label: "Processing Speed", value: "10x Faster" },
        { label: "Data Insights", value: "Real-time" }
      ],
      image: "/api/placeholder/600/400"
    },
    integration: {
      title: "Seamless AI Integration",
      description: "Integrate AI capabilities into your existing systems with minimal disruption and maximum impact.",
      features: [
        "API-First Architecture",
        "Cloud-Native Solutions",
        "Legacy System Compatibility",
        "Scalable Infrastructure",
        "Security & Compliance"
      ],
      stats: [
        { label: "Integration Time", value: "50% Faster" },
        { label: "Uptime", value: "99.9%" },
        { label: "Security Score", value: "A+" }
      ],
      image: "/api/placeholder/600/400"
    }
  };

  const tabs = [
    { id: 'automation', label: 'Automation', icon: RocketLaunchIcon },
    { id: 'intelligence', label: 'Intelligence', icon: BrainIcon },
    { id: 'integration', label: 'Integration', icon: CpuChipIcon }
  ];

  const currentInnovation = innovations[activeTab as keyof typeof innovations];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <LightBulbIcon className="w-4 h-4 mr-2" />
            AI Innovation Showcase 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Solutions
            <span className="block text-blue-600">That Transform Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge AI technologies are helping companies achieve 
            unprecedented growth, efficiency, and competitive advantage.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {currentInnovation.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {currentInnovation.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {currentInnovation.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {currentInnovation.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentInnovation.image}
                alt={currentInnovation.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging our AI solutions to achieve 
            unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              Start Your AI Journey
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2025;