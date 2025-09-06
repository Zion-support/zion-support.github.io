

<<<<<<< HEAD
import useSWR from 'swr';

import {useEffect, useState} from 'react';
const fetcher = (url: string) => fetch(url).then(r => r.json());




=======
import {useRouter} from 'next/router';


import useSWR from 'swr';



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

export default function EditJobPage() {;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;
<<<<<<< HEAD


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  useEffect(() => {
    if (job) {
      setTitle(job.title |'');
      setDescription(job.description |'');
      setCategory(job.category |'');    }

=======

      setTitle(job.title || '');
      setDescription(job.description || '');
      setCategory(job.category || '')
    }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }, [job]);
  async function save() {
    await fetch(`/api/jobs/${id}`, {

<<<<<<< HEAD



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
  }


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!job) return <div>Loading…</div>,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

=======
      body: JSON && JSON.stringify({ title, description, category }),;
    });
    router && router.push('/client/dashboard');  }
  if (!job) return <div>Loading…</div>;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
