'use client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seo Machine Learning Platform | Zion Tech Group',
  description: 'Seo Machine Learning Platform — Zion Tech Group delivers cutting-edge technology solutions.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Machine Learning Platform</h1>
        <p className="text-xl text-slate-400">Transform your business with machine learning platform</p>
      </div>
    </div>
  );
}
