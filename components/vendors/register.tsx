
import {FormEvent, useState} from 'react';
import {FormEvent, useState} from 'react';

=======
=======

export default function VendorRegisterPage() {;
=======

import {FormEvent, useState} from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const form = e && e.currentTarget;
    const formData = new FormData(form);
    const payload = Object && Object.fromEntries(formData && formData.entries()),;
    try {;
      const res = await fetch('/api/vendors/register', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          slug: String(payload && payload.slug),;
          name: String(payload && payload.name),;
          servicesOffered: String(payload && payload.servicesOffered || '');
            .split(',');
            .map(s => s && s.trim());
            .filter(Boolean),;
          teamSize: Number(payload && payload.teamSize || 0),;
          about: String(payload && payload.about || ''),;
          verificationDocs: String(payload && payload.verificationDocs || '');
            .split(',');
            .map(s => s && s.trim());
            .filter(Boolean),;
          caseStudies: [],;
        }),;
      });
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Failed to submit');
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          slug: String(payload.slug),
          name: String(payload.name),
          servicesOffered: String(payload.servicesOffered || '')
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          teamSize: Number(payload.teamSize || 0),
          about: String(payload.about || ''),
          verificationDocs: String(payload.verificationDocs || '')
            .split()
export default function VendorRegisterPage() {
export default function VendorRegisterPage() {;
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/vendors/register', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          slug: String(payload.slug)
          name: String(payload.name)
          servicesOffered: String(payload.servicesOffered |'')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
          teamSize: Number(payload.teamSize |0)
          about: String(payload.about |'')
          verificationDocs: String(payload.verificationDocs |'')
            .split(',')
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            .map(s => s.trim())
            .filter(Boolean)
          caseStudies: []
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit');
      setMessage('Application submitted. Await approval.');
      form && form.reset();
    } catch (err: any) {;
      setMessage(err && err.message);
    } finally {;
      setLoading(false);    }
  }


  return (



      form.reset()
  return (

  return (            .map(s => s.trim())
            .filter(Boolean);
          teamSize: Number(payload.teamSize |0)
          about: String(payload.about |'')
          verificationDocs: String(payload.verificationDocs |'')
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          caseStudies: []})})
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Failed to submit');
      setMessage('Application submitted. Await approval.');
  );
}
      set_loading (false);
    }
  }
  return (
    <div className='max - w-2xl mx - auto space - y-6'>;
      <h1 className='text - 2xl font - semibold'>;
        Apply to become a Vendor Partner;
      </h1>;
      <form on_submit={on_submit} className='space - y-4'>;
          <label className='block text - sm mb - 1'>Agency Name</label>;
          <input;
            name='name';
            required;
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>Unique URL Slug</label>;
          <input;
            name='slug';
            required;
            pattern='[a - z0 - 9-]+';
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
          <p className='text - xs text - gray - 500'>Example: acme - ai</p>;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>Services Offered</label>;
          <input;
            name='services_offered';
            placeholder='AI prototyping, Data labeling, MLOps';
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>Team Size</label>;
          <input;
            name='team_size';
            type='number';
            min={1}
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>About</label>;
          <textarea;
            name='about';
            rows={4}
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>;
            Verification Docs (URLs, comma - separated);
          </label>;
          <input;
            name='verification_docs';
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
        </div>;
        <button;
          disabled={loading}
          className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black';
        >;
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>;
      </form>;
      {message && <div className='text - sm'>{message}</div>}
      <div className='text - center text - xs text - gray - 500'>Powered by Zion</div>;
    </div>);
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Agency Name</label>
          <input name=&quot;name&quot; required className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Unique URL Slug</label>
          <input name=&quot;slug&quot; required pattern=&quot;[a-z0-9-]+&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
          <p className=&quot;text-xs text-gray-500&quot;>Example: acme-ai</p>
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Services Offered</label>
          <input name=&quot;servicesOffered&quot; placeholder=&quot;AI prototyping, Data labeling, MLOps&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Team Size</label>
          <input name=&quot;teamSize&quot; type=&quot;number&quot; min={1} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>About</label>
          <textarea name=&quot;about&quot; rows={4} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Verification Docs (URLs, comma-separated)</label>
          <input name=&quot;verificationDocs&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <button disabled={loading} className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
      {message && <div className=&quot;text-sm&quot;>{message}</div>}
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  )

}



  return (
    <div className='max-w-2xl mx-auto space-y-6'>
      <h1 className='text-2xl font-semibold'>
        Apply to become a Vendor Partner
      </h1>
      <form onSubmit={onSubmit} className='space-y-4'>
          <label className='block text-sm mb-1'>Agency Name</label>
          <input
            name='name'
            required
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Unique URL Slug</label>
          <input
            name='slug'
            required
            pattern='[a-z0-9-]+'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
          <p className='text-xs text-gray-500'>Example: acme-ai</p>
        </div>
        <div>
          <label className='block text-sm mb-1'>Services Offered</label>
          <input
            name='servicesOffered'
            placeholder='AI prototyping, Data labeling, MLOps'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Team Size</label>
          <input
            name='teamSize'
            type='number'
            min={1}
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>About</label>
          <textarea
            name='about'
            rows={4}
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>
            Verification Docs (URLs, comma-separated)
          </label>
          <input
            name='verificationDocs'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <button
          disabled={loading}
          className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
      {message && <div className='text-sm'>{message}</div>}
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
);
}

    }
  }

  return (
  return (
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
