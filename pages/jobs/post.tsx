<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const PostJob: NextPage = () => {
  const [title, setTitle] = useState($2);
  const [description, setDescription] = useState($2);
  const [budget, setBudget] = useState($2);
  const [preview, setPreview] = useState($2);
  return (
    <div className="space-y-6 pb-20">
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function post() {
  return (
    <Layout>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      <Head>
        <title>Post - Zion Tech Group</title>
        <meta name="description" content="Post solutions and services." />
      </Head>
<<<<<<< HEAD

      <h1 className="text-2xl font-semibold">Post a Job</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className = $2;
export default PostJob,
=======
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Post</h1>
          <p className="text-lg text-gray-600">
            Professional post solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
