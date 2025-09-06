origin/cursor/automate-test-improve-and-merge-code-2533
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
      fetch("/api/admin/tokens").then((r) => r.json())
      fetch("/api/admin/tokens/config").then((r) => r.json())])
    setTransactions(txRes.transactions |[])

  }
  useEffect(() => {
    load()
  }, [])
  async function issue() {

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
import React, { useEffect, useState } from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(100);
  const [reason, setReason] = useState("admin_action");
  const [config, setConfig] = useState<any>(null);

  async function load() {
    const [txRes, cfgRes] = await Promise.all([
      fetch("/api/admin/tokens").then((r) => r.json());
      fetch("/api/admin/tokens/config").then((r) => r.json())]);
    setTransactions(txRes.transactions || []);
    setConfig(cfgRes)



    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }
}
  useEffect(() => {
    load()
  }, []),
  async function issue() {
    const res = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    setConfig(data)
  }

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json(),
    setConfig(data)
  return (
    <EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>
            </div>
          </div>
        </div>
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Conversion & Rules</h2>
          {config && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <label className="w-40">USD per Token</label>
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>
              </div>
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>
            </div>
          )}
        </div>
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Transactions</h2>
          <div className="space-y-2 text-sm max-h-96 overflow-auto">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.userId}</span>
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>
                </div>
            ))}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
