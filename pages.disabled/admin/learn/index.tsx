<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD:pages/admin/learn/index.tsx
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
import { useEffect, useState } from 'react',;
;
export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),
  const [message, setMessage] = useState(''),
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
import { useEffect, useState } from 'react';
export default function AdminLearn() {}
'
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),';
  const [message, setMessage] = useState('');


  async function saveCourse() { return null; }
    const resp = await fetch('/api/admin/learn/course', {}
'
      method: 'POST','
      headers: { 'Content-Type': 'application/json' },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      body: JSON.stringify(form)
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD

  }
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
import { useEffect, useState } from 'react',;
;
export default function AdminLearn() { return null; }
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),'
  const [message, setMessage] = useState(''),
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

';
import { useEffect, useState } from 'react';
export default function AdminLearn() {}
'
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),';
  const [message, setMessage] = useState('');


  async function saveCourse() { return null; }
    const resp = await fetch('/api/admin/learn/course', {}
'
      method: 'POST','
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(form)
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    })
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const data = await resp.json()
    if (data.ok) setMessage('Saved')
    else setMessage('Error: ' + (data.error |'unknown'))

<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
  }
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const data = await resp.json()
    if (data.ok) setMessage('Saved')
=======



    })

    const data = await resp.json()'
    if (data.ok) setMessage('Saved')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
    else setMessage('Error: ' + (data.error |'unknown'))


  }
      body: JSON.stringify(form)






  }

      body: JSON.stringify(form)

<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/learn/index.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }
      body: JSON.stringify(form)

body: JSON.stringify(form)

  }

  }
      body: JSON.stringify(form)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
import { useEffect, useState  } from 'react';

export default function AdminLearn() {
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' });
  const [message, setMessage] = useState('');
  async function saveCourse() {
    setMessage('');
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
origin/cursor/automate-test-improve-and-merge-code-2533
  }
      body: JSON.stringify(form)

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
    }),
    const data = await resp.json(),'
    if (data.ok) setMessage('Saved'),'
    else setMessage('Error: ' + (data.error || 'unknown'))
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx


<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
import { useEffect, useState } from 'react';
export default function AdminLearn(req, res) {}
  try {';
  const [form, setForm] = useState<any>({ id: '', title: '', category: 'AI Development', durationMinutes: 60, level: 'Beginner', isFree: true, certificationBadge: '' }),;'
  const [message, setMessage] = useState('');
  async function saveCourse() { return null; }
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(form);
    }),;
    const data = await resp.json();'
    if (data.ok) setMessage('Saved');'
    else setMessage('Error: ' + (data.error || 'unknown'));
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx



=======

  }
}
  }
}
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
  }
}




  }
}
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learning Admin</h1>
      <div className="grid gap-3 sm:grid-cols-2">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
=======



  return ("
    <div className="space-y-4">"
      <h1 className="text-2xl font-semibold">Learning Admin</h1>"
      <div className="grid gap-3 sm:grid-cols-2">"
        <input className="border rounded px-3 py-2" placeholder="Course ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
"
        <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
        <select className="border rounded px-3 py-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option>AI Development</option>
          <option>Freelancing</option>
          <option>Remote Hiring</option>
          <option>Cloud Architecture</option>
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
        </select>
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
=======
        </select>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
=======
=======
        <select className="border rounded px-3 py-2" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
<select
          className='border rounded px-3 py-2'
          value={form.level}
          onChange={e => setForm({ ...form, level: e.target.value })}
        >
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
        </select>
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
=======
        </select>"
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />"
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>"
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
      {message && <div className="text-sm">{message}</div>}
    </div>
  );
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======
=======
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
}

'
import { useEffect, useState } from 'react',;
;
export default /**;
 * AdminLearn - Function description;
 */
function AdminLearn() { return null; }
  const [form, set_form] = useState < any>({ id: '', title: '', category: 'AI Development', duration_minutes: 60, level: 'Beginner', is_free: true, certification_badge: '' }),'
  const [message, set_message] = useState (''),
  async /**
 * save_course - Function description;
 */
