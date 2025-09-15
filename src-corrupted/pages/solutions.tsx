
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const cards = [
    { title: 'Enterprise Solutions', desc: 'Scalable solutions for large organizations.', price: 'Custom pricing' },
    { title: 'SMB Solutions', desc: 'Cost-effective solutions for small businesses.', price: 'Starting from $1,000/month' },
    { title: 'Startup Solutions', desc: 'Innovative solutions for growing startups.', price: 'Starting from $800/month' }
  ];

  return (
    <>
      <SEO title="Solutions - Zion Tech Group" />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored technology solutions to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map(card => (
              <div key={card.title} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <p className="text-blue-600 font-semibold">{card.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
