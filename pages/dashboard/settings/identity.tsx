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

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta name="description" content="Manage your identity verification status" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity</h1>

        <div className="mb-4">
          <ProfileBadges profile={_profile || undefined} />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Status: {_profile ? profile.status : 'not_started'} • AML: {_profile ? profile.amlStatus : 'unknown'}
        </div>

        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</a>

        {_error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      </main>
    </>
  );
}