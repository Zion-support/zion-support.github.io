import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, TrendingUp, Atom, Cpu, Zap, Brain, ChevronRight, Star } from 'lucide-react';

const QuantumComputingSolutions2025Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const contentData = {
    solutions: [
      {
        id: 1,
        title: "Quantum Machine Learning Platform 2025",
        description: "Revolutionary quantum machine learning platform that leverages quantum computing to solve complex optimization problems 1000x faster than classical computers.",
        category: "Quantum ML",
        readTime: "18 min read",
        views: "3.2M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Quantum ML", "Platform", "2025"],
        features: ["1M+ Qubits", "99.9% Accuracy", "Real-time Processing"]
      },
      {
        id: 2,
        title: "Error-Corrected Quantum Computers",
        description: "Breakthrough error-corrected quantum computers that maintain quantum coherence for practical applications, enabling reliable quantum computing at scale.",
        category: "Quantum Hardware",
        readTime: "22 min read",
        views: "4.1M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Error Correction", "Hardware", "Reliability"],
        features: ["Fault Tolerance", "Long Coherence", "Scalable"]
      },
      {
        id: 3,
        title: "Quantum Internet Infrastructure",
        description: "Next-generation quantum internet infrastructure that enables secure quantum communication and distributed quantum computing across global networks.",
        category: "Quantum Network",
        readTime: "25 min read",
        views: "2.8M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["Quantum Internet", "Security", "Global"],
        features: ["Quantum Encryption", "Global Network", "Ultra-Secure"]
      },
      {
        id: 4,
        title: "Quantum-AI Fusion Framework",
        description: "Advanced quantum-AI fusion framework that combines quantum computing with artificial intelligence for unprecedented computational capabilities.",
        category: "Quantum AI",
        readTime: "20 min read",
        views: "5.7M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Quantum AI", "Fusion", "Framework"],
        features: ["Hybrid Computing", "AI Integration", "Advanced Algorithms"]
      }
    ],
    applications: [
      {
        id: 1,
        title: "Quantum Drug Discovery Platform",
        description: "Revolutionary quantum platform for drug discovery that can simulate molecular interactions with unprecedented accuracy, accelerating pharmaceutical research.",
        category: "Healthcare",
        readTime: "16 min read",
        views: "2.3M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Drug Discovery", "Healthcare", "Simulation"],
        features: ["Molecular Simulation", "Drug Design", "Accelerated Research"]
      },
      {
        id: 2,
        title: "Quantum Financial Modeling",
        description: "Advanced quantum financial modeling systems that can process complex financial data and market simulations with quantum speed and accuracy.",
        category: "Finance",
        readTime: "19 min read",
        views: "3.9M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Finance", "Modeling", "Quantum"],
        features: ["Risk Analysis", "Portfolio Optimization", "Real-time Trading"]
      },
      {
        id: 3,
        title: "Quantum Climate Simulation",
        description: "Breakthrough quantum climate simulation systems that can model complex climate patterns and predict environmental changes with unprecedented detail.",
        category: "Environment",
        readTime: "21 min read",
        views: "4.5M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["Climate", "Simulation", "Environment"],
        features: ["Climate Modeling", "Weather Prediction", "Environmental Analysis"]
      },
      {
        id: 4,
        title: "Quantum Cybersecurity Solutions",
        description: "Ultra-secure quantum cybersecurity solutions that leverage quantum encryption and quantum key distribution for unbreakable security.",
        category: "Security",
        readTime: "17 min read",
        views: "6.2M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Cybersecurity", "Encryption", "Security"],
        features: ["Quantum Encryption", "Key Distribution", "Unbreakable Security"]
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Quantum Supremacy Algorithms",
        description: "Advanced quantum supremacy algorithms that demonstrate quantum advantage over classical computers in specific computational tasks.",
        category: "Algorithms",
        readTime: "23 min read",
        views: "3.6M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Supremacy", "Algorithms", "Advantage"],
        features: ["Quantum Advantage", "Optimization", "Speed"]
      },
      {
        id: 2,
        title: "Quantum Error Correction Codes",
        description: "Revolutionary quantum error correction codes that protect quantum information from decoherence and noise, enabling reliable quantum computing.",
        category: "Error Correction",
        readTime: "26 min read",
        views: "2.9M",
        trending: false,
        image: "/api/placeholder/400/250",
        tags: ["Error Correction", "Codes", "Reliability"],
        features: ["Fault Tolerance", "Noise Protection", "Stability"]
      },
      {
        id: 3,
        title: "Quantum Cloud Computing Platform",
        description: "Scalable quantum cloud computing platform that provides access to quantum computing resources through cloud infrastructure.",
        category: "Cloud Platform",
        readTime: "15 min read",
        views: "4.8M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Cloud", "Platform", "Scalable"],
        features: ["Cloud Access", "Scalable Resources", "Global Availability"]
      },
      {
        id: 4,
        title: "Quantum Neural Networks",
        description: "Breakthrough quantum neural networks that combine quantum computing with neural network architectures for enhanced AI capabilities.",
        category: "Quantum AI",
        readTime: "24 min read",
        views: "5.1M",
        trending: true,
        image: "/api/placeholder/400/250",
        tags: ["Neural Networks", "Quantum AI", "Hybrid"],
        features: ["Quantum Neurons", "Enhanced Learning", "Hybrid Architecture"]
      }
    ]
  };

  const tabs = [
    { id: 'solutions', label: 'Solutions', icon: Atom },
    { id: 'applications', label: 'Applications', icon: Cpu },
    { id: 'technologies', label: 'Technologies', icon: Zap }
  ];

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced quantum computing solutions, applications, and technologies 
            that will revolutionize computation in 2025 and beyond.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentContent.map((item) => (
            <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {item.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.views} views
                  </div>
                </div>
                
                <Link 
                  to={`/quantum-solutions/${item.id}`}
                  className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Explore Solution
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready for Quantum Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the quantum computing revolution. Get early access to our quantum solutions 
            and be part of the future of computation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quantum-computing-solutions-2025"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Atom className="w-6 h-6 mr-2" />
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-demo"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Brain className="w-6 h-6 mr-2" />
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingSolutions2025Showcase;