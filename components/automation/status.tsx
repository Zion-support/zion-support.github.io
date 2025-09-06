<<<<<<< HEAD
 </div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
}</div>) 
=======
<<<<<<< HEAD
<<<<<<< HEAD
 </div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
}</div>) 
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useEffect, useState } from 'react';

export default function AutomationStatusPage() {
  const [status, setStatus] = useState<{ runAt?: string, ok?: boolean } | null>(null);

  useEffect(() => {
    fetch('/automation/status.json')
      .then((r) => r.json())
      .then((j) => setStatus(j))
      .catch(() => setStatus(null))
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>
      {status ? (
        <div className="rounded-lg border p-4 text-sm">
          <div>Last Run: {new Date(status.runAt || '').toLocaleString() || '—'}</div>
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
