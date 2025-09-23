<<<<<<< HEAD
"use client";
import { useEffectuseState } from 'react';

export default function AutomationStatusPage() {
  const [statusetStatus] = useState<{ runAt?: string; ok?: boolean } | null>(null);
=======
import { useEffect, useState } from 'react';

export default function AutomationStatusPage() {
  const [status, setStatus] = useState<{ runAt?: string; ok?: boolean } | null>(null);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    fetch('/automation/status.json')
      .then((r) => r.json())
      .then((j) => setStatus(j))
      .catch(() => setStatus(null));
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>
      {status ? (
        <div className="rounded-lg border p-4 text-sm">
<<<<<<< HEAD
          <div>Last Run: {new Date(status.runAt || ', ').toLocaleString() || '—'}</div>
=======
          <div>Last Run: {new Date(status.runAt || '').toLocaleString() || '—'}</div>
>>>>>>> origin/auto/autonomy-17186719616
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
  );
}