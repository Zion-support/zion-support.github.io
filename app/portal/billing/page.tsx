import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Billing & Invoices — Client Portal',
  description: 'View your invoices, payment methods, and billing history. Secure client portal access.',
  alternates: { canonical: '/portal/billing/' },
};

export default function BillingPage() {
  return (
    <PageShell
      title="Billing & Invoices"
      description="View your invoices, update payment methods, and track payment history."
      eyebrow="Client Portal"
      align="center"
      canonical="https://ziontechgroup.com/portal/billing/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Client Portal', href: '/portal' },
        { label: 'Billing' },
      ]}
    >
      <div className="space-y-4">
        <div className="page-card flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">Invoice #INV-2026-001</h3>
            <p className="text-sm text-slate-400">Consulting Services — May 2026</p>
          </div>
          <span className="font-bold text-purple-300">$15,000.00</span>
        </div>
        <div className="page-card flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">Invoice #INV-2026-000</h3>
            <p className="text-sm text-slate-400">Monthly Retainer — Apr 2026</p>
          </div>
          <span className="font-bold text-purple-300">$12,500.00</span>
        </div>
      </div>
    </PageShell>
  );
}
