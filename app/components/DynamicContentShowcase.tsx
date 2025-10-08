import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions based on your data"
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Process and analyze data in real-time for instant decision making"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security and compliance for all your sensitive data"
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting tools for business intelligence"
    }
  ];

  return (
    <section className="mb-16" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
        Why Choose Zion Tech Group?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="cyber-card hologram-card p-6 text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicContentShowcase;