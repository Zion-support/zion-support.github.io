import React from 'react';
import { Link } from 'react-router-dom';

const AI2028BreakthroughContentShowcase = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "Quantum-AI Fusion Revolution",
      description: "Revolutionary integration of quantum computing with artificial intelligence, delivering unprecedented processing power and decision-making capabilities.",
      category: "Quantum Computing",
      roi: "8000%",
      accuracy: "99.7%",
      image: "/quantum-ai-fusion.jpg",
      link: "/blog/ai-2028-quantum-ai-fusion-revolution",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Neural Synthesis Technology",
      description: "Advanced neural network synthesis that creates custom AI models with 99.7% accuracy for complex enterprise decision-making processes.",
      category: "Neural Networks",
      roi: "5000%",
      accuracy: "99.7%",
      image: "/neural-synthesis.jpg",
      link: "/blog/ai-2028-neural-synthesis-breakthrough",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Enterprise Automation Mastery",
      description: "Complete enterprise automation solutions that transform business processes with AI-driven workflows and intelligent decision systems.",
      category: "Enterprise AI",
      roi: "5000%",
      accuracy: "98.5%",
      image: "/enterprise-automation.jpg",
      link: "/case-studies/ai-2028-enterprise-automation-mastery",
      featured: true,
      badge: "NEW"
    },
    {
      id: 4,
      title: "Autonomous Decision Systems",
      description: "Self-learning AI systems that make complex business decisions autonomously while maintaining human oversight and ethical guidelines.",
      category: "Autonomous AI",
      roi: "3000%",
      accuracy: "97.8%",
      image: "/autonomous-systems.jpg",
      link: "/blog/ai-2028-autonomous-decision-systems",
      featured: false,
      badge: "INNOVATIVE"
    },
    {
      id: 5,
      title: "Predictive Analytics Engine",
      description: "Advanced predictive analytics that forecasts market trends, customer behavior, and business outcomes with 95% accuracy.",
      category: "Analytics",
      roi: "2500%",
      accuracy: "95.0%",
      image: "/predictive-analytics.jpg",
      link: "/tools/ai-2028-predictive-analytics-engine",
      featured: false,
      badge: "ADVANCED"
    },
    {
      id: 6,
      title: "Real-time Process Optimization",
      description: "AI-powered real-time optimization of business processes, reducing costs by 60% while increasing efficiency by 300%.",
      category: "Process Optimization",
      roi: "2000%",
      accuracy: "96.2%",
      image: "/process-optimization.jpg",
      link: "/case-studies/ai-2028-process-optimization-success",
      featured: false,
      badge: "EFFICIENT"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-bold mb-4">
            🚀 AI 2028 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI technologies that are transforming industries and delivering unprecedented business value.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughContent.map((content) => (
            <div
              key={content.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                content.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  content.badge === 'BREAKTHROUGH' ? 'bg-red-500 text-white' :
                  content.badge === 'REVOLUTIONARY' ? 'bg-purple-500 text-white' :
                  content.badge === 'NEW' ? 'bg-green-500 text-white' :
                  content.badge === 'INNOVATIVE' ? 'bg-blue-500 text-white' :
                  content.badge === 'ADVANCED' ? 'bg-orange-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {content.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {content.category === 'Quantum Computing' ? '⚛️' :
                     content.category === 'Neural Networks' ? '🧠' :
                     content.category === 'Enterprise AI' ? '🏢' :
                     content.category === 'Autonomous AI' ? '🤖' :
                     content.category === 'Analytics' ? '📊' :
                     '⚙️'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-green-600">{content.roi} ROI</span>
                    <span className="text-sm font-bold text-blue-600">{content.accuracy} Acc</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <Link
                  to={content.link}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:underline"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI 2028?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already experiencing unprecedented growth with our revolutionary AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2028-implementation-guide"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2028BreakthroughContentShowcase;