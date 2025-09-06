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

      body: JSON.stringify(form)
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
