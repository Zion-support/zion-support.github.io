import React from "react";
import SEO from "../components/SEO";
import { 
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: CloudIcon,
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
      features: ["Assessment & planning", "Data migration", "Application modernization", "Performance optimization"]
    },
    {
      icon: ServerIcon,
      title: "Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your business needs.",
      features: ["Architecture design", "Resource provisioning", "Load balancing", "Auto-scaling"]
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Analytics",
      description: "Leverage AI and machine learning to gain insights from your cloud data.",
      features: ["Data analytics", "Machine learning", "Predictive insights", "Real-time monitoring"]
    },
    {
      icon: ChartBarIcon,
      title: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance and cost efficiency.",
      features: ["Performance monitoring", "Cost optimization", "Resource scaling", "Load testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cloud Solutions - Zion Tech Group"
        description="Professional cloud solutions and services by Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Cloud Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions
            designed for scalability, security, and performance.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
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
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our cloud solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}