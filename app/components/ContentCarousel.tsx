import React from 'react';

const ContentCarousel: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Streamline your business processes with intelligent automation",
      icon: "🤖"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problems",
      icon: "⚛️"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for your business",
      icon: "☁️"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose Zion Tech Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
