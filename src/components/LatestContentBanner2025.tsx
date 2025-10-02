import React from 'react';

const LatestContentBanner2025: React.FC = () => {
  const latestArticles = [
    {
      title: "AI 2025: Autonomous Operations Revolution",
      description: "98% Automation, $10M+ Annual Savings",
      slug: "ai-autonomous-operations-2025",
      category: "Autonomous Systems",
      readTime: "12 min",
      publishedDate: "2025-01-15",
      featured: true
    },
    {
      title: "Quantum AI: The Next Frontier",
      description: "Revolutionary quantum computing meets artificial intelligence",
      slug: "quantum-ai-next-frontier",
      category: "Quantum AI",
      readTime: "15 min",
      publishedDate: "2025-01-20",
      featured: true
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Latest Content 2025</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge AI insights and breakthrough technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((article, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-green-200">{article.category}</span>
                <span className="text-sm text-green-200">{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
              <p className="text-green-100 mb-6">{article.description}</p>
              <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded-lg hover:bg-green-50 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner2025;