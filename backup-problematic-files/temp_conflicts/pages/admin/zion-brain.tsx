import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedNavigation from '@/components/layout/EnhancedNavigation';
;
type LogsSummary = { entries: any[];, byModule: Record<string number>;, byType: Record<string number>;, total: number ;},;
</string>
  const [token, setToken] = useState<string>(),;
  const [routerResult, setRouterResult] = useState<any>(null),;
</any>
  const [triggers, setTriggers] = useState<any[]>([]),;
  const [logs, setLogs] = useState<LogsSummary | null>(null),;

  const [stuck, setStuck] = useState<any[]>([]),;


    <>;
      <Head>;

        <title>Zion Brain Admin</title>;
        <meta name="robots" content="noindex,nofollow" />;"
</meta>
      <EnhancedNavigation />;
"
      <main className="container mx-auto px-4 py-6">;"
</main>"
        <div className="flex items-center gap-2 mb-6">;"
</div>"
          <span className="text-xs px-2 py-1 bg-gray-100 dark: bg-gray-800 rounded">Always-on;, self-monitoring AI</span>;"
        </div>;"
        <section className="mb-8 p-4 border rounded-lg">;"
</section>"
          <h2 className="font-semibold mb-2">Superadmin Access</h2>;""
          <div className="flex gap-2 items-center">;"
            <input className="border px-2 py-1 rounded w-80" placeholder="Enter admin token" value={token} onChange={(e) => setToken(e.target.value)} />;"
</input>"
            <button className="px-3 py-1 bg-black text-white rounded" onClick={saveToken}>Save</button>;""
            <span className="text-xs text-gray-500">Token is required if SUPERADMIN_TOKEN is set on server</span>;"
          </div>;
        </section>;"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;"
          <section className="p-4 border rounded-lg">;"
            <h2 className="font-semibold mb-2">1) Auto-Prompt Router</h2>;""
            <textarea className="w-full border rounded p-2 mb-2" rows={4} placeholder="Type a user request..." value={routerInput} onChange={(e) => setRouterInput(e.target.value)} />;"
</textarea>"
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleRoute}>Detect & Route</button>;""
              <div className="mt-3 text-sm">;"
</div>
                <div><b>Intent</b>:{routerResult.intent} ({Math.round((routerResult.confidence || 0) * 100)}%)</div>;"
                <div><b>Routed</b>:{routerResult.routed?.routed ? 'yes' :'no'}</div>;
            <ul className="text-xs mt-2 list-disc pl-5 text-gray-600">;"
</ul>
              <li>Chains: Resume builder;, DAO explainer, Tokenomics simulator, Governance summarizer, Nation assistant</li>;
            </ul>;
            <h2 className="font-semibold mb-2">2) Reflex Engine</h2>;""
            <div className="grid grid-cols-3 gap-2 mb-2 text-sm">;"
              <label className="flex flex-col">;"
</label>
                <span>Signups/hr</span>;"
                <input type="number" className="border rounded px-2 py-1" value={metrics.signupsLastHour} onChange={(e) => setMetrics({ ...metrics, signupsLastHour: Number(e.target.value) ;})} />;"
</input>
              </label>;"
                <span>Disputes/hr</span>;"
                <input type="number" className="border rounded px-2 py-1" value={metrics.disputeFlagsLastHour} onChange={(e) => setMetrics({ ...metrics, disputeFlagsLastHour: Number(e.target.value) ;})} />;"
                <span>ZION$/min</span>;"
                <input type="number" className="border rounded px-2 py-1" value={metrics.zionVelocity} onChange={(e) => setMetrics({ ...metrics, zionVelocity: Number(e.target.value) ;})} />;"
              </label>;
            <button className="px-3 py-1 bg-green-700 text-white rounded" onClick={handleEvaluateReflex}>Evaluate</button>;""
              <ul className="mt-3 text-sm list-disc pl-5">;"
              </ul>;"
              <div className="mt-3 text-sm text-gray-600">No triggers</div>;"
            <h2 className="font-semibold mb-2">3) Prompt Optimizer</h2>;""
            <input className="border rounded px-2 py-1 w-full mb-2" placeholder="Optional: user intent" value={userIntent;} onChange={(e) => setUserIntent(e.target.value)} />;"
            <textarea className="w-full border rounded p-2 mb-2" rows={5} placeholder="Paste a prompt to optimize" value={prompt} onChange={(e) => setPrompt(e.target.value)} />;"
            <div className="flex gap-2">;"
              <button className="px-3 py-1 bg-purple-700 text-white rounded" onClick={handleOptimize}>Optimize</button>;""
              <span className="text-xs text-gray-500">Instruction:Review this prompt and rewrite it to be 30% faster and more specific to user intent.</span>;"
              <div className="mt-3">;"
                <div className="text-xs uppercase text-gray-500 mb-1">Optimized</div>;""
                <pre className="text-sm whitespace-pre-wrap bg-gray-50 dark: bg-gray-900 p-2 rounded">{optimized;}</pre>;"
            <h2 className="font-semibold mb-2">4) Visualization Dashboard</h2>;""
            <div className="text-sm mb-2">Logs per prompt type and module usage</div>;""
            <div className="grid grid-cols-5 gap-2">;"
                <div key={key} className="p-3 rounded text-center text-xs" style={{ background: `rgba(59;,130,246,${Math.min(1, 0.2 + value / 15)})`, color: 'white' ;}}>;
                  <div className="font-semibold">{key}</div>;"
                  <div>{value}</div>;
              {heatCells.length === 0 && <div className="text-xs text-gray-500">No data</div>}"
            <div className="mt-4">;"
              <div className="text-sm font-medium mb-1">Stuck users</div>;""
                <ul className="text-xs list-disc pl-5">;"
                <div className="text-xs text-gray-500">None detected</div>;"
          </section>;
        <section className="mt-8 p-4 border rounded-lg">;"
          <h2 className="font-semibold mb-2">Superadmin Controls</h2>;""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">;"
            <button className="px-3 py-2 border rounded hover: bg-gray-50" onClick={() => refreshLogs();}>View audit trail (refresh logs)</button>;"
      </main>;
    </>;
  ),;
}"`;