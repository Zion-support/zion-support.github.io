<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';


import Head from 'next/head';


<<<<<<< HEAD
import { useState  } from 'react';
import {useState} from 'react';
import Head from 'next/head';
export default function OffworldConsole() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { useState  } from 'react';
import {useState} from 'react';
import Head from 'next/head';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [chat, setChat] = useState('');
  const [voteChoice, setVoteChoice] = useState('yes');
  const [proposalId, setProposalId] = useState('prop-1');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }) }),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const res = await fetch('/api/offworld/orbit?action=chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ from: 'anon', text: chat }) }),
    setStatus(res.ok ? 'Chat sent' : 'Chat failed')
  }


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

    const res = await fetch('/api/offworld/orbit?action=vote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }) }),

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed')
  }
  async function syncProfile() {
    setStatus('Pinning profile...');
<<<<<<< HEAD
<<<<<<< HEAD
    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),
=======

    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const data = await res.json();
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }
  async function broadcast() {
<<<<<<< HEAD


<<<<<<< HEAD
    setStatus('Broadcasting manifesto...');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async function sendChat() {;
    setStatus('Sending chat...');
    const res = await fetch('/api/offworld/orbit?action=chat', {;
      method: 'POST',;
      headers: { 'content-type': 'application/json' },;
      body: JSON && JSON.stringify({ from: 'anon', text: chat }),;
=======
    setStatus('Broadcasting manifesto...');
    const res = await fetch('/api/offworld/ipfs?action=broadcast', {
      method: 'POST'
      headers: { 'content-type': 'application/json' }
      body: JSON.stringify({ message: 'We build beyond platforms.' })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    });
    setStatus(res && res.ok ? 'Broadcast sent' : 'Broadcast failed');
  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    });
    setStatus(res && res.ok ? 'Broadcast sent' : 'Broadcast failed');
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='min-h-screen p-8 space-y-8'>;
      <Head>;
        <title>Zion Offworld Console</title>;
      </Head>;
      <h1 className='text-2xl font-bold'>Offworld Console</h1>;
      <section className='space-y-2'>;
        <h2 className='font-semibold'>Chat</h2>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <input
          className='border p-2 w-full'
          placeholder='Type message'
          value={chat}
          onChange={e => setChat(e && e.target.value)}
        />;
        <button
          className='px-3 py-2 bg-black text-white rounded'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={sendChat}>;
          Send;
        </button>;
      </section>;
      <section className='space-y-2'>;
        <h2 className='font-semibold'>DAO Voting</h2>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import {useState} from 'react';
import Head from 'next / head';
export default /**
 * OffworldConsole - Function description
 */
function OffworldConsole() {
  const [chat, set_chat] = useState ('');
  const [vote_choice, setVoteChoice] = useState ('yes');
  const [proposal_id, setProposalId] = useState ('prop - 1');
  const [name, set_name] = useState ('');
  const [skills, set_skills] = useState ('');
  const [status, set_status] = useState ('');
;
  async /**
 * send_chat - Function description
 */
function send_chat() {
    set_status ('Sending chat...');
    const res = await fetch ('/api / offworld / orbit?action = chat', {
      method: 'POST',
      headers: { 'content - type': 'application / json' },
      body: JSON.stringify ({ from: 'anon', text: chat }),
    });
    set_status (res.ok ? 'Chat sent' : 'Chat failed');    const res = await fetch ('/api / offworld / orbit?action = chat', { method: 'POST', headers: { 'content - type': 'application / json' }, body: JSON.stringify ({ from: 'anon', text: chat }) }),
    set_status (res.ok ? 'Chat sent' : 'Chat failed');
  }
  async /**
 * cast_vote - Function description
 */
function cast_vote() {
    set_status ('Recording vote...');
    const res = await fetch ('/api / offworld / orbit?action = vote', {
      method: 'POST',
      headers: { 'content - type': 'application / json' },
      body: JSON.stringify ({ proposal_id, voter: 'anon', choice: vote_choice }),
    });
    set_status (res.ok ? 'Vote recorded' : 'Vote failed');  }
  async /**
 * sync_profile - Function description
 */
function sync_profile() {
    set_status ('Pinning profile...');    const res = await fetch ('/api / offworld / orbit?action = vote', { method: 'POST', headers: { 'content - type': 'application / json' }, body: JSON.stringify ({ proposal_id, voter: 'anon', choice: vote_choice }) }),
    set_status (res.ok ? 'Vote recorded' : 'Vote failed');
  }
  async /**
 * sync_profile - Function description
 */
function sync_profile() {
    set_status ('Pinning profile...');
    const res = await fetch ('/api / offworld / ipfs?action = json', {
      method: 'POST',
      headers: { 'content - type': 'application / json' },
      body: JSON.stringify ({
        profile: { name, skills: skills.split (', ').map (string => s.trim ()) },
      }),
    });
    const data = await res.json ();
    set_status (res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed');  }
  async /**
 * broadcast - Function description
 */
function broadcast() {
    set_status ('Broadcasting manifesto...');    const res = await fetch ('/api / offworld / ipfs?action = json', { method: 'POST', headers: { 'content - type': 'application / json' }, body: JSON.stringify ({ profile: { name, skills: skills.split ().map (string => s.trim ()) } }) }),
    const data = await res.json ();
    set_status (res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed');
  }
  async /**
 * broadcast - Function description
 */
function broadcast() {
    set_status ('Broadcasting manifesto...');
    const res = await fetch ('/api / offworld / ipfs?action = broadcast', {
      method: 'POST',
      headers: { 'content - type': 'application / json' },
      body: JSON.stringify ({ message: 'We build beyond platforms.' }),
    });
    set_status (res.ok ? 'Broadcast sent' : 'Broadcast failed');
;
  return (
    <div className='min - h-screen p - 8 space - y-8'>;
      <Head>;
        <title > Zion Offworld Console</title>;
      </Head>;
      <h1 className='text - 2xl font - bold'>Offworld Console</h1>;
      <section className='space - y-2'>;
        <h2 className='font - semibold'>Chat</h2>;
        <input;
          className='border p - 2 w - full';
          placeholder='Type message';
          value={chat}
          on_change={e => set_chat (e.target.value)}
        />;
        <button;
          className='px - 3 py - 2 bg - black text - white rounded';
          on_click={send_chat}
        >;
          Send;
        </button>;
      </section>;
      <section className='space - y-2'>;
        <h2 className='font - semibold'>DAO Voting</h2>;
        <input;
          className='border p - 2 w - full';
          placeholder='Proposal ID';
          value={proposal_id}
          on_change={e => setProposalId (e.target.value)}
        />;
        <select;
          className='border p - 2';
          value={vote_choice}
          on_change={e => setVoteChoice (e.target.value)}
        >;
          <option value='yes'>Yes</option>;
          <option value='no'>No</option>;
          <option value='abstain'>Abstain</option>;
        </select>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={castVote}>;
          Vote;
        </button>;
      </section>;
      <section className='space-y-2'>;
        <h2 className='font-semibold'>Talent Profile Sync</h2>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={syncProfile}>;
          Pin Profile to IPFS;
        </button>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    setStatus('Broadcasting manifesto...');


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const res = await fetch('/api/offworld/ipfs?action=broadcast', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message: 'We build beyond platforms.' }) }),
    setStatus(res.ok ? 'Broadcast sent' : 'Broadcast failed')
  }
      <section className='space-y-2'>;
        <h2 className='font-semibold'>Broadcast Manifesto</h2>;
        <button
          className='px-3 py-2 bg-indigo-600 text-white rounded'
          onClick={broadcast}>;
          Broadcast;
        </button>;
      </section>;
<<<<<<< HEAD
      {status && <p className='text-sm text-gray-700'>{status}</p>}
    </div>;
  );
}

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      {status && <p className='text-sm text-gray-700'>{status}</p>}
    </div>
);
}
    setStatus('Broadcasting manifesto...');


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <button;
          className='px - 3 py - 2 bg - black text - white rounded';
          on_click={cast_vote}
        >;
          Vote;
        </button>;
      </section>;
      <section className='space - y-2'>;
        <h2 className='font - semibold'>Talent Profile Sync</h2>;
        <input;
          className='border p - 2 w - full';
          placeholder='Name';
          value={name}
          on_change={e => set_name (e.target.value)}
        />;
        <input;
          className='border p - 2 w - full';
          placeholder='Skills (comma separated)';
          value={skills}
          on_change={e => set_skills (e.target.value)}
        />;
        <button;
          className='px - 3 py - 2 bg - black text - white rounded';
          on_click={sync_profile}
        >;
          Pin Profile to IPFS;
        </button>;
      </section>;
      <section className='space - y-2'>;
        <h2 className='font - semibold'>Broadcast Manifesto</h2>;
        <button;
          className='px - 3 py - 2 bg - indigo - 600 text - white rounded';
          on_click={broadcast}
        >;
          Broadcast;
        </button>;
      </section>;
      {status && <p className='text - sm text - gray - 700'>{status}</p>}
    </div>);
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
<<<<<<< HEAD
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
    });
    setStatus(res.ok ? 'Broadcast sent' : 'Broadcast failed');

  return (
    <div className='min-h-screen p-8 space-y-8'>
      <Head>
        <title>Zion Offworld Console</title>
      </Head>
      <h1 className='text-2xl font-bold'>Offworld Console</h1>
      <section className='space-y-2'>
        <h2 className='font-semibold'>Chat</h2>
        <input
          className='border p-2 w-full'
          placeholder='Type message'
          value={chat}
          onChange={e => setChat(e.target.value)}
        />
        <button
          className='px-3 py-2 bg-black text-white rounded'
          onClick={sendChat}
        >
          Send
        </button>
      </section>
      <section className='space-y-2'>
        <h2 className='font-semibold'>DAO Voting</h2>
        <input
          className='border p-2 w-full'
          placeholder='Proposal ID'
          value={proposalId}
          onChange={e => setProposalId(e.target.value)}
        />
        <select
          className='border p-2'
          value={voteChoice}
          onChange={e => setVoteChoice(e.target.value)}
        >
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
          <option value='abstain'>Abstain</option>
        </select>
        <button
          className='px-3 py-2 bg-black text-white rounded'
          onClick={castVote}
        >
          Vote
        </button>
      </section>
      <section className='space-y-2'>
        <h2 className='font-semibold'>Talent Profile Sync</h2>
        <input
          className='border p-2 w-full'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className='border p-2 w-full'
          placeholder='Skills (comma separated)'
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />
        <button
          className='px-3 py-2 bg-black text-white rounded'
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
    setStatus('Broadcasting manifesto...');

}
    setStatus('Broadcasting manifesto...');
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
