import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms your business operations",
      benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Optimized for speed with 99.9% uptime and sub-second response times",
      benefits: ["Edge Computing", "CDN Optimization", "Real-time Processing"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with comprehensive compliance and data protection",
      benefits: ["End-to-End Encryption", "SOC 2 Compliance", "GDPR Ready"]
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics for data-driven decisions",
      benefits: ["Business Intelligence", "Predictive Modeling", "Custom Dashboards"]
    }
  ];

  return (
    <section className="mb-16" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
        Why Choose Zion Tech Group?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicContentShowcase;