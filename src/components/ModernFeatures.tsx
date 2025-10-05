import React from 'react';

const ModernFeatures: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Deploy AI solutions 10x faster with our pre-built frameworks and automation tools.',
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2, GDPR compliance, and continuous monitoring.',
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Average 300% ROI within 6 months across all client implementations.',
    },
    {
      icon: '👥',
      title: 'Expert Support',
      description: '24/7 support from our team of AI and technology experts.',
    },
    {
      icon: '🔧',
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs.',
    },
    {
      icon: '🌐',
      title: 'Global Scale',
      description: 'Deploy anywhere with our cloud-native, globally distributed infrastructure.',
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge AI solutions with unmatched performance, security, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernFeatures;