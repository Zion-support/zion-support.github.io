import React, { useEffect, useMemo, useState } from 'react',
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
type PaymentType = any;
    URL.revokeObjectURL(url)
origin/cursor/automate-test-improve-and-merge-code-2533
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


          <button type="submit" className="btn btn-primary" disabled={!canSubmit || loading}>


        </div>
      </form>
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
      {contract && (
          </article>;
        </div>)}
    </div>);
}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">Generated Contract</h2>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={copyToClipboard}>Copy</button>
              <button className="btn" onClick={downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
            {contract}
          </article>
        </div>
      )}
    </div>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
