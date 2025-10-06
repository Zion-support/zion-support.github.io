import React from 'react';

const ContentShowcase: React.FC = () => {
  const features = [
    {
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence technologies for enterprise applications',
      icon: '🤖',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      icon: '📊',
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full regulatory compliance',
      icon: '🔒',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;