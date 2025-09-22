import React from 'react';
import Link from 'next/link';

interface RelatedContentItem {
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface RelatedContentWidgetProps {
  items?: RelatedContentItem[];
  title?: string;
  className?: string;
}

const defaultItems: RelatedContentItem[] = [
  {
    title: "AI Services Overview",
    description: "Comprehensive AI solutions for your business",
    href: "/services",
    category: "Services"
  },
  {
    title: "AI Consulting",
    description: "Expert AI consulting and implementation",
    href: "/services/ai-consulting",
    category: "Consulting"
  },
  {
    title: "AI Development",
    description: "Custom AI development and integration",
    href: "/services/ai-development",
    category: "Development"
  }
];

export default function RelatedContentWidget({ 
  items = defaultItems,
  title = "Related Content",
  className = ""
}: RelatedContentWidgetProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Link 
            key={index}
            href={item.href}
            className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              {item.category && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}