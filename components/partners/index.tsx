import { useState } from 'react';
import Head from 'next/head';

export default function Partners() {
  const [form, setForm] = useState({
    name: '',
    entityType: '',
    pocName: '',
    pocEmail: '',
    useCaseType: 'Education Partnership',
  });  const [result, setResult] = useState<any>(null);
    name: "",
    entityType: "",
    pocName: "",
    pocEmail: "",
    useCaseType: "Education Partnership"}),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [result, setResult] = useState<any>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch('/api/partners/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.pocName, email: form.pocEmail },
      }),
    });
=======
    const res = await fetch("/api/partners/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
<<<<<<< HEAD
        pointOfContact: { name: form.pocName, email: form.pocEmail },
      }),
    });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const data = await res.json();
    setLoading(false);
    setResult(data);
  }

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Head>
        <title>Zion Partners</title>
      </Head>
      <div className='max-w-4xl mx-auto py-12 px-4'>
        <h1 className='text-3xl font-semibold mb-2'>Integrate Zion</h1>
        <p className='text-gray-600 mb-8'>
          Trusted institutions can embed Zion into platforms, programs, or
          marketplaces.
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <form onSubmit={submit} className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-xl font-medium mb-4'>Partner Registration</h2>
            <label className='block text-sm mb-2'>Name</label>
            <input
              className='w-full border rounded px-3 py-2 mb-4'
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <label className='block text-sm mb-2'>Entity Type</label>
            <input
              className='w-full border rounded px-3 py-2 mb-4'
              value={form.entityType}
              onChange={e => setForm({ ...form, entityType: e.target.value })}
              required
            />
            <label className='block text-sm mb-2'>Point of Contact</label>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <input
                placeholder='Name'
                className='border rounded px-3 py-2'
                value={form.pocName}
                onChange={e => setForm({ ...form, pocName: e.target.value })}
                required
              />
              <input
                placeholder='Email'
                type='email'
                className='border rounded px-3 py-2'
                value={form.pocEmail}
                onChange={e => setForm({ ...form, pocEmail: e.target.value })}
                required
              />
            </div>
            <label className='block text-sm mb-2'>Use Case</label>
            <select
              className='w-full border rounded px-3 py-2 mb-6'
              value={form.useCaseType}
              onChange={e => setForm({ ...form, useCaseType: e.target.value })}
            >              <option>Education Partnership</option>
=======
            <label className="block text-sm mb-2" htmlFor="input-Use Case">Use Case</label>
            <select className="w-full border rounded px-3 py-2 mb-6" value={form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e.target.value })}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <option>Education Partnership</option>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>
            <button
              disabled={loading}
              className='bg-black text-white px-4 py-2 rounded disabled:opacity-50'
            >
              {loading ? 'Submitting...' : 'Register'}
            </button>
          </form>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-xl font-medium mb-4'>Available Endpoints</h2>
            <ul className='list-disc ml-6 space-y-1 text-sm'>              <li>POST /talents</li>
=======
            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Available Endpoints</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <li>POST /talents</li>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
            <div className='mt-6'>
              <a
                className='text-blue-600 underline mr-4'
                href='/api/partners/sdk?type=rest'
              >
                Download REST SDK
              </a>
              <a
                className='text-blue-600 underline'
                href='/api/partners/sdk?type=graphql'
              >
                Download GraphQL SDK
              </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
            <div className='mt-6 text-sm text-gray-600'>
              <p>Badges:</p>
              <div className='flex gap-2 mt-2'>
                <span className='inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded'>
                  Verified Partner
                </span>
                <span className='inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded'>
                  Government API Active
                </span>              </div>
=======
              <div className="flex gap-2 mt-2">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">Verified Partner</span>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">Government API Active</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </div>

        {result && (
          <div className='mt-8 bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-2'>
              Registration Successful
            </h3>
            <p className='text-sm'>Your API Key:</p>
            <pre className='bg-gray-100 p-3 rounded text-xs overflow-auto'>
              {result.apiKey}
            </pre>
            <a
              href={result.dashboardUrl}
              className='inline-block mt-4 bg-black text-white px-4 py-2 rounded'
            >
              Go to Dashboard
            </a>          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>
            <p className="text-sm">Your API Key:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        )}
      </div>
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
