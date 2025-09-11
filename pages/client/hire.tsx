

<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';


  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null),
  const [showFeedback, setShowFeedback] = useState(false);


<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState("ava-chen");
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10)),
  const [scopeSummary, setScopeSummary] = useState("Build AI-enabled reporting module");
  const [termsType, setTermsType] = useState("hourly");
import {useState} from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function sendOffer() {;
    setLoading(true);
    setResult(null);
    const paymentTerms =;
      termsType === 'hourly';
<<<<<<< HEAD
<<<<<<< HEAD
        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed';
          ? { type: 'fixed', fixedAmountUsd }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        ? { type: 'hourly', hourlyRateUsd }
        : termsType === 'fixed';
          ? { type: 'fixed', fixedAmountUsd }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          : { type: 'milestone', milestones: [] };
=======
          : { type: 'milestone', milestones: [] };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    });
    const json = await res && res.json();
    setLoading(false);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    });
    const json = await res && res.json();
    setLoading(false);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!json && json.ok) {;
      alert(json && json.error || 'Failed to send offer');
    } else {;
      setResult(json && json.offer);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setShowFeedback(true);    }
=======

      setShowFeedback(true);    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd }
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
<<<<<<< HEAD
  const [showFeedback, setShowFeedback] = useState(false);


import { useState } from "react",
import FeedbackModal from "../../components/ui/FeedbackModal",

export default function ClientHirePage() {
  const [talentSlug, setTalentSlug] = useState("ava-chen");
  const [startDateIso, setStartDateIso] = useState<string>(new Date().toISOString().slice(0, 10)),

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
  }
  return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            <option value='hourly'>Hourly</option>;
            <option value='fixed'>Fixed</option>;
            <option value='milestone'>Milestone</option>;
          </select>;
        </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {termsType === 'fixed' && (;
          <div>;
            <label className='block text-sm font-medium'>;
              Fixed amount (USD);
            </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input
              type='number'
              value={fixedAmountUsd}
              onChange={e => setFixedAmountUsd(Number(e && e.target.value))}
              className='w-full border rounded px-3 py-2';
            />          </div>;
        )}
<<<<<<< HEAD
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>
      <div className="space-y-4 border rounded p-4">
import { useState } from "react";
import FeedbackModal from "../../components/ui/FeedbackModal";
import {useState} from 'react';
import FeedbackModal from '../../components/ui/FeedbackModal';
export default function ClientHirePage() {;
  const [talentSlug, setTalentSlug] = useState('ava-chen');
  const [startDateIso, setStartDateIso] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [scopeSummary, setScopeSummary] = useState(
    'Build AI-enabled reporting module'
  );
  const [termsType, setTermsType] = useState('hourly');
  const [hourlyRateUsd, setHourlyRateUsd] = useState(120);
  const [fixedAmountUsd, setFixedAmountUsd] = useState(5000);
  const [agreementUrl, setAgreementUrl] = useState('');  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

=======
=======
  const [showFeedback, setShowFeedback] = useState(false);


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      termsType === "hourly"
        ? { type: "hourly", hourlyRateUsd   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
        : termsType === "fixed";
        ? { type: "fixed", fixedAmountUsd   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
        : { type: "milestone", milestones: [] },
    const res = await fetch("/api/marketplace/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-demo-user-role": "client", "x-demo-user-id": "client-1" },
      body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })}),
    const json = await res.json(),
    setLoading(false),
    if (!json.ok) {
      alert(json.error || "Failed to send offer")
    } else {
      setResult(json.offer),
      setShowFeedback(true)
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Hire Talent</h1>
      <div className='space-y-4 border rounded p-4'>
<<<<<<< HEAD
=======

            className='px-4 py-2 rounded bg-indigo-600 text-white'
          >
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>
      <div className="space-y-4 border rounded p-4">
<<<<<<< HEAD
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>
      <div className="space-y-4 border rounded p-4">
=======
=======
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Hire Talent</h1>

      <div className="space-y-4 border rounded p-4">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div>
          <label className="block text-sm font-medium">Talent</label>
          <input value={talentSlug} onChange={(e) => setTalentSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div>
          <label className="block text-sm font-medium">Start date</label>
          <input type="date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div>
          <label className="block text-sm font-medium">Payment terms</label>
          <select value={termsType} onChange={(e) => setTermsType(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed</option>
            <option value="milestone">Milestone</option>
          </select>
        </div>
<<<<<<< HEAD
        {termsType === "hourly" && (



<<<<<<< HEAD
        {termsType === 'hourly' && (
        {termsType === "hourly" && (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {termsType === 'hourly' && (
        {termsType === "hourly" && (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>
            <label className="block text-sm font-medium">Hourly rate (USD)</label>
            <input type="number" value={hourlyRateUsd} onChange={(e) => setHourlyRateUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
        )}
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div>
          <label className="block text-sm font-medium">Agreement URL (optional)</label>
          <input value={agreementUrl} onChange={(e) => setAgreementUrl(e.target.value)} placeholder="https://..." className="w-full border rounded px-3 py-2" />
        </div>
        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">

<<<<<<< HEAD
        <div className="flex justify-end">
          <button onClick={sendOffer} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">
            {loading ? "Sending…" : "Send Offer to Confirm"}
          </button>
        </div>
      </div>
      {result && (
      termsType === "hourly"
        ? { type: "hourly", _hourlyRateUsd}
        : termsType === "fixed"
        ? { type: "fixed", fixedAmountUsd }
        : { type: "milestone", milestones: [] },

    const res = await fetch("/api/marketplace/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-demo-user-role": "client", "x-demo-user-id": "client-1" },
      body: JSON.stringify({ talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl })}),
    const json = await res.json()
    setLoading(false),
    } else {
      setResult(json.offer),
      setShowFeedback(true)
    }
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
          <label className="block text-sm font-medium&quot;>Start date</label>
          <input type=&quot;date" value={startDateIso} onChange={(e) => setStartDateIso(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Scope summary</label>
          <input value={_scopeSummary} onChange={_(_e) => setScopeSummary(e.target.value)} className="w-full border rounded px-3 py-2" />
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

      {_result && (

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="border rounded p-4 bg-emerald-50">
          <div className="font-medium">Offer sent</div>
          <div className="text-sm">Offer ID: {result.id}</div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        defaultContext={{;
          actionType: 'listing_publish',;
          metadata: { talentSlug },;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }}
        userHeaders={{;
          'x-demo-user-role': 'client',;
          'x-demo-user-id': 'client-1',;
        }}
<<<<<<< HEAD
      />;
    </div>;
  );
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {termsType === "fixed" && (
          <div>
            <label className="block text-sm font-medium">Fixed amount (USD)</label>
            <input type="number" value={fixedAmountUsd} onChange={(e) => setFixedAmountUsd(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            className='px-4 py-2 rounded bg-indigo-600 text-white'
          >
            {loading ? 'Sending…' : 'Send Offer to Confirm'}          </button>
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
        <div className='border rounded p-4 bg-emerald-50'>
          <div className='font-medium'>Offer sent</div>
          <div className='text-sm'>Offer ID: {result.id}</div>        </div>
      )}

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{
          actionType: 'listing_publish',
          metadata: { talentSlug },
        }}
        userHeaders={{
          'x-demo-user-role': 'client',
          'x-demo-user-id': 'client-1',
        }}
      />
    </div>
);
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      />
    </div>
);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
