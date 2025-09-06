


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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
import DatePicker from 'react-datepicker';
          {d.label}: {d.value}
        </div>
      ))}
    </div>
  )
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />
  })
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
  return (
    <svg width={size} height={size} view_box={`0 0 ${size} ${size}`}>{slices}</svg>);
}
  return (
    <svg width={width} height={height} className="border rounded bg - white / 40 dark:bg - gray - 900 / 40">;
      <polyline fill="none" stroke="#3b82f6" stroke_width="2" points={points} />;
    </svg>);
}
          {d.label}: {d.value  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType });
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

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
