<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { useEffect, useState } from 'react';
export default function AdminLearn() {

  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState('');


  async function saveCourse() {
    setMessage('')
    const resp = await fetch('/api/admin/learn/course', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(form)
<<<<<<< HEAD

=======
=======
import { useEffect, useState } from 'react';
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState('');
  async function saveCourse() {
    setMessage('')
    const resp = await fetch('/api/admin/learn/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
})
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from 'react',;
;
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState(''),

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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const data = await resp.json()
    if (data.ok) setMessage('Saved')
    else setMessage('Error: ' + (data.error |'unknown'))
<<<<<<< HEAD

  }
<<<<<<< HEAD
=======
      body: JSON.stringify(form)

=======
  }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }),
    const data = await resp.json(),
    if (data.ok) setMessage('Saved'),
    else setMessage('Error: ' + (data.error || 'unknown'))
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
  }
}

=======

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
<input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
}

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {message && <div className="text-sm">{message}</div>}
    </div>
  );
};
      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>
  )
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect, useState } from 'react',
;
export default /**
 * AdminLearn - Function description
 */
function AdminLearn() {
  const [form, set_form] = useState < any>({ id: '', title: '', category: 'AI Development', duration_minutes: 60, level: 'Beginner', is_free: true, certification_badge: '' }),
  const [message, set_message] = useState (''),
  async /**
 * save_course - Function description
 */
function save_course() {
    set_message (''),
    const resp = await fetch ('/api / admin / learn / course', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify (form);
    }),
    const data = await resp.json (),
    if (set_message ('Saved'), ) {
  $2
}
    else set_message ('Error: ' + (data.error || 'unknown'));
  }
  return (
    <div className="space - y-4">;
      <h1 className="text - 2xl font - semibold">Learning Admin</h1>;
      <div className="grid gap - 3 sm:grid - cols - 2">;
        <input className="border rounded px - 3 py - 2" placeholder="Course ID" value={form.id} on_change={(e) => set_form ({ ...form, id: e.target.value })} />;
        <input className="border rounded px - 3 py - 2" placeholder="Title" value={form.title} on_change={(e) => set_form ({ ...form, title: e.target.value })} />;
        <select className="border rounded px - 3 py - 2" value={form.category} on_change={(e) => set_form ({ ...form, category: e.target.value })}>;
          <option > AI Development</option>;
          <option > Freelancing</option>;
          <option > Remote Hiring</option>;
          <option > Cloud Architecture</option>;
        </select>;
        <select className="border rounded px - 3 py - 2" value={form.level} on_change={(e) => set_form ({ ...form, level: e.target.value })}>;
          <option > Beginner</option>;
          <option > Intermediate</option>;
          <option > Advanced</option>;
        </select>;
        <input type="number" className="border rounded px - 3 py - 2" placeholder="Duration (minutes)" value={form.duration_minutes} on_change={(e) => set_form ({ ...form, duration_minutes: Number (e.target.value) })} />;
        <input className="border rounded px - 3 py - 2" placeholder="Certification Badge" value={form.certification_badge} on_change={(e) => set_form ({ ...form, certification_badge: e.target.value })} />;
        <label className="flex items - center gap - 2 text - sm"><input type="checkbox" checked={form.is_free} on_change={(e) => set_form ({ ...form, is_free: e.target.checked })} /> Free</label>;
      </div>;
      <button on_click={save_course} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Save Course</button>;
      {message && <div className="text - sm">{message}</div>}
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

    </div>
  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

    </div>
  )
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
