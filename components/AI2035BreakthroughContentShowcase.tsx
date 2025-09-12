import React from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughContentShowcase = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "Consciousness Transfer Technology",
      description: "Revolutionary breakthrough in human consciousness upload and download with 99.9% fidelity",
      category: "Neural Interface",
      roi: "50,000%",
      image: "🧠",
      featured: true,
      tags: ["BREAKTHROUGH", "REVOLUTIONARY", "NEW"]
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Self-evolving AI systems that surpass human intelligence and create new knowledge",
      category: "Quantum Computing",
      roi: "25,000%",
      image: "⚛️",
      featured: true,
      tags: ["BREAKTHROUGH", "QUANTUM", "NEW"]
    },
    {
      id: 3,
      title: "Autonomous Decision Systems",
      description: "AI systems that make complex decisions without human intervention across all domains",
      category: "Autonomous Systems",
      roi: "30,000%",
      image: "🤖",
      featured: false,
      tags: ["AUTONOMOUS", "REVOLUTIONARY", "NEW"]
    },
    {
      id: 4,
      title: "Neural Quantum Fusion",
      description: "Integration of human neural patterns with quantum computing for unlimited processing",
      category: "Hybrid Intelligence",
      roi: "40,000%",
      image: "🌌",
      featured: true,
      tags: ["FUSION", "BREAKTHROUGH", "NEW"]
    },
    {
      id: 5,
      title: "Consciousness Backup Systems",
      description: "Complete human consciousness backup and restoration with perfect memory retention",
      category: "Life Extension",
      roi: "35,000%",
      image: "💾",
      featured: false,
      tags: ["BACKUP", "LIFE EXTENSION", "NEW"]
    },
    {
      id: 6,
      title: "Universal Translation AI",
      description: "Real-time translation of any form of communication including thoughts and emotions",
      category: "Communication",
      roi: "20,000%",
      image: "🗣️",
      featured: false,
      tags: ["TRANSLATION", "COMMUNICATION", "NEW"]
    },
    {
      id: 7,
      title: "Predictive Reality Modeling",
      description: "AI systems that can predict and model future events with 99.8% accuracy",
      category: "Prediction",
      roi: "45,000%",
      image: "🔮",
      featured: true,
      tags: ["PREDICTION", "MODELING", "NEW"]
    },
    {
      id: 8,
      title: "Emotional Intelligence AI",
      description: "AI systems that understand and respond to human emotions with perfect empathy",
      category: "Emotional AI",
      roi: "15,000%",
      image: "❤️",
      featured: false,
      tags: ["EMOTIONAL", "EMPATHY", "NEW"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
            🚀 AI 2035 BREAKTHROUGH CONTENT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              That Will Change Everything
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI breakthroughs that will revolutionize every aspect of human existence. 
            From consciousness transfer to quantum neural networks, explore the future today.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughContent.map((content) => (
            <div
              key={content.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured badge */}
              {content.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                    FEATURED
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Category and ROI */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full">
                    {content.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-bold rounded-full">
                    {content.roi} ROI
                  </span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4">{content.image}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/ai-2035-breakthrough/${content.id}`}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Breakthrough
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations already implementing AI 2035 technologies. 
            Get exclusive access to implementation guides, case studies, and expert consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2035-implementation-guide"
              className="px-8 py-4 bg-white text-purple-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Organizations Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000%</div>
            <div className="text-gray-600">Average ROI Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2035BreakthroughContentShowcase;