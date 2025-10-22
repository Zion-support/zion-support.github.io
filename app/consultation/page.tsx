'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const features = [
    {
        "icon": "CheckCircle",
        "title": "AI-Powered Solutions",
        "description": "Leverage advanced AI technology for optimal results.",
        "benefits": [
            "Intelligent automation",
            "Predictive analytics",
            "Smart optimization",
            "Real-time insights"
        ]
    },
    {
        "icon": "CheckCircle",
        "title": "High Performance",
        "description": "Fast and efficient solutions that scale with your business.",
        "benefits": [
            "Lightning fast",
            "Scalable infrastructure",
            "High availability",
            "Optimized performance"
        ]
    },
    {
        "icon": "CheckCircle",
        "title": "Enterprise Security",
        "description": "Bank-level security for all your data and operations.",
        "benefits": [
            "End-to-end encryption",
            "Access controls",
            "Audit trails",
            "Compliance support"
        ]
    },
    {
        "icon": "CheckCircle",
        "title": "Analytics & Insights",
        "description": "Comprehensive analytics to drive informed decisions.",
        "benefits": [
            "Real-time monitoring",
            "Performance metrics",
            "Custom dashboards",
            "Detailed reporting"
        ]
    }
];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Advanced consultation solutions powered by cutting-edge technology." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced consultation solutions powered by cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConsultationPage;