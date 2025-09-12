import React from "react";
const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul of your business processes and systems.",
      features: ["Process Automation", "Data Migration", "System Integration", "Change Management"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Leverage artificial intelligence to gain insights from your data.",
      features: ["Predictive Analytics", "Real-time Monitoring", "Custom Dashboards", "Machine Learning Models"]
    },
    {
      title: "Security-First Architecture",
      description: "Build secure systems from the ground up with our security-first approach.",
      features: ["Threat Modeling", "Secure Coding", "Penetration Testing", "Compliance Auditing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end technology solutions designed to solve complex business challenges
          </p>
        </div>
        
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {solution.features.map((feature, featureIndex) => (
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

export default SolutionsPage;