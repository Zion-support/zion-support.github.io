<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import Head from "next/head",
export default function Partners() {
  const [form, setForm] = useState({
    name: "",
    entityType: "",
    pocName: "",
    pocEmail: "",
    useCaseType: "Education Partnership"}),
  const [result, setResult] = useState<any>(null),
  const [loading, setLoading] = useState(false),

  async function submit(e: React.FormEvent) {
    e.preventDefault(),
    setLoading(true),
    setResult(null),
    const res = await fetch("/api/partners/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
=======
import { useState } from &quot;react&quot;;
import Head from &quot;next/head&quot;;

export default function Partners() {
  const [form, setForm] = useState({
    name: "&quot;,
    entityType: "&quot;,
    pocName: "&quot;,
    pocEmail: "&quot;,
    useCaseType: &quot;Education Partnership&quot;});
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch(&quot;/api/partners/register&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.pocName, email: form.pocEmail }})}),
    const data = await res.json(),
    setLoading(false),
    setResult(data)
  }

  return (
    <div className=&quot;min-h-screen bg-gray-50 text-gray-900&quot;>
      <Head>
        <title>Zion Partners</title>
      </Head>
      <div className=&quot;max-w-4xl mx-auto py-12 px-4&quot;>
        <h1 className=&quot;text-3xl font-semibold mb-2&quot;>Integrate Zion</h1>
        <p className=&quot;text-gray-600 mb-8&quot;>Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>
        <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
          <form onSubmit={submit} className=&quot;bg-white p-6 rounded-lg shadow&quot;>
            <h2 className=&quot;text-xl font-medium mb-4&quot;>Partner Registration</h2>
            <label className=&quot;block text-sm mb-2&quot;>Name</label>
            <input className=&quot;w-full border rounded px-3 py-2 mb-4&quot; value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <label className=&quot;block text-sm mb-2&quot;>Entity Type</label>
            <input className=&quot;w-full border rounded px-3 py-2 mb-4&quot; value={form.entityType} onChange={(e) => setForm({ ...form, entityType: e.target.value })} required />
            <label className=&quot;block text-sm mb-2&quot;>Point of Contact</label>
            <div className=&quot;grid grid-cols-2 gap-3 mb-4&quot;>
              <input placeholder=&quot;Name&quot; className=&quot;border rounded px-3 py-2&quot; value={form.pocName} onChange={(e) => setForm({ ...form, pocName: e.target.value })} required />
              <input placeholder=&quot;Email&quot; type=&quot;email&quot; className=&quot;border rounded px-3 py-2&quot; value={form.pocEmail} onChange={(e) => setForm({ ...form, pocEmail: e.target.value })} required />
            </div>
            <label className=&quot;block text-sm mb-2&quot;>Use Case</label>
            <select className=&quot;w-full border rounded px-3 py-2 mb-6&quot; value={form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e.target.value })}>
              <option>Education Partnership</option>
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>
            <button disabled={loading} className=&quot;bg-black text-white px-4 py-2 rounded disabled:opacity-50&quot;>{loading ? &quot;Submitting...&quot; : &quot;Register&quot;}</button>
          </form>

          <div className=&quot;bg-white p-6 rounded-lg shadow&quot;>
            <h2 className=&quot;text-xl font-medium mb-4&quot;>Available Endpoints</h2>
            <ul className=&quot;list-disc ml-6 space-y-1 text-sm&quot;>
              <li>POST /talents</li>
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
            <div className=&quot;mt-6&quot;>
              <a className=&quot;text-blue-600 underline mr-4&quot; href=&quot;/api/partners/sdk?type=rest&quot;>Download REST SDK</a>
              <a className=&quot;text-blue-600 underline&quot; href=&quot;/api/partners/sdk?type=graphql&quot;>Download GraphQL SDK</a>
            </div>
            <div className=&quot;mt-6 text-sm text-gray-600&quot;>
              <p>Badges:</p>
              <div className=&quot;flex gap-2 mt-2&quot;>
                <span className=&quot;inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded&quot;>Verified Partner</span>
                <span className=&quot;inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded&quot;>Government API Active</span>
              </div>
            </div>
          </div>
        </div>

        {result && (
          <div className=&quot;mt-8 bg-white p-6 rounded-lg shadow&quot;>
            <h3 className=&quot;text-lg font-medium mb-2&quot;>Registration Successful</h3>
            <p className=&quot;text-sm&quot;>Your API Key:</p>
            <pre className=&quot;bg-gray-100 p-3 rounded text-xs overflow-auto&quot;>{result.apiKey}</pre>
            <a href={result.dashboardUrl} className=&quot;inline-block mt-4 bg-black text-white px-4 py-2 rounded&quot;>Go to Dashboard</a>
          </div>
=======
import { useState } from "react",;
import Head from "next/head",;
export default function Partners() {;
  const [form, setForm] = useState({;
    name: "",;
    entityType: "",;
    pocName: "",;
    pocEmail: "",;
    useCaseType: "Education Partnership"}),;
  const [result, setResult] = useState<any>(null),;
  const [loading, setLoading] = useState(false),;
  async function submit(e: React.FormEvent) {;
    e.preventDefault(),;
    setLoading(true),;
    setResult(null),;
    const res = await fetch("/api/partners/register", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify({;
        name: form.name,;
        entityType: form.entityType,;
        useCaseType: form.useCaseType,;
        pointOfContact: { name: form.pocName, email: form.pocEmail }})}),;
    const data = await res.json();
    setLoading(false);
    setResult(data);
  }
;
  return (;
    <div className="min-h-screen bg-gray-50 text-gray-900">;
      <Head>;
        <title>Zion Partners</title>;
      </Head>;
      <div className="max-w-4xl mx-auto py-12 px-4">;
        <h1 className="text-3xl font-semibold mb-2">Integrate Zion</h1>;
        <p className="text-gray-600 mb-8">Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>;
        <div className="grid md:grid-cols-2 gap-8">;
          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">;
            <h2 className="text-xl font-medium mb-4">Partner Registration</h2>;
            <label className="block text-sm mb-2">Name</label>;
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />;
            <label className="block text-sm mb-2">Entity Type</label>;
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.entityType} onChange={(e) => setForm({ ...form, entityType: e.target.value })} required />;
            <label className="block text-sm mb-2">Point of Contact</label>;
            <div className="grid grid-cols-2 gap-3 mb-4">;
              <input placeholder="Name" className="border rounded px-3 py-2" value={form.pocName} onChange={(e) => setForm({ ...form, pocName: e.target.value })} required />;
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form.pocEmail} onChange={(e) => setForm({ ...form, pocEmail: e.target.value })} required />;
            </div>;
            <label className="block text-sm mb-2">Use Case</label>;
            <select className="w-full border rounded px-3 py-2 mb-6" value={form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e.target.value })}>;
              <option>Education Partnership</option>;
              <option>Workforce Development</option>;
              <option>Token Integration</option>;
              <option>Custom Marketplace Instance</option>;
            </select>;
            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>;
          </form>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h2 className="text-xl font-medium mb-4">Available Endpoints</h2>;
            <ul className="list-disc ml-6 space-y-1 text-sm">;
              <li>POST /talents</li>;
              <li>GET /jobs</li>;
              <li>GET /certifications</li>;
              <li>POST /verify-student</li>;
              <li>POST /redeem-grant</li>;
            </ul>;
            <div className="mt-6">;
              <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">Download REST SDK</a>;
              <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">Download GraphQL SDK</a>;
            </div>;
            <div className="mt-6 text-sm text-gray-600">;
              <p>Badges:</p>;
              <div className="flex gap-2 mt-2">;
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">Verified Partner</span>;
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">Government API Active</span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {result && (;
          <div className="mt-8 bg-white p-6 rounded-lg shadow">;
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>;
            <p className="text-sm">Your API Key:</p>;
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>;
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>;
          </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </div>;
    </div>;
  );
}