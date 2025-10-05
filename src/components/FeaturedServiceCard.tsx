import React from 'react';

const FeaturedServiceCard: React.FC = () => {
  const services = [
    {
      icon: '🧠',
      title: 'AI Services',
      description:
        'Leverage artificial intelligence to automate processes and gain insights',
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
      description:
        'Scalable software solutions that address specific business needs',
      features: [
        'Custom Apps',
        'API Development',
        'Database Solutions',
        'Integration',
      ],
      link: '/services/micro-saas',
    },
    {
      icon: '💻',
      title: 'IT Services',
      description:
        'Comprehensive IT solutions to modernize your infrastructure',
      features: ['Cloud Migration', 'DevOps', 'Cybersecurity', 'System Admin'],
      link: '/services/it-services',
    },
  ];

  return (
    <div className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Our Featured Services
          </h2>
          <p className='text-xl text-gray-600'>
            Comprehensive solutions for modern businesses
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
key={index}
              className='bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow'
            >
              <div className='text-5xl mb-4'>{service.icon}</div>
              <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
              <p className='text-gray-600 mb-6'>{service.description}</p>
              <ul className='space-y-2 mb-6'>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='flex items-center text-gray-600'
                  >
                    <span className='text-green-500 mr-2'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.link}
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block'
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
