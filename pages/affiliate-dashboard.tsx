import { useEffect, useMemo, useState } from 'react'
  if (typeof window = = 'undefined') return ''
  return localStorage.getItem('ref_code') |''
  const [code, setCode] = useState<string>(''
  const [amount, setAmount] = useState<string>(''
  const [msg, setMsg] = useState<string>(''
    setMsg(''
      const res = await fetch('/api/partners/
        headers: { 'Content-Type': any
  const exportUrl = useMemo() => (code ? `/api/partners/