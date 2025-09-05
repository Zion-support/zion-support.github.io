<<<<<<< HEAD
import { useEffect, useState } from 'react',

export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState(''),

  async function saveCourse() {
    setMessage(''),
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }),
    const data = await resp.json(),
    if (data.ok) setMessage('Saved'),
    else setMessage('Error: ' + (data.error || 'unknown'))
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Learning Admin</h1>
      <div className=&quot;grid gap-3 sm:grid-cols-2&quot;>
        <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Course ID&quot; value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
        <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Title&quot; value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <select className=&quot;border rounded px-3 py-2&quot; value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
=======

export default function AdminLearn() {_const [form, _setForm] = useState<any>({ id: '', _title: '', _category: 'AI Development', _durationMinutes: 60, _level: 'Beginner', _isFree: true, _certificationBadge: ''});
  const [message, setMessage] = useState('');

  async function saveCourse() {_setMessage('');
    const _resp = await fetch('/api/admin/learn/course', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    });
    const _data = await resp.json();
    if (data.ok) setMessage('Saved');
    else setMessage('Error: ' + (data.error || 'unknown'));
  }

  return (_<div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={_form.id} onChange={_(e) => setForm({ ...form, _id: e.target.value})} />
        <input className="border rounded px-3 py-2" placeholder="Title" value={_form.title} onChange={_(_e) => setForm({ ...form, _title: e.target.value})} />
        <select className="border rounded px-3 py-2" value={_form.category} onChange={_(_e) => setForm({ ...form, _category: e.target.value})}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
        </select>
<<<<<<< HEAD
        <select className=&quot;border rounded px-3 py-2&quot; value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
=======
        <select className="border rounded px-3 py-2" value={_form.level} onChange={_(_e) => setForm({ ...form, _level: e.target.value})}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
<<<<<<< HEAD
        <input type=&quot;number&quot; className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Duration (minutes)&quot; value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Certification Badge&quot; value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className=&quot;flex items-center gap-2 text-sm&quot;><input type=&quot;checkbox&quot; checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>
      <button onClick={saveCourse} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Save Course</button>
      {message && <div className=&quot;text-sm&quot;>{message}</div>}
=======
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={_form.durationMinutes} onChange={_(_e) => setForm({ ...form, _durationMinutes: Number(e.target.value)})} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={_form.certificationBadge} onChange={_(_e) => setForm({ ...form, _certificationBadge: e.target.value})} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={_form.isFree} onChange={_(_e) => setForm({ ...form, _isFree: e.target.checked})} /> Free</label>
      </div>
      <button onClick={_saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {_message && <div className="text-sm">{message}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}