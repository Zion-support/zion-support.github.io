import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { PenSquare, CheckCircle, Sparkles, Images, DollarSign } from 'lucide-react';
import Link from 'next/link';

const AIContentStudio: NextPage = () => {
  const tiers = [
    { name: 'Starter', price: 79, features: ['10 blog posts/mo', 'SEO briefs', 'Social snippets', 'Basic plagiarism checks'] },
    { name: 'Pro', price: 249, features: ['40 blog posts/mo', 'Brand voice memory', 'Image generation credits', 'CMS publishing'] },
    { name: 'Enterprise', price: 799, features: ['Unlimited seats', 'Custom workflows', 'Multilingual content', 'Human-in-the-loop QA'] },
  ];

  return (
    <MainLayout title="AI Content Studio - Micro SaaS by Zion Tech Group" description="Plan, draft, and publish SEO-optimized content with AI brief generation, brand voice, and auto-publishing.">
      <section className="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Content Studio</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">From keyword to published post in minutes—briefs, drafts, images, and social posts in one flow.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-4xl font-extrabold text-purple-600 mb-2">${tier.price}<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Start Trial</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Sparkles className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-semibold mb-1">SEO-Aware Drafting</h4>
            <p className="text-gray-600">Briefs include SERP, headings, and FAQs. Drafts optimize for readability and E-E-A-T.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Images className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-semibold mb-1">On-brand Media</h4>
            <p className="text-gray-600">Generate and crop images automatically to match your brand and channel formats.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <PenSquare className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-semibold mb-1">One-click Publish</h4>
            <p className="text-gray-600">Push to WordPress, Webflow, or headless CMS with scheduled social posts.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AIContentStudio;

