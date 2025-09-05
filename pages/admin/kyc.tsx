import React, { useState, useEffect } from 'react';
import Head from 'next/head';

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
}

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
];

const AdminKYCPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<KYCSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setSubmissions(mockKYCData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAction = (userId: string, action: 'approve' | 'reject' | 'needs_info') => {
    setSubmissions(prev => 
      prev.map(sub => 
        sub.userId === userId 
          ? { ...sub, status: action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'needs_info' }
          : sub
      )
    );
  };

  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion Tech Group</title>
        <meta name="description" content="Review and approve or reject KYC submissions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>
        
        {loading ? (
          <div>Loading...</div>
        ) : submissions.length === 0 ? (
          <div>No pending KYC submissions.</div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">User: {submission.userId}</h3>
                    <p className="text-sm text-gray-600">
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: <span className={`px-2 py-1 rounded text-xs ${
                        submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                        submission.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        submission.status === 'needs_info' ? 'bg-yellow-100 text-yellow-800' :
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
                    {submission.documents.map((doc) => (
                      <div key={doc.id} className="border rounded p-2 text-xs">
                        <div>Kind: {doc.kind}</div>
                        <div>Filename: {doc.filename}</div>
                        <div>Uploaded: {new Date(doc.uploadedAt).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default AdminKYCPage;