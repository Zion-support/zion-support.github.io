// app/5g-solutions/page.tsx
'use client';
import Link from 'next/link';
import { allServices } from '@/data/servicesData';
import type { Service } from '@/data/servicesData';

const CATEGORY_KEY = '5g';

export default function FivegPage() {
  const relatedSvcs = allServices.filter((s: Service) => s.category === CATEGORY_KEY).slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]"></div>
        <div className="relative container-page">
          <nav className="mb-8 text-sm text-slate-400">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-300">5G &amp; Private Network Solutions</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">📡</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">5G &amp; Private Network Solutions</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">Enterprise 5G private networks, edge computing, network slicing, and telecom infrastructure solutions for industrial and commercial deployment.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/" className="btn-primary text-lg px-8 py-3">View Related Services</Link>
              <Link href="/contact/" className="btn-secondary text-lg px-8 py-3">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}