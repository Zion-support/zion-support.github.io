

}load () 
}, [userId])
</li>) ) 
}</ul> </div>) 
}<strong>Operator GPT Analysis:</strong> {
  data.reasonSummary 
}</div>) 
}</div> </form> </div>) 
}</div> </div>) 
}</div> </EnhancedLayout>) 
}

                checked={showLogic}
                onChange={() =    /> setShowLogic(!showLogic)}
              />{' '}





              Transparent logic
            </label>          </div>      <div className="space-y-6">
  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type }) }),
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged')
  }

  async function submitAppeal(e: React.FormEvent) {
    e.preventDefault(),
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const message = formData.get('message')
    const contactEmail = formData.get('email')
    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) }),
    alert('Appeal submitted'),
    form.reset()
  }

  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Trust & Reputation</h1>
          <div className=&quot;flex items-center gap-3&quot;>
            <label className=&quot;text-sm inline-flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>
          </div>
        </div>

        {loading && <div>Loading...</div>}
        {!loading && data && (
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <div className=&quot;md:col-span-2 space-y-4&quot;>
              <div className=&quot;flex items-center gap-3&quot;>
                <TrustBadge score={data.total} reason={data.reasonSummary} communityVerified={data.communityVerified} />
                <RiskIndicator status={data.riskLevel} />
              </div>
              <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4&quot;>
                <h2 className=&quot;font-medium mb-2&quot;>Trust Metrics</h2>
                <TrustRadar metrics={(data.components || []).map((c: any) => ({ label: c.key, value: Math.round(c.raw * 100) }))} />
              </div>
              {showLogic && (
                <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 text-sm&quot;>
                  <h3 className=&quot;font-medium mb-2&quot;>Score Breakdown</h3>
                  <ul className=&quot;space-y-1&quot;>
                    {data.components.map((c: any) => (
                      <li key={c.key} className=&quot;flex justify-between&quot;>
                        <span>{c.key}</span>
                        <span>{Math.round(c.raw * 100)} / weighted {c.weighted.toFixed(3)}</span>
                      </li>

                    />;
                    <button;
                      className='text - sm px - 3 py - 1 rounded bg - blue - 600 text - white';
                      type='submit';
                    >;
                      Submit Appeal;
                    </button>                  </form>                <div className="bg - white dark:bg - gray - 900 rounded border p - 4 space - y-3">;
                  <h3 className="font - medium">Appeal Score</h3>;
                  <form on_submit={submit_appeal} className="space - y-2">;
                    <input name="email" type="email" placeholder="Contact email" className="w - full border rounded px - 2 py - 1 text - sm" />;
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w - full border rounded px - 2 py - 1 text - sm" rows={4} required />;
                    <button className="text - sm px - 3 py - 1 rounded bg - blue - 600 text - white" type="submit">Submit Appeal</button>;
                </div>)}
            </div>;
          </div>)}
      </div>;
    </EnhancedLayout>);
}





