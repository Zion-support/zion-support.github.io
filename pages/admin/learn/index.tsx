import { useEffect, useState } from 'react';

export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState('');

  async function saveCourse() {
    setMessage('');
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await resp.json();
    if (data.ok) setMessage('Saved');
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
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {message && <div className="text-sm">{message}</div>}
    </div>
  )
}
