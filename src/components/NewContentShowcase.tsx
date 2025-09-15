import React from 'react';

const NewContentShowcase: React.FC = () => {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  const newContent = [
    {
      title: "Trustworthy Model Routing",
      description: "Eval‑gated routing with cost, latency, and safety evidence",
      category: "AI Operations",
      date: "September 15, 2025",
      link: "/blog/ai-2026-trustworthy-model-routing",
      featured: true,
      badge: "NEW"
    },
    {
      title: "Agent Benchmark Suite",
      description: "Scenario packs, harnesses, and scorecards for agents",
      category: "Evaluations",
      date: "September 15, 2025",
      link: "/blog/ai-2026-agent-benchmark-suite",
      featured: true,
      badge: "NEW"
    },
    {
      title: "Revolutionary AI Business Automation",
      description: "Discover how AI automation is transforming enterprises in 2025",
      category: "AI & Automation",
      date: "January 20, 2025",
      link: "/content/blog/ai-2025-revolutionary-business-automation-breakthrough",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      title: "Quantum Computing Business Applications",
      description: "Explore the 2025 quantum computing revolution in business",
      category: "Quantum Computing",
      date: "January 20, 2025",
      link: "/content/blog/quantum-computing-business-applications-2025",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      title: "$100M AI Automation Success Story",
      description: "Real case study of transformative AI automation results",
      category: "Case Study",
      date: "January 20, 2025",
      link: "/content/case-studies/ai-automation-revolutionary-breakthrough-2025-success",
      featured: true,
      badge: "SUCCESS"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
          🚀 JUST PUBLISHED • SEPTEMBER 2025
        </div>
        <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary New Content</h2>
        <p className="text-xl opacity-90">Discover our latest insights on cutting-edge technologies</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {newContent.map((content, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                content.badge === 'BREAKTHROUGH' ? 'bg-green-500/30 text-green-200' :
                content.badge === 'REVOLUTIONARY' ? 'bg-purple-500/30 text-purple-200' :
                'bg-blue-500/30 text-blue-200'
              }`}>
                {content.badge}
              </span>
              <span className="text-sm opacity-75">{content.date}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-75">{content.category}</span>
              <a 
                href={content.link} 
                className="text-cyan-300 hover:text-cyan-200 font-semibold text-sm transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a 
          href="/blog" 
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
        >
          View All Content
        </a>
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      </div>
    </div>
  );
};

>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
export { NewContentShowcase };
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
export { NewContentShowcase };
>>>>>>> cursor/create-and-deploy-new-content-8735
export default NewContentShowcase;
=======
<<<<<<< HEAD
export default NewContentShowcase;
>>>>>>> cursor/create-and-deploy-new-content-7857
=======
export default NewContentShowcase;
>>>>>>> cursor/create-and-deploy-new-content-45eb
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
