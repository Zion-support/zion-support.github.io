
import { useRouter  } from 'next/router';
import {useRouter} from 'next/router';

import useSWR from 'swr';

import {useEffect, useState} from 'react';
const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function EditJobPage() {
export default function EditJobPage() {;

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;

  useEffect(() => {
    if (job) {
      setTitle(job.title |'');
      setDescription(job.description |'');
      setCategory(job.category |'');    }

  }, [job]);
  async function save() {
    await fetch(`/api/jobs/${id}`, {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {;
    if (job) {;
      setTitle(job && job.title || '');
      setDescription(job && job.description || '');
      setCategory(job && job.category || '');    }
  }, [job]);

  async function save() {;
    await fetch(`/api/jobs/${id}`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;

      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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

);





  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  if (!job) return <div>Loading…</div>;


  return (




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


      body: JSON && JSON.stringify({ title, description, category }),;
    });
    router && router.push('/client/dashboard');  }
  if (!job) return <div>Loading…</div>;


  return (




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



