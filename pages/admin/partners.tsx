import { useEffect, useState } from 'react';

export default function AdminPartners() {
  const [partners, setPartners] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/partners/list');
        if (!res.ok) return;
        const data = await res.json();
        setPartners(data.partners || []);
      } catch (error) {
        console.error('Failed to load partners:', error);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Partner Management</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Partners</h2>
            <div className="space-y-2">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className={`p-3 rounded cursor-pointer ${
                    selected === partner.id ? 'bg-blue-600' : 'bg-gray-700'
                  }`}
                  onClick={() => setSelected(partner.id)}
                >
                  <div className="font-medium">{partner.name}</div>
                  <div className="text-sm text-gray-400">{partner.email}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Partner Details</h2>
            {selected ? (
              <div>
                <p>Partner details for: {selected}</p>
              </div>
            ) : (
              <p className="text-gray-400">Select a partner to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}