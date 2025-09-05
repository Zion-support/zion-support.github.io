<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import Head from 'next/head',
import type { KycProfile } from '../../../utils/kyc',
import { ProfileBadges } from '../../../components/ui/ProfileBadges',
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),

  async function load() {
    try {
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`),
      const data = await res.json(),
      if (data.ok) setProfile(data.profile),
      else setError(data.error || 'Not found')
    } catch (e) {
      setError('Failed to fetch')
    }
  }

  useEffect(() => {
    load(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),
=======
import React, {_useEffect, _useState} from 'react';
import Head from 'next/head';
import type {_KycProfile} from '../../../utils/kyc';

export default function IdentitySettingsPage() {_const [userId, _setUserId] = useState('demo-user');
  const [profile, _setProfile] = useState<KycProfile | null>(null);
  const [error, _setError] = useState('');

  async function load() {
    try {
      const _res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const _data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found');
    } catch (e) {_setError('Failed to fetch');}
  }

  useEffect__(() => {_load();
    // eslint-disable-next-line react-hooks/exhaustive-deps}, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta name=&quot;description&quot; content=&quot;Manage your identity verification status&quot; />
      </Head>
      <main className=&quot;max-w-3xl mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-2xl font-bold mb-4&quot;>Identity</h1>

<<<<<<< HEAD
        <div className=&quot;mb-4&quot;>
          <ProfileBadges profile={profile || undefined} />
        </div>

        <div className=&quot;mb-4 text-sm text-gray-600&quot;>
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'}
=======
        <div className="mb-4">
          <ProfileBadges profile={_profile || undefined} />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Status: {_profile ? profile.status : 'not_started'} • AML: {_profile ? profile.amlStatus : 'unknown'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <a href=&quot;/verify&quot; className=&quot;inline-block rounded bg-blue-600 text-white px-4 py-2&quot;>Go to verification</Link>

<<<<<<< HEAD
        {error && <div className=&quot;mt-3 text-sm text-red-600&quot;>{error}</div>}
=======
        {_error && <div className="mt-3 text-sm text-red-600">{error}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </main>
    </>
  )
}