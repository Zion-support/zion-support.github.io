<<<<<<< HEAD
import React from 'react';
=======

import Link from 'next/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-2 hover:scale-105"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2" role="list">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
        Learn more →
      </div>
    </Link>
  );
}
>>>>>>> d886c61d6064773a1db6057f2a6c4edcabf807d6

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Leading provider of AI solutions, micro SaaS development, and enterprise IT services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions to transform your business.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Micro SaaS</h2>
            <p className="text-gray-600">
              Scalable micro SaaS applications built for modern businesses.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enterprise IT</h2>
            <p className="text-gray-600">
              Comprehensive IT services and infrastructure solutions.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </main>
=======
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-lg relative overflow-hidden" role="complementary" aria-labelledby="cta-heading">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute -top-4 -left-4 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Let&apos;s discuss your project and create a custom solution that drives
            real business value. Our team has delivered 1000+ successful
            projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl"
              aria-label="Contact us to get started with your project"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Explore our services"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
>>>>>>> d886c61d6064773a1db6057f2a6c4edcabf807d6
    </div>
  );
}