import React, { useEffect, useState } from 'react';
export default function PrivacySettingsPage() {

  const [userId, setUserId] = useState('')
  const [optOut, setOptOut] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const load = async () => {
<<<<<<< HEAD
    if (!userId) return
    setLoading(true)
    setMessage('')
    const res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`)
    const json = await res.json()
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut)
    else setMessage(json.error |'Failed to load')
    setLoading(false)
  }
=======
    if (!userId) return;
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`);
    const json = await res.json();
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut);
    else setMessage(json.error || 'Failed to load');
    setLoading(false)
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const save = async () => {
    if (!userId) return
    setLoading(true)
    setMessage('')
    const res = await fetch('/api/fraud/settings/opt-out', {
<<<<<<< HEAD
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, optOut })})
    const json = await res.json()
    if (res.ok) setMessage('Saved')
    else setMessage(json.error |'Save failed')
    setLoading(false)
  }
  useEffect(() => {
    const savedUser = localStorage.getItem('user-id')
    if (savedUser) setUserId(savedUser)
  }, [])
  const onSaveUser = () => {
    localStorage.setItem('user-id', userId)
=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, optOut })});
    const json = await res.json();
    if (res.ok) setMessage('Saved');
    else setMessage(json.error || 'Save failed');
    setLoading(false)
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user-id');
    if (savedUser) setUserId(savedUser)
  }, []);

  const onSaveUser = () => {
    localStorage.setItem('user-id', userId);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    load()
  }

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
<<<<<<< HEAD
          <button disabled={!userId |loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={save}>Save</button>
          <button disabled={!userId |loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={load}>Reload</button>
=======
          <button disabled={!userId || loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={save}>Save</button>
          <button disabled={!userId || loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={load}>Reload</button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          {message && <div>{message}</div>}
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
