import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate processes and gain insights from your data.',
      icon: '🤖'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions.',
      icon: '🔄'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring.',
      icon: '🔒'
    },
    {
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      icon: '📱'
    },
    {
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes with DevOps best practices.',
      icon: '⚙️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;