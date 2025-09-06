<<<<<<< HEAD
<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([])
  const [userId, setUserId] = useState("")
  const [amount, setAmount] = useState(100)
  const [reason, setReason] = useState("admin_action")
  const [config, setConfig] = useState<any>(null)
import React, { useEffect, useState } from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
import React, { useEffect, useState } from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
import React, { useEffect, useState } from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([]),
  const [userId, setUserId] = useState(""),
  const [amount, setAmount] = useState(100),
  const [reason, setReason] = useState("admin_action"),
  const [config, setConfig] = useState<any>(null),
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  async function load() {
    const [txRes, cfgRes] = await Promise.all([
      fetch("/api/admin/tokens").then((r) => r.json())
      fetch("/api/admin/tokens/config").then((r) => r.json())])
    setTransactions(txRes.transactions |[])

<<<<<<< HEAD
    setConfig(cfgRes)
  }
  useEffect(() => {
    load()
  }, [])
  async function issue() {

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    setConfig(cfgRes)



<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }
}
  useEffect(() => {
    load()
  }, []),
  async function issue() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const res = await fetch("/api/admin/tokens/issue", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ userId, amount, reason })})
    const data = await res.json()
    if (data.error) alert(data.error)
    await load()
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  async function revoke() {
    const res = await fetch("/api/admin/tokens/revoke", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ userId, amount, reason })})
    const data = await res.json()
    if (data.error) alert(data.error)
    await load()
  }

      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify(config)})
    const data = await res.json()
    setConfig(data)
  }
  return (
    <EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value |"0"))} />
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
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value |"0") })} />
  }

  useEffect(() => {
    load()
  }, []),

  async function issue() {
    const res = await fetch("/api/admin/tokens/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, reason })}),
    const data = await res.json()
    if (data.error) alert(data.error),
    await load()
  }

  async function revoke() {
    const res = await fetch("/api/admin/tokens/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, reason })}),
    const data = await res.json()
    if (data.error) alert(data.error),
    await load()
  }

  async function saveConfig() {
    const res = await fetch("/api/admin/tokens/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json()
    setConfig(data)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}
;
  async function revoke() {;
    const res = await fetch("/api/admin/tokens/revoke", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify({ userId, amount, reason })}),;
    const data = await res.json();
    if (data.error) alert(data.error);
    await load();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  async function saveConfig() {
<<<<<<< HEAD
<<<<<<< HEAD
    const res = await fetch("/api/admin/tokens/config", {

=======
    const res = await fetch(&quot;/api/admin/tokens/config&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
      body: JSON.stringify(config)});
    const _data = await res.json();
    setConfig(data);

  }

  return (
    <EnhancedLayout title=&quot;Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm&quot;>
            <input placeholder=&quot;userId" className="border rounded px-2 py-1&quot; value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type=&quot;number&quot; placeholder=&quot;amount" className="border rounded px-2 py-1&quot; value={amount} onChange={(e) => setAmount(parseInt(e.target.value || &quot;0&quot;))} />
            <input placeholder=&quot;reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
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
                <label className="w-40&quot;>USD per Token</label>
                <input type=&quot;number&quot; step=&quot;0.01" className="border rounded px-2 py-1&quot; value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || &quot;0") })} />


import React, { useEffect, useState } from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
export default function AdminTokens() {
  const [transactions, setTransactions] = useState<any[]>([])
  const [userId, setUserId] = useState("")
  const [amount, setAmount] = useState(100)
  const [reason, setReason] = useState("admin_action")
  const [config, setConfig] = useState<any>(null)
import React, { useEffect, useState } from "react",
import EnhancedLayout from "../../components/layout/EnhancedLayout",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useEffect, useState } from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
=======
import React, { useEffect, useState } from "react",;
import EnhancedLayout from "../../components/layout/EnhancedLayout",;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  }
}
  useEffect(() => {
    load()
  }, []),
  async function issue() {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const res = await fetch("/api/admin/tokens/issue", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ userId, amount, reason })})
    const data = await res.json()
    if (data.error) alert(data.error)
    await load()
  }
