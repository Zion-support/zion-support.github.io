<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([]),
  const [userId, setUserId] = useState(""),
  const [amount, setAmount] = useState(100),
  const [reason, setReason] = useState("admin_action"),
  const [config, setConfig] = useState<any>(null),

  async function load() {
    const [txRes, cfgRes] = await Promise.all([
      fetch("/api/admin/tokens").then((r) => r.json()),
      fetch("/api/admin/tokens/config").then((r) => r.json())]),
    setTransactions(txRes.transactions || []),
    setConfig(cfgRes)
=======
import React, { useEffect, useState } from &quot;react&quot;;
import EnhancedLayout from &quot;../../components/layout/EnhancedLayout&quot;;

export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [userId, setUserId] = useState("&quot;);
  const [amount, setAmount] = useState(100);
  const [reason, setReason] = useState(&quot;admin_action&quot;);
  const [config, setConfig] = useState<any>(null);

  async function load() {
    const [txRes, cfgRes] = await Promise.all([
      fetch(&quot;/api/admin/tokens&quot;).then((r) => r.json()),
      fetch(&quot;/api/admin/tokens/config&quot;).then((r) => r.json())]);
    setTransactions(txRes.transactions || []);
    setConfig(cfgRes);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  useEffect(() => {
    load()
  }, []),

  async function issue() {
<<<<<<< HEAD
    const res = await fetch("/api/admin/tokens/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, reason })}),
    const data = await res.json(),
    if (data.error) alert(data.error),
    await load()
  }

  async function revoke() {
    const res = await fetch("/api/admin/tokens/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, reason })}),
    const data = await res.json(),
    if (data.error) alert(data.error),
    await load()
  }

  async function saveConfig() {
    const res = await fetch("/api/admin/tokens/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json(),
    setConfig(data)
=======
    const res = await fetch(&quot;/api/admin/tokens/issue&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
      body: JSON.stringify({ userId, amount, reason })});
    const data = await res.json();
=======
import React, {_useEffect, _useState} from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";

export default function AdminTokens() {_const [transactions, _setTransactions] = useState<any[]>([]);
  const [userId, _setUserId] = useState("");
  const [amount, _setAmount] = useState(100);
  const [reason, _setReason] = useState("admin_action");
  const [config, _setConfig] = useState<any>(null);

  async function load() {
    const [txRes, _cfgRes] = await Promise.all([
      fetch("/api/admin/tokens").then(_(r) => r.json()), _fetch("/api/admin/tokens/config").then(_(r) => r.json())]);
    setTransactions(txRes.transactions || []);
    setConfig(cfgRes);}

  useEffect__(() => {_load();}, []);

  async function issue() {_const _res = await fetch("/api/admin/tokens/issue", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify({_userId, _amount, _reason})});
    const _data = await res.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (data.error) alert(data.error);
    await load();
  }

<<<<<<< HEAD
  async function revoke() {
    const res = await fetch(&quot;/api/admin/tokens/revoke&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
      body: JSON.stringify({ userId, amount, reason })});
    const data = await res.json();
=======
  async function revoke() {_const _res = await fetch("/api/admin/tokens/revoke", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify({_userId, _amount, _reason})});
    const _data = await res.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (data.error) alert(data.error);
    await load();
  }

<<<<<<< HEAD
  async function saveConfig() {
    const res = await fetch(&quot;/api/admin/tokens/config&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
=======
  async function saveConfig() {_const _res = await fetch("/api/admin/tokens/config", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      body: JSON.stringify(config)});
    const _data = await res.json();
    setConfig(data);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

<<<<<<< HEAD
  return (
    <EnhancedLayout title=&quot;Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm&quot;>
            <input placeholder=&quot;userId" className="border rounded px-2 py-1&quot; value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type=&quot;number&quot; placeholder=&quot;amount" className="border rounded px-2 py-1&quot; value={amount} onChange={(e) => setAmount(parseInt(e.target.value || &quot;0&quot;))} />
            <input placeholder=&quot;reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
=======
  return (_<EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={_userId} onChange={_(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={_amount} onChange={_(_e) => setAmount(parseInt(e.target.value || "0"))} />
            <input placeholder="reason" className="border rounded px-2 py-1" value={_reason} onChange={_(_e) => setReason(e.target.value)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border" onClick={_issue}>Issue</button>
              <button className="px-3 py-1 rounded border" onClick={_revoke}>Revoke</button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Conversion & Rules</h2>
          {_config && (_<div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
<<<<<<< HEAD
                <label className="w-40&quot;>USD per Token</label>
                <input type=&quot;number&quot; step=&quot;0.01" className="border rounded px-2 py-1&quot; value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || &quot;0") })} />
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>
=======
                <label className="w-40">USD per Token</label>
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={_(e) => setConfig({ ...config, _usdPerToken: parseFloat(e.target.value || "0")})} />
                <button className="px-3 py-1 rounded border" onClick={_saveConfig}>Save</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>
            </div>
          )}
        </div>

        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Transactions</h2>
          <div className="space-y-2 text-sm max-h-96 overflow-auto">
            {_transactions.map(_(t) => (
              <div key={t.id} className="flex justify-between border rounded p-2">
                <div className="flex gap-2 items-center">
<<<<<<< HEAD
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn&quot;,&quot;issue&quot;].includes(t.type) ? &quot;bg-green-100 text-green-700&quot; : &quot;bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.userId}</span>
                  <span className="text-gray-500&quot;>{t.reason.replaceAll(&quot;_&quot;,&quot; ")}</span>
                </div>
                <div className="font-medium&quot;>{t.type === &quot;earn&quot; || t.type === &quot;issue&quot; ? &quot;+&quot; : &quot;-"}{t.amount} ZION$</div>
=======
                  <span className={_`px-2 py-0.5 rounded text-xs ${["earn", _"issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{_t.type}</span>
                  <span className="text-gray-600">{_t.userId}</span>
                  <span className="text-gray-500">{_t.reason.replaceAll("_", _" ")}</span>
                </div>
                <div className="font-medium">{_t.type === "earn" || t.type === "issue" ? "+" : "-"}{_t.amount} ZION$</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
            {_transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  )
}