import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface RelatedContentItem {
  title: string;
  href: string;
  description?: string;
  category?: string;
}

interface RelatedContentWidgetProps {
  title?: string;
  items?: RelatedContentItem[];
  className?: string;
}

const defaultItems: RelatedContentItem[] = [
  {
    title: "AI Services Overview",
    href: "/services",
    description: "Comprehensive AI solutions for your business",
    category: "Services"
  },
  {
    title: "AI Tools & Resources",
    href: "/tools",
    description: "Free AI tools and assessment tools",
    category: "Tools"
  },
  {
    title: "About Zion Tech Group",
    href: "/about",
    description: "Learn about our mission and expertise",
    category: "Company"
  }
];

export default function RelatedContentWidget({
  title = "Related Content",
  items = defaultItems,
  className = ""
}: RelatedContentWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
              <Link 
                href={item.href}
                className="block hover:bg-gray-50 p-2 rounded-md transition-colors"
              >
                <h4 className="font-medium text-gray-900 hover:text-blue-600">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
                {item.category && (
                  <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1">
                    {item.category}
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}