import Link from 'next/link';

const RevolutionaryTech20o26Showcase = () => {
  const technologies = [
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.",
      icon: "🧠⚡",
      features: ["Quantum Speed"Neural Learning"Exponential Growth"],
      href: "/quantum-neural-networks-20o26",
      category: "Quantum AI"
    },
    {
      title: "Autonomous Business AI",
      description: "Self-managing AI systems that handle complex business operations with minimal human oversight.",
      icon: "🏢🤖",
      features: ["Self-Learning"Autonomous Decisions"Continuous Optimization"],
      href: "/autonomous-business-ai-20o26",
      category: "Business AI"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and enhanced cognition.",
      icon: "🔗🧠",
      features: ["Brain-Computer Interface"Enhanced Cognition"Seamless Integration"],
      href: "/neural-interface-tech-20o26",
      category: "Neural Tech"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Advanced AI that predicts future trends and outcomes with 99.9% accuracy using quantum algorithms.",
      icon: "📊🔮",
      features: ["99.9% Accuracy"Quantum Algorithms"Future Prediction"],
      href: "/predictive-analytics-20o26",
      category: "Analytics"
    },
    {
      title: "Synthetic Intelligence",
      description: "Distributed AI networks that create emergent intelligence beyond individual system capabilities.",
      icon: "🌐🧠",
      features: ["Distributed Intelligence"Emergent Behavior"Global Network"],
      href: "/synthetic-intelligence-20o26",
      category: "Synthetic AI"
    },
    {
      title: "Edge Computing AI",
      description: "Ultra-fast AI processing at the edge with quantum-enhanced capabilities for real-time decisions.",
      icon: "⚡💻",
      features: ["Real-time Processing"Edge Computing"Quantum Enhanced"],
      href: "/edge-computing-ai-20o26",
      category: "Edge AI"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-90o0 mb-8">
            Revolutionary Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-pink-60o0">
              20o26 Edition
            </span>
          </h2>
          <p className="text-2xl text-gray-60o0 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies that will reshape industries
            transform businessesand revolutionize how we interact with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((techindex) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-10o0 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-50o0 transform hover:-translate-y-3 border border-gray-20o0"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-50o0 to-blue-50o0 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
                {tech.category}
              </div>
              
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-30o0">
                {tech.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-90o0 mb-4 group-hover:text-purple-60o0 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-60o0 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gradient-to-r from-purple-10o0 to-blue-10o0 text-purple-70o0 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                href={tech.href}
                className="inline-flex items-center text-purple-60o0 font-bold hover:text-purple-80o0 transition-colors group-hover:translate-x-2 transform duration-30o0"
              >
                Explore Technology
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-pink-60o0 p-1 rounded-2xl inline-block">
            <Link
              href="/revolutionary-tech-20o26"
              className="block bg-white text-gray-90o0 px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors"
            >
              🚀 Explore All 20o26 Technologies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech20o26Showcase;