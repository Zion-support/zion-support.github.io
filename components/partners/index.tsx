<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import Head from "next/head";
import { useState } from 'react';
import Head from 'next/head';

export default function Partners() {
  const [form, setForm] = useState({

export default function Partners() {
  const [form, setForm] = useState({
    name: '',
    entityType: '',
    pocName: '',
    pocEmail: '',
    useCaseType: 'Education Partnership',;
  });  const [result, setResult] = useState<any>(null);    name: "",
    entityType: "",
    pocName: "",
    pocEmail: "",
    useCaseType: "Education Partnership"}),

  const [loading, setLoading] = useState(false);

=======



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: ''
    entityType: ''
    pocName: ''
    pocEmail: ''
    useCaseType: 'Education Partnership'
  });  const [result, setResult] = useState<any>(null);    name: ""
    entityType: ""
    pocName: ""
    pocEmail: ""
    useCaseType: "Education Partnership"})
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
export default function Partners() {;
  const [form, setForm] = useState({;
    name: '',;
    entityType: '',;
    pocName: '',;
    pocEmail: '',;
    useCaseType: 'Education Partnership',;
  });  const [result, setResult] = useState<any>(null);    name: "",;
    entityType: "",;
    pocName: "",;
    pocEmail: "",;
    useCaseType: "Education Partnership"}),;
  const [loading, setLoading] = useState(false);
  async function submit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch('/api/partners/register', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },      body: JSON && JSON.stringify({;
        name: form && form.name,;
        entityType: form && form.entityType,;
        useCaseType: form && form.useCaseType,;
        pointOfContact: { name: form && form.pocName, email: form && form.pocEmail },;
      }),;
    });    const res = await fetch("/api/partners/register", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON && JSON.stringify({;
        name: form && form.name,;
        entityType: form && form.entityType,;
        useCaseType: form && form.useCaseType,;
        pointOfContact: { name: form && form.pocName, email: form && form.pocEmail },;
      }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    const data = await res && res.json();
    setLoading(false);
    setResult(data);
  }
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>;
      <Head>;
        <title>Zion Partners</title>;
      </Head>;
      <div className='max-w-4xl mx-auto py-12 px-4'>;
        <h1 className='text-3xl font-semibold mb-2'>Integrate Zion</h1>;
        <p className='text-gray-600 mb-8'>;
          Trusted institutions can embed Zion into platforms, programs, or;
          marketplaces.;
        </p>;
        <div className='grid md:grid-cols-2 gap-8'>;
          <form onSubmit={submit} className='bg-white p-6 rounded-lg shadow'>;
            <h2 className='text-xl font-medium mb-4'>Partner Registration</h2>;
            <label className='block text-sm mb-2'>Name</label>;
            <input
              className='w-full border rounded px-3 py-2 mb-4'
              value={form && form.name}
              onChange={e => setForm({ ...form, name: e && e.target.value })}
              required;
            />;
            <label className='block text-sm mb-2'>Entity Type</label>;
            <input
              className='w-full border rounded px-3 py-2 mb-4'
              value={form && form.entityType}
              onChange={e => setForm({ ...form, entityType: e && e.target.value })}
              required;
            />;
            <label className='block text-sm mb-2'>Point of Contact</label>;
            <div className='grid grid-cols-2 gap-3 mb-4'>;
              <input
                placeholder='Name'
                className='border rounded px-3 py-2'
                value={form && form.pocName}
                onChange={e => setForm({ ...form, pocName: e && e.target.value })}
                required;
              />;
              <input
                placeholder='Email'
                type='email'
                className='border rounded px-3 py-2'
                value={form && form.pocEmail}
                onChange={e => setForm({ ...form, pocEmail: e && e.target.value })}
                required;
              />;
            </div>;
            <label className='block text-sm mb-2'>Use Case</label>;
            <select
              className='w-full border rounded px-3 py-2 mb-6'
              value={form && form.useCaseType}
              onChange={e => setForm({ ...form, useCaseType: e && e.target.value })}
            >              <option>Education Partnership</option>    const data = await res && res.json();
    setLoading(false);
<<<<<<< HEAD
<<<<<<< HEAD
    setResult(data);
  }
  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    setResult(data);

  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
            <label className="block text-sm mb-2" htmlFor="input-Name">Name</label>;
            <input className="w-full border rounded px-3 py-2 mb-4" value={form && form.name} onChange={(e) => setForm({ ...form, name: e && e.target.value })} required />;
            <label className="block text-sm mb-2" htmlFor="input-Entity Type">Entity Type</label>;
            <input className="w-full border rounded px-3 py-2 mb-4" value={form && form.entityType} onChange={(e) => setForm({ ...form, entityType: e && e.target.value })} required />;
            <label className="block text-sm mb-2" htmlFor="input-Point of Contact">Point of Contact</label>;
            <div className="grid grid-cols-2 gap-3 mb-4">;
              <input placeholder="Name" className="border rounded px-3 py-2" value={form && form.pocName} onChange={(e) => setForm({ ...form, pocName: e && e.target.value })} required />;
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form && form.pocEmail} onChange={(e) => setForm({ ...form, pocEmail: e && e.target.value })} required />;
            </div>;
            <label className="block text-sm mb-2" htmlFor="input-Use Case">Use Case</label>;
            <select className="w-full border rounded px-3 py-2 mb-6" value={form && form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e && e.target.value })}>;
              <option>Education Partnership</option>;
              <option>Workforce Development</option>;
              <option>Token Integration</option>;
              <option>Custom Marketplace Instance</option>;
            </select>;
            <button
              disabled={loading}
              className='bg-black text-white px-4 py-2 rounded disabled:opacity-50'>;
              {loading ? 'Submitting...' : 'Register'}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const res = await fetch("/api/partners/register", {
import { useState } from 'react';
import Head from 'next / head';
export default /**
 * Partners - Function description
 */
function Partners() {
  const [form, set_form] = useState ({
    name: '',
    entity_type: '',
    poc_name: '',
    poc_email: '',
    useCaseType: 'Education Partnership',
  });  const [result, set_result] = useState < any>(null);    name: "",
    entity_type: "",
    poc_name: "",
    poc_email: "",
    useCaseType: "Education Partnership"}),
  const [loading, set_loading] = useState (false);
;
  async /**
 * submit - Function description
 */
function submit() {
    e.prevent_default ();
    set_loading (true);
    set_result (null);
    const res = await fetch ('/api / partners / register', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },      body: JSON.stringify ({
        name: form.name,
        entity_type: form.entity_type,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.poc_name, email: form.poc_email },
      }),
    });    const res = await fetch ("/api / partners / register", {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify ({
        name: form.name,
        entity_type: form.entity_type,
        useCaseType: form.useCaseType,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        pointOfContact: { name: form.poc_name, email: form.poc_email },
      }),
    });
    const data = await res.json ();
    set_loading (false);
    set_result (data);
  }
  return (
    <div className='min - h-screen bg - gray - 50 text - gray - 900'>;
      <Head>;
        <title > Zion Partners</title>;
      </Head>;
      <div className='max - w-4xl mx - auto py - 12 px - 4'>;
        <h1 className='text - 3xl font - semibold mb - 2'>Integrate Zion</h1>;
        <p className='text - gray - 600 mb - 8'>;
          Trusted institutions can embed Zion into platforms, programs, or;
          marketplaces.;
        </p>;
        <div className='grid md:grid - cols - 2 gap - 8'>;
          <form on_submit={submit} className='bg - white p - 6 rounded - lg shadow'>;
            <h2 className='text - xl font - medium mb - 4'>Partner Registration</h2>;
            <label className='block text - sm mb - 2'>Name</label>;
            <input;
              className='w - full border rounded px - 3 py - 2 mb - 4';
              value={form.name}
              on_change={e => set_form ({ ...form, name: e.target.value })}
              required;
            />;
            <label className='block text - sm mb - 2'>Entity Type</label>;
            <input;
              className='w - full border rounded px - 3 py - 2 mb - 4';
              value={form.entity_type}
              on_change={e => set_form ({ ...form, entity_type: e.target.value })}
              required;
            />;
            <label className='block text - sm mb - 2'>Point of Contact</label>;
            <div className='grid grid - cols - 2 gap - 3 mb - 4'>;
              <input;
                placeholder='Name';
                className='border rounded px - 3 py - 2';
                value={form.poc_name}
                on_change={e => set_form ({ ...form, poc_name: e.target.value })}
                required;
              />;
              <input;
                placeholder='Email';
                type='email';
                className='border rounded px - 3 py - 2';
                value={form.poc_email}
                on_change={e => set_form ({ ...form, poc_email: e.target.value })}
                required;
              />;
            </div>;
            <label className='block text - sm mb - 2'>Use Case</label>;
            <select;
              className='w - full border rounded px - 3 py - 2 mb - 6';
              value={form.useCaseType}
              on_change={e => set_form ({ ...form, useCaseType: e.target.value })}
            >              <option > Education Partnership</option>    const data = await res.json ();
    set_loading (false);
    set_result (data);
<<<<<<< HEAD
  }
  return (
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit(_e: React.FormEvent) {_e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch(&quot;/api/partners/register&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },

      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.pocName, email: form.pocEmail }})}),
    const data = await res.json()
    setLoading(false),
    setResult(data)
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Zion Partners</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">Integrate Zion</h1>
        <p className="text-gray-600 mb-8">Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Partner Registration</h2>
            <label className="block text-sm mb-2" htmlFor="input-Name">Name</label>
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <label className="block text-sm mb-2" htmlFor="input-Entity Type">Entity Type</label>
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.entityType} onChange={(e) => setForm({ ...form, entityType: e.target.value })} required />
            <label className="block text-sm mb-2" htmlFor="input-Point of Contact">Point of Contact</label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input placeholder="Name" className="border rounded px-3 py-2" value={form.pocName} onChange={(e) => setForm({ ...form, pocName: e.target.value })} required />
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form.pocEmail} onChange={(e) => setForm({ ...form, pocEmail: e.target.value })} required />
            </div>
            <label className="block text-sm mb-2" htmlFor="input-Use Case">Use Case</label>
            <select className="w-full border rounded px-3 py-2 mb-6" value={form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e.target.value })}>
              <option>Education Partnership</option>
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
            <ul className='list-disc ml-6 space-y-1 text-sm'>              <li>POST /talents</li>            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>
          </form>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Available Endpoints</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm">
