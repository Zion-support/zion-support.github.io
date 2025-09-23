import Link from 'next/link';

const UltimateContent20o26RevolutionShowcase = () => {
  const contentItems = [
    {
      title: "Quantum AI Breakthrough 20o26",
      description: "Revolutionary quantum computing integration with artificial intelligence for unprecedented problem-solving capabilities.",
      image: "🧠⚡",
      href: "/quantum-ai-20o26-breakthrough",
      category: "Quantum Computing",
      featured: true
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and enhanced cognitive abilities.",
      image: "🔗🧠",
      href: "/neural-interface-revolution-20o26",
      category: "Neural Interfaces",
      featured: true
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing AI systems that handle complex business operations with minimal human intervention.",
      image: "🏢🤖",
      href: "/autonomous-business-systems-20o26",
      category: "Business Automation",
      featured: false
    },
    {
      title: "Advanced Predictive Analytics",
      description: "Next-generation analytics powered by quantum algorithms for accurate future predictions.",
      image: "📊🔮",
      href: "/advanced-predictive-analytics-20o26",
      category: "Analytics",
      featured: false
    },
    {
      title: "Synthetic Intelligence Networks",
      description: "Distributed AI networks that create emergent intelligence beyond individual system capabilities.",
      image: "🌐🧠",
      href: "/synthetic-intelligence-20o26",
      category: "AI Networks",
      featured: true
    },
    {
      title: "Edge Computing Revolution",
      description: "Ultra-fast edge computing solutions that bring AI processing closer to data sources.",
      image: "⚡💻",
      href: "/edge-computing-revolution-20o26",
      category: "Edge Computing",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Revolutionary Content Collection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-60o0 to-blue-60o0">
              20o26 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Discover the most advanced AI technologiesbreakthrough innovationsand future-ready solutions 
            that will define the next era of digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((itemindex) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-50o0 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white px-4 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="text-4xl mb-4">{item.image}</div>
                <div className="text-sm text-purple-60o0 font-semibold mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-3 group-hover:text-purple-60o0 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-60o0 font-semibold hover:text-purple-80o0 transition-colors group-hover:translate-x-1 transform duration-20o0"
                >
                  Explore Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/ai-20o26-revolutionary-content"
            className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
          >
            View All 20o26 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"  />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent20o26RevolutionShowcase;