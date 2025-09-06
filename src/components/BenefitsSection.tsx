import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Faster Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes.',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency and productivity.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs.',
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals.',
    },
    {
      icon: '⚡',
      title: 'Latest Technology',
      description: 'Stay ahead with cutting-edge AI and IT solutions.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Zion Tech?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We deliver exceptional value through innovative solutions, expert support, and proven results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
