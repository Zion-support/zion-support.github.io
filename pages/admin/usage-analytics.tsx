

<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useCallback, useEffect, useMemo, useState } from 'react',;
import Head from 'next/head',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
import { GetServerSideProps } from 'next',;
import { requireAdminRole } from '../../utils/auth',;
import DatePicker from 'react-datepicker',;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx),
  // @ts-ignore
  if ('redirect' in result) return result,
  return result
},

type Datum = { label: string, value: number },

function PieChart({ data, size = 160 }: { data: Datum[], size?: number }) {
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0)),
  let acc = 0,
  const radius = size / 2,
  const center = radius,
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4'],

  const slices = data.map((d, i) => {
    const start = (acc / total) * 2 * Math.PI,
    acc += d.value,
    const end = (acc / total) * 2 * Math.PI,
    const x1 = center + radius * Math.cos(start),
    const y1 = center + radius * Math.sin(start),
    const x2 = center + radius * Math.cos(end),
    const y2 = center + radius * Math.sin(end),
    const largeArc = end - start > Math.PI ? 1 : 0,
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`,
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  }),

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
import DatePicker from 'react-datepicker';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx)
  // @ts-ignore
  if ('redirect' in result) return result
  return result
}
type Datum = { label: string, value: number }
function PieChart({ data, size = 160 }: { data: Datum[], size?: number }) {
<<<<<<< HEAD
=======

  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0))
  let acc = 0
  const radius = size / 2
  const center = radius
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4']
  const slices = data.map((d, i) => {
    const start = (acc / total) * 2 * Math.PI
    acc += d.value
    const end = (acc / total) * 2 * Math.PI
    const x1 = center + radius * Math.cos(start)
    const y1 = center + radius * Math.sin(start)
    const x2 = center + radius * Math.cos(end)
    const y2 = center + radius * Math.sin(end)
    const largeArc = end - start > Math.PI ? 1 : 0
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
};
type Datum = { label: string, value: number };
function PieChart({ data, size = 160 }: { data: Datum[], size?: number }) {;
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0)),;

  let acc = 0;
  const radius = size / 2;
  const center = radius;
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4'];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return <path key={d.label} d={path} fill={colors[i % colors.length]} />;
  });
  return (;
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

function LineChart({ data, width = 360, height = 140 }: { data: { date: string, value: number }[], width?: number, height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  const points = data.map((d, i) => {
    const x = (i / Math.max(1, data.length - 1)) * width;
    const y = height - (d.value / max) * height;
    return `${x},${y}`
  }).join(' ');
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {d.label}: {d.value}
        </div>
      ))}
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  })
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  })
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useCallback, useEffect, useMemo, useState } from 'react',
import Head from 'next / head',
import EnhancedLayout from '../../components / layout / EnhancedLayout',
import { GetServerSideProps } from 'next',
import { requireAdminRole } from '../../utils / auth',
import DatePicker from 'react - datepicker',
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole (ctx),
  // @ts - ignore;
  // Check condition
if (return result, ) {
  $2
}
  return result;
},
type Datum = { label: string, value: number },
/**
 * PieChart - Function description
 */
function PieChart() {
  const total = Math.max (1, data.reduce ((s, d) => s + d.value, 0)),
  let acc = 0,
  const radius = size / 2,
  const center = radius,
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4'],
  const slices = data.map ((d, i) => {
    const start = (acc / total) * 2 * Math.PI,
    acc += d.value,
    const end = (acc / total) * 2 * Math.PI,
    const x1 = center + radius * Math.cos (start),
    const y1 = center + radius * Math.sin (start),
    const x2 = center + radius * Math.cos (end),
    const y2 = center + radius * Math.sin (end),
    const large_arc = end - start > Math.PI ? 1 : 0,
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${large_arc} 1 ${x2} ${y2} Z`,
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />;
  }),
<<<<<<< HEAD
  return (
    <svg width={size} height={size} view_box={`0 0 ${size} ${size}`}>{slices}</svg>);
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <svg width={size} height={size} view_box={`0 0 ${size} ${size}`}>{slices}</svg>);
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * LineChart - Function description
 */
