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

  return (
    <>
      <Head>

