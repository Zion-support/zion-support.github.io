import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

interface AffiliateStats {
  totalEarnings: number;
  monthlyEarnings: number;
  totalReferrals: number;
  conversionRate: number;
  pendingPayouts: number;
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
  };

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
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Monthly Earnings</h3>
            <p className="text-3xl font-bold text-blue-600">${stats?.monthlyEarnings.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Referrals</h3>
            <p className="text-3xl font-bold">{stats?.totalReferrals}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-purple-600">{stats?.conversionRate}%</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('referrals')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'referrals'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Referrals
              </button>
              <button
                onClick={() => setActiveTab('payouts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'payouts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Payouts
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">This Month</h4>
                      <p className="text-2xl font-bold text-green-600">${stats?.monthlyEarnings}</p>
                      <p className="text-sm text-gray-600">Earnings</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Pending Payouts</h4>
                      <p className="text-2xl font-bold text-yellow-600">${stats?.pendingPayouts}</p>
                      <p className="text-sm text-gray-600">Available for withdrawal</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'referrals' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Referrals</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Commission
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {referrals.map((referral) => (
                        <tr key={referral.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {referral.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(referral.status)}`}>
                              {referral.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${referral.commission}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(referral.date).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'payouts' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Payout Information</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800">
                    <strong>Pending Payout:</strong> ${stats?.pendingPayouts} will be processed on the next payout date.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Minimum payout threshold</span>
                    <span className="font-semibold">$100</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Payout frequency</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Next payout date</span>
                    <span className="font-semibold">February 1, 2025</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Your Referral Link</h3>
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              value="https://ziontechgroup.com/ref/your-code"
              readOnly
              className="flex-1 max-w-md p-2 border rounded-md bg-white"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Copy
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AffiliateDashboard;