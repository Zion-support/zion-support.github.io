<<<<<<< HEAD
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

=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../../components/layout/Layout';

export default function ClientJobsIdEdit() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Edit Job - Zion Tech Group</title>
        <meta name="description" content="Edit Job solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Edit Job</h1>
          <p className="text-lg text-gray-600">
            Professional edit job solutions tailored to your business needs.
          </p>
        </div>
      </div>
<<<<<<< HEAD
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
=======
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}