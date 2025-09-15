"use client";
import React from 'react';
import Link from 'next/link';
import { WHATS_NEW_ITEMS, type WhatsNewItem } from '../../data/whatsNew';

type WhatsNewProps = {
  limit?: number;
  highlightOnly?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
};

function sortByDateDesc(items: WhatsNewItem[]): WhatsNewItem[] {
  return [...items].sort((a, b) => {
    const ad = a.date ? new Date(a.date).getTime() : 0;
    const bd = b.date ? new Date(b.date).getTime() : 0;
    return bd - ad;
  });
}

const WhatsNew: React.FC<WhatsNewProps> = ({
  limit = 6,
  highlightOnly = false,
  className,
  title = "What's new",
  subtitle = 'Fresh articles, guides, and blueprints'
}) => {
  const items = sortByDateDesc(
    highlightOnly ? WHATS_NEW_ITEMS.filter((i) => i.highlight) : WHATS_NEW_ITEMS
  ).slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section className={`py-10 ${className ?? ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-1">{subtitle}</p>
          </div>
          <Link href="/content" className="text-purple-600 font-semibold hover:text-purple-800">View all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl leading-none">{item.emoji ?? '🆕'}</span>
                {item.date && (
                  <span className="text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                )}
                {item.highlight && (
                  <span className="ml-auto inline-flex items-center px-2 py-0.5 text-xs font-medium bg-purple-50 text-purple-700 rounded">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3">{item.title}</h3>
              <p className="text-gray-600 mt-2 flex-1">{item.description}</p>
              <div className="mt-4">
                <Link
                  href={item.href}
                  className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700"
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;