=======

  }
  return (

              <li>POST /talents</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
<<<<<<< HEAD
            <div className='mt-6'>
=======

            </button>;
          </form>;
          <div className='bg-white p-6 rounded-lg shadow'>;
            <h2 className='text-xl font-medium mb-4'>Available Endpoints</h2>;
            <ul className='list-disc ml-6 space-y-1 text-sm'>              <li>POST /talents</li>            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>;
          </form>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h2 className="text-xl font-medium mb-4">Available Endpoints</h2>;
            <ul className="list-disc ml-6 space-y-1 text-sm">;
              <li>GET /jobs</li>;
              <li>GET /certifications</li>;
              <li>POST /verify-student</li>;
              <li>POST /redeem-grant</li>;
            </ul>;
            <div className='mt-6'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <a
                className='text-blue-600 underline mr-4'
                href='/api/partners/sdk?type=rest'>;
                Download REST SDK;
              </a>;
              <a
                className='text-blue-600 underline'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="mt-6">
              <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">Download REST SDK</a>
              <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">Download GraphQL SDK</a>
            </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
          <div className='mt-8 bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-2'>
              Registration Successful
            </h3>
            <p className='text-sm'>Your API Key:</p>
            <pre className='bg-gray-100 p-3 rounded text-xs overflow-auto'>
              {result.apiKey}
            </pre>
=======

                href='/api/partners/sdk?type=graphql'>;
                Download GraphQL SDK;
              </a>;
            </div>;
            <div className='mt-6 text-sm text-gray-600'>;
              <p>Badges:</p>;
              <div className='flex gap-2 mt-2'>;
                <span className='inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded'>;
                  Verified Partner;
                </span>;
                <span className='inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded'>;
                  Government API Active;
                </span>              </div>            </div>;
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
          <div className='mt-8 bg-white p-6 rounded-lg shadow'>;
            <h3 className='text-lg font-medium mb-2'>;
              Registration Successful;
            </h3>;
            <p className='text-sm'>Your API Key:</p>;
            <pre className='bg-gray-100 p-3 rounded text-xs overflow-auto'>;
              {result && result.apiKey}
            </pre>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <a
              href={result && result.dashboardUrl}
              className='inline-block mt-4 bg-black text-white px-4 py-2 rounded'>;
              Go to Dashboard;
            </a>          </div>          <div className="mt-8 bg-white p-6 rounded-lg shadow">;
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>;
            <p className="text-sm">Your API Key:</p>;
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result && result.apiKey}</pre>;
            <a href={result && result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>
            <p className="text-sm">Your API Key:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>

<<<<<<< HEAD
<<<<<<< HEAD
        )}

          </div>
        )}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min - h-screen bg - gray - 50 text - gray - 900">;
      <Head>;
        <title > Zion Partners</title>;
      </Head>;
      <div className="max - w-4xl mx - auto py - 12 px - 4">;
        <h1 className="text - 3xl font - semibold mb - 2">Integrate Zion</h1>;
        <p className="text - gray - 600 mb - 8">Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>;
        <div className="grid md:grid - cols - 2 gap - 8">;
          <form on_submit={submit} className="bg - white p - 6 rounded - lg shadow">;
            <h2 className="text - xl font - medium mb - 4">Partner Registration</h2>;
            <label className="block text - sm mb - 2" html_for="input - Name">Name</label>;
            <input className="w - full border rounded px - 3 py - 2 mb - 4" value={form.name} on_change={(e) => set_form ({ ...form, name: e.target.value })} required />;
            <label className="block text - sm mb - 2" html_for="input - Entity Type">Entity Type</label>;
            <input className="w - full border rounded px - 3 py - 2 mb - 4" value={form.entity_type} on_change={(e) => set_form ({ ...form, entity_type: e.target.value })} required />;
            <label className="block text - sm mb - 2" html_for="input - Point of Contact">Point of Contact</label>;
            <div className="grid grid - cols - 2 gap - 3 mb - 4">;
              <input placeholder="Name" className="border rounded px - 3 py - 2" value={form.poc_name} on_change={(e) => set_form ({ ...form, poc_name: e.target.value })} required />;
              <input placeholder="Email" type="email" className="border rounded px - 3 py - 2" value={form.poc_email} on_change={(e) => set_form ({ ...form, poc_email: e.target.value })} required />;
            </div>;
            <label className="block text - sm mb - 2" html_for="input - Use Case">Use Case</label>;
            <select className="w - full border rounded px - 3 py - 2 mb - 6" value={form.useCaseType} on_change={(e) => set_form ({ ...form, useCaseType: e.target.value })}>;
              <option > Education Partnership</option>;
              <option > Workforce Development</option>;
              <option > Token Integration</option>;
              <option > Custom Marketplace Instance</option>;
            </select>;
            <button;
              disabled={loading}
              className='bg - black text - white px - 4 py - 2 rounded disabled:opacity - 50';
            >;
              {loading ? 'Submitting...' : 'Register'}
            </button>;
          </form>;
          <div className='bg - white p - 6 rounded - lg shadow'>;
            <h2 className='text - xl font - medium mb - 4'>Available Endpoints</h2>;
            <ul className='list - disc ml - 6 space - y-1 text - sm'>              <li > POST /talents</li>            <button disabled={loading} className="bg - black text - white px - 4 py - 2 rounded disabled:opacity - 50">{loading ? "Submitting..." : "Register"}</button>;
          </form>;
          <div className="bg - white p - 6 rounded - lg shadow">;
            <h2 className="text - xl font - medium mb - 4">Available Endpoints</h2>;
            <ul className="list - disc ml - 6 space - y-1 text - sm">;
              <li > GET /jobs</li>;
              <li > GET /certifications</li>;
              <li > POST /verify - student</li>;
              <li > POST /redeem - grant</li>;
            </ul>;
            <div className='mt - 6'>;
              <a;
                className='text - blue - 600 underline mr - 4';
                href='/api / partners / sdk?type = rest';
              >;
                Download REST SDK;
              </a>;
              <a;
                className='text - blue - 600 underline';
                href='/api / partners / sdk?type = graphql';
              >;
                Download GraphQL SDK;
              </a>;
            </div>;
            <div className='mt - 6 text - sm text - gray - 600'>;
              <p > Badges:</p>;
              <div className='flex gap - 2 mt - 2'>;
                <span className='inline - flex items - center bg - green - 100 text - green - 800 px - 2 py - 1 rounded'>;
                  Verified Partner;
                </span>;
                <span className='inline - flex items - center bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded'>;
                  Government API Active;
                </span>              </div>            </div>;
            <div className="mt - 6 text - sm text - gray - 600">;
              <p > Badges:</p>;
              <div className="flex gap - 2 mt - 2">;
                <span className="inline - flex items - center bg - green - 100 text - green - 800 px - 2 py - 1 rounded">Verified Partner</span>;
                <span className="inline - flex items - center bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded">Government API Active</span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {result && (
          <div className='mt - 8 bg - white p - 6 rounded - lg shadow'>;
            <h3 className='text - lg font - medium mb - 2'>;
              Registration Successful;
            </h3>;
            <p className='text - sm'>Your API Key:</p>;
            <pre className='bg - gray - 100 p - 3 rounded text - xs overflow - auto'>;
              {result.api_key}
            </pre>;
            <a;
              href={result.dashboard_url}
              className='inline - block mt - 4 bg - black text - white px - 4 py - 2 rounded';
            >;
              Go to Dashboard;
            </a>          </div>          <div className="mt - 8 bg - white p - 6 rounded - lg shadow">;
            <h3 className="text - lg font - medium mb - 2">Registration Successful</h3>;
            <p className="text - sm">Your API Key:</p>;
            <pre className="bg - gray - 100 p - 3 rounded text - xs overflow - auto">{result.api_key}</pre>;
            <a href={result.dashboard_url} className="inline - block mt - 4 bg - black text - white px - 4 py - 2 rounded">Go to Dashboard</a>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

}

<<<<<<< HEAD
<<<<<<< HEAD
        )}
      </div>
    </div>
);
}

          </div>

        )}
      </div>
    </div>
  );
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
