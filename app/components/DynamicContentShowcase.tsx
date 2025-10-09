import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time insights and predictive analytics for your business.',
      icon: '📊'
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline operations with intelligent process automation.',
      icon: '⚙️'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions.',
      icon: '☁️'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
          Why Choose Zion Tech Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
