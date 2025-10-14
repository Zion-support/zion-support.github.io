import React from "react";
import { Helmet } from "react-helmet-async";

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics and insights for your business data",
      features: ["Real-time monitoring", "Custom dashboards", "Data visualization", "Automated reports"]
    },
    {
      title: "Customer Relationship Management",
      description: "Streamline your customer interactions and sales processes",
      features: ["Lead management", "Contact tracking", "Sales pipeline", "Email automation"]
    },
    {
      title: "Project Management Suite",
      description: "Complete project management solution for teams",
      features: ["Task tracking", "Team collaboration", "Time management", "Progress reporting"]
    },
    {
      title: "Inventory Management System",
      description: "Efficient inventory tracking and management",
      features: ["Stock tracking", "Automated reordering", "Supplier management", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS solutions by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable micro SaaS solutions designed to streamline your business operations
            and drive growth in the digital age.
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
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our micro SaaS solutions and how they can benefit your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSSolutionsPage;