// Service Configurator Wizard — multi-step proposal builder
// Prospects answer questions → AI recommends bundle → generates PDF proposal → emails instantly
'use client';

import { useState, useMemo } from 'react';
import { allServices } from '@/data/servicesData';
import { recommendServices } from '@/lib/recommend'; // reuse existing AI recommender
import ProposalPDF from '@/components/ProposalPDF';
import StepsIndicator from '@/components/StepsIndicator';

type Step = 'budget' | 'needs' | 'services' | 'timeline' | 'review';

export default function ConfiguratorPage() {
  const [step, setStep] = useState<Step>('budget');
  const [budget, setBudget] = useState<string>('');
  const [needs, setNeeds] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [proposalUrl, setProposalUrl] = useState<string | null>(null);

  // Available need categories for selection
  const needCategories = [
    'Reduce operational costs',
    'Improve customer experience',
    'Increase security & compliance',
    'Automate manual workflows',
    'Scale infrastructure rapidly',
    'Gain better analytics & insights',
    'Launch new digital products',
    'Modernize legacy systems',
    'Optimize cloud spend',
    'Enable remote/hybrid work'
  ];

  const steps: Step[] = ['budget', 'needs', 'services', 'timeline', 'review'];

  // AI-powered service recommendation based on budget + needs
  const recommendedServices = useMemo(() => {
    if (!budget || needs.length === 0) return [];
    
    const prompt = `Budget: ${budget}\nNeeds: ${needs.join(', ')}\n\nRecommend up to 5 services from catalog.`;
    // Use local recommendServices function (from API reuse)
    // For now, return filtered list — actual AI will be called in API route
    return allServices.filter(s => 
      needs.some(n => s.description.toLowerCase().includes(n.split(' ')[0].toLowerCase()))
    ).slice(0, 5);
  }, [budget, needs]);

  const handleNext = () => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  };

  const handleBack = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  };

  const generateProposal = async () => {
    setGeneratingPdf(true);
    try {
      const res = await fetch('/api/configurator/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName,
          contactEmail,
          contactPhone,
          budget,
          needs,
          selectedServices,
          timeline
        })
      });
      const data = await res.json();
      if (data.proposalUrl) {
        setProposalUrl(data.proposalUrl);
      }
    } catch (err) {
      console.error('Proposal generation failed:', err);
    } finally {
      setGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container-page max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Build Your Custom Solution
        </h1>
        <p className="text-slate-300 text-center mb-8">
          Answer a few questions — we'll design the perfect service bundle and send you a detailed proposal.
        </p>

        <StepsIndicator steps={steps.map(s => ({ id: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))} current={step} />

        <div className="mt-8 bg-slate-900/40 rounded-xl border border-slate-700/50 p-8">
          {/* Step 1: Budget */}
          {step === 'budget' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">What's your monthly budget?</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Under $1,000', '$1,000–$5,000', '$5,000–$20,000', '$20,000–$100,000', 'Over $100,000'].map(b => (
                  <button
                    key={b}
                    onClick={() => { setBudget(b); handleNext(); }}
                    className="rounded-lg border border-purple-500/50 bg-purple-900/20 px-6 py-4 text-white hover:bg-purple-900/40 transition"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Needs */}
          {step === 'needs' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">What are your top business objectives? (select all that apply)</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {needCategories.map(n => (
                  <label key={n} className="flex items-center gap-3 rounded-lg border border-slate-700 p-4 cursor-pointer hover:border-purple-500/50">
                    <input
                      type="checkbox"
                      checked={needs.includes(n)}
                      onChange={e => {
                        if (e.target.checked) setNeeds([...needs, n]);
                        else setNeeds(needs.filter(x => x !== n));
                      }}
                      className="h-5 w-5 rounded border-purple-500"
                    />
                    <span className="text-white">{n}</span>
                  </label>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={handleNext} disabled={needs.length === 0}
                  className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50">
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Service Selection */}
          {step === 'services' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Review Recommended Services</h2>
              <p className="text-slate-400 mb-6">These were selected based on your budget and needs. Customize your bundle.</p>
              
              <div className="space-y-4">
                {recommendedServices.map(s => (
                  <div key={s.id} className="flex items-start gap-4 rounded-lg border border-slate-700 p-4">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={e => {
                        if (e.target.checked) setSelectedServices([...selectedServices, s.id]);
                        else setSelectedServices(selectedServices.filter(id => id !== s.id));
                      }}
                      className="mt-1 h-5 w-5 rounded border-purple-500"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="text-sm text-slate-400 mb-2">{s.description.substring(0, 120)}...</div>
                      <div className="text-purple-300 font-medium">
                        {Object.values(s.pricing)[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button onClick={handleBack} className="rounded-full border border-slate-600 px-6 py-3 text-white hover:bg-slate-800">Back</button>
                <button onClick={handleNext} className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-500">
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Timeline & Contact */}
          {step === 'timeline' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Timeline & Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Implementation Timeline</label>
                  <select value={timeline} onChange={e => setTimeline(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white">
                    <option value="">Select timeline...</option>
                    <option value="ASAP">As soon as possible (urgent)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploratory">Just exploring (no immediate need)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                  <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Your Company" className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} placeholder="you@company.com" className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone (optional)</label>
                  <input type="tel" value={contactPhone} onChange={e => setContactPhone(e.target.value)} placeholder="+1 302 464 0950" className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white" />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={handleBack} className="rounded-full border border-slate-600 px-6 py-3 text-white hover:bg-slate-800">Back</button>
                <button onClick={handleNext} disabled={!companyName || !contactEmail || !timeline}
                  className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50">
                  Review Proposal
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Review & Generate */}
          {step === 'review' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Your Custom Proposal</h2>
              
              <div className="bg-slate-800/60 rounded-lg p-6 mb-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-slate-400">Company</div>
                    <div className="text-white font-medium">{companyName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-white font-medium">{contactEmail}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Timeline</div>
                    <div className="text-white font-medium">{timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Budget Range</div>
                    <div className="text-white font-medium">{budget}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-slate-400 mb-2">Selected Services ({selectedServices.length})</div>
                  <ul className="space-y-2">
                    {selectedServices.map(sid => {
                      const s = allServices.find(x => x.id === sid);
                      return s ? <li key={sid} className="text-white">• {s.title}</li> : null;
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="text-sm text-slate-400 mb-1">Proposal will include:</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>✓ Detailed service descriptions and features</li>
                    <li>✓ Volume discounts based on selected bundle</li>
                    <li>✓ Implementation timeline and milestones</li>
                    <li>✓ Next steps and contact information</li>
                    <li>✓ PDF attachment delivered to your email instantly</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between">
                <button onClick={handleBack} className="rounded-full border border-slate-600 px-6 py-3 text-white hover:bg-slate-800">Back</button>
                <button onClick={generateProposal} disabled={generatingPdf || selectedServices.length === 0}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white hover:from-purple-500 hover:to-pink-500 disabled:opacity-50">
                  {generatingPdf ? 'Generating...' : 'Generate & Email Proposal'}
                </button>
              </div>

              {proposalUrl && (
                <div className="mt-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-center">
                  <div className="text-green-400 font-medium mb-2">✓ Proposal sent to {contactEmail}!</div>
                  <a href={proposalUrl} target="_blank" rel="noreferrer" className="text-purple-300 underline">
                    Preview PDF
                  </a>
                  <div className="mt-2 text-sm text-slate-400">
                    Our team will follow up within 24 hours.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
