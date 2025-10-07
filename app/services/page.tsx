import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description:
        'Advanced artificial intelligence solutions for enterprise automation and optimization.',
      icon: '🤖',
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
      ],
    },
    {
      title: 'Quantum Computing',
      description:
        'Next-generation quantum computing capabilities for complex problem solving.',
      icon: '⚛️',
      features: [
        'Quantum Algorithms',
        'Quantum Security',
        'Optimization',
        'Simulation',
      ],
    },
    {
      title: 'Autonomous Systems',
      description:
        'Self-managing and self-optimizing systems for enterprise operations.',
      icon: '🔄',
      features: [
        'Self-Healing Infrastructure',
        'Automated Operations',
        'Intelligent Monitoring',
        'Adaptive Learning',
      ],
    },
    {
      title: 'Business Intelligence',
      description:
        'Data-driven insights and analytics for strategic decision making.',
      icon: '📊',
      features: [
        'Real-time Analytics',
        'Data Visualization',
        'Reporting',
        'Dashboard Creation',
      ],
    },
    {
      title: 'Cloud Migration',
      description:
        'Seamless cloud transformation with zero downtime and cost optimization.',
      icon: '☁️',
      features: [
        'Zero Downtime',
        'Cost Optimization',
        'Security Enhancement',
        'Scalability',
      ],
    },
    {
      title: 'Consulting',
      description:
        'Expert guidance and strategic planning for digital transformation.',
      icon: '💡',
      features: [
        'Strategic Planning',
        'Technology Assessment',
        'Implementation Support',
        'Training',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-slate-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Our Services
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive AI and IT solutions designed to transform your
            business and drive innovation
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'
            >
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='flex items-center text-sm text-gray-500'
                  >
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Contact us today to discuss how our AI solutions can help your
            organization
          </p>
          <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
