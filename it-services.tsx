// import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Server,
  Shield,
  Cloud,
  Database,
  Wrench,
  Zap,
  CheckCircle,
  ArrowRight,
  Smartphone,
  BookOpen
} from 'lucide-react';

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description = 'Enterprise-grade IT services: managed IT, cloud migration, cybersecurity hardening, SRE/DevOps, data platforms, and compliance with transparent pricing.';

  const itServices = [
    {
      title: 'Managed IT & Helpdesk (24/7)',
      description: 'Proactive monitoring, patching, endpoint management, and SLA-backed support for your workforce.',
      icon: Server,
      features: [
        'Endpoint management (Windows, macOS, Linux, Mobile)',
        'Patch and vulnerability management',
        'Asset inventory and license governance',
        'SLA-backed L1–L3 support',
        'Onboarding/offboarding automation'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: 'Onboarding in 1-2 weeks',
      category: 'Managed IT',
      links: [
        { label: 'ITIL Practices (Axelos)', href: 'https://www.axelos.com/best-practice-solutions/itil' }
      ],
      benefits: [
        '45% fewer incidents from proactive patching',
        'SLA-backed resolution times',
        'Predictable IT operating costs'
      ]
    },
    {
      title: 'Cybersecurity Hardening & Zero Trust',
      description: 'Defense-in-depth, MFA/SSO, EDR, least-privilege, and security baselines aligned to NIST/ISO.',
      icon: Shield,
      features: [
        'NIST CSF-aligned security roadmap',
        'Zero Trust network segmentation',
        'EDR/XDR deployment and tuning',
        'SSO/MFA rollout and policy hardening',
        'Security awareness and phishing tests'
      ],
      pricing: '$5,000 - $35,000/project',
      delivery: '2-6 weeks',
      category: 'Security',
      links: [
        { label: 'NIST Cybersecurity Framework', href: 'https://www.nist.gov/cyberframework' },
        { label: 'Zero Trust (CISA)', href: 'https://www.cisa.gov/zero-trust-maturity-model' }
      ],
      benefits: [
        'Up to 80% reduction in breach risk',
        'Regulatory-aligned controls',
        'Improved audit readiness'
      ]
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Plan and execute migrations to AWS, Azure, or GCP with resiliency, cost controls, and IaC.',
      icon: Cloud,
      features: [
        'Landing zone & IaC (Terraform)',
        'Well-Architected assessments',
        'Containerization and PaaS refactors',
        'FinOps and cost guardrails',
        'Backup/DR strategy and drills'
      ],
      pricing: '$15,000 - $150,000/project',
      delivery: '4-16 weeks',
      category: 'Cloud',
      links: [
        { label: 'AWS Well-Architected', href: 'https://aws.amazon.com/architecture/well-architected/' },
        { label: 'Azure CAF', href: 'https://learn.microsoft.com/azure/cloud-adoption-framework/' },
        { label: 'Google Cloud Architecture Center', href: 'https://cloud.google.com/architecture' }
      ],
      benefits: [
        '30-50% infra cost savings (with FinOps)',
        'Higher availability & scalability',
        'Faster feature delivery'
      ]
    },
    {
      title: 'Data Platforms & Analytics Enablement',
      description: 'Build modern data stacks: warehouses, lakes, ELT, governance, and self-serve BI.',
      icon: Database,
      features: [
        'Data lake/warehouse design (Snowflake/BigQuery/Redshift)',
        'ELT pipelines (dbt/Airflow/Fivetran)',
        'Data quality and observability',
        'Role-based access and governance',
        'Self-serve BI and semantic layer'
      ],
      pricing: '$12,000 - $95,000/project',
      delivery: '4-12 weeks',
      category: 'Data',
      links: [
        { label: 'dbt', href: 'https://www.getdbt.com/' },
        { label: 'Snowflake', href: 'https://www.snowflake.com/' },
        { label: 'BigQuery', href: 'https://cloud.google.com/bigquery' }
      ],
      benefits: [
        'Weeks to insights instead of months',
        'Higher data trust and lineage',
        'Democratized analytics'
      ]
    },
    {
      title: 'SRE/DevOps & Platform Engineering',
      description: 'Reliability engineering, golden paths, CI/CD, and platform self-service for developers.',
      icon: Zap,
      features: [
        'GitOps and progressive delivery',
        'SLIs/SLOs and error budgets',
        'Golden paths and internal developer portals',
        'Observability (logs/metrics/traces)',
        'Incident response and game days'
      ],
      pricing: '$8,000 - $40,000/month (team)',
      delivery: 'Ongoing or 6-12 week engagements',
      category: 'DevOps',
      links: [
        { label: 'Google SRE Book', href: 'https://sre.google/sre-book/table-of-contents/' }
      ],
      benefits: [
        '50% fewer incidents',
        'Faster MTTR and deployments',
        'Happier developers'
      ]
    },
    {
      title: 'Compliance Readiness (SOC 2, HIPAA, ISO 27001)',
      description: 'Gap analysis, policy kits, control mapping, and shared evidence program to accelerate audits.',
      icon: BookOpen,
      features: [
        'Control mapping and evidence collection',
        'Risk assessments and vendor reviews',
        'Security policy library and training',
        'Continuous control monitoring',
        'Audit readiness workshops'
      ],
      pricing: '$7,500 - $45,000/project',
      delivery: '3-10 weeks',
      category: 'Compliance',
      links: [
        { label: 'SOC 2 (AICPA)', href: 'https://www.aicpa-cima.com/resources/article/what-is-soc-2' },
        { label: 'ISO/IEC 27001', href: 'https://www.iso.org/standard/27001' }
      ],
      benefits: [
        'Accelerated time to attestation',
        'Lower audit surprises',
        'Customer trust and faster deals'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="managed IT, cybersecurity, cloud migration, DevOps, SRE, data platforms, compliance" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Enterprise IT Services</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Comprehensive IT Services</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">{description}</p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon as any;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">{service.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.links && (
                      <div>
                        <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Helpful References:</h4>
                        <ul className="list-disc ml-6 text-sm text-slate-300">
                          {service.links.map((l, idx) => (
                            <li key={idx}><a className="text-cyan-400 hover:underline" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-lg font-semibold text-cyan-400">{service.pricing}</div>
                      <div className="text-sm text-slate-400">{service.delivery}</div>
                    </div>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Talk to an IT Architect</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Design a right-sized roadmap aligned to your budget, risk profile, and growth goals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a href="tel:+13024640950" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                <Smartphone className="w-4 h-4" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-4">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </section>
      </div>
    </>
  );
}

