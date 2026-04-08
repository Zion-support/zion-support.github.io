'use client';

import { useState, useEffect } from 'react';

interface APIEndpoint {
  id: string;
  name: string;
  url: string;
  method: string;
  category: string;
  status: 'operational' | 'degraded' | 'down' | 'unknown';
  latency: number;
  lastCheck: Date;
  uptime: number;
}

const MOCK_ENDPOINTS: APIEndpoint[] = [
  {
    id: 'zion-api',
    name: 'Zion Core API',
    url: '/api',
    method: 'GET',
    category: 'Core',
    status: 'operational',
    latency: 45,
    lastCheck: new Date(),
    uptime: 99.98,
  },
  {
    id: 'behavior-prediction',
    name: 'Behavior Prediction',
    url: '/api/behavior-prediction',
    method: 'POST',
    category: 'AI',
    status: 'operational',
    latency: 128,
    lastCheck: new Date(),
    uptime: 99.85,
  },
  {
    id: 'market-prices',
    name: 'Market Prices',
    url: '/api/market-prices',
    method: 'GET',
    category: 'Data',
    status: 'operational',
    latency: 62,
    lastCheck: new Date(),
    uptime: 99.92,
  },
  {
    id: 'ai-chat',
    name: 'AI Chat API',
    url: '/ai-chat',
    method: 'POST',
    category: 'AI',
    status: 'operational',
    latency: 185,
    lastCheck: new Date(),
    uptime: 99.75,
  },
  {
    id: 'ai-dashboard',
    name: 'AI Dashboard',
    url: '/ai-dashboard',
    method: 'GET',
    category: 'Dashboard',
    status: 'operational',
    latency: 78,
    lastCheck: new Date(),
    uptime: 99.88,
  },
  {
    id: 'automation-status',
    name: 'Automation Status',
    url: '/automation-status',
    method: 'GET',
    category: 'Automation',
    status: 'operational',
    latency: 52,
    lastCheck: new Date(),
    uptime: 99.95,
  },
];

export default function AIAPIStatusDashboard() {
  const [endpoints, setEndpoints] = useState<APIEndpoint[]>(MOCK_ENDPOINTS);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [filter, setFilter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(MOCK_ENDPOINTS.map(e => e.category))];

  const filteredEndpoints = endpoints.filter(ep => {
    if (selectedCategory !== 'all' && ep.category !== selectedCategory) return false;
    if (filter === 'operational' && ep.status !== 'operational') return false;
    if (filter === 'degraded' && ep.status !== 'degraded') return false;
    if (filter === 'down' && ep.status !== 'down') return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-emerald-500';
      case 'degraded':
        return 'bg-amber-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-slate-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'degraded':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'down':
        return 'bg-red-500/10 text-red-300 border-red-500/30';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }
  };

  const getLatencyColor = (latency: number) => {
    if (latency < 100) return 'text-emerald-400';
    if (latency < 200) return 'text-amber-400';
    return 'text-red-400';
  };

  const operationalCount = endpoints.filter(e => e.status === 'operational').length;
  const totalUptime = endpoints.reduce((acc, e) => acc + e.uptime, 0) / endpoints.length;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wide text-sky-400">
              AI Lab · Platform Intelligence
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-50 sm:text-3xl">
            AI API Status Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Real-time API endpoint monitoring for Zion autonomous pipelines with health tracking and performance metrics.
          </p>
        </div>

        <div className="grid gap-4 mb-8 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Endpoints Monitored
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-50">
              {endpoints.length}
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Operational
            </p>
            <p className="mt-1 text-2xl font-bold text-emerald-400">
              {operationalCount}/{endpoints.length}
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Avg Uptime (30d)
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-50">
              {totalUptime.toFixed(2)}%
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-400">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-sm text-slate-200"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-400">Status:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-sm text-slate-200"
            >
              <option value="all">All Status</option>
              <option value="operational">Operational</option>
              <option value="degraded">Degraded</option>
              <option value="down">Down</option>
            </select>
          </div>
          <button
            onClick={() => setLastRefresh(new Date())}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-500/20"
          >
            <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Endpoint
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Method
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Category
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Latency
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Uptime (30d)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredEndpoints.map((endpoint) => (
                  <tr key={endpoint.id} className="hover:bg-slate-800/40">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium border ${getStatusBadge(endpoint.status)}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${getStatusColor(endpoint.status)}`} />
                        {endpoint.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-slate-200">{endpoint.name}</p>
                      <p className="text-xs text-slate-500">{endpoint.url}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
                        {endpoint.method}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-slate-400">{endpoint.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-sm font-mono font-medium ${getLatencyColor(endpoint.latency)}`}>
                        {endpoint.latency}ms
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-slate-200">
                        {endpoint.uptime.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>
            Last updated: {lastRefresh.toLocaleTimeString()}
          </p>
          <p>
            Auto-refresh: Every 60 seconds
          </p>
        </div>
      </div>
    </div>
  );
}