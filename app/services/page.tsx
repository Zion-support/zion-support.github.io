import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI, IT, and micro SaaS solutions that transform your business operations and drive unprecedented growth.',
  keywords: 'AI services, IT services, micro SaaS, business automation, technology solutions'
};

export default function ServicesPage() {
  const services = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Revolutionary AI solutions that transform your business operations and drive unprecedented growth.",
      icon: "🤖",
      features: [
        "Machine Learning Solutions",
        "Natural Language Processing",
        "Computer Vision",
        "AI Automation"
      ]
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT solutions designed to modernize your infrastructure and optimize performance.",
      icon: "💻",
      features: [
        "Cloud Migration",
        "System Integration",
        "Network Security",
        "24/7 Technical Support"
      ]
    },
    {
      title: "Micro SaaS",
      href: "/services/micro-saas",
      description: "Custom micro SaaS applications that solve specific business problems with elegant simplicity.",
      icon: "🚀",
      features: [
        "Rapid Development",
        "Scalable Architecture",
        "User-Friendly Interfaces",
        "Cost-Effective Solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results. 
            Transform your operations with cutting-edge technology and expert implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}