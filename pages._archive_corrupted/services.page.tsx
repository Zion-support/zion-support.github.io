<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
import React from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Head from 'next/head';
const services = [{
    "title": 'AI Revenue Optimization Platform',
    "href": '/services/ai-revenue-operations-platform',
    "price": 'From $2,999/month',
    "bullets": ['Dynamic pricing', 'Forecasting', 'CLV analytics']
  },
  {
    "title": 'AI Autonomous DevOps',
    "href": '/services/ai-autonomous-devops-platform',
    "price": 'From $1,999/month',
    "bullets": ['Self-healing infra', 'Intelligent deploys', 'Observability']
  },
  {
    "title": 'Micro CRM (Multi-tenant)',
    "href": '/services/micro-crm',
    "price": 'From $99/month',
    "bullets": ['Leads & deals', 'Email sync', 'Pipeline automation']
  },
  {
    "title": 'Cloud FinOps Optimizer',
    "href": '/services/cloud-finops-optimizer',
    "price": 'From $1,499/month',
    "bullets": ['Cost insights', 'Savings plans', 'Kubernetes rightsizing']
  },
  {
    "title": 'AI Sales Forecasting & Inventory',
    "href": '/services/ai-sales-forecasting-inventory',
    "price": 'From $2,500/month',
    "bullets": ['Demand planning', 'Automated replenishment', 'Price elasticity']
  },
  {
    "title": 'AI Agent Fleet Automation',
    "href": '/services/ai-agent-fleet-automation',
    "price": 'From $3,500/month',
    "bullets": ['Multi-agent orchestration', 'Guardrails', 'Human approvals']
  },
  {
    "title": 'Security Posture Management',
    "href": '/services/security-posture-management',
    "price": 'From $2,000/month',
    "bullets": ['CSPM/CIEM', 'SBOM scanning', 'Compliance automation']
  },
  {
    "title": 'Modern Data Platform Accelerator',
    "href": '/services/data-platform-accelerator',
    "price": 'From $35,000 (project)',
    "bullets": ['Ingestion', 'dbt models', 'Observability & BI']
  },
  {
    "title": 'AI Marketing Content Engine',
    "href": '/services/ai-marketing-content-engine',
    "price": 'From $1,200/month',
    "bullets": ['SEO briefs', 'Brand-safe generation', 'Omni-channel']
  },
  {
    "title": 'GDPR/CCPA DSAR Automation',
    "href": '/services/gdpr-dsar-automation',
    "price": 'From $1,800/month',
    "bullets": ['Verification', 'Discovery', 'Redaction & SLA']
  },
  {
    "title": 'Website Performance Optimization',
    "href": '/services/website-performance-optimization',
    "price": 'From $3,000 (audit)',
    "bullets": ['Core Web Vitals', 'Code-splitting', 'CDN & images']
  },
  {
    "title": 'M365 Security AI Copilot',
    "href": '/services/ai-m365-security-copilot',
    "price": 'From $2,200/month',
    "bullets": ['Defender', 'Sentinel', 'Purview & Entra']
  },
  {
    "title": 'Developer Experience & Platform Eng.',
    "href": '/services/devx-platform-engineering',
    "price": 'From $7,500 (discovery)',
    "bullets": ['IDP/Backstage', 'Golden paths', 'Secure templates']
  },
  {
    "title": 'Enterprise RAG Knowledge Base',
    "href": '/services/enterprise-rag-knowledgebase',
    "price": 'From $2,200/month',
    "bullets": ['Connectors', 'Hybrid retrieval', 'Citations & evals']
  }
];
export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="AI, Micro SaaS, and IT services with transparent pricing."  />
        <link rel="canonical" href=""https": //ziontechgroup.com/services"  />
      </Head>
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-600 mb-8">Real, production-grade solutions. No mockups.</p>
          <div className="grid gap-6 "sm": grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a key={s.title} href={s.href} className="block border rounded-lg p-6 "hover": shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <span className="text-sm text-gray-500">{s.price}</span>
                </div>
                <ul className="text-gray-600 list-disc pl-5 space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import React from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }
}
import React from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Head from 'next/head';
const services = [{
    "title": 'AI Revenue Optimization Platform',
    "href": '/services/ai-revenue-operations-platform',
    "price": 'From $2,999/month',
    "bullets": ['Dynamic pricing', 'Forecasting', 'CLV analytics']
  },
  {
    "title": 'AI Autonomous DevOps',
    "href": '/services/ai-autonomous-devops-platform',
    "price": 'From $1,999/month',
    "bullets": ['Self-healing infra', 'Intelligent deploys', 'Observability']
  },
  {
    "title": 'Micro CRM (Multi-tenant)',
    "href": '/services/micro-crm',
    "price": 'From $99/month',
    "bullets": ['Leads & deals', 'Email sync', 'Pipeline automation']
  },
  {
    "title": 'Cloud FinOps Optimizer',
    "href": '/services/cloud-finops-optimizer',
    "price": 'From $1,499/month',
    "bullets": ['Cost insights', 'Savings plans', 'Kubernetes rightsizing']
  },
  {
    "title": 'AI Sales Forecasting & Inventory',
    "href": '/services/ai-sales-forecasting-inventory',
    "price": 'From $2,500/month',
    "bullets": ['Demand planning', 'Automated replenishment', 'Price elasticity']
  },
  {
    "title": 'AI Agent Fleet Automation',
    "href": '/services/ai-agent-fleet-automation',
    "price": 'From $3,500/month',
    "bullets": ['Multi-agent orchestration', 'Guardrails', 'Human approvals']
  },
  {
    "title": 'Security Posture Management',
    "href": '/services/security-posture-management',
    "price": 'From $2,000/month',
    "bullets": ['CSPM/CIEM', 'SBOM scanning', 'Compliance automation']
  },
  {
    "title": 'Modern Data Platform Accelerator',
    "href": '/services/data-platform-accelerator',
    "price": 'From $35,000 (project)',
    "bullets": ['Ingestion', 'dbt models', 'Observability & BI']
  },
  {
    "title": 'AI Marketing Content Engine',
    "href": '/services/ai-marketing-content-engine',
    "price": 'From $1,200/month',
    "bullets": ['SEO briefs', 'Brand-safe generation', 'Omni-channel']
  },
  {
    "title": 'GDPR/CCPA DSAR Automation',
    "href": '/services/gdpr-dsar-automation',
    "price": 'From $1,800/month',
    "bullets": ['Verification', 'Discovery', 'Redaction & SLA']
  },
  {
    "title": 'Website Performance Optimization',
    "href": '/services/website-performance-optimization',
    "price": 'From $3,000 (audit)',
    "bullets": ['Core Web Vitals', 'Code-splitting', 'CDN & images']
  },
  {
    "title": 'M365 Security AI Copilot',
    "href": '/services/ai-m365-security-copilot',
    "price": 'From $2,200/month',
    "bullets": ['Defender', 'Sentinel', 'Purview & Entra']
  },
  {
    "title": 'Developer Experience & Platform Eng.',
    "href": '/services/devx-platform-engineering',
    "price": 'From $7,500 (discovery)',
    "bullets": ['IDP/Backstage', 'Golden paths', 'Secure templates']
  },
  {
    "title": 'Enterprise RAG Knowledge Base',
    "href": '/services/enterprise-rag-knowledgebase',
    "price": 'From $2,200/month',
    "bullets": ['Connectors', 'Hybrid retrieval', 'Citations & evals']
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/services.page.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react';
import Head from 'next/head';
const services = [{;
    "title": 'AI Revenue Optimization Platform',;
    "href": '/services/ai-revenue-operations-platform',;
    "price": 'From $2,999/month',;
    "bullets": ['Dynamic pricing', 'Forecasting', 'CLV analytics'];
  },;
  {;
    "title": 'AI Autonomous DevOps',;
    "href": '/services/ai-autonomous-devops-platform',;
    "price": 'From $1,999/month',;
    "bullets": ['Self-healing infra', 'Intelligent deploys', 'Observability'];
  },;
  {;
    "title": 'Micro CRM (Multi-tenant)',;
    "href": '/services/micro-crm',;
    "price": 'From $99/month',;
    "bullets": ['Leads & deals', 'Email sync', 'Pipeline automation'];
  },;
  {;
    "title": 'Cloud FinOps Optimizer',;
    "href": '/services/cloud-finops-optimizer',;
    "price": 'From $1,499/month',;
    "bullets": ['Cost insights', 'Savings plans', 'Kubernetes rightsizing'];
  },;
  {;
    "title": 'AI Sales Forecasting & Inventory',;
    "href": '/services/ai-sales-forecasting-inventory',;
    "price": 'From $2,500/month',;
    "bullets": ['Demand planning', 'Automated replenishment', 'Price elasticity'];
  },;
  {;
    "title": 'AI Agent Fleet Automation',;
    "href": '/services/ai-agent-fleet-automation',;
    "price": 'From $3,500/month',;
    "bullets": ['Multi-agent orchestration', 'Guardrails', 'Human approvals'];
  },;
  {;
    "title": 'Security Posture Management',;
    "href": '/services/security-posture-management',;
    "price": 'From $2,000/month',;
    "bullets": ['CSPM/CIEM', 'SBOM scanning', 'Compliance automation'];
  },;
  {;
    "title": 'Modern Data Platform Accelerator',;
    "href": '/services/data-platform-accelerator',;
    "price": 'From $35,000 (project)',;
    "bullets": ['Ingestion', 'dbt models', 'Observability & BI'];
  },;
  {;
    "title": 'AI Marketing Content Engine',;
    "href": '/services/ai-marketing-content-engine',;
    "price": 'From $1,200/month',;
    "bullets": ['SEO briefs', 'Brand-safe generation', 'Omni-channel'];
  },;
  {;
    "title": 'GDPR/CCPA DSAR Automation',;
    "href": '/services/gdpr-dsar-automation',;
    "price": 'From $1,800/month',;
    "bullets": ['Verification', 'Discovery', 'Redaction & SLA'];
  },;
  {;
    "title": 'Website Performance Optimization',;
    "href": '/services/website-performance-optimization',;
    "price": 'From $3,000 (audit)',;
    "bullets": ['Core Web Vitals', 'Code-splitting', 'CDN & images'];
  },;
  {;
    "title": 'M365 Security AI Copilot',;
    "href": '/services/ai-m365-security-copilot',;
    "price": 'From $2,200/month',;
    "bullets": ['Defender', 'Sentinel', 'Purview & Entra'];
  },;
  {;
    "title": 'Developer Experience & Platform Eng.',;
    "href": '/services/devx-platform-engineering',;
    "price": 'From $7,500 (discovery)',;
    "bullets": ['IDP/Backstage', 'Golden paths', 'Secure templates'];
  },;
  {;
    "title": 'Enterprise RAG Knowledge Base',;
    "href": '/services/enterprise-rag-knowledgebase',;
    "price": 'From $2,200/month',;
    "bullets": ['Connectors', 'Hybrid retrieval', 'Citations & evals'];
  }
];
export default function ServicesPage() {;
  return (
    <>;
      <Head>;
        <title>Services — Zion Tech Group</title>;
        <meta name="description" content="AI, Micro SaaS, and IT services with transparent pricing."  />;
        <link rel="canonical" href=""https": //ziontechgroup && ziontechgroup.com/services"  />;
      </Head>;
      <main className="min-h-screen bg-white">;
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">;
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>;
          <p className="text-gray-600 mb-8">Real, production-grade solutions. No mockups.</p>;
          <div className="grid gap-6 "sm": grid-cols-2 lg:grid-cols-3">;
            {services && services.map((s) => (;
              <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 "hover": shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}>;
                <div className="flex items-center justify-between mb-2">;
                  <h2 className="text-xl font-semibold">{s && s.title}</h2>;
                  <span className="text-sm text-gray-500">{s && s.price}</span>;
                </div>;
                <ul className="text-gray-600 list-disc pl-5 space-y-1">;
                  {s && s.bullets.map((b) => (;
                    <li key={b}>{b}</li>;
                  ))}
                </ul>;
              </a>;
            ))}
          </div>;
        </section>;
      </main>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
=======
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
<<<<<<< HEAD
=======


import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

=======

import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services && services.map((s) => ( <a key={s && s.title} href={s && s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s && s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s && s.title}</h2> <span className="text-sm text-gray-500">{s && s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s && s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import Head from 'next/head'; const services = [ { title: 'AI Revenue Optimization Platform',href: '/services/ai-revenue-operations-platform',price: 'From $2,999/month',bullets: ['Dynamic pricing','Forecasting','CLV analytics'] },{ title: 'AI Autonomous DevOps',href: '/services/ai-autonomous-devops-platform',price: 'From $1,999/month',bullets: ['Self-healing infra','Intelligent deploys','Observability'] },{ title: 'Micro CRM (Multi-tenant)',href: '/services/micro-crm',price: 'From $99/month',bullets: ['Leads & deals','Email sync','Pipeline automation'] },{ title: 'Cloud FinOps Optimizer',href: '/services/cloud-finops-optimizer',price: 'From $1,499/month',bullets: ['Cost insights','Savings plans','Kubernetes rightsizing'] },{ title: 'AI Sales Forecasting & Inventory',href: '/services/ai-sales-forecasting-inventory',price: 'From $2,500/month',bullets: ['Demand planning','Automated replenishment','Price elasticity'] },{ title: 'AI Agent Fleet Automation',href: '/services/ai-agent-fleet-automation',price: 'From $3,500/month',bullets: ['Multi-agent orchestration','Guardrails','Human approvals'] },{ title: 'Security Posture Management',href: '/services/security-posture-management',price: 'From $2,000/month',bullets: ['CSPM/CIEM','SBOM scanning','Compliance automation'] },{ title: 'Modern Data Platform Accelerator',href: '/services/data-platform-accelerator',price: 'From $35,000 (project)',bullets: ['Ingestion','dbt models','Observability & BI'] },{ title: 'AI Marketing Content Engine',href: '/services/ai-marketing-content-engine',price: 'From $1,200/month',bullets: ['SEO briefs','Brand-safe generation','Omni-channel'] },{ title: 'GDPR/CCPA DSAR Automation',href: '/services/gdpr-dsar-automation',price: 'From $1,800/month',bullets: ['Verification','Discovery','Redaction & SLA'] },{ title: 'Website Performance Optimization',href: '/services/website-performance-optimization',price: 'From $3,000 (audit)',bullets: ['Core Web Vitals','Code-splitting','CDN & images'] },{ title: 'M365 Security AI Copilot',href: '/services/ai-m365-security-copilot',price: 'From $2,200/month',bullets: ['Defender','Sentinel','Purview & Entra'] },{ title: 'Developer Experience & Platform Eng.',href: '/services/devx-platform-engineering',price: 'From $7,500 (discovery)',bullets: ['IDP/Backstage','Golden paths','Secure templates'] },{ title: 'Enterprise RAG Knowledge Base',href: '/services/enterprise-rag-knowledgebase',price: 'From $2,200/month',bullets: ['Connectors','Hybrid retrieval','Citations & evals'] } ]; export default function ServicesPage() { return ( <> <Head> <title>Services — Zion Tech Group</title> <meta name="description" content="AI,Micro SaaS,and IT services with transparent pricing." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {services.map((s) => ( <a key={s.title} href={s.href} className="block border rounded-lg p-6 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label={s.title}> <div className="flex items-center justify-between mb-2"> <h2 className="text-xl font-semibold">{s.title}</h2> <span className="text-sm text-gray-500">{s.price}</span> </div> <ul className="text-gray-600 list-disc pl-5 space-y-1"> {s.bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> </a> ))} </div> </section> </main> </> )}
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
