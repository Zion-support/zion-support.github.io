import React from 'react';
// Metadata handled by React Helmet
import * as Lucide from 'lucide-react';
const { Bot, Mail, Phone, CheckCircle, ArrowRight, Users, Target, MessageSquare, Database, Shield } = Lucide as any;

export const metadata: Metadata = {
  title: 'AI Sales Copilot | Zion Tech Group',
  description: 'Prospecting prioritization, next-best-action, and AI-drafted emails integrated with Salesforce and HubSpot.',
  keywords: 'AI sales copilot, sales enablement, email drafting, Salesforce, HubSpot, next best action',
};

export default function AISalesCopilotPage() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const pricing = [
    { name: 'Starter', price: '$149', period: '/month', features: ['Lead scoring basics', 'Email drafting templates', 'HubSpot integration', 'Email support'] },
    { name: 'Growth', price: '$399', period: '/month', features: ['Next-best-action engine', 'Salesforce + HubSpot', 'Sequence suggestions', 'Priority support'], popular: true },
    { name: 'Scale', price: '$799', period: '/month', features: ['Custom playbooks', 'Team analytics', 'SSO & governance', 'Dedicated success'] }
  ];

  const references = [
    { name: 'Salesforce AppExchange', url: 'https://appexchange.salesforce.com/', desc: 'Ecosystem for CRM integrations' },
    { name: 'HubSpot App Marketplace', url: 'https://ecosystem.hubspot.com/marketplace/apps', desc: 'CRM and marketing automation apps' },
    { name: 'Responsible AI for Sales', url: 'https://www.salesforce.com/resources/articles/ai-ethics/', desc: 'AI ethics considerations' }
  ];

  const features = [
    { icon: Target, title: 'Lead Prioritization', desc: 'Score accounts and contacts based on fit, intent, and recency.' },
    { icon: MessageSquare, title: 'AI Email Drafts', desc: 'Personalized drafts with tone controls and snippet reuse.' },
    { icon: Users, title: 'Next Best Action', desc: 'Suggest outreach steps based on stage and persona.' },
    { icon: Database, title: 'CRM Integration', desc: 'Bi-directional sync with Salesforce and HubSpot.' },
    { icon: Shield, title: 'Governance', desc: 'Approval flows, redaction, and audit trails.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Bot className="w-4 h-4" /> AI Sales Enablement
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mt-6">
              AI Sales Copilot
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Close More, Write Less</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Prospecting prioritization, next‑best‑action, and AI‑drafted emails integrated with Salesforce and HubSpot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5 mr-2" /> {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}?subject=AI Sales Copilot Demo`} className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5 mr-2" /> Request Demo
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center"><div className="text-3xl font-bold text-blue-600 mb-1">2x</div><div className="text-sm text-gray-600">More meetings</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-green-600 mb-1">35%</div><div className="text-sm text-gray-600">Faster cycle</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-purple-600 mb-1">+18%</div><div className="text-sm text-gray-600">Reply rate</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-orange-600 mb-1">95%</div><div className="text-sm text-gray-600">CSAT</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</div>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((ft, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" /> {ft}
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${contactInfo.email}?subject=AI Sales Copilot - ${plan.name} Plan`} className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Choose {plan.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">External References</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((r) => (
              <li key={r.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">{r.name}</a>
                <p className="text-sm text-gray-600 mt-2">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Pipeline?</h2>
          <p className="text-blue-100 mb-8">Book a demo and see how AI can double your meetings.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5 mr-2" /> Call Now: {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}?subject=AI Sales Copilot Consultation`} className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5 mr-2" /> Email: {contactInfo.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

