import React, { useEffect, useState } from 'react';
import { useRouter  } from 'next/router';
import Head from 'next/head',
import MilestoneForm from '../../../components/monetization/MilestoneForm',
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone  } from '../../../utils/types/milestones';
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window;
  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta
          name='description'
          content='Track project deliverables and milestone payments'
        />
      </Head>

      <div className='max-w-5xl mx-auto px-4 py-8'>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold'>Milestones</h1>
          <p className='text-sm text-gray-600'>
            Project: {projectId as string}
          </p>
        </div>

        {role !== 'talent' && (
          <div className='mb-8 p-4 rounded bg-gray-50 border'>
            <div className='flex items-center justify-between mb-3'>
              <h2 className='text-lg font-semibold'>Add Milestone</h2>
              <span className='text-xs text-gray-500'>Role: {role}</span>            </div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
        )}

        {loading && <div>Loading milestones...</div>}
        {error && <div className='text-red-600'>{error}</div>}

        {!loading && !error && (
          <div className='space-y-4'>
            {milestones.length === 0 && (
              <div className='text-gray-600'>
                No milestones yet.{' '}
                {role !== 'talent' ? 'Create the first one.' : ''}
              </div>
            )}
            {milestones.map(m => (
              <MilestoneCard
                key={m.id}
                milestone={m}
                projectId={String(projectId)}
                role={role}
                onAction={handleAction}
              />            ))}
          </div>
        )}

        <div className='mt-12 text-xs text-gray-500'>
          Integration hooks ready: on Approved &rarr; trigger payout intent; on
          Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
);
