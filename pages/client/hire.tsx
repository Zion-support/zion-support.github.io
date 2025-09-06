import { useState } from "react";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState("ava-chen");
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10)),
  const [scopeSummary, setScopeSummary] = useState("Build AI-enabled reporting module");
  const [termsType, setTermsType] = useState("hourly");
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import {useState} from 'react';
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [showFeedback, setShowFeedback] = useState(false);
        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed';
          ? { type: 'fixed', fixedAmountUsd }
    });
    const json = await res && res.json();
    setLoading(false);
      setShowFeedback(true);    }
=======
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd }
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  }
  return (
          >;
            <option value='hourly'>Hourly</option>;
            <option value='fixed'>Fixed</option>;
            <option value='milestone'>Milestone</option>;
          </select>;
        </div>;
            <input
              type='number'
              value={hourlyRateUsd}
              onChange={e => setHourlyRateUsd(Number(e && e.target.value))}
              className='w-full border rounded px-3 py-2';
            />;
          </div>;
        )}
            <input
              type='number'
              value={fixedAmountUsd}
              onChange={e => setFixedAmountUsd(Number(e && e.target.value))}
              className='w-full border rounded px-3 py-2';
            />          </div>;
        )}
        </div>
      </div>
      {result && (
      )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{;
          actionType: 'listing_publish',;
          metadata: { talentSlug },;
        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}
      />;
    </div>;
  );
=======
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
      {result && (
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
      />;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
