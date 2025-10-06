import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2025: React.FC = () => {
  const highlights = [
    {
      title: "🎭 Multimodal AI Revolution",
      description: "Unified vision-language-audio processing with 98% accuracy",
      link: "/blog/multimodal-ai-revolution-2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "⛓️ Blockchain-AI Integration",
      description: "Trustless intelligence with decentralized governance",
      link: "/blog/blockchain-ai-integration-2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "🌱 Green AI & Sustainability",
      description: "Carbon-neutral ML with 90% emissions reduction",
      link: "/blog/green-ai-sustainability-2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "⚙️ AI Predictive Maintenance",
      description: "85% downtime reduction with 98% prediction accuracy",
      link: "/services/ai-predictive-maintenance",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
<<<<<<< HEAD

            <h2 className="text-4xl font-bold">2025 Breakthrough Content</h2>

=======
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl font-bold">2025 Breakthrough Content</h2>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
          </div>
          <p className="text-xl text-gray-300">
            The most innovative AI content of the year
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) = > (
            <Link
              key={index}
              to={item.link}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-300 text-sm relative z-10">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;