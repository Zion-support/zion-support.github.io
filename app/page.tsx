import React from 'react';
import Link from 'next/link';
import October2026NewContentMegaBanner from '../components/October2026NewContentMegaBanner';

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, digital transformation',
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered enterprise solutions",
    "url": "https://ziontechgroup.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="animate-fade-in">
        
        {/* NEW CONTENT OCTOBER 2026 */}
        <October2026NewContentMegaBanner />

        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Zion Tech Group delivers cutting-edge AI services and enterprise IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
                Explore Services
              </Link>
              <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Latest Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Latest AI Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/ai-reinforcement-learning-enterprise-2026" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3">AI Reinforcement Learning: 400% ROI</h3>
                <p className="text-gray-600">Intelligent optimization systems delivering $250M+ savings</p>
              </Link>
              <Link href="/blog/ai-generative-design-enterprise-2026" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3">Generative Design: 10x Faster</h3>
                <p className="text-gray-600">Transform product development with AI</p>
              </Link>
              <Link href="/blog/ai-conversational-intelligence-enterprise-2026" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3">Conversational AI: 97% Accuracy</h3>
                <p className="text-gray-600">10M+ conversations daily with intelligent automation</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/case-studies/retail-giant-ai-transformation-2026" className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Retail Giant: $320M ROI</h3>
                <p className="text-gray-700 mb-4">Fortune 100 retail chain: 450% revenue growth, 94% customer satisfaction</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><div className="text-2xl font-bold text-orange-600">$320M</div><div className="text-sm">ROI</div></div>
                  <div><div className="text-2xl font-bold text-red-600">450%</div><div className="text-sm">Growth</div></div>
                  <div><div className="text-2xl font-bold text-green-600">94%</div><div className="text-sm">CSAT</div></div>
                </div>
              </Link>
              <Link href="/case-studies/logistics-ai-autonomous-operations-2026" className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Logistics: $240M ROI</h3>
                <p className="text-gray-700 mb-4">Fortune 500: 95% autonomous operations, 99.7% on-time delivery</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><div className="text-2xl font-bold text-indigo-600">$240M</div><div className="text-sm">ROI</div></div>
                  <div><div className="text-2xl font-bold text-cyan-600">95%</div><div className="text-sm">Autonomous</div></div>
                  <div><div className="text-2xl font-bold text-green-600">99.7%</div><div className="text-sm">On-Time</div></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Let's discuss your AI transformation journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600">
                📧 Get Free Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}