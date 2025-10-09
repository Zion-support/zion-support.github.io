import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Solutions",
      description: "Revolutionary AI technology that transforms how businesses operate and make decisions.",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: "⚛️",
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving and optimization.",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security and compliance for your critical data and infrastructure.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description: "Worldwide deployment capabilities with local expertise and support.",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="mb-16" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
        Latest Innovations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className={`bg-gradient-to-r ${feature.color} p-8 rounded-xl text-white hover:scale-105 transition-transform duration-300`}>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-lg opacity-90 mb-6">{feature.description}</p>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicContentShowcase;