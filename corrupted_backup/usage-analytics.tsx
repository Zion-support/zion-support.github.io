<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

=======
import React, { useCallback, useEffect, useMemo, useState } from 'react',;
import Head from 'next/head',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
import { GetServerSideProps } from 'next',;
import { requireAdminRole } from '../../utils/auth',;
import DatePicker from 'react-datepicker',;
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const result = await requireAdminRole(ctx),;
  // @ts-ignore;
  if ('redirect' in result) return result,;
  return result;
},;
type Datum = { label: string, value: number },;
function PieChart({ data, size = 160 }: { data: Datum[], size?: number }) {;
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0)),;
  let acc = 0,;
  const radius = size / 2,;
  const center = radius,;
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4'],;
  const slices = data.map((d, i) => {;
    const start = (acc / total) * 2 * Math.PI,;
    acc += d.value,;
    const end = (acc / total) * 2 * Math.PI,;
    const x1 = center + radius * Math.cos(start),;
    const y1 = center + radius * Math.sin(start),;
    const x2 = center + radius * Math.cos(end),;
    const y2 = center + radius * Math.sin(end),;
    const largeArc = end - start > Math.PI ? 1 : 0,;
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`,;
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />;
  }),;
  return (;
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>;
  );
}

function LineChart({ data, width = 360, height = 140 }: { data: { date: string, value: number }[], width?: number, height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value)),
  const points = data.map((d, i) => {
    const x = (i / Math.max(1, data.length - 1)) * width,
    const y = height - (d.value / max) * height,
    return `${x},${y}`
  }).join(' '),
  return (
    <svg width={width} height={height} className="border rounded bg-white/40 dark:bg-gray-900/40">
      <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} />
    </svg>
  )
}

function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((d, i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={{ width: `${100 - i * 12}%` }}>
          {d.label}: {d.value}
        </div>;
      ))}
    </div>;
  );
}
;
export default function UsageAnalytics() {;
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000)),;
  const [end, setEnd] = useState<Date>(new Date()),;
  const [userType, setUserType] = useState<string>('all'),;
  const [loading, setLoading] = useState(false),;
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]),;
  const [events, setEvents] = useState<Datum[]>([]),;
  const [line, setLine] = useState<{ date: string, value: number }[]>([]),;
  const [funnel, setFunnel] = useState<Datum[]>([]),;
  const refresh = useCallback(async () => {;
    setLoading(true),;
    try {;
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType }),;
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`),;
      const json = await res.json(),;
      setPagesMostUsed(json.pagesMostUsed || []),;
      setEvents(json.events || []),;
      setLine(json.line || []),;
      setFunnel(json.funnel || []);
    } finally {;
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedProjects: number;
  totalRevenue: number;
  monthlyRevenue: number;
  averageProjectValue: number;
  userGrowth: Array<{ month: string; users: number }>;
  revenueGrowth: Array<{ month: string; revenue: number }>;
  topFeatures: Array<{ name: string; usage: number }>;
  userSatisfaction: number;
}

const mockAnalyticsData: AnalyticsData = {
  totalUsers: 1250,
  activeUsers: 890,
  totalProjects: 340,
  completedProjects: 298,
  totalRevenue: 1250000,
  monthlyRevenue: 125000,
  averageProjectValue: 3676,
  userGrowth: [
    { month: 'Jan', users: 800 },
    { month: 'Feb', users: 850 },
    { month: 'Mar', users: 920 },
    { month: 'Apr', users: 980 },
    { month: 'May', users: 1050 },
    { month: 'Jun', users: 1120 },
    { month: 'Jul', users: 1200 },
    { month: 'Aug', users: 1250 }
  ],
  revenueGrowth: [
    { month: 'Jan', revenue: 95000 },
    { month: 'Feb', revenue: 105000 },
    { month: 'Mar', revenue: 115000 },
    { month: 'Apr', revenue: 120000 },
    { month: 'May', revenue: 125000 },
    { month: 'Jun', revenue: 130000 },
    { month: 'Jul', revenue: 135000 },
    { month: 'Aug', revenue: 125000 }
  ],
  topFeatures: [
    { name: 'AI Development', usage: 85 },
    { name: 'Web Development', usage: 78 },
    { name: 'Mobile Apps', usage: 65 },
    { name: 'Cloud Architecture', usage: 58 },
    { name: 'Data Analytics', usage: 42 }
  ],
  userSatisfaction: 4.7
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};

const AdminUsageAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'users' | 'revenue' | 'projects'>('users');

<<<<<<< HEAD
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Usage Analytics - Admin</title>
        <meta name="description" content="Usage analytics and performance metrics" />
      </Head>

=======
function PieChart({ data, size = 160 }: { data: Datum[]; size?: number }) {
  const total = Math.max(
    1,
    data.reduce((s, d) => s + d.value, 0)
  );
  let acc = 0;
  const radius = size / 2;
  const center = radius;
  const colors = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#8b5cf6',
    '#ef4444',
    '#06b6d4',
  ];

  const slices = data.map((d, i) => {
    const start = (acc / total) * 2 * Math.PI;
    acc += d.value;
    const end = (acc / total) * 2 * Math.PI;
    const x1 = center + radius * Math.cos(start);
    const y1 = center + radius * Math.sin(start);
    const x2 = center + radius * Math.cos(end);
    const y2 = center + radius * Math.sin(end);
    const largeArc = end - start > Math.PI ? 1 : 0;
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />;
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices}
    </svg>
  );
}

function LineChart({
  data,
  width = 360,
  height = 140,
}: {
  data: { date: string; value: number }[];
  width?: number;
  height?: number;
}) {
  const max = Math.max(1, ...data.map(d => d.value));
  const points = data
    .map((d, i) => {
      const x = (i / Math.max(1, data.length - 1)) * width;
      const y = height - (d.value / max) * height;
      return `${x},${y}`;
    })
    .join(' ');
  return (
    <svg
      width={width}
      height={height}
      className='border rounded bg-white/40 dark:bg-gray-900/40'
    >
      <polyline fill='none' stroke='#3b82f6' strokeWidth='2' points={points} />
    </svg>
  );
}

function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((d, i) => (
        <div
          key={d.label}
          className='bg-purple-500 text-white text-sm px-3 py-2 rounded'
          style={{ width: `${100 - i * 12}%` }}
        >
          {d.label}: {d.value}
        </div>
      ))}
    </div>
  );
}

export default function UsageAnalytics() {
  const [start, setStart] = useState<Date>(
    new Date(Date.now() - 29 * 24 * 3600 * 1000)
  );
  const [end, setEnd] = useState<Date>(new Date());
  const [userType, setUserType] = useState<string>('all');
  const [loading, setLoading] = useState(false);
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]);
  const [events, setEvents] = useState<Datum[]>([]);
  const [line, setLine] = useState<{ date: string; value: number }[]>([]);
  const [funnel, setFunnel] = useState<Datum[]>([]);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        start: start.toISOString(),
        end: end.toISOString(),
        userType,
      });
      const res = await fetch(
        `/api/admin/analytics/summary?${params.toString()}`
      );
      const json = await res.json();
      setPagesMostUsed(json.pagesMostUsed || []);
      setEvents(json.events || []);
      setLine(json.line || []);
      setFunnel(json.funnel || []);
    } finally {
  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalytics(mockAnalyticsData);
      setLoading(false);
    }
  }, [start, end, userType]),

  useEffect(() => { refresh() }, []),
  useEffect(() => {
    refresh();
  }, []);
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  if (loading) {
    return (
      <>
        <Head>
          <title>Usage Analytics - Admin</title>
        </Head>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-8">Loading analytics...</div>
        </main>
      </>
    );
  }

  if (!analytics) {
    return (
      <>
        <Head>
          <title>Usage Analytics - Admin</title>
        </Head>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-8 text-red-600">Failed to load analytics data</div>
        </main>
      </>
    );
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>Usage Analytics - Admin</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Usage Analytics</h1>
          <button onClick={refresh} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Refresh</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div>
            <div className="text-sm">Start</div>
            <DatePicker selected={start} onChange={(d) => d && setStart(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">End</div>
            <DatePicker selected={end} onChange={(d) => d && setEnd(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">User type</div>
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full border rounded px-2 py-1 bg-transparent">
              <option value="all">All</option>
              <option value="freelancer">Freelancer</option>
              <option value="b2b">B2B</option>
              <option value="hiring_manager">Hiring Manager</option>
              <option value="guest">Guest</option>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Usage Analytics</h1>
          <button
            onClick={refresh}
            disabled={loading}
            className='px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50'
          >
            Refresh
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-white/70 dark:bg-gray-900'>
          <div>
            <div className='text-sm'>Start</div>
            <DatePicker
              selected={start}
              onChange={d => d && setStart(d)}
              className='w-full border rounded px-2 py-1 bg-transparent'
            />
          </div>
          <div>
            <div className='text-sm'>End</div>
            <DatePicker
              selected={end}
              onChange={d => d && setEnd(d)}
              className='w-full border rounded px-2 py-1 bg-transparent'
            />
          </div>
          <div>
            <div className='text-sm'>User type</div>
            <select
              value={userType}
              onChange={e => setUserType(e.target.value)}
              className='w-full border rounded px-2 py-1 bg-transparent'
            >
              <option value='all'>All</option>
              <option value='freelancer'>Freelancer</option>
              <option value='b2b'>B2B</option>
              <option value='hiring_manager'>Hiring Manager</option>
              <option value='guest'>Guest</option>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Usage Analytics</h1>
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as any)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="users">Users</option>
              <option value="revenue">Revenue</option>
              <option value="projects">Projects</option>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </select>
          </div>
        </div>

<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
            <div className="font-medium mb-2">Most Used Features</div>
            <div className="flex items-center gap-4">
              <PieChart data={pagesMostUsed.slice(0, 6)} />
              <ul className="text-sm">
                {pagesMostUsed.slice(0, 6).map((d) => (
                  <li key={d.label} className="flex justify-between gap-4 min-w-[180px]"><span>{d.label}</span><span className="text-gray-500">{d.value}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2">
            <div className="font-medium mb-2">Events Over Time</div>
            <LineChart data={line} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {events.slice(0, 8).map((e) => (
                <div key={e.label} className="flex justify-between border rounded px-2 py-1">
                  <span>{e.label}</span>
                  <span className="text-gray-500">{e.value}</span>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='border rounded p-4 bg-white/70 dark:bg-gray-900'>
            <div className='font-medium mb-2'>Most Used Features</div>
            <div className='flex items-center gap-4'>
              <PieChart data={pagesMostUsed.slice(0, 6)} />
              <ul className='text-sm'>
                {pagesMostUsed.slice(0, 6).map(d => (
                  <li
                    key={d.label}
                    className='flex justify-between gap-4 min-w-[180px]'
                  >
                    <span>{d.label}</span>
                    <span className='text-gray-500'>{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2'>
            <div className='font-medium mb-2'>Events Over Time</div>
            <LineChart data={line} />
            <div className='mt-3 grid grid-cols-2 gap-2 text-sm'>
              {events.slice(0, 8).map(e => (
                <div
                  key={e.label}
                  className='flex justify-between border rounded px-2 py-1'
                >
                  <span>{e.label}</span>
                  <span className='text-gray-500'>{e.value}</span>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Users</h3>
            <p className="text-3xl font-bold">{formatNumber(analytics.totalUsers)}</p>
            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-blue-600">{formatNumber(analytics.activeUsers)}</p>
            <p className="text-sm text-gray-600 mt-1">{Math.round((analytics.activeUsers / analytics.totalUsers) * 100)}% of total</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(analytics.totalRevenue)}</p>
            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Avg Project Value</h3>
            <p className="text-3xl font-bold">{formatCurrency(analytics.averageProjectValue)}</p>
            <p className="text-sm text-gray-600 mt-1">Per project</p>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Projects</h3>
            <p className="text-2xl font-bold">{formatNumber(analytics.totalProjects)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Completed Projects</h3>
            <p className="text-2xl font-bold text-green-600">{formatNumber(analytics.completedProjects)}</p>
            <p className="text-sm text-gray-600 mt-1">{Math.round((analytics.completedProjects / analytics.totalProjects) * 100)}% completion rate</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">User Satisfaction</h3>
            <p className="text-2xl font-bold text-yellow-600">{analytics.userSatisfaction}/5.0</p>
            <p className="text-sm text-gray-600 mt-1">Average rating</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Growth Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              {selectedMetric === 'users' ? 'User Growth' : 
               selectedMetric === 'revenue' ? 'Revenue Growth' : 'Project Growth'}
            </h2>
            <div className="h-64 flex items-end justify-between space-x-2">
              {(selectedMetric === 'users' ? analytics.userGrowth : 
                selectedMetric === 'revenue' ? analytics.revenueGrowth : 
                analytics.userGrowth).map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="bg-blue-500 rounded-t w-8 mb-2"
                    style={{
                      height: `${(item.users || item.revenue) / Math.max(...(selectedMetric === 'users' ? analytics.userGrowth : 
                        selectedMetric === 'revenue' ? analytics.revenueGrowth : 
                        analytics.userGrowth).map(i => i.users || i.revenue)) * 200}px`
                    }}
                  ></div>
                  <span className="text-xs text-gray-500">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Features */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Top Features by Usage</h2>
            <div className="space-y-3">
              {analytics.topFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{feature.name}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${feature.usage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{feature.usage}%</span>
                  </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </div>
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
=======
        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={funnel} />
        <div className='border rounded p-4 bg-white/70 dark:bg-gray-900'>
          <div className='font-medium mb-2'>Funnel</div>
          <Funnel data={funnel} />
        </div>

        <div className='text-xs text-gray-500 dark:text-gray-400'>
          Optional providers supported (setup via env): Plausible, PostHog.
          Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  );
}
        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">System Information</h2>
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <strong>Data Source:</strong> Local event log for aggregation
            </p>
            <p className="mb-2">
              <strong>Optional Providers:</strong> Plausible, PostHog (setup via environment variables)
            </p>
            <p className="mb-2">
              <strong>Last Updated:</strong> {new Date().toLocaleString()}
            </p>
            <p>
              <strong>Note:</strong> Currently using local event log for aggregation. 
              Optional providers supported (setup via env): Plausible, PostHog.
            </p>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  )
}
export default AdminUsageAnalyticsPage;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
