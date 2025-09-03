import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Zion Tech Group', description = 'AI, Micro SaaS, and IT solutions' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a className="font-bold" href="/">Zion Tech Group</a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/">Home</a>
              <a href="/request-quote">Request Quote</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
            <div>Contact: +1 302 464 0950 • kleber@ziontechgroup.com</div>
            <div>364 E Main St STE 1008 Middletown DE 19709</div>
          </div>
        </footer>
      </div>
    </>
  );
}