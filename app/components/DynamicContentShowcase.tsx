import React from 'react';
const DynamicContentShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-200 mb-4">Revolutionary AI technology that transforms how businesses operate.</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-200 mb-4">Next-generation computing power for complex problem solving.</p>
            <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore
            </button>
=======

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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
