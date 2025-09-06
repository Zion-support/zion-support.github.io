import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../utils/kyc',;

export default function AdminKycPage() {;
  const [queue, setQueue] = useState<KycProfile[]>([]),;
  const [reason, setReason] = useState<string>(''),;

  async function load() {;
    const res = await fetch('/api/admin/kyc-queue'),;
    const data = await res.json(),;
    if (data.ok) setQueue(data.queue),;
  }

  useEffect() => {;
    load(),;
  }, []),;

  async function act(userId:string, action:'approve' | 'reject' | 'needs_more_info') {;
    const res = await fetch('/api/admin/kyc-queue', {;
      method:'POST',;
      headers:{ 'Content-Type':'application/json' },;
      body:JSON.stringify({ userId, action, reason:reason || undefined })}),;
    const data = await res.json(),;
    if (data.ok) load(),;
  }

  return (;
    <>;
      <Head>;
        <title>Admin KYC Queue - Zion</title>;
        <meta name="description" content="Review and approve or reject KYC submissions" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;
      <main className="max-w-5xl mx-auto px-4 py-8">;
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>;

        <div className="mb-4">;
          <label className="block text-sm font-medium">Reason/Note (optional)</label>;
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />;
        </div>;

        <div className="grid gap-4">;
          {queue.map(p) => (;
            <div key={p.userId} className="border rounded p-4">;
              <div className="flex items-center justify-between">;
                <div>;
                  <div className="font-semibold">{p.fullLegalName || p.businessName || p.userId}</div>;
                  <div className="text-xs text-gray-500">Role:{p.role}  Status:{p.status}  AML:{p.amlStatus}</div>;
                  {p.flags && p.flags.length > 0 && (;
                    <div className="text-xs mt-1">Flags:{p.flags.join()}</div>;
                  )}
                </div>;
                <div className="flex gap-2">;
                  <button onClick={() => act(p.userId, 'approve')} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>;
                  <button onClick={() => act(p.userId, 'needs_more_info')} className="px-3 py-1 rounded bg-yellow-600 text-white">Need Info</button>;
                  <button onClick={() => act(p.userId, 'reject')} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>;
                </div>;
              </div>;
              <div className="mt-3">;
                <div className="font-medium text-sm mb-1">Documents</div>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">;
                  {(p.documents || []).map(d) => (;
                    <div key={d.id} className="border rounded p-2 text-xs">;
                      <div>Kind:{d.kind}</div>;
                      <div>Filename:{d.filename}</div>;
                      <div>Uploaded:{new Date(d.uploadedAt).toLocaleString()}</div>;
                    </div>;
interface KYCSubmission {
  id: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected' | 'needs_info';
  submittedAt: string;
  documents: Array<{
    id: string;
    kind: string;
    filename: string;
    uploadedAt: string;
  }>;

const mockKYCData: KYCSubmission[] = [
  {
    id: '1',
    userId: 'user123',
    status: 'pending',
    submittedAt: '2025-01-15T10:00:00Z',
    documents: [
      {
        id: 'doc1',
        kind: 'passport',
        filename: 'passport.pdf',
        uploadedAt: '2025-01-15T10:00:00Z'
      }
    ]
  }
;

const AdminKYCPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<KYCSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect() => {
    // Simulate loading data
    setTimeout() => {
      setSubmissions(mockKYCData);
      setLoading(false);
    }, 1000);
  }, []);

  async function act(userId: string, action: 'approve' | 'reject' | 'needsmore_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json(),
    if (data.ok) load()  }
  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion Tech Group</title>
        <meta name="description" content="Review and approve or reject KYC submissions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=&quot;max-w-5xl mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-2xl font-bold mb-4&quot;>KYC Review Queue</h1>

        <div className=&quot;mb-4&quot;>
          <label className=&quot;block text-sm font-medium&quot;>Reason/Note (optional)</label>
          <input className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>

        <div className=&quot;grid gap-4&quot;>
          {queue.map(p) => (
            <div key={p.userId} className=&quot;border rounded p-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <div className=&quot;font-semibold&quot;>{p.fullLegalName || p.businessName || p.userId}</div>
                  <div className=&quot;text-xs text-gray-500&quot;>Role: {p.role}  Status: {p.status}  AML: {p.amlStatus}</div>
                  {p.flags && p.flags.length > 0 && (
                    <div className="text-xs mt-1">Flags: {p.flags.join()}</div>                  )}
                </div>
                <div className=&quot;flex gap-2&quot;>
                  <button onClick={() => act(p.userId, 'approve')} className=&quot;px-3 py-1 rounded bg-green-600 text-white&quot;>Approve</button>
                  <button onClick={() => act(p.userId, 'needsmore_info')} className=&quot;px-3 py-1 rounded bg-yellow-600 text-white&quot;>Need Info</button>
                  <button onClick={() => act(p.userId, 'reject')} className=&quot;px-3 py-1 rounded bg-red-600 text-white&quot;>Reject</button>
                </div>
              </div>
              <div className=&quot;mt-3&quot;>
                <div className=&quot;font-medium text-sm mb-1&quot;>Documents</div>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
                  {(p.documents || []).map(d) => (
                    <div key={d.id} className=&quot;border rounded p-2 text-xs&quot;>
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Reason/Note (optional)</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={_(e) => setReason(e.target.value)} />
        </div>

        <div className="grid gap-4">
          {queue.map(_(p) => (
            <div key={p.userId} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.fullLegalName || p.businessName || p.userId}</div>
                  <div className="text-xs text-gray-500">Role: {p.role}  Status: {p.status}  AML: {p.amlStatus}</div>
                  {p.flags && p.flags.length > 0 && (
                    <div className="text-xs mt-1">Flags: {p.flags.join(', _')}</div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={_() => act(p.userId, _'approve')} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>
                  <button onClick={_() => act(p.userId, _'needsmore_info')} className="px-3 py-1 rounded bg-yellow-600 text-white">Need Info</button>
                  <button onClick={_() => act(p.userId, _'reject')} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="font-medium text-sm mb-1">Documents</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {_(p.documents || []).map(_(d) => (
                    <div key={d.id} className="border rounded p-2 text-xs">
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
                    </div>
                  )}
                </div>;
              </div>;
            </div>;
          )}
        </div>;
      </main>;
    </>;
  ),;}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>

        {loading ? (
          <div>Loading...</div>
        ) : submissions.length = = 0 ? (
          <div>No pending KYC submissions.</div>
        ) : (
          <div className="space-y-4">
            {submissions.map(submission) => (
              <div key={submission.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">User: {submission.userId}</h3>
                    <p className="text-sm text-gray-600">
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: <span className={`px-2 py-1 rounded text-xs ${
                        submission.status = = 'approved' ? 'bg-green-100 text-green-800' :
                        submission.status = = 'rejected' ? 'bg-red-100 text-red-800' :
                        submission.status = = 'needs_info' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {submission.status}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction(submission.userId, 'approve')}
                      className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(submission.userId, 'needs_info')}
                      className="px-3 py-1 rounded bg-yellow-600 text-white hover:bg-yellow-700"
                    >
                      Need Info
                    </button>
                    <button
                      onClick={() => handleAction(submission.userId, 'reject')}
                      className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="font-medium text-sm mb-1">Documents</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {submission.documents.map(doc) => (
                      <div key={doc.id} className="border rounded p-2 text-xs">
                        <div>Kind: {doc.kind}</div>
                        <div>Filename: {doc.filename}</div>
                        <div>Uploaded: {new Date(doc.uploadedAt).toLocaleString()}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );

export default AdminKYCPage;
