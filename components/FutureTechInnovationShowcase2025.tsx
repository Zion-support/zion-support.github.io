import React from 'react';
import Link from 'next/link';

const FutureTechInnovationShowcase2025: React.FC = () => {
  const innovations = [
    {
      title: "Autonomous Business Operations",
      description: "Complete business automation with AI systems that operate independently, making decisions and executing tasks without human intervention.",
      icon: "🤖",
      link: "/autonomous-business-systems-2026",
      metrics: "500% ROI Increase"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless communication between human consciousness and AI systems.",
      icon: "🧠",
      link: "/neural-interface-revolution-2025",
      metrics: "10x Productivity Boost"
    },
    {
      title: "Quantum AI Computing",
      description: "Revolutionary quantum algorithms combined with AI for solving complex problems in seconds that would take traditional computers years.",
      icon: "⚡",
      link: "/quantum-ai-2026-business-breakthrough",
      metrics: "1000x Processing Power"
    },
    {
      title: "Synthetic Intelligence",
      description: "Next-generation AI with consciousness-like capabilities, emotional intelligence, and creative problem-solving abilities.",
      icon: "🎨",
      link: "/ai-2025-synthetic-intelligence",
      metrics: "Human-Level Creativity"
    },
    {
      title: "Predictive Analytics Engine",
      description: "AI systems that predict future trends, market changes, and business opportunities with 95% accuracy.",
      icon: "🔮",
      link: "/ai-2025-predictive-analytics",
      metrics: "95% Prediction Accuracy"
    },
    {
      title: "Autonomous Marketing Systems",
      description: "Self-managing marketing campaigns that optimize themselves, create content, and drive conversions automatically.",
      icon: "📈",
      link: "/ai-autonomous-marketing-platform",
      metrics: "300% Conversion Increase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 FUTURE TECH 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies that are reshaping industries and creating unprecedented opportunities for business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{innovation.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{innovation.description}</p>
              <div className="mb-4">
                <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  📊 {innovation.metrics}
                </span>
              </div>
              <Link 
                href={innovation.link}
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-flex items-center"
              >
                Explore Technology →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies already implementing these revolutionary technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechInnovationShowcase2025;