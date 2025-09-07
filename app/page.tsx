import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Zion Tech Group</h1>
    </main>
  );
}