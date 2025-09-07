import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone } from '../../../utils/types/milestones';
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window = $2;
  const url = new URL($2);
  const r = url.searchParams.get($2);
  if (r = $2;
  return 'client'
}

export default function ProjectMilestonesPage() {
  const router = useRouter($2);
  const { 'project-id': projectId } = router.query as any,

  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() => getRoleFromEnvOrQuery()),
  const [milestones, setMilestones] = useState<Milestone[]>([]),
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    setRole(getRoleFromEnvOrQuery())
  }, []),

  // Demo cookie-based auth to hit API successfully
  useEffect(() => {
    if (!role) return,
    try {
      const userId = $2;
      document.cookie = `x-user-id=${userId}, path = $2;
      document.cookie = `x-user-role=${role}, path=/`
    } catch {}
  }, [role]),

  useEffect(() => {
    if (!projectId) return,
    let cancelled = $2;
    (async () => {
      setLoading($2);
      setError($2);
      try {
        const data = await fetchMilestones($2);
        if (!cancelled) setMilestones(data.milestones || [])
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })(),
    return () => {
      cancelled = true
    }
  }, [projectId]),

  const handleCreate = async (payload: { title: string, description?: string, dueDate: string, amountUsd: number}) => {
    if (!projectId) return,
    const res = await createMilestone($2);
    setMilestones((prev) => [res.milestone, ...prev])
  },

  const handleAction = $2;
    milestoneId: string) => {
    if (!projectId) return,
    const map: Record<string, string> = {
      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid'},
    const status = $2;
    const res = await updateMilestoneStatus($2);
    setMilestones((prev) => prev.map((m) => (m.id = $2;
  return (
    <Layout>
      <Head>
        <title>Milestones - Zion Tech Group</title>
        <meta name="description" content="Milestones solutions and services." />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId as string}</p>
        </div>

        {role !== 'talent' && (
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
            </div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
        )}

        {loading && <div>Loading milestones...</div>}
        {error && <div className="text-red-600">{error}</div>}

        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )}
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}

        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr, trigger payout intent, on Paid &rarr, capture via Stripe/PayPal/Escrow.
        </div>
  )
}