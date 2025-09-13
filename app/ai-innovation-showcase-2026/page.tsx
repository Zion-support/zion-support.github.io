import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AIInnovationShowcase2026() {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      title: "Quantum AI Processing",
      description: "Revolutionary quantum computing integration with AI for 1000x faster processing",
      category: "Computing",
      impact: "Breakthrough",
      icon: "⚛️",
      features: [
        "Quantum neural networks",
        "Quantum machine learning algorithms", 
        "Quantum optimization techniques",
        "Quantum cryptography integration"
      ],
      benefits: [
        "1000x faster processing speeds",
        "Exponential problem-solving capabilities",
        "Unbreakable security protocols",
        "Revolutionary optimization results"
      ],
      applications: ["Drug discovery", "Financial modeling", "Climate research", "Cryptography"],
      timeline: "Q2 2026",
      status: "In Development"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling thought-controlled AI systems",
      category: "Human-AI Interaction",
      impact: "Transformative",
      icon: "🧠",
      features: [
        "Non-invasive neural reading",
        "Thought-to-text conversion",
        "AI-assisted cognitive enhancement",
        "Emotional state recognition"
      ],
      benefits: [
        "Hands-free AI interaction",
        "Enhanced cognitive abilities",
        "Accessibility improvements",
        "Real-time mental health monitoring"
      ],
      applications: ["Healthcare", "Accessibility", "Gaming", "Education"],
      timeline: "Q4 2026",
      status: "Research Phase"
    },
    {
      title: "Autonomous AI Agents",
      description: "Self-evolving AI agents capable of independent decision-making and learning",
      category: "Autonomous Systems",
      impact: "Revolutionary",
      icon: "🤖",
      features: [
        "Self-modifying code capabilities",
        "Independent goal setting",
        "Cross-domain knowledge transfer",
        "Ethical decision-making frameworks"
      ],
      benefits: [
        "True AI autonomy",
        "Continuous self-improvement",
        "Complex problem-solving",
        "Reduced human intervention needs"
      ],
      applications: ["Space exploration", "Scientific research", "Emergency response", "Business automation"],
      timeline: "Q3 2026",
      status: "Prototype Ready"
    },
    {
      title: "Molecular AI Computing",
      description: "DNA-based computing systems with AI for unprecedented data processing",
      category: "Biocomputing",
      impact: "Breakthrough",
      icon: "🧬",
      features: [
        "DNA storage systems",
        "Molecular logic gates",
        "Biological neural networks",
        "Self-replicating algorithms"
      ],
      benefits: [
        "Massive data storage capacity",
        "Energy-efficient processing",
        "Self-healing systems",
        "Biological integration"
      ],
      applications: ["Data archiving", "Medical diagnostics", "Environmental monitoring", "Biological research"],
      timeline: "Q1 2027",
      status: "Concept Phase"
    }
  ];

  const breakthroughMetrics = [
    { metric: "Processing Speed", improvement: "1000x", icon: "⚡" },
    { metric: "Data Storage", improvement: "1M TB", icon: "💾" },
    { metric: "Energy Efficiency", improvement: "99%", icon: "🔋" },
    { metric: "Accuracy Rate", improvement: "99.9%", icon: "🎯" }
  ];

  const innovationCategories = [
    { id: 'all', name: 'All Innovations', icon: '🌐', count: innovations.length },
    { id: 'Computing', name: 'Computing', icon: '💻', count: innovations.filter(i => i.category === 'Computing').length },
    { id: 'Human-AI Interaction', name: 'Human-AI', icon: '🧠', count: innovations.filter(i => i.category === 'Human-AI Interaction').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: innovations.filter(i => i.category === 'Autonomous Systems').length },
    { id: 'Biocomputing', name: 'Biocomputing', icon: '🧬', count: innovations.filter(i => i.category === 'Biocomputing').length }
  ];

  const currentInnovation = innovations[selectedInnovation];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium animate-pulse">🚀 BREAKTHROUGH INNOVATIONS - 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🧠 AI Innovation Showcase 2026
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Discover the revolutionary AI innovations that will reshape our world. 
              From quantum computing to neural interfaces - the future is here.
            </p>
            
            {/* Innovation Metrics */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {breakthroughMetrics.map((metric, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-4xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold mb-1">{metric.improvement}</div>
                  <div className="text-sm opacity-90">{metric.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌟 Innovation Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore breakthrough innovations across different AI domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {innovationCategories.map((category) => (
              <div key={category.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-sm text-gray-600">{category.count} Innovations</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Innovation Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🔬 Featured Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into our most groundbreaking AI innovation
            </p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Innovation Details */}
              <div className="p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{currentInnovation.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-semibold">
                        {currentInnovation.category}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full font-semibold ${
                        currentInnovation.impact === 'Breakthrough' 
                          ? 'bg-red-100 text-red-800'
                          : currentInnovation.impact === 'Transformative'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {currentInnovation.impact}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentInnovation.title}</h3>
                    <p className="text-gray-600 text-lg">{currentInnovation.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentInnovation.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {currentInnovation.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentInnovation.applications.map((app, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation Visual/Stats */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-12 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="text-8xl mb-4">{currentInnovation.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{currentInnovation.title}</h3>
                    <p className="text-purple-100">{currentInnovation.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Development Status</h4>
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          currentInnovation.status === 'In Development' ? 'bg-yellow-400' :
                          currentInnovation.status === 'Prototype Ready' ? 'bg-green-400' :
                          currentInnovation.status === 'Research Phase' ? 'bg-blue-400' :
                          'bg-gray-400'
                        }`}></div>
                        <span>{currentInnovation.status}</span>
                      </div>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Expected Timeline</h4>
                      <div className="text-2xl font-bold">{currentInnovation.timeline}</div>
                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3">Impact Level</h4>
                      <div className="text-2xl font-bold">{currentInnovation.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedInnovation(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  selectedInnovation === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Innovations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 All Breakthrough Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all our revolutionary AI innovations and their potential impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{innovation.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {innovation.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        innovation.impact === 'Breakthrough' 
                          ? 'bg-red-100 text-red-800'
                          : innovation.impact === 'Transformative'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {innovation.impact}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{innovation.title}</h3>
                    <p className="text-gray-600">{innovation.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {innovation.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {innovation.features.length > 2 && (
                        <span className="text-gray-400 text-xs">+{innovation.features.length - 2} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Timeline: {innovation.timeline}
                  </div>
                  <button
                    onClick={() => setSelectedInnovation(index)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the AI Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in shaping the future with breakthrough AI innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              🚀 Partner With Us
            </Link>
            <Link
              to="/ai-interactive-learning-hub"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              🎓 Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}