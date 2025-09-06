import { useEffect, useState } from 'react',;
;
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState(''),
import { useEffect, useState } from 'react';
export default function AdminLearn() {

  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState('');


  async function saveCourse() {
    setMessage('')
    const resp = await fetch('/api/admin/learn/course', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      body: JSON.stringify(form)

  }
}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    })
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const data = await resp.json()
    if (data.ok) setMessage('Saved')
    else setMessage('Error: ' + (data.error |'unknown'))

  }
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }),
    const data = await resp.json(),
    if (data.ok) setMessage('Saved'),
    else setMessage('Error: ' + (data.error || 'unknown'))
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  );
};
=======

    </div>
  );
};

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
