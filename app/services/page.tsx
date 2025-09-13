import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import FeatureCard from '../../components/FeatureCard';

export default function ServicesPage() {
  const services = [
    {
      title: "AI Automation",
      description: "Streamline operations with intelligent automation solutions that reduce manual work and increase efficiency.",
      icon: "🤖",
      href: "/services/ai-automation",
      features: ["Process Automation", "Workflow Optimization", "Intelligent Document Processing"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and cost-effective cloud solutions tailored to your business needs.",
      icon: "☁️",
      href: "/services/cloud-infrastructure",
      features: ["AWS/Azure/GCP Migration", "Container Orchestration", "DevOps Implementation"]
    },
    {
      title: "Micro SaaS Development",
      description: "Custom SaaS platforms for niche markets with rapid development and deployment.",
      icon: "💼",
      href: "/services/micro-saas",
      features: ["Rapid Prototyping", "Scalable Architecture", "Revenue Optimization"]
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and digital transformation initiatives.",
      icon: "🧠",
      href: "/services/ai-consulting",
      features: ["AI Strategy", "Technology Assessment", "Implementation Planning"]
    },
    {
      title: "Edge Computing",
      description: "Deploy AI at the edge for real-time processing and reduced latency.",
      icon: "⚡",
      href: "/services/edge-computing",
      features: ["Edge AI Deployment", "IoT Integration", "Real-time Processing"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing solutions for complex optimization problems.",
      icon: "⚛️",
      href: "/services/quantum-computing",
      features: ["Quantum Algorithms", "Optimization Problems", "Research & Development"]
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Our Services - AI & Technology Solutions"
        description="Comprehensive AI and technology services including automation, cloud infrastructure, micro SaaS development, and consulting."
        keywords="AI services, cloud computing, micro SaaS, technology consulting, automation, edge computing, quantum computing"
        url="/services"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and technology solutions designed to transform your business and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">We analyze your business needs and challenges to understand your requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">We execute the solution with precision and attention to detail.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">We continuously monitor and optimize for maximum performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}