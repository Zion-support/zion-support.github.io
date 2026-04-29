import React from 'react';
import Link from 'next/link';
import { Code, ExternalLink } from 'lucide-react';

const cmsTools = [
  {
    name: 'WordPress.com',
    href: 'https://wordpress.com/?ref=ziontech',
    desc: 'Free blogging and website builder with 3GB storage.',
    category: 'Hosted CMS'
  },
  {
    name: 'Ghost(Pro) Free Starter',
    href: 'https://ghost.org/starter?ref=ziontech',
    desc: 'Fluent publishing platform with free plan.',
    category: 'Hosted CMS'
  },
  {
    name: 'Strapi (Open Source)',
    href: 'https://strapi.io/?ref=ziontech',
    desc: 'Headless CMS you host for free on your own server.',
    category: 'Self‑Hosted'
  },
  {
    name: 'DatoCMS',
    href: 'https://www.datocms.com/?ref=ziontech',
    desc: 'Content infrastructure with 25MB free storage.',
    category: 'Headless CMS'
  },
  {
    name: 'Sanity.io',
    href: 'https://www.sanity.io/?ref=ziontech',
    desc: 'Real-time document‑store CMS with free tier.',
    category: 'Headless CMS'
  },
  {
    name: 'Netlify CMS',
    href: 'https://www.netlifycms.org/?ref=ziontech',
    desc: "Open-source CMS hosting freely via Netlify.",
    category: 'Self‑Hosted'
  },
];

const grouped = cmsTools.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof cmsTools>);

export const metadata = {
  title: 'Free CMS Tools | Zion Tech Group',
  description: 'Curated free CMS solutions that help you publish content without cost.',
};

export default function FreeCMSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free CMS Tools
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Publish and manage content on a zero‑cost plan with these vetted platforms.</p>
        </div>
        <div className="space-y-16">
          {Object.entries(grouped).map(([category, tools]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white mb-8">{category