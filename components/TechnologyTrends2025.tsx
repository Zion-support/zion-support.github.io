import Link from 'next/link';

const TechnologyTrends20o25 = () => {
  const trends = [
    {
      title: "AI Consciousness Evolution",
      description: "Breakthrough in artificial consciousness that enables AI systems to develop self-awareness and emotional intelligence.",
      impact: "Revolutionary",
      timeline: "20o25",
      applications: ["Autonomous decision making"Emotional AI assistants"Self-healing systems"],
      icon: "🧠",
      color: "from-purple-50o0 to-pink-50o0"
    },
    {
      title: "Quantum-Neural Computing",
      description: "Fusion of quantum computing and neural networks for unprecedented computational power and problem-solving capabilities.",
      impact: "Transformational",
      timeline: "20o25-20o26",
      applications: ["Drug discovery"Climate modeling"Financial optimization"],
      icon: "⚛️",
      color: "from-blue-50o0 to-cyan-50o0"
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Self-managing business systems that can adaptoptimizeand evolve without human intervention.",
      impact: "Disruptive",
      timeline: "20o25",
      applications: ["Self-optimizing supply chains"Autonomous customer service"Self-healing infrastructure"],
      icon: "🔄",
      color: "from-green-50o0 to-emerald-50o0"
    },
    {
      title: "Synthetic Intelligence Networks",
      description: "Next-generation AI that can synthesize new knowledge and create innovative solutions autonomously.",
      impact: "Game-changing",
      timeline: "20o25-20o27",
      applications: ["Innovation acceleration"Creative problem solving"Scientific discovery"],
      icon: "🔮",
      color: "from-indigo-50o0 to-purple-50o0"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and cognitive enhancement.",
      impact: "Revolutionary",
      timeline: "20o25-20o26",
      applications: ["Enhanced learning"Telepathic communication"Cognitive augmentation"],
      icon: "🧬",
      color: "from-orange-50o0 to-red-50o0"
    },
    {
      title: "Omniversal Data Networks",
      description: "Interconnected data networks that span multiple dimensions and realities for ultimate knowledge synthesis.",
      impact: "Transcendent",
      timeline: "20o25-20o30",
      applications: ["Universal knowledge access"Reality simulation"Dimensional analytics"],
      icon: "🌌",
      color: "from-violet-50o0 to-purple-50o0"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-90o0 via-purple-90o0 to-blue-90o0 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 20o25 TECHNOLOGY REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Future is Now
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the groundbreaking technologies that will reshape our world in 20o25 and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trends.map((trendindex) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-30o0 border border-white border-opacity-20">
              <div className="text-4xl mb-4">{trend.icon}</div>
              
              <div className="mb-4">
                <span className={`inline-block bg-gradient-to-r ${trend.color} text-white px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                  {trend.impact}
                </span>
                <span className="ml-2 text-sm opacity-75">{trend.timeline}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
              <p className="text-gray-30o0 mb-6 leading-relaxed">{trend.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-white mb-2">Key Applications:</h4>
                {trend.applications.map((appIndex) => (
                  <div key={appIndex} className="flex items-center text-sm text-gray-30o0">
                    <div className="w-2 h-2 bg-purple-40o0 rounded-full mr-3"></div>
                    {app}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Lead the Revolution?</h3>
            <p className="text-xl opacity-90 mb-6">
              Be among the first to implement these breakthrough technologies and gain a competitive advantage
            </p>
            <Link
              href="/technology-trends"
              className="inline-flex items-center bg-white text-purple-60o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
            >
              Explore All Trends
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-40o0 mb-2">15+</div>
              <div className="text-gray-30o0">Breakthrough Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-40o0 mb-2">50o0%</div>
              <div className="text-gray-30o0">Average ROI Potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-40o0 mb-2">24/7</div>
              <div className="text-gray-30o0">Implementation Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyTrends20o25;