<<<<<<< HEAD
<<<<<<< HEAD
  async function revoke() {
    const res = await fetch("/api/admin/tokens/revoke", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ userId, amount, reason })})
    const data = await res.json()
    if (data.error) alert(data.error)
    await load()
  }
}
;
  async function revoke() {;
    const res = await fetch("/api/admin/tokens/revoke", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify({ userId, amount, reason })}),;
    const data = await res.json();
    if (data.error) alert(data.error);
    await load();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  async function saveConfig() {
    const res = await fetch("/api/admin/tokens/config", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify(config)})
    const data = await res.json()

    setConfig(data)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    const res = await fetch("/api/admin/tokens/config", {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json(),
<<<<<<< HEAD
    setConfig(data)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
    const res = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    setConfig(data)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json(),
    setConfig(data)
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value |"0"))} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />


<<<<<<< HEAD
=======
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />


            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value |"0"))} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Conversion & Rules</h2>
          {config && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <label className="w-40">USD per Token</label>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />


<<<<<<< HEAD
=======
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />


                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value |"0") })} />
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>
              </div>
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>
            </div>
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <h2 className="font-medium mb-3">Transactions</h2>
          <div className="space-y-2 text-sm max-h-96 overflow-auto">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.userId}</span>
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="font-medium">{t.type === "earn" |t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>
              </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
};
;
  async function saveConfig() {;
    const res = await fetch("/api/admin/tokens/config", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify(config)});
    const data = await res.json();
    setConfig(data);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

;
  async function saveConfig() {;
    const res = await fetch("/api/admin/tokens/config", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify(config)});
    const data = await res.json();
    setConfig(data);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

=======

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from './react';,
import EnhancedLayout from "../../components / layout / EnhancedLayout",
export default /**
 * AdminTokens - Function description
 */
