'use client';

import React, { useState } from 'react';

interface Email {
  id: number;
  day: number;
  subject: string;
  subjectB: string;
  preview: string;
  body: string;
  goal: string;
  metrics: { open: number; click: number; conversion: number; };
  tags: string[];
}

const TEMPLATES: Record<string, { emails: Omit<Email, 'id'>[] }> = {
  onboarding: {
    emails: [
      { day: 0, subject: 'Welcome to {Product}! Your journey starts here 🚀', subjectB: 'You\'re in! Here\'s what to do next', preview: 'Get started with {Product} in 3 simple steps.', body: `Hi {FirstName},\n\nWelcome to {Product}! We're thrilled to have you on board.\n\nHere's what you can do right now:\n1. Complete your profile setup (2 min)\n2. Connect your first integration\n3. Invite a teammate\n\nNeed help? Reply to this email anytime.\n\nBest,\nThe {Product} Team`, goal: 'Activation', metrics: { open: 52, click: 38, conversion: 22 }, tags: ['welcome', 'activation'] },
      { day: 2, subject: 'Did you know {Product} can do this?', subjectB: '3 features most {Product} users miss', preview: 'Unlock hidden features you didn\'t know existed.', body: `Hi {FirstName},\n\nMost new users only explore ~30% of {Product} in their first week.\n\nHere are 3 power features to try today:\n• Feature A: Automate your workflow\n• Feature B: Generate instant reports\n• Feature C: Collaborate in real-time\n\nTry one now — it takes less than 60 seconds.\n\nCheers,\n{Product} Team`, goal: 'Feature Discovery', metrics: { open: 45, click: 28, conversion: 15 }, tags: ['education', 'engagement'] },
      { day: 5, subject: 'Quick question, {FirstName}...', subjectB: 'How\'s your experience so far?', preview: 'We want to make {Product} better for you.', body: `Hi {FirstName},\n\nYou've been using {Product} for 5 days. Quick question:\n\nIs there anything getting in your way?\n\nWe read every reply and use your feedback to prioritize new features.\n\nIf something isn't working, hit reply — our team will help within 24 hours.\n\nBest,\nThe {Product} Team`, goal: 'Feedback', metrics: { open: 41, click: 12, conversion: 8 }, tags: ['feedback', 'relationship'] },
      { day: 8, subject: 'How {Company} saved 20 hrs/week with {Product}', subjectB: 'This customer reduced workload by 47%', preview: 'Real results from a team like yours.', body: `Hi {FirstName},\n\n{Company} was in the same boat as you 3 months ago.\n\nAfter implementing {Product}, they:\n• Saved 20 hours/week on manual tasks\n• Reduced errors by 64%\n• Onboarded new team members 3x faster\n\nSound familiar? You could see similar results.\n\n→ See the full case study\n\nBest,\n{Product} Team`, goal: 'Social Proof', metrics: { open: 38, click: 25, conversion: 12 }, tags: ['case-study', 'proof'] },
      { day: 12, subject: 'Ready for the next level?', subjectB: 'Here\'s what advanced {Product} users do differently', preview: 'Level up your workflow with these tips.', body: `Hi {FirstName},\n\nYou've mastered the basics. Ready for pro tips?\n\nAdvanced users:\n• Use our API for custom automations\n• Set up team-wide templates\n• Connect {Product} to Slack for real-time alerts\n\nTry one advanced feature this week — we think you'll love it.\n\nPro tip: Check our template gallery for pre-built workflows.\n\nBest,\n{Product} Team`, goal: 'Advanced Engagement', metrics: { open: 35, click: 22, conversion: 10 }, tags: ['advanced', 'retention'] },
    ]
  },
  reengagement: {
    emails: [
      { day: 0, subject: 'We miss you at {Product} 😢', subjectB: 'It\'s been a while — everything OK?', preview: 'Your account is waiting for you.', body: `Hi {FirstName},\n\nWe noticed you haven't logged into {Product} for a few weeks.\n\nEverything OK? We've shipped some great features since you've been away:\n• New dashboard with real-time analytics\n• 30% faster load times\n• Mobile app (iOS + Android)\n\nCome take a look — your data is right where you left it.\n\nBest,\nThe {Product} Team`, goal: 'Reactivate', metrics: { open: 44, click: 20, conversion: 8 }, tags: ['reengagement', 'winback'] },
      { day: 4, subject: 'Here\'s what you missed (2 min read)', subjectB: 'New features you\'ll actually love', preview: 'Catch up on what\'s new at {Product}.', body: `Hi {FirstName},\n\nQuick update on what's changed:\n\n✨ Feature X — now live\n🔄 Improvement Y — 50% faster\n🎉 Integration Z — just launched\n\nPlus: We've improved onboarding based on feedback from users like you.\n\nReady to see what's new?\n\n→ Jump back in\n\nCheers,\n{Product} Team`, goal: 'Feature Updates', metrics: { open: 38, click: 18, conversion: 6 }, tags: ['updates', 'reengagement'] },
      { day: 8, subject: 'One last thing...', subjectB: 'Before we say goodbye', preview: 'A special offer to welcome you back.', body: `Hi {FirstName},\n\nThis is our last email for a while.\n\nIf you'd like to come back, here's a 30-day free extension of your {PlanName} plan — no strings attached.\n\nYour data and settings are saved and ready to go.\n\nClaim your extension → [Link]\n\nIf {Product} isn't the right fit right now, no worries. We'll be here when you need us.\n\nBest,\nThe {Product} Team`, goal: 'Incentivize Return', metrics: { open: 42, click: 25, conversion: 15 }, tags: ['offer', 'winback'] },
    ]
  },
  upsell: {
    emails: [
      { day: 0, subject: 'You\'re hitting the limits of Free', subjectB: 'Your usage is exceeding plan limits', preview: 'Time to upgrade and unlock everything.', body: `Hi {FirstName},\n\nGreat news: you're {Product} power user!\n\n⚡ You've used {UsagePercent}% of your free plan allocation this month.\n\nThe {PlanName} plan gives you:\n• Unlimited projects\n• Advanced analytics dashboard\n• Priority support (avg < 2hr response)\n• Team collaboration features\n\nUpgrade now and keep your momentum going.\n\n→ See upgrade options\n\nBest,\n{Product} Team`, goal: 'Highlight Limits', metrics: { open: 40, click: 22, conversion: 8 }, tags: ['upgrade', 'limits'] },
      { day: 3, subject: 'What {Competitor} users get on the Pro plan', subjectB: 'Pro plan vs. Free — the difference is real', preview: 'See how much more the Pro plan delivers.', body: `Hi {FirstName},\n\nHere's a side-by-side comparison:\n\nFree Plan:\n• 5 projects\n• Basic analytics\n• Email support\n\nPro Plan:\n• Unlimited everything\n• Custom reports & API access\n• Priority Slack support\n• Team management\n\nMost users see ROI within the first week.\n\n→ Upgrade to Pro today\n\nBest,\n{Product} Team`, goal: 'Comparison', metrics: { open: 36, click: 20, conversion: 12 }, tags: ['comparison', 'value'] },
      { day: 7, subject: 'Last chance: {Discount}% off Pro plan', subjectB: 'Your exclusive upgrade offer expires soon', preview: 'Don\'t miss this limited-time offer.', body: `Hi {FirstName},\n\nThis is a one-time offer: get {Discount}% off your first year of {Product} Pro.\n\nUse code: {UpgradeCode}\n\nYour discount expires in 48 hours.\n\nHere's what you're getting:\n• Everything in Free\n• Pro features unlocked\n• Priority support\n• Team collaboration\n\n→ Claim your discount now\n\nBest,\nThe {Product} Team`, goal: 'Urgency', metrics: { open: 45, click: 28, conversion: 18 }, tags: ['urgency', 'discount'] },
    ]
  }
};

