import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiDrugDiscoveryProPage() {
  const features = [
    {
      icon: "🧬",
      title: "Molecular Design",
      description: "AI-powered molecular design and optimization for drug candidates."
    },
    {
      icon: "🔬",
      title: "Target Identification",
      description: "Advanced algorithms to identify and validate drug targets."
    },
    {
      icon: "⚗️",
      title: "Compound Screening",
      description: "High-throughput virtual screening of compound libraries."
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Machine learning models for drug efficacy and safety prediction."
    }
  ];

  const applications = [
    "Oncology",
    "Cardiovascular Disease",
    "Neurological Disorders",
    "Infectious Diseases",
    "Rare Diseases",
    "Autoimmune Conditions"
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">AI Drug Discovery Pro</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Drug Discovery Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI drug discovery platform supports research across multiple therapeutic areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {applications.map((application, index) => (
              <span key={index} className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                {application}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Drug Discovery?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your pharmaceutical research with our AI-powered drug discovery platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Our Experts
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300">
              View All AI Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}