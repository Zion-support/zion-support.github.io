import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Solutions: NextPage = () => {
  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive technology solutions designed for large-scale enterprises, including digital transformation, legacy system modernization, and enterprise-grade security.",
      icon: "🏢",
      link: "/solutions/enterprise",
      features: ["Digital Transformation", "Legacy Modernization", "Enterprise Security", "Scalable Architecture"]
    },
    {
      title: "Startup Solutions",
      description: "Agile and cost-effective technology solutions tailored for startups and growing businesses, helping you scale efficiently from day one.",
      icon: "🚀",
      link: "/solutions/startup",
      features: ["MVP Development", "Rapid Prototyping", "Growth Optimization", "Investor-Ready Platforms"]
    },
    {
      title: "IoT Platforms",
      description: "End-to-end IoT solutions that connect devices, collect data, and provide actionable insights for smart business operations.",
      icon: "🌐",
      link: "/solutions/iot-platforms",
      features: ["Device Connectivity", "Data Analytics", "Real-time Monitoring", "Predictive Maintenance"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services that modernize your business processes, improve efficiency, and enhance customer experience.",
      icon: "🔄",
      link: "/solutions/digital-transformation",
      features: ["Process Automation", "Cloud Migration", "Data Strategy", "Change Management"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
      icon: "🔒",
      link: "/solutions/cybersecurity",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
    },
    {
      title: "AI & Machine Learning",
      description: "Advanced AI and machine learning solutions that automate processes, provide insights, and create competitive advantages.",
      icon: "🤖",
      link: "/solutions/ai-ml",
      features: ["Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for enterprises, startups, and growing businesses. From IoT platforms to digital transformation, we have the expertise to drive your success." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Technology Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business, 
            drive innovation, and accelerate growth in the digital age.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored technology solutions that address your specific business challenges 
              and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 mb-1 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={solution.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals 
            and stay ahead of the competition.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;