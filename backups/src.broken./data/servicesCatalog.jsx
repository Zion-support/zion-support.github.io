export const servicesCatalog = [
    {
        name: 'Micro SaaS',
        slug: 'micro-saas',
        items: [
            {
                id: 'smart-contract-risk-scanner',
                title: 'Smart Contract Risk Scanner',
                description: 'Continuous vulnerability scanning and SBOM for EVM chains with CI/CD hooks.',
                category: 'Micro SaaS',
                price: 'From $199/month',
                billing: 'month',
                features: [
                    'Automated static + dynamic analysis',
                    'PR gate checks and severity scoring',
                    'Exportable audit reports (SOC2-ready)'
                ],
                ctaLabel: 'Start Free Trial',
                href: 'https://ziontechgroup.com',
                external: true
            },
            {
                id: 'etl-to-lakehouse',
                title: 'No-Code ETL to Lakehouse',
                description: 'Connect SaaS apps and stream to S3/BigQuery with schema evolution.',
                category: 'Micro SaaS',
                price: 'From $149/month',
                billing: 'month',
                features: ['150+ connectors', 'Change Data Capture', 'dbt-compatible models'],
                ctaLabel: 'Connect Sources',
                href: 'https://ziontechgroup.com',
                external: true
            },
            {
                id: 'email-deliverability-suite',
                title: 'Email Deliverability Suite',
                description: 'SPF/DKIM/DMARC orchestration, warm-up, and inbox placement analytics.',
                category: 'Micro SaaS',
                price: 'From $99/month',
                billing: 'month',
                features: ['Automatic DNS validation', 'Reputation monitoring', 'Seed list testing'],
                ctaLabel: 'Improve Deliverability',
                href: 'https://ziontechgroup.com',
                external: true
            }
        ]
    },
    {
        name: 'AI Solutions',
        slug: 'ai-solutions',
        items: [
            {
                id: 'genai-knowledge-assistant',
                title: 'GenAI Knowledge Assistant',
                description: 'RAG chatbot over your docs with SOC2 logging and redaction.',
                category: 'AI Solutions',
                price: 'From $299/month',
                billing: 'month',
                features: ['Multi-tenant vector index', 'Retrieval policies', 'Human-in-the-loop'],
                ctaLabel: 'Deploy Assistant',
                href: 'https://ziontechgroup.com',
                external: true
            },
            {
                id: 'ai-code-reviewer',
                title: 'AI Code Reviewer & Pair',
                description: 'LLM-powered code review with repository policies and risk scoring.',
                category: 'AI Solutions',
                price: 'From $199/month',
                billing: 'month',
                features: ['PR annotations', 'Sec rules (OWASP)', 'Refactor suggestions'],
                ctaLabel: 'Enable on GitHub',
                href: 'https://ziontechgroup.com',
                external: true
            },
            {
                id: 'vision-inspection',
                title: 'Vision Quality Inspection',
                description: 'Edge vision models for manufacturing defects with active learning.',
                category: 'AI Solutions',
                price: 'From $499/month',
                billing: 'month',
                features: ['On-device inference', 'Model drift alerts', 'No internet required'],
                ctaLabel: 'Book Demo',
                href: 'https://ziontechgroup.com',
                external: true
            }
        ]
    },
    {
        name: 'IT Services',
        slug: 'it-services',
        items: [
            {
                id: 'msp-care',
                title: 'Managed IT Care',
                description: 'Proactive monitoring, patching, and helpdesk with SLAs.',
                category: 'IT Services',
                price: 'From $80/user/month',
                billing: 'month',
                features: ['24/7 monitoring', 'Remote & onsite support', 'Asset inventory'],
                ctaLabel: 'Talk to Sales',
                href: '/contact'
            },
            {
                id: 'migrations-cloud',
                title: 'Cloud Migration Factory',
                description: 'Lift-and-shift or re-platform to AWS/Azure/GCP with IaC.',
                category: 'IT Services',
                price: 'From $8,000/project',
                billing: 'project',
                features: ['Landing zone design', 'IaC (Terraform)', 'Cost optimization'],
                ctaLabel: 'Get Estimate',
                href: '/contact'
            },
            {
                id: 'vcio',
                title: 'vCIO Advisory',
                description: 'Quarterly roadmap, security posture, and vendor governance.',
                category: 'IT Services',
                price: 'From $150/hour',
                billing: 'hour',
                features: ['IT roadmap', 'Budget planning', 'Compliance alignment'],
                ctaLabel: 'Book Session',
                href: '/contact'
            }
        ]
    },
    {
        name: 'Cybersecurity',
        slug: 'cybersecurity',
        items: [
            {
                id: 'vapt',
                title: 'Vulnerability & Pen Test',
                description: 'External, internal, web app, and API testing with remediation plan.',
                category: 'Cybersecurity',
                price: 'From $6,000/project',
                billing: 'project',
                features: ['OWASP ASVS', 'Authenticated scans', 'Executive + technical reports'],
                ctaLabel: 'Request Scope',
                href: '/contact'
            },
            {
                id: 'soc2-readiness',
                title: 'SOC 2 Readiness',
                description: 'Gap assessment, policies, controls mappings, and audit prep.',
                category: 'Cybersecurity',
                price: 'From $10,000/project',
                billing: 'project',
                features: ['Policy kit', 'Evidence collection', 'Auditor liaison'],
                ctaLabel: 'Start Readiness',
                href: '/contact'
            },
            {
                id: 'mxdr',
                title: 'Managed XDR',
                description: '24/7 detection and response across endpoints, cloud, and identities.',
                category: 'Cybersecurity',
                price: 'From $35/endpoint/month',
                billing: 'month',
                features: ['MITRE ATT&CK mapping', 'Threat hunting', 'Monthly posture reviews'],
                ctaLabel: 'Secure Now',
                href: '/contact'
            }
        ]
    },
    {
        name: 'Data & Analytics',
        slug: 'data-analytics',
        items: [
            {
                id: 'modern-bi',
                title: 'Modern BI Stack',
                description: 'ELT, warehouse modeling, and governed dashboards.',
                category: 'Data & Analytics',
                price: 'From $12,000/project',
                billing: 'project',
                features: ['dbt models', 'Metrics layer', 'Role-based access'],
                ctaLabel: 'Book Workshop',
                href: '/contact'
            },
            {
                id: 'mlops',
                title: 'MLOps Enablement',
                description: 'Feature store, CI/CD for models, and monitoring.',
                category: 'Data & Analytics',
                price: 'From $15,000/project',
                billing: 'project',
                features: ['Model registry', 'Canary rollout', 'Drift detection'],
                ctaLabel: 'Plan Rollout',
                href: '/contact'
            }
        ]
    },
    {
        name: 'Cloud & DevOps',
        slug: 'cloud-devops',
        items: [
            {
                id: 'platform-engineering',
                title: 'Internal Developer Platform',
                description: 'Golden paths, templates, and paved road with Backstage/Port.',
                category: 'Cloud & DevOps',
                price: 'From $20,000/project',
                billing: 'project',
                features: ['Self-service scaffolding', 'Guardrails', 'Scorecards'],
                ctaLabel: 'Design IDP',
                href: '/contact'
            },
            {
                id: 'finops',
                title: 'FinOps Program',
                description: 'Cost visibility, allocation, and savings automation across clouds.',
                category: 'Cloud & DevOps',
                price: 'From $8,000/project',
                billing: 'project',
                features: ['Anomaly detection', 'RI/SP planning', 'Showback/chargeback'],
                ctaLabel: 'Cut Cloud Spend',
                href: '/contact'
            }
        ]
    }
];
