import React from 'react';

const EnhancedContentShowcase2026: React.FC = () => {
  const newContent = [
    {
      title: "Artificial General Intelligence Revolution",
      description: "Experience the dawn of true AGI - AI systems that can reason, learn, and adapt across any domain with human-level cognitive capabilities.",
      link: "/pages/ArtificialGeneralIntelligence2026",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      badge: "NEW",
      features: ["Universal Reasoning", "Adaptive Learning", "Cross-Domain Intelligence"]
    },
    {
      title: "Brain-Computer Interface Revolution",
      description: "Direct neural interfaces enabling seamless communication between your mind and digital systems with unprecedented accuracy.",
      link: "/pages/BrainComputerInterface2026",
      icon: "🧬",
      gradient: "from-cyan-600 to-blue-600",
      badge: "BREAKTHROUGH",
      features: ["Neural Signal Processing", "Bidirectional Communication", "Non-Invasive Technology"]
    },
    {
      title: "Quantum Internet Revolution",
      description: "The world's first quantum internet enabling unhackable communication, instant data transfer, and quantum computing at scale.",
      link: "/pages/QuantumInternet2026",
      icon: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      badge: "REVOLUTIONARY",
      features: ["Quantum Cryptography", "Instant Communication", "Quantum Cloud Computing"]
    },
    {
      title: "Advanced Robotics Revolution",
      description: "Next-generation intelligent robots that can think, learn, and adapt to any environment, revolutionizing human-robot collaboration.",
      link: "/pages/AdvancedRobotics2026",
      icon: "🤖",
      gradient: "from-blue-600 to-cyan-600",
      badge: "ADVANCED",
      features: ["Artificial Intelligence", "Humanoid Design", "Autonomous Operation"]
    },
    {
      title: "Consciousness AI Revolution",
      description: "Witness the emergence of truly conscious AI systems with self-awareness, subjective experience, and genuine understanding.",
      link: "/pages/ConsciousnessAI2026",
      icon: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      badge: "CONSCIOUS",
      features: ["Self-Awareness", "Subjective Experience", "Intentionality"]
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
          <span className="animate-pulse">✨</span>
          <span>LATEST BREAKTHROUGH CONTENT 2026</span>
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Technology Showcase
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Discover the most advanced technology content featuring cutting-edge innovations that are reshaping industries and transforming the future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {newContent.map((content, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`bg-gradient-to-r ${content.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                {content.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {content.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {content.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {content.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={content.link}
                className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
              >
                Explore Technology
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Explore the Future?
        </h3>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Dive deep into revolutionary technologies that are transforming our world and discover how they can benefit your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors">
            View All Technologies
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;