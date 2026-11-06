import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Expense Tracker Pro | Zion Tech Group',
  description: 'Automated expense management with AI fraud detection, receipt scanning, and policy compliance for enterprises.',
  keywords: 'AI expense tracker, expense management, expense fraud detection, corporate expenses',
  openGraph: {
    title: 'AI Expense Tracker Pro | Zion Tech Group',
    description: 'Automated expense management with AI fraud detection, receipt scanning, and policy compliance for enterprises.',
    url: 'https://ziontechgroup.com/ai-expense-tracker-pro',
    siteName: 'Zion Tech Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Expense Tracker Pro | Zion Tech Group',
    description: 'Automated expense management with AI fraud detection, receipt scanning, and policy compliance for enterprises.',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-expense-tracker-pro',
  },
}

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-white">AI Expense Tracker Pro</h1>

      <p className="text-lg text-slate-300 mb-8">
        Streamline expense management with AI-powered receipt scanning, fraud detection, and real-time policy compliance. Built for enterprise finance teams handling high transaction volumes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Key Capabilities</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
        <li>Seamless integration with existing enterprise systems</li>
        <li>Enterprise-grade security and compliance (SOC 2, ISO 27001)</li>
        <li>Scalable deployment with 99.9% uptime SLA</li>
        <li>Dedicated support and ongoing optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Get Started</h2>
      <p className="text-slate-300 mb-4">
        Ready to explore how this AI experience can transform your business?
        Book a free 30-minute AI Discovery session with our specialists.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <Link href="/contact/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Contact us
        </Link>
        <Link href="/services/" className="inline-block px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-blue-500 hover:text-white transition-colors">
          Explore services
        </Link>
        <Link href="/book/" className="inline-block px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-blue-500 hover:text-white transition-colors">
          Book $99 Discovery
        </Link>
        <Link href="/ai-lab/" className="inline-block px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-blue-500 hover:text-white transition-colors">
          AI Lab
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500">
        <p>🔗 Related: <Link href="/ai-consulting/" className="underline">AI Consulting</Link> · <Link href="/ai-agents/" className="underline">AI Agents</Link> · <Link href="/ai-lab/" className="underline">AI Lab</Link></p>
      </div>
    </article>
  )
}
