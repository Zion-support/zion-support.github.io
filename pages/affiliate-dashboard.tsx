import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DollarSign, TrendingUp, Users, Eye, Download, RefreshCw } from 'lucide-react';

interface AffiliateStats {
  totalEarnings: number;
  monthlyEarnings: number;
  totalReferrals: number;
  activeReferrals: number;
  conversionRate: number;
  pendingPayout: number;
}

export default function AffiliateDashboard() {
  const router = useRouter();
  const { code } = router.query;
  
  const [stats, setStats] = useState<AffiliateStats>({
    totalEarnings: 0,
    monthlyEarnings: 0,
    totalReferrals: 0,
    activeReferrals: 0,
    conversionRate: 0,
    pendingPayout: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!code) return;
    loadStats();
  }, [code]);

  const loadStats = async () => {
    try {
      const response = await fetch(`/api/affiliate/stats?code=${code}`);
      const data = await response.json();
      setStats(data.stats || stats);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const requestPayout = async () => {
    setMessage('');
    try {
      const res = await fetch('/api/affiliate/request-payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Payout request submitted successfully');
        loadStats();
      } else {
        setMessage(data.error || 'Failed to request payout');
      }
    } catch (error) {
      setMessage('Error requesting payout');
    }
  };

  const downloadReport = async () => {
    try {
      const response = await fetch(`/api/affiliate/report?code=${code}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `affiliate-report-${code}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Affiliate Dashboard - Zion Tech Group</title>
      </Head>
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Affiliate Dashboard</h1>
              <p className="mt-2 text-gray-600">Track your earnings and referrals</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={loadStats}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={downloadReport}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Earnings</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Monthly Earnings</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stats.monthlyEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Referrals</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.totalReferrals}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Eye className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Referrals</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.activeReferrals}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.conversionRate.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending Payout</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stats.pendingPayout.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payout Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Payout Management</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">
                Pending payout: <span className="font-semibold">${stats.pendingPayout.toLocaleString()}</span>
              </p>
              <p className="text-sm text-gray-500">
                Minimum payout threshold: $100
              </p>
            </div>
            <button
              onClick={requestPayout}
              disabled={stats.pendingPayout < 100}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Request Payout
            </button>
          </div>
          {message && (
            <div className={`mt-4 p-3 rounded ${
              message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Referral Link */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Referral Link</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={`${window.location.origin}?ref=${code}`}
              readOnly
              className="flex-1 p-2 border rounded-lg bg-gray-50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}?ref=${code}`);
                setMessage('Referral link copied to clipboard');
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}