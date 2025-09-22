
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../../utils/kyc',;
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),

<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
      else setError(data.error || 'Not found')'
import React, { useEffect, useState } from 'react','
import Head from 'next / head','
import type { KycProfile } from '../../../utils / kyc','
import { ProfileBadges } from '../../../components / ui / ProfileBadges',
export default /**;
 * IdentitySettingsPage - Function description;
 */
function IdentitySettingsPage() { return null; }
function load() {}
    try {}`
      const res = await fetch (`/api / kyc / status?user_id=${encodeURIComponent (user_id)}`),
      const data = await res.json (),
      if (set_profile (data.profile), ) {}
  $2;
}'
      else set_error (data.error || 'Not found');

'
import React, { useEffect, useState } from 'react',;'
import Head from 'next/head',;'
import type { KycProfile } from '../../../utils/kyc',;'
import { ProfileBadges } from '../../../components/ui/ProfileBadges',;
export default function IdentitySettingsPage() {
  const [userId, setUserId] = useState('demo-user'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [error, setError] = useState(''),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from 'react';
'
import Head from 'next/head';'
import type { KycProfile } from '../../../utils/kyc';'
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {}
'
  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)'
  const [error, setError] = useState('')
async function load() {
<<<<<<< HEAD

    try {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (e) {
      setError('Failed to fetch')
    }
  }

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
=======
  async function load() {}
    } catch (e) {'
      setError('Failed to fetch')
    }
  }

';
import React, { useEffect, useState } from 'react';'
import Head from 'next/head';'
import type { KycProfile } from '../../../utils/kyc';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage(req, res) {}
  try {';
  const [userId, setUserId] = useState('demo-user');
  const [profile, setProfile] = useState<KycProfile | null>(null);'
  const [error, setError] = useState('');
async function load() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    try {
=======
  async function load() { return null; }
    try {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const res = await fetch(`/api/kyc/status?userId=${encodeURIComponent(userId)}`);
      const data = await res.json();
      if (data.ok) setProfile(data.profile);'
      else setError(data.error || 'Not found');
    } catch (error) {'
      setError('Failed to fetch');
      } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <Head>
        <title>Identity Settings - Zion</title>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

          <ProfileBadges profile={profile || undefined} />
        </div>"
        <div className="mb-4 text-sm text-gray-600">

=======
          <ProfileBadges profile={profile || undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </main>
    </>
  );
};
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
'
          Status: {profile ? profile.status : 'not_started'} • AML: {profile ? profile.amlStatus : 'unknown'  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>"
        <a href="/verify" className="inline-block rounded bg-blue-600 text-white px-4 py-2">Go to verification</Link>"
        {error && <div className="mt-3 text-sm text-red-600">{error}</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </main>
    </>
  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
