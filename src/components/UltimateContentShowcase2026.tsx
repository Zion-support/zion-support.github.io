import React from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const content = [
    {
      id: 1,
      title: "🚀 AI Innovation Hub",
      description: "Revolutionary AI solutions and breakthrough technology",
      link: "/ai-innovation-hub-2026"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing",
      description: "Advanced quantum computing solutions and applications",
      link: "/quantum-computing-guide-2026"
    },
    {
      id: 3,
      title: "🔮 Advanced Tech Solutions",
      description: "Cutting-edge technology solutions for the future",
      link: "/advanced-tech-solutions-2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary technology content and solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content.map((item) => (
            <div key={item.id} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-200 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;