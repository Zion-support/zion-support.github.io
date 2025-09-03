import React from 'react';
import type { NextPage } from 'next';
import { Brain, Zap, Target, CheckCircle, ArrowRight, Code, Database, Cpu, Eye, TrendingUp } from 'lucide-react';

const AIDevelopment: NextPage = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business needs and data requirements."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Application Development",
      description: "End-to-end AI application development from concept to deployment."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Pipeline Engineering",
      description: "Robust data pipelines for AI model training and inference."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Infrastructure Setup",
      description: "Scalable AI infrastructure on cloud platforms for optimal performance."
    }
  ];

  const benefits = [
    "Custom AI solutions tailored to your business",
    "Scalable and maintainable AI infrastructure",
    "Expert team with deep AI expertise",
    "End-to-end development and deployment",
    "Ongoing support and optimization"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Brain className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Transform your business with custom AI solutions. We develop intelligent applications that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning models to complete AI applications, we deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver AI solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your AI Solution?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss your AI development needs and create a solution that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopment;