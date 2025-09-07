<<<<<<< HEAD
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { TALENT_PROFILES } from '../../../../data/talent';
import Link from 'next/link';
const fetcher = $2;
export default function JobApplicantsPage() {
  const router = useRouter($2);
  const { id } = router.query,
  const { data: appsData} = useSWR($2);
  const { data: jobData} = useSWR($2);
  const job = $2;
  const applications = $2;
  return (
    <div className = $2;
          return (
            <div key={a.id} className="border rounded p-4 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{talent?.name || a.talentSlug}</p>
                  <p className="text-xs text-gray-500">Status: {a.status} • Applied: {new Date(a.createdAtIso).toLocaleString()}</p>
                </div>
                <button className="px-2 py-1 text-sm border rounded">Message</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../../components/layout/Layout';

export default function ClientJobsIdApplicants() {
  return (
    <Layout>
      <Head>
        <title>Job Applicants - Zion Tech Group</title>
        <meta name="description" content="Job Applicants solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Applicants</h1>
          <p className="text-lg text-gray-600">
            Professional job applicants solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}