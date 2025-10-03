import { FileText, CheckCircle, ArrowRight, DollarSign, Clock, Shield } from 'lucide-react';


export default function AILegalContractReviewPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  } as const;

  const features = [
    'Clause classification and risk scoring',
    'Obligation, date, and party extraction',
    'Playbook-aligned suggested redlines',
    'Contract comparison and change tracking',
    'Secure data handling and access control',
    'Export to Word and CLM integration',
  ];

  const benefits = [
    '70% faster review cycle time',
    'Reduced legal spend and outside counsel hours',
    'Standardized negotiations with fewer escalations',
  ];

  const pricing = '$299 - $1,999/month';
  const delivery = '1-2 weeks';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 text-white rounded-lg"><FileText className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI Legal Contract Review</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Automated contract analysis that flags risky clauses, extracts obligations and key dates, and drafts redlines aligned to your playbooks.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-green-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="text-sm text-gray-700">
                Average market pricing: $400 - $2,500/month. We typically save 20-30% with better time-to-value.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">Ready for a demo?</p>
                <p className="text-blue-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-blue-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=AI Legal Contract Review - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
            <div className="mt-2 text-xs text-blue-100">📍 {contact.address}</div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            By using this service, you agree to our terms at <a className="text-blue-600 underline" href="https://ziontechgroup.com/terms">ziontechgroup.com/terms</a> and privacy at <a className="text-blue-600 underline" href="https://ziontechgroup.com/privacy">ziontechgroup.com/privacy</a>.
          </div>
        </div>
      </section>
    </div>
  );
}

