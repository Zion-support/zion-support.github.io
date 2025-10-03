import React from 'react';
import * as Lucide from 'lucide-react';
const { Shield, Lock, FileText, CheckCircle, Mail, Phone, ArrowRight } = Lucide as any;


export default function PrivacyDSARAutomationPage() {
  const contactInfo = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' };

  const references = [
    { name: 'GDPR Text (EU)', url: 'https://gdpr.eu/' },
    { name: 'CCPA/CPRA (California AG)', url: 'https://oag.ca.gov/privacy/ccpa' },
    { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' }
  ];

  const tiers = [
    { name: 'Standard', price: '$299', features: ['Self-service portal', 'Identity verification', 'Email delivery', 'Audit trails'] },
    { name: 'Professional', price: '$699', features: ['PII discovery', 'Redaction templates', 'SLAs & routing', 'Legal holds'], popular: true },
    { name: 'Enterprise', price: '$1,499', features: ['Custom workflows', 'DPA integrations', 'SAML SSO', 'Regional hosting'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Shield className="w-4 h-4" /> Compliance & Security
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mt-6">Privacy DSAR Automation</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Automate data subject access requests end‑to‑end with verification, discovery, redaction, and delivery.</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href={`tel:${contactInfo.phone}`} className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700"><Phone className="w-5 h-5 inline mr-2" /> {contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}?subject=Privacy DSAR Automation Inquiry`} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"><Mail className="w-5 h-5 inline mr-2" /> Talk to Compliance</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl"><Lock className="w-6 h-6 text-emerald-600" /><h3 className="mt-3 font-semibold">Identity Verification</h3><p className="text-gray-600 text-sm mt-2">KBA, OTP, or ID workflows with auditability.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><FileText className="w-6 h-6 text-emerald-600" /><h3 className="mt-3 font-semibold">PII Discovery</h3><p className="text-gray-600 text-sm mt-2">Scan data sources and classify sensitive data.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><CheckCircle className="w-6 h-6 text-emerald-600" /><h3 className="mt-3 font-semibold">Redaction & Delivery</h3><p className="text-gray-600 text-sm mt-2">Automated redaction and secure document handoff.</p></div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <div key={t.name} className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ${t.popular ? 'ring-2 ring-emerald-600' : ''}`}>
                {t.popular && (
                  <div className="-mt-12 mb-6 text-center"><span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span></div>
                )}
                <h3 className="text-xl font-bold">{t.name}</h3>
                <div className="mt-2 text-3xl font-bold">{t.price}<span className="text-base text-gray-600">/month</span></div>
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {t.features.map((f) => (<li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {f}</li>))}
                </ul>
                <a href={`mailto:${contactInfo.email}?subject=Privacy DSAR - ${t.name}`} className="mt-8 inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700">Choose {t.name}<ArrowRight className="w-4 h-4 ml-2" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">External References</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((r) => (
              <li key={r.name} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">{r.name}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

