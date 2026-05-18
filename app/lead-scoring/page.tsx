import Link from 'next/link';
import type { Metadata } from 'next';

export default function LeadScoringPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-sm text-slate-400 hover:text-white mb-4 inline-block">← Home</Link>
          <div className="text-6xl mb-4">ud83cudfaf</div>
          <h1 className="text-3xl font-bold text-white">AI Lead Scoring</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">AI-powered lead scoring based on behavioral signals, firmographics, and engagement history.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              Get Started Free
            </Link>
            <Link href="/services" className="rounded-lg border border-slate-600 bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
              View All Services
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Core Features</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ AI-powered automation</li>
              <li>✓ Real-time processing</li>
              <li>✓ Enterprise-grade security</li>
              <li>✓ 24/7 support included</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>✓ Cut operational costs by 60%</li>
              <li>✓ Launch in days, not months</li>
              <li>✓ Scale without limits</li>
              <li>✓ ROI visible within 30 days</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Pricing</h3>
            <p className="text-2xl font-bold text-slate-900">From $49/mo</p>
            <p className="mt-2 text-sm text-slate-600">Transparent monthly pricing. Cancel anytime. No hidden fees.</p>
            <Link href="/contact" className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Get a Quote
            </Link>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Ready to transform your business?</h3>
          <p className="text-sm text-slate-600">
            <strong>Phone:</strong> +1 302 464 0950 &nbsp;|&nbsp; 
            <strong>Email:</strong> kleber@ziontechgroup.com &nbsp;|&nbsp; 
            <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}
