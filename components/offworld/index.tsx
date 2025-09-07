

import { useState  } from 'react';
import Head from 'next/head';
export default function OffworldConsole() {
  const [chat, setChat] = useState($2);
  const [voteChoice, setVoteChoice] = useState($2);
  const [proposalId, setProposalId] = useState($2);
  const [name, setName] = useState($2);
  const [skills, setSkills] = useState($2);
  const [status, setStatus] = useState($2);
  async function sendChat() {
    setStatus($2);
    const res = await fetch('/api/offworld/orbit?action=chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ from: 'anon', text: chat}) }),
    setStatus(res.ok ? 'Chat sent' : 'Chat failed')
  }

  async function castVote() {
    setStatus($2);
    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice}) }),
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed')
  }

  async function syncProfile() {
    setStatus($2);
    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s = $2;
    const data = await res.json($2);
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }

  async function broadcast() {
    setStatus($2);
    const res = await fetch('/api/offworld/ipfs?action=broadcast', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message: 'We build beyond platforms.' }) }),
    setStatus(res.ok ? 'Broadcast sent' : 'Broadcast failed')
  }

  return (
    <div className="min-h-screen p-8 space-y-8">
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className="text-2xl font-bold">Offworld Console</h1>

      <section className="space-y-2">
        <h2 className="font-semibold">Chat</h2>
        <input className="border p-2 w-full" placeholder="Type message" value={chat} onChange={e => setChat(e.target.value)} />
        <button className="px-3 py-2 bg-black text-white rounded" onClick={sendChat}>Send</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">DAO Voting</h2>
        <input className="border p-2 w-full" placeholder="Proposal ID" value={proposalId} onChange={e => setProposalId(e.target.value)} />
        <select className="border p-2" value={voteChoice} onChange={e => setVoteChoice(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="abstain">Abstain</option>
        </select>
        <button className="px-3 py-2 bg-black text-white rounded" onClick={castVote}>Vote</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Talent Profile Sync</h2>
        <input className="border p-2 w-full" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Skills (comma separated)" value={skills} onChange={e => setSkills(e.target.value)} />
        <button className="px-3 py-2 bg-black text-white rounded" onClick={syncProfile}>Pin Profile to IPFS</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Broadcast Manifesto</h2>
        <button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={broadcast}>Broadcast</button>
      </section>

      {status && <p className="text-sm text-gray-700">{status}</p>}
    </div>

  );

);
}
