import { useEffect, useMemo, useState } from 'react'
  status: any
  const [q, setQ] = useState(''
  const [status, setStatus] = useState<'all' | QuoteRequest['status']>('all'
  const [talent, setTalent] = useState('all'
  const [dateFrom, setDateFrom] = useState(''
  const [dateTo, setDateTo] = useState(''
      const res = await fetch('/api/requests/
    const csv = [header.join(), ...rows.map(r => r.map(v => `"${String(v).replace(/"/