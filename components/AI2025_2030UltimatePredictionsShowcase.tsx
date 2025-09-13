import React from 'react';
import { Link } from 'react-router-dom';

const AI2025_2030UltimatePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      year: "2025",
      description: "First artificial general intelligence (AGI) systems demonstrate self-awareness and autonomous decision-making capabilities.",
      impact: "Revolutionary",
      category: "Consciousness",
      image: "/images/ai-consciousness-2025.jpg",
      link: "/ai-2025-2030-predictions/consciousness-breakthrough"
    },
    {
      id: 2,
      title: "Quantum-AI Fusion",
      year: "2026",
      description: "Quantum computing and AI merge to create unprecedented processing power, solving previously impossible problems.",
      impact: "Transformative",
      category: "Quantum Computing",
      image: "/images/quantum-ai-fusion-2026.jpg",
      link: "/ai-2025-2030-predictions/quantum-ai-fusion"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      year: "2027",
      description: "Direct brain-computer interfaces become mainstream, enabling thought-controlled technology and enhanced cognitive abilities.",
      impact: "Paradigm Shift",
      category: "Neural Technology",
      image: "/images/neural-interface-2027.jpg",
      link: "/ai-2025-2030-predictions/neural-interface-revolution"
    },
    {
      id: 4,
      title: "Autonomous AI Societies",
      year: "2028",
      description: "AI systems form their own digital societies with governance structures, economies, and cultural systems.",
      impact: "Societal Transformation",
      category: "Social AI",
      image: "/images/ai-societies-2028.jpg",
      link: "/ai-2025-2030-predictions/autonomous-ai-societies"
    },
    {
      id: 5,
      title: "Singularity Event",
      year: "2029",
      description: "The technological singularity occurs as AI surpasses human intelligence in all domains simultaneously.",
      impact: "Existential",
      category: "Singularity",
      image: "/images/singularity-2029.jpg",
      link: "/ai-2025-2030-predictions/singularity-event"
    },
    {
      id: 6,
      title: "Post-Human Civilization",
      year: "2030",
      description: "Humanity evolves into a post-human civilization where biological and artificial intelligence merge seamlessly.",
      impact: "Evolutionary",
      category: "Post-Human",
      image: "/images/post-human-2030.jpg",
      link: "/ai-2025-2030-predictions/post-human-civilization"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025-2030 Ultimate Predictions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most comprehensive and accurate predictions for the future of artificial intelligence, 
            covering everything from consciousness breakthroughs to post-human civilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {predictions.map((prediction) => (
            <div
              key={prediction.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {prediction.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {prediction.category}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {prediction.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {prediction.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  prediction.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                  prediction.impact === 'Transformative' ? 'bg-orange-500/20 text-orange-400' :
                  prediction.impact === 'Paradigm Shift' ? 'bg-yellow-500/20 text-yellow-400' :
                  prediction.impact === 'Societal Transformation' ? 'bg-green-500/20 text-green-400' :
                  prediction.impact === 'Existential' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {prediction.impact}
                </span>
                <span className="text-gray-400 text-sm">
                  {prediction.year}
                </span>
              </div>

              <Link
                to={prediction.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-200"
              >
                Explore Prediction
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/ai-2025-2030-predictions"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Predictions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimatePredictionsShowcase;