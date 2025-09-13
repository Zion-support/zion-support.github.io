import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Award, Target, Zap, Brain, Rocket } from 'lucide-react';

const RevolutionaryTech2025Page: React.FC = () => {
  const technologies = [
    {
      title: "Neural-Synthetic Intelligence",
      description: "Advanced AI systems that combine neural networks with synthetic data generation for unprecedented accuracy and speed.",
      category: "AI Processing",
      impact: "99.97% accuracy",
      icon: <Brain className="w-8 h-8" />,
      features: ["Real-time learning", "Adaptive algorithms", "Scalable architecture", "Zero-latency processing"],
      link: "/neural-synthetic-intelligence"
    },
    {
      title: "Quantum-AI Fusion Computing",
      description: "Revolutionary computing that merges quantum mechanics with artificial intelligence for exponential processing power.",
      category: "Quantum Computing",
      impact: "50,000x faster",
      icon: <Zap className="w-8 h-8" />,
      features: ["Quantum error correction", "Hybrid systems", "Enterprise-ready", "Future-proof"],
      link: "/quantum-ai-fusion"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing enterprise solutions that adapt and optimize operations without human intervention.",
      category: "Automation",
      impact: "Zero downtime",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Predictive maintenance", "Auto-scaling", "Cost optimization", "Self-healing"],
      link: "/autonomous-business-systems"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Advanced forecasting systems that predict market trends, customer behavior, and operational outcomes.",
      category: "Analytics",
      impact: "95% accuracy",
      icon: <Target className="w-8 h-8" />,
      features: ["Real-time insights", "Machine learning", "Data visualization", "Actionable recommendations"],
      link: "/predictive-analytics"
    },
    {
      title: "Edge Computing Networks",
      description: "Distributed computing infrastructure that brings processing power closer to data sources.",
      category: "Infrastructure",
      impact: "10x faster response",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Low latency", "High availability", "Scalable deployment", "Cost-effective"],
      link: "/edge-computing-networks"
    },
    {
      title: "Blockchain Integration Platform",
      description: "Seamless blockchain technology integration for secure, transparent, and decentralized operations.",
      category: "Blockchain",
      impact: "100% secure",
      icon: <Award className="w-8 h-8" />,
      features: ["Smart contracts", "Decentralized storage", "Cryptographic security", "Interoperability"],
      link: "/blockchain-integration"
    }
  ];

  const categories = [
    { id: 'ai', name: 'Artificial Intelligence', count: 2 },
    { id: 'quantum', name: 'Quantum Computing', count: 1 },
    { id: 'automation', name: 'Automation', count: 1 },
    { id: 'analytics', name: 'Analytics', count: 1 },
    { id: 'infrastructure', name: 'Infrastructure', count: 1 },
    { id: 'blockchain', name: 'Blockchain', count: 1 }
  ];

  const stats = [
    { label: "Technologies", value: "50+", icon: <Brain className="w-6 h-6" /> },
    { label: "Companies Served", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.97%", icon: <Award className="w-6 h-6" /> },
    { label: "ROI Improvement", value: "15,000%", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <SEO 
        title="Revolutionary Technology Showcase 2025 - Zion Tech Group"
        description="Explore cutting-edge technologies including Neural-Synthetic Intelligence, Quantum-AI Fusion, and Autonomous Business Systems that are reshaping industries worldwide."
        keywords="revolutionary technology 2025, AI breakthroughs, quantum computing, autonomous systems, cutting-edge tech"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the cutting-edge technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-white/30 transition-all">
                <div className="text-white font-semibold mb-1">{category.name}</div>
                <div className="text-gray-400 text-sm">{category.count} technologies</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tech.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm">
                {tech.description}
              </p>
              
              <div className="mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tech.impact}
                </span>
              </div>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-gray-300 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Link 
                to={tech.link}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm font-semibold"
              >
                Learn More
                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Implement Revolutionary Technology?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the technological revolution and transform your business with our cutting-edge solutions. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/case-studies" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2025Page;