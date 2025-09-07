<<<<<<< HEAD
import { useEffect, useState } from 'react';
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState($2);
  async function saveCourse() {
    setMessage($2);
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }),
    const data = await resp.json($2);
    if (data.ok) setMessage($2);
    else setMessage('Error: ' + (data.error || 'unknown'))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
        <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <select className="border rounded px-3 py-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
        </select>
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {message && <div className="text-sm">{message}</div>}
    </div>
  )
}
=======
import React, { useState } from 'react'
import Head from 'next/head'
const AdminLearnPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')
  const categories = [
    'AI Development',
    'Freelancing', 
    'Remote Hiring',
    'Cloud Architecture',
    'Web Development',
    'Mobile Development',
    'DevOps',
    'Data Science'
  ]
  const levels = ['Beginner', 'Intermediate', 'Advanced']
  return (
    <>
      <Head>
        <title>Admin Learning Center - Zion Tech Group</title>
        <meta name="description" content="Admin learning resources and training materials" />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Learning Center</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Filter Resources</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All Levels</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Getting Started with AI Development</h3>
                  <p className="text-gray-600 mb-2">Learn the fundamentals of AI development and machine learning.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">AI Development</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Advanced Cloud Architecture</h3>
                  <p className="text-gray-600 mb-2">Master cloud architecture patterns and best practices.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Cloud Architecture</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Advanced</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Remote Team Management</h3>
                  <p className="text-gray-600 mb-2">Best practices for managing remote development teams.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm">Remote Hiring</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default AdminLearnPage
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
