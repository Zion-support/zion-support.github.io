import React from 'react';
import Link from 'next/link';

interface BannerProps {
  title: string;
  description: string;
  link: string;
  badge?: string;
  badgeColor?: string;
  icon?: string;
}

export default function SimplifiedBanner({ 
  title, 
  description, 
  link, 
  badge, 
  badgeColor = 'blue',
  icon = '🚀'
}: BannerProps) {
  const badgeClasses = {
    blue: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
    green: 'bg-green-500/20 text-green-200 border-green-400/30',
    purple: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
    orange: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
  };

  return (
    <section className="py-8 border-t border-b border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h3 className="text-white/90 font-semibold text-lg">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {badge && (
              <span className={`px-3 py-1 rounded-lg font-semibold text-sm border ${badgeClasses[badgeColor as keyof typeof badgeClasses]}`}>
                {badge}
              </span>
            )}
            <Link
              href={link}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}