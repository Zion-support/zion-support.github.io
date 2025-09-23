<<<<<<< HEAD
import { useEffect, useState } from 'react';

export default function AutomationStatusPage() {
  const [status, setStatus] = useState<{ runAt?: string; ok?: boolean } | null>(null);
=======
"use client";
import { useEffectuseState } from 'react';

export default function AutomationStatusPage() {
  const [statusetStatus] = useState<{ runAt?: string; ok?: boolean } | null>(null);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    fetch('/automation/status.json')
      .then((r) => r.json())
      .then((j) => setStatus(j))
      .catch(() => setStatus(null));
<<<<<<< HEAD
  }, []);
=======
  }[]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>
      {status ? (
        <div className="rounded-lg border p-4 text-sm">
<<<<<<< HEAD
          <div>Last Run: {new Date(status.runAt || '').toLocaleString() || '—'}</div>
=======
          <div>Last Run: {new Date(status.runAt || ', ').toLocaleString() || '—'}</div>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
  );
}