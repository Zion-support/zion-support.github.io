import React from 'react';
import Link from 'next/link';
import { Palette2, ExternalLink } from 'lucide-react';

const designResources = [
  {
    name: 'Unsplash',
    href: 'https://unsplash.com/?ref=ziontech',
    desc: 'Free high‑resolution stock photos with a permissive license.',
    category: 'Images'
  },
  {
    name: 'Pexels',
    href: 'https://www.pexels.com/?ref=ziontech',
    desc: 'Free stock photos and videos, no attribution required.',
    category: 'Images'
  },
  {
    name: 'Figma',
    href: 'https://www.figma.com/login?ref=ziontech',
    desc: 'Free design and prototyping tool with real‑time collaboration.',
    category: 'UI/UX'
  },
  {
    name: 'Adobe Express',
    href: 'https://express.adobe.com/?ref=ziontech',
    desc: 'Free plan for creating graphics, web pages, and short videos.',
    category: 'Graphics'
  },
  {
    name: 'Canva',
    href: 'https://www.canva.com/?ref=ziontech',
    desc: 'Free online design platform with templates for social media, presentations, and more.',
    category: 'Graphics'
  },
  {
    name: 'Google Fonts',
    href: 'https://fonts.google.com/?ref=ziontech',
    desc: 'Free library of web fonts for beautiful typography.',
    category: 'Typography'
  },
  {
    name: 'Coolors',
    href: 'https://coolors.co/?ref=ziontech',
    desc: 'Fast, free color palette generator for designers.',
    category: 'Palette'
  },
  {
    name: 'Font Awesome',
    href: 'https://fontawesome.com/?ref=ziontech',
    desc: 'Free icon set with thousands of scalable vector icons.',
    category: 'Icons'
  },
];

const grouped = designResources.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof designResources>);

export const metadata = {
  title: 'Free Design Resources | Zion Tech Group',
  description: 'Top free design tools and assets for creating stunning visuals without cost.',
};

export default function FreeDesignResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Palette2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free Design Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover premium‑quality design tools that empower you to create beautiful projects at zero cost.
            Every referral helps keep our open‑source work thriving.
          </p>
        </div>
        <div className="space-y-16">
          {Object.entries(grouped).map(([category, resources]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {resource.desc}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Custom Design Assets?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get professional design assets tailored to your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Request Free Mockup
          </Link>
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}