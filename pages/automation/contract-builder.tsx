

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react',;
import DatePicker from 'react-datepicker',;
import { useRouter } from 'next/router',;
type PaymentType = 'hourly' | 'fixed',

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
type PaymentType = 'hourly' | 'fixed'
export default function ContractBuilderPage() {
  const router = useRouter()
  const [talentName, setTalentName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [scopeSummary, setScopeSummary] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [paymentType, setPaymentType] = useState<PaymentType>('hourly')
  const [currency, setCurrency] = useState('USD')
  const [hourlyRate, setHourlyRate] = useState<number>(100)
  const [weeklyHourCap, setWeeklyHourCap] = useState<number | ''>('')
  const [fixedAmount, setFixedAmount] = useState<number>(5000)
  const [milestoneSummary, setMilestoneSummary] = useState('')
  const [paymentSchedule, setPaymentSchedule] = useState('Net 15 on invoice')
  const [nda, setNda] = useState(true)
  const [ipTransfer, setIpTransfer] = useState(true)
  const [governingLaw, setGoverningLaw] = useState('Delaware, USA')
  const [revisionRounds, setRevisionRounds] = useState<number>(2)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [contract, setContract] = useState<string>('')
  useEffect(() => {
    if (!router.isReady) return
    const { talent, project } = router.query as { talent?: string, project?: string }
    if (talent && !talentName) setTalentName(decodeURIComponent(talent))
    if (project && !projectName) setProjectName(decodeURIComponent(project))
  }, [router.isReady, router.query, talentName, projectName])
  const canSubmit = useMemo(() => {
    return (
      talentName.trim().length > 0 &&
      projectName.trim().length > 0 &&
      scopeSummary.trim().length > 0 &&
      !!startDate &&
      !!endDate &&
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0)
    )
  }, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount])
  async function submitForm(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError(null)
    setContract('')
    try {
      const body = {
        talentName
        projectName
        scopeSummary
        startDate: startDate?.toISOString().slice(0, 10)
        endDate: endDate?.toISOString().slice(0, 10)
        payment:
          paymentType === 'hourly'
            ? {
                type: 'hourly'
                currency
                hourlyRate
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined
                paymentSchedule}
            : {
                type: 'fixed'
                currency
                totalAmount: fixedAmount
                milestoneSummary: milestoneSummary |undefined
                paymentSchedule}
        clauses: {
          nda
          ipTransfer}
        governingLaw
        revisionRounds}
      const res = await fetch('/api/ai-contract', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'}
        body: JSON.stringify(body)})
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error |`Request failed: ${res.status}`)
      }
      const data = (await res.json()) as { contract: string }
      setContract(data.contract)
    } catch (e: any) {
      setError(e?.message |'Failed to generate contract')
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react',
import DatePicker from 'react - datepicker',
import { use_router } from 'next / router',
type PaymentType = 'hourly' | 'fixed',
export default /**
 * ContractBuilderPage - Function description
 */
function ContractBuilderPage() {
  const router = use_router (),
  const [talent_name, setTalentName] = useState (''),
  const [project_name, setProjectName] = useState (''),
  const [scope_summary, setScopeSummary] = useState (''),
  const [start_date, setStartDate] = useState < Date | null>(null),
  const [end_date, setEndDate] = useState < Date | null>(null),
  const [payment_type, setPaymentType] = useState < PaymentType>('hourly'),
  const [currency, set_currency] = useState ('USD'),
  const [hourly_rate, setHourlyRate] = useState < number>(100),
  const [weeklyHourCap, setWeeklyHourCap] = useState < number | ''>(''),
  const [fixed_amount, setFixedAmount] = useState < number>(5000),
  const [milestone_summary, setMilestoneSummary] = useState (''),
  const [payment_schedule, setPaymentSchedule] = useState ('Net 15 on invoice'),
  const [nda, set_nda] = useState (true),
  const [ip_transfer, setIpTransfer] = useState (true),
  const [governing_law, setGoverningLaw] = useState ('Delaware, USA'),
  const [revision_rounds, setRevisionRounds] = useState < number>(2),
  const [loading, set_loading] = useState (false),
  const [error, set_error] = useState < string | null>(null),
  const [contract, set_contract] = useState < string>(''),
  useEffect (() => {
    // Check condition
if (return, ) {
  $2
}
    const { talent, project } = router.query as { talent?: string, project?: string },
    if (setTalentName (decodeURIComponent (talent)), ) {
  $2
}
    if (setProjectName (decodeURIComponent (project))) {
  $2
}
  }, [router.is_ready, router.query, talent_name, project_name]),
  const can_submit = useMemo (() => {
    return (
      talent_name.trim ().length > 0 &&;
      project_name.trim ().length > 0 &&;
      scope_summary.trim ().length > 0 &&;
      !!start_date &&;
      !!end_date &&;
      (payment_type === 'hourly' ? hourly_rate > 0 : fixed_amount > 0));
  }, [talent_name, project_name, scope_summary, start_date, end_date, payment_type, hourly_rate, fixed_amount]),
  async /**
 * submit_form - Function description
 */
function submit_form() {
    event.prevent_default (),
    // Check condition
if (return, ) {
  $2
}
    set_loading (true),
    set_error (null),
    set_contract (''),
    try {
      const body = {
        talent_name,
        project_name,
        scope_summary,
        start_date: start_date?.toISOString ().slice (0, 10),
        end_date: end_date?.toISOString ().slice (0, 10),
        payment:;
          payment_type === 'hourly';
            ? {
                type: 'hourly',
                currency,
                hourly_rate,
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined,
                payment_schedule}
            : {
                type: 'fixed',
                currency,
                total_amount: fixed_amount,
                milestone_summary: milestone_summary || undefined,
                payment_schedule},
        clauses: {
          nda,
          ip_transfer},
        governing_law,
        revision_rounds},
      const res = await fetch ('/api / ai - contract', {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json'},
        body: JSON.stringify (body)}),
      // Check condition
if ( {) {
  $2
}
        const data = await res.json ().catch (() => ({})),
        throw new Error (data?.error || `Request failed: ${res.status}`);
      }
      const data = (await res.json ()) as { contract: string },
      set_contract (data.contract);
    } catch (e: any) {
      set_error (e?.message || 'Failed to generate contract');
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      set_loading (false);
    }
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    setLoading(true),
    setError(null),
    setContract(''),


<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
type PaymentType = 'hourly' | 'fixed';
export default function ContractBuilderPage(req, res) {
  try {
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
  useEffect(() => {;
    if (!router.isReady) return,;
    const { talent, project } = router.query as { talent?: string, project?: string },;
    if (talent && !talentName) setTalentName(decodeURIComponent(talent)),;
    if (project && !projectName) setProjectName(decodeURIComponent(project));
  }, [router.isReady, router.query, talentName, projectName]),;
  const canSubmit = useMemo(() => {;
    return (;
      talentName.trim().length > 0 &&;
      projectName.trim().length > 0 &&;
      scopeSummary.trim().length > 0 &&;
      !!startDate &&;
      !!endDate &&;
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0);
    );
  }, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount]),;
  async function submitForm(event: React.FormEvent) {;
    event.preventDefault(),;
    if (!canSubmit) return,;
    setLoading(true);
    setError(null);
    setContract('');



    try {
      const body = {;
        talentName;
        projectName;
        scopeSummary;
        startDate: startDate?.toISOString().slice(0, 10);
        endDate: endDate?.toISOString().slice(0, 10);
        payment:;
          paymentType === 'hourly';
            ? {;
                type: 'hourly',;
                currency,;
                hourlyRate,;
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined,;
                paymentSchedule  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            : {;
                type: 'fixed',;
                currency,;
                totalAmount: fixedAmount,;
                milestoneSummary: milestoneSummary || undefined,;
                paymentSchedule},;
        clauses: {;
          nda,;
          ipTransfer},;
        governingLaw,;
        revisionRounds},;
      const res = await fetch('/api/ai-contract', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(body)}),;
      if (!res.ok) {;
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = (await res.json()) as { contract: string };
      setContract(data.contract);
    } catch (error) {
      setError(e?.message || 'Failed to generate contract');
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function copyToClipboard() {;
    if (!contract) return;
    void navigator.clipboard.writeText(contract);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function downloadAsTxt() {;
    if (!contract) return;
    const blob = new Blob([contract], { type: 'text/plain,charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contract-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contract Builder</h1>
      <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Talent name</label>
          <input className="w-full input input-bordered" value={talentName} onChange={(e) => setTalentName(e.target.value)} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Project name</label>
          <input className="w-full input input-bordered" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Website Redesign" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Payment currency</label>
          <input className="w-full input input-bordered" value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="USD" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Scope summary</label>
          <textarea className="w-full textarea textarea-bordered" rows={4} value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} placeholder="High-level deliverables, responsibilities, and success criteria..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start date</label>
          <DatePicker className="w-full input input-bordered" selected={startDate} onChange={(d) => setStartDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End date</label>
          <DatePicker className="w-full input input-bordered" selected={endDate} onChange={(d) => setEndDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Payment terms</label>
          <div className="flex items-center gap-4 mb-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'hourly'} onChange={() => setPaymentType('hourly')} /> Hourly
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'fixed'} onChange={() => setPaymentType('fixed')} /> Fixed
            </label>
          </div>
          {paymentType === 'hourly' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hourly rate</label>
                <input type="number" className="w-full input input-bordered" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weekly hour cap (optional)</label>
                <input type="number" className="w-full input input-bordered" value={weeklyHourCap} onChange={(e) => setWeeklyHourCap(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., weekly, Net 15" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Total amount</label>
                <input type="number" className="w-full input input-bordered" value={fixedAmount} onChange={(e) => setFixedAmount(Number(e.target.value))} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Milestone summary (optional)</label>
                <input className="w-full input input-bordered" value={milestoneSummary} onChange={(e) => setMilestoneSummary(e.target.value)} placeholder="Phase 1 design, Phase 2 implementation..." />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., 50% upfront, 50% on delivery" />
              </div>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Optional clauses</label>
          <div className="space-y-2">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={nda} onChange={(e) => setNda(e.target.checked)} /> NDA (Confidentiality)
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={ipTransfer} onChange={(e) => setIpTransfer(e.target.checked)} /> IP Transfer / Assignment
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Governing law</label>
          <input className="w-full input input-bordered" value={governingLaw} onChange={(e) => setGoverningLaw(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Included revision rounds</label>
          <input type="number" className="w-full input input-bordered" value={revisionRounds} onChange={(e) => setRevisionRounds(Number(e.target.value))} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">


          <button type="submit" className="btn btn-primary" disabled={!canSubmit || loading}>


        </div>
      </form>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  /**
 * copyToClipboard - Function description
 */
function copyToClipboard() {
    // Check condition
if (return, ) {
  $2
}
    void navigator.clipboard.write_text (contract);
  }
  /**
 * downloadAsTxt - Function description
 */
function downloadAsTxt() {
    // Check condition
if (return, ) {
  $2
}
    const blob = new Blob ([contract], { type: 'text / plain, charset = utf - 8' }),
    const url = URL.createObjectURL (blob),
    const array = document.create_element ('a'),
    a.href = url,
    a.download = `contract-${project_name.replace (/\s+/g, '-').toLowerCase ()}.txt`,
    a.click (),
    URL.revokeObjectURL (url);
  }
  return (
    <div className="max - w-5xl mx - auto">;
      <h1 className="text - 3xl font - bold mb - 6">Contract Builder</h1>;
      <form on_submit={submit_form} className="grid grid - cols - 1 md:grid - cols - 2 gap - 6 bg - gray - 50 dark:bg - neutral - 900 p - 6 rounded - lg border border - gray - 200 dark:border - neutral - 800">;
        <div className="col - span - 1 md:col - span - 2">;
          <label className="block text - sm font - medium mb - 1">Talent name</label>;
          <input className="w - full input input - bordered" value={talent_name} on_change={(e) => setTalentName (e.target.value)} placeholder="Jane Doe" />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">Project name</label>;
          <input className="w - full input input - bordered" value={project_name} on_change={(e) => setProjectName (e.target.value)} placeholder="Website Redesign" />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">Payment currency</label>;
          <input className="w - full input input - bordered" value={currency} on_change={(e) => set_currency (e.target.value)} placeholder="USD" />;
        </div>;
        <div className="md:col - span - 2">;
          <label className="block text - sm font - medium mb - 1">Scope summary</label>;
          <textarea className="w - full textarea textarea - bordered" rows={4} value={scope_summary} on_change={(e) => setScopeSummary (e.target.value)} placeholder="High - level deliverables, responsibilities, and success criteria..." />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">Start date</label>;
          <DatePicker className="w - full input input - bordered" selected={start_date} on_change={(d) => setStartDate (d)} date_format="MMMM d, yyyy" />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">End date</label>;
          <DatePicker className="w - full input input - bordered" selected={end_date} on_change={(d) => setEndDate (d)} date_format="MMMM d, yyyy" />;
        </div>;
        <div className="md:col - span - 2">;
          <label className="block text - sm font - medium mb - 2">Payment terms</label>;
          <div className="flex items - center gap - 4 mb - 4">;
            <label className="inline - flex items - center gap - 2">;
              <input type="radio" name="pay" checked={payment_type === 'hourly'} on_change={() => setPaymentType ('hourly')} /> Hourly;
            </label>;
            <label className="inline - flex items - center gap - 2">;
              <input type="radio" name="pay" checked={payment_type === 'fixed'} on_change={() => setPaymentType ('fixed')} /> Fixed;
            </label>;
          </div>;
          {payment_type === 'hourly' ? (
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
              <div>;
                <label className="block text - sm font - medium mb - 1">Hourly rate</label>;
                <input type="number" className="w - full input input - bordered" value={hourly_rate} on_change={(e) => setHourlyRate (Number (e.target.value))} />;
              </div>;
              <div>;
                <label className="block text - sm font - medium mb - 1">Weekly hour cap (optional)</label>;
                <input type="number" className="w - full input input - bordered" value={weeklyHourCap} on_change={(e) => setWeeklyHourCap (e.target.value === '' ? '' : Number (e.target.value))} />;
              </div>;
              <div>;
                <label className="block text - sm font - medium mb - 1">Payment schedule</label>;
                <input className="w - full input input - bordered" value={payment_schedule} on_change={(e) => setPaymentSchedule (e.target.value)} placeholder="e.g., weekly, Net 15" />;
              </div>;
            </div>) : (
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
              <div>;
                <label className="block text - sm font - medium mb - 1">Total amount</label>;
                <input type="number" className="w - full input input - bordered" value={fixed_amount} on_change={(e) => setFixedAmount (Number (e.target.value))} />;
              </div>;
              <div className="md:col - span - 2">;
                <label className="block text - sm font - medium mb - 1">Milestone summary (optional)</label>;
                <input className="w - full input input - bordered" value={milestone_summary} on_change={(e) => setMilestoneSummary (e.target.value)} placeholder="Phase 1 design, Phase 2 implementation..." />;
              </div>;
              <div className="md:col - span - 3">;
                <label className="block text - sm font - medium mb - 1">Payment schedule</label>;
                <input className="w - full input input - bordered" value={payment_schedule} on_change={(e) => setPaymentSchedule (e.target.value)} placeholder="e.g., 50% upfront, 50% on delivery" />;
              </div>;
            </div>)}
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 2">Optional clauses</label>;
          <div className="space - y-2">;
            <label className="inline - flex items - center gap - 2">;
              <input type="checkbox" checked={nda} on_change={(e) => set_nda (e.target.checked)} /> NDA (Confidentiality);
            </label>;
            <label className="inline - flex items - center gap - 2">;
              <input type="checkbox" checked={ip_transfer} on_change={(e) => setIpTransfer (e.target.checked)} /> IP Transfer / Assignment;
            </label>;
          </div>;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">Governing law</label>;
          <input className="w - full input input - bordered" value={governing_law} on_change={(e) => setGoverningLaw (e.target.value)} />;
        </div>;
        <div>;
          <label className="block text - sm font - medium mb - 1">Included revision rounds</label>;
          <input type="number" className="w - full input input - bordered" value={revision_rounds} on_change={(e) => setRevisionRounds (Number (e.target.value))} />;
        </div>;
        <div className="md:col - span - 2 flex items - center gap - 3">;
          <button type="submit" className="btn btn - primary" disabled={!can_submit || loading}>;
            {loading ? 'Generating…' : 'Generate contract'}
          </button>;
          {error && <span className="text - red - 600 text - sm">{error}</span>}
        </div>;
      </form>;
<<<<<<< HEAD
      {contract && (
<<<<<<< HEAD
}

=======

=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </article>;
        </div>)}
    </div>);
}
<<<<<<< HEAD
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">Generated Contract</h2>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={copyToClipboard}>Copy</button>
              <button className="btn" onClick={downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800">

  );
};

        <div className="mt - 8">;
          <div className="flex items - center justify - between mb - 3">;
            <h2 className="text - 2xl font - semibold">Generated Contract</h2>;
            <div className="flex gap - 2">;
              <button className="btn btn - secondary" on_click={copyToClipboard}>Copy</button>;
              <button className="btn" on_click={downloadAsTxt}>Download .txt</button>;
            </div>;
          </div>;
          <article className="prose dark:prose - invert max - w-none whitespace - pre - wrap bg - white dark:bg - black p - 6 rounded - lg border border - gray - 200 dark:border - neutral - 800">;
            {contract}
}
          </article>;
        </div>)}
    </div>);
    setLoading(true),
    setError(null),
    setContract(''),

    try {
      const _body = {
        talentName, _projectName, _scopeSummary, _startDate: startDate?.toISOString().slice(0, _10), _endDate: endDate?.toISOString().slice(0, _10), _payment:
          paymentType === 'hourly'
            ? {
                type: 'hourly', _currency, _hourlyRate, _weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined, _paymentSchedule}
            : {_type: 'fixed', _currency, _totalAmount: fixedAmount, _milestoneSummary: milestoneSummary || undefined, _paymentSchedule},
        clauses: {_nda, _ipTransfer},
        governingLaw,
        revisionRounds},

      const _res = await fetch('/api/ai-contract', {_method: 'POST', _headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(body)}),

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || `Request failed: ${res.status}`)
      }

      const data = (await res.json()) as { contract: string }
      setContract(data.contract)
    } catch (e: any) {
      setError(e?.message || 'Failed to generate contract')
    } finally {
      setLoading(false)
    }
  }
  function copyToClipboard() {
    if (!contract) return
    void navigator.clipboard.writeText(contract)
  }
  function downloadAsTxt() {
    if (!contract) return
    const blob = new Blob([contract], { type: 'text/plain,charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contract-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`
    a.click()

    URL.revokeObjectURL(url)
  }
    setLoading(true),
    setError(null),
    setContract(''),

import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
type PaymentType = 'hourly' | 'fixed';
export default function ContractBuilderPage(req, res) {
  try {
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
  useEffect(() => {;
    if (!router.isReady) return,;
    const { talent, project } = router.query as { talent?: string, project?: string },;
    if (talent && !talentName) setTalentName(decodeURIComponent(talent)),;
    if (project && !projectName) setProjectName(decodeURIComponent(project));
  }, [router.isReady, router.query, talentName, projectName]),;
  const canSubmit = useMemo(() => {;
    return (;
      talentName.trim().length > 0 &&;
      projectName.trim().length > 0 &&;
      scopeSummary.trim().length > 0 &&;
      !!startDate &&;
      !!endDate &&;
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0);
    );
  }, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount]),;
  async function submitForm(event: React.FormEvent) {;
    event.preventDefault(),;
    if (!canSubmit) return,;
    setLoading(true);
    setError(null);
    setContract('');
    try {
      const body = {;
        talentName;
        projectName;
        scopeSummary;
        startDate: startDate?.toISOString().slice(0, 10);
        endDate: endDate?.toISOString().slice(0, 10);
        payment:;
          paymentType === 'hourly';
            ? {;
                type: 'hourly',;
                currency,;
                hourlyRate,;
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined,;
                paymentSchedule  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            : {;
                type: 'fixed',;
                currency,;
                totalAmount: fixedAmount,;
                milestoneSummary: milestoneSummary || undefined,;
                paymentSchedule},;
        clauses: {;
          nda,;
          ipTransfer},;
        governingLaw,;
        revisionRounds},;
      const res = await fetch('/api/ai-contract', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(body)}),;
      if (!res.ok) {;
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = (await res.json()) as { contract: string };
      setContract(data.contract);
    } catch (error) {
      setError(e?.message || 'Failed to generate contract');
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function copyToClipboard() {;
    if (!contract) return;
    void navigator.clipboard.writeText(contract);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function downloadAsTxt() {;
    if (!contract) return;
    const blob = new Blob([contract], { type: 'text/plain,charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contract-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contract Builder</h1>
      <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Talent name</label>
          <input className="w-full input input-bordered" value={talentName} onChange={(e) => setTalentName(e.target.value)} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Project name</label>
          <input className="w-full input input-bordered" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Website Redesign" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Payment currency</label>
          <input className="w-full input input-bordered" value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="USD" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Scope summary</label>
          <textarea className="w-full textarea textarea-bordered" rows={4} value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} placeholder="High-level deliverables, responsibilities, and success criteria..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start date</label>
          <DatePicker className="w-full input input-bordered" selected={startDate} onChange={(d) => setStartDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End date</label>
          <DatePicker className="w-full input input-bordered" selected={endDate} onChange={(d) => setEndDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Payment terms</label>
          <div className="flex items-center gap-4 mb-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'hourly'} onChange={() => setPaymentType('hourly')} /> Hourly
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'fixed'} onChange={() => setPaymentType('fixed')} /> Fixed
            </label>
          </div>
          {paymentType === 'hourly' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hourly rate</label>
                <input type="number" className="w-full input input-bordered" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weekly hour cap (optional)</label>
                <input type="number" className="w-full input input-bordered" value={weeklyHourCap} onChange={(e) => setWeeklyHourCap(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., weekly, Net 15" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Total amount</label>
                <input type="number" className="w-full input input-bordered" value={fixedAmount} onChange={(e) => setFixedAmount(Number(e.target.value))} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Milestone summary (optional)</label>
                <input className="w-full input input-bordered" value={milestoneSummary} onChange={(e) => setMilestoneSummary(e.target.value)} placeholder="Phase 1 design, Phase 2 implementation..." />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., 50% upfront, 50% on delivery" />
              </div>
            </div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Optional clauses</label>
          <div className="space-y-2">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={nda} onChange={(e) => setNda(e.target.checked)} /> NDA (Confidentiality)
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={ipTransfer} onChange={(e) => setIpTransfer(e.target.checked)} /> IP Transfer / Assignment
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Governing law</label>
          <input className="w-full input input-bordered" value={governingLaw} onChange={(e) => setGoverningLaw(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Included revision rounds</label>
          <input type="number" className="w-full input input-bordered" value={revisionRounds} onChange={(e) => setRevisionRounds(Number(e.target.value))} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={!canSubmit |loading}>
          <button type="submit" className="btn btn-primary" disabled={!canSubmit || loading}>
            {loading ? 'Generating…' : 'Generate contract'}
          </button>
          {error && <span className="text-red-600 text-sm">{error}</span>}
          <button type="submit" className="btn btn-primary" disabled={!canSubmit || loading}>
            {loading ? 'Generating…' : 'Generate contract'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </button>
          {error && <span className="text-red-600 text-sm">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </form>
      {contract && (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {contract && (

=======
}

=======
          </article>;
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">Generated Contract</h2>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={copyToClipboard}>Copy</button>
              <button className="btn" onClick={downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
<<<<<<< HEAD
<<<<<<< HEAD
            {contract}
          </article>
        </div>
      )}
    </div>
  )
  );
};
  );
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );
};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {contract  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </article>;
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}

}
}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
