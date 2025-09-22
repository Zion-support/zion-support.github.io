<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../utils/kyc',;
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';

export default function AdminKycPage() {

    load()
  }, [])
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
=======
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../utils/kyc',;
=======
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


import React, { useEffect, useState } from 'react';'
import Head from 'next/head';'
import type { KycProfile } from '../../utils/kyc';
'
import React, { useEffect, useState } from 'react',;'
import Head from 'next/head',;'
import type { KycProfile } from '../../utils/kyc',;
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';




import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
export default function AdminKycPage() {
  const [queue, setQueue] = useState<KycProfile[]>([])
  const [reason, setReason] = useState<string>('')
  async function load() {
    const res = await fetch('/api/admin/kyc-queue')
    const data = await res.json()
    if (data.ok) setQueue(data.queue)
  }
  useEffect(() => {
    load()
  }, [])
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, action, reason: reason |undefined })})
    const data = await res.json()

<<<<<<< HEAD
    if (data.ok) load()
  }
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AdminKycPage() {

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
import React, { useEffect, useState } from 'react',
import Head from 'next/head',
import type { KycProfile } from '../../utils/kyc';
export default function AdminKycPage() {
  const [queue, setQueue] = useState<KycProfile[]>([]);
  const [reason, setReason] = useState<string>('');
  async function load() {
    const res = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    if (data.ok) load()
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [queue, setQueue] = useState<KycProfile[]>([]);
=======
'
import React, { useEffect, useState } from 'react';'
import Head from 'next/head';'
import type { KycProfile } from '../../utils/kyc';


export default function AdminKycPage() {};
  const [queue, setQueue] = useState<KycProfile[]>([]);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [reason, setReason] = useState<string>('');
  async function load() { return null; }
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => {}
    load();
<<<<<<< HEAD
  }, []);
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json();
    if (data.ok) load()
  }
<<<<<<< HEAD
    if (data.ok) load()
  }

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {

      method: 'POST',
=======
  }, []);'
  async function act() { return null; }
    const res = await fetch('/api/admin/kyc-queue', {}
'
      method: 'POST','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json();
    if (data.ok) load()
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    if (data.ok) load()
  }

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion</title>
<<<<<<< HEAD
        <meta name="description" content="Review and approve or reject KYC submissions" />
=======

  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion</title>"
        <meta name="description" content="Review and approve or reject KYC submissions" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>"
      <main className="max-w-5xl mx-auto px-4 py-8">"
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mb-4">
          <label className="block text-sm font-medium">Reason/Note (optional)</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
