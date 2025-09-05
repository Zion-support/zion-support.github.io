<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react',
import Head from 'next/head',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import { GetServerSideProps } from 'next',
import { requireAdminRole } from '../../utils/auth',
import DatePicker from 'react-datepicker',
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
}

function LineChart({ data, width = 360, height = 140 }: { data: { date: string, value: number }[], width?: number, height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value)),
  const points = data.map((d, i) => {
    const x = (i / Math.max(1, data.length - 1)) * width,
    const y = height - (d.value / max) * height,
    return `${x},${y}`
  }).join(' '),
  return (
    <svg width={width} height={height} className=&quot;border rounded bg-white/40 dark:bg-gray-900/40&quot;>
      <polyline fill=&quot;none&quot; stroke=&quot;#3b82f6&quot; strokeWidth=&quot;2&quot; points={points} />
=======
import React, {_useCallback, _useEffect, _useMemo, _useState} from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import DatePicker from 'react-datepicker';

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const _result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;};

type Datum = {_label: string; value: number};

function PieChart(_{_data, _size = 160}: {_data: Datum[]; size?: number}) {_const _total = Math.max(_1, _data.reduce((s, _d) => s + d.value, _0));
  let _acc = 0;
  const _radius = size / 2;
  const _center = radius;
  const _colors = ['#3b82f6', _'#10b981', _'#f59e0b', _'#8b5cf6', _'#ef4444', _'#06b6d4'];

  const _slices = data.map(_(d, _i) => {
    const _start = (acc / total) * 2 * Math.PI;
    acc += d.value;
    const _end = (acc / total) * 2 * Math.PI;
    const _x1 = center + radius * Math.cos(start);
    const _y1 = center + radius * Math.sin(start);
    const _x2 = center + radius * Math.cos(end);
    const _y2 = center + radius * Math.sin(end);
    const _largeArc = end - start > Math.PI ? 1 : 0;
    const _path = `M ${center} ${_center} L ${_x1} ${_y1} A ${_radius} ${_radius} 0 ${_largeArc} 1 ${_x2} ${_y2} Z`;
    return <path key={_d.label} d={_path} fill={_colors[i % colors.length]} />;
  });

  return (
    <svg width={_size} height={_size} viewBox={_`0 0 ${size} ${_size}`}>{_slices}</svg>
  );
}

function LineChart(_{_data, _width = 360, _height = 140}: {_data: { date: string; value: number}[]; width?: number; height?: number }) {_const _max = Math.max(_1, _...data.map((d) => d.value));
  const _points = data.map(_(d, _i) => {
    const _x = (i / Math.max(1, _data.length - 1)) * width;
    const _y = height - (d.value / max) * height;
    return `${x},${_y}`;
  }).join(' ');
  return (
    <svg width={_width} height={_height} className="border rounded bg-white/40 dark:bg-gray-900/40">
      <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={_points} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </svg>
  )
}

<<<<<<< HEAD
function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className=&quot;flex flex-col gap-2&quot;>
      {data.map((d, i) => (
        <div key={d.label} className=&quot;bg-purple-500 text-white text-sm px-3 py-2 rounded&quot; style={{ width: `${100 - i * 12}%` }}>
          {d.label}: {d.value}
=======
function Funnel(_{_data}: {_data: Datum[]}) {_return (_<div className="flex flex-col gap-2">
      {data.map((d, _i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={_{ width: `${100 - i * 12}%` }}>
          {_d.label}: {_d.value}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      ))}
    </div>
  )
}

<<<<<<< HEAD
export default function UsageAnalytics() {
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000)),
  const [end, setEnd] = useState<Date>(new Date()),
  const [userType, setUserType] = useState<string>('all'),
  const [loading, setLoading] = useState(false),
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]),
  const [events, setEvents] = useState<Datum[]>([]),
  const [line, setLine] = useState<{ date: string, value: number }[]>([]),
  const [funnel, setFunnel] = useState<Datum[]>([]),

  const refresh = useCallback(async () => {
    setLoading(true),
    try {
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType }),
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`),
      const json = await res.json(),
      setPagesMostUsed(json.pagesMostUsed || []),
      setEvents(json.events || []),
      setLine(json.line || []),
      setFunnel(json.funnel || [])
    } finally {
      setLoading(false)
    }
  }, [start, end, userType]),

  useEffect(() => { refresh() }, []),
=======
export default function UsageAnalytics() {_const [start, _setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000));
  const [end, _setEnd] = useState<Date>(new Date());
  const [userType, _setUserType] = useState<string>('all');
  const [loading, _setLoading] = useState(false);
  const [pagesMostUsed, _setPagesMostUsed] = useState<Datum[]>([]);
  const [events, _setEvents] = useState<Datum[]>([]);
  const [line, _setLine] = useState<{ date: string; value: number}[]>([]);
  const [funnel, setFunnel] = useState<Datum[]>([]);

  const _refresh = useCallback(_async () => {_setLoading(true);
    try {
      const _params = new URLSearchParams({ start: start.toISOString(), _end: end.toISOString(), _userType});
      const _res = await fetch(`/api/admin/analytics/summary?${_params.toString()}`);
      const _json = await res.json();
      setPagesMostUsed(json.pagesMostUsed || []);
      setEvents(json.events || []);
      setLine(json.line || []);
      setFunnel(json.funnel || []);
    } finally {_setLoading(false);}
  }, [start, end, userType]);

  useEffect__(() => {_refresh();}, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<EnhancedLayout>
      <Head>
        <title>Usage Analytics - Admin</title>
      </Head>
<<<<<<< HEAD
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Usage Analytics</h1>
          <button onClick={refresh} disabled={loading} className=&quot;px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50&quot;>Refresh</button>
=======
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Usage Analytics</h1>
          <button onClick={_refresh} disabled={_loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Refresh</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-white/70 dark:bg-gray-900&quot;>
          <div>
<<<<<<< HEAD
            <div className=&quot;text-sm&quot;>Start</div>
            <DatePicker selected={start} onChange={(d) => d && setStart(d)} className=&quot;w-full border rounded px-2 py-1 bg-transparent&quot; />
          </div>
          <div>
            <div className=&quot;text-sm&quot;>End</div>
            <DatePicker selected={end} onChange={(d) => d && setEnd(d)} className=&quot;w-full border rounded px-2 py-1 bg-transparent&quot; />
          </div>
          <div>
            <div className=&quot;text-sm&quot;>User type</div>
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className=&quot;w-full border rounded px-2 py-1 bg-transparent&quot;>
              <option value=&quot;all&quot;>All</option>
              <option value=&quot;freelancer&quot;>Freelancer</option>
              <option value=&quot;b2b&quot;>B2B</option>
              <option value=&quot;hiring_manager&quot;>Hiring Manager</option>
              <option value=&quot;guest&quot;>Guest</option>
=======
            <div className="text-sm">Start</div>
            <DatePicker selected={_start} onChange={_(d) => d && setStart(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">End</div>
            <DatePicker selected={_end} onChange={_(_d) => d && setEnd(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">User type</div>
            <select value={_userType} onChange={_(_e) => setUserType(e.target.value)} className="w-full border rounded px-2 py-1 bg-transparent">
              <option value="all">All</option>
              <option value="freelancer">Freelancer</option>
              <option value="b2b">B2B</option>
              <option value="hiring_manager">Hiring Manager</option>
              <option value="guest">Guest</option>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </select>
          </div>
        </div>

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
          <div className=&quot;border rounded p-4 bg-white/70 dark:bg-gray-900&quot;>
            <div className=&quot;font-medium mb-2&quot;>Most Used Features</div>
            <div className=&quot;flex items-center gap-4&quot;>
              <PieChart data={pagesMostUsed.slice(0, 6)} />
              <ul className=&quot;text-sm&quot;>
                {pagesMostUsed.slice(0, 6).map((d) => (
                  <li key={d.label} className=&quot;flex justify-between gap-4 min-w-[180px]&quot;><span>{d.label}</span><span className=&quot;text-gray-500&quot;>{d.value}</span></li>
=======
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
            <div className="font-medium mb-2">Most Used Features</div>
            <div className="flex items-center gap-4">
              <PieChart data={_pagesMostUsed.slice(0, _6)} />
              <ul className="text-sm">
                {_pagesMostUsed.slice(0, _6).map(_(d) => (
                  <li key={d.label} className="flex justify-between gap-4 min-w-[180px]"><span>{_d.label}</span><span className="text-gray-500">{_d.value}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </ul>
            </div>
          </div>

<<<<<<< HEAD
          <div className=&quot;border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2&quot;>
            <div className=&quot;font-medium mb-2&quot;>Events Over Time</div>
            <LineChart data={line} />
            <div className=&quot;mt-3 grid grid-cols-2 gap-2 text-sm&quot;>
              {events.slice(0, 8).map((e) => (
                <div key={e.label} className=&quot;flex justify-between border rounded px-2 py-1&quot;>
                  <span>{e.label}</span>
                  <span className=&quot;text-gray-500&quot;>{e.value}</span>
=======
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2">
            <div className="font-medium mb-2">Events Over Time</div>
            <LineChart data={_line} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {_events.slice(0, _8).map(_(e) => (
                <div key={e.label} className="flex justify-between border rounded px-2 py-1">
                  <span>{_e.label}</span>
                  <span className="text-gray-500">{_e.value}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className=&quot;border rounded p-4 bg-white/70 dark:bg-gray-900&quot;>
          <div className=&quot;font-medium mb-2&quot;>Funnel</div>
          <Funnel data={funnel} />
=======
        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={_funnel} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  )
}