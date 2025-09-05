import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const contact = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  site: 'https://ziontechgroup.com'
}

type Offering = {
  title: string
  description: string
  features: string[]
  pricing: string
  link: string
}

const microSaaS: Offering[] = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    features: ['Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    link: '/contact'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    link: '/contact'
  }
]

const aiServices: Offering[] = [
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    link: '/contact'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Forecasting and predictive modeling for business intelligence.',
    features: ['Time-series Forecasting', 'Segmentation', 'Churn Prediction', 'What-if Analysis'],
    pricing: '$4,000 - $20,000 project',
    link: '/contact'
  }
]

const itServices: Offering[] = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'AWS, Azure, GCP design, optimization and operations.',
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    link: '/contact'
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Pipelines, infrastructure as code and observability.',
    features: ['CI/CD', 'IaC', 'Kubernetes', 'Monitoring & Logging'],
    pricing: '$10,000 - $50,000/project',
    link: '/contact'
  }
]

export default function ServicesExtendedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services Catalog - Zion Tech Group</title>
        <meta name="description" content="Expanded catalog of Micro SaaS, AI, and IT services by Zion Tech Group." />
        <link rel="canonical" href={`${contact.site}/services-extended`} />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Services Catalog</h1>
          <p className="text-gray-600 mt-3">Phone: {contact.phone} · Email: {contact.email} · Address: {contact.address}</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Micro SaaS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {microSaaS.map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-700 mt-2">{s.description}</p>
                <ul className="list-disc pl-5 text-gray-700 mt-3">
                  {s.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{s.pricing}</span>
                  <Link href={s.link} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Contact</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-700 mt-2">{s.description}</p>
                <ul className="list-disc pl-5 text-gray-700 mt-3">
                  {s.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{s.pricing}</span>
                  <Link href={s.link} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Contact</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-700 mt-2">{s.description}</p>
                <ul className="list-disc pl-5 text-gray-700 mt-3">
                  {s.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{s.pricing}</span>
                  <Link href={s.link} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Contact</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-sm text-gray-600">
          <p>More at <a href={contact.site} className="text-blue-600">{contact.site}</a>. For inquiries, call {contact.phone} or email {contact.email}.</p>
        </footer>
      </main>
    </div>
  )
}

