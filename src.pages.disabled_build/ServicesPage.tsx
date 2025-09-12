import React from "react";
const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions including natural language processing, computer vision, and predictive analytics.",
      icon: "🤖"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response.",
      icon: "🔒"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions including migration, optimization, and management services.",
      icon: "☁️"
    },
    {
      title: "Web Development",
      description: "Modern web applications using React, Node.js, and other cutting-edge technologies.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure as code, and automated deployment solutions.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;