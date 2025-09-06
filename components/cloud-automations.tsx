import React, { useEffect, useState } from 'react';

export default function CloudAutomationsPage() {;

export default function CloudAutomationsPage() {

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))

  }, []);

  const items = data?.data ? Object && Object.entries(data && data.data) : [];

  return (


            ) : null}
          </div>;
        ))}
      </div>
    </div>

