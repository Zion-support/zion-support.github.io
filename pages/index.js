import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const services = [
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Advanced AI and machine learning solutions to transform your business operations.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Custom micro SaaS development and deployment services for modern businesses.",
      features: ["Custom Development", "Cloud Deployment", "Scalable Architecture", "API Integration"]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive enterprise IT infrastructure and security solutions.",
      features: ["Infrastructure Management", "Cybersecurity", "Cloud Migration", "24/7 Support"]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - AI Solutions & IT Services</title>
        <meta name="description" content="Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Leading provider of AI solutions, micro SaaS development, and comprehensive enterprise IT services. 
                Transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss your project and create a custom solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/space-tech"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Space Tech
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}