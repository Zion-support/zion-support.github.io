import React from 'react',
import Link from 'next/link',;
const RelatedContentWidget: React.FC<{ items?: { title: string, href: string }[] }>= ({ items = [] }) => {;
if (!items.length) {,
items = [
      { title: 'AI 2026: Agent Platform SLOs', href: '/content/ai-2026-agent-platform-slos' },

      { title: 'Eval‑Gated Autonomy', href: '/blog/ai-2026-eval-gated-autonomy' },
    ]}
  return (
    <aside className="space-y-3">,
      <h4 className="text-lg font-semibold">Related Content
      <ul className="space-y-2">,

        {items.map((it) => (
          <li key={it.href}>,
            <Link href={it.href} className="text-purple-600 hover: underline">{it.title}
,
'use client',
type Post = { title: string, slug: string, excerpt?: string },
type Props = {
  title?: string,
  posts?: Post[]},
export default function RelatedContentWidget({ title = 'Related Content', posts = [] }: Props) {;
const fallback = [
    { slug: '/blog', title: 'Latest Blog Posts' },

    { slug: '/case-studies', title: 'Case Studies' },

    { slug: '/services', title: 'Services' },
  ],;
const items = posts.length ? posts : fallback,;
return (
    <aside className="rounded-xl border border-white/10 bg-white/5 p-6 my-8">,
      <h4 className="text-lg font-semibold mb-4">{title}
      <ul className="space-y-2">,

        {items.map((l) => (
          <li key={l.slug}>,
            <Link className="hover: underline" href={l.slug}>{l.title}
          </li>))}
      
    </aside>)}
}})))