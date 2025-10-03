import { MessageSquare, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';


export default function SocialAdsOptimizerPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
  } as const;

  const features = [
    'Creative and copy generation with brand guardrails',
    'Multivariate testing and flywheel learning',
    'Budget reallocation and pacing',
    'Attribution and incrementality insights',
    'Platform integrations (Meta, Google, LinkedIn)',
  ];

  const benefits = [
    'Higher ROAS with continuous optimization',
    'Faster experiment cycles',
    'Transparency into drivers of performance',
  ];

  const pricing = '$149 - $999/month';
  const delivery = '1-2 weeks';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-fuchsia-600 text-white rounded-lg"><MessageSquare className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI Social Ads Optimizer</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Generate and test ad variants across platforms, automatically shift budget to winners, and understand exactly why campaigns perform.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-fuchsia-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-pink-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border text-sm text-gray-700">
              Market average: $200 - $1,200/month for comparable tools. Includes multi-platform connectors and brand safety controls.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-fuchsia-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-pink-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-fuchsia-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">See it on your campaigns</p>
                <p className="text-pink-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-fuchsia-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=AI Social Ads Optimizer - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

