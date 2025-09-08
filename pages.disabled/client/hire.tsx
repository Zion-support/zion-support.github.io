




import {useState} from 'react';



  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false);




    <div className='max-w-3xl mx-auto p-6 space-y-6'>;
      <h1 className='text-xl font-semibold'>Hire Talent</h1>;
      <div className='space-y-4 border rounded p-4'>;
        <div>;
          <label className='block text-sm font-medium'>Talent</label>;
          <input
            value={talentSlug}
            onChange={e => setTalentSlug(e && e.target.value)}
            className='w-full border rounded px-3 py-2';
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium'>Start date</label>;
          <input
            type='date'
            value={startDateIso}
            onChange={e => setStartDateIso(e && e.target.value)}
            className='w-full border rounded px-3 py-2';
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium'>Scope summary</label>;
          <input
            value={scopeSummary}
            onChange={e => setScopeSummary(e && e.target.value)}
            className='w-full border rounded px-3 py-2';
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium'>Payment terms</label>;
          <select
            value={termsType}
            onChange={e => setTermsType(e && e.target.value)}
            className='w-full border rounded px-3 py-2';
import FeedbackModal from '../../components / ui / FeedbackModal';
export default /**
 * ClientHirePage - Function description
 */
function ClientHirePage() {
  const [talent_slug, setTalentSlug] = useState ('ava - chen');
  const [startDateIso, setStartDateIso] = useState < string>(
    new Date ().toISOString ().slice (0, 10));
  const [scope_summary, setScopeSummary] = useState (
    'Build AI - enabled reporting module');
  const [terms_type, setTermsType] = useState ('hourly');
  const [hourlyRateUsd, setHourlyRateUsd] = useState (120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState (5000);
  const [agreement_url, setAgreementUrl] = useState ('');  const [loading, set_loading] = useState (false);
  const [result, set_result] = useState < any | null>(null);
  const [show_feedback, setShowFeedback] = useState (false);
;
  async /**
 * send_offer - Function description
 */
function send_offer() {
    set_loading (true);
    set_result (null);
    const payment_terms =;
      terms_type === 'hourly';
        ? { type: 'hourly', hourlyRateUsd }
        : terms_type === 'fixed';
          ? { type: 'fixed', fixedAmountUsd }
          : { type: 'milestone', milestones: [] }
;
    const res = await fetch ('/api / marketplace / offers', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json',
        'x - demo - user - role': 'client',
        'x - demo - user - id': 'client - 1',
      },
      body: JSON.stringify ({
        talent_slug,
        startDateIso,
        scope_summary,
        payment_terms,
        agreement_url,
      }),
    });
    const json = await res.json ();
    set_loading (false);
    // Check condition
if ( {) {
  $2
}
      alert (json.error || 'Failed to send offer');
    } else {
      set_result (json.offer);
      setShowFeedback (true);    }
  }
  return (
    <div className='max - w-3xl mx - auto p - 6 space - y-6'>;
      <h1 className='text - xl font - semibold'>Hire Talent</h1>;
      <div className='space - y-4 border rounded p - 4'>;
        <div>;
          <label className='block text - sm font - medium'>Talent</label>;
          <input;
            value={talent_slug}
            on_change={e => setTalentSlug (e.target.value)}
            className='w - full border rounded px - 3 py - 2';
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium'>Start date</label>;
          <input;
            type='date';
            value={startDateIso}
            on_change={e => setStartDateIso (e.target.value)}
            className='w - full border rounded px - 3 py - 2';
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium'>Scope summary</label>;
          <input;
            value={scope_summary}
            on_change={e => setScopeSummary (e.target.value)}
            className='w - full border rounded px - 3 py - 2';
          />;
        </div>;
        <div>;
          <label className='block text - sm font - medium'>Payment terms</label>;
          <select;
            value={terms_type}
            on_change={e => setTermsType (e.target.value)}
            className='w - full border rounded px - 3 py - 2';



          >;
            <option value='hourly'>Hourly</option>;
            <option value='fixed'>Fixed</option>;
            <option value='milestone'>Milestone</option>;
          </select>;
        </div>;



        {termsType === 'fixed' && (;
          <div>;
            <label className='block text-sm font-medium'>;
              Fixed amount (USD);
            </label>;



            <input
              type='number'
              value={fixedAmountUsd}
              onChange={e => setFixedAmountUsd(Number(e && e.target.value))}
              className='w-full border rounded px-3 py-2';
            />          </div>;
        )}


            className='px-4 py-2 rounded bg-indigo-600 text-white'
          >
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>


      setShowFeedback(true);
    }
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  return (
<div className='max-w-3xl mx-auto p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Hire Talent</h1>
      <div className='space-y-4 border rounded p-4'>
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>
      <div className="space-y-4 border rounded p-4">




        <div>
          <label className='block text-sm font-medium'>

        <div>
          <label className='block text-sm font-medium'>Talent</label>
          <input
            value={talentSlug}
            onChange={e => setTalentSlug(e.target.value)}
            className='w-full border rounded px-3 py-2'
          />
        </div>


        <div>
<label className='block text-sm font-medium'>
            Agreement URL (optional)
          </label>
          <input
            value={agreementUrl}
            onChange={e => setAgreementUrl(e.target.value)}
            placeholder='https://...'
            className='w-full border rounded px-3 py-2'
          />
        </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Payment terms</label>
          <select value={termsType} onChange={(e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed</option>
            <option value="milestone">Milestone</option>
          </select>
        </div>
        {termsType === "hourly" && (






          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>



        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        {termsType === "fixed" && (
          <div>
            <label className="block text-sm font-medium">Fixed amount (USD)</label>
            <input type="number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>

        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>
        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">



        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>



      )}
<div>;
          <label className='block text-sm font-medium'>;
            Agreement URL (optional);
          </label>;
          <input
            value={agreementUrl}
            onChange={e => setAgreementUrl(e && e.target.value)}
            placeholder='https://...';
            className='w-full border rounded px-3 py-2';
          />;
        </div>;
        <div className='flex justify-end'>;
          <button
            onClick={sendOffer}
            disabled={loading}
            className='px-4 py-2 rounded bg-indigo-600 text-white'>;
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>;
        </div>;
      </div>;
      {result && (;
        <div className='border rounded p-4 bg-emerald-50'>;
          <div className='font-medium'>Offer sent</div>;
          <div className='text-sm'>Offer ID: {result && result.id}</div>        </div>;
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}



        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}



        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
  )
}
        {terms_type === 'hourly' && (
          <div>;
            <label className='block text - sm font - medium'>;
              Hourly rate (USD);
            </label>;
            <input;
              type='number';
              value={hourlyRateUsd}
              on_change={e => setHourlyRateUsd (Number (e.target.value))}
              className='w - full border rounded px - 3 py - 2';
            />;
          </div>)}
        {terms_type === 'fixed' && (
          <div>;
            <label className='block text - sm font - medium'>;
              Fixed amount (USD);
            </label>;
            <input;
              type='number';
              value={fixedAmountUsd}
              on_change={e => setFixedAmountUsd (Number (e.target.value))}
              className='w - full border rounded px - 3 py - 2';
            />          </div>)}
        <div>;
          <label className='block text - sm font - medium'>;
            Agreement URL (optional);
          </label>;
          <input;
            value={agreement_url}
            on_change={e => setAgreementUrl (e.target.value)}
            placeholder='https://...';
            className='w - full border rounded px - 3 py - 2';
          />;
        </div>;
        <div className='flex justify - end'>;
          <button;
            on_click={send_offer}
            disabled={loading}
            className='px - 4 py - 2 rounded bg - indigo - 600 text - white';
          >;
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>;
        </div>;
      </div>;
        )}
        {termsType === 'fixed' && (
          <div>
            <label className='block text-sm font-medium'>
              Fixed amount (USD)
            </label>
            <input
              type='number'
              value={fixedAmountUsd}
              onChange={e => setFixedAmountUsd(Number(e.target.value))}
              className='w-full border rounded px-3 py-2'
            />          </div>
        )}
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {termsType === "fixed" && (
          <div>
            <label className="block text-sm font-medium">Fixed amount (USD)</label>
            <input type="number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>


        <div className='flex justify-end'>
          <button
            onClick={sendOffer}
            disabled={loading}
            className='px-4 py-2 rounded bg-indigo-600 text-white'
          >
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>
        </div>
      </div>
      {result && (
            {loading ? 'Sending…' : 'Send Offer to Confirm'}
          </button>
        </div>
      </div>
      {result && (
<div className='border rounded p-4 bg-emerald-50'>
          <div className='font-medium'>Offer sent</div>
          <div className='text-sm'>Offer ID: {result.id}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
defaultContext={{
          actionType: 'listing_publish',
          metadata: { talentSlug },
origin/cursor/automate-test-improve-and-merge-code-2533
        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
        <div className='border rounded p - 4 bg - emerald - 50'>;
          <div className='font - medium'>Offer sent</div>;
          <div className='text - sm'>Offer ID: {result.id}</div>        </div>)}
      <FeedbackModal;
        is_open={show_feedback}
        on_close={() => setShowFeedback (false)}
        default_context={{
          action_type: 'listing_publish',
          metadata: { talent_slug },
        }}
        user_headers={{
          'x - demo - user - role': 'client',
          'x - demo - user - id': 'client - 1',
        }}




