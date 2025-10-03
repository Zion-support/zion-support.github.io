import * as Lucide from 'lucide-react';
const { Code, Shield, CheckCircle, GitBranch, AlertTriangle, Mail, Phone, ArrowRight } = Lucide as any;


export default function AICodeReviewerPage() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
  };

  const references = [
    { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
    { name: 'CWE Top 25', url: 'https://cwe.mitre.org/top25/archive/2023/2023_cwe_top25.html' },
    { name: 'GitHub Checks API', url: 'https://docs.github.com/en/rest/checks' }
  ];

  const plans = [
    { name: 'Starter', price: '$99', features: ['Style and lint suggestions', 'PR summary comments', 'GitHub integration'] },
    { name: 'Pro', price: '$299', features: ['Security pattern detection', 'Complexity hotspots', 'Test hints', 'GitHub/GitLab/Bitbucket'], popular: true },
    { name: 'Enterprise', price: '$499', features: ['Custom rules', 'SSO/SCIM', 'On-prem runner', 'Priority support'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Code className="w-4 h-4" /> Engineering Productivity
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mt-6">AI Code Reviewer</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Automated PR reviews for style, complexity, security, and test suggestions—integrated directly into your CI.</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href={`tel:${contactInfo.phone}`} className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
              <Phone className="w-5 h-5 inline mr-2" /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}?subject=AI Code Reviewer Trial`} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
              <Mail className="w-5 h-5 inline mr-2" /> Request Trial
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <GitBranch className="w-6 h-6 text-indigo-600" />
            <h3 className="mt-3 font-semibold">PR Quality Gates</h3>
            <p className="text-gray-600 text-sm mt-2">Checks for size, tests, and coverage hints.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h3 className="mt-3 font-semibold">Security Patterns</h3>
            <p className="text-gray-600 text-sm mt-2">Flags common vulns mapped to OWASP/CWE.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-indigo-600" />
            <h3 className="mt-3 font-semibold">Complexity Hotspots</h3>
            <p className="text-gray-600 text-sm mt-2">Highlights risky diff chunks and functions.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ${p.popular ? 'ring-2 ring-indigo-600' : ''}`}>
                {p.popular && (
                  <div className="-mt-12 mb-6 text-center">
                    <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-2 text-3xl font-bold">{p.price}<span className="text-base text-gray-600">/month</span></div>
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {f}</li>
                  ))}
                </ul>
                <a href={`mailto:${contactInfo.email}?subject=AI Code Reviewer - ${p.name}`} className="mt-8 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                  Choose {p.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
              <li key={r.name} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">{r.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

