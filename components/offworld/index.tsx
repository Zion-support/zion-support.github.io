import { useState } from 'react',
import Head from 'next/head',
export default function OffworldConsole() {
  const [chat, setChat] = useState(''),
  const [voteChoice, setVoteChoice] = useState('yes'),
  const [proposalId, setProposalId] = useState('prop-1'),
  const [name, setName] = useState(''),
  const [skills, setSkills] = useState(''),
  const [status, setStatus] = useState(''),

  async function sendChat() {
    setStatus('Sending chat...'),
    const res = await fetch('/api/offworld/orbit?action=chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ from: 'anon', text: chat }) }),
    setStatus(res.ok ? 'Chat sent' : 'Chat failed')
  }

  async function castVote() {
    setStatus('Recording vote...'),
    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }) }),
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed')
  }

  async function syncProfile() {
    setStatus('Pinning profile...'),
    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),
    const data = await res.json(),
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }

  async function broadcast() {
    setStatus('Broadcasting manifesto...'),
    const res = await fetch('/api/offworld/ipfs?action=broadcast', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message: 'We build beyond platforms.' }) }),
    setStatus(res.ok ? 'Broadcast sent' : 'Broadcast failed')
  }

  return (
    <div className=&quot;min-h-screen p-8 space-y-8&quot;>
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className=&quot;text-2xl font-bold&quot;>Offworld Console</h1>

      <section className=&quot;space-y-2&quot;>
        <h2 className=&quot;font-semibold&quot;>Chat</h2>
        <input className=&quot;border p-2 w-full&quot; placeholder=&quot;Type message&quot; value={chat} onChange={e => setChat(e.target.value)} />
        <button className=&quot;px-3 py-2 bg-black text-white rounded&quot; onClick={sendChat}>Send</button>
      </section>

      <section className=&quot;space-y-2&quot;>
        <h2 className=&quot;font-semibold&quot;>DAO Voting</h2>
        <input className=&quot;border p-2 w-full&quot; placeholder=&quot;Proposal ID&quot; value={proposalId} onChange={e => setProposalId(e.target.value)} />
        <select className=&quot;border p-2&quot; value={voteChoice} onChange={e => setVoteChoice(e.target.value)}>
          <option value=&quot;yes&quot;>Yes</option>
          <option value=&quot;no&quot;>No</option>
          <option value=&quot;abstain&quot;>Abstain</option>
        </select>
        <button className=&quot;px-3 py-2 bg-black text-white rounded&quot; onClick={castVote}>Vote</button>
      </section>

      <section className=&quot;space-y-2&quot;>
        <h2 className=&quot;font-semibold&quot;>Talent Profile Sync</h2>
        <input className=&quot;border p-2 w-full&quot; placeholder=&quot;Name&quot; value={name} onChange={e => setName(e.target.value)} />
        <input className=&quot;border p-2 w-full&quot; placeholder=&quot;Skills (comma separated)&quot; value={skills} onChange={e => setSkills(e.target.value)} />
        <button className=&quot;px-3 py-2 bg-black text-white rounded&quot; onClick={syncProfile}>Pin Profile to IPFS</button>
      </section>

      <section className=&quot;space-y-2&quot;>
        <h2 className=&quot;font-semibold&quot;>Broadcast Manifesto</h2>
        <button className=&quot;px-3 py-2 bg-indigo-600 text-white rounded&quot; onClick={broadcast}>Broadcast</button>
      </section>

      {status && <p className=&quot;text-sm text-gray-700&quot;>{status}</p>}
    </div>
  )
}