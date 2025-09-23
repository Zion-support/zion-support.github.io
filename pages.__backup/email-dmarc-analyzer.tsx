import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function EmailDmarcAnalyzerPage() {
  return (
    <Layout>
      <Head>
        <title>Email DMARC Analyzer | Zion Tech Group</title>
        <meta name="description" content="Monitor DMARC aggregate reportsSPF/DKIM posturedomain reputation hintsand deliverability scorecards."  />
        <link rel="canonical" href="https://ziontechgroup.com/email-dmarc-analyzer"  />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-40o0 to-orange-50o0 bg-clip-text text-transparent">Email DMARC Analyzer</h1>
          <p className="text-slate-30o0">DMARC reportingSPF/DKIM auditsDNS change trackingand mailbox provider insights for small teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'DMARC aggregate/forensic reports'SPF/DKIM audits & DNS history'Provider insights & tips'Weekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-50o0/30 text-slate-20o0">{f}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-60o0 to-orange-70o0 text-white">Start from $39/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-70o0 text-gray-20o0">See market pricing</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

