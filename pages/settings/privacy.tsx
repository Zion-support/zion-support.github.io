import React, { useEffect, useState } from 'react';
export default function PrivacySettingsPage() {

  const [userId, setUserId] = useState('')
  const [optOut, setOptOut] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
import React, { useEffect, useState } from 'react',
import React, { useEffect, useState } from 'react',;
;
import React, { useEffect, useState } from 'react',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function PrivacySettingsPage() {
  const [userId, setUserId] = useState(''),
  const [optOut, setOptOut] = useState(false),
  const [loading, setLoading] = useState(false),
  const [message, setMessage] = useState(''),

  const load = async () => {
    if (!userId) return
    setLoading(true)
    setMessage('')
    const res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`)
    const json = await res.json()
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut)
    else setMessage(json.error |'Failed to load')
    setLoading(false)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const save = async () => {
    if (!userId) return
    setLoading(true)
    setMessage('')
    const res = await fetch('/api/fraud/settings/opt-out', {

  useEffect(() => {
    const savedUser = localStorage.getItem('user-id')
    if (savedUser) setUserId(savedUser)

  const onSaveUser = () => {
    localStorage.setItem('user-id', userId)

    load()

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
          <button disabled={!userId |loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={save}>Save</button>
          <button disabled={!userId |loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={load}>Reload</button>
          <button disabled={!userId || loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={save}>Save</button>
          <button disabled={!userId || loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={load}>Reload</button>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          {message && <div>{message}</div>}

        </div>
      </div>
    </div>

          {message && <div>{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  )
          <button disabled={!userId || loading} className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50" onClick={save}>Save</button>
          <button disabled={!userId || loading} className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50" onClick={load}>Reload</button>
  );
};
          {message && <div>{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
  )

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
        </div>;
      </div>;
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
