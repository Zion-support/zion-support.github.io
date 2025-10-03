// import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Video, Mic, Search, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function MultimodalSearchPlatformPage() {
  const title = 'Multimodal Search & Insights Platform — Zion Tech Group';
  const description = 'Unify text, image, audio, and video search with vector/hybrid retrieval, real-time analytics, and secure enterprise controls.';

  const features = [
    'Unified embeddings for text, image, audio, and video',
    'Hybrid retrieval (BM25 + vector) and Rerankers',
    'Realtime ingestion with streaming pipelines',
    'Advanced filters, facets, and semantic suggestions',
    'Access controls, redaction, and audit logging',
    'Dashboards for search analytics and relevance tuning'
  ];

  const pricing = [
    { name: 'Starter', price: '$1,500/month', details: ['Up to 1M vectors', 'SaaS', 'Email support'] },
    { name: 'Growth', price: '$4,000/month', details: ['Up to 20M vectors', 'SaaS/VPC', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', details: ['Unlimited', 'On‑prem/VPC', 'SLA & DPA'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-services/multimodal-search-platform" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <Search className="w-8 h-8" />
              <span className="font-semibold">AI Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Multimodal Search & Insights</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Request a Demo</Link>
              <a href="#pricing" className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Modalities</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><ImageIcon className="w-5 h-5 text-indigo-700 mr-2" />Images & Diagrams</div>
                <div className="flex items-center"><Video className="w-5 h-5 text-indigo-700 mr-2" />Video Transcripts & Frames</div>
                <div className="flex items-center"><Mic className="w-5 h-5 text-indigo-700 mr-2" />Audio & Call Logs</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div key={i} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-extrabold text-indigo-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Turn Any Asset Into Insight</h2>
            <p className="opacity-90 mb-6">Empower teams to find answers across documents, media, and systems securely.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center">Call Sales: +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

