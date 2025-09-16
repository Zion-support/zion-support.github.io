import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryTech2026Showcase = () => {
  const technologies = [
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.",
      icon: "🧠⚡",
      features: ["Quantum Speed"Neural Learning"Exponential Growth"],
      href: "/quantum-neural-networks-2026",
      category: "Quantum AI"
    },
    {
      title: "Autonomous Business AI",
      description: "Self-managing AI systems that handle complex business operations with minimal human oversight.",
      icon: "🏢🤖",
      features: ["Self-Learning"Autonomous Decisions"Continuous Optimization"],
      href: "/autonomous-business-ai-2026",
      category: "Business AI"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and enhanced cognition.",
      icon: "🔗🧠",
      features: ["Brain-Computer Interface"Enhanced Cognition"Seamless Integration"],
      href: "/neural-interface-tech-2026",
      category: "Neural Tech"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Advanced AI that predicts future trends and outcomes with 99.9% accuracy using quantum algorithms.",
      icon: "📊🔮",
      features: ["99.9% Accuracy"Quantum Algorithms"Future Prediction"],
      href: "/predictive-analytics-2026",
      category: "Analytics"
    },
    {
      title: "Synthetic Intelligence",
      description: "Distributed AI networks that create emergent intelligence beyond individual system capabilities.",
      icon: "🌐🧠",
      features: ["Distributed Intelligence"Emergent Behavior"Global Network"],
      href: "/synthetic-intelligence-2026",
      category: "Synthetic AI"
    },
    {
      title: "Edge Computing AI",
      description: "Ultra-fast AI processing at the edge with quantum-enhanced capabilities for real-time decisions.",
      icon: "⚡💻",
      features: ["Real-time Processing"Edge Computing"Quantum Enhanced"],
      href: "/edge-computing-ai-2026",
      category: "Edge AI"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Revolutionary Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              2026 Edition
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies that will reshape industries
            transform businessesand revolutionize how we interact with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((techindex) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-blue-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
                {tech.category}
              </div>
              
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={tech.href}
                className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors group-hover:translate-x-2 transform duration-300"
              >
                Explore Technology
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1 rounded-2xl inline-block">
            <a
              href="/revolutionary-tech-2026"
              className="block bg-white text-gray-900 px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors"
            >
              🚀 Explore All 2026 Technologies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2026Showcase;