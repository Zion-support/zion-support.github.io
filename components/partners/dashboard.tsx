<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import Head from "next/head",
export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState(""),
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),
  const [loading, setLoading] = useState(false),

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token"),
    if (saved) setToken(saved)
  }, []),

  async function getToken() {
    const res = await fetch("/api/partners/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey })}),
    const data = await res.json(),
    if (data.token) {
      localStorage.setItem("zion_partner_token", data.token),
      setToken(data.token)
=======
import { useEffect, useState } from &quot;react&quot;;
import Head from &quot;next/head&quot;;

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState("&quot;);
  const [token, setToken] = useState<string | null>(null);
  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(&quot;zion_partner_token&quot;);
    if (saved) setToken(saved);
  }, []);

  async function getToken() {
    const res = await fetch(&quot;/api/partners/token&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
      body: JSON.stringify({ apiKey })});
    const data = await res.json();
    if (data.token) {
      localStorage.setItem(&quot;zion_partner_token&quot;, data.token);
      setToken(data.token);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }

  async function fetchUsage() {
<<<<<<< HEAD
    setLoading(true),
    const res = await fetch("/api/partners/usage", {
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json(),
    setUsage(data.summary || null),
    setLoading(false)
  }

  async function regenerateKey() {
    const res = await fetch("/api/partners/key", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json(),
=======
    setLoading(true);
    const res = await fetch(&quot;/api/partners/usage&quot;, {
=======
import Head from "next/head";

export default function PartnerDashboard() {_const [apiKey, _setApiKey] = useState("");
  const [token, _setToken] = useState<string | null>(null);
  const [usage, _setUsage] = useState<any>(null);
  const [loading, _setLoading] = useState(false);

  useEffect__(() => {
    const _saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved);}, []);

  async function getToken() {_const _res = await fetch("/api/partners/token", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify({_apiKey})});
    const _data = await res.json();
    if (data.token) {_localStorage.setItem("zion_partner_token", _data.token);
      setToken(data.token);}
  }

  async function fetchUsage() {_setLoading(true);
    const _res = await fetch("/api/partners/usage", _{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      headers: token ? { Authorization: `Bearer ${token}` } : {}});
    const _data = await res.json();
    setUsage(data.summary || null);
    setLoading(false);
  }

<<<<<<< HEAD
  async function regenerateKey() {
    const res = await fetch(&quot;/api/partners/key&quot;, {
      method: &quot;POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {}});
    const data = await res.json();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)
=======
  async function regenerateKey() {_const _res = await fetch("/api/partners/key", _{
      method: "POST", _headers: token ? { Authorization: `Bearer ${token}` } : {}});
    const _data = await res.json();
    if (data.apiKey) {_alert(`New API Key: ${data.apiKey}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }

  return (_<div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Zion Partner Dashboard</title>
      </Head>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">Partner Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage access, _view usage, _and download SDKs.</p>

        {_!token && (
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>
            <div className="flex gap-2">
<<<<<<< HEAD
              <input className="border rounded px-3 py-2 flex-1&quot; placeholder=&quot;Paste your API key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>
=======
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={_(e) => setApiKey(e.target.value)} />
              <button onClick={_getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-medium mb-2">API Keys</h3>
            <button onClick={_regenerateKey} className="bg-gray-900 text-white px-3 py-2 rounded text-sm">Generate New Key</button>
            <p className="text-xs text-gray-500 mt-2">Old key becomes inactive.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h3 className="font-medium mb-2">Usage</h3>
<<<<<<< HEAD
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3&quot;>{loading ? &quot;Loading...&quot; : &quot;Refresh"}</button>
            {usage ? (
=======
            <button onClick={_fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{_loading ? "Loading..." : "Refresh"}</button>
            {_usage ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>
                <div className="mt-3">
                  <p className="font-medium">By Endpoint</p>
                  <ul className="list-disc ml-6">
                    {_Object.entries(usage.byEndpoint || {}).map(_([k, _v]) => (
                      <li key={_k}>{_k}: {_v as any}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No usage yet.</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
        </div>
      </div>
    </div>
  )
}