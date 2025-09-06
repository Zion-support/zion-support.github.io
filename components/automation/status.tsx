<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
</div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>)
=======
</div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
}</div>) import { useEffect, useState } from 'react';
export default function AutomationStatusPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
 </div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</div>) import { useEffect, useState } from 'react';

export default function AutomationStatusPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
          <div>Last Run: {new Date(status.runAt |'').toLocaleString() |'—'}</div>
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD
 </div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>)
}</div>)
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
