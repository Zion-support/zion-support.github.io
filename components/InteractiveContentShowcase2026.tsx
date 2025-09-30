import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const contentData = {
    breakthrough: {
      title: "February 2026 AI Breakthroughs",
      description: "Revolutionary AI technologies transforming enterprise operations",
      items: [
        {
          title: "Meta-Cognitive AI",
          description: "Self-aware AI systems that think about thinking",
          metrics: "95% Decision Accuracy",
          link: "/blog/ai-2026-february-mega-breakthrough-revolution",
          icon: "🧠"
        },
        {
          title: "Quantum-Neural Fusion",
          description: "1000x processing speed with quantum computing",
          metrics: "1000x Speed Increase",
          link: "/blog/ai-2026-february-mega-breakthrough-revolution",
          icon: "⚛️"
        },
        {
          title: "Autonomous Operations",
          description: "98% automation rates with self-healing systems",
          metrics: "98% Automation Rate",
          link: "/blog/ai-2026-february-mega-breakthrough-revolution",
          icon: "🤖"
        }
      ]
    },
    success: {
      title: "Success Stories",
      description: "Real results from Fortune 100 companies",
      items: [
        {
          title: "$3.2B Value Generated",
          description: "Fortune 100 manufacturing client success story",
          metrics: "400% ROI",
          link: "/case-studies/ai-2026-february-mega-breakthrough-3-billion-success",
          icon: "💰"
        },
        {
          title: "98% Automation Achieved",
          description: "Complete business process transformation",
          metrics: "99.9% Uptime",
          link: "/case-studies/ai-2026-february-mega-breakthrough-3-billion-success",
          icon: "⚡"
        },
        {
          title: "Revolutionary Results",
          description: "Industry-leading performance improvements",
          metrics: "8 Month Payback",
          link: "/case-studies/ai-2026-february-mega-breakthrough-3-billion-success",
          icon: "🚀"
        }
      ]
    },
    services: {
      title: "Consulting Services",
      description: "Expert implementation and support",
      items: [
        {
          title: "Meta-Cognitive AI Consulting",
          description: "Strategic AI implementation and optimization",
          metrics: "95% Success Rate",
          link: "/services/ai-2026-february-breakthrough-consulting",
          icon: "🎯"
        },
        {
          title: "Quantum-Neural Fusion",
          description: "Advanced hybrid computing solutions",
          metrics: "1000x Performance",
          link: "/services/ai-2026-february-breakthrough-consulting",
          icon: "🔬"
        },
        {
          title: "Autonomous Operations",
          description: "Complete business process automation",
          metrics: "98% Automation",
          link: "/services/ai-2026-febthrough-consulting",
          icon: "⚙️"
        }
      ]
    }
  };

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-lg tracking-wider uppercase">
              🎯 Interactive Content Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore February 2026 AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary AI technologies, success stories, and consulting services 
            that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(contentData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">{currentContent.title}</h3>
            <p className="text-lg text-gray-300">{currentContent.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentContent.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-4">
                  <div className="text-blue-400 font-bold text-sm">{item.metrics}</div>
                </div>
                <a
                  href={item.link}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full text-center"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Join the AI revolution with Zion Tech Group's February 2026 breakthrough technologies. 
              Get your free consultation and discover how we can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
              <a
                href="/blog/ai-2026-february-mega-breakthrough-revolution"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Read Full Guide
              </a>
              <a
                href="/case-studies/ai-2026-february-mega-breakthrough-3-billion-success"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;