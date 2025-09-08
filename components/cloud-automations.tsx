




export default function CloudAutomationsPage() {;

fetch ('/api/cloud-automations-status') .then ( (r) => r.json () ) .then (setData) ) : null 
}</div>) ) 
}</div> </div>) 
}


export default function CloudAutomationsPage() {

export default function CloudAutomationsPage() {;
  const [data, setData] = useState<any>(null);
  useEffect(() => {;
    fetch('/api/cloud-automations-status');
      .then(r => r && r.json());
      .then(setData);}
      .catch(() => setData({ ok: false,}
}));  }, []);      .then((r) => r && r.json());
      .then(setData);
      .catch(() => setData({ ok: false }));  }, []);      .then((r) => r && r.json());
      .then(setData);
      .catch(() => setData({ ok: false }));

export default function CloudAutomationsPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))

  }, []);


  const items = null;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className='space-y-6'    />
      <h1 className='text-3xl font-bold'    />Cloud Automations</h1>
      <p className='text-gray-600 dark:text-gray-300'    />
        Autonomous agents running in the cloud. No servers to babysit. No manual;
ops.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'    />
        {items.map(([key, value]: any) => (}
          <div;}
key={key}
            className='border rounded p-4 bg-gray-50 dark: bg-gray-900'    />

            <h2 className='text-xl font-semibold'    />{value.name |ke,}
}</h2>;
            <p className='text-sm text-gray-500'    />;
              Started: {value.startedAt |'—,}
}
            </p>;
            <p className='text-sm text-gray-500'    />;
              Finished: {value.finishedAt |'—,}
}
            </p>;
            <p;
              className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}    />

              {value.success ? 'Success' : 'Failed'}
            </p>;
            {value.metrics ? (<pre className='mt-2 text-xs whitespace-pre-wrap'    />;}
                {JSON.stringify(value.metrics, null, 2)}

              </pre>
            ) : null}
          </div>;
        ))}


=======
  );
}

  );
}
              <pre className='mt - 2 text - xs whitespace - pre - wrap'>;
                {JSON.stringify (value.metrics, null, 2)}
              </pre>            ) : null}        {items.map (([key, value]: any) => (
          <div key={key} className="border rounded p - 4 bg - gray - 50 dark:bg-gray-900">;
            <h2 className="text-xl font-semibold">{value.name || key}</h2>;
            <p className="text - sm text-gray-500">Started: {value.started_at || '—'}</p>;
            <p className="text - sm text-gray-500">Finished: {value.finished_at || '—'}</p>;
            <p className={`text - sm ${value.success ? 'text - green - 600' : 'text - red - 600'}`}>{value.success ? 'Success' : 'Failed'}</p>;
            {value.metrics ? (
              <pre className="mt - 2 text - xs whitespace-pre-wrap">{JSON.stringify (value.metrics, null, 2)}</pre>) : null}
          </div>))}
      </div>;
    </div>);
}

  );
}

  const items = data?.data ? Object.entries(data.data) : []

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-3xl font-bold&quot;>Cloud Automations</h1>
      <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Autonomous agents running in the cloud. No servers to babysit. No manual ops.</p>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        {items.map(([key, value]: any) => (
          <div key={key} className=&quot;border rounded p-4 bg-gray-50 dark:bg-gray-900&quot;>
            <h2 className=&quot;text-xl font-semibold&quot;>{value.name || key}</h2>
            <p className=&quot;text-sm text-gray-500&quot;>Started: {value.startedAt || '—'}</p>
            <p className=&quot;text-sm text-gray-500&quot;>Finished: {value.finishedAt || '—'}</p>
            <p className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}>{value.success ? 'Success' : 'Failed'}</p>
            {value.metrics ? (
              <pre className='mt-2 text-xs whitespace-pre-wrap'>{JSON.stringify(value.metrics, null, 2)}</pre>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


);
}
  );
}
