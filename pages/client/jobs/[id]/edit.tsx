

import {useRouter} from 'next/router';


import useSWR from 'swr';



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

export default function EditJobPage() {;

=======
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function EditJobPage(req, res) {
  try {


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const router = useRouter();
  const { id } = router && router.query;
  const { data } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);
  const job = data?.job;

      setTitle(job.title || '');
      setDescription(job.description || '');
      setCategory(job.category || '')
    }

  }, [job]);
  async function save() {
    await fetch(`/api/jobs/${id}`, {

=======
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, category })});
    router.push('/client/dashboard')
  }


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
