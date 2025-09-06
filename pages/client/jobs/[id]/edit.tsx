import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = $2;
export default function EditJobPage() {
  const router = useRouter($2);
  const { id } = router.query,
  const { data } = useSWR($2);
  const job = $2;
  const [title, setTitle] = useState($2);
  const [description, setDescription] = useState($2);
  const [category, setCategory] = useState($2);
  useEffect(() => {
    if (job) {
      setTitle($2);
      setDescription($2);
      setCategory(job.category || '')
    }
  }, [job]),

  async function save() {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })}),
    router.push('/client/dashboard')
  }

  if (!job) return <div>Loading…</div>,

  return (
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