"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const InnovationShowcase2025 = () => {
  const [activeTabsetActiveTab] = useState('ai');

  const innovations = {
    ai: [
      {
        title: "Autonomous AI Systems",
        description: "Self-managing AI that operates independently with 99.9% accuracy",
        icon: "🤖",
        features: ["Self-healing algorithms"Predictive maintenance"Real-time optimization"],
        roi: "2,500%"
      },
      {
        title: "Neural Consciousness Integration",
        description: "Advanced AI with consciousness-like decision making capabilities",
        icon: "🧠",
        features: ["Emotional intelligence"Creative problem solving"Ethical reasoning"],
        roi: "3,000%"
      },
      {
        title: "Quantum-Enhanced AI",
        description: "AI systems powered by quantum computing for unprecedented speed",
        icon: "⚛️",
        features: ["Quantum algorithms"Parallel processing"Complex optimization"],
        roi: "5,000%"
      }
    ],
    quantum: [
      {
        title: "Error-Corrected Quantum Computers",
        description: "Stable quantum computing systems for enterprise applications",
        icon: "🔬",
        features: ["Fault tolerance"Scalable architecture"Real-world applications"],
        roi: "4,000%"
      },
      {
        title: "Quantum Machine Learning",
        description: "ML algorithms running on quantum hardware for superior performance",
        icon: "🧮",
        features: ["Quantum neural networks"Exponential speedup"Pattern recognition"],
        roi: "6,000%"
      },
      {
        title: "Quantum Security Solutions",
        description: "Unbreakable encryption and secure communication systems",
        icon: "🔐",
        features: ["Quantum key distribution"Post-quantum cryptography"Secure protocols"],
        roi: "3,500%"
      }
    ],
    automation: [
      {
        title: "Autonomous Business Operations",
        description: "Complete business process automation with minimal human intervention",
        icon: "⚙️",
        features: ["End-to-end automation"Intelligent workflows"Self-optimization"],
        roi: "2,800%"
      },
      {
        title: "Predictive Enterprise Systems",
        description: "AI systems that predict and prevent business issues before they occur",
        icon: "📊",
        features: ["Predictive analytics"Risk mitigation"Proactive solutions"],
        roi: "3,200%"
      },
      {
        title: "Intelligent Process Automation",
        description: "Smart automation that learns and adapts to business needs",
        icon: "🔄",
        features: ["Adaptive algorithms"Continuous learning"Dynamic optimization"],
        roi: "2,600%"
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Innovation Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our groundbreaking innovations that are transforming industries and delivering 
            unprecedented ROI for enterprise clients worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              AI Innovation
            </button>
            <button
              onClick={() => setActiveTab('quantum')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'quantum'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quantum Computing
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'automation'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Business Automation
            </button>
          </div>
        </div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {innovations[activeTab].map((innovationindex) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{innovation.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {innovation.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  ROI: {innovation.roi}
                </div>
              </div>

              <div className="space-y-3">
                {innovation.features.map((featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={`/services/${activeTab}/${index + 1}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprise clients who have achieved unprecedented ROI with our 
            revolutionary technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase2025;