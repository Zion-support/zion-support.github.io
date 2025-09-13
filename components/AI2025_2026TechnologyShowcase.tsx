import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Zap, Globe, Shield, Database, Cloud, Bot, Sparkles } from 'lucide-react';

const AI2025_2026TechnologyShowcase = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "Next-generation AI models with 10x improved reasoning capabilities and enhanced cognitive processing.",
      features: ["Multi-modal Learning", "Real-time Adaptation", "Consciousness Simulation"],
      year: "2025"
    },
    {
      icon: Cpu,
      title: "Quantum-Enhanced Computing",
      description: "Revolutionary quantum-classical hybrid systems delivering unprecedented computational power.",
      features: ["Quantum Supremacy", "Hybrid Processing", "Exponential Speedup"],
      year: "2026"
    },
    {
      icon: Zap,
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently with human-level decision making.",
      features: ["Self-Learning", "Autonomous Operations", "Goal Achievement"],
      year: "2025"
    },
    {
      icon: Globe,
      title: "Global AI Ecosystem",
      description: "Interconnected AI networks spanning continents with seamless data and model sharing.",
      features: ["Global Connectivity", "Distributed Learning", "Cross-Platform Integration"],
      year: "2026"
    },
    {
      icon: Shield,
      title: "AI Security & Ethics",
      description: "Advanced security protocols and ethical frameworks ensuring safe AI deployment.",
      features: ["Ethical AI", "Security First", "Transparent Operations"],
      year: "2025"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "AI-powered forecasting with 99.9% accuracy for business and scientific predictions.",
      features: ["Crystal Ball AI", "Pattern Recognition", "Future Modeling"],
      year: "2026"
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      result: "300% efficiency increase",
      description: "Implemented our AI solutions across 50+ facilities worldwide"
    },
    {
      title: "Healthcare AI Breakthrough",
      company: "Medical Research Institute",
      result: "95% faster diagnosis",
      description: "Revolutionary AI diagnostic tools saving thousands of lives"
    },
    {
      title: "Financial AI Revolution",
      company: "Investment Bank",
      result: "500% ROI improvement",
      description: "AI-powered trading algorithms generating unprecedented returns"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary AI Technology 2025-2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Here</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge AI technologies that are reshaping industries and transforming the way we work, live, and think.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full">
                  {tech.year}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={`/ai-2025-2026-technology-showcase/${tech.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Proven Success Stories</h3>
            <p className="text-gray-300 text-lg">Real results from real companies using our AI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{study.title}</h4>
                  <p className="text-blue-100 text-sm">{study.company}</p>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{study.result}</div>
                <p className="text-gray-300 text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of companies already using our revolutionary AI technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/ai-2025-2026-technology-showcase"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2026TechnologyShowcase;