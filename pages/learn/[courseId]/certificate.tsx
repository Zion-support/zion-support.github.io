<<<<<<< HEAD
import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter($2);
  const { courseId } = router.query as { courseId: string},
  if (!courseId) return null,
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function LearnCourseIdCertificate() {
  return (
    <Layout>
      <Head>
        <title>Learn Course Certificate - Zion Tech Group</title>
        <meta name="description" content="Learn Course Certificate solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Learn Course Certificate</h1>
          <p className="text-lg text-gray-600">
            Professional learn course certificate solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}