import { useState } from "react";
import Head from "next/head";

export default function Partners() {
    name: "",
    entityType: "",
    pocName: "",
    pocEmail: "",

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
    const data = await res.json();
    setLoading(false);
    setResult(data);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Zion Partners</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">Integrate Zion</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Partner Registration</h2>
            <label className="block text-sm mb-2">Name</label>
              <option>Education Partnership</option>
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>
            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Available Endpoints</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>POST /talents</li>
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
            <div className="mt-6">
              <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">Download REST SDK</a>
              <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">Download GraphQL SDK</a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>Badges:</p>
              <div className="flex gap-2 mt-2">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">Verified Partner</span>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">Government API Active</span>
              </div>
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>
            <p className="text-sm">Your API Key:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>
          </div>
        )}
      </div>
    </div>
  );
}