<<<<<<< HEAD
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
=======
import Head from 'next/head';

export default function OffworldConsole() {_const [chat, _setChat] = useState('');
  const [voteChoice, _setVoteChoice] = useState('yes');
  const [proposalId, _setProposalId] = useState('prop-1');
  const [name, _setName] = useState('');
  const [skills, _setSkills] = useState('');
  const [status, _setStatus] = useState('');

  async function sendChat() {
    setStatus('Sending chat...');
    const _res = await fetch('/api/offworld/orbit?action=chat', _{ method: 'POST', _headers: { 'content-type': 'application/json'}, body: JSON.stringify({_from: 'anon', _text: chat}) });
    setStatus(res.ok ? 'Chat sent' : 'Chat failed');
  }

  async function castVote() {_setStatus('Recording vote...');
    const _res = await fetch('/api/offworld/orbit?action=vote', _{ method: 'POST', _headers: { 'content-type': 'application/json'}, body: JSON.stringify({_proposalId, _voter: 'anon', _choice: voteChoice}) });
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed');
  }

  async function syncProfile() {_setStatus('Pinning profile...');
    const _res = await fetch('/api/offworld/ipfs?action=json', _{ method: 'POST', _headers: { 'content-type': 'application/json'}, body: JSON.stringify({_profile: { name, _skills: skills.split(', _').map(s => s.trim())} }) });
    const _data = await res.json();
    setStatus(res.ok ? `Profile CID: ${_data.cid}` : 'Profile pin failed');
  }

  async function broadcast() {_setStatus('Broadcasting manifesto...');
    const _res = await fetch('/api/offworld/ipfs?action=broadcast', _{ method: 'POST', _headers: { 'content-type': 'application/json'}, body: JSON.stringify({_message: 'We build beyond platforms.'}) });
    setStatus(res.ok ? 'Broadcast sent' : 'Broadcast failed');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <div className=&quot;min-h-screen p-8 space-y-8&quot;>
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className=&quot;text-2xl font-bold&quot;>Offworld Console</h1>

<<<<<<< HEAD
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
=======
      <section className="space-y-2">
        <h2 className="font-semibold">Chat</h2>
        <input className="border p-2 w-full" placeholder="Type message" value={_chat} onChange={_e => setChat(e.target.value)} />
        <button className="px-3 py-2 bg-black text-white rounded" onClick={_sendChat}>Send</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">DAO Voting</h2>
        <input className="border p-2 w-full" placeholder="Proposal ID" value={_proposalId} onChange={_e => setProposalId(e.target.value)} />
        <select className="border p-2" value={_voteChoice} onChange={_e => setVoteChoice(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="abstain">Abstain</option>
        </select>
        <button className="px-3 py-2 bg-black text-white rounded" onClick={_castVote}>Vote</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Talent Profile Sync</h2>
        <input className="border p-2 w-full" placeholder="Name" value={_name} onChange={_e => setName(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Skills (comma separated)" value={_skills} onChange={_e => setSkills(e.target.value)} />
        <button className="px-3 py-2 bg-black text-white rounded" onClick={_syncProfile}>Pin Profile to IPFS</button>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Broadcast Manifesto</h2>
        <button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={_broadcast}>Broadcast</button>
      </section>

      {_status && <p className="text-sm text-gray-700">{status}</p>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}