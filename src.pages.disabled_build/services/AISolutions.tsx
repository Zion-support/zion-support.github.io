import React from 'react';

const AISolutions: React.FC = () => {
  const services = [
    {
      title: "Machine Learning",
      description: "Custom ML models tailored to your business needs and data",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes",
      features: ["Process Automation", "Document Processing", "Customer Service Bots", "Workflow Optimization"]
    },
    {
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with AI-powered analytics",
      features: ["Data Mining", "Pattern Recognition", "Anomaly Detection", "Business Intelligence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;