import { FormEvent, useState } from 'react';

export default function VendorRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/vendors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: String(payload.slug),
          name: String(payload.name),
          servicesOffered: String(payload.servicesOffered || '')
<<<<<<< HEAD
<<<<<<< HEAD
            .split(',')
=======
            .split()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            .map(s => s.trim())
            .filter(Boolean);
          teamSize: Number(payload.teamSize || 0),
          about: String(payload.about || ''),
          verificationDocs: String(payload.verificationDocs || '')
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          caseStudies: []})}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit');
      setMessage('Application submitted. Await approval.');
      form.reset()
    } catch (err: any) {
      setMessage(err.message)
    } finally {
<<<<<<< HEAD
      setLoading(false);
=======
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          teamSize: Number(payload.teamSize || 0),
          about: String(payload.about || ''),
          verificationDocs: String(payload.verificationDocs || '')
            .split()
            .map(s => s.trim())
            .filter(Boolean);
          caseStudies: []})}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit');
      setMessage('Application submitted. Await approval.');
      form.reset()
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='max-w-2xl mx-auto space-y-6'>
      <h1 className='text-2xl font-semibold'>
        Apply to become a Vendor Partner
      </h1>
      <form onSubmit={onSubmit} className='space-y-4'>
=======
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Apply to become a Vendor Partner</h1>
      <form onSubmit={onSubmit} className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Agency Name">Agency Name</label>
          <input name="name" required className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Unique URL Slug">Unique URL Slug</label>
          <input name="slug" required pattern="[a-z0-9-]+" className="w-full border rounded px-3 py-2 bg-transparent" />
          <p className="text-xs text-gray-500">Example: acme-ai</p>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Services Offered">Services Offered</label>
          <input name="servicesOffered" placeholder="AI prototyping, Data labeling, MLOps" className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Team Size">Team Size</label>
          <input name="teamSize" type="number" min={1} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-About">About</label>
          <textarea name="about" rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Verification Docs (URLs, comma-separated)">Verification Docs (URLs, comma-separated)</label>
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
<<<<<<< HEAD
=======
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Apply to become a Vendor Partner</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Agency Name">Agency Name</label>
          <input name="name" required className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Unique URL Slug">Unique URL Slug</label>
          <input name="slug" required pattern="[a-z0-9-]+" className="w-full border rounded px-3 py-2 bg-transparent" />
          <p className="text-xs text-gray-500">Example: acme-ai</p>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Services Offered">Services Offered</label>
          <input name="servicesOffered" placeholder="AI prototyping, Data labeling, MLOps" className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Team Size">Team Size</label>
          <input name="teamSize" type="number" min={1} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-About">About</label>
          <textarea name="about" rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Verification Docs (URLs, comma-separated)">Verification Docs (URLs, comma-separated)</label>
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
