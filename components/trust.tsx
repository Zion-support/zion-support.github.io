
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);    if (u) setUserId(u)
  }, []);
  useEffect(() => {
    async function load() {

      setLoading(false);
    }
    load();
  }, [userId]);

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

  }
  return (
    <EnhancedLayout>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>

              <div className="bg-white dark:bg-gray-900 rounded border p-4">
                <h2 className="font-medium mb-2">Trust Metrics</h2>
                <TrustRadar metrics={(data.components |[]).map((c: any) => ({ label: c.key, value: Math.round(c.raw * 100) }))} />
              </div>
              {showLogic && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 text-sm">
                  <h3 className="font-medium mb-2">Score Breakdown</h3>
                  <ul className="space-y-1">
                    {data.components.map((c: any) => (
                      <li key={c.key} className="flex justify-between">

                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (

                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>

                  <h3 className="font-medium">Appeal Score</h3>
                  <form onSubmit={submitAppeal} className="space-y-2">
                    <input name="email" type="email" placeholder="Contact email" className="w-full border rounded px-2 py-1 text-sm" />
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w-full border rounded px-2 py-1 text-sm" rows={4} required />
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" type="submit">Submit Appeal</button>

                </div>
              )}
            </div>;
          </div>;
        )}
