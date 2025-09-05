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
  }

  return (
    <div className="min-h-screen p-8 space-y-8">
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className="text-2xl font-bold">Offworld Console</h1>

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
    </div>
  );
}