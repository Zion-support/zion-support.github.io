import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

const AI2026UltimateContentRevolutionShowcase: React.FC = () => {
  const contentSections = [
    {
      title: "AI 2026 Breakthrough Technologies",
      description: "Discover the latest AI innovations that are reshaping industries",
      features: [
        "Neural Architecture Search (NAS) 2.0",
        "Quantum-Enhanced Machine Learning",
        "Autonomous AI Systems",
        "Edge AI Computing Solutions"
      ],
      link: "/ai-2026-breakthrough-technologies",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Explore quantum computing breakthroughs and applications",
      features: [
        "Quantum Supremacy Achievements",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Optimization"
      ],
      link: "/quantum-computing-revolution-2026",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Advanced Automation Solutions",
      description: "Transform your business with next-gen automation",
      features: [
        "Intelligent Process Automation",
        "Autonomous Business Systems",
        "AI-Powered Workflows",
        "Smart Decision Making"
      ],
      link: "/advanced-automation-solutions-2026",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      title: "Future Technology Predictions",
      description: "Insights into 2026-2030 technology trends",
      features: [
        "AI Integration Patterns",
        "Emerging Tech Adoption",
        "Market Transformation",
        "Innovation Roadmaps"
      ],
      link: "/future-technology-predictions-2026",
      color: "from-green-600 to-green-800"
    }
  ];

  const stats = [
    { label: "Content Articles", value: "500+", icon: Clock },
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Success Rate", value: "99.9%", icon: TrendingUp },
    { label: "User Rating", value: "4.9/5", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Revolution
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the most comprehensive collection of AI, quantum computing, 
            and automation content designed to accelerate your digital transformation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contentSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={section.link}
                  className="group inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who are already leveraging our content to achieve 
            unprecedented success in 2026 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2026-ultimate-content-revolution"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateContentRevolutionShowcase;