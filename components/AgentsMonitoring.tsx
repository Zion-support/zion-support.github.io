import Link from 'next/link';
import { useState } from 'react';

const AGENTS_MONITORING = `
<div className="mb-16">
  {/* Dashboard CTA */}
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-6 text-white shadow-lg">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-lg font-bold mb-1">🤖 Live Agent Operations Center</h3>
        <p className="text-blue-100 text-sm">2440+ services, 6 active AI bots, continuous autonomous deployments — all visible in the live monitoring dashboard.</p>
      </div>
      <div className="flex gap-3">
        <Link href="/agents-monitoring" className="inline-flex items-center px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-lg text-sm hover:bg-blue-50 transition-colors shadow-sm">
          📊 Open Monitoring Dashboard
        </Link>
        <Link href="/dashboard" className="inline-flex items-center px-5 py-2.5 border border-white/80 text-white font-semibold rounded-lg text-sm hover:bg-white/20 transition-colors">
          🖥️ System Status
        </Link>
      </div>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Active Agents */}
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h3 className="text-base font-semibold mb-4 flex items-center">
        <span className="mr-2">⚡</span> Online Now
      </h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>windows_carol_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Kilo_openclaw_kleber_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>tablet_kleber_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Neo_kleber_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Windows_quel_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Rocket_Kleber_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>swell_myclaw_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>kilo_managed_ai_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Kiloclaw_Kleber_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
        <div className="flex justify-between"><span>Cloud_Windows_bot</span><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">active</span></div>
      </div>
    </div>

    {/* Recent Agent Actions */}
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h3 className="text-base font-semibold mb-4 flex items-center">
        <span className="mr-2">🗂️</span> Agent Activity Log
      </h3>
      <div className="space-y-3 text-sm">
        <div className="border-l-2 border-blue-400 pl-3"><p className="font-medium text-gray-800">Monitoring dashboard refreshed</p><p className="text-xs text-gray-500">Homepage slot promoted; client-facing ops summary added</p></div>
        <div className="border-l-2 border-violet-400 pl-3"><p className="font-medium text-gray-800">Service catalog expanded</p><p className="text-xs text-gray-500">New micro-SaaS, IT, AI, data and automation services added</p></div>
        <div className="border-l-2 border-emerald-400 pl-3"><p className="font-medium text-gray-800">Build validated</p><p className="text-xs text-gray-500">npm install + npm run build passed</p></div>
        <div className="border-l-2 border-amber-400 pl-3"><p className="font-medium text-gray-800">Navigation + layout updated</p><p className="text-xs text-gray-500">Improved discovery for monitoring and service paths</p></div>
        <div className="border-l-2 border-rose-400 pl-3"><p className="font-medium text-gray-800">Client metrics surfaced</p><p className="text-xs text-gray-500">Uptime, deploy counts, active agent counts exposed</p></div>
      </div>
      <p className="text-xs text-gray-400 mt-3">Agents can inspect full history at any time via the monitoring dashboard.</p>
    </div>

    {/* Operations */}
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h3 className="text-base font-semibold mb-4 flex items-center">
        <span className="mr-2">📊</span> Operations
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-gray-600">Services</span><span className="font-semibold text-gray-900">767</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Active Bots</span><span className="font-semibold text-gray-900">10</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Uptime SLA</span><span className="font-semibold text-emerald-700">99.9%</span></div>
        <div className="flex justify-between"><span className="text-gray-600">SLA Contact</span><a href="mailto:kleber@ziontechgroup.com" className="font-semibold text-blue-700 hover:underline">kleber@ziontechgroup.com</a></div>
        <div className="flex justify-between"><span className="text-gray-600">Phone</span><a href="tel:+13024640950" className="font-semibold text-blue-700 hover:underline">+1 302 464 0950</a></div>
        <div className="flex justify-between"><span className="text-gray-600">Latest Deploy</span><span className="font-semibold text-gray-900">3b063e1</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Status</span><span className="font-semibold text-emerald-700">Operational</span></div>
      </div>
    </div>
  </div>
</div>
`;

export default function AgentsMonitoring() {
  return (
    <div dangerouslySetInnerHTML={{ __html: AGENTS_MONITORING }} />
  );
}