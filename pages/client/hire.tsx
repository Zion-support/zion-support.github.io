<<<<<<< HEAD
import { useState } from "react";
import FeedbackModal from "../../components/ui/FeedbackModal";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';


  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [showFeedback, setShowFeedback] = useState(false);

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  async function sendOffer() {;
    setLoading(true);
    setResult(null);
    const paymentTerms =;
      termsType === 'hourly';

        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed';
          ? { type: 'fixed', fixedAmountUsd }

          : { type: 'milestone', milestones: [] };

    const res = await fetch('/api/marketplace/offers', {;
      method: 'POST',;
      headers: {;
        'Content-Type': 'application/json',;
        'x-demo-user-role': 'client',;
        'x-demo-user-id': 'client-1',;
      },;
      body: JSON && JSON.stringify({;
        talentSlug,;
        startDateIso,;
        scopeSummary,;
        paymentTerms,;
        agreementUrl,;
      }),;

    });
    const json = await res && res.json();
    setLoading(false);

    if (!json && json.ok) {;
      alert(json && json.error || 'Failed to send offer');
    } else {;
      setResult(json && json.offer);

      setShowFeedback(true);    }
<<<<<<< HEAD
=======
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd }
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
<<<<<<< HEAD
import { useState } from "react",
import FeedbackModal from "../../components/ui/FeedbackModal",
=======
=======
  const [showFeedback, setShowFeedback] = useState(false);


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
import FeedbackModal from "../../components/ui/FeedbackModal",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState("ava-chen");
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10)),
  const [scopeSummary, setScopeSummary] = useState("Build AI-enabled reporting module");
  const [termsType, setTermsType] = useState("hourly");
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false);
  async function sendOffer() {
    setLoading(true);
    setResult(null);

  const [scopeSummary, setScopeSummary] = useState("Build AI-enabled reporting module"),
  const [termsType, setTermsType] = useState("hourly"),
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120),
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000),
  const [agreementUrl, setAgreementUrl] = useState(""),
  const [loading, setLoading] = useState(false),
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false),
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  async function sendOffer() {
    setLoading(true),
    setResult(null),
    const paymentTerms =
<<<<<<< HEAD
      termsType === 'hourly'
        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed'
          ? { type: 'fixed', fixedAmountUsd }
          : { type: 'milestone', milestones: [] };

    const res = await fetch('/api/marketplace/offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-demo-user-role': 'client',
        'x-demo-user-id': 'client-1',
      },
      body: JSON.stringify({
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms,
        agreementUrl,
      }),
    });
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {
      alert(json.error || 'Failed to send offer');
    } else {
      setResult(json.offer);
      setShowFeedback(true);    }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        : termsType === "fixed";
        ? { type: "fixed", fixedAmountUsd   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        : { type: "milestone", milestones: [] },
    const res = await fetch("/api/marketplace/offers", {
      method: "POST",
      headers: {
       "Content-Type": "application/json", "x-demo-user-role": "client", "x-demo-user-id": "client-1" 
    },
    body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })});
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {
      alert(json.error || "Failed to send offer")
    } else {
      setResult(json.offer);
      setShowFeedback(true)
    }
  }
<<<<<<< HEAD

  }
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Hire Talent</h1>
      <div className='space-y-4 border rounded p-4'>
=======
  }
  return (

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
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



=======
<<<<<<< HEAD
        {termsType === "hourly" && (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>
<<<<<<< HEAD
=======
        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className='flex justify-end'>
          <button
            onClick={sendOffer}
            disabled={loading}
            className='px-4 py-2 rounded bg-indigo-600 text-white'
          >
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}


        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}


        </div>
      </div>
      {result && (
=======
<<<<<<< HEAD
        </div>
      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {result && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
        }}
<<<<<<< HEAD
      />;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      />
    </div>
);

}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">
            {loading ? "Sending…" : "Send Offer to Confirm"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </button>
        </div>
      </div>
      {result && (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>
        : { type: "milestone", milestones: [] },;
    const res = await fetch("/api/marketplace/offers", {;
      method: "POST",;
      headers: { "Content-Type": "application/json", "x-demo-user-role": "client", "x-demo-user-id": "client-1" },;
      body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })}),;
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {;
      alert(json.error || "Failed to send offer");
    } else {;
      setResult(json.offer);
      setShowFeedback(true);
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
  return (;
    <div className="max-w-3xl mx-auto p-6 space-y-6">;
      <h1 className="text-xl font-semibold">Hire Talent</h1>;
      <div className="space-y-4 border rounded p-4">;
        <div>;
          <label className="block text-sm font-medium">Talent</label>;
          <input value={talentSlug} onChange={(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Start date</label>;
          <input type="date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Scope summary</label>;
          <input value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />;
        </div>;
        <div>;
          <label className="block text-sm font-medium">Payment terms</label>;
          <select value={termsType} onChange={(e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2">;
            <option value="hourly">Hourly</option>;
            <option value="fixed">Fixed</option>;
            <option value="milestone">Milestone</option>;
          </select>;
        </div>;
        {termsType === "hourly" && (;
          <div>;
            <label className="block text-sm font-medium">Hourly rate (USD)</label>;
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        {termsType === "fixed" && (;
          <div>;
            <label className="block text-sm font-medium">Fixed amount (USD)</label>;
            <input type="number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        <div>;
          <label className="block text-sm font-medium">Agreement URL (optional)</label>;
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />;
        </div>;
        <div className="flex justify-end">;
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">;
            {loading ? "Sending…" : "Send Offer to Confirm"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </button>;
        </div>;
      </div>;
      {result && (;
        <div className="border rounded p-4 bg-emerald-50">;
          <div className="font-medium">Offer sent</div>;
          <div className="text-sm">Offer ID: {result.id}</div>;
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      <FeedbackModal;
        isOpen={showFeedback  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        onClose={() => setShowFeedback(false)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
