import React, { useState } from 'react';

const TechnologyShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6">
              🚀 TECHNOLOGY SHOWCASE 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Experience the Future
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover cutting-edge technologies that are reshaping industries and creating new possibilities for human advancement.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg">
                Start Exploring
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg">
                Watch Demo
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <section className="py-16 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
      </section>
      {/* Technology Tabs */}
      <section className="py-20">
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🔬 Explore Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the technologies that are defining the future of business and society.
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2">
              {Object.entries(technologies).map(([key, tech]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.title}
                </button>
              ))}
          {/* Tab Content */}
            key={activeTab}
            className="bg-white rounded-2xl p-8 shadow-lg"
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            <div className="grid md:grid-cols-3 gap-8">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{feature.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      feature.impact === 'Revolutionary' ? 'bg-red-100 text-red-700' :
                      feature.impact === 'Transformative' ? 'bg-orange-100 text-orange-700' :
                      feature.impact === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {feature.impact}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
      {/* Interactive Demos Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
              🎬 Interactive Demos
              Experience our technologies in action through interactive demonstrations and real-world applications.
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">▶️</div>
                    <div className="text-sm text-gray-600">Demo Video</div>
                    <div className="text-xs text-gray-500">{demo.duration}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <ul className="space-y-1 mb-4">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                  Watch Demo
      {/* Innovation Timeline */}
      <section className="py-20 bg-white">
              🚀 Innovation Timeline
              Track the evolution of breakthrough technologies and their impact on society.
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
            {[
              { year: "2024", title: "AI Foundation", description: "Large language models achieve human-level performance" },
              { year: "2025", title: "Quantum Breakthrough", description: "First practical quantum computers enter commercial use" },
              { year: "2026", title: "Neural Interfaces", description: "Non-invasive brain-computer interfaces become mainstream" },
              { year: "2027", title: "AGI Emergence", description: "Artificial General Intelligence reaches human-level capabilities" },
              { year: "2028", title: "Consciousness AI", description: "AI systems exhibit consciousness-like behaviors" }
            ].map((milestone, index) => (
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build the Future?
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Partner with us to implement cutting-edge technologies that will transform your business and create new opportunities for growth.
                Start Your Project
                Schedule Demo
    </div>
  );
};
export default TechnologyShowcase2025;
