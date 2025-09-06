
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useState } from 'react'
  voice: any
  const [inviteeName, setInviteeName] = useState(''
  const [inviteeBio, setInviteeBio] = useState(''
  const [topic, setTopic] = useState(''
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: any
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: any
  const [inviteeName, setInviteeName] = useState(''
  const [inviteeBio, setInviteeBio] = useState(''
  const [topic, setTopic] = useState(''
  const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
      const res = await fetch('/api/podcast/
        headers: { 'Content-Type': any
      const res = await fetch('/api/podcast/
        headers: { 'Content-Type': any
      const res = await fetch('/api/podcast/
        headers: { 'Content-Type': any
      const res = await fetch('/api/podcast/
        headers: { 'Content-Type': any
      const res = await fetch('/api/podcast/