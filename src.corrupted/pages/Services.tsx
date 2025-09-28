import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions',
      icon: '🤖'
    },
    {
      title: 'IT Services', 
      description: 'Comprehensive IT infrastructure and support',
      icon: '💻'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and e-commerce solutions',
      icon: '🌐'
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
