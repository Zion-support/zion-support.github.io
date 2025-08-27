import React from 'react';

export const ServiceDetailsSection = ({ services }) => {
  const defaultServices = [
    {
      title: 'Hardware Support',
      description: 'Comprehensive hardware troubleshooting and repair services',
      icon: '🔧',
      features: ['Desktop & Laptop Repair', 'Server Maintenance', 'Network Equipment', 'Peripheral Support']
    },
    {
      title: 'Software Solutions',
      description: 'Software installation, configuration, and optimization',
      icon: '💻',
      features: ['OS Installation', 'Software Updates', 'Driver Management', 'Performance Tuning']
    },
    {
      title: 'Network Services',
      description: 'Network setup, configuration, and troubleshooting',
      icon: '🌐',
      features: ['WiFi Setup', 'Router Configuration', 'VPN Setup', 'Network Security']
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity and data protection solutions',
      icon: '🔒',
      features: ['Virus Removal', 'Firewall Setup', 'Data Backup', 'Security Audits']
    }
  ];

  const servicesToUse = services || defaultServices;

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesToUse.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};