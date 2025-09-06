<<<<<<< HEAD
}
import React from 'react',
import Head from 'next / head',
import Layout from '../components / layout / Layout',
export default /**
 * EmailDmarcAnalyzerPage - Function description
 */
function EmailDmarcAnalyzerPage() {
  return (
    <Layout>;
      <Head>;
        <title > Email DMARC Analyzer | Zion Tech Group</title>;
        <meta name="description" content="Monitor DMARC aggregate reports, SPF / DKIM posture, domain reputation hints, and deliverability scorecards." />;
        <link rel="canonical" href="https://ziontechgroup.com / email - dmarc - analyzer" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-4xl mx - auto space - y-6">;
          <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - amber - 400 to - orange - 500 bg - clip - text text - transparent">Email DMARC Analyzer</h1>;
          <p className="text - slate - 300">DMARC reporting, SPF / DKIM audits, DNS change tracking, and mailbox provider insights for small teams.</p>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            {[ 'DMARC aggregate / forensic reportsSPF / DKIM audits & DNS history_provider insights & tips_weekly deliverability scorecard' ].map ((f) => (
              <div key={f} className="p - 4 rounded - xl bg - black / 40 border border - amber - 500 / 30 text - slate - 200">{f}</div>))}
          </div>;
          <div className="flex gap - 3">;
            <a href="/contact" className="px - 6 py - 3 rounded - xl bg - gradient - to - r from - amber - 600 to - orange - 700 text - white">Start from $39 / mo</a>;
            <a href="/market - pricing" className="px - 6 py - 3 rounded - xl border border - gray - 700 text - gray - 200">See market pricing</a>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
=======

import React from 'react';

import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function EmailDmarcAnalyzerPage() {
  return (
    <Layout>
      <Head>
        <title>Email DMARC Analyzer | Zion Tech Group</title>
        <meta name="description" content="Monitor DMARC aggregate reports, SPF/DKIM posture, domain reputation hints, and deliverability scorecards." />
        <link rel="canonical" href="https://ziontechgroup.com/email-dmarc-analyzer" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Email DMARC Analyzer</h1>
<<<<<<< HEAD
          <p className="text-slate-300">DMARC reporting, _SPF/DKIM audits, _DNS change tracking, _and mailbox provider insights for small teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'DMARC aggregate/forensic reports', _'SPF/DKIM audits & DNS history', _'Provider insights & tips', _'Weekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{_f}</div>

            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white&quot;>Start from $39/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
=======
          <p className="text-slate-300">DMARC reporting, SPF/DKIM audits, DNS change tracking, and mailbox provider insights for small teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'DMARC aggregate/forensic reportsSPF/DKIM audits & DNS historyProvider insights & tipsWeekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{f}</div>
<<<<<<< HEAD
            ))}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white">Start from $39/mo</a>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>
=======
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white">Start from $39/mo</Link>
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</Link>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </div>
        </div>
      </div>
    </Layout>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function EmailDmarcAnalyzerPage(req, res) {
  try {
  return (;
    <Layout>;
      <Head>;
        <title>Email DMARC Analyzer | Zion Tech Group</title>;
        <meta name="description" content="Monitor DMARC aggregate reports, SPF/DKIM posture, domain reputation hints, and deliverability scorecards." />;
        <link rel="canonical" href="https://ziontechgroup.com/email-dmarc-analyzer" />;
      </Head>;
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto space-y-6">;
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Email DMARC Analyzer</h1>;
          <p className="text-slate-300">DMARC reporting, SPF/DKIM audits, DNS change tracking, and mailbox provider insights for small teams.</p>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            {[ 'DMARC aggregate/forensic reportsSPF/DKIM audits & DNS historyProvider insights & tipsWeekly deliverability scorecard' ].map((f) => (;
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{f}</div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
          </div>;
          <div className="flex gap-3">;
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white">Start from $39/mo</a>;
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See market pricing</a>;
          </div>;
        </div>;
      </div>;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
