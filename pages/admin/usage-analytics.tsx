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
    </svg>
  );
}

function Funnel(_{_data}: {_data: Datum[]}) {_return (_<div className="flex flex-col gap-2">
      {data.map((d, _i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={_{ width: `${100 - i * 12}%` }}>
          {_d.label}: {_d.value}
        </div>
      ))}
    </div>
  );
}

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

  return (_<EnhancedLayout>
      <Head>
        <title>Usage Analytics - Admin</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Usage Analytics</h1>
          <button onClick={_refresh} disabled={_loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Refresh</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div>
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
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
            <div className="font-medium mb-2">Most Used Features</div>
            <div className="flex items-center gap-4">
              <PieChart data={_pagesMostUsed.slice(0, _6)} />
              <ul className="text-sm">
                {_pagesMostUsed.slice(0, _6).map(_(d) => (
                  <li key={d.label} className="flex justify-between gap-4 min-w-[180px]"><span>{_d.label}</span><span className="text-gray-500">{_d.value}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2">
            <div className="font-medium mb-2">Events Over Time</div>
            <LineChart data={_line} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {_events.slice(0, _8).map(_(e) => (
                <div key={e.label} className="flex justify-between border rounded px-2 py-1">
                  <span>{_e.label}</span>
                  <span className="text-gray-500">{_e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={_funnel} />
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  );
}