import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';

  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);    if (u) setUserId(u)
  }, []);
  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch(
        `/api/trust/${encodeURIComponent(userId)}?analyze=true`
      );
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, [userId]);
  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type })
    });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');  }      const json = await res.json();
      setData(json);
      setLoading(false)
    }
    load()
  }, [userId]);
  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type }) });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged')
  }
  async function submitAppeal(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get('message');
    const contactEmail = formData.get('email');
    await fetch('/api/trust/appeal', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, message, contactEmail })
    });
    alert('Appeal submitted');
    form.reset();  }
  return (

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

  }
  return (
    <EnhancedLayout>

                      </li>

                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}

