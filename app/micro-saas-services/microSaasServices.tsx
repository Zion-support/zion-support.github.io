import React from 'react';

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MicroSaasServices: React.FC = () => {
  const services: MicroSaasService[] = [
    {
      id: '1',
      name: 'AI Analytics',
      description: 'Advanced analytics powered by AI',
      price: 99
    },
    {
      id: '2',
      name: 'Blockchain Integration',
      description: 'Secure blockchain solutions',
      price: 199
    }
  ];

  return (
    <div className="micro-saas-services">
      <h2>Micro SaaS Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">${service.price}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicroSaasServices;
