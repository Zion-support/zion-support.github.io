import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Wrench, Rocket, ArrowRight, Star } from 'lucide-react';

const October2025NewContentLLMShowcase = () => {
  const content = [
    {
      icon: BookOpen,
      title: "Enterprise LLM Orchestration Revolution
      type: "Technical Article
      description: "Deep dive into multi-model AI strategy achieving 450% productivity gains and $2.3B in value creation
      link: "/blog/ai-2025-oct-01-enterprise-llm-orchestration-revolution
      readTime: "12 min
      tags: ["LLM", "Cost Optimization", "Multi-Model"],
      color: "from-blue-500 to-cyan-500
      highlights: [
        "73% cost reduction strategies
        "Intelligent model routing explained
        "Real-world implementation patterns"
      ]
    },
    {
      icon: Briefcase,
      title: "$8.2B Fortune 100 Retail Transformation
      type: "Case Study
      description: "How a global retailer achieved 1,840% ROI through enterprise LLM orchestration
      link: "/case-studies/ai-2025-oct-01-fortune-100-retail-llm-orchestration-8-2-billion-success
      readTime: "15 min
      tags: ["Retail", "ROI", "Fortune 100"],
      color: "from-green-500 to-emerald-500
      highlights: [
        "$7.9M monthly cost savings
        "520% productivity improvement
        "42,000 AI agents orchestrated"
      ]
    },
    {
      icon: Wrench,
      title: "Complete Implementation Guide 2025
      type: "Technical Guide
      description: "Step-by-step roadmap with code examples, architecture patterns, and best practices
      link: "/guides/enterprise-llm-orchestration-implementation-guide-2025
      readTime: "45 min
      tags: ["Implementation", "DevOps", "Architecture"],
      color: "from-purple-500 to-pink-500
      highlights: [
        "6-month deployment timeline
        "Production-ready code examples
        "Security & compliance framework"
      ]
    },
    {
      icon: Rocket,
      title: "Enterprise Orchestration Platform
      type: "Service Offering
      description: "Turnkey platform delivering 10-20x Year 1 ROI with proven Fortune 500 results
      link: "/services/ai-2025-october-enterprise-llm-orchestration-platform
      readTime: "10 min
      tags: ["Platform", "Services", "Implementation"],
      color: "from-orange-500 to-red-500
      highlights: [
        "Complimentary assessment available
        "$128,500 limited-time bonus
        "99.97% platform reliability"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              New Content Published: October 1, 2025
            </span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Enterprise LLM Orchestration
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Complete resource library for implementing multi-model AI strategies that deliver 
            <span className="text-yellow-400 font-bold"> $8.2B value creation</span> and 
            <span className="text-green-400 font-bold"> 1,840% ROI</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`}></div>
                
                {/* Icon & Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags & Read Time */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto text-sm text-gray-500">
                    📖 {item.readTime}
                  </span>
                </div>

                {/* CTA */}
                <div className={`flex items-center font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform`}>
                  Read More
                  <ArrowRight className="w-5 h-5 ml-2 text-white" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-sm text-gray-300">Comprehensive Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$8.2B</div>
              <div className="text-sm text-gray-300">Proven Value Creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1,840%</div>
              <div className="text-sm text-gray-300">Demonstrated ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">73%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
            <Rocket className="w-6 h-6 mr-2" />
            Start Your Transformation Today
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Schedule your complimentary assessment • Receive $128,500 in bonus value
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentLLMShowcase;
