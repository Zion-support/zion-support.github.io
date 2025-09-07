<<<<<<< HEAD
name: \"\";"
    entityType: \"\";"
    pocName: \"\";"
    pocEmail: \"\";"
    useCaseType: \"Education Partnership
});

const [result, setResult] = useState<any />(null),
  const [loading, setLoading] = useState(false);
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

    "name": "";"
    "entityType": "";"
    "pocName": "";"
    "pocEmail": "";"
    "useCaseType": "Education Partnership,"
});

const [result, setResult] = useState<any>(null),;
  const [loading, setLoading] = useState(false);
  async function submit() {
    }
    e.preventDefault();
    setLoading(true);
    setResult(null);
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
return (;
    <div className='min-h-screen bg-gray-50 text-gray-900'>;'

      <Head>;
        <title />Zion Partners</title>;
      </Head>;
      <div className='max-w-4xl mx-auto py-12 px-4'>;'
        <h1 className='text-3xl font-semibold mb-2'>Integrate Zion</h1>;'
        <p className='text-gray-600 mb-8'>;'
          Trusted institutions can embed Zion into platforms, programs, or;
          marketplaces.;
        </p>;
        <div className='grid "md":grid-cols-2 gap-8'>;'
          <form onSubmit={submit} className='bg-white p-6 rounded-lg shadow'>;'
            <h2 className='text-xl font-medium mb-4'>Partner Registration</h2>;'
            <label className='block text-sm mb-2'>Name</label>;'
            <input;
              className='w-full border rounded px-3 py-2 mb-4';'
              value={form && form.name}
              onChange={e => setForm({ ...form, "name": e && e.target.value }
}
              required;
            />;
            <label className='block text-sm mb-2'>Entity Type</label>;'
            <input;
              className='w-full border rounded px-3 py-2 mb-4';'
              value={form && form.entityType}
              onChange={e => setForm({ ...form, "entityType": e && e.target.value }
}
              required;
            />;
            <label className='block text-sm mb-2'>Point of Contact</label>;'
            <div className='grid grid-cols-2 gap-3 mb-4'>;'
              <input;
                placeholder='Name';'
                className='border rounded px-3 py-2';'
                value={form && form.pocName}
                onChange={e => setForm({ ...form, "pocName": e && e.target.value }
}
                required;
              />;
              <input;
                placeholder='Email';'
                type='email';'
                className='border rounded px-3 py-2';'
                value={form && form.pocEmail}
                onChange={e => setForm({ ...form, "pocEmail": e && e.target.value }
}
                required;
              />;
            </div>;
            <label className='block text-sm mb-2'>Use Case</label>;'

            <select,
className='w-full border rounded px-3 py-2 mb-6''

            <select;
className='w-full border rounded px-3 py-2 mb-6'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              value={form.useCaseType}

              onChange={e => setForm({ ...form, "useCaseType": e.target.value }
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            >;
    setResult(data)}
  return (<div className="min-h-screen bg-gray-50 text-gray-900">;"
      <Head>;
        <title>Zion Partners</title>;
      </Head>;
      <div className="max-w-4xl mx-auto py-12 px-4">;"
        <h1 className="text-3xl font-semibold mb-2">Integrate Zion</h1>;"
        <p className="text-gray-600 mb-8">Trusted institutions can embed Zion into platforms, programs, or marketplaces.</p>;"
        <div className="grid "md":grid-cols-2 gap-8">;"
          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">;"
            <h2 className="text-xl font-medium mb-4">Partner Registration</h2>;"
            <label className="block text-sm mb-2" htmlFor="input-Name">Name</label>;"
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.name} onChange={(e) => setForm({ ...form, "name": e.target.value },"
} required />;
            <label className="block text-sm mb-2" htmlFor="input-Entity Type">Entity Type</label>;"
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.entityType} onChange={(e) => setForm({ ...form, "entityType": e.target.value },"
} required />;
            <label className="block text-sm mb-2" htmlFor="input-Point of Contact">Point of Contact</label>;"
            <div className="grid grid-cols-2 gap-3 mb-4">;"
              <input placeholder="Name" className="border rounded px-3 py-2" value={form.pocName} onChange={(e) => setForm({ ...form, "pocName": e.target.value },"
} required />;
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form.pocEmail} onChange={(e) => setForm({ ...form, "pocEmail": e.target.value },"
} required />;
            </div>;
            <label className="block text-sm mb-2" htmlFor="input-Use Case">Use Case</label>;"
            <select className="w-full border rounded px-3 py-2 mb-6" value={form.useCaseType} onChange={(e) => setForm({ ...form, "useCaseType": e.target.value },"
}>;
              <option />Education Partnership</option>;
              <option />Workforce Development</option>;
              <option />Token Integration</option>;
              <option />Custom Marketplace Instance</option>;
            </select>;
<button;
              disabled={loading}
              className='bg-black text-white px-4 py-2 rounded "disabled": opacity-50'>'

              {loading ? 'Submitting...' : 'Register,'
}

            </button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
import { useState } from "react";
import Head from "next/head";
export default function Partners() {
  const [form, setForm] = useState($2);
  const [result, setResult] = useState<any>(null),
  const [loading, setLoading] = useState($2);
  async function submit(e: React.FormEvent) {
    e.preventDefault($2);
    setLoading($2);
    setResult($2);
    const res = await fetch("/api/partners/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.pocName, email: form.pocEmail }})}),
    const data = await res.json($2);
    setLoading($2);
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
            <label className="block text-sm mb-2">Name</label>
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <label className="block text-sm mb-2">Entity Type</label>
            <input className="w-full border rounded px-3 py-2 mb-4" value={form.entityType} onChange={(e) => setForm({ ...form, entityType: e.target.value })} required />
            <label className="block text-sm mb-2">Point of Contact</label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input placeholder="Name" className="border rounded px-3 py-2" value={form.pocName} onChange={(e) => setForm({ ...form, pocName: e.target.value })} required />
              <input placeholder="Email" type="email" className="border rounded px-3 py-2" value={form.pocEmail} onChange={(e) => setForm({ ...form, pocEmail: e.target.value })} required />
            </div>
            <label className="block text-sm mb-2">Use Case</label>
            <select className="w-full border rounded px-3 py-2 mb-6" value={form.useCaseType} onChange={(e) => setForm({ ...form, useCaseType: e.target.value })}>
              <option>Education Partnership</option>
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>
            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">{loading ? "Submitting..." : "Register"}</button>
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </form>
          <div className='bg-white p-6 rounded-lg shadow'>'
            <h2 className='text-xl font-medium mb-4'>Available Endpoints</h2>'
            <ul className='list-disc ml-6 space-y-1 text-sm'>'
              <li>POST /talents</li>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
<<<<<<< HEAD
=======
            </ul>
<<<<<<< HEAD
<div className='mt-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <a
                className='text-blue-600 underline mr-4'
=======
              <a'
                className='text-blue-600 underline mr-4''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                href='/api/partners/sdk?type=rest'>;
                Download REST SDK;
              </a>;
<<<<<<< HEAD
              <a'
                className='text-blue-600 underline'"
=======
              <a
                className='text-blue-600 underline'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <div className="mt-6 text-sm text-gray-600">
              <p>Badges:</p>"
              <div className="flex gap-2 mt-2">"
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">Verified Partner</span>"
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">Government API Active</span>
<<<<<<< HEAD
=======
          <div className='bg-white p-6 rounded-lg shadow' />
            <h2 className='text-xl font-medium mb-4' />Available Endpoints</h2>
            <ul className='list-disc ml-6 space-y-1 text-sm' />
              <li />POST /talents</li>
              <li />GET /jobs</li>
              <li />GET /certifications</li>
              <li />POST /verify-student</li>
              <li />POST /redeem-grant</li>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </ul>

<div className='mt-6'>'
              <a,
className='text-blue-600 underline mr-4''
                href='/api/partners/sdk?type=rest'>;'
                Download REST SDK;
              </a>;
              <a,
className='text-blue-600 underline''

                href='/api/partners/sdk?type=graphql''
              >
                Download GraphQL SDK
              </a>
            </div>
            <div className='mt-6 text-sm text-gray-600'>'
              <p>"Badges": </p>
              <div className='flex gap-2 mt-2'>'
                <span className='inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded'>'
                  Verified Partner
                </span>
                <span className='inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded'>'
                  Government API Active
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
            </button>;
          </form>;
          <div className='bg-white p-6 rounded-lg shadow'>;
            <h2 className='text-xl font-medium mb-4'>Available Endpoints</h2>;
            <ul className='list-disc ml-6 space-y-1 text-sm'>;
              <li>POST /talents</li>;
              <li>GET /jobs</li>;
              <li>GET /certifications</li>;
              <li>POST /verify-student</li>;
              <li>POST /redeem-grant</li>;
            </ul>;
<div className='mt-6'>;
              <a;
                className='text-blue-600 underline mr-4';
                href='/api/partners/sdk?type=rest'>;
                Download REST SDK;
              </a>;
              <a;
                className='text-blue-600 underline';
            <div className="mt-6 text-sm text-gray-600">;
              <p>Badges:</p>;
              <div className="flex gap-2 mt-2">;
                <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">Verified Partner</span>;
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">Government API Active</span>;
                href='/api/partners/sdk?type=graphql';
              >;
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
                </span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {result && (<a;
            <a
              href={result && result.dashboardUrl}
              className='inline-block mt-4 bg-black text-white px-4 py-2 rounded'>;
              Go to Dashboard;
            </a>          </div>          <div className="mt-8 bg-white p-6 rounded-lg shadow">;
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>;
            <p className="text-sm">Your API Key:</p>;
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result && result.apiKey}</pre>;
            <a href={result && result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>;
          <div className="mt-8 bg-white p-6 rounded-lg shadow">;
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>;
            <p className="text-sm">Your API Key:</p>;
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>;
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>;
})}</div>;
    </div>;
  )}
        )}
  )}
=======
        {result && (
<<<<<<< HEAD
            <a;
              href={result && result.dashboardUrl}'
=======
            <a
              href={result && result.dashboardUrl}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className='inline-block mt-4 bg-black text-white px-4 py-2 rounded'>;
              Go to Dashboard;"
            </a>          </div>          <div className="mt-8 bg-white p-6 rounded-lg shadow">;"
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>;"
            <p className="text-sm">Your API Key:</p>;"
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result && result.apiKey}</pre>;"
            <a href={result && result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>;"
          <div className="mt-8 bg-white p-6 rounded-lg shadow">"
            <h3 className="text-lg font-medium mb-2">Registration Successful</h3>"
            <p className="text-sm">Your API Key:</p>"
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{result.apiKey}</pre>"
            <a href={result.dashboardUrl} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Go to Dashboard</a>
}

<div className='mt-8 bg-white p-6 rounded-lg shadow'>'
            <h3 className='text-lg font-medium mb-2'>'
              }
              Registration Successful
            </h3>
            <p className='text-sm'>Your API "Key":</p>'
            <pre className='bg-gray-100 p-3 rounded text-xs overflow-auto'>'

              {result.apiKe
}
            </pre>;
            <a;
              href={result.dashboardUrl}
              className='inline-block mt-4 bg-black text-white px-4 py-2 rounded'>'

              Go to Dashboard;
            </a>;
          </div>;
        )}
      </div>;
    </div>;
  )}
    </div>);
}
  );

}

  )}

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
  )
}
<<<<<<< HEAD
=======
        )}

      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

"
=======
const [result, setResult] = useState<any> (null)
const [loading, setLoading] = useState (false)
async function submit (e: React.FormEvent) {
  e.preventDefault ()
setLoading (true)
setResult (null)
<option>Education Partnership</option> <option>Workforce Development</option> <option>Token Integration</option> <option>Custom Marketplace Instance</option> </select> </form> <div className="bg-white p-6 rounded-lg shadow" > <h2 className="text-xl font-medium mb-4" >Available Endpoints</h2> <ul className="list-disc ml-6 space-y-1 text-sm" > <li>POST /talents</li> <li>GET /jobs</li> <li>GET /certifications</li> <li>POST /verify-student</li> <li>POST /redeem-grant</li> </ul> <div className="mt-6" > <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest" >Download REST SDK</a> <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql" >Download GraphQL SDK</a> </div> <div className="mt-6 text-sm text-gray-600" > <p>Badges:</p> <div className="flex gap-2 mt-2" > <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded" >Verified Partner</span> <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded" >Government API Active</span> </div> </div> </div> </div> </div>) 
}</div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
