import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions including machine learning models, natural language processing, and computer vision.",
      icon: "🤖",
      features: ["Custom ML Models", "NLP Solutions", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Web Development",
      description: "Modern web applications built with the latest technologies and best practices.",
      icon: "🌐",
      features: ["React/Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: "☁️",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Containerization"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      icon: "📊",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Warehousing"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      icon: "🔒",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help you make informed decisions.",
      icon: "💡",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive 
            in the digital age. From AI and machine learning to cloud infrastructure 
            and cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Contact us today to discuss your project and learn how we can help 
            your business achieve its technology goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}