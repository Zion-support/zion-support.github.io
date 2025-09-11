


=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
export default function AdminKycPage() {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [queue, setQueue] = useState<KycProfile[]>([]);
  const [reason, setReason] = useState<string>('');
  async function load() {
    const res = await fetch('/api/admin/kyc-queue');
    const data = await res.json();
    if (data.ok) setQueue(data.queue);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => {
    load();
  }, []);
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json();
    if (data.ok) load()
  }
    if (data.ok) load()
  }

}

    if (data.ok) load()
  }
  const [queue, setQueue] = useState<KycProfile[]>([]);
  const [reason, setReason] = useState<string>('');
  async function load() {
    const res = await fetch('/api/admin/kyc-queue');
    const data = await res.json();
    if (data.ok) setQueue(data.queue);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => {
    load();
  }, []);
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json();
    if (data.ok) load()
  }
    if (data.ok) load()
  }

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion</title>
        <meta name="description" content="Review and approve or reject KYC submissions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium">Reason/Note (optional)</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <div className="grid gap-4">
          {queue.map((p) => (
            <div key={p.userId} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="font-semibold">{p.fullLegalName || p.businessName || p.userId}</div>
                  <div className="text-xs text-gray-500">Role: {p.role} • Status: {p.status} • AML: {p.amlStatus}</div>
                  {p.flags && p.flags.length > 0 && (
                    <div className="text-xs mt-1">Flags: {p.flags.join()}</div>


                  {(p.documents |[]).map((d) => (
                  {(p.documents || []).map((d) => (
=======

                  {(p.documents || []).map((d) => (

=======
                  {(p.documents |[]).map((d) => (
                  {(p.documents || []).map((d) => (                    <div key={d.id} className="border rounded p-2 text-xs">
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
                    </div>


  );
};
  ),
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
=======
}

=======
import React, { useEffect, useState } from 'react',
import Head from 'next / head',
import type { KycProfile } from '../../utils / kyc',
export default /**
 * AdminKycPage - Function description
 */
function AdminKycPage() {
  const [queue, set_queue] = useState < KycProfile[]>([]),
  const [reason, set_reason] = useState < string>(''),
  async /**
 * load - Function description
 */
function load() {
    const res = await fetch ('/api / admin / kyc - queue'),
    const data = await res.json (),
    if (set_queue (data.queue)) {
  $2
}
  }
  useEffect (() => {
    load ();
  }, []),
  async /**
 * act - Function description
 */
function act() {
    const res = await fetch ('/api / admin / kyc - queue', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, action, reason: reason || undefined })}),
    const data = await res.json (),
    if (load ()) {
  $2
}
  }
  return (
    <>;
      <Head>;
        <title > Admin KYC Queue - Zion</title>;
        <meta name="description" content="Review and approve or reject KYC submissions" />;
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
      </Head>;
      <main className="max - w-5xl mx - auto px - 4 py - 8">;
        <h1 className="text - 2xl font - bold mb - 4">KYC Review Queue</h1>;
        <div className="mb - 4">;
          <label className="block text - sm font - medium">Reason / Note (optional)</label>;
          <input className="mt - 1 w - full border rounded px - 3 py - 2" value={reason} on_change={(e) => set_reason (e.target.value)} />;
        </div>;
        <div className="grid gap - 4">;
          {queue.map ((p) => (
            <div key={p.user_id} className="border rounded p - 4">;
              <div className="flex items - center justify - between">;
                <div>;
                  <div className="font - semibold">{p.fullLegalName || p.business_name || p.user_id}</div>;
                  <div className="text - xs text - gray - 500">Role: {p.role} • Status: {p.status} • AML: {p.aml_status}</div>;
                  {p.flags && p.flags.length > 0 && (
                    <div className="text - xs mt - 1">Flags: {p.flags.join ()}</div>)}
                </div>;
                <div className="flex gap - 2">;
                  <button on_click={() => act (p.user_id, 'approve')} className="px - 3 py - 1 rounded bg - green - 600 text - white">Approve</button>;
                  <button on_click={() => act (p.user_id, 'needs_more_info')} className="px - 3 py - 1 rounded bg - yellow - 600 text - white">Need Info</button>;
                  <button on_click={() => act (p.user_id, 'reject')} className="px - 3 py - 1 rounded bg - red - 600 text - white">Reject</button>;
                </div>;
              </div>;
              <div className="mt - 3">;
                <div className="font - medium text - sm mb - 1">Documents</div>;
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 2">;
                  {(p.documents || []).map ((d) => (
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
