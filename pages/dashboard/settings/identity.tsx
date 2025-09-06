import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user');
  const [profile, setProfile] = useState<KycProfile | null>(null);
  const [error, setError] = useState('');

  async function load() {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const res = await fetch(
        `/api/kyc/status?userId=${encodeURIComponent(userId)}`
      );
=======
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found')
    } catch (e) {
<<<<<<< HEAD
      setError('Failed to fetch');
=======
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found')
    } catch (e) {
      setError('Failed to fetch')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setError('Failed to fetch')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Manage your identity verification status'
        />
=======
        <meta name="description" content="Manage your identity verification status" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
  );
=======
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
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
