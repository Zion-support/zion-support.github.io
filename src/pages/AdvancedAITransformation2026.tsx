import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedAITransformation2026: React.FC = () => {
  const aiSolutions = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-operating AI systems that can make decisions and take actions independently.",
      icon: "🤖",
      features: ["Decision Making", "Task Automation", "Learning & Adaptation"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Edge AI Computing",
      description: "AI processing at the edge for real-time decision making and reduced latency.",
      icon: "⚡",
      features: ["Real-time Processing", "Low Latency", "Offline Capability"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Generative AI 2.0",
      description: "Next-generation AI that can create, innovate, and generate original content.",
      icon: "🎨",
      features: ["Content Creation", "Innovation", "Creative Problem Solving"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      description: "Advanced analytics and insights powered by artificial intelligence.",
      icon: "📊",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Insights"],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Conversational AI",
      description: "Natural language processing and human-like conversation capabilities.",
      icon: "💬",
      features: ["Natural Language", "Context Understanding", "Human-like Interaction"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "AI Ethics & Governance",
      description: "Ethical AI frameworks and governance for responsible AI deployment.",
      icon: "⚖️",
      features: ["Ethical Guidelines", "Bias Prevention", "Transparency"],
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
        </div>
      </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-5xl mb-6 text-center">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
                  <p className="text-center opacity-90 mb-6">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">AI Transformation Applications</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                See how AI transformation is revolutionizing industries and creating new opportunities
              </p>
            </div>

    </div>
  );
};

export default AdvancedAITransformation2026;