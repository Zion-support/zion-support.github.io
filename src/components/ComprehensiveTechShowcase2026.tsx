import React from 'react';

const ComprehensiveTechShowcase2026: React.FC = () => {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-blue-500 to-purple-600",
      pages: [
        { name: "Next-Gen AI Revolution", path: "/pages/NextGenAIRevolution2026", description: "Advanced AI breakthroughs" },
        { name: "AI Transformation", path: "/pages/AdvancedAITransformation2026", description: "Transform your business with AI" },
        { name: "Synthetic Intelligence", path: "/pages/SyntheticIntelligence2026", description: "Next-generation synthetic AI" },
        { name: "AI Revolutionary Breakthrough", path: "/pages/AIRevolutionaryBreakthrough2026", description: "Groundbreaking AI innovations" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600",
      pages: [
        { name: "Quantum Computing Revolution", path: "/pages/QuantumComputingRevolution2026", description: "Revolutionary quantum solutions" },
        { name: "Quantum-Neural Fusion", path: "/pages/QuantumNeuralFusion2026", description: "Quantum meets neural networks" },
        { name: "Quantum Breakthroughs", path: "/pages/QuantumBreakthroughs2026", description: "Latest quantum innovations" }
      ]
    },
    {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-green-500 to-teal-600",
      pages: [
        { name: "Neural Interface Revolution", path: "/pages/NeuralInterfaceRevolution2026", description: "Brain-computer interfaces" },
        { name: "Neural Networks 2026", path: "/pages/NeuralNetworks2026", description: "Advanced neural architectures" }
      ]
    },
    {
      title: "Biotechnology",
      icon: "🧪",
      color: "from-emerald-500 to-cyan-600",
      pages: [
        { name: "Advanced Biotech Solutions", path: "/pages/AdvancedBiotechSolutions2026", description: "Cutting-edge biotechnology" },
        { name: "Biotech Revolution", path: "/pages/BiotechRevolution2026", description: "Revolutionary biotech innovations" }
      ]
    },
    {
      title: "Space Technology",
      icon: "🚀",
      color: "from-orange-500 to-red-600",
      pages: [
        { name: "Space Tech Innovation", path: "/pages/SpaceTechInnovation2026", description: "Next-gen space technology" }
      ]
    },
    {
      title: "Cyber-Physical Systems",
      icon: "🌐",
      color: "from-indigo-500 to-blue-600",
      pages: [
        { name: "Cyber-Physical Systems", path: "/pages/CyberPhysicalSystems2026", description: "Integrated smart systems" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🚀 Revolutionary Technology Showcase 2026
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore our comprehensive collection of cutting-edge technology solutions, 
          insights, and innovations that are shaping the future of business and society.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {category.pages.map((page, pageIndex) => (
                  <a
                    key={pageIndex}
                    href={page.path}
                    className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {page.name}
                        </h4>
                        <p className="text-sm text-gray-600">{page.description}</p>
                      </div>
                      <span className="text-blue-500 group-hover:text-blue-600 transition-colors">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/pages/RevolutionaryTechBlog2026"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-bold mb-2">Tech Blog</h3>
            <p className="text-purple-100">Latest insights and analysis</p>
          </a>
          
          <a
            href="/pages/ComprehensiveTechInsights2026"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Tech Insights</h3>
            <p className="text-blue-100">Deep technology analysis</p>
          </a>
          
          <a
            href="/pages/UltimateServiceShowcase2026"
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-2">All Services</h3>
            <p className="text-green-100">Complete service portfolio</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechShowcase2026;