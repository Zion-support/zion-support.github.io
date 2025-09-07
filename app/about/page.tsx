/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Zion Tech Group',
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">About Zion Tech Group</h1>
        <p className="text-gray-700 mb-8">
          We are a technology company specializing in AI solutions, micro SaaS development,
          and enterprise IT services.
        </p>
        <Link className="text-blue-600 underline" href="/contact">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
