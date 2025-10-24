import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AICybersecuritySuitePage() {
  const features = [
    {
      icon: "🛡️",
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time.",
      details: ["Real-time monitoring", "Behavioral analysis", "Anomaly detection"]
    },
    {
      icon: "🔐",
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with continuous verification and access control.",
      details: ["Continuous verification", "Access control", "Identity management"]
    },
    {
      icon: "⚡",
      title: "Automated Response",
      description: "Automated incident response and threat mitigation with AI-powered decision making.",
      details: ["Instant response", "Threat mitigation", "Recovery automation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity solutions with advanced threat detection, zero trust security, and automated incident response capabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">AI Cybersecurity Suite</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI-powered cybersecurity solutions with advanced threat detection, 
              zero trust security, and automated incident response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your organization with cutting-edge AI-powered cybersecurity solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with our comprehensive AI-powered cybersecurity suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </>
  );
}