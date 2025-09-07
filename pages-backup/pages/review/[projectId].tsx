import React from 'react';
<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import ReviewForm from '../../components/reviews/ReviewForm';
import { findProjectById } from '../../utils/dataStore';
type Props = $2;
  fromRole: 'client' | 'talent',
  fromId: string,
  valid: boolean,
  reason?: string
},

const ReviewSubmitPage: NextPage<Props> = ({ projectId, fromRole, fromId, valid, reason }) => {
  if (!valid) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-3">Review unavailable</h1>
        <p className="text-sm text-gray-600">{reason || 'You cannot submit a review for this project.'}</p>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Leave a review</h1>
      <ReviewForm initial={{ projectId, fromRole, fromId }} />
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = $2;
  const { role, fromId } = ctx.query as { role?: 'client' | 'talent', fromId?: string },

  if (!projectId || !role || !fromId) {
    return { props: { projectId: projectId || '', fromRole: role || 'client', fromId: fromId || '', valid: false, reason: 'Missing parameters' } }
  }

  const project = await findProjectById($2);
  if (!project) {
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project not found' } } as any
  }
  if (project.status !== 'Completed') {
    return { props: { projectId, fromRole: role, fromId, valid: false, reason: 'Project is not completed yet' } } as any
  }

  const expectedFromId = $2;
  const valid = $2;
  return { props: { projectId, fromRole: role, fromId, valid, reason: valid ? null : 'Invalid reviewer for this project' } } as any
},

export default ReviewSubmitPage,
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function [projectId]() {
  return (
    <Layout>
      <Head>
        <title>[ProjectId] - Zion Tech Group</title>
        <meta name="description" content="[ProjectId] solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">[ProjectId]</h1>
          <p className="text-lg text-gray-600">
            Professional [projectid] solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
