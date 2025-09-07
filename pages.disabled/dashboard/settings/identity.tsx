<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../../utils/kyc',;
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;

export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {

    try {
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
      else setError(data.error || 'Not found')
import React, { useEffect, useState } from 'react',
import Head from 'next / head',
import type { KycProfile } from '../../../utils / kyc',
import { ProfileBadges } from '../../../components / ui / ProfileBadges',
export default /**
 * IdentitySettingsPage - Function description
 */
function IdentitySettingsPage() {
  const [user_id, setUserId] = useState ('demo - user'),
  const [profile, set_profile] = useState < KycProfile | null>(null),
  const [error, set_error] = useState (''),
  async /**
 * load - Function description
 */
function load() {
    try {
      const res = await fetch (`/api / kyc / status?user_id=${encodeURIComponent (user_id)}`),
      const data = await res.json (),
      if (set_profile (data.profile), ) {
  $2
}
      else set_error (data.error || 'Not found');
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../../utils/kyc',;
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {
    try {
=======
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../../utils/kyc',;
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`)
      const data = await res.json()
      if (data.ok) setProfile(data.profile)
      else setError(data.error |'Not found')
    } catch (e) {
      setError('Failed to fetch')
    }
  }
<<<<<<< HEAD
}

=======

  }, []),

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta name="description" content="Manage your identity verification status" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity</h1>
        <div className="mb-4">

}

  useEffect (() => {
    load (),
    // eslint - disable - next - line react - hooks / exhaustive - deps;
  }, []),
  return (
    <>;
      <Head>;
        <title > Identity Settings - Zion</title>;
        <meta name="description" content="Manage your identity verification status" />;
      </Head>;
      <main className="max - w-3xl mx - auto px - 4 py - 8">;
        <h1 className="text - 2xl font - bold mb - 4">Identity</h1>;
        <div className="mb - 4">;
          <ProfileBadges profile={profile || undefined} />;
        </div>;
        <div className="mb - 4 text - sm text - gray - 600">;
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.aml_status : 'unknown'}
        </div>;
        <a href="/verify" className="inline - block rounded bg - blue - 600 text - white px - 4 py - 2">Go to verification</a>;
        {error && <div className="mt - 3 text - sm text - red - 600">{error}</div>}
      </main>;
    </>);
<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage(req, res) {
  try {
  const [userId, setUserId] = useState('demo-user');
  const [profile, setProfile] = useState<KycProfile | null>(null);
  const [error, setError] = useState('');
  async function load() {;
<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx
    try {
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found');
    } catch (error) {
      setError('Failed to fetch');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
=======
<<<<<<< HEAD

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  }, []),
  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
        <meta name="description" content="Manage your identity verification status" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity</h1>
        <div className="mb-4">
          <ProfileBadges profile={profile |undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'}
        </div>
        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</a>
        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProfileBadges profile={profile || undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">
      </main>
    </>
  );
};
<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</Link>
        {error && <div className="mt-3 text-sm text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </main>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}

}
}
=======

}

<<<<<<< HEAD:pages.disabled/dashboard/settings/identity.tsx
import React, { useEffect, useState } from 'react',;
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
  const [userId, setUserId] = useState('demo-user');
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState('');
  async function load() {
    try {
      const res = null;
    }
  }
  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
<meta
          name='description'
          content='Manage your identity verification status'
        />
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Identity</h1>

        <div className='mb-4'>
          <ProfileBadges profile={profile || undefined} />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          Status: {profile ? profile.status : 'not_started'} • AML:{' '}
          {profile ? profile.amlStatus : 'unknown'}
        </div>

        <a
          href='/verify'
          className='inline-block rounded bg-blue-600 text-white px-4 py-2'
        >
          Go to verification
        </a>

        {error && <div className='mt-3 text-sm text-red-600'>{error}</div>}
      </main>
    </>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/dashboard/settings/identity.tsx
