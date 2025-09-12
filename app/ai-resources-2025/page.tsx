import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function AIResources2025() {
  const resources = [
    {
      category: "AI Automation",
      title: "Complete AI Automation Guide 2025",
      description: "Master the art of AI automation with our comprehensive guide covering strategies, tools, and implementation best practices.",
      type: "Guide",
      readTime: "25 min",
      featured: true
    },
    {
      category: "Quantum Computing",
      title: "Quantum AI Integration Strategies",
      description: "Learn how to integrate quantum computing with AI for next-generation business solutions.",
      type: "Technical Paper",
      readTime: "18 min",
      featured: true
    },
    {
      category: "Cybersecurity",
      title: "AI-Powered Security Defense Systems",
      description: "Build robust cybersecurity defenses using artificial intelligence and machine learning.",
      type: "Case Study",
      readTime: "12 min",
      featured: false
    },
    {
      category: "Enterprise Solutions",
      title: "Large-Scale AI Implementation",
      description: "Navigate the complexities of implementing AI solutions across enterprise organizations.",
      type: "Framework",
      readTime: "30 min",
      featured: true
    },
    {
      category: "Edge Computing",
      title: "Edge AI Deployment Strategies",
      description: "Deploy AI models at the edge for real-time processing and reduced latency.",
      type: "Technical Guide",
      readTime: "20 min",
      featured: false
    },
    {
      category: "Data Analytics",
      title: "Advanced AI Analytics Dashboard",
      description: "Create powerful analytics dashboards using AI for better business insights.",
      type: "Tutorial",
      readTime: "15 min",
      featured: false
    }
  ];

  const services = [
    {
      title: "AI Consulting & Strategy",
      description: "Strategic guidance for AI implementation across your organization",
      icon: "🧠",
      features: ["AI Readiness Assessment", "Strategy Development", "ROI Analysis", "Implementation Planning"]
    },
    {
      title: "Quantum AI Solutions",
      description: "Next-generation computing solutions combining quantum and AI technologies",
      icon: "⚛️",
      features: ["Quantum Algorithm Design", "AI Model Optimization", "Hybrid Computing", "Performance Tuning"]
    },
    {
      title: "Enterprise Automation",
      description: "Comprehensive automation solutions for large-scale business operations",
      icon: "🤖",
      features: ["Process Automation", "Workflow Optimization", "Integration Services", "Monitoring & Analytics"]
    },
    {
      title: "Cybersecurity AI",
      description: "AI-powered security solutions to protect your digital assets",
      icon: "🛡️",
      features: ["Threat Detection", "Automated Response", "Security Analytics", "Compliance Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Resources 2025 - Cutting-Edge Technology Solutions"
        description="Explore our comprehensive collection of AI resources, guides, and services for 2025. Stay ahead with the latest in AI automation, quantum computing, and enterprise solutions."
        keywords="AI resources 2025, artificial intelligence, quantum computing, enterprise automation, cybersecurity AI"
        url="/ai-resources-2025"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 NEW: January 2025 Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Resources 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI solutions, comprehensive guides, and revolutionary technologies 
              that will transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#resources"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Explore Resources
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked resources covering the most important AI and technology topics for 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  resource.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                    {resource.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.readTime} read</span>
                  </div>
                  <Link
                    href="#"
                    className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our expert AI consulting and implementation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              📊 Our Impact
            </h2>
            <p className="text-xl opacity-90">
              Measurable results from our AI implementations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$50M+</div>
              <div className="text-lg opacity-90">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already transformed their operations with our AI solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}