import React from 'react';

const AIPoweredITAssetManagement = () => {
  const features = [
    "Hardware devices (servers, workstations, mobile devices)",
    "Software licenses and applications",
    "Network infrastructure and equipment",
    "Cloud resources and virtual machines",
    "Security devices and appliances",
    "Peripheral devices and accessories",
    "Real-time health monitoring and alerts",
    "Predictive maintenance scheduling",
    "License compliance management",
    "Security vulnerability assessment",
    "Asset lifecycle optimization",
    "Cost allocation and tracking",
    "Integration with existing IT tools"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI-Powered IT Asset Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIPoweredITAssetManagement;