"use client";

import React from 'react';
import Link from 'next/link';

const RelatedContentWidget: React.FC<{ items?: { title: string; href: string }[] }>= ({ items = [] }) => {
  if (!items.length) {
    items = [
      { title: 'AI 2026: Agent Platform SLOs', href: '/content/ai-2026-agent-platform-slos' },
      { title: 'Eval‑Gated Autonomy', href: '/blog/ai-2026-eval-gated-autonomy' },
    ];
  }
  return (
    <aside className="space-y-3">
      <h4 className="text-lg font-semibold">Related Content</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-purple-600 hover:underline">{it.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedContentWidget;

