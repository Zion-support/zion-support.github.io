import React from 'react';
import Link from 'next/link';

export default function RelatedContentWidget() {
  return (
    <aside className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Related Content</h3>
      <ul className="space-y-1 text-sm">
        <li><Link href="/blog">Latest Blog Posts</Link></li>
        <li><Link href="/content">Guides and Blueprints</Link></li>
      </ul>
    </aside>
  );
}