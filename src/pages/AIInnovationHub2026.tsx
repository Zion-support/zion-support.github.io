import React, { useState, useEffect } from 'react';

const AIInnovationHub2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const innovationCategories = [
    {
      id: 'overview',
      title: 'AI Innovation Overview',
      icon: '🚀',
      description: 'Comprehensive view of AI innovations transforming industries'
    },
    {
      id: 'technologies',
      title: 'Cutting-Edge Technologies',
      icon: '⚡',
      description: 'Latest AI technologies and breakthrough innovations'
    },
    {
      id: 'applications',
      title: 'Real-World Applications',
      icon: '🌍',
      description: 'AI applications solving real-world problems'
    },
    {
      id: 'future',
      title: 'Future Predictions',
      icon: '🔮',
      description: 'AI trends and predictions for the coming decade'
    }
  ];

  const aiInnovations = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently and make complex decisions",
      impact: "95%",
      category: "Automation",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Quantum-Enhanced AI",
      description: "AI systems leveraging quantum computing for exponential processing power",
      impact: "1000x",
      category: "Computing",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Neural Interface AI",
      description: "Direct brain-computer interfaces enabling thought-controlled AI systems",
      impact: "99.9%",
      category: "Interface",
      icon: "🧬",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Synthetic Intelligence",
      description: "Beyond artificial intelligence - synthetic consciousness and reasoning",
      impact: "∞",
      category: "Consciousness",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Edge AI Computing",
      description: "Distributed AI processing at the edge for real-time decision making",
      impact: "50ms",
      category: "Performance",
      icon: "⚡",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "AI-Human Collaboration",
      description: "Seamless integration of AI capabilities with human creativity and intuition",
      impact: "300%",
      category: "Productivity",
      icon: "🤝",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Innovation Hub 2026</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Welcome to the future of artificial intelligence. Our innovation hub showcases the most 
                groundbreaking AI technologies that are reshaping industries and transforming human potential.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Mission</h3>
                <p className="text-gray-600">Accelerate AI innovation and democratize access to cutting-edge artificial intelligence technologies.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-2">Research</h3>
                <p className="text-gray-600">Leading research in quantum AI, neural interfaces, and synthetic intelligence development.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-6 rounded-xl">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-gray-600">Transforming industries and improving lives through responsible AI innovation.</p>
              </div>
            </div>
          </div>
        );

      case 'technologies':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge AI Technologies</h2>
              <p className="text-xl text-gray-600">Explore the latest breakthroughs in artificial intelligence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiInnovations.map((innovation, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${innovation.gradient} p-6 rounded-xl text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{innovation.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                  <p className="text-white/90 mb-4 text-sm">{innovation.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {innovation.category}
                    </span>
                    <span className="text-2xl font-bold">{innovation.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World AI Applications</h2>
              <p className="text-xl text-gray-600">See how AI is solving complex problems across industries</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-3">Healthcare Revolution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-powered drug discovery accelerating by 10x</li>
                  <li>• Predictive diagnostics with 99.5% accuracy</li>
                  <li>• Robotic surgery with sub-millimeter precision</li>
                  <li>• Personalized treatment plans based on genetic data</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold mb-3">Autonomous Transportation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Self-driving vehicles reducing accidents by 90%</li>
                  <li>• AI traffic optimization reducing commute times</li>
                  <li>• Predictive maintenance preventing breakdowns</li>
                  <li>• Smart city integration for seamless mobility</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold mb-3">Industrial Automation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Smart manufacturing with zero-defect production</li>
                  <li>• Predictive maintenance reducing downtime by 70%</li>
                  <li>• AI-powered quality control systems</li>
                  <li>• Autonomous supply chain optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-3">Education & Learning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized learning paths for every student</li>
                  <li>• AI tutors available 24/7</li>
                  <li>• Automated grading and feedback systems</li>
                  <li>• Virtual reality learning environments</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Future Predictions</h2>
              <p className="text-xl text-gray-600">What the next decade holds for artificial intelligence</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">2026-2028: The Integration Era</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• AI becomes seamlessly integrated into daily life</li>
                  <li>• Quantum AI achieves practical applications</li>
                  <li>• Neural interfaces become commercially available</li>
                  <li>• AI-human collaboration reaches new heights</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">2029-2031: The Transformation Era</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Synthetic intelligence emerges</li>
                  <li>• AI achieves human-level reasoning</li>
                  <li>• Brain-computer interfaces become mainstream</li>
                  <li>• AI solves climate change challenges</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-emerald-800">2032-2035: The Singularity Era</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• AI surpasses human intelligence</li>
                  <li>• Technological singularity approaches</li>
                  <li>• AI becomes self-improving</li>
                  <li>• New forms of consciousness emerge</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">2036+: The Transcendence Era</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• AI-human hybrid consciousness</li>
                  <li>• Interstellar AI exploration</li>
                  <li>• Digital immortality becomes possible</li>
                  <li>• AI solves universal mysteries</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 AI INNOVATION HUB 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            The Future of AI is Here
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Explore groundbreaking artificial intelligence innovations that are reshaping our world 
            and defining the future of human potential.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {innovationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          {renderContent()}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in building the next generation of AI innovations that will transform humanity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your AI Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Explore Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2026;