import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

function Card({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-sm text-gray-600">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export default function HomePage() {
  const services = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: "🤖",
      bullets: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      title: "Micro SaaS",
      href: "/services/micro-saas",
      description: "Scalable software-as-a-service solutions for modern businesses.",
      icon: "☁️",
      bullets: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "Cloud Integration"
      ]
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT infrastructure and support services.",
      icon: "💻",
      bullets: [
        "Cloud Migration",
        "DevOps & SRE",
        "System Administration",
        "Network Security"
      ]
    },
    {
      title: "Mobile Development",
      href: "/services/mobile-development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      bullets: [
        "React Native Apps",
        "Native iOS/Android",
        "Progressive Web Apps",
        "App Store Optimization"
      ]
    },
    {
      title: "Data Analytics",
      href: "/services/data-analytics",
      description: "Transform your data into actionable business insights.",
      icon: "📊",
      bullets: [
        "Business Intelligence",
        "Data Visualization",
        "ETL Pipelines",
        "Real-time Analytics"
      ]
    },
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity",
      description: "Protect your business with advanced security solutions.",
      icon: "🔒",
      bullets: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our cutting-edge technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}