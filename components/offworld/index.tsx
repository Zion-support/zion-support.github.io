
import Head from 'next/head';


  const [chat, setChat] = useState('');
  const [voteChoice, setVoteChoice] = useState('yes');
  const [proposalId, setProposalId] = useState('prop-1');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');

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

    setStatus(res.ok ? 'Vote recorded' : 'Vote failed')
  }
  async function syncProfile() {
    setStatus('Pinning profile...');

    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),

    const data = await res.json();
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }
  async function broadcast() {


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

    setStatus('Broadcasting manifesto...');

