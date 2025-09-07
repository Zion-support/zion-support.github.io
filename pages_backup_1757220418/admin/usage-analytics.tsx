import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface AnalyticsData {
  totalUsers: number
  activeUsers: number
  totalProjects: number
  completedProjects: number
  totalRevenue: number
  monthlyRevenue: number
  averageProjectValue: number
  userGrowth: Array<{ month: string; users: number }>
  revenueGrowth: Array<{ month: string; revenue: number }>
  topFeatures: Array<{ name: string; usage: number }>
  userSatisfaction: number
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
}
const AdminUsageAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [selectedMetric, setSelectedMetric] = useState<'users' | 'revenue' | 'projects'>('users')
  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalytics(mockAnalyticsData)
      setLoading(false)
    }, 1000)
  }, [])
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }
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
    )
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
    )
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>
  )
}
function LineChart({ data, width = 360, height = 140 }: { data: { date: string, value: number }[], width?: number, height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value))
  const points = data.map((d, i) => {
    const x = (i / Math.max(1, data.length - 1)) * width
    const y = height - (d.value / max) * height
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={width} height={height} className="border rounded bg-white/40 dark:bg-gray-900/40">
      <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} />
    </svg>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((d, i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={ width: `${100 - i * 12}%` }>
          {d.label}: {d.value}
        </div>
      ))}
    </div>
  )
}
export default function UsageAnalytics() {
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000))
  const [end, setEnd] = useState<Date>(new Date())
  const [userType, setUserType] = useState<string>('all')
  const [loading, setLoading] = useState(false)
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([])
  const [events, setEvents] = useState<Datum[]>([])
  const [line, setLine] = useState<{ date: string, value: number }[]>([])
  const [funnel, setFunnel] = useState<Datum[]>([])
  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType })
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`)
      const json = await res.json()
      setPagesMostUsed(json.pagesMostUsed |[])
      setEvents(json.events |[])
      setLine(json.line |[])
      setFunnel(json.funnel |[])
    } finally {
      setLoading(false)
    }
  }, [start, end, userType])
  useEffect(() => { refresh() }, [])

}
        </div>;
      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function UsageAnalytics(req, res) {
  try {
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000));
  const [end, setEnd] = useState<Date>(new Date());
  const [userType, setUserType] = useState<string>('all');
  const [loading, setLoading] = useState(false);
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]);
  const [events, setEvents] = useState<Datum[]>([]);
  const [line, setLine] = useState<{ date: string, value: number }[]>([]),;
  const [funnel, setFunnel] = useState<Datum[]>([]);
  const refresh = useCallback(async () => {;
    setLoading(true);
    try {
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType }),;
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`);
      const json = await res.json();
      setPagesMostUsed(json.pagesMostUsed || []);
      setEvents(json.events || []);
      setLine(json.line || []);
      setFunnel(json.funnel || []);
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [start, end, userType]),
  useEffect(() => { refresh() }, []),
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
            </select>
          </div>
        </div>
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
                </div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </div>
        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={funnel} />
        </div>
      </main>
    </>
  )
}
export default AdminUsageAnalyticsPage