function LineChart() {
  const max = Math.max (1, ...data.map ((d) => d.value)),
  const points = data.map ((d, i) => {
    const coordinate_x = (i / Math.max (1, data.length - 1)) * width,
    const coordinate_y = height - (d.value / max) * height,
    return `${x}, ${y}`;
  }).join (' '),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <svg width={width} height={height} className="border rounded bg - white / 40 dark:bg - gray - 900 / 40">;
      <polyline fill="none" stroke="#3b82f6" stroke_width="2" points={points} />;
    </svg>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * Funnel - Function description
 */
function Funnel() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="flex flex-col gap-2">
      {data.map((d, i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={{ width: `${100 - i * 12}%` }}>


<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {d.label}: {d.value  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="flex flex - col gap - 2">;
      {data.map ((d, i) => (
        <div key={d.label} className="bg - purple - 500 text - white text - sm px - 3 py - 2 rounded" style={{ width: `${100 - i * 12}%` }}>;
          {d.label}: {d.value}
        </div>))}
    </div>);
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000));
  const [end, setEnd] = useState<Date>(new Date());
  const [userType, setUserType] = useState<string>('all');
  const [loading, setLoading] = useState(false);
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]);
  const [events, setEvents] = useState<Datum[]>([]);
<<<<<<< HEAD
<<<<<<< HEAD
  const [line, setLine] = useState<{ date: string, value: number }[]>([]),
  const [funnel, setFunnel] = useState<Datum[]>([]);
  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`);
      const json = await res.json();
      setPagesMostUsed(json.pagesMostUsed || []);
      setEvents(json.events || []);
      setLine(json.line || []);
      setFunnel(json.funnel || [])
export default /**
 * UsageAnalytics - Function description
 */
function UsageAnalytics() {
  const [start, set_start] = useState < Date>(new Date (Date.now () - 29 * 24 * 3600 * 1000)),
  const [end, set_end] = useState < Date>(new Date ()),
  const [user_type, setUserType] = useState < string>('all'),
  const [loading, set_loading] = useState (false),
  const [pagesMostUsed, setPagesMostUsed] = useState < Datum[]>([]),
  const [events, set_events] = useState < Datum[]>([]),
  const [line, set_line] = useState<{ date: string, value: number }[]>([]),
  const [funnel, set_funnel] = useState < Datum[]>([]),
  const refresh = useCallback (async () => {
    set_loading (true),
    try {
      const params = new URLSearchParams ({ start: start.toISOString (), end: end.toISOString (), user_type }),
      const res = await fetch (`/api / admin / analytics / summary?${params.to_string ()}`),
      const json = await res.json (),
      setPagesMostUsed (json.pagesMostUsed || []),
      set_events (json.events || []),
      set_line (json.line || []),
      set_funnel (json.funnel || []);
    } finally {
      set_loading (false);
    }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
            <div className="font-medium mb-2">Most Used Features</div>
            <div className="flex items-center gap-4">
              <PieChart data={pagesMostUsed.slice(0, 6)} />
              <ul className="text-sm">
                {pagesMostUsed.slice(0, 6).map((d) => (
                  <li key={d.label} className="flex justify-between gap-4 min-w-[180px]"><span>{d.label}</span><span className="text-gray-500">{d.value}</span></li>
<<<<<<< HEAD
    </svg>
  )
}

function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className=&quot;flex flex-col gap-2&quot;>
      {data.map((d, i) => (
        <div key={d.label} className=&quot;bg-purple-500 text-white text-sm px-3 py-2 rounded&quot; style={{ width: `${100 - i * 12}%` }}>
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0))
  let acc = 0
  const radius = size / 2
  const center = radius
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4']
  const slices = data.map((d, i) => {
    const start = (acc / total) * 2 * Math.PI
    acc += d.value
    const end = (acc / total) * 2 * Math.PI
    const x1 = center + radius * Math.cos(start)
    const y1 = center + radius * Math.sin(start)
    const x2 = center + radius * Math.cos(end)
    const y2 = center + radius * Math.sin(end)
    const largeArc = end - start > Math.PI ? 1 : 0
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>
  )
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
};
type Datum = { label: string, value: number };
function PieChart({ data, size = 160 }: { data: Datum[], size?: number }) {;
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0)),;
  let acc = 0;
  const radius = size / 2;
  const center = radius;
  const colors = ['#3b82f6#10b981#f59e0b#8b5cf6#ef4444#06b6d4'];
  const slices = data.map((d, i) => {;
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
  return (;
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={{ width: `${100 - i * 12}%` }}>
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

          {d.label}: {d.value  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
              </ul>
            </div>
          </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </ul>
            </div>
          </div>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2">
            <div className="font-medium mb-2">Events Over Time</div>
            <LineChart data={line} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {events.slice(0, 8).map((e) => (
                <div key={e.label} className="flex justify-between border rounded px-2 py-1">
                  <span>{e.label}</span>
                  <span className="text-gray-500">{e.value}</span>
                </div>
<<<<<<< HEAD
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              ))}
            </div>
          </div>
        </div>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={funnel} />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD
}

  );
};
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======

=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  }, [start, end, user_type]),
  useEffect (() => { refresh () }, []),
  return (
    <EnhancedLayout>;
      <Head>;
        <title > Usage Analytics - Admin</title>;
      </Head>;
      <div className="space - y-6">;
        <div className="flex items - center justify - between">;
          <h1 className="text - 2xl font - semibold">Usage Analytics</h1>;
          <button on_click={refresh} disabled={loading} className="px - 3 py - 2 rounded bg - blue - 600 text - white disabled:opacity - 50">Refresh</button>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4 border rounded p - 4 bg - white / 70 dark:bg - gray - 900">;
          <div>;
            <div className="text - sm">Start</div>;
            <DatePicker selected={start} on_change={(d) => d && set_start (d)} className="w - full border rounded px - 2 py - 1 bg - transparent" />;
          </div>;
          <div>;
            <div className="text - sm">End</div>;
            <DatePicker selected={end} on_change={(d) => d && set_end (d)} className="w - full border rounded px - 2 py - 1 bg - transparent" />;
          </div>;
          <div>;
            <div className="text - sm">User type</div>;
            <select value={user_type} on_change={(e) => setUserType (e.target.value)} className="w - full border rounded px - 2 py - 1 bg - transparent">;
              <option value="all">All</option>;
              <option value="freelancer">Freelancer</option>;
              <option value="b2b">B2B</option>;
              <option value="hiring_manager">Hiring Manager</option>;
              <option value="guest">Guest</option>;
            </select>;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
          <div className="border rounded p - 4 bg - white / 70 dark:bg - gray - 900">;
            <div className="font - medium mb - 2">Most Used Features</div>;
            <div className="flex items - center gap - 4">;
              <PieChart data={pagesMostUsed.slice (0, 6)} />;
              <ul className="text - sm">;
                {pagesMostUsed.slice (0, 6).map ((d) => (
                  <li key={d.label} className="flex justify - between gap - 4 min - w-[180px]"><span>{d.label}</span><span className="text - gray - 500">{d.value}</span></li>))}
              </ul>;
            </div>;
          </div>;
          <div className="border rounded p - 4 bg - white / 70 dark:bg - gray - 900 lg:col - span - 2">;
            <div className="font - medium mb - 2">Events Over Time</div>;
            <LineChart data={line} />;
            <div className="mt - 3 grid grid - cols - 2 gap - 2 text - sm">;
              {events.slice (0, 8).map ((e) => (
                <div key={e.label} className="flex justify - between border rounded px - 2 py - 1">;
                  <span>{e.label}</span>;
                  <span className="text - gray - 500">{e.value}</span>;
                </div>))}
            </div>;
          </div>;
        </div>;
        <div className="border rounded p - 4 bg - white / 70 dark:bg - gray - 900">;
          <div className="font - medium mb - 2">Funnel</div>;
          <Funnel data={funnel} />;
        </div>;
        <div className="text - xs text - gray - 500 dark:text - gray - 400">;
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.;
        </div>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