"
        <div className="mb-4">"
          <label className="block text-sm font-medium">Reason/Note (optional)</label>"
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="grid gap-4">
          {queue.map((p) => ("
            <div key={p.userId} className="border rounded p-4">"
              <div className="flex items-center justify-between">
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<meta
          name='description'
          content='Review and approve or reject KYC submissions'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='max-w-5xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>KYC Review Queue</h1>

        <div className='mb-4'>
          <label className='block text-sm font-medium'>
            Reason/Note (optional)
          </label>
          <input
            className='mt-1 w-full border rounded px-3 py-2'
            value={reason}
            onChange={e => setReason(e.target.value)}
          />
        </div>

        <div className='grid gap-4'>
          {queue.map(p => (
            <div key={p.userId} className='border rounded p-4'>
              <div className='flex items-center justify-between'>
                <div>
<<<<<<< HEAD
=======
                  <div className='font-semibold'>
                    {p.fullLegalName || p.businessName || p.userId}
                  </div>
                  <div className='text-xs text-gray-500'>
                    Role: {p.role} • Status: {p.status} • AML: {p.amlStatus}
                  </div>
                  {p.flags && p.flags.length > 0 && (
                    <div className='text-xs mt-1'>
                      Flags: {p.flags.join(', ')}
                    </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  )}
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                </div>"
                <div className="flex gap-2">'"
                  <button onClick={() => act(p.userId, 'approve')} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>'"
                  <button onClick={() => act(p.userId, 'needs_more_info')} className="px-3 py-1 rounded bg-yellow-600 text-white">Need Info</button>'"
                  <button onClick={() => act(p.userId, 'reject')} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>
                </div>
              </div>"
              <div className="mt-3">"
                <div className="font-medium text-sm mb-1">Documents</div>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  {(p.documents |[]).map((d) => (
                  {(p.documents || []).map((d) => (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


                  {(p.documents || []).map((d) => (


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <div key={d.id} className="border rounded p-2 text-xs">
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
=======
                </div>
                <div className='flex gap-2'>
                  <button
                    onClick={() => act(p.userId, 'approve')}
                    className='px-3 py-1 rounded bg-green-600 text-white'
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => act(p.userId, 'needs_more_info')}
                    className='px-3 py-1 rounded bg-yellow-600 text-white'
                  >
                    Need Info
                  </button>
                  <button
                    onClick={() => act(p.userId, 'reject')}
                    className='px-3 py-1 rounded bg-red-600 text-white'
                  >
                    Reject
                  </button>
                </div>
              </div>
<<<<<<< HEAD
              <div className="mt-3">
                <div className="font-medium text-sm mb-1">Documents</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div key={d.id} className="border rounded p-2 text-xs">
=======
              <div className='mt-3'>
                <div className='font-medium text-sm mb-1'>Documents</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {(p.documents || []).map(d => (
                    <div key={d.id} className='border rounded p-2 text-xs'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>
                        Uploaded: {new Date(d.uploadedAt).toLocaleString()}
                      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ),
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
'
import React, { useEffect, useState } from 'react','
import Head from 'next / head','
import type { KycProfile } from '../../utils / kyc',
export default /**;
 * AdminKycPage - Function description;
 */
function AdminKycPage() {}
  const [queue, set_queue] = useState < KycProfile[]>([]),'
  const [reason, set_reason] = useState < string>(''),
  async /**
 * load - Function description;
 */
function load() { return null; }
    if (set_queue (data.queue)) {}
  $2;
}
  }
  useEffect (() => {}
    load ();
  }, []),
  async /**
 * act - Function description;
 */
function act() { return null; }
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, action, reason: reason || undefined })}),
    const data = await res.json (),
    if (load ()) {}
  $2;
}
  }
  return (
    <>;
      <Head>;
        <title > Admin KYC Queue - Zion</title>;"
        <meta name="description" content="Review and approve or reject KYC submissions" />;"
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
      </Head>;"
      <main className="max - w-5xl mx - auto px - 4 py - 8">;"
        <h1 className="text - 2xl font - bold mb - 4">KYC Review Queue</h1>;"
        <div className="mb - 4">;"
          <label className="block text - sm font - medium">Reason / Note (optional)</label>;"
          <input className="mt - 1 w - full border rounded px - 3 py - 2" value={reason} on_change={(e) => set_reason (e.target.value)} />;
        </div>;"
        <div className="grid gap - 4">;
          {queue.map ((p) => ("
            <div key={p.user_id} className="border rounded p - 4">;"
              <div className="flex items - center justify - between">;
                <div>;"
                  <div className="font - semibold">{p.fullLegalName || p.business_name || p.user_id}</div>;"
                  <div className="text - xs text - gray - 500">Role: {p.role} • Status: {p.status} • AML: {p.aml_status}</div>;
                  {p.flags && p.flags.length > 0 && ("
                    <div className="text - xs mt - 1">Flags: {p.flags.join ()}</div>)}
                </div>;"
                <div className="flex gap - 2">;'"
                  <button on_click={() => act (p.user_id, 'approve')} className="px - 3 py - 1 rounded bg - green - 600 text - white">Approve</button>;'"
                  <button on_click={() => act (p.user_id, 'needs_more_info')} className="px - 3 py - 1 rounded bg - yellow - 600 text - white">Need Info</button>;'"
                  <button on_click={() => act (p.user_id, 'reject')} className="px - 3 py - 1 rounded bg - red - 600 text - white">Reject</button>;
                </div>;
              </div>;"
              <div className="mt - 3">;"
                <div className="font - medium text - sm mb - 1">Documents</div>;"
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 2">;
                  {(p.documents || []).map ((d) => ("
                    <div key={d.id} className="border rounded p - 2 text - xs">;
                      <div > Kind: {d.kind}</div>;
                      <div > Filename: {d.filename}</div>;
                      <div > Uploaded: {new Date (d.uploaded_at).toLocaleString ()}</div>;
                    </div>))}
                </div>;
              </div>;
            </div>))}
        </div>;
      </main>;
    </>);
}


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
