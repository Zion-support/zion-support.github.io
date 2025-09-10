import { useEffect, useMemo, useState } from 'react',;
function getRefCode(): string {;
  if (typeof window === 'undefined') return '',;
  return localStorage.getItem('ref_code') || '';
}

interface Referral {
  id: string;
  email: string;
  status: 'pending' | 'converted' | 'paid';
  commission: number;
  date: string;
}

const mockStats: AffiliateStats = {
  totalEarnings: 12500,
  monthlyEarnings: 2500,
  totalReferrals: 45,
  conversionRate: 12.5,
  pendingPayouts: 750
};

const mockReferrals: Referral[] = [
  {
    id: '1',
    email: 'user1@example.com',
    status: 'converted',
    commission: 500,
    date: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    email: 'user2@example.com',
    status: 'pending',
    commission: 250,
    date: '2025-01-14T15:30:00Z'
  },
  {
    id: '3',
    email: 'user3@example.com',
    status: 'paid',
    commission: 750,
    date: '2025-01-13T09:15:00Z'
  }
];

const AffiliateDashboard: React.FC = () => {
  const [stats, setStats] = useState<AffiliateStats | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'referrals' | 'payouts'>('overview');

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats(mockStats);
      setReferrals(mockReferrals);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'converted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>Affiliate Dashboard - Zion Tech Group</title>
        </Head>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-8">Loading affiliate dashboard...</div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Affiliate Dashboard - Zion Tech Group</title>
        <meta name="description" content="Manage your affiliate program and track earnings" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Affiliate Dashboard</h1>
          <p className="text-gray-600">Track your referrals and earnings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-green-600">${stats?.totalEarnings.toLocaleString()}</p>
          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>
            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</Link>
          </div>
        </div>
        {msg && <p className="mt-2 text-sm">{msg}</p>}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string, value: number | string }) {
  return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  )
;
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]);
  if (!code) {;
    return (;
      <div className="space-y-4">;
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>;
        <p className="text-gray-600 dark: text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>;
      </div>;
    );
  }
;
  return (;
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>;
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">;
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />;
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />;
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />;
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />;
      </div>;
      <div className="p-4 rounded border border-gray-200 dark:border-gray-800">;
        <div className="flex items-center justify-between">;
          <div>;
            <div className="text-sm text-gray-600 dark:text-gray-300">Estimated Payout</div>;
            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>;
          </div>;
          <div className="flex gap-2">;
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />;
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>;
            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</a>;
          </div>;
        </div>;
        {msg && <p className="mt-2 text-sm">{msg}</p>}
      </div>;
    </div>;
  );
};

export default AffiliateDashboard;
