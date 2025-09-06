import React, { useEffect, useMemo, useRef, useState } from 'react'
import { X } from 'lucide-react'
  role: any
  if (typeof window = = 'undefined') return ''
  const existing = window.localStorage.getItem('zion_support_session_id'
  window.localStorage.setItem('zion_support_session_id'
  const [input, setInput] = useState(''
  const sessionIdRef = useRef<string>(''
        { role: 'assistant', content: any
    messagesEndRef.current?.scrollIntoView({ behavior: any
    () => ['How do I hire?How do I get matched?Billing help'
      await fetch('/api/support/
        headers: { 'Content-Type': any
      await fetch('/api/support/
        headers: { 'Content-Type': any
    await logEvent('message/
      const res = await fetch('/api/support/
        headers: { 'Content-Type': any
        await logEvent('message/