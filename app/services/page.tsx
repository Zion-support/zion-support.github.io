import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: "AI Solutions",
      description: "Artificial intelligence and machine learning solutions to automate processes and gain insights from your data.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration services to modernize your IT environment.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Multi-Cloud Strategy"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and operations.",
      features: ["Process Automation", "Digital Strategy", "Change Management", "Technology Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}