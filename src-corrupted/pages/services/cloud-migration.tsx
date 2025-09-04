import React from 'react';
import { SEO } from '../../components/SEO';
import { Cloud, CheckCircle, Server, Shield, Network } from 'lucide-react';

export default function CloudMigrationServices() {
  return (
    <>
      <SEO title="Cloud Migration Services" description="End-to-end cloud migration with zero-downtime strategies, landing zones, and compliance." />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
              <Cloud className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cloud Migration Services</h1>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">Assess, plan, and execute migrations to AWS, Azure, or GCP with best practices, IaC, observability, and security hardening.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{title:'Discovery & Readiness',desc:'Workloads assessment, TCO, landing zone',icon:Server},{title:'Migration & Modernization',desc:'Lift-and-shift, replatform, microservices',icon:Network},{title:'Security & Compliance',desc:'CIS, NIST, SOC2, IAM hardening',icon:Shield}].map(({title,desc,icon:Icon})=> (
              <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Deliverables</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Architecture and landing zone blueprint',
                  'Migration runbooks and rollback plans',
                  'IaC (Terraform) modules and pipelines',
                  'Observability: metrics, logs, tracing',
                  'Security baselines and guardrails',
                  'Knowledge transfer and ops playbooks'
                ].map((item)=> (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li><strong>Assessment</strong>: from $2,999 – 1-2 weeks</li>
                <li><strong>Migration</strong>: from $15,000 – scope-based</li>
                <li><strong>Managed</strong>: from $2,000/month – SRE support</li>
              </ul>
              <div className="space-y-2">
                <a href="/contact" className="inline-flex justify-center w-full px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">Request Quote</a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-blue-200 text-blue-700 hover:bg-white">Email: kleber@ziontechgroup.com</a>
                <a href="tel:+13024640950" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-blue-200 text-blue-700 hover:bg-white">Call: +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

