

  useEffect(() => {
    if (!code) return
    (async () => {
      try {


  async function requestPayout() {
    setMsg('')
    try {
      const res = await fetch('/api/partners/request-payout', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined })}),
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');

      setMsg('Payout requested')
    } catch (e: any) {
      setMsg(e?.message |'Error')
    }
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />;
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />;
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />;
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />;
      </div>;