import {useState} from 'react';
import Head from 'next/head';

export default function OffworldConsole() {
  const [chat, setChat] = useState('');
  const [voteChoice, setVoteChoice] = useState('yes');
  const [proposalId, setProposalId] = useState('prop-1');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');

  async function sendChat() {
    setStatus('Sending chat...');

  }

  async function castVote() {
    setStatus('Recording vote...');
    const res = await fetch('/api/offworld/orbit?action=vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ proposalId, voter: 'anon', choice: voteChoice }),
    });
    setStatus(res.ok ? 'Vote recorded' : 'Vote failed');  }

  async function syncProfile() {
    setStatus('Pinning profile...');

  }

  async function syncProfile() {
    setStatus('Pinning profile...');

  }

  async function broadcast() {
    setStatus('Broadcasting manifesto...');