function save_course() { return null; }
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify (form);
    }),
    const data = await resp.json (),'
    if (set_message ('Saved'), ) {}
  $2;
}'
    else set_message ('Error: ' + (data.error || 'unknown'));
  }
  return ("
    <div className="space - y-4">;"
      <h1 className="text - 2xl font - semibold">Learning Admin</h1>;"
      <div className="grid gap - 3 sm:grid - cols - 2">;"
        <input className="border rounded px - 3 py - 2" placeholder="Course ID" value={form.id} on_change={(e) => set_form ({ ...form, id: e.target.value })} />;"
        <input className="border rounded px - 3 py - 2" placeholder="Title" value={form.title} on_change={(e) => set_form ({ ...form, title: e.target.value })} />;"
=======
        <input type="number" className="border rounded px-3 py-2" placeholder="Duration (minutes)" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} />
        <input className="border rounded px-3 py-2" placeholder="Certification Badge" value={form.certificationBadge} onChange={(e) => setForm({ ...form, certificationBadge: e.target.value })} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFree} onChange={(e) => setForm({ ...form, isFree: e.target.checked })} /> Free</label>
      </div>
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>

}

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
        <select className="border rounded px - 3 py - 2" value={form.category} on_change={(e) => set_form ({ ...form, category: e.target.value })}>;
          <option > AI Development</option>;
          <option > Freelancing</option>;
          <option > Remote Hiring</option>;
          <option > Cloud Architecture</option>;
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
        </select>;"
=======
        </select>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
        <select className="border rounded px - 3 py - 2" value={form.level} on_change={(e) => set_form ({ ...form, level: e.target.value })}>;
          <option > Beginner</option>;
          <option > Intermediate</option>;
          <option > Advanced</option>;
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
        </select>;"
        <input type="number" className="border rounded px - 3 py - 2" placeholder="Duration (minutes)" value={form.duration_minutes} on_change={(e) => set_form ({ ...form, duration_minutes: Number (e.target.value) })} />;"
        <input className="border rounded px - 3 py - 2" placeholder="Certification Badge" value={form.certification_badge} on_change={(e) => set_form ({ ...form, certification_badge: e.target.value })} />;"
        <label className="flex items - center gap - 2 text - sm"><input type="checkbox" checked={form.is_free} on_change={(e) => set_form ({ ...form, is_free: e.target.checked })} /> Free</label>;
      </div>;"
      <button on_click={save_course} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Save Course</button>;"
      {message && <div className="text - sm">{message}</div>}
    </div>);
}




"
=======
        </select>;
        <input type="number" className="border rounded px - 3 py - 2" placeholder="Duration (minutes)" value={form.duration_minutes} on_change={(e) => set_form ({ ...form, duration_minutes: Number (e.target.value) })} />;
        <input className="border rounded px - 3 py - 2" placeholder="Certification Badge" value={form.certification_badge} on_change={(e) => set_form ({ ...form, certification_badge: e.target.value })} />;
        <label className="flex items - center gap - 2 text - sm"><input type="checkbox" checked={form.is_free} on_change={(e) => set_form ({ ...form, is_free: e.target.checked })} /> Free</label>;
      </div>;
      <button on_click={save_course} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Save Course</button>;
      {message && <div className="text - sm">{message}</div>}
    </div>);
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
      {message && <div className="text-sm">{message}</div>}
    </div>
  );
};
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
"
      {message && <div className="text-sm">{message}</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>
  )

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
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
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/learn/index.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
      <button onClick={saveCourse} className="px-4 py-2 bg-blue-600 text-white rounded">Save Course</button>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
    </div>
  );
};

<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {message && <div className="text-sm">{message}</div>  } catch (error) {
    console.error("Error:", error);
=======


"
      {message && <div className="text-sm">{message}</div>  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>
  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx

}


<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/learn/index.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}

}

}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
      <button
        onClick={saveCourse}
        className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Save Course
      </button>
      {message && <div className='text-sm'>{message}</div>}
    </div>
  );
<<<<<<< HEAD:pages_backup/admin/learn/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/learn/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/learn/index.tsx
=======






'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/learn/index.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/learn/index.tsx
