import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </MainLayout>
=======
import Layout from './components/Layout';

export default function TestPage() {
  return (
<<<<<<< HEAD
    <Layout title="Test Page">
=======
    <Layout title="Test Page" description="Test page">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}