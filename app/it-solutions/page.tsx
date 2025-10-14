import React from "react";
import { Helmet } from "react-helmet-async";

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load balancing", "Disaster recovery"]
    },
    {
      title: "Network Security",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Firewall management", "Intrusion detection", "VPN solutions", "Security monitoring"]
    },
    {
      title: "System Administration",
      description: "Expert system administration and maintenance services",
      features: ["Server management", "User administration", "Backup solutions", "Performance optimization"]
    },
    {
      title: "Technical Support",
      description: "24/7 technical support for all your IT needs",
      features: ["Help desk", "Remote support", "On-site assistance", "Proactive monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional IT solutions and services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to keep your business running smoothly
            and securely in today's digital landscape.
          </p>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our IT solutions and how they can benefit your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;