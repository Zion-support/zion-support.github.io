import React, {_useEffect, _useState} from 'react';

export default function PrivacySettingsPage() {_const [userId, _setUserId] = useState('');
  const [optOut, _setOptOut] = useState(false);
  const [loading, _setLoading] = useState(false);
  const [message, _setMessage] = useState('');

  const _load = async () => {
    if (!userId) return;
    setLoading(true);
    setMessage('');
    const _res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`);
    const _json = await res.json();
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut);
    else setMessage(json.error || 'Failed to load');
    setLoading(false);
  };

  const _save = async () => {_if (!userId) return;
    setLoading(true);
    setMessage('');
    const _res = await fetch('/api/fraud/settings/opt-out', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId, _optOut})});
    const _json = await res.json();
    if (res.ok) setMessage('Saved');
    else setMessage(json.error || 'Save failed');
    setLoading(false);
  };

  useEffect__(() => {_const _savedUser = localStorage.getItem('user-id');
    if (savedUser) setUserId(savedUser);}, []);

  const _onSaveUser = () => {_localStorage.setItem('user-id', _userId);
    load();};

  return (_<div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Settings</h1>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input className="border px-2 py-1 rounded w-80" placeholder="Your User ID" value={_userId} onChange={_(e) => setUserId(e.target.value)} />
          <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={_onSaveUser}>Use</button>
        </div>
        <div className="flex items-center gap-2">
          <input id="optout" type="checkbox" checked={_optOut} onChange={_(_e) => setOptOut(e.target.checked)} />
          <label htmlFor="optout">Opt-out of GPT content analysis (basic heuristics still apply)</label>
        </div>
        <div className="flex items-center gap-2">
          <button disabled={_!userId || loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={_save}>Save</button>
          <button disabled={_!userId || loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={_load}>Reload</button>
          {_message && <div>{message}</div>}
        </div>
      </div>
    </div>
  );
}