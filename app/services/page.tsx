import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, financial technology, healthcare technology, and educational technology. Transform your business with cutting-edge solutions.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Revolutionary AI solutions that transform your business operations and drive unprecedented growth.",
      icon: "🤖",
      bullets: [
        "AI-powered automation",
        "Machine learning solutions",
        "Natural language processing",
        "Computer vision applications"
      ]
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT solutions designed to modernize your infrastructure and optimize performance.",
      icon: "💻",
      bullets: [
        "Cloud migration",
        "System integration",
        "Network security",
        "24/7 technical support"
      ]
    },
    {
      title: "Micro SaaS",
      href: "/services/micro-saas",
      description: "Scalable software-as-a-service solutions that grow with your business needs.",
      icon: "🚀",
      bullets: [
        "Custom SaaS development",
        "API integration",
        "Scalable architecture",
        "Multi-tenant solutions"
      ]
    },
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance.",
      icon: "🔒",
      bullets: [
        "Security audits",
        "Penetration testing",
        "Compliance consulting",
        "Incident response"
      ]
    },
    {
      title: "Cloud Solutions",
      href: "/services/cloud-solutions",
      description: "Enterprise-grade cloud infrastructure and migration services for optimal performance.",
      icon: "☁️",
      bullets: [
        "Cloud migration",
        "Infrastructure optimization",
        "DevOps implementation",
        "Cost optimization"
      ]
    },
    {
      title: "Blockchain",
      href: "/services/blockchain",
      description: "Cutting-edge blockchain solutions for secure, transparent, and decentralized applications.",
      icon: "⛓️",
      bullets: [
        "Smart contracts",
        "DeFi applications",
        "NFT platforms",
        "Blockchain consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}