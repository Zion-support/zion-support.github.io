import React from "react";
import { Helmet } from "react-helmet-async";
import { Cloud, Server, Database, Shield, Zap, Globe } from "lucide-react";

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Testing & Validation"]
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your needs.",
      features: ["Architecture Design", "Resource Provisioning", "Load Balancing", "Auto-scaling"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize and manage your databases in the cloud for maximum performance.",
      features: ["Database Migration", "Performance Tuning", "Backup & Recovery", "Monitoring"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your cloud infrastructure meets the highest security standards.",
      features: ["Security Audits", "Compliance Monitoring", "Access Control", "Data Encryption"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance and cost efficiency.",
      features: ["Performance Monitoring", "Cost Optimization", "Resource Scaling", "Load Testing"]
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy your applications globally with multi-region cloud infrastructure.",
      features: ["Multi-region Setup", "CDN Configuration", "Global Load Balancing", "Disaster Recovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build robust, scalable cloud infrastructure with our expert solutions
            designed for modern businesses.
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
            Ready to Build Your Cloud Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our cloud infrastructure services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;