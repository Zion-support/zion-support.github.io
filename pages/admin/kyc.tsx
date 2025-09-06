
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../utils/kyc',;
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';

export default function AdminKycPage() {

    load()
  }, [])
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
=======
import React, { useEffect, useState } from 'react',;
import Head from 'next/head',;
import type { KycProfile } from '../../utils/kyc',;
=======
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { KycProfile } from '../../utils/kyc';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function AdminKycPage() {
  const [queue, setQueue] = useState<KycProfile[]>([])
  const [reason, setReason] = useState<string>('')
  async function load() {
    const res = await fetch('/api/admin/kyc-queue')
    const data = await res.json()
    if (data.ok) setQueue(data.queue)
  }
  useEffect(() => {
    load()
  }, [])
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, action, reason: reason |undefined })})
    const data = await res.json()

    if (data.ok) load()
  }
  const [queue, setQueue] = useState<KycProfile[]>([]);
  const [reason, setReason] = useState<string>('');
  async function load() {
    const res = await fetch('/api/admin/kyc-queue');
    const data = await res.json();
    if (data.ok) setQueue(data.queue);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => {
    load();
  }, []);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ userId, action, reason: reason || undefined })}),
    const data = await res.json();
    if (data.ok) load()
  }
    if (data.ok) load()
  }


    if (data.ok) load()
  }

}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <div className="mb-4">
          <label className="block text-sm font-medium">Reason/Note (optional)</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                </div>
                <div className="flex gap-2">
                  <button onClick={() => act(p.userId, 'approve')} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>
                  <button onClick={() => act(p.userId, 'needs_more_info')} className="px-3 py-1 rounded bg-yellow-600 text-white">Need Info</button>
                  <button onClick={() => act(p.userId, 'reject')} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="font-medium text-sm mb-1">Documents</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

=======
                  {(p.documents |[]).map((d) => (
                  {(p.documents || []).map((d) => (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    <div key={d.id} className="border rounded p-2 text-xs">
                      <div>Kind: {d.kind}</div>
                      <div>Filename: {d.filename}</div>
                      <div>Uploaded: {new Date(d.uploadedAt).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
  ),
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
