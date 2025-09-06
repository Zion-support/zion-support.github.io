
import Head from 'next/head';
export default function OffworldConsole() {;
  const [chat, setChat] = useState('');
  const [voteChoice, setVoteChoice] = useState('yes');
  const [proposalId, setProposalId] = useState('prop-1');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');
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

}

    setStatus('Broadcasting manifesto...');

