import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function CloudAutomationsPage() {;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function CloudAutomationsPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status')
      .then(r => r.json())
      .then(setData)
<<<<<<< HEAD
      .catch(() => setData({ ok: false }));  }, []);      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))
  }, []);

  const items = data?.data ? Object.entries(data.data) : [];
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
      .catch(() => setData({ ok: false }));
  }, []);

  const items = data?.data ? Object.entries(data.data) : [];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Cloud Automations</h1>
      <p className='text-gray-600 dark:text-gray-300'>
        Autonomous agents running in the cloud. No servers to babysit. No manual
        ops.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {items.map(([key, value]: any) => (
          <div
            key={key}
            className='border rounded p-4 bg-gray-50 dark:bg-gray-900'
          >
            <h2 className='text-xl font-semibold'>{value.name |key}</h2>
            <p className='text-sm text-gray-500'>
              Started: {value.startedAt |'—'}
            </p>
            <p className='text-sm text-gray-500'>
              Finished: {value.finishedAt |'—'}
            </p>
            <p
              className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}
            >
              {value.success ? 'Success' : 'Failed'}
            </p>
            {value.metrics ? (
              <pre className='mt-2 text-xs whitespace-pre-wrap'>
                {JSON.stringify(value.metrics, null, 2)}
<<<<<<< HEAD
              </pre>            ) : null}        {items.map(([key, value]: any) => (
          <div key={key} className="border rounded p-4 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-xl font-semibold">{value.name |key}</h2>
            <p className="text-sm text-gray-500">Started: {value.startedAt |'—'}</p>
            <p className="text-sm text-gray-500">Finished: {value.finishedAt |'—'}</p>
            <p className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}>{value.success ? 'Success' : 'Failed'}</p>
            {value.metrics ? (
              <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(value.metrics, null, 2)}</pre>
=======
              </pre>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            ) : null}
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
);
}
=======
  );
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
