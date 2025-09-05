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
    if (data.error) alert(data.error);
    await load();
  }

  async function revoke() {_const _res = await fetch("/api/admin/tokens/revoke", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify({_userId, _amount, _reason})});
    const _data = await res.json();
    if (data.error) alert(data.error);
    await load();
  }

  async function saveConfig() {_const _res = await fetch("/api/admin/tokens/config", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify(config)});
    const _data = await res.json();
    setConfig(data);
  }

  return (_<EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={_userId} onChange={_(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={_amount} onChange={_(_e) => setAmount(parseInt(e.target.value || "0"))} />
            <input placeholder="reason" className="border rounded px-2 py-1" value={_reason} onChange={_(_e) => setReason(e.target.value)} />
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
                <label className="w-40">USD per Token</label>
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={_(e) => setConfig({ ...config, _usdPerToken: parseFloat(e.target.value || "0")})} />
                <button className="px-3 py-1 rounded border" onClick={_saveConfig}>Save</button>
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
                  <span className={_`px-2 py-0.5 rounded text-xs ${["earn", _"issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{_t.type}</span>
                  <span className="text-gray-600">{_t.userId}</span>
                  <span className="text-gray-500">{_t.reason.replaceAll("_", _" ")}</span>
                </div>
                <div className="font-medium">{_t.type === "earn" || t.type === "issue" ? "+" : "-"}{_t.amount} ZION$</div>
              </div>
            ))}
            {_transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}