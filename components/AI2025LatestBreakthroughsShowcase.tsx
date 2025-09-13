import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock } from 'lucide-react';

const AI2025LatestBreakthroughsShowcase: React.FC = () => {
  const breakthroughs = [
    {
      id: 1,
      title: "Neural Synthesis Architecture",
      description: "Revolutionary neural network architecture achieving unprecedented accuracy in complex problem-solving scenarios.",
      category: "Machine Learning",
      impact: "2,500% Performance Increase",
      timeline: "Q1 2025",
      status: "Live",
      features: [
        "99.9% accuracy in decision-making",
        "Real-time learning capabilities",
        "Self-optimizing algorithms",
        "Cross-domain adaptability"
      ],
      metrics: {
        accuracy: "99.9%",
        speed: "10x faster",
        efficiency: "85% reduction in compute",
        adoption: "500+ companies"
      }
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI Processing",
      description: "Breakthrough quantum computing integration with AI systems for exponential processing power.",
      category: "Quantum Computing",
      impact: "10,000x Processing Speed",
      timeline: "Q2 2025",
      status: "Beta",
      features: [
        "Quantum algorithm optimization",
        "Parallel universe processing",
        "Quantum error correction",
        "Hybrid classical-quantum systems"
      ],
      metrics: {
        speed: "10,000x faster",
        capacity: "Unlimited scale",
        precision: "Quantum precision",
        applications: "50+ use cases"
      }
    },
    {
      id: 3,
      title: "Autonomous AI Ecosystems",
      description: "Self-managing AI systems that operate independently with minimal human oversight.",
      category: "Autonomous Systems",
      impact: "99.9% Operational Uptime",
      timeline: "Q3 2025",
      status: "Pilot",
      features: [
        "Self-healing capabilities",
        "Autonomous decision making",
        "Predictive maintenance",
        "Dynamic resource allocation"
      ],
      metrics: {
        uptime: "99.9%",
        efficiency: "95% improvement",
        cost: "60% reduction",
        reliability: "Zero downtime"
      }
    },
    {
      id: 4,
      title: "Edge Intelligence Platform",
      description: "Ultra-low latency AI processing at the edge for real-time applications.",
      category: "Edge Computing",
      impact: "Ultra-Low Latency Processing",
      timeline: "Q4 2025",
      status: "Development",
      features: [
        "Sub-millisecond response times",
        "Distributed processing",
        "Real-time analytics",
        "Offline capabilities"
      ],
      metrics: {
        latency: "< 1ms",
        throughput: "1M+ requests/sec",
        coverage: "Global edge network",
        reliability: "99.99% uptime"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025 Breakthrough Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary AI technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthrough) => (
            <div key={breakthrough.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {breakthrough.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      breakthrough.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      breakthrough.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      breakthrough.status === 'Pilot' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {breakthrough.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {breakthrough.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {breakthrough.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Impact</div>
                  <div className="text-lg font-semibold text-yellow-400">
                    {breakthrough.impact}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Timeline</div>
                  <div className="text-lg font-semibold text-white">
                    {breakthrough.timeline}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {breakthrough.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(breakthrough.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link 
                  to={`/breakthroughs/${breakthrough.id}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {breakthrough.metrics.adoption || 'Coming Soon'}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {breakthrough.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging these breakthrough AI technologies to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link 
                to="/case-studies"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025LatestBreakthroughsShowcase;