import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('zion_partner_token');
    if (saved) setToken(saved);

  }, []);

  async function getToken() {
    const res = await fetch('/api/partners/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('zion_partner_token', data.token);
      setToken(data.token);    }

    }

  }

  async function fetchUsage() {
    setLoading(true);
    const res = await fetch('/api/partners/usage', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    const data = await res.json();
    setUsage(data.summary || null);
    setLoading(false);
  }

  async function regenerateKey() {
    const res = await fetch('/api/partners/key', {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const data = await res.json();
    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`);    }
  }

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>

    }
  }

  return (

                    ))}

                  </ul>
                </div>
              </div>
            ) : (
              <p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>
        </div>

            )}
          </div>
        </div>