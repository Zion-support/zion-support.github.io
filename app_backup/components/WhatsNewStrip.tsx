import Link from 'next/link';
import React from 'react';
import { WHATS_NEW_ITEMS } from '../../data/whatsNew';

const WhatsNewStrip: React.FC = () => {
  const items = WHATS_NEW_ITEMS.slice(0, 6);

  return (
    <section className="py-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">What's new</h2>
          <Link href="/blog" className="text-purple-600 font-semibold hover:text-purple-800">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block bg-white p-5 rounded-xl shadow hover:shadow-md border border-purple-100 transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl" aria-hidden>{item.emoji ?? '✨'}</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-700">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <div className="mt-3 text-purple-600 text-sm font-semibold">{item.ctaLabel} →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNewStrip;

