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
      <Head>
        <title>Post - Zion Tech Group</title>
        <meta name="description" content="Post solutions and services." />
      </Head>

      <h1 className="text-2xl font-semibold">Post a Job</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className = $2;
export default PostJob,
