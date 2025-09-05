import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';

type PaymentType = 'hourly' | 'fixed';

export default function ContractBuilderPage() {
  const router = useRouter();
  const [talentName, setTalentName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [scopeSummary, setScopeSummary] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [paymentType, setPaymentType] = useState<PaymentType>('hourly');
  const [currency, setCurrency] = useState('USD');
  const [hourlyRate, setHourlyRate] = useState<number>(100);
  const [weeklyHourCap, setWeeklyHourCap] = useState<number | ''>('');
  const [fixedAmount, setFixedAmount] = useState<number>(5000);
  const [milestoneSummary, setMilestoneSummary] = useState('');
  const [paymentSchedule, setPaymentSchedule] = useState('Net 15 on invoice');
  const [nda, setNda] = useState(true);
  const [ipTransfer, setIpTransfer] = useState(true);
  const [governingLaw, setGoverningLaw] = useState('Delaware, USA');
  const [revisionRounds, setRevisionRounds] = useState<number>(2);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;
    const { talent, project } = router.query as { talent?: string; project?: string };
    if (talent && !talentName) setTalentName(decodeURIComponent(talent));
    if (project && !projectName) setProjectName(decodeURIComponent(project));
  }, [router.isReady, router.query, talentName, projectName]);

  const canSubmit = useMemo(() => {
    return (
      talentName.trim().length > 0 &&
      projectName.trim().length > 0 &&
      scopeSummary.trim().length > 0 &&
      !!startDate &&
      !!endDate &&
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0)
    );
  }, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount]);

  async function submitForm(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);
    setContract('');

    try {
      const body = {
        talentName,
        projectName,
        scopeSummary,
        startDate: startDate?.toISOString().slice(0, 10),
        endDate: endDate?.toISOString().slice(0, 10),
        payment:
          paymentType === 'hourly'
            ? {
                type: 'hourly',
                currency,
                hourlyRate,
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined,
                paymentSchedule}
            : {
                type: 'fixed',
                currency,
                totalAmount: fixedAmount,
                milestoneSummary: milestoneSummary || undefined,
                paymentSchedule},
        clauses: {
          nda,
          ipTransfer},
        governingLaw,
        revisionRounds};

      const res = await fetch('/api/ai-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(body)});

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      const data = (await res.json()) as { contract: string };
      setContract(data.contract);
    } catch (e: any) {
      setError(e?.message || 'Failed to generate contract');
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (!contract) return;
    void navigator.clipboard.writeText(contract);
  }

  function downloadAsTxt() {
    if (!contract) return;
    const blob = new Blob([contract], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contract-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className=&quot;max-w-5xl mx-auto&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Contract Builder</h1>

      <form onSubmit={submitForm} className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800&quot;>
        <div className=&quot;col-span-1 md:col-span-2&quot;>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Talent name</label>
          <input className=&quot;w-full input input-bordered&quot; value={talentName} onChange={(e) => setTalentName(e.target.value)} placeholder=&quot;Jane Doe&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Project name</label>
          <input className=&quot;w-full input input-bordered&quot; value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder=&quot;Website Redesign&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Payment currency</label>
          <input className=&quot;w-full input input-bordered&quot; value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder=&quot;USD&quot; />
        </div>
        <div className=&quot;md:col-span-2&quot;>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Scope summary</label>
          <textarea className=&quot;w-full textarea textarea-bordered&quot; rows={4} value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} placeholder=&quot;High-level deliverables, responsibilities, and success criteria...&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Start date</label>
          <DatePicker className=&quot;w-full input input-bordered&quot; selected={startDate} onChange={(d) => setStartDate(d)} dateFormat=&quot;MMMM d, yyyy&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>End date</label>
          <DatePicker className=&quot;w-full input input-bordered&quot; selected={endDate} onChange={(d) => setEndDate(d)} dateFormat=&quot;MMMM d, yyyy&quot; />
        </div>

        <div className=&quot;md:col-span-2&quot;>
          <label className=&quot;block text-sm font-medium mb-2&quot;>Payment terms</label>
          <div className=&quot;flex items-center gap-4 mb-4&quot;>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;radio&quot; name=&quot;pay&quot; checked={paymentType === 'hourly'} onChange={() => setPaymentType('hourly')} /> Hourly
            </label>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;radio&quot; name=&quot;pay&quot; checked={paymentType === 'fixed'} onChange={() => setPaymentType('fixed')} /> Fixed
            </label>
          </div>

          {paymentType === 'hourly' ? (
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
              <div>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Hourly rate</label>
                <input type=&quot;number&quot; className=&quot;w-full input input-bordered&quot; value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Weekly hour cap (optional)</label>
                <input type=&quot;number&quot; className=&quot;w-full input input-bordered&quot; value={weeklyHourCap} onChange={(e) => setWeeklyHourCap(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Payment schedule</label>
                <input className=&quot;w-full input input-bordered&quot; value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder=&quot;e.g., weekly, Net 15&quot; />
              </div>
            </div>
          ) : (
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
              <div>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Total amount</label>
                <input type=&quot;number&quot; className=&quot;w-full input input-bordered&quot; value={fixedAmount} onChange={(e) => setFixedAmount(Number(e.target.value))} />
              </div>
              <div className=&quot;md:col-span-2&quot;>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Milestone summary (optional)</label>
                <input className=&quot;w-full input input-bordered&quot; value={milestoneSummary} onChange={(e) => setMilestoneSummary(e.target.value)} placeholder=&quot;Phase 1 design, Phase 2 implementation...&quot; />
              </div>
              <div className=&quot;md:col-span-3&quot;>
                <label className=&quot;block text-sm font-medium mb-1&quot;>Payment schedule</label>
                <input className=&quot;w-full input input-bordered&quot; value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder=&quot;e.g., 50% upfront, 50% on delivery&quot; />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-2&quot;>Optional clauses</label>
          <div className=&quot;space-y-2&quot;>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;checkbox&quot; checked={nda} onChange={(e) => setNda(e.target.checked)} /> NDA (Confidentiality)
            </label>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;checkbox&quot; checked={ipTransfer} onChange={(e) => setIpTransfer(e.target.checked)} /> IP Transfer / Assignment
            </label>
          </div>
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Governing law</label>
          <input className=&quot;w-full input input-bordered&quot; value={governingLaw} onChange={(e) => setGoverningLaw(e.target.value)} />
        </div>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Included revision rounds</label>
          <input type=&quot;number&quot; className=&quot;w-full input input-bordered&quot; value={revisionRounds} onChange={(e) => setRevisionRounds(Number(e.target.value))} />
        </div>

        <div className=&quot;md:col-span-2 flex items-center gap-3&quot;>
          <button type=&quot;submit&quot; className=&quot;btn btn-primary&quot; disabled={!canSubmit || loading}>
            {loading ? 'Generating…' : 'Generate contract'}
          </button>
          {error && <span className=&quot;text-red-600 text-sm&quot;>{error}</span>}
        </div>
      </form>

      {contract && (
        <div className=&quot;mt-8&quot;>
          <div className=&quot;flex items-center justify-between mb-3&quot;>
            <h2 className=&quot;text-2xl font-semibold&quot;>Generated Contract</h2>
            <div className=&quot;flex gap-2&quot;>
              <button className=&quot;btn btn-secondary&quot; onClick={copyToClipboard}>Copy</button>
              <button className=&quot;btn&quot; onClick={downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className=&quot;prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800&quot;>
            {contract}
          </article>
        </div>
      )}
    </div>
  );
}