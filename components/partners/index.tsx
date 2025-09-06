<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import Head from "next/head";
import { useState } from 'react';
import Head from 'next/head';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    name: "";
    entityType: "";
    pocName: "";
    pocEmail: "";
    useCaseType: "Education Partnership"});
  const [result, setResult] = useState<any>(null),
origin/cursor/automate-test-improve-and-merge-code-2533
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = null;
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
<<<<<<< HEAD
              value={form && form.useCaseType}
              onChange={e => setForm({ ...form, useCaseType: e && e.target.value })}
            >              <option>Education Partnership</option>    const data = await res && res.json();
    setLoading(false);
<<<<<<< HEAD

    setResult(data);

  }
  return (

              <option>Education Partnership</option>
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>

=======
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify ({
        name: form.name,
        entity_type: form.entity_type,
        useCaseType: form.useCaseType,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              value={form.useCaseType}
              onChange={e => setForm({ ...form, useCaseType: e.target.value })}
            >
    setResult(data)
  }
  return (
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
            <ul className='list-disc ml-6 space-y-1 text-sm'>
              <li>POST /talents</li>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<div className='mt-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='mt-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              <a
                className='text-blue-600 underline mr-4'
                href='/api/partners/sdk?type=rest'>;
                Download REST SDK;
              </a>;
              <a
                className='text-blue-600 underline'
                href='/api/partners/sdk?type=graphql'
              >
                Download GraphQL SDK
              </a>
            </div>
            <div className='mt-6 text-sm text-gray-600'>
              <p>Badges:</p>
              <div className='flex gap-2 mt-2'>
                <span className='inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded'>
                  Verified Partner
                </span>
                <span className='inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded'>
                  Government API Active
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

=======
        {result && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>
            <p className="text-sm">Your API Key:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}

      </div>;
    </div>;
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
        )}
  );
}
    <div className="min - h-screen bg - gray - 50 text-gray-900">;
      <Head>;
        <title > Zion Partners</title>;
      </Head>;
      <div className="max - w-4xl mx - auto py-12 px-4">;
        <h1 className="text - 3xl font-semibold mb-2">Integrate Zion</h1>;
        <p className="text - gray-600 mb-8">Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>;
        <div className="grid md:grid - cols-2 gap-8">;
          <form on_submit={submit} className="bg - white p-6 rounded-lg shadow">;
            <h2 className="text - xl font-medium mb-4">Partner Registration</h2>;
            <label className="block text-sm mb-2" html_for="input - Name">Name</label>;
            <input className="w - full border rounded px - 3 py-2 mb-4" value={form.name} on_change={(e) => set_form ({ ...form, name: e.target.value })} required />;
            <label className="block text-sm mb-2" html_for="input - Entity Type">Entity Type</label>;
            <input className="w - full border rounded px - 3 py-2 mb-4" value={form.entity_type} on_change={(e) => set_form ({ ...form, entity_type: e.target.value })} required />;
            <label className="block text-sm mb-2" html_for="input - Point of Contact">Point of Contact</label>;
            <div className="grid grid - cols - 2 gap-3 mb-4">;
              <input placeholder="Name" className="border rounded px-3 py-2" value={form.poc_name} on_change={(e) => set_form ({ ...form, poc_name: e.target.value })} required />;
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form.poc_email} on_change={(e) => set_form ({ ...form, poc_email: e.target.value })} required />;
            </div>;
            <label className="block text-sm mb-2" html_for="input - Use Case">Use Case</label>;
            <select className="w - full border rounded px - 3 py-2 mb-6" value={form.useCaseType} on_change={(e) => set_form ({ ...form, useCaseType: e.target.value })}>;
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
            <ul className='list - disc ml - 6 space - y-1 text - sm'>              <li > POST /talents</li>            <button disabled={loading} className="bg - black text - white px - 4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>;
          </form>;
          <div className="bg - white p-6 rounded-lg shadow">;
            <h2 className="text - xl font-medium mb-4">Available Endpoints</h2>;
            <ul className="list - disc ml - 6 space-y-1 text-sm">;
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
            <div className="mt - 6 text - sm text-gray-600">;
              <p > Badges:</p>;
              <div className="flex gap-2 mt-2">;
                <span className="inline - flex items - center bg - green - 100 text - green - 800 px-2 py-1 rounded">Verified Partner</span>;
                <span className="inline - flex items - center bg - blue - 100 text - blue - 800 px-2 py-1 rounded">Government API Active</span>;
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
            </a>          </div>          <div className="mt - 8 bg - white p-6 rounded-lg shadow">;
            <h3 className="text - lg font-medium mb-2">Registration Successful</h3>;
            <p className="text-sm">Your API Key:</p>;
            <pre className="bg - gray - 100 p - 3 rounded text-xs overflow-auto">{result.api_key}</pre>;
            <a href={result.dashboard_url} className="inline - block mt - 4 bg - black text - white px-4 py-2 rounded">Go to Dashboard</a>)}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );

}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
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
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
