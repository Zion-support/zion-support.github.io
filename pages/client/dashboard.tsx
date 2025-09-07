<<<<<<< HEAD
import useSWR from 'swr';
import Link from 'next/link';
const fetcher = $2;
export default function ClientDashboard() {
  const { data, error, mutate } = useSWR($2);
  if (error) return <div className = $2;
  if (!data) return <div>Loading…</div>,

  const jobs = $2;
  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })}),
    mutate()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Jobs</h1>
        <Link href="/post-job"><a className="px-3 py-2 rounded bg-black text-white text-sm">Post New Job</a></Link>
      </div>
      <div className="grid gap-4">
        {jobs.length === 0 && <p className="text-sm text-gray-600">No jobs yet.</p>}
        {jobs.map((job) => (
          <div key={job.id} className="border rounded p-4 shadow-sm bg-white dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">{job.title}</h2>
                <p className="text-xs text-gray-500 mt-1">Category: {job.category} • Status: {job.status}</p>
                {job.requiredSkills?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.requiredSkills.map((s: string) => (
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Link href={`/client/jobs/${job.id}/applicants`}><a className="px-2 py-1 text-sm border rounded">View Applicants</a></Link>
                <Link href={`/client/jobs/${job.id}/edit`}><a className="px-2 py-1 text-sm border rounded">Edit Job</a></Link>
                <button className="px-2 py-1 text-sm border rounded" onClick={() => closeJob(job.id)}>Close Job</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard - Zion Tech Group</title>
        <meta name="description" content="Dashboard solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Professional dashboard solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}