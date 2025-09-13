import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Cpu, Target, TrendingUp, Users, Award, CheckCircle, Brain } from 'lucide-react';

const QuantumComputingSolutions2025Showcase: React.FC = () => {
  const quantumSolutions = [
    {
      id: 1,
      title: "Quantum Supremacy Achieved in Real-World Applications",
      description: "First practical quantum computer solving complex optimization problems 100 million times faster than classical computers",
      category: "Quantum Supremacy",
      readTime: "12 min read",
      views: "4.2M",
      likes: "89K",
      image: "/images/quantum-supremacy-2025.jpg",
      tags: ["Quantum Supremacy", "Optimization", "Real-World", "2025"],
      featured: true,
      publishedDate: "2025-01-15",
      author: "Dr. Quantum Chen",
      authorRole: "Quantum Computing Director",
      qubits: "1000+",
      coherenceTime: "100ms",
      errorRate: "0.01%"
    },
    {
      id: 2,
      title: "Error-Corrected Quantum Computers Deployed",
      description: "Breakthrough in quantum error correction enabling fault-tolerant quantum computing for commercial applications",
      category: "Error Correction",
      readTime: "15 min read",
      views: "3.8M",
      likes: "76K",
      image: "/images/error-corrected-quantum.jpg",
      tags: ["Error Correction", "Fault Tolerance", "Commercial", "2025"],
      featured: true,
      publishedDate: "2025-01-14",
      author: "Dr. Elena Quantum",
      authorRole: "Quantum Error Correction Lead",
      qubits: "500+",
      coherenceTime: "200ms",
      errorRate: "0.001%"
    },
    {
      id: 3,
      title: "Quantum Machine Learning Revolution",
      description: "Quantum algorithms achieving exponential speedup in machine learning tasks, revolutionizing AI capabilities",
      category: "Quantum ML",
      readTime: "18 min read",
      views: "5.1M",
      likes: "112K",
      image: "/images/quantum-ml-revolution.jpg",
      tags: ["Quantum ML", "Exponential Speedup", "AI Revolution", "2025"],
      featured: true,
      publishedDate: "2025-01-13",
      author: "Dr. Marcus Quantum",
      authorRole: "Quantum AI Research Director",
      qubits: "2000+",
      coherenceTime: "150ms",
      errorRate: "0.005%"
    },
    {
      id: 4,
      title: "Quantum Internet Infrastructure",
      description: "First quantum internet network enabling secure quantum communication across global distances",
      category: "Quantum Internet",
      readTime: "14 min read",
      views: "2.9M",
      likes: "58K",
      image: "/images/quantum-internet-2025.jpg",
      tags: ["Quantum Internet", "Secure Communication", "Global Network", "2025"],
      featured: false,
      publishedDate: "2025-01-12",
      author: "Dr. Sarah Quantum",
      authorRole: "Quantum Networks Lead",
      qubits: "100+",
      coherenceTime: "50ms",
      errorRate: "0.1%"
    },
    {
      id: 5,
      title: "Quantum Cryptography Breakthrough",
      description: "Unbreakable quantum encryption protocols securing data transmission with perfect mathematical security",
      category: "Quantum Security",
      readTime: "11 min read",
      views: "3.5M",
      likes: "71K",
      image: "/images/quantum-cryptography.jpg",
      tags: ["Quantum Cryptography", "Unbreakable Security", "Data Protection", "2025"],
      featured: false,
      publishedDate: "2025-01-11",
      author: "Dr. James Quantum",
      authorRole: "Quantum Security Director",
      qubits: "50+",
      coherenceTime: "300ms",
      errorRate: "0.0001%"
    },
    {
      id: 6,
      title: "Quantum Simulation of Complex Systems",
      description: "Quantum computers simulating molecular and material systems with unprecedented accuracy and speed",
      category: "Quantum Simulation",
      readTime: "16 min read",
      views: "2.7M",
      likes: "63K",
      image: "/images/quantum-simulation-2025.jpg",
      tags: ["Quantum Simulation", "Molecular Systems", "Materials Science", "2025"],
      featured: false,
      publishedDate: "2025-01-10",
      author: "Dr. Aisha Quantum",
      authorRole: "Quantum Simulation Lead",
      qubits: "1500+",
      coherenceTime: "180ms",
      errorRate: "0.02%"
    }
  ];

  const quantumStats = [
    { label: "Quantum Qubits", value: "10,000+", icon: Atom },
    { label: "Coherence Time", value: "500ms", icon: Zap },
    { label: "Error Rate", value: "0.001%", icon: Target },
    { label: "Global Impact", value: "5.2B+", icon: Users }
  ];

  const quantumCapabilities = [
    {
      title: "Exponential Speedup",
      description: "Quantum algorithms solving problems exponentially faster than classical computers",
      icon: Zap,
      benefit: "1000x faster"
    },
    {
      title: "Perfect Security",
      description: "Quantum cryptography providing mathematically unbreakable encryption",
      icon: CheckCircle,
      benefit: "100% secure"
    },
    {
      title: "Complex Simulation",
      description: "Simulating quantum systems impossible for classical computers",
      icon: Brain,
      benefit: "Unlimited scale"
    },
    {
      title: "Optimization Mastery",
      description: "Solving complex optimization problems in seconds instead of years",
      icon: Target,
      benefit: "Real-time solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Solutions 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of computing with quantum solutions that deliver exponential speedup, 
            perfect security, and unprecedented computational power for the most complex problems.
          </p>
        </div>

        {/* Quantum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quantumStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quantum Capabilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Quantum Computing Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quantumCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{capability.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{capability.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Quantum Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Quantum Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumSolutions.filter(item => item.featured).map((item) => (
              <div key={item.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                      <span className="text-sm">likes</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Quantum Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-cyan-400 font-bold text-sm">{item.qubits}</div>
                      <div className="text-gray-400 text-xs">Qubits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold text-sm">{item.coherenceTime}</div>
                      <div className="text-gray-400 text-xs">Coherence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-sm">{item.errorRate}</div>
                      <div className="text-gray-400 text-xs">Error Rate</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.author}</div>
                        <div className="text-gray-400 text-xs">{item.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to={`/quantum-solutions/${item.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Quantum Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-cyan-400" />
            All Quantum Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumSolutions.map((item) => (
              <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  
                  {/* Mini Quantum Specs */}
                  <div className="flex justify-between text-xs text-gray-400 mb-3">
                    <span>Qubits: {item.qubits}</span>
                    <span>Error: {item.errorRate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {item.publishedDate} • {item.author}
                    </div>
                    <Link 
                      to={`/quantum-solutions/${item.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                    >
                      Explore
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Experience Quantum Computing Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution and discover how quantum computing can transform 
              your business with exponential speedup and perfect security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quantum-computing"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Explore Quantum Solutions
              </Link>
              <Link 
                to="/quantum-demo"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Try Quantum Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingSolutions2025Showcase;