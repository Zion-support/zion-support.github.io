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
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-sm text-gray-700">{bullet}</span>
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
      description: "Custom micro SaaS applications that solve specific business problems with elegant simplicity.",
      icon: "🚀",
      bullets: [
        "Rapid development",
        "Scalable architecture",
        "User-friendly interfaces",
        "Cost-effective solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results. 
            Transform your operations with cutting-edge technology and expert implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our solutions can drive your success.
            Let&apos;s discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
