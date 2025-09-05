import { useState } from &quot;react&quot;;
import FeedbackModal from &quot;../../components/ui/FeedbackModal&quot;;

export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState(&quot;ava-chen&quot;);
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10));
  const [scopeSummary, setScopeSummary] = useState(&quot;Build AI-enabled reporting module&quot;);
  const [termsType, setTermsType] = useState(&quot;hourly&quot;);
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("&quot;);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  async function sendOffer() {
    setLoading(true);
    setResult(null);
    const paymentTerms =
      termsType === &quot;hourly&quot;
        ? { type: &quot;hourly&quot;, hourlyRateUsd }
        : termsType === &quot;fixed&quot;
        ? { type: &quot;fixed&quot;, fixedAmountUsd }
        : { type: &quot;milestone&quot;, milestones: [] };

    const res = await fetch(&quot;/api/marketplace/offers&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, &quot;x-demo-user-role&quot;: &quot;client&quot;, &quot;x-demo-user-id&quot;: &quot;client-1&quot; },
      body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })});
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {
      alert(json.error || &quot;Failed to send offer");
    } else {
      setResult(json.offer);
      setShowFeedback(true);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">
        <div>
          <label className="block text-sm font-medium">Talent</label>
          <input value={talentSlug} onChange={(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium&quot;>Start date</label>
          <input type=&quot;date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Payment terms</label>
          <select value={termsType} onChange={(e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2&quot;>
            <option value=&quot;hourly&quot;>Hourly</option>
            <option value=&quot;fixed&quot;>Fixed</option>
            <option value=&quot;milestone&quot;>Milestone</option>
          </select>
        </div>

        {termsType === &quot;hourly" && (
          <div>
            <label className="block text-sm font-medium&quot;>Hourly rate (USD)</label>
            <input type=&quot;number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2&quot; />
          </div>
        )}

        {termsType === &quot;fixed" && (
          <div>
            <label className="block text-sm font-medium&quot;>Fixed amount (USD)</label>
            <input type=&quot;number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium&quot;>Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder=&quot;https://..." className="w-full border rounded px-3 py-2" />
        </div>

        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white&quot;>
            {loading ? &quot;Sending…&quot; : &quot;Send Offer to Confirm"}
          </button>
        </div>
      </div>

      {result && (
        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>
      )}

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'client', 'x-demo-user-id': 'client-1' }}
      />
    </div>
  );
}