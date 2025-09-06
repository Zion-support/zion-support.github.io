<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';

export default function AdminLearn() {
  const [form, setForm] = useState<any>({
    id: '',
    title: '',
    category: 'AI Development',
    durationMinutes: 60,
    level: 'Beginner',
    isFree: true,
    certificationBadge: '',
  });
=======
import { useEffect, useState } from 'react';

export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { useEffect, useState } from 'react';

export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [message, setMessage] = useState('');

  async function saveCourse() {
    setMessage('');
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
<<<<<<< HEAD
      body: JSON.stringify(form),
=======
      body: JSON.stringify(form)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    });
    const data = await resp.json();
    if (data.ok) setMessage('Saved');
    else setMessage('Error: ' + (data.error || 'unknown'))
  }

  return (
<<<<<<< HEAD
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Learning Admin</h1>
      <div className='grid gap-3 sm:grid-cols-2'>
        <input
          className='border rounded px-3 py-2'
          placeholder='Course ID'
          value={form.id}
          onChange={e => setForm({ ...form, id: e.target.value })}
        />
        <input
          className='border rounded px-3 py-2'
          placeholder='Title'
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <select
          className='border rounded px-3 py-2'
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
=======
      body: JSON.stringify(form)
    });
    const data = await resp.json();
    if (data.ok) setMessage('Saved');
    else setMessage('Error: ' + (data.error || 'unknown'))
  }

  return (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
        <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <select className="border rounded px-3 py-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
        </select>
<<<<<<< HEAD
<<<<<<< HEAD
        <select
          className='border rounded px-3 py-2'
          value={form.level}
          onChange={e => setForm({ ...form, level: e.target.value })}
        >
=======
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
<<<<<<< HEAD
<<<<<<< HEAD
        <input
          type='number'
          className='border rounded px-3 py-2'
          placeholder='Duration (minutes)'
          value={form.durationMinutes}
          onChange={e =>
            setForm({ ...form, durationMinutes: Number(e.target.value) })
          }
        />
        <input
          className='border rounded px-3 py-2'
          placeholder='Certification Badge'
          value={form.certificationBadge}
          onChange={e =>
            setForm({ ...form, certificationBadge: e.target.value })
          }
        />
        <label className='flex items-center gap-2 text-sm'>
          <input
            type='checkbox'
            checked={form.isFree}
            onChange={e => setForm({ ...form, isFree: e.target.checked })}
          />{' '}
          Free
        </label>
=======
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {message && <div className="text-sm">{message}</div>}
    </div>
<<<<<<< HEAD
  );
=======
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {message && <div className="text-sm">{message}</div>}
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
