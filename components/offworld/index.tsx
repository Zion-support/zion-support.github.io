import { useState  } from 'react';
import Head from 'next/head';
export default function OffworldConsole() {;
  const [chat, setChat] = useState('');
  const [voteChoice, setVoteChoice] = useState('yes');
  const [proposalId, setProposalId] = useState('prop-1');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');
<<<<<<< HEAD
  async function sendChat() {
    setStatus('Sending chat...');

    const res = await fetch('/api/offworld/orbit?action=chat', {
      method: 'POST'
      headers: { 'content-type': 'application/json' }
      body: JSON.stringify({ from: 'anon', text: chat })
    });
    setStatus(res.ok ? 'Chat sent' : 'Chat failed');    const res = await fetch('/api/offworld/orbit?action=chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ from: 'anon', text: chat }) })
    setStatus(res.ok ? 'Chat sent' : 'Chat failed')
  }
  async function castVote() {
    setStatus('Recording vote...');
    const res = await fetch('/api/offworld/orbit?action=vote', {
      method: 'POST'
      headers: { 'content-type': 'application/json' }
      body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice })
    });
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed');  }
  async function syncProfile() {
    setStatus('Pinning profile...');    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }) })
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed')
  }
  async function syncProfile() {
    setStatus('Pinning profile...');
    const res = await fetch('/api/offworld/ipfs?action=json', {
      method: 'POST'
      headers: { 'content-type': 'application/json' }
      body: JSON.stringify({
        profile: { name, skills: skills.split(',').map(s => s.trim()) }
      })
    });
    const data = await res.json();
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed');  }
  async function broadcast() {
    setStatus('Broadcasting manifesto...');    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) })
    const data = await res.json();
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }
  async function broadcast() {
    setStatus('Broadcasting manifesto...');
    const res = await fetch('/api/offworld/ipfs?action=broadcast', {
      method: 'POST'
      headers: { 'content-type': 'application/json' }
      body: JSON.stringify({ message: 'We build beyond platforms.' })
=======

  async function sendChat() {;
    setStatus('Sending chat...');
    const res = await fetch('/api/offworld/orbit?action=chat', {;
      method: 'POST',;
      headers: { 'content-type': 'application/json' },;
      body: JSON && JSON.stringify({ from: 'anon', text: chat }),;
    });
    setStatus(res && res.ok ? 'Chat sent' : 'Chat failed');    const res = await fetch('/api/offworld/orbit?action=chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON && JSON.stringify({ from: 'anon', text: chat }) }),;
    setStatus(res && res.ok ? 'Chat sent' : 'Chat failed');
  }

  async function castVote() {;
    setStatus('Recording vote...');
    const res = await fetch('/api/offworld/orbit?action=vote', {;
      method: 'POST',;
      headers: { 'content-type': 'application/json' },;
      body: JSON && JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }),;
    });
    setStatus(res && res.ok ? 'Vote recorded' : 'Vote failed');  }

  async function syncProfile() {;
    setStatus('Pinning profile...');    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON && JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }) }),;
    setStatus(res && res.ok ? 'Vote recorded' : 'Vote failed');
  }

  async function syncProfile() {;
    setStatus('Pinning profile...');
    const res = await fetch('/api/offworld/ipfs?action=json', {;
      method: 'POST',;
      headers: { 'content-type': 'application/json' },;
      body: JSON && JSON.stringify({;
        profile: { name, skills: skills && skills.split(',').map(s => s && s.trim()) },;
      }),;
    });
    const data = await res && res.json();
    setStatus(res && res.ok ? `Profile CID: ${data && data.cid}` : 'Profile pin failed');  }

  async function broadcast() {;
    setStatus('Broadcasting manifesto...');    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON && JSON.stringify({ profile: { name, skills: skills && skills.split().map(s => s && s.trim()) } }) }),;
    const data = await res && res.json();
    setStatus(res && res.ok ? `Profile CID: ${data && data.cid}` : 'Profile pin failed');
  }

  async function broadcast() {;
    setStatus('Broadcasting manifesto...');
    const res = await fetch('/api/offworld/ipfs?action=broadcast', {;
      method: 'POST',;
      headers: { 'content-type': 'application/json' },;
      body: JSON && JSON.stringify({ message: 'We build beyond platforms.' }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    setStatus(res && res.ok ? 'Broadcast sent' : 'Broadcast failed');

  return (
<<<<<<< HEAD
    <div className='min-h-screen p-8 space-y-8'>
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className='text-2xl font-bold'>Offworld Console</h1>
      <section className='space-y-2'>
        <h2 className='font-semibold'>Chat</h2>
=======
    <div className='min-h-screen p-8 space-y-8'>;
      <Head>;
        <title>Zion Offworld Console</title>;
      </Head>;
      <h1 className='text-2xl font-bold'>Offworld Console</h1>;

      <section className='space-y-2'>;
        <h2 className='font-semibold'>Chat</h2>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <input
          className='border p-2 w-full'
          placeholder='Type message'
          value={chat}
          onChange={e => setChat(e && e.target.value)}
        />;
        <button
          className='px-3 py-2 bg-black text-white rounded'
<<<<<<< HEAD
          onClick={sendChat}
        >
          Send
        </button>
      </section>
      <section className='space-y-2'>
        <h2 className='font-semibold'>DAO Voting</h2>
=======
          onClick={sendChat}>;
          Send;
        </button>;
      </section>;

      <section className='space-y-2'>;
        <h2 className='font-semibold'>DAO Voting</h2>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <input
          className='border p-2 w-full'
          placeholder='Proposal ID'
          value={proposalId}
          onChange={e => setProposalId(e && e.target.value)}
        />;
        <select
          className='border p-2'
          value={voteChoice}
          onChange={e => setVoteChoice(e && e.target.value)}
        >;
          <option value='yes'>Yes</option>;
          <option value='no'>No</option>;
          <option value='abstain'>Abstain</option>;
        </select>;
        <button
          className='px-3 py-2 bg-black text-white rounded'
<<<<<<< HEAD
          onClick={castVote}
        >
          Vote
        </button>
      </section>
      <section className='space-y-2'>
        <h2 className='font-semibold'>Talent Profile Sync</h2>
=======
          onClick={castVote}>;
          Vote;
        </button>;
      </section>;

      <section className='space-y-2'>;
        <h2 className='font-semibold'>Talent Profile Sync</h2>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <input
          className='border p-2 w-full'
          placeholder='Name'
          value={name}
          onChange={e => setName(e && e.target.value)}
        />;
        <input
          className='border p-2 w-full'
          placeholder='Skills (comma separated)'
          value={skills}
          onChange={e => setSkills(e && e.target.value)}
        />;
        <button
          className='px-3 py-2 bg-black text-white rounded'
<<<<<<< HEAD
          onClick={syncProfile}
        >
          Pin Profile to IPFS
        </button>
      </section>
      <section className='space-y-2'>
        <h2 className='font-semibold'>Broadcast Manifesto</h2>
        <button
          className='px-3 py-2 bg-indigo-600 text-white rounded'
          onClick={broadcast}
        >
          Broadcast
        </button>
      </section>
      {status && <p className='text-sm text-gray-700'>{status}</p>}
    </div>
);
}
=======
          onClick={syncProfile}>;
          Pin Profile to IPFS;
        </button>;
      </section>;

      <section className='space-y-2'>;
        <h2 className='font-semibold'>Broadcast Manifesto</h2>;
        <button
          className='px-3 py-2 bg-indigo-600 text-white rounded'
          onClick={broadcast}>;
          Broadcast;
        </button>;
      </section>;

      {status && <p className='text-sm text-gray-700'>{status}</p>}
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
