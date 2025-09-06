<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' });
=======
import React, { useState } from 'react';
import Head from 'next/head';
}

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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [message, setMessage] = useState('');
  async function saveCourse() {
    setMessage('');
<<<<<<< HEAD
    const resp = null;
    else setMessage('Error: ' + (data.error || 'unknown'))
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import { useEffect, useState } from 'react',;
;
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState(''),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { useEffect, useState } from 'react';
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' })
  const [message, setMessage] = useState('')
  async function saveCourse() {
    setMessage('')
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify(form)
<<<<<<< HEAD
    })
    const data = await resp.json()
    if (data.ok) setMessage('Saved')
    else setMessage('Error: ' + (data.error |'unknown'))

  }
=======
    }),
    const data = await resp.json(),
    if (data.ok) setMessage('Saved'),
    else setMessage('Error: ' + (data.error || 'unknown'))
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect, useState } from 'react';
export default function AdminLearn(req, res) {
  try {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),;
  const [message, setMessage] = useState('');
  async function saveCourse() {;
    setMessage('');
    const resp = await fetch('/api/admin/learn/course', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(form);
    }),;
    const data = await resp.json();
    if (data.ok) setMessage('Saved');
    else setMessage('Error: ' + (data.error || 'unknown'));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
        <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <select className="border rounded px-3 py-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
=======
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await resp.json();
    if (data.ok) setMessage('Saved');
    else setMessage('Error: ' + (data.error || 'unknown'));
  }

  return (
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
        </select>
<<<<<<< HEAD
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
=======
        <select
          className='border rounded px-3 py-2'
          value={form.level}
          onChange={e => setForm({ ...form, level: e.target.value })}
        >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
<<<<<<< HEAD
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
<<<<<<< HEAD
      {message && <div className="text-sm">{message}</div>}
<<<<<<< HEAD
=======
    </div>
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    </div>
  )
<<<<<<< HEAD
}
=======
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
      </div>
      <button
        onClick={saveCourse}
        className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Save Course
      </button>
      {message && <div className='text-sm'>{message}</div>}
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
