import React from 'react';
import { SEO } from '../../components/SEO';
import { Shield, CheckCircle, Lock, Eye, Key } from 'lucide-react';

export default function CybersecurityAssessment() {
  return (
    <>
      <SEO title="Cybersecurity Assessment" description="Full-stack security assessment: attack surface mapping, vulnerability scanning, and remediation roadmap." />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white mb-4">
              <Shield className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cybersecurity Assessment</h1>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">Identify risks across infra, apps, and identities. Prioritized remediation with clear ROI, aligned to NIST/CIS benchmarks.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{title:'Threat Modeling',desc:'Architecture review, attack paths, data flows',icon:Eye},{title:'Vuln & Config Audit',desc:'CVE scanning, misconfig, secrets discovery',icon:Lock},{title:'IAM & Access Review',desc:'Least privilege, stale roles, MFA posture',icon:Key}].map(({title,desc,icon:Icon})=> (
              <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Icon className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Included</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Executive report and technical appendix',
                  'Prioritized remediation backlog with effort estimates',
                  'Quick wins and 90-day roadmap',
                  'Optional retest and continuous monitoring recommendation'
                ].map((item)=> (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li><strong>SMB</strong>: $1,499 – single app/infra</li>
                <li><strong>Growth</strong>: $4,999 – 3-5 environments</li>
                <li><strong>Enterprise</strong>: from $15,000 – custom scope</li>
              </ul>
              <div className="space-y-2">
                <a href="/contact" className="inline-flex justify-center w-full px-4 py-2 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700">Book Assessment</a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-white">Email: kleber@ziontechgroup.com</a>
                <a href="tel:+13024640950" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-white">Call: +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

