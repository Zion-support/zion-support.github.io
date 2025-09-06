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
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
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
      description: "Harness the power of artificial intelligence to transform your business operations.",
      bullets: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      icon: "🤖"
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT solutions to keep your business running smoothly.",
      bullets: ["Cloud Migration", "Cybersecurity", "DevOps"],
      icon: "💻"
    },
    {
      title: "Mobile Development",
      href: "/services/mobile-development",
      description: "Custom mobile applications for iOS and Android platforms.",
      bullets: ["Native Apps", "Cross-platform", "UI/UX Design"],
      icon: "📱"
    },
    {
      title: "Data Analytics",
      href: "/services/data-analytics",
      description: "Turn your data into actionable insights with our analytics solutions.",
      bullets: ["Business Intelligence", "Predictive Analytics", "Data Visualization"],
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions. 
            We provide comprehensive AI, IT, and digital transformation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
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