export default function AutonomousEmailSequenceDesignerPage() {
  const [campaignType, setCampaignType] = useState('onboarding');
  const [productName, setProductName] = useState('Zion');
  const [companyName, setCompanyName] = useState('Zion Tech Group');
  const [targetAudience, setTargetAudience] = useState('Software developers and startup teams');
  const [emails, setEmails] = useState<Email[]>([]);

  const generate = () => {
    const template = TEMPLATES[campaignType as keyof typeof TEMPLATES] || TEMPLATES.onboarding;
    const generated: Email[] = template.emails.map((e, i) => {
      let body = e.body;
      body = body.replace(/\{Product\}/g, productName);
      body = body.replace(/\{Company\}/g, companyName);
      body = body.replace(/\{FirstName\}/g, '[First Name]');
      body = body.replace(/\{PlanName\}/g, 'Pro');
      body = body.replace(/\{UsagePercent\}/g, '75');
      body = body.replace(/\{Discount\}/g, '25');
      body = body.replace(/\{Competitor\}/g, 'Top competitor');
      body = body.replace(/\{UpgradeCode\}/g, 'ZION25');

      return { ...e, id: i + 1, body, subject: e.subject.replace(/\{Product\}/g, productName), subjectB: e.subjectB.replace(/\{Product\}/g, productName), preview: e.preview.replace(/\{Product\}/g, productName) };
    });
    setEmails(generated);
  };

  const exportJSON = () => {
    const data = { campaign: campaignType, product: productName, company: companyName, sequence: emails.map(e => ({ day: e.day, subject: e.subject, subjectB: e.subjectB, body: e.body, goal: e.goal, metrics: e.metrics, tags: e.tags })) };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${campaignType}-email-sequence.json`;
    a.click();
  };

  const avgOpen = emails.length > 0 ? Math.round(emails.reduce((s, e) => s + e.metrics.open, 0) / emails.length) : 0;
  const avgClick = emails.length > 0 ? Math.round(emails.reduce((s, e) => s + e.metrics.click, 0) / emails.length) : 0;
  const avgConversion = emails.length > 0 ? Math.round(emails.reduce((s, e) => s + e.metrics.conversion, 0) / emails.length) : 0;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7c2d12 0%, #431407 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #fb923c, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📧 Autonomous Email Sequence Designer</h1>
        <p style={{ color: '#fed7aa', marginBottom: '2rem', fontSize: '1.1rem' }}>Generate complete drip campaigns with subject lines, body copy, A/B variants, timing, and predicted engagement metrics. Export to JSON for any email provider.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#431407', padding: '1.5rem', borderRadius: '12px', border: '1px solid #9a3412' }}>
            <h3 style={{ marginBottom: '1rem' }}>⚙️ Campaign Setup</h3>
            {[['Product Name', productName, setProductName, false], ['Company Name', companyName, setCompanyName, false], ['Target Audience', targetAudience, setTargetAudience, true]].map(([label, val, setter, isTextarea]) => (
              <div key={label as string} style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#fdba74', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>{label}</label>
                {isTextarea ? <textarea value={val as string} onChange={e => (setter as any)(e.target.value)} rows={2} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1a0f0a', border: '1px solid #9a3412', color: '#f8fafc', fontSize: '0.9rem', resize: 'vertical' }} /> : <input type="text" value={val as string} onChange={e => (setter as any)(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1a0f0a', border: '1px solid #9a3412', color: '#f8fafc' }} />}
              </div>
            ))}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#fdba74', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Campaign Type</label>
              <select value={campaignType} onChange={e => setCampaignType(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1a0f0a', border: '1px solid #9a3412', color: '#f8fafc' }}>
                <option value="onboarding">🚀 Onboarding (5 emails)</option>
                <option value="reengagement">🔄 Re-engagement (3 emails)</option>
                <option value="upsell">💰 Upsell (3 emails)</option>
              </select>
            </div>
            <button onClick={generate} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'linear-gradient(90deg, #ea580c, #a855f7)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600', marginBottom: '0.5rem' }}>📧 Generate Sequence</button>
            {emails.length > 0 && <button onClick={exportJSON} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1a0f0a', color: '#fdba74', border: '1px solid #9a3412', cursor: 'pointer' }}>📥 Export JSON</button>}
          </div>

          <div style={{ background: '#431407', padding: '1.5rem', borderRadius: '12px', border: '1px solid #9a3412' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Campaign Analytics</h3>
            {emails.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#1a0f0a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>{avgOpen}%</div>
                  <div style={{ color: '#fdba74', fontSize: '0.8rem' }}>Avg Open Rate</div>
                </div>
                <div style={{ background: '#1a0f0a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{avgClick}%</div>
                  <div style={{ color: '#fdba74', fontSize: '0.8rem' }}>Avg Click Rate</div>
                </div>
                <div style={{ background: '#1a0f0a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f59e0b' }}>{avgConversion}%</div>
                  <div style={{ color: '#fdba74', fontSize: '0.8rem' }}>Avg Conversion</div>
                </div>
                <div style={{ background: '#1a0f0a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7' }}>{emails.length}</div>
                  <div style={{ color: '#fdba74', fontSize: '0.8rem' }}>Total Emails</div>
                </div>
              </div>
            ) : <div style={{ color: '#9a3412', textAlign: 'center', padding: '2rem 1rem', marginBottom: '1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>Campaign metrics will appear here</div>}

            <h3 style={{ marginBottom: '1rem' }}>📅 Email Sequence Timeline</h3>
            {emails.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {emails.map((email) => (
                  <div key={email.id} style={{ background: '#1a0f0a', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #ea580c' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{ background: '#9a3412', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fdba74' }}>Day {email.day}</span>
                        <span style={{ marginLeft: '0.75rem', fontWeight: '600' }}>{email.goal}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem' }}>
                        <span style={{ color: '#4ade80' }}>📬 {email.metrics.open}%</span>
                        <span style={{ color: '#38bdf8' }}>👆 {email.metrics.click}%</span>
                        <span style={{ color: '#f59e0b' }}>🎯 {email.metrics.conversion}%</span>
                      </div>
                    </div>
                    <div style={{ color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '0.35rem' }}><strong>A:</strong> {email.subject}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '1rem' }}><strong>B:</strong> {email.subjectB}</div>
                    <pre style={{ background: '#0a0500', padding: '0.75rem', borderRadius: '4px', fontSize: '0.8rem', color: '#cbd5e1', whiteSpace: 'pre-wrap', margin: 0 }}>{email.body}</pre>
                    <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.25rem' }}>
                      {email.tags.map(tag => <span key={tag} style={{ background: '#431407', color: '#fdba74', padding: '0.15rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem' }}>#{tag}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ color: '#9a3412', textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <div>Sequence timeline will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
