import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2026_2030BreakthroughContentShowcase: React.FC = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "AI 2026: Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary integration of quantum computing with neural networks achieving 10,000x processing speed improvements and 99.9% accuracy in complex problem solving.",
      category: "Quantum AI",
      year: "2026",
      impact: "10,000x Faster",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      features: [
        "Quantum-Neural Architecture",
        "Error-Corrected Quantum Processing",
        "Real-time Learning Adaptation",
        "Multi-dimensional Data Analysis"
      ],
      metrics: {
        processingSpeed: "10,000x",
        accuracy: "99.9%",
        energyEfficiency: "95%",
        scalability: "Unlimited"
      }
    },
    {
      id: 2,
      title: "AI 2027: Autonomous Decision Systems",
      description: "Self-evolving AI systems capable of making complex business decisions with human-level reasoning and superhuman speed.",
      category: "Autonomous AI",
      year: "2027",
      impact: "2,500% ROI",
      icon: Target,
      color: "from-green-600 to-teal-600",
      features: [
        "Autonomous Decision Making",
        "Self-Learning Algorithms",
        "Risk Assessment AI",
        "Strategic Planning Automation"
      ],
      metrics: {
        roi: "2,500%",
        decisionSpeed: "100x",
        accuracy: "98.5%",
        costReduction: "80%"
      }
    },
    {
      id: 3,
      title: "AI 2028: Predictive Maintenance Revolution",
      description: "Advanced AI systems that predict and prevent equipment failures before they occur, reducing downtime by 99% and maintenance costs by 70%.",
      category: "Predictive AI",
      year: "2028",
      impact: "99% Uptime",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      features: [
        "Predictive Failure Analysis",
        "Automated Maintenance Scheduling",
        "Real-time Monitoring",
        "Cost Optimization"
      ],
      metrics: {
        uptime: "99%",
        costReduction: "70%",
        predictionAccuracy: "97%",
        maintenanceEfficiency: "90%"
      }
    },
    {
      id: 4,
      title: "AI 2029: Neural Interface Integration",
      description: "Breakthrough neural interface technology enabling direct brain-computer interaction for enhanced productivity and decision-making.",
      category: "Neural Interface",
      year: "2029",
      impact: "5,000% Productivity",
      icon: Zap,
      color: "from-indigo-600 to-purple-600",
      features: [
        "Direct Neural Interface",
        "Thought-to-Action Processing",
        "Enhanced Cognitive Abilities",
        "Seamless Human-AI Integration"
      ],
      metrics: {
        productivity: "5,000%",
        responseTime: "0.1ms",
        accuracy: "99.8%",
        userSatisfaction: "98%"
      }
    },
    {
      id: 5,
      title: "AI 2030: Omniversal Intelligence",
      description: "The ultimate AI system capable of processing information across multiple dimensions and realities, achieving transcendent intelligence.",
      category: "Transcendent AI",
      year: "2030",
      impact: "Infinite Scale",
      icon: Globe,
      color: "from-cyan-600 to-blue-600",
      features: [
        "Multi-dimensional Processing",
        "Reality Simulation",
        "Infinite Scalability",
        "Transcendent Intelligence"
      ],
      metrics: {
        processingPower: "Infinite",
        dimensions: "Multi",
        intelligence: "Transcendent",
        applications: "Universal"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2026-2030 Breakthrough Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the revolutionary AI breakthroughs that will transform industries and redefine the future of technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Quantum AI Fusion
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Autonomous Systems
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Predictive Intelligence
            </span>
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Neural Interfaces
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {breakthroughContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <div
                key={content.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${content.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-300">{content.category}</span>
                    <div className="text-2xl font-bold text-white">{content.year}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Impact: {content.impact}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {content.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/ai-${content.year.toLowerCase()}-breakthroughs`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Explore {content.year} Breakthroughs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our revolutionary AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026_2030BreakthroughContentShowcase;