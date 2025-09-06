import React from 'react';
import Head from 'next/head';

export default function Services() {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions",
      features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "DevOps Automation"]
    },
    {
      title: "Web Development",
      description: "Modern web applications with cutting-edge technology",
      features: ["React/Next.js Applications", "Progressive Web Apps", "API Development", "Performance Optimization"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Data Pipeline Development"]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered IT services and solutions" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive AI-powered solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-emerald-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
