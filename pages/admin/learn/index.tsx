
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
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
        </select>
        <select className="border rounded px-3 py-2" value={_form.level} onChange={_(_e) => setForm({ ...form, _level: e.target.value})}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={_form.durationMinutes} onChange={_(_e) => setForm({ ...form, _durationMinutes: Number(e.target.value)})} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={_form.certificationBadge} onChange={_(_e) => setForm({ ...form, _certificationBadge: e.target.value})} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={_form.isFree} onChange={_(_e) => setForm({ ...form, _isFree: e.target.checked})} /> Free</label>
      </div>
      <button onClick={_saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
      {_message && <div className="text-sm">{message}</div>}
    </div>
  );
}