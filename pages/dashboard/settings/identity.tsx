<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../../utils/kyc',;
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {
<<<<<<< HEAD


=======
<<<<<<< HEAD
    try {
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`)
      const data = await res.json()
      if (data.ok) setProfile(data.profile)
      else setError(data.error |'Not found')
    } catch (e) {
      setError('Failed to fetch')
    }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    try {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e) {

      set_error ('Failed to fetch');

    }
  }


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
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <ProfileBadges profile={profile |undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">
<<<<<<< HEAD
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'}
        </div>
        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</a>
        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}

=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

          <ProfileBadges profile={profile || undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">
=======
      </main>
    </>
  );
};
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      </main>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
