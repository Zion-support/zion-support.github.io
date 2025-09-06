export default function QuoteRequestsPage() {
  return (
    <div className=&quot;py-10&quot;>
      <h1 className=&quot;text-2xl font-semibold text-white&quot;>Quote Requests Log</h1>
      <p className=&quot;text-white/80 mt-2&quot;>Recent quote requests are synced to <code className=&quot;text-white/90&quot;>data/quote-requests/log.json</code>.</p>
      <p className=&quot;text-white/70 mt-2&quot;>This runs hourly and auto-PRs updates.</p>
    </div>
  )
}