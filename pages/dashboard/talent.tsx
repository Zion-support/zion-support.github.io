import { useEffect, useState } from "react";
import Link from "next/link";
import FeedbackModal from "../../components/ui/FeedbackModal";

export default function TalentDashboard() {
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/marketplace/offers", {
          headers: {
            "x-demo-user-role": "talent",
            // Demo: set current talent slug to match a profile in data/talent.ts
            "x-demo-talent-slug": "ava-chen",
          },
        });
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load offers");
        setOffers(json.offers || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);


import { useEffect, useState } from 'react';


  const [showFeedback, setShowFeedback] = useState(false);
  const [lastContext, setLastContext] = useState<any>(null);

  async function act(id: string, action: string) {
    const res = await fetch("/api/marketplace/offers", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-demo-user-role": "talent",
        "x-demo-talent-slug": "ava-chen",
      },
      body: JSON.stringify({ id, action }),
    });
    const json = await res.json();
    if (!json.ok) {
      alert(json.error || "Action failed");
    } else {
      if (action === 'accept') {
        setLastContext({ actionType: 'talent_contact', metadata: { offerId: id, projectId: json.project?.id } });
        setShowFeedback(true);
      }
      setTimeout(()=>location.reload(), 400);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-green-50 border border-green-200 rounded p-4">
        <div className="text-lg">🎉 You’ve been selected for a project!</div>
        <div className="text-sm text-gray-600">Review and accept the offer to kick things off.</div>
      </div>

      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}

      <div className="space-y-4">
        {offers.map((o) => (
          <div key={o.id}>
            <div className="border rounded p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">Offer • {o.scopeSummary}</div>
                <div className="text-sm text-gray-600">Start: {new Date(o.startDateIso).toLocaleDateString()} • Terms: {o.paymentTerms?.type}</div>
                <div className="text-xs mt-1">
                  Status: <span className="px-2 py-0.5 rounded bg-gray-100">{o.status}</span>
                </div>
              </div>
                  <Link href={`/project/${o.projectId}`} className="px-3 py-1 rounded bg-indigo-600 text-white">Open Project</Link>
                  <Link href={`/project/${o.projectId}`} className="px-3 py-1 rounded bg-indigo-600 text-white">Open Project</Link>





                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
      </EnhancedCard>;


import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import EnhancedButton from '../../components / ui / EnhancedButton';
import {useEffect, useState} from 'react';
export default /**
      <EnhancedCard>;
      </EnhancedCard>;
      <EnhancedCard>;
                <EnhancedButton;
                </EnhancedButton>              )}
      </EnhancedCard>;


