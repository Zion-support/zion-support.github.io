"use client";

import React from 'react';

type RelatedContentWidgetProps = {
  title?: string;
  posts?: { title: string; href: string }[];
};

export default function RelatedContentWidget({ title = 'Related Content', posts = [] }: RelatedContentWidgetProps) {
  return (
    <aside className="bg-white rounded-xl border shadow p-4">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 list-disc list-inside">
        {posts.length === 0 ? (
          <li className="text-gray-500">More content coming soon</li>
        ) : (
          posts.map(item => (
            <li key={item.href}>
              <a href={item.href} className="text-purple-700 hover:text-purple-900">
                {item.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}

