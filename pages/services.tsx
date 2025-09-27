import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const { trackClick } = useAnalytics();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Custom AI solutions and machine learning models to automate processes and gain insights from your data.",
      icon: "🤖",
      features: ["Custom AI Models", "Data Analytics", "Process Automation", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to support your business growth.",
      icon: "☁️",
      features: ["Cloud Migration", "Infrastructure as Code", "Monitoring & Security", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: "💻",
      features: ["React/Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"]
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business operations.",
      icon: "🚀",
      features: ["Strategy Consulting", "Process Optimization", "Technology Integration", "Change Management"]
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Services - Zion App</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud computing, web development, and digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business and drive growth.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => trackClick(`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`, 'engagement')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get In Touch
              </Link>
              <Link href="/portfolio" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}