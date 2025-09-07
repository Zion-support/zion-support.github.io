import { useEffect, useMemo, useState } from 'react';''
import { BrowserProvider } from 'ethers';''
import dynamic from 'next/dynamic';'
;
// Lazy import to avoid SSR issues;'
const ReactJson = dynamic(() => import('react-json-view'), { ssr:false }) as any;'
;
export default function ZkVotePage() {;'
  const [account, setAccount] = useState<string>('');'
</string>
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
</BrowserProvider>'
  const [identityCommitment, setIdentityCommitment] = useState<string>('');'
</string>'
  const [groupId, setGroupId] = useState<string>('123456789');'
</string>
  const [optionId, setOptionId] = useState<number>(0);
</number>'
  const [weight, setWeight] = useState<string>('0');'
</string>
  const [proof, setProof] = useState<any>(null);
</any>
  const [result, setResult] = useState<any>(null);
</any>'
    <div className="max-w-2xl mx-auto p-6 space-y-4">;"
</div>"
      <div className="space-x-2">;"
</div>"
        <button className="px-3 py-1 rounded bg-black text-white" onClick={connect}>Connect Wallet</button>;""
        <span className="text-sm opacity-70">{account || 'Not connected'}</span>;'
      </div>;'
      <div className="space-y-2">;"
</div>"
        <label className="block text-sm">Group ID</label>;""
        <input className="w-full border p-2 rounded" value={groupId} onChange={e=>setGroupId(e.target.value)} />;"
</input>"
        <label className="block text-sm">Option ID</label>;""
        <input className="w-full border p-2 rounded" type="number" value={optionId} onChange={e=>setOptionId(parseInt(e.target.value||'0',10))} />;'
</input>'
        <label className="block text-sm">Weight (ZION$)</label>;""
        <input className="w-full border p-2 rounded" type="number" value={weight} onChange={e=>setWeight(e.target.value)} />;"
</input>
      </div>;"
      <div className="space-x-2">;"
</div>"
        <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={generateIdentity}>Generate ZK Identity</button>;"
      </div>;"
      <div className="space-x-2">;"
</div>"
        <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={makeProof}>Create Proof (mock)</button>;""
        <button disabled={!proof || submitting} className="px-3 py-1 rounded bg-green-600 text-white disabled:opacity-50" onClick={submitVote}>Submit Vote</button>;"
      </div>;
      <div>;
</div>"
        <h2 className="font-medium">Proof</h2>;""
        {proof ? <ReactJson name={false} src={proof} collapsed={1} /> :<p className="text-sm opacity-70">No proof yet</p>}"
</ReactJson>
      </div>;
      <div>;
</div>"
        <h2 className="font-medium">Result</h2>;""
        {result ? <ReactJson name={false} src={result} collapsed={1} /> :<p className="text-sm opacity-70">No submission</p>}"
</ReactJson>
      </div>;
    </div>;"