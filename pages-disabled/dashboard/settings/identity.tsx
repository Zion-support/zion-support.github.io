
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

    try {
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

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage() {

  const [userId, setUserId] = useState('demo-user')
  const [profile, setProfile] = useState<KycProfile | null>(null)
  const [error, setError] = useState('')
  async function load() {
    } catch (e) {
      setError('Failed to fetch')
    }
  }

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../../utils/kyc';
  async function load() {}
    } catch (e) {'
      setError('Failed to fetch')
    }
  }

';
import React, { useEffect, useState } from 'react';'
import Head from 'next/head';'
import type { KycProfile } from '../../../utils/kyc';'
import { ProfileBadges } from '../../../components/ui/ProfileBadges';
export default function IdentitySettingsPage(req, res) {}
  try {';
  const [userId, setUserId] = useState('demo-user');
  const [profile, setProfile] = useState<KycProfile | null>(null);'
  const [error, setError] = useState('');
async function load() {;

    try {
  async function load() { return null; }
    try {}`
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

          <ProfileBadges profile={profile || undefined} />
        </div>"
        <div className="mb-4 text-sm text-gray-600">

          <ProfileBadges profile={profile || undefined} />
        </div>
        <div className="mb-4 text-sm text-gray-600">

      </main>
    </>
  );
};
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

      </main>
    </>
  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

