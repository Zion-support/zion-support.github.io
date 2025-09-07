

import { FormEvent, useState } from 'react';
export default function VendorRegisterPage() {
  const [loading, setLoading] = useState($2);
  const [message, setMessage] = useState<string | null>(null),

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault($2);
    setLoading($2);
    setMessage($2);
    const form = $2;
    const formData = new FormData($2);
    const payload = $2;
    try {
      const res = await fetch($2);
          name: String($2);
          servicesOffered: String(payload.servicesOffered || '')
            .split()
            .map(s => s.trim())
            .filter($2);
          teamSize: Number($2);
          about: String($2);
          verificationDocs: String(payload.verificationDocs || '')
            .split()
            .map(s => s.trim())
            .filter($2);
          caseStudies: []})}),
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      setMessage($2);
      form.reset()
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

'
    <div className='max-w-2xl mx-auto space-y-6'>;'
      <h1 className='text-2xl font-semibold'>
        Apply to become a Vendor Partner
      </h1>;'
      <form onSubmit={onSubmit} className='space-y-4'>;'
          <label className='block text-sm mb-1'>Agency Name</label>
          <input'
            name='name'
            required'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>;'
          <label className='block text-sm mb-1'>Unique URL Slug</label>
          <input'
            name='slug'
            required'
            pattern='[a-z0-9-]+''
            className='w-full border rounded px-3 py-2 bg-transparent'
          />;'
          <p className='text-xs text-gray-500'>Example: acme-ai</p>
        </div>
        <div>;'
          <label className='block text-sm mb-1'>Services Offered</label>
          <input'
            name='servicesOffered''
            placeholder='AI prototyping, Data labeling, MLOps''
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>;'
          <label className='block text-sm mb-1'>Team Size</label>
          <input'
            name='teamSize''
            type='number'
            min={1}'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>;'
          <label className='block text-sm mb-1'>About</label>
          <textarea'
            name='about'
            rows={4}'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <div>;'
          <label className='block text-sm mb-1'>
            Verification Docs (URLs, comma-separated)
          </label>
          <input'
            name='verificationDocs''
            className='w-full border rounded px-3 py-2 bg-transparent'
          />
        </div>
        <button
          disabled={loading}'
          className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;'
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>;'
      {message && <div className='text-sm'>{message}</div>}
    <div className="max-w-2xl mx-auto space-y-6">"
      <h1 className="text-2xl font-semibold">Apply to become a Vendor Partner</h1>"
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Agency Name</label>
          <input name="name" required className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Unique URL Slug</label>
          <input name="slug" required pattern="[a-z0-9-]+" className="w-full border rounded px-3 py-2 bg-transparent" />
          <p className="text-xs text-gray-500">Example: acme-ai</p>
        </div>
        <div>
          <label className="block text-sm mb-1">Services Offered</label>
          <input name="servicesOffered" placeholder="AI prototyping, Data labeling, MLOps" className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Team Size</label>
          <input name="teamSize" type="number" min={1} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">About</label>
          <textarea name="about" rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Verification Docs (URLs, comma-separated)</label>
          <input name="verificationDocs" className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <button disabled={loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
      {message && <div className="text-sm">{message}</div>}
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
);
}
