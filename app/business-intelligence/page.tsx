import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Database, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const BusinessIntelligencePage = () => {
  const biServices = [
    {
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with advanced analytics and interactive dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "Trend analysis"]
    },
    {
      title: "Data Warehousing",
      description: "Centralized data storage and management solutions for enterprise-scale data processing.",
      icon: <Database className="w-8 h-8" />,
      features: ["Data integration", "ETL processes", "Data quality", "Scalable storage"]
    },
    {
      title: "Business Intelligence Consulting",
      description: "Strategic guidance and implementation of BI solutions tailored to your business needs.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Strategy development", "Implementation planning", "Training", "Ongoing support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive BI solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Intelligence Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive BI solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to discuss your BI requirements and get a customized solution.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default BusinessIntelligencePage;