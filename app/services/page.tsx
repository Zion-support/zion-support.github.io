import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
  },
};

// ServiceCard component
function ServiceCard({ title, description, bullets, icon }: {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <div className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-2 hover:scale-105">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      <ul className="space-y-2" role="list">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Micro SaaS Solutions",
      description: "Scalable, secure micro SaaS products that solve specific business challenges with modern architecture.",
      bullets: [
        "Custom web applications",
        "API development",
        "Database design",
        "User authentication",
        "Payment integration"
      ],
      icon: "🚀"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, and custom AI models tailored to your business needs.",
      bullets: [
        "Custom AI models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Process automation"
      ],
      icon: "🤖"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, DevOps, and infrastructure management for enterprise applications.",
      bullets: [
        "AWS/Azure/GCP migration",
        "Container orchestration",
        "CI/CD pipelines",
        "Monitoring & logging",
        "Cost optimization"
      ],
      icon: "☁️"
    },
    {
      title: "Blockchain Solutions",
      description: "Smart contracts, DeFi platforms, and blockchain integration for secure, transparent operations.",
      bullets: [
        "Smart contract development",
        "DeFi protocols",
        "NFT marketplaces",
        "Token economics",
        "Security auditing"
      ],
      icon: "⛓️"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      bullets: [
        "Data warehousing",
        "Business intelligence",
        "Real-time dashboards",
        "Predictive modeling",
        "Data visualization"
      ],
      icon: "📊"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      bullets: [
        "Security audits",
        "Penetration testing",
        "Compliance consulting",
        "Incident response",
        "Security training"
      ],
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions, micro SaaS development, and enterprise IT services 
            that drive business transformation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}