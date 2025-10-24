import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.',
  keywords: 'AI solutions, IT services, business automation, technology consulting, Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Advanced AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: ['https://ziontechgroup.com/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">Advanced AI and IT Solutions</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
        </section>
      </main>
    </div>
  );
}