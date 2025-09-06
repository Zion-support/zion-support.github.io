



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

import React, { useEffect, useState } from 'react',


export default function PrivacySettingsPage() {
  const [userId, setUserId] = useState(''),
  const [optOut, setOptOut] = useState(false),
  const [loading, setLoading] = useState(false),
  const [message, setMessage] = useState(''),
  const load = async () => {

    if (!userId) return;
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`);
    const json = await res.json();
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut);
    else setMessage(json.error || 'Failed to load');
    setLoading(false)
  }
  },
  const save = async () => {
    if (!userId) return
    setLoading(true)
    setMessage('')
    const res = await fetch('/api/fraud/settings/opt-out', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, optOut })});
    const json = await res.json();
    if (res.ok) setMessage('Saved');
    else setMessage(json.error || 'Save failed');
    setLoading(false)
  }
  },
  useEffect(() => {
    const savedUser = localStorage.getItem('user-id');
    if (savedUser) setUserId(savedUser)
  }, [])
  }, []),
  const onSaveUser = () => {
    localStorage.setItem('user-id', userId);

    load()
  }

  },
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Settings</h1>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input className="border px-2 py-1 rounded w-80" placeholder="Your User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
          <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveUser}>Use</button>
        </div>
        <div className="flex items-center gap-2">
          <input id="optout" type="checkbox" checked={optOut} onChange={(e) => setOptOut(e.target.checked)} />
          <label htmlFor="optout">Opt-out of GPT content analysis (basic heuristics still apply)</label>
        </div>
        <div className="flex items-center gap-2">






          {message && <div>{message}</div>}
        </div>
      </div>
    </div>




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

