import React from "react";
import { Helmet } from "react-helmet-async";
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Process Automation",
      description: "Streamline and automate business processes to improve efficiency and reduce manual errors.",
      features: ["Workflow Analysis", "Process Mapping", "Automation Implementation", "Performance Monitoring"]
    },
    {
      icon: Users,
      title: "Digital Culture",
      description: "Foster a digital-first culture within your organization to drive innovation and adoption.",
      features: ["Change Management", "Training Programs", "Digital Literacy", "Team Collaboration"]
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive digital transformation strategies aligned with your business goals.",
      features: ["Digital Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Leverage data analytics to measure and optimize your digital transformation initiatives.",
      features: ["KPI Tracking", "Performance Dashboards", "Data Visualization", "Insights & Reporting"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Create innovation hubs to experiment with emerging technologies and drive digital innovation.",
      features: ["Technology Exploration", "Proof of Concepts", "Pilot Programs", "Innovation Workshops"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensure the quality and reliability of your digital transformation initiatives.",
      features: ["Testing & Validation", "Quality Metrics", "Performance Monitoring", "Continuous Improvement"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Professional digital transformation services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital transformation services
            designed to drive innovation, efficiency, and growth.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our digital transformation services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;