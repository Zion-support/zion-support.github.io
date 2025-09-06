import { useEffect, useState } from 'react';

interface Partner {
  id: string;
  code: string;
  name: string;
  status: 'active' | 'inactive' | 'pending';
  commission: number;
  contactEmail: string;
  contactPhone: string;
  joinedAt: string;
  lastActivity: string;
  totalReferrals: number;
  totalEarnings: number;
}

export default function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [flags, setFlags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/partners/list');
        const json = await res.json();
        setPartners(json.partners || []);
      } catch (error) {
        console.error('Error loading partners:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function updatePartner(code: string, updates: any) {
    try {
      await fetch('/api/admin/partners/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, ...updates }),
      });
      // Reload partners
      const res = await fetch('/api/admin/partners/list');
      const json = await res.json();
      setPartners(json.partners || []);
    } catch (error) {
      console.error('Error updating partner:', error);
    }
  }

  async function viewFlags(code: string) {
    setSelected(code);
    try {
      const res = await fetch(`/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`);
      const json = await res.json();
      setFlags(json.flags || []);
    } catch (error) {
      console.error('Error loading flags:', error);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin • Partners</h1>
      
      {loading ? (
        <div>Loading partners...</div>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">Code</th>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Commission</th>
                <th className="py-2 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => (
                <tr key={p.code} className="border-b">
                  <td className="py-2 pr-4">{p.code}</td>
                  <td className="py-2 pr-4">{p.name}</td>
                  <td className="py-2 pr-4">{p.status}</td>
                  <td className="py-2 pr-4">
                    <input
                      type="number"
                      defaultValue={p.commission}
                      min={0}
                      max={100}
                      step={1}
                      onBlur={(e) => updatePartner(p.code, { commission: Number(e.target.value) })}
                      className="w-24 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="py-2 pr-4 space-x-2">
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => updatePartner(p.code, { status: 'active' })}
                    >
                      Approve
                    </button>
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => updatePartner(p.code, { status: 'inactive' })}
                    >
                      Reject
                    </button>
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => viewFlags(p.code)}
                    >
                      Fraud Flags
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Fraud Flags • {selected}</h2>
          <ul className="list-disc pl-6">
            {flags.map((f, idx) => (
              <li key={idx}>
                <span className="font-medium">{f.type}</span> — {f.severity}{' '}
                {f.note && <span className="text-gray-500">({f.note})</span>}
              </li>
            ))}
            {flags.length === 0 && (
              <li className="text-gray-500 list-none">No flags</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}