

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';


  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false);


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
=======
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd }
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
=======
  const [showFeedback, setShowFeedback] = useState(false);


=======
import { useState } from "react",
import FeedbackModal from "../../components/ui/FeedbackModal",
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

    const paymentTerms =
      termsType === 'hourly'
        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed'
          ? { type: 'fixed', fixedAmountUsd }
          : { type: 'milestone', milestones: [] }
    const res = await fetch('/api/marketplace/offers', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'
        'x-demo-user-role': 'client'
        'x-demo-user-id': 'client-1'
      }
      body: JSON.stringify({
        talentSlug
        startDateIso
        scopeSummary
        paymentTerms
        agreementUrl
      })
    });
    const json = await res.json();
    setLoading(false);
    if (!json.ok) {
      alert(json.error |'Failed to send offer');
    } else {
      setResult(json.offer);
      setShowFeedback(true);    }

  }
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Hire Talent</h1>
      <div className='space-y-4 border rounded p-4'>
  const [scopeSummary, setScopeSummary] = useState("Build AI-enabled reporting module"),
  const [termsType, setTermsType] = useState("hourly"),
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120),
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000),
  const [agreementUrl, setAgreementUrl] = useState(""),
  const [loading, setLoading] = useState(false),
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false),

  async function sendOffer() {
    setLoading(true),
    setResult(null),
    const paymentTerms =


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  }
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Hire Talent</h1>
      <div className='space-y-4 border rounded p-4'>
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div>
          <label className="block text-sm font-medium">Talent</label>
          <input value={talentSlug} onChange={(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Start date</label>
          <input type="date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
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
        {termsType === 'hourly' && (
        {termsType === "hourly" && (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
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


        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}


=======
        defaultContext={{ actionType: 'listing_publish', metadata: { talentSlug } }}
        userHeaders={{ 'x-demo-user-role': 'clientx-demo-user-id': 'client-1' }}
      />
    </div>
);
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
        </div>
      </div>
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
=======
      />
    </div>
);

}
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
