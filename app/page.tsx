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
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-sm text-gray-600">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export default function Home() {
  const services = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.",
      bullets: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI Consulting & Strategy"
      ],
      icon: "🤖"
    },
    {
      title: "Blockchain Solutions",
      href: "/services/blockchain-solutions",
      description: "Build secure, scalable blockchain applications with our expert development team and proven methodologies.",
      bullets: [
        "Smart Contract Development",
        "DeFi Applications",
        "NFT Marketplaces",
        "Blockchain Consulting"
      ],
      icon: "⛓️"
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.",
      bullets: [
        "Cloud Migration & Management",
        "Cybersecurity Solutions",
        "Infrastructure Setup",
        "24/7 Support & Monitoring"
      ],
      icon: "💻"
    },
    {
      title: "Micro SaaS",
      href: "/services/micro-saas",
      description: "Launch your next big idea with our micro SaaS development services. From MVP to scale.",
      bullets: [
        "MVP Development",
        "Scalable Architecture",
        "User Management Systems",
        "Payment Integration"
      ],
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI, blockchain, and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg border-2 border-blue-600 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}