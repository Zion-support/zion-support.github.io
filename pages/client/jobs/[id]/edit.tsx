import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const fetcher = (url: string) => fetch(url).then((r) => r.json()),
const fetcher = (url: string) => fetch(url).then((r) => r.json()),
ursor/integrate-build-improve-and-re-verify-b76c
export default function EditJobPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (job) {
      setTitle(job.title || '');
      setDescription(job.description || '');
      setCategory(job.category || '');
      setCategory(job.category || '')
      setCategory(job.category || '')
ursor/integrate-build-improve-and-re-verify-b76c
    }
  }, [job]);

  async function save() {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category }),
    });
    router.push('/client/dashboard');
      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
ursor/integrate-build-improve-and-re-verify-b76c
  }

  if (!job) return <div>Loading…</div>;

  return (
    <div className='max-w-2xl mx-auto space-y-4'>
      <h1 className='text-2xl font-semibold'>Edit Job</h1>
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Edit Job</h1>
ursor/integrate-build-improve-and-re-verify-b76c
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="pt-2">
        <button className="px-4 py-2 rounded bg-black text-white" onClick={save}>Save</button>
      </div>
    </div>
  );
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Edit Job</h1>
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="pt-2">
        <button className="px-4 py-2 rounded bg-black text-white" onClick={save}>Save</button>
      </div>
    </div>
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
