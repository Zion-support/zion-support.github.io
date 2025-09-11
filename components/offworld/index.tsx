>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';


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

    const res = await fetch('/api/offworld/ipfs?action=json', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ profile: { name, skills: skills.split().map(s => s.trim()) } }) }),
    const data = await res.json();
    setStatus(res.ok ? `Profile CID: ${data.cid}` : 'Profile pin failed')
  }
  async function broadcast() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
