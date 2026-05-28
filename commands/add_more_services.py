#!/usr/bin/env python3
"""Add 20 more innovative services to reach 769 total"""
import json

with open('app/data/servicesData.json') as f:
    data = json.load(f)

print(f'Current: {len(data)} services')

new_services = [
    {
        'id':'zero-trust-network-access',
        'title':'Zero Trust Network Access (ZTNA)',
        'description':'Implement identity-first network security withZTNA. Replace VPN with micro-segmented, device-verified access to corporate applications — no implicit trust, every session verified.',
        'icon':'🔐',
        'category':'security',
        'industry':'Security',
        'pricing':{'basic':'1299','pro':'3499','enterprise':'9999'},
        'features':[
            'Identity-first access: verify every user and device, every session',
            'Micro-segmentation: least-privilege access to specific applications, not networks',
            'Device posture checks: compliance verification before access granted',
            'Integration: Okta, Azure AD, Google Workspace, Duo, CrowdStrike',
            'No VPN required — reduces attack surface by 95%',
            'Cloud-native, supports hybrid and multi-cloud environments',
        ],
        'benefits':[
            'Eliminates lateral movement risk from compromised VPNs',
            'Reduces attack surface: no full network access for remote users',
            'Improved user experience — faster than legacy VPN',
            'Compliance: satisfies NIST 800-207 Zero Trust architecture',
        ]
    },
    {
        'id':'api-contract-testing',
        'title':'API Contract Testing Platform',
        'description':'Automated API contract testing for REST, GraphQL, and gRPC APIs. Catch breaking changes before deployment by validating API responses against OpenAPI/AsyncAPI specs in CI/CD pipelines.',
        'icon':'📡',
        'category':'saas',
        'industry':'Technology',
        'pricing':{'basic':'599','pro':'1599','enterprise':'4999'},
        'features':[
            'REST, GraphQL, gRPC contract validation',
            'OpenAPI 3.x, AsyncAPI 2.x, Protobuf schema support',
            'CI/CD integration: GitHub Actions, GitLab, Jenkins, ArgoCD',
            'Contract change detection with backward compatibility alerts',
            'Schema version diffing with changelog generation',
            'Mock server generation from contract specs',
        ],
        'benefits':[
            'Catch breaking API changes before they reach production',
            'Enable frontend-backend parallel development safely',
            'Reduce API integration bugs by 70% in distributed systems',
            'Contract-first development improves team coordination',
        ]
    },
    {
        'id':'iot-device-security-scanner',
        'title':'IoT Device Security Scanner',
        'description':'Scan and monitor IoT devices for firmware vulnerabilities, default credentials, and network exposure. Discover shadow IoT devices, classify risk, and enforce network segmentation policies.',
        'icon':'📡',
        'category':'security',
        'industry':'Technology',
        'pricing':{'basic':'799','pro':'2199','enterprise':'6999'},
        'features':[
            'Passive network scanning for IoT device discovery',
            'Firmware CVE scanning via vendor databases (CISA, NVD)',
            'Default credential detection and password strength analysis',
            'Network exposure scoring: is device internet-facing or behind NAT?',
            'Segmentation policy recommendations to isolate IoT from critical networks',
            'Integration: Nessus, Qualys, Rapid7, Splunk, Microsoft Defender for IoT',
        ],
        'benefits':[
            'Discover shadow IoT devices before attackers do',
            'Reduce IoT attack surface by enforcing segmentation',
            'Meet compliance: NIST IoT security guidelines, CIS Controls',
            'Continuous monitoring vs point-in-time vulnerability scans',
        ]
    },
    {
        'id':'data-lineage-tracker',
        'title':'Data Lineage Tracker',
        'description':'Automatically discover and visualize data flows across your data warehouse, ETL pipelines, and BI tools. Track every column from source to dashboard — essential for GDPR, CCPA, and AI governance.',
        'icon':'🗺️',
        'category':'data',
        'industry':'Technology',
        'pricing':{'basic':'999','pro':'2999','enterprise':'8999'},
        'features':[
            'Connect: Snowflake, BigQuery, Redshift, Databricks, dbt, Airflow',
            'Column-level lineage: trace every data element end-to-end',
            'Impact analysis: which dashboards/ML models will break if I change this table?',
            'GDPR/CCPA right-of-access: find all personal data locations in minutes',
            'Change detection: alert when upstream data schema changes',
            'Data quality scoring per pipeline with anomaly detection',
        ],
        'benefits':[
            'Cut data incident resolution time from days to minutes',
            'Satisfy GDPR/CCPA data lineage requirements automatically',
            'Enable confident data changes with impact previews',
            'AI governance: track where training data comes from',
        ]
    },
    {
        'id':'remote-work-productivity-analytics',
        'title':'Remote Work Productivity Analytics',
        'description':'Aggregate collaboration signals from Slack, Teams, GitHub, Jira, and email to measure team productivity and engagement — without surveillance. Manager dashboards with actionable insights.',
        'icon':'📊',
        'category':'automation',
        'industry':'Operations',
        'pricing':{'basic':'499','pro':'1299','enterprise':'3999'},
        'features':[
            'Connect: Slack, Teams, GitHub, Jira, Gmail, Google Calendar, Zoom',
            'Team engagement score: collaboration patterns vs benchmarks',
            'Meeting overload detection: identify meeting-heavy days and suggest focus time',
            'Knowledge gaps: detect siloed teams or isolated individuals',
            'Manager digest: weekly summary of team health indicators',
            'Privacy-first: aggregates anonymized signals, no individual surveillance',
        ],
        'benefits':[
            'Data-driven management without invasive employee monitoring',
            'Identify burnout risk before team members disengage',
            'Optimize meeting schedules and focus time allocation',
            'Measure ROI of remote work tools and hybrid policies',
        ]
    },
    {
        'id':'cloud-finops-rightsizing-advisor',
        'title':'Cloud FinOps Rightsizing Advisor',
        'description':'AI-powered cloud resource rightsizing recommendations based on real utilization patterns. Analyzes compute, memory, and storage usage — identifies over-provisioned resources, projects savings, and implements recommendations.',
        'icon':'💰',
        'category':'cloud',
        'industry':'Finance',
        'pricing':{'basic':'799','pro':'1999','enterprise':'5999'},
        'features':[
            'Connect: AWS Compute Optimizer, Azure Advisor, GCP Recommender',
            'Rightsizing recommendations with projected monthly savings',
            'Historical utilization analysis: 30/60/90 day patterns',
            'Scheduled rightsizing: auto-apply recommendations on timeline',
            'Undo capability: rollback rightsizing if performance degrades',
            'Multi-cloud unified rightsizing dashboard',
        ],
        'benefits':[
            'Typical savings: 25-40% on over-provisioned compute',
            'No performance risk: recommendations based on actual utilization',
            'Automated application removes manual FinOps overhead',
            'Track actual savings vs projections for accountability',
        ]
    },
    {
        'id':'security-awareness-training-tracker',
        'title':'Security Awareness Training Tracker',
        'description':'Track and measure employee security awareness. Automated training assignment, phishing simulation campaigns, compliance reporting, and real-time risk scoring per employee and department.',
        'icon':'🎓',
        'category':'security',
        'industry':'Security',
        'pricing':{'basic':'599','pro':'1499','enterprise':'4499'},
        'features':[
            'Automated training paths: onboarding, GDPR, phishing, password hygiene',
            'Phishing simulation: realistic mock phishing emails with click tracking',
            'Risk scoring per employee: security maturity scorecard',
            'Department-level awareness reporting for managers',
            'Compliance reporting: SOC2, ISO27001, HIPAA awareness metrics',
            'Integration: KnowBe4, Proofpoint, Microsoft, Google Workspace',
        ],
        'benefits':[
            'Reduce phishing click rates by avg. 80% after 12 months training',
            'Audit-ready compliance reports for security awareness programs',
            'Identify high-risk employees who need extra training',
            'Automate repetitive security awareness program management',
        ]
    },
    {
        'id':'code-review-automation',
        'title':'AI Code Review Automation',
        'description':'Automated code review that catches bugs, security vulnerabilities, and code quality issues before human review. Integrates with GitHub/GitLab PR workflow, provides inline fix suggestions.',
        'icon':'🔍',
        'category':'saas',
        'industry':'Technology',
        'pricing':{'basic':'699','pro':'1899','enterprise':'5899'},
        'features':[
            'Connect: GitHub PRs, GitLab MRs, Bitbucket, Azure DevOps',
            'Security: OWASP Top 10, CWE Top 25, CVE matching in real-time',
            'Code quality: cyclomatic complexity, duplication, dead code detection',
            'Performance: identifies N+1 queries, inefficient loops, memory leaks',
            'Inline fix suggestions with one-click apply option',
            'Team leaderboard: bug detection rates, review turnaround time',
        ],
        'benefits':[
            'Catch 60% of bugs before human code review',
            'Reduce security vulnerabilities in code before production',
            'Free senior engineers from repetitive low-value review work',
            'Standardize code quality across distributed teams',
        ]
    },
    {
        'id':'email-archive-compliance',
        'title':'Email Archive & Compliance Platform',
        'description':'Enterprise email archiving for regulatory compliance (SEC 17a-4, FINRA, GDPR, HIPAA). Tamper-proof storage, e-discovery, legal hold, and sub-second search across millions of archived messages.',
        'icon':'📧',
        'category':'saas',
        'industry':'Legal',
        'pricing':{'basic':'999','pro':'2499','enterprise':'7499'},
        'features':[
            'Archive: Gmail, Exchange, Outlook, Office 365, IMAP',
            'Tamper-proof storage: WORM compliance, cryptographic integrity',
            'e-Discovery: legal hold, keyword search, export for litigation',
            'Retention policies: customizable by department, regulated industry',
            'Full-text search across all archived mail in sub-second',
            'Supervision workflows: manager review queues for regulated employees',
        ],
        'benefits':[
            'Satisfy SEC 17a-4, FINRA, GDPR, HIPAA retention requirements',
            'Cut e-discovery costs by 80% vs manual email retrieval',
            'Legal hold: one-click preservation of all employee mail',
            'Fast audit responses with instant search and export',
        ]
    },
    {
        'id':'distributed-tracing-debugger',
        'title':'Distributed Tracing Debugger',
        'description':'End-to-end request tracing across microservices. Identify latency bottlenecks, isolate failing services, and reconstruct the full call chain for any production incident in seconds.',
        'icon':'🔎',
        'category':'data',
        'industry':'Technology',
        'pricing':{'basic':'899','pro':'2499','enterprise':'7999'},
        'features':[
            'Connect: OpenTelemetry, Jaeger, Zipkin, AWS X-Ray, Datadog APM',
            'Full call-graph reconstruction from any trace ID',
            'Latency breakdown: which service in the chain caused the slowdown',
            'Error propagation tracking: surface root-cause error, not symptom',
            'Anomaly detection: flag unusual latency patterns per endpoint',
            'Code-level trace viewer with actual function names',
        ],
        'benefits':[
            'Cut production incident MTTR by 60% with trace-level debugging',
            'No code changes required if using OpenTelemetry',
            'Identify cross-service performance issues invisible to individual teams',
            'Replace guesswork with data-driven root cause analysis',
        ]
    },
    {
        'id':'vulnerability-prioritization-engine',
        'title':'Vulnerability Prioritization Engine',
        'description':'Context-aware vulnerability prioritization using exploitability, asset criticality, and threat intelligence — so your team patches what matters, not just what CVE scores suggest.',
        'icon':'🎯',
        'category':'security',
        'industry':'Security',
        'pricing':{'basic':'799','pro':'2199','enterprise':'6499'},
        'features':[
            'Connect: Qualys, Tenable, Rapid7, CrowdStrike, Microsoft Defender',
            'EPSS integration: map CVE to real-world exploit probability',
            'Asset context: which vulnerable hosts are internet-facing? production? DMZ?',
            'Threat intelligence: is this CVE being actively exploited in the wild?',
            'CVSS override: contextual scoring beyond base CVSS vector',
            'Remediation workflow: assign owner, track progress, notify when patched',
        ],
        'benefits':[
            'Reduce alert fatigue: focus on the 5% of CVEs that are actually exploitable',
            'Cut vulnerability remediation time by prioritizing real risk',
            'Integrate threat intel to catch weaponized CVEs within hours of disclosure',
            'Align patching with business criticality, not just severity scores',
        ]
    },
    {
        'id':'code-complexity-analytics',
        'title':'Code Complexity Analytics',
        'description':'Measure and track software complexity metrics across your entire codebase. Identify high-risk modules, track technical debt accumulation, and prioritize refactoring before complexity impacts delivery velocity.',
        'icon':'📈',
        'category':'data',
        'industry':'Technology',
        'pricing':{'basic':'499','pro':'1299','enterprise':'3999'},
        'features':[
            'Metrics: cyclomatic complexity, cognitive complexity, coupling, cohesion',
            'Language support: Python, JavaScript, TypeScript, Java, Go, Rust, C#',
            'Repository-level dashboards: complexity trend over time',
            'Technical debt tracking: days to pay down debt by module',
            'PR risk scoring: flag PRs that increase complexity',
            'Refactoring ROI: estimate time savings from simplifying complex modules',
        ],
        'benefits':[
            'Identify modules at risk of high defect rates due to complexity',
            'Track technical debt growth before it slows team velocity',
            'Data-driven refactoring prioritization',
            'Improve code review quality with complexity metrics per PR',
        ]
    },
    {
        'id':' sla-calculator',
        'title':'SLA Calculator & Uptime Optimizer',
        'description':'Calculate downtime costs, simulate availability scenarios, and design optimal SLA tiers for your service. Includes uptime tracker with real-time status pages and incident management integration.',
        'icon':'📊',
        'category':'saas',
        'industry':'Operations',
        'pricing':{'basic':'299','pro':'799','enterprise':'2499'},
        'features':[
            'SLA tier design: 99.9%, 99.95%, 99.99% with cost analysis',
            'Downtime cost calculator: revenue, productivity, customer impact',
            'Real-time status page: public uptime tracking with incident integration',
            'Historical SLA compliance reporting per service',
            'SLO tracking: error budget burn rate alerts',
            'Contractor/vendor SLA benchmarking tool',
        ],
        'benefits':[
            'Design SLA tiers grounded in business cost of downtime',
            'Build customer trust with public, auditable status pages',
            'Track actual uptime vs contracted SLA with confidence',
            'Negotiate vendor contracts with data on real SLA requirements',
        ]
    },
    {
        'id':'database-permission-auditor',
        'title':'Database Permission Auditor',
        'description':'Continuous monitoring of database access controls. Detect privilege escalations, identify over-privileged accounts, and generate compliance reports for SOX, PCI-DSS, and HIPAA database requirements.',
        'icon':'🔑',
        'category':'security',
        'industry':'Security',
        'pricing':{'basic':'699','pro':'1899','enterprise':'5899'},
        'features':[
            'Connect: PostgreSQL, MySQL, MSSQL, Oracle, Snowflake, BigQuery',
            'Privilege analysis: who has what access and why?',
            'Over-privilege detection: identify accounts with more access than needed',
            'Change detection: alert when permissions change without approval',
            'Compliance reports: SOX, PCI-DSS, HIPAA access control requirements',
            'Automated least-privilege remediation: generate GRANT/REVOKE scripts',
        ],
        'benefits':[
            'Reduce data breach blast radius by enforcing least-privilege',
            'Satisfy SOX/PCI-DSS database access control requirements',
            'Detect insider threat: unusual database privilege escalation',
            'Cut audit prep time from weeks to hours',
        ]
    },
    {
        'id':'incident-cost-calculator',
        'title':'Incident Cost Calculator',
        'description':'Quantify the real cost of production incidents: downtime, engineering time, customer impact, revenue loss, and reputational damage. Used to justify investment in reliability engineering.',
        'icon':'💸',
        'category':'automation',
        'industry':'Operations',
        'pricing':{'basic':'199','pro':'599','enterprise':'1999'},
        'features':[
            'Incident cost models: hourly downtime cost, engineering time, revenue impact',
            'Integration: PagerDuty, OpsGenie, Jira, GitHub Actions incident data',
            'Historical incident analysis: total cost per quarter/year',
            'ROI calculator: compare reliability investment vs incident cost',
            'Severity benchmarking: how does your MTTR compare to industry?',
            'Executive reports: incident cost trends for leadership',
        ],
        'benefits':[
            'Justify SRE/reliability investments with real dollar figures',
            'Identify which incident types are most expensive to target',
            'Track improvement: incident cost reduction over time',
            'Post-mortem context: attach cost data to incident reviews',
        ]
    },
    {
        'id':'cloud-migration-readiness',
        'title':'Cloud Migration Readiness Assessor',
        'description':'Evaluate application readiness for cloud migration (AWS, Azure, GCP). Score applications on complexity, dependencies, risk factors, and estimated migration timeline and cost.',
        'icon':'☁️',
        'category':'cloud',
        'industry':'Technology',
        'pricing':{'basic':'899','pro':'2499','enterprise':'7999'},
        'features':[
            'Application discovery: scan on-prem apps, dependencies, traffic flows',
            'Readiness scoring: 1-5 scale across cloud-native compatibility dimensions',
            'Migration pattern recommendation: rehost / refactor / replatform / repurchase',
            'Dependency mapping: which apps must migrate together?',
            'Risk identification: legacy components that block migration',
            'Migration project planner: timeline, effort, cost estimates per app',
        ],
        'benefits':[
            'Avoid failed cloud migrations by identifying blockers upfront',
            'Prioritize migration candidates with highest ROI and lowest risk',
            'Reduce migration surprises with comprehensive dependency analysis',
            'Executive visibility: migration pipeline progress dashboard',
        ]
    },
    {
        'id':'code-dependency-advisor',
        'title':'Code Dependency Advisor',
        'description':'Analyze application dependencies for security vulnerabilities, license compliance risks, and maintenance burden. Supports npm, pip, Maven, Go, Cargo — with upgrade path recommendations.',
        'icon':'📦',
        'category':'saas',
        'industry':'Technology',
        'pricing':{'basic':'499','pro':'1299','enterprise':'3999'},
        'features':[
            'Package managers: npm, pip, Maven, Go modules, Cargo, NuGet',
            'CVE scanning: flag known vulnerabilities in direct and transitive dependencies',
            'License compliance: detect GPL, LGPL, AGPL, proprietary licenses',
            'Maintenance burden: abandoned packages, deprecated APIs, update frequency',
            'Upgrade path planning: which versions are compatible?',
            'Lockfile analysis: detect sudden dependency changes in PRs',
        ],
        'benefits':[
            'Eliminate supply chain attacks via compromised dependencies',
            'Maintain license compliance across all codebases',
            'Reduce technical debt from abandoned or outdated packages',
            'Automate dependency updates with test-validated upgrade paths',
        ]
    },
    {
        'id':'user-behavior-analytics',
        'title':'User Behavior Analytics (UEBA)',
        'description':'ML-powered user behavior analytics to detect insider threats and account compromise. Baseline normal user behavior, alert on deviations — logons, data access, privilege use.',
        'icon':'👤',
        'category':'security',
        'industry':'Security',
        'pricing':{'basic':'999','pro':'2999','enterprise':'8999'},
        'features':[
            'Connect: Active Directory, Azure AD, Okta, GCP, AWS, Azure, Splunk',
            'Behavioral baselines: per-user normal working hours, locations, data access',
            'Anomaly detection: unusual logon times, privilege escalation, data exfiltration',
            'Peer analysis: compare user to similar role peers — flag outliers',
            'Risk scoring: each user gets an updated risk score updated daily',
            'Alert workflows: integrate with SIEM, SOAR, and ticketing systems',
        ],
        'benefits':[
            'Detect insider threats and compromised credentials before data loss',
            'Reduce false positives vs rule-based DLP and SIEM alerts',
            'Identify compromised service accounts that bypass traditional AV/EDR',
            'Satisfy NIST SP 800-53 AU-2 user activity monitoring requirements',
        ]
    },
    {
        'id':'api-performance-dashboard',
        'title':'API Performance Dashboard',
        'description':'Real-time API performance monitoring and optimization. Track latency, error rates, and throughput per endpoint — with intelligent baselining, anomaly detection, and root-cause attribution.',
        'icon':'📊',
        'category':'saas',
        'industry':'Technology',
        'pricing':{'basic':'599','pro':'1599','enterprise':'4999'},
        'features':[
            'Connect: API gateways (Kong, AWS API Gateway, Apigee, Azure APIM)',
            'Per-endpoint latency, error rate, and throughput in real-time',
            'Intelligent baseline: per-endpoint normal range vs current',
            'Anomaly detection: alert when P99 latency exceeds baseline by threshold',
            'Root-cause attribution: which upstream service is causing latency?',
            'SLO tracking: error budget consumption per API endpoint',
        ],
        'benefits':[
            'Catch API performance degradation before it affects users',
            'Identify which endpoints need optimization — data-driven',
            'SLO compliance visibility for API product teams',
            'Reduce P99 latency with attribution-driven optimization',
        ]
    },
    {
        'id':'sustainable-it-carbon-tracker',
        'title':'Sustainable IT Carbon Tracker',
        'description':'Measure and reduce the carbon footprint of your IT operations. Track energy consumption of cloud workloads, on-prem servers, and network equipment — generate sustainability reports for ESG compliance.',
        'icon':'🌱',
        'category':'it',
        'industry':'Operations',
        'pricing':{'basic':'699','pro':'1899','enterprise':'5899'},
        'features':[
            'Cloud carbon: AWS/Azure/GCP energy consumption estimation per service',
            'On-prem: integrate with PDU, UPS, and DCIM systems',
            'Carbon intensity: use real-time grid carbon factor ( electricitymap.org)',
            'Right-sizing recommendations: reduce compute to reduce carbon',
            'Scope 2 emissions reporting for GHG protocol compliance',
            'ESG reporting: generate sustainability reports for investors and regulators',
        ],
        'benefits':[
            'Reduce cloud carbon footprint by avg. 20% after rightsizing',
            'Satisfy ESG reporting requirements for investors and regulators',
            'Corporate sustainability: track progress toward net-zero IT commitments',
            'Cost-carbon co-optimization: same actions reduce bill and carbon',
        ]
    },
]

