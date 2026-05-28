#!/usr/bin/env python3
import json

with open('app/data/servicesData.json') as f:
    data = json.load(f)

print(f'Current: {len(data)} services')

batch2 = [
    {'id':'webhook-failover-router','title':'Webhook Failover Router','category':'saas','industry':'Technology','icon':'🔄','pricing':{'basic':'399','pro':'999','enterprise':'2999'},'desc':'Smart webhook delivery with automatic retry, geographic routing, and failover. Guarantees at-least-once delivery, logs every event, and replays on demand.'},
    {'id':'database-query-explainer','title':'Database Query Explainer','category':'data','industry':'Technology','icon':'🔍','pricing':{'basic':'299','pro':'899','enterprise':'2999'},'desc':'AI-powered SQL query optimization. Paste any SQL, get index suggestions, join order analysis, and execution plan improvements for PostgreSQL/MySQL/Snowflake/BigQuery.'},
    {'id':'backup-compliance-validator','title':'Backup Compliance Validator','category':'security','industry':'Operations','icon':'✅','pricing':{'basic':'699','pro':'1799','enterprise':'5499'},'desc':'Automated backup verification against SOC2, ISO27001, GDPR. Verifies backup logs, tests restore procedures, generates audit-ready compliance reports.'},
    {'id':'ssl-certificate-monitor','title':'SSL Certificate Monitor','category':'security','industry':'Operations','icon':'🔐','pricing':{'basic':'199','pro':'599','enterprise':'1999'},'desc':'Multi-domain SSL certificate monitoring and automated renewal. Tracks expiry, chains, vulnerabilities — prevents expired certificate outages.'},
    {'id':'network-flow-analyzer','title':'Network Flow Analyzer','category':'it','industry':'Technology','icon':'🌐','pricing':{'basic':'799','pro':'2199','enterprise':'6999'},'desc':'NetFlow/sFlow/IPFIX traffic analysis. Identify bandwidth hogs, detect anomalies, optimize QoS policies, and plan capacity for Cisco/Juniper/generic exporters.'},
    {'id':'password-health-dashboard','title':'Enterprise Password Health Dashboard','category':'security','industry':'Security','icon':'🔑','pricing':{'basic':'599','pro':'1499','enterprise':'4499'},'desc':'Scan Active Directory/Azure AD/Google Workspace for weak, expired, reused passwords. Generate NIST/SOX compliance reports with remediation guidance.'},
    {'id':'webhook-archive-replay','title':'Webhook Archive & Replay','category':'saas','industry':'Technology','icon':'📦','pricing':{'basic':'499','pro':'1299','enterprise':'3999'},'desc':'Permanent webhook event archive with full payload storage, search, and on-demand replay. Compliance audit trails, QA testing, new integration replay.'},
    {'id':'log-anomaly-alerting','title':'ML Log Anomaly Alerting','category':'automation','industry':'Technology','icon':'📈','pricing':{'basic':'699','pro':'1999','enterprise':'5999'},'desc':'ML pattern recognition for production log anomalies. Learns normal patterns, alerts on deviation, reduces false positives vs rule-based alerting by 60%.'},
    {'id':'multi-cloud-dns-failover','title':'Multi-Cloud DNS Failover','category':'cloud','industry':'Technology','icon':'🌍','pricing':{'basic':'399','pro':'999','enterprise':'2999'},'desc':'Geographic health checking and automatic DNS failover across Route 53, Azure DNS, Cloudflare. HTTP/TCP/ICMP checks from 12 global locations, 60-second failover.'},
    {'id':'service-catalog-api','title':'Internal Service Catalog API','category':'saas','industry':'Technology','icon':'📚','pricing':{'basic':'899','pro':'2499','enterprise':'7499'},'desc':'Internal developer portal with service registry, API documentation hub, and dependency graph. Enables self-service service discovery without spreadsheet chaos.'},
    {'id':'devops-pipeline-monitor','title':'DevOps Pipeline Monitor','category':'automation','industry':'Technology','icon':'🚀','pricing':{'basic':'799','pro':'2199','enterprise':'6499'},'desc':'DORA metrics tracking for GitHub Actions, GitLab CI, Jenkins, ArgoCD. Deployment frequency, lead time, MTTR, change failure rate in real time.'},
    {'id':'secrets-rotation-engine','title':'Secrets Rotation Engine','category':'security','industry':'Security','icon':'🔄','pricing':{'basic':'999','pro':'2999','enterprise':'8999'},'desc':'Automated credential rotation for databases, APIs, service accounts. Integrates with HashiCorp Vault, AWS Secrets Manager, Azure Key Vault.'},
    {'id':'compliance-evidence-collector','title':'Compliance Evidence Collector','category':'security','industry':'Legal','icon':'📋','pricing':{'basic':'1499','pro':'3999','enterprise':'11999'},'desc':'Automated evidence gathering for SOC2, ISO27001, HIPAA, GDPR audits. Connects to cloud APIs and ticketing systems, generates auditor-ready report in hours.'},
    {'id':'ml-model-drift-detector','title':'ML Model Drift Detector','category':'ai','industry':'Technology','icon':'🤖','pricing':{'basic':'899','pro':'2499','enterprise':'7499'},'desc':'Monitor production ML model performance degradation and data drift. Tracks prediction distribution shifts, feature drift, accuracy degradation before bad decisions.'},
    {'id':'infrastructure-topology-mapper','title':'Infrastructure Topology Mapper','category':'cloud','industry':'Technology','icon':'🗺️','pricing':{'basic':'699','pro':'1799','enterprise':'5499'},'desc':'Auto-generate infrastructure diagrams from AWS/Azure/GCP APIs. Discovers resources, dependencies, data flows, produces live auto-updated diagrams.'},
    {'id':'incident-response-playbook','title':'Incident Response Playbook Engine','category':'automation','industry':'Operations','icon':'🚨','pricing':{'basic':'799','pro':'2199','enterprise':'6499'},'desc':'Structured incident response automation: runbooks, escalation trees, stakeholder communication templates, post-incident review — triggered from a single alert.'},
    {'id':'ci-cd-secret-scanner','title':'CI/CD Secret Scanner','category':'security','industry':'Technology','icon':'🔎','pricing':{'basic':'499','pro':'1299','enterprise':'3999'},'desc':'Scan CI/CD pipeline logs and artifacts for exposed API keys, tokens, passwords. Prevent secret leakage in GitHub Actions, Jenkins, GitLab CI pipelines.'},
    {'id':'databaseschema-migrator','title':'Database Schema Migration Manager','category':'data','industry':'Technology','icon':'🔄','pricing':{'basic':'599','pro':'1599','enterprise':'4999'},'desc':'Schema migration manager with rollback support, dependency analysis, and migration testing. Works across PostgreSQL, MySQL, MSSQL, Snowflake.'},
    {'id':'k8s-cost-optimizer','title':'Kubernetes Cost Optimizer','category':'cloud','industry':'Technology','icon':'💲','pricing':{'basic':'699','pro':'1799','enterprise':'5499'},'desc':'Analyze Kubernetes cluster resource usage, recommend pod right-sizing and bin-packing. Reduce K8s cloud costs by 25-40% without performance impact.'},
    {'id':'sso-access-auditor','title':'SSO Access Auditor','category':'security','industry':'Security','icon':'🔍','pricing':{'basic':'799','pro':'1999','enterprise':'5999'},'desc':'Audit SSO access across Okta/Azure AD/Google Workspace. Detect unauthorized access, generate peer-privilege comparisons, flag role creep for compliance.'},
]

for svc in batch2:
    entry = {
        'id': svc['id'],
        'title': svc['title'],
        'description': svc['desc'],
        'icon': svc['icon'],
        'features': [
            'Real-time monitoring and alerting',
            'Integrates with major enterprise platforms',
            'Enterprise-grade security and compliance',
            'Scalable to any organization size',
            'Dedicated support from Zion Tech Group',
            'Contact: kleber@ziontechgroup.com or +1 302 464 0950'
        ],
        'benefits': [
            'Reduce operational overhead and costs',
            'Enterprise-grade reliability and security',
            'Fast implementation with minimal disruption',
            'Measurable ROI within first quarter',
            'Backed by Zion Tech Group expertise'
        ],
        'pricing': svc['pricing'],
        'contactInfo': {'website': f"/services/{svc['id']}", 'email': 'kleber@ziontechgroup.com', 'phone': '+1 302 464 0950'},
        'href': f"/services/{svc['id']}",
        'category': svc['category'],
        'popular': False,
        'stage': 'published',
        'industry': svc['industry']
    }
    data.append(entry)

print(f'New total: {len(data)} services')
added_ids = [s['id'] for s in data[-len(batch2):]]
print(f'Added: {added_ids}')

with open('app/data/servicesData.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
print('Written OK')