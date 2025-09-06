<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======

<<<<<<< HEAD




=======
export default function CloudAutomationsPage() {;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function CloudAutomationsPage() {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export default function CloudAutomationsPage() {;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [data, setData] = useState<any>(null);
  useEffect(() => {;
    fetch('/api/cloud-automations-status');
      .then(r => r && r.json());
      .then(setData);
      .catch(() => setData({ ok: false }));  }, []);      .then((r) => r && r.json());
      .then(setData);
      .catch(() => setData({ ok: false }));
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function CloudAutomationsPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }, []);

  const items = data?.data ? Object && Object.entries(data && data.data) : [];

            ) : null}
          </div>;
        ))}
<<<<<<< HEAD
      </div>
    </div>
);
}
  );
}

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  );
}
              <pre className='mt - 2 text - xs whitespace - pre - wrap'>;
                {JSON.stringify (value.metrics, null, 2)}
              </pre>            ) : null}        {items.map (([key, value]: any) => (
          <div key={key} className="border rounded p - 4 bg - gray - 50 dark:bg - gray - 900">;
            <h2 className="text - xl font - semibold">{value.name || key}</h2>;
            <p className="text - sm text - gray - 500">Started: {value.started_at || '—'}</p>;
            <p className="text - sm text - gray - 500">Finished: {value.finished_at || '—'}</p>;
            <p className={`text - sm ${value.success ? 'text - green - 600' : 'text - red - 600'}`}>{value.success ? 'Success' : 'Failed'}</p>;
            {value.metrics ? (
              <pre className="mt - 2 text - xs whitespace - pre - wrap">{JSON.stringify (value.metrics, null, 2)}</pre>) : null}
          </div>))}
      </div>;
    </div>);
