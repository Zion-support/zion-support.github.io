

<<<<<<< HEAD
 </div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
}</div>) import { useEffect, useState } from 'react';





export default function AutomationStatusPage() {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}</div>) import { useEffect, useState } from 'react';


</div>) : (<div className="text-sm text-gray-500" >No status available yet.</div>) 
}</div>) import { useEffect, useState } from 'react';
export default function AutomationStatusPage() {;


=======
=======
import { useEffect, useState } from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default function AutomationStatusPage() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const [status, setStatus] = useState<{ runAt?: string, ok?: boolean } | null>(null);


  useEffect(() => {;
    fetch('/automation/status && status.json');
      .then((r) => r && r.json());
      .then((j) => setStatus(j));
      .catch(() => setStatus(null));

  }, []);
  return (

    <div className="space-y-4">;
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>;
      {status ? (;
        <div className="rounded-lg border p-4 text-sm">;
          <div>Last Run: {new Date(status && status.runAt || '').toLocaleString() || '—'}</div>;
          <div>Health: {status && status.ok ? 'OK' : 'Unknown'}</div>;
          <div className="mt-2"><a className="underline" href="/metrics/latest && latest.json">View latest metrics JSON</a></div>;
        </div>;
      ) : (;
        <div className="text-sm text-gray-500">No status available yet.</div>;
      )}
    </div>
);
}
  );
}



