import React from 'react';

export const ServiceIncludes = () => {
  const includes = [
    {
      category: 'Hardware Support',
      items: [
        'Desktop & Laptop Repair',
        'Server Maintenance',
        'Network Equipment Setup',
        'Peripheral Installation',
        'Hardware Upgrades',
        'Component Replacement'
      ]
    },
    {
      category: 'Software Solutions',
      items: [
        'Operating System Installation',
        'Software Updates & Patches',
        'Driver Management',
        'Performance Optimization',
        'Software Troubleshooting',
        'License Management'
      ]
    },
    {
      category: 'Network Services',
      items: [
        'WiFi Setup & Configuration',
        'Router & Switch Setup',
        'VPN Configuration',
        'Network Security',
        'Bandwidth Optimization',
        'Network Monitoring'
      ]
    },
    {
      category: 'Security Services',
      items: [
        'Virus & Malware Removal',
        'Firewall Configuration',
        'Data Backup Solutions',
        'Security Audits',
        'Access Control Setup',
        'Compliance Support'
      ]
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What's Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {includes.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
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