function AdminTokens() {
  const [transactions, set_transactions] = useState < any[]>([]),
  const [user_id, setUserId] = useState (""),
  const [amount, set_amount] = useState (100),
  const [reason, set_reason] = useState ("admin_action"),
  const [config, set_config] = useState < any>(null),
  async /**
 * load - Function description
 */
function load() {
    const [tx_res, cfg_res] = await Promise.all ([;
      fetch ("/api / admin / tokens").then ((r) => r.json ()),
      fetch ("/api / admin / tokens / config").then ((r) => r.json ())]),
    set_transactions (tx_res.transactions || []),
    set_config (cfg_res);
  }
  useEffect (() => {
    load ();
  }, []),
  async /**
 * issue - Function description
 */
function issue() {
    const res = await fetch ("/api / admin / tokens / issue", {
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify ({ user_id, amount, reason })}),
    const data = await res.json (),
    if (alert (data.error), ) {
  $2
}
    await load ();
  }
  async /**
 * revoke - Function description
 */
function revoke() {
    const res = await fetch ("/api / admin / tokens / revoke", {
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify ({ user_id, amount, reason })}),
    const data = await res.json (),
    if (alert (data.error), ) {
  $2
}
    await load ();
  }
  async /**
 * save_config - Function description
 */
function save_config() {
    const res = await fetch ("/api / admin / tokens / config", {
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify (config)}),
    const data = await res.json (),
    set_config (data);
  }
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <EnhancedLayout title="Admin: ZION$">;
      <div className="max-w-4xl mx-auto space-y-6">;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Issue / Revoke</h2>;
          <div className="grid sm:grid-cols-4 gap-2 text-sm">;
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />;
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />;
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />;
            <div className="flex gap-2">;
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>;
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>;
            </div>;
          </div>;
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Conversion & Rules</h2>;
          {config && (;
            <div className="space-y-3 text-sm">;
              <div className="flex items-center gap-2">;
                <label className="w-40">USD per Token</label>;
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />;
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>;
              </div>;
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>;
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Transactions</h2>;
          <div className="space-y-2 text-sm max-h-96 overflow-auto">;
            {transactions.map((t) => (;
              <div key={t.id} className="flex justify-between border rounded p-2">;
                <div className="flex gap-2 items-center">;
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>;
                  <span className="text-gray-600">{t.userId}</span>;
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>;
                </div>;
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>;
              </div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
}

                <div className="font-medium">{t.type === "earn" |t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>
              </div>
            ))}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
    </EnhancedLayout>);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    <EnhancedLayout title="Admin: ZION$">;
      <div className="max - w-4xl mx - auto space - y-6">;
        <div className="p - 4 border rounded bg - white dark:bg - zinc - 900">;
          <h2 className="font - medium mb - 3">Issue / Revoke</h2>;
          <div className="grid sm:grid - cols - 4 gap - 2 text - sm">;
            <input placeholder="user_id" className="border rounded px - 2 py - 1" value={user_id} on_change={(e) => setUserId (e.target.value)} />;
            <input type="number" placeholder="amount" className="border rounded px - 2 py - 1" value={amount} on_change={(e) => set_amount (parse_int (e.target.value || "0"))} />;
            <input placeholder="reason" className="border rounded px - 2 py - 1" value={reason} on_change={(e) => set_reason (e.target.value)} />;
            <div className="flex gap - 2">;
              <button className="px - 3 py - 1 rounded border" on_click={issue}>Issue</button>;
              <button className="px - 3 py - 1 rounded border" on_click={revoke}>Revoke</button>;
            </div>;
          </div>;
        </div>;
        <div className="p - 4 border rounded bg - white dark:bg - zinc - 900">;
          <h2 className="font - medium mb - 3">Conversion & Rules</h2>;
          {config && (
            <div className="space - y-3 text - sm">;
              <div className="flex items - center gap - 2">;
                <label className="w - 40">USD per Token</label>;
                <input type="number" step="0.01" className="border rounded px - 2 py - 1" value={config.usdPerToken} on_change={(e) => set_config ({ ...config, usdPerToken: parse_float (e.target.value || "0") })} />;
                <button className="px - 3 py - 1 rounded border" on_click={save_config}>Save</button>;
              </div>;
              <div className="text - xs text - gray - 500">Example: 0.05 means 100 ZION$ = $5 credit.</div>;
            </div>)}
        </div>;
        <div className="p - 4 border rounded bg - white dark:bg - zinc - 900">;
          <h2 className="font - medium mb - 3">Transactions</h2>;
          <div className="space - y-2 text - sm max - h-96 overflow - auto">;
            {transactions.map ((t) => (
              <div key={t.id} className="flex justify - between border rounded p - 2">;
                <div className="flex gap - 2 items - center">;
                  <span className={`px - 2 py - 0.5 rounded text - xs ${["earn", "issue"].includes (t.type) ? "bg - green - 100 text - green - 700" : "bg - red - 100 text - red - 700"}`}>{t.type}</span>;
                  <span className="text - gray - 600">{t.user_id}</span>;
                  <span className="text - gray - 500">{t.reason.replace_all ("_", " ")}</span>;
                </div>;
                <div className="font - medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>;
              </div>))}
            {transactions.length === 0 && <div className="text - gray - 500">No transactions.</div>}
          </div>;
        </div>;
      </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>

              </div>


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  );
};
;
  async function saveConfig() {;
    const res = await fetch("/api/admin/tokens/config", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify(config)});
    const data = await res.json();
    setConfig(data);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <EnhancedLayout title="Admin: ZION$">;
      <div className="max-w-4xl mx-auto space-y-6">;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Issue / Revoke</h2>;
          <div className="grid sm:grid-cols-4 gap-2 text-sm">;
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />;
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />;
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />;
            <div className="flex gap-2">;
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>;
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>;
            </div>;
          </div>;
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Conversion & Rules</h2>;
          {config && (;
            <div className="space-y-3 text-sm">;
              <div className="flex items-center gap-2">;
                <label className="w-40">USD per Token</label>;
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />;
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>;
              </div>;
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>;
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Transactions</h2>;
          <div className="space-y-2 text-sm max-h-96 overflow-auto">;
            {transactions.map((t) => (;
              <div key={t.id} className="flex justify-between border rounded p-2">;
                <div className="flex gap-2 items-center">;
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>;
                  <span className="text-gray-600">{t.userId}</span>;
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>;
                </div>;
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>;
              </div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
