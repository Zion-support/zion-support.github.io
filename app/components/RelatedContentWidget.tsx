'use client';

import Link from 'next/link';

type Post = { title: string; slug: string; excerpt?: string };

type Props = {
  title?: string;
  posts?: Post[];
};

export default function RelatedContentWidget({ title = 'Related Content', posts = [] }: Props) {
  const fallback = [
    { slug: '/blog', title: 'Latest Blog Posts' },
    { slug: '/case-studies', title: 'Case Studies' },
    { slug: '/services', title: 'Services' },
  ];
  const items = posts.length ? posts : fallback;

  return (
    <aside className="rounded-xl border border-white/10 bg-white/5 p-6 my-8">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((l) => (
          <li key={l.slug}>
            <Link className="hover:underline" href={l.slug}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}