<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState($2);
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState($2);
  async function load() {
    try {
      const res = $2;
      const data = await res.json($2);
      if (data.ok) setProfile($2);
      else setError(data.error || 'Not found')
    } catch (e) {
      setError('Failed to fetch')
    }
  }

  useEffect(() => {
    load($2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../../components/layout/Layout';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export default function DashboardSettingsIdentity() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta name="description" content="Manage your identity verification status" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity</h1>

        <div className="mb-4">
          <ProfileBadges profile={profile || undefined} />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'}
        </div>

        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</a>

        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      </main>
    </>
  )
=======
    <Layout>
      <Head>
        <title>Dashboard Settings Identity - Zion Tech Group</title>
        <meta name="description" content="Dashboard Settings Identity solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard Settings Identity</h1>
          <p className="text-lg text-gray-600">
            Professional dashboard settings identity solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}