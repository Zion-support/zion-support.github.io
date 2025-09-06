import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { TALENT_PROFILES } from '../data/talent';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function RequestToHirePage() {
  const router = useRouter();
  const { talent } = router.query as { talent?: string };
  const selected = useMemo(
    () => TALENT_PROFILES.find(t => t.slug === talent),
    [talent]
  );
<<<<<<< HEAD
=======
=======
export default function RequestToHirePage() {
  const router = useRouter();
  const { talent } = router.query as { talent?: string };
  const selected = useMemo(() => TALENT_PROFILES.find(t => t.slug === talent), [talent]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function RequestToHirePage() {
  const router = useRouter();
  const { talent } = router.query as { talent?: string };
  const selected = useMemo(() => TALENT_PROFILES.find(t => t.slug === talent), [talent]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    timeline: '',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { id: string; message: string }>(
    null
<<<<<<< HEAD
  );  const [error, setError] = useState<string | null>(null);
=======
  );
=======
    description: ''}),
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { id: string, message: string }>(null),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    description: ''}),
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { id: string, message: string }>(null),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [error, setError] = useState<string | null>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.description) {
      setError('Please fill in name, email, and description.');
<<<<<<< HEAD
      return;    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const normalizedBudget = form.budget.replace(/[^0-9.\-]/g, '');

    setSubmitting(true);
    try {
      const res = await fetch('/api/requests/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
<<<<<<< HEAD
          ...form,
=======
<<<<<<< HEAD
<<<<<<< HEAD
          ...form,
=======
          ...form;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          budget: normalizedBudget,
          talentSlug: selected?.slug || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setResult({ id: data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
<<<<<<< HEAD
      setSubmitting(false);    }
=======
<<<<<<< HEAD
      setSubmitting(false);
=======
          ...form;
          budget: normalizedBudget,
          talentSlug: selected?.slug || null})}),
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setResult({ id: data.id, message: 'Request submitted successfully.' })
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setSubmitting(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  if (result) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='max-w-xl mx-auto py-12'>
        <h1 className='text-2xl font-semibold mb-2'>Thanks!</h1>
        <p className='text-gray-600 mb-4'>
          We received your request. We will notify the appropriate team.
        </p>
        <div className='text-sm text-gray-500'>
          Confirmation ID: {result.id}
        </div>
<<<<<<< HEAD
=======
=======
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Thanks!</h1>
        <p className="text-gray-600 mb-4">We received your request. We will notify the appropriate team.</p>
        <div className="text-sm text-gray-500">Confirmation ID: {result.id}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>
    );
  }

  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-4'>
        Request to Hire{selected ? ` — ${selected.name}` : ''}
      </h1>
      <form className='space-y-4' onSubmit={onSubmit}>
        <div>
          <label className='block text-sm font-medium mb-1'>Your Name</label>
          <input
            className='w-full border rounded px-3 py-2'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            className='w-full border rounded px-3 py-2'
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Budget (USD)</label>
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='$5,000'
            value={form.budget}
            onChange={e => setForm({ ...form, budget: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Timeline</label>
          <input
            className='w-full border rounded px-3 py-2'
            placeholder='2-3 months'
            value={form.timeline}
            onChange={e => setForm({ ...form, timeline: e.target.value })}
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Project Description
          </label>
          <textarea
            className='w-full border rounded px-3 py-2'
            rows={5}
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <button
          disabled={submitting}
          className='px-4 py-2 rounded bg-black text-white'
<<<<<<< HEAD
        >          {submitting ? 'Submitting…' : 'Submit Request'}
=======
        >
=======
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Thanks!</h1>
        <p className="text-gray-600 mb-4">We received your request. We will notify the appropriate team.</p>
        <div className="text-sm text-gray-500">Confirmation ID: {result.id}</div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Request to Hire{selected ? ` — ${selected.name}` : ''}</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Your Name">Your Name</label>
          <input className="w-full border rounded px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Email">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Budget (USD)">Budget (USD)</label>
          <input className="w-full border rounded px-3 py-2" placeholder="$5,000" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Timeline">Timeline</label>
          <input className="w-full border rounded px-3 py-2" placeholder="2-3 months" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="input-Project Description">Project Description</label>
          <textarea className="w-full border rounded px-3 py-2" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={submitting} className="px-4 py-2 rounded bg-black text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={submitting} className="px-4 py-2 rounded bg-black text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {submitting ? 'Submitting…' : 'Submit Request'}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </button>
      </form>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
