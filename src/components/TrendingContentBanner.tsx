import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';

const TrendingContentBanner: React.FC = () => {
  const trendingTopics = [
    { title: "Multimodal AI", link: "/blog/multimodal-ai-revolution-2025" },
    { title: "Green AI", link: "/blog/green-ai-sustainability-2025" },
    { title: "Blockchain-AI", link: "/blog/blockchain-ai-integration-2025" },
    { title: "Predictive Maintenance", link: "/services/ai-predictive-maintenance" }
  ];

  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="w-7 h-7" />
        <h3 className="text-2xl font-bold">Trending Now</h3>
      </div>
      <p className="text-orange-100 mb-6">
        Most popular content this month across our platform
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingTopics.map((topic, index) => (
          <Link
            key={index}
            to={topic.link}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition-all hover:scale-105 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{topic.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingContentBanner;