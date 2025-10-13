import React from 'react';
import { Brain, Shield, Cloud, Zap, Database, Smartphone, Globe, BarChart3 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can transform your business operations immediately.",
      features: ["Quick Deployment", "Custom Solutions", "API Integration", "Scalable Architecture"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "Real-time Analytics", "Predictive Modeling", "Custom Dashboards"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Create powerful mobile applications for iOS and Android with our expert development team.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Build modern, responsive websites and web applications that drive business growth.",
      features: ["Responsive Design", "SEO Optimization", "Performance", "Security"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with our comprehensive business intelligence and reporting solutions.",
      features: ["Custom Reports", "Data Integration", "Real-time Dashboards", "Advanced Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}