import React from 'react';

export default function ITServicesIndex(props: any) {
  const tiers = [
    { name: 'Managed IT Essentials', price: 'From $1,999/mo', bullets: ['Helpdesk (24/7)', 'Endpoint mgmt', 'Patch & backups'] },
    { name: 'Cybersecurity Suite', price: 'From $2,999/mo', bullets: ['MDR/XDR', 'Vulnerability scans', 'Incident response runbook'] },
    { name: 'Cloud & DevOps', price: 'From $3,999/mo', bullets: ['IaC (Terraform)', 'CI/CD pipelines', 'Observability & SLOs'] }
  ];
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
        <p className="text-gray-600 mb-8">Reliable operations, strong security, and scalable infrastructure.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
              <div className="text-blue-600 mb-3">{t.price}</div>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {t.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

