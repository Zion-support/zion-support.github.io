import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface KYCSubmission {
  id: string
  userId: string
  status: 'pending' | 'approved' | 'rejected' | 'needs_info'
  submittedAt: string
  documents: Array<{
    id: string
    kind: string
    filename: string
    uploadedAt: string
  }>
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
]
const AdminKYCPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<KYCSubmission[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setSubmissions(mockKYCData)
      setLoading(false)
    }, 1000)
  }, [])
  const handleAction = (userId: string, action: 'approve' | 'reject' | 'needs_info') => {
    setSubmissions(prev => 
      prev.map(sub => 
        sub.userId === userId 
          ? { ...sub, status: action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'needs_info' }
          : sub
      )
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
        <div className="grid gap-4">
          {queue.map((p) => (
            <div key={p.userId} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.fullLegalName |p.businessName |p.userId}</div>
                  <div className="text-xs text-gray-500">Role: {p.role} • Status: {p.status} • AML: {p.amlStatus}</div>
                  {p.flags && p.flags.length > 0 && (
                    <div className="text-xs mt-1">Flags: {p.flags.join()}</div>
                  )}
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => act(p.userId, 'approve')} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>
                  <button onClick={() => act(p.userId, 'needs_more_info')} className="px-3 py-1 rounded bg-yellow-600 text-white">Need Info</button>
                  <button onClick={() => act(p.userId, 'reject')} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="font-medium text-sm mb-1">Documents</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(p.documents |[]).map((d) => (
                    <div key={d.id} className="border rounded p-2 text-xs">
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </main>
    </>
  )
}
export default AdminKYCPage