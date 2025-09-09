import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';

const News: NextPage = () => {
  const items = [
    { title: 'Zion Tech Group launches AI Services Suite', date: '2025-08-01', href: '/blog' },
    { title: 'Partnership with leading cloud provider', date: '2025-07-12', href: '/case-studies' },
    { title: 'Upcoming webinar on Micro SaaS', date: '2025-06-28', href: '/webinars' },
  ];

  return (
    <MainLayout title="News | Zion Tech Group" description="Latest company news and updates from Zion Tech Group.">
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">News</h1>
          <p className="text-gray-200 max-w-2xl">Company updates, press releases, and announcements.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-sm text-gray-500 mb-2">{item.date}</div>
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <Link href={item.href} className="text-blue-600 hover:underline">Read more</Link>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default News;

