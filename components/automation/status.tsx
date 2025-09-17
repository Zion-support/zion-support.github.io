
  useEffect(() => {
    fetch('/automation/status.json')
      .then((r) => r.json())
      .then((j) => setStatus(j))
      .catch(() => setStatus(null));

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Autonomous Automation Status</h1>
      {status ? (
        <div className="rounded-lg border p-4 text-sm">
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className="mt-2"><a className="underline" href="/metrics/latest.json">View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">No status available yet.</div>
      )}
    </div>
  );
}