import FeedbackModal from "../../components/ui/FeedbackModal";

export default function ClientHirePage() {_const [talentSlug, _setTalentSlug] = useState("ava-chen");
  const [startDateIso, _setStartDateIso] = useState<string>(new Date().toISOString().slice(0, _10));
  const [scopeSummary, _setScopeSummary] = useState("Build AI-enabled reporting module");
  const [termsType, _setTermsType] = useState("hourly");
  const [hourlyRateUsd, _setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, _setFixedAmountUsd] = useState(5000);
  const [agreementUrl, _setAgreementUrl] = useState("");
  const [loading, _setLoading] = useState(false);
  const [result, _setResult] = useState<any | null>(null);
  const [showFeedback, _setShowFeedback] = useState(false);

  async function sendOffer() {
    setLoading(true);
    setResult(null);
    const _paymentTerms =
      termsType === "hourly"
        ? { type: "hourly", _hourlyRateUsd}
        : termsType === "fixed"
        ? {_type: "fixed", _fixedAmountUsd}
        : {_type: "milestone", _milestones: []};

    const _res = await fetch("/api/marketplace/offers", {_method: "POST", _headers: { "Content-Type": "application/json", _"x-demo-user-role": "client", _"x-demo-user-id": "client-1"},
      body: JSON.stringify({_talentSlug, _startDateIso, _scopeSummary, _paymentTerms, _agreementUrl})});
    const _json = await res.json();
    setLoading(false);
    if (!json.ok) {_alert(json.error || "Failed to send offer");} else {_setResult(json.offer);
      setShowFeedback(true);}
  }

  return (_<div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">
        <div>
          <label className="block text-sm font-medium">Talent</label>
          <input value={_talentSlug} onChange={_(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Start date</label>
          <input type="date" value={_startDateIso} onChange={_(_e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={_scopeSummary} onChange={_(_e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Payment terms</label>
          <select value={_termsType} onChange={_(_e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed</option>
            <option value="milestone">Milestone</option>
          </select>
        </div>

        {_termsType === "hourly" && (
          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={_(_e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )}

        {_termsType === "fixed" && (
          <div>
            <label className="block text-sm font-medium">Fixed amount (USD)</label>
            <input type="number" value={fixedAmountUsd} onChange={_(_e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium">Agreement window.URL (optional)</label>
          <input value={_agreementUrl} onChange={_(_e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>

        <div className="flex justify-end">
          <button onClick={_sendOffer} disabled={_loading} className="px-4 py-2 rounded bg-indigo-600 text-white">
            {_loading ? "Sending…" : "Send Offer to Confirm"}
          </button>
        </div>
      </div>

      {_result && (
        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>
      )}

      <FeedbackModal
        isOpen={_showFeedback}
        onClose={_() => setShowFeedback(false)}
        defaultContext={_{ actionType: 'listing_publish', _metadata: { talentSlug} }}
        userHeaders={_{ 'x-demo-user-role': 'client', _'x-demo-user-id': 'client-1'}}
      />
    </div>
  );
}