import React from 'react';

const FeaturedServiceCard: React.FC = () => {
  const services = [
    {
      icon: '🧠',
      title: 'AI Services',
      description: 'Leverage artificial intelligence to automate processes and gain insights',
      features: [
        'Machine Learning',
        'NLP',
        'Computer Vision',
        'Predictive Analytics',
      ],
      link: '/services/ai-services',
    },
    {
      icon: '🚀',
      title: 'Micro SaaS',
      description: 'Scalable software solutions that address specific business needs',
      features: [
        'Custom Development',
        'API Integration',
        'Cloud Deployment',
        'Maintenance & Support',
      ],
      link: '/services/micro-saas',
    },
    {
      icon: '🔧',
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your digital infrastructure',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'Security Audits',
        'Performance Optimization',
      ],
      link: '/services/it-consulting',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.link}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServiceCard;