'use client';

import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, href, description, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 h-full">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
          Learn More →
        </div>
      </div>
    </Link>
  );
}