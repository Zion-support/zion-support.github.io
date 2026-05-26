// app/portal/billing/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Billing & Invoices',
  description:
    'View your invoices, payment methods, billing history, and manage subscription details.',
};

const invoices = [
  {
    id: 'INV-2026-003',
    desc: 'Monthly Retainer — Jun 2026',
    amount: '$14,200.00',
    status: 'Pending',
    date: 'Due Jun 1, 2026',
    color: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 'INV-2026-002',
    desc: 'Consulting Add-on — May 2026',
    amount: '$4,800.00',
    status: 'Paid',
    date: 'Paid May 22, 2026',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
  },
  {
    id: 'INV-2026-001',
    desc: 'Consulting Services — May 2026',
    amount: '$15,000.00',
    status: 'Paid',
    date: 'Paid May 15, 2026',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
  },
  {
    id: 'INV-2026-000',
    desc: 'Monthly Retainer — Apr 2026',
    amount: '$12,500.00',
    status: 'Paid',
    date: 'Paid Apr 20, 2026',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
  },
];

const paymentMethods = [
  { type: 'Visa ending in 4242', expiry: '09/2027', default: true },
  { type: 'ACH — Bank of America', expiry: 'Verified', default: false },
];

export default function BillingPage() {
  const totalOutstanding = invoices
    .filter((inv) => inv.status === 'Pending')
    .reduce((sum) => sum + 1, 0);

  return (
    <div className="container-page py-16">
      <Link
        href="/portal/"
        className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block"
      >
        &larr; Back to Client Portal
      </Link>

      {/* Header */}
      <div className="glass-card max-w-3xl mb-8">
        <div className="text-5xl mb-4">&#x1F4B3;</div>
        <h1 className="text-4xl font-bold text-white mb-4">Billing &amp; Invoices</h1>
        <p className="text-slate-400 mb-8">
          View your invoices, update payment methods, and track payment history.
        </p>

        {/* Billing Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              Total Outstanding
            </p>
            <p className="text-2xl font-bold text-white">
              {totalOutstanding > 0 ? invoices.filter((i) => i.status === 'Pending')[0]?.amount : '$0.00'}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {totalOutstanding > 0 ? `${totalOutstanding} invoice pending` : 'All paid'}
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              Paid This Month
            </p>
            <p className="text-2xl font-bold text-green-400">$19,800.00</p>
            <p className="text-xs text-slate-500 mt-1">2 invoices paid</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              Next Invoice
            </p>
            <p className="text-2xl font-bold text-white">Jun 1, 2026</p>
            <p className="text-xs text-slate-500 mt-1">~$14,200.00 est.</p>
          </div>
        </div>

        {/* Invoice List */}
        <h2 className="text-xl font-semibold text-white mb-4">Invoice History</h2>
        <div className="space-y-3">
          {invoices.map((inv, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-purple-500/30 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-mono text-slate-400">{inv.id}</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${inv.color}`}
                  >
                    {inv.status}
                  </span>
                </div>
                <p className="text-white font-medium">{inv.desc}</p>
                <p className="text-slate-500 text-xs">{inv.date}</p>
              </div>
              <div className="text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                <span className="text-purple-400 font-bold text-lg">{inv.amount}</span>
                <button className="text-xs text-purple-400 hover:text-purple-300 underline">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="glass-card max-w-3xl mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Payment Methods</h2>
        <div className="space-y-3">
          {paymentMethods.map((pm, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pm.default ? '\u{1F535}' : '\u{26AB}'}</span>
                <div>
                  <p className="text-white font-medium">
                    {pm.type}
                    {pm.default && (
                      <span className="ml-2 text-xs text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </p>
                  <p className="text-slate-500 text-xs">{pm.expiry}</p>
                </div>
              </div>
              <button className="text-xs text-slate-400 hover:text-white transition">
                Edit
              </button>
            </div>
          ))}
        </div>
        <button className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition flex items-center gap-1">
          <span className="text-lg leading-none">+</span> Add Payment Method
        </button>
      </div>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto p-4 bg-purple-950/30 rounded-xl border border-purple-500/20">
        <p className="text-purple-300 text-sm">
          Need a detailed invoice, receipt, or to update billing info?{' '}
          <a href="/contact/" className="underline hover:text-purple-200">
            Contact us
          </a>{' '}
          or call{' '}
          <a href="tel:+13024350950" className="underline">
            +1 302 435 0950
          </a>
          .
        </p>
      </div>
    </div>
  );
}
