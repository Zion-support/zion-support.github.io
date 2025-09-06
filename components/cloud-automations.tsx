import React, { useEffect, useState } from 'react';

export default function CloudAutomationsPage() {;

export default function CloudAutomationsPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/cloud-automations-status')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);

  const items = data?.data ? Object && Object.entries(data && data.data) : [];

  return (


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ) : null}
          </div>;
        ))}
      </div>
    </div>
);
}
  );
}
