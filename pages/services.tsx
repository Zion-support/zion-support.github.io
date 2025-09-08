import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions that automate processes and enhance decision-making.",
      icon: "🤖",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
    },
    {
      title: "Quantum Computing",
      description: "Revolutionary quantum computing solutions for complex problem-solving.",
      icon: "⚛️",
      features: ["Quantum Algorithms", "Cryptography", "Optimization", "Simulation"]
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant security solutions for modern threats.",
      icon: "🔒",
      features: ["Threat Detection", "Data Protection", "Compliance", "Incident Response"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses.",
      icon: "☁️",
      features: ["Multi-Cloud Strategy", "DevOps", "Containerization", "Monitoring"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights and business intelligence.",
      icon: "📊",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence", "Predictive Modeling"]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive technology solutions tailored to your business needs.",
      icon: "🏢",
      features: ["System Integration", "Digital Transformation", "Process Automation", "Legacy Modernization"]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, quantum computing, cybersecurity, and enterprise solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  )
}