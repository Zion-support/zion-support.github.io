import React, {_useEffect, _useMemo, _useState} from 'react';
import DatePicker from 'react-datepicker';

type PaymentType = 'hourly' | 'fixed';

export default function ContractBuilderPage() {_const _router = useRouter();
  const [talentName, _setTalentName] = useState('');
  const [projectName, _setProjectName] = useState('');
  const [scopeSummary, _setScopeSummary] = useState('');
  const [startDate, _setStartDate] = useState<Date | null>(null);
  const [endDate, _setEndDate] = useState<Date | null>(null);
  const [paymentType, _setPaymentType] = useState<PaymentType>('hourly');
  const [currency, _setCurrency] = useState('USD');
  const [hourlyRate, _setHourlyRate] = useState<number>(100);
  const [weeklyHourCap, _setWeeklyHourCap] = useState<number | ''>('');
  const [fixedAmount, _setFixedAmount] = useState<number>(5000);
  const [milestoneSummary, _setMilestoneSummary] = useState('');
  const [paymentSchedule, _setPaymentSchedule] = useState('Net 15 on invoice');
  const [nda, _setNda] = useState(true);
  const [ipTransfer, _setIpTransfer] = useState(true);
  const [governingLaw, _setGoverningLaw] = useState('Delaware, _USA');
  const [revisionRounds, _setRevisionRounds] = useState<number>(2);

  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  const [contract, _setContract] = useState<string>('');

  useEffect__(() => {
    if (!router.isReady) return;
    const { talent, _project} = router.query as {_talent?: string; project?: string};
    if (talent && !talentName) setTalentName(decodeURIComponent(talent));
    if (project && !projectName) setProjectName(decodeURIComponent(project));
  }, [router.isReady, router.query, talentName, projectName]);

  const _canSubmit = useMemo__(() => {_return (
      talentName.trim().length > 0 &&
      projectName.trim().length > 0 &&
      scopeSummary.trim().length > 0 &&
      !!startDate &&
      !!endDate &&
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0)
    );}, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount]);

  async function submitForm(_event: React.FormEvent) {_event.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);
    setContract('');

    try {
      const _body = {
        talentName, _projectName, _scopeSummary, _startDate: startDate?.toISOString().slice(0, _10), _endDate: endDate?.toISOString().slice(0, _10), _payment:
          paymentType === 'hourly'
            ? {
                type: 'hourly', _currency, _hourlyRate, _weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined, _paymentSchedule}
            : {_type: 'fixed', _currency, _totalAmount: fixedAmount, _milestoneSummary: milestoneSummary || undefined, _paymentSchedule},
        clauses: {_nda, _ipTransfer},
        governingLaw,
        revisionRounds};

      const _res = await fetch('/api/ai-contract', {_method: 'POST', _headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(body)});

      if (!res.ok) {_const _data = await res.json().catch__(() => ({}));
        throw new Error(data?.error || `Request failed: ${_res.status}`);
      }

      const _data = (await res.json()) as {_contract: string};
      setContract(data.contract);
    } catch (e: unknown) {_setError(e?.message || 'Failed to generate contract');} finally {_setLoading(false);}
  }

  function copyToClipboard() {_if (!contract) return;
    void navigator.clipboard.writeText(contract);}

  function downloadAsTxt() {_if (!contract) return;
    const _blob = new Blob([contract], _{ type: 'text/plain;charset=utf-8'});
    const _url = window.URL.createObjectURL(blob);
    const _a = document.createElement('a');
    a.href = url;
    a.download = `contract-${_projectName.replace(/\s+/g, _'-').toLowerCase()}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (_<div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contract Builder</h1>

      <form onSubmit={_submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Talent name</label>
          <input className="w-full input input-bordered" value={_talentName} onChange={_(e) => setTalentName(e.target.value)} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Project name</label>
          <input className="w-full input input-bordered" value={_projectName} onChange={_(_e) => setProjectName(e.target.value)} placeholder="Website Redesign" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Payment currency</label>
          <input className="w-full input input-bordered" value={_currency} onChange={_(_e) => setCurrency(e.target.value)} placeholder="USD" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Scope summary</label>
          <textarea className="w-full textarea textarea-bordered" rows={_4} value={_scopeSummary} onChange={_(_e) => setScopeSummary(e.target.value)} placeholder="High-level deliverables, responsibilities, and success criteria..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start date</label>
          <DatePicker className="w-full input input-bordered" selected={_startDate} onChange={_(_d) => setStartDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End date</label>
          <DatePicker className="w-full input input-bordered" selected={_endDate} onChange={_(_d) => setEndDate(d)} dateFormat="MMMM d, yyyy" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Payment terms</label>
          <div className="flex items-center gap-4 mb-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={_paymentType === 'hourly'} onChange={_() => setPaymentType('hourly')} /> Hourly
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={_paymentType === 'fixed'} onChange={_() => setPaymentType('fixed')} /> Fixed
            </label>
          </div>

          {_paymentType === 'hourly' ? (_<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hourly rate</label>
                <input type="number" className="w-full input input-bordered" value={hourlyRate} onChange={_(e) => setHourlyRate(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weekly hour cap (optional)</label>
                <input type="number" className="w-full input input-bordered" value={_weeklyHourCap} onChange={_(_e) => setWeeklyHourCap(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={_paymentSchedule} onChange={_(_e) => setPaymentSchedule(e.target.value)} placeholder="e.g., weekly, Net 15" />
              </div>
            </div>
          ) : (_<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Total amount</label>
                <input type="number" className="w-full input input-bordered" value={_fixedAmount} onChange={_(e) => setFixedAmount(Number(e.target.value))} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Milestone summary (optional)</label>
                <input className="w-full input input-bordered" value={_milestoneSummary} onChange={_(_e) => setMilestoneSummary(e.target.value)} placeholder="Phase 1 design, Phase 2 implementation..." />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={_paymentSchedule} onChange={_(_e) => setPaymentSchedule(e.target.value)} placeholder="e.g., 50% upfront, 50% on delivery" />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Optional clauses</label>
          <div className="space-y-2">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={_nda} onChange={_(_e) => setNda(e.target.checked)} /> NDA (Confidentiality)
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={_ipTransfer} onChange={_(_e) => setIpTransfer(e.target.checked)} /> IP Transfer / Assignment
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Governing law</label>
          <input className="w-full input input-bordered" value={_governingLaw} onChange={_(_e) => setGoverningLaw(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Included revision rounds</label>
          <input type="number" className="w-full input input-bordered" value={_revisionRounds} onChange={_(_e) => setRevisionRounds(Number(e.target.value))} />
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={_!canSubmit || loading}>
            {_loading ? 'Generating…' : 'Generate contract'}
          </button>
          {_error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>

      {_contract && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">Generated Contract</h2>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={copyToClipboard}>Copy</button>
              <button className="btn" onClick={_downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
            {_contract}
          </article>
        </div>
      )}
    </div>
  );
}