contact = {'website': '/services/', 'email': 'kleber@ziontechgroup.com', 'phone': '+1 302 464 0950'}
default_features = [
    'Real-time monitoring and analytics',
    'Integrates with major enterprise platforms',
    'Enterprise-grade security and compliance',
    'Scalable to any organization size',
    'Dedicated support from Zion Tech Group',
    'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
]
default_benefits = [
    'Reduce operational overhead and costs',
    'Enterprise-grade reliability and security',
    'Fast implementation with minimal disruption',
    'Measurable ROI within first quarter',
    'Backed by Zion Tech Group expertise'
]

for svc in new_services:
    entry = {
        'id': svc['id'],
        'title': svc['title'],
        'description': svc['description'],
        'icon': svc['icon'],
        'features': svc.get('features', default_features),
        'benefits': svc.get('benefits', default_benefits),
        'pricing': svc['pricing'],
        'contactInfo': contact,
        'href': f"/services/{svc['id']}",
        'category': svc['category'],
        'popular': False,
        'stage': 'published',
        'industry': svc['industry']
    }
    data.append(entry)

print(f'New total: {len(data)} services')
added = [s['id'] for s in data[-len(new_services):]]
print(f'Added: {len(added)} services')
print(f'Sample: {added[:5]}')

with open('app/data/servicesData.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
print('Written OK')