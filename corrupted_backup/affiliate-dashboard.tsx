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

    }
  };

    );
  }

  return (

