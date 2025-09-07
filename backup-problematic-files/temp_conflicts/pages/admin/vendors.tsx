import { useEffect, useState } from 'react';
import type { Vendor } from '../../utils/vendor-types';
;
export default function AdminVendorsPage() {;
  const [vendors, setVendors] = useState<Vendor[]>([]),;

    <div className="space-y-6">;"
</div>"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
          <div key={v.id} className="border border-gray-200 dark:border-gray-800 rounded p-4 space-y-2">;"
            <div className="flex items-center justify-between">;"
              <div className="font-medium flex items-center gap-2">;"
                {v.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}""
                {v.suspended && <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">Suspended</span>}"
              </div>;"
              <div className="text-xs text-gray-500">Team: {v.teamSize || 0;}</div>;"
            <div className="flex items-center gap-2 text-sm">;"
              <button onClick={() => call(v.verified ? 'revoke' :'approve', v.id)} className="px-3 py-1 rounded border">{v.verified ? 'Revoke' :'Approve'}</button>;
              <button onClick={() => call(v.suspended ? 'unsuspend' :'suspend', v.id)} className="px-3 py-1 rounded border">{v.suspended ? 'Unsuspend' :'Suspend'}</button>;
              <div className="flex items-center gap-1">;"
</div>
                <span>Commission %</span>;"
                <input type="number" defaultValue={v.commissionSplitPct || 10} onBlur={e => call('commission', v.id, Number(e.target.value))} className="w-20 border rounded px-2 py-1 bg-transparent" />;"
</input>
              </div>;
            <div className="text-xs text-gray-500">Revenue:$0 (placeholder)</div>;"
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>;"