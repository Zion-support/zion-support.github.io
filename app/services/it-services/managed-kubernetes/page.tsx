import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { Boxes, Wrench, Activity, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ManagedKubernetesPage() {
  const title = 'Managed Kubernetes (EKS/AKS/GKE) — Zion Tech Group';
  const description = 'Production-grade Kubernetes design, provisioning, upgrades, security hardening, cost optimization, and 24/7 SRE.';

  const features = [
    'Cluster design and IaC provisioning (Terraform/Pulumi)',
    'Zero-downtime upgrades and multi-cluster management',
    'CIS Benchmarks, network policies, secrets management',
    'Autoscaling, spot savings, and FinOps visibility',
    'GitOps (Argo CD/Flux) and policy-as-code (OPA/Gatekeeper)',
    '24/7 monitoring, alerting, and incident response'
  ];

  const pricing = [
    { name: 'Starter', price: '$3,500/month', details: ['1 cluster', 'SaaS/VPC tooling', 'Business-hours support'] },
    { name: 'Growth', price: '$7,500/month', details: ['Up to 3 clusters', 'SRE on-call', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', details: ['Multi-region', 'Compliance packs', 'Dedicated TAM'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services/managed-kubernetes" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <Boxes className="w-8 h-8" />
              <span className="font-semibold">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Managed Kubernetes</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Talk to an SRE</Link>
              <a href="#pricing" className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><Wrench className="w-5 h-5 text-indigo-700 mr-2" />Day-2 operations & runbooks</div>
                <div className="flex items-center"><Activity className="w-5 h-5 text-indigo-700 mr-2" />SLOs, SLIs, error budgets</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div key={i} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-extrabold text-indigo-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ship Confidently on Kubernetes</h2>
            <p className="opacity-90 mb-6">We handle reliability, security, and costs so your teams can move faster.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

