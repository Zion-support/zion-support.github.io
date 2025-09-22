:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import {useRouter} from 'next/router';
import useSWR from 'swr';

import {useEffect, useState} from 'react';
import { useEffect, useState } from 'react';
const fetcher = null;
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/client/jobs/[id]/edit.tsx
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function EditJobPage() {
export default function EditJobPage() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export default function EditJobPage() { return null; }
import { useRouter } from 'next/router';'
import useSWR from 'swr';'
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {}
  try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
  const router = useRouter();
  const { id } = router && router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;

:pages_backup/client/jobs/[id]/edit.tsx

      setTitle(job.title || '');
      setDescription(job.description || '');
=======

'
      setTitle(job.title || '');'
      setDescription(job.description || '');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
      setCategory(job.category || '')
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [job]);
:pages_backup/client/jobs/[id]/edit.tsx
  async function save() {
    await fetch(`/api/jobs/${id}`, {

const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
      method: 'PATCH',
=======
  async function save() {}`
    await fetch(`/api/jobs/${id}`, {}
'
      method: 'PATCH','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })});'
    router.push('/client/dashboard')
  }

:pages_backup/client/jobs/[id]/edit.tsx
  async function save() {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
  useEffect(() => {;
    if (job) {;'
      setTitle(job && job.title || '');'
      setDescription(job && job.description || '');'
      setCategory(job && job.category || '');    }
  }, [job]);

  async function save() { return null; }`
    await fetch(`/api/jobs/${id}`, {;'
      method: 'PATCH',;'
      headers: { 'Content-Type': 'application/json' },;
body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard');
    } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
      body: JSON && JSON.stringify({ title, description, category }),;
    });'
    router && router.push('/client/dashboard');  }

  if (!job) return <div>Loading…</div>;

  return (

'
import {use_router} from 'next / router';

'
import { useRouter  } from 'next/router';'
import {useRouter} from 'next/router';'
import useSWR from 'swr';
'
import {useEffect, useState} from 'react';
=======
import { useRouter  } from 'next/router';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = null;
:pages/client/jobs/[id]/edit.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function EditJobPage() {};
export default function EditJobPage() { return null; }
import {useRouter} from 'next/router';

'
import useSWR from 'swr';

export default function EditJobPage() { return null; }
import { useRouter } from 'next/router';'
import useSWR from 'swr';'
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {}
  try {};
  const router = useRouter();
  const { id } = router.query;`
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;'
  const [title, setTitle] = useState('');'
  const [description, setDescription] = useState('');'
  const [category, setCategory] = useState('');
:pages_backup/client/jobs/[id]/edit.tsx
  useEffect(() => {
    if (job) {
<<<<<<< HEAD
      setTitle(job.title |'');
      setDescription(job.description |'');
      setCategory(job.category |'');    }
'
      setTitle(job.title || '');'
      setDescription(job.description || '');'
      setCategory(job.category || '')
    }

  }, [job]);
  async function save() {}`
    await fetch(`/api/jobs/${id}`, {}
'
      method: 'PATCH','
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })});'
    router.push('/client/dashboard')
  }

  useEffect(() => {;
    if (job) {;'
      setTitle(job && job.title || '');'
      setDescription(job && job.description || '');'
      setCategory(job && job.category || '');    }
  }, [job]);

  async function save() { return null; }`
    await fetch(`/api/jobs/${id}`, {;'
      method: 'PATCH',;'
      headers: { 'Content-Type': 'application/json' },;
  return ("
    <div className="max-w-2xl mx-auto space-y-4">"
      <h1 className="text-2xl font-semibold">Edit Job</h1>
:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/client/jobs/[id]/edit.tsx
      setTitle(job.title || '');
      setDescription(job.description || '');
setCategory(job.category || '');
    }
  }, [job]);
  async function save() {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title, description, category }),
    });
    router.push('/client/dashboard');
  }

  if (!job) return <div>Loading…</div>;
  return (
<div className='max-w-2xl mx-auto space-y-4'>
      <h1 className='text-2xl font-semibold'>Edit Job</h1>
:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD:pages/client/jobs/[id]/edit.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/client/jobs/[id]/edit.tsx
      <div>
        <label className="block text-sm font-medium">Title</label>
=======
      <div>"
        <label className="block text-sm font-medium">Title</label>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
        <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>"
        <label className="block text-sm font-medium">Description</label>"
        <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>"
        <label className="block text-sm font-medium">Category</label>"
        <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>"
      <div className="pt-2">"
        <button className="px-4 py-2 rounded bg-black text-white" onClick={save}>Save</button>
      </div>
    </div>
:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD:pages/client/jobs/[id]/edit.tsx
<<<<<<< HEAD

  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  if (!job) return <div>Loading…</div>;

  return (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/client/jobs/[id]/edit.tsx
      body: JSON && JSON.stringify({ title, description, category }),;
    });'
    router && router.push('/client/dashboard');  }

  if (!job) return <div>Loading…</div>;

  return (

  return (

:pages_backup/client/jobs/[id]/edit.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/client/jobs/[id]/edit.tsx
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/client/jobs/[id]/edit.tsx
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/client/jobs/[id]/edit.tsx
