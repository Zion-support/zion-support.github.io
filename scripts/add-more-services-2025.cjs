const fs = require('fs');
const services = JSON.parse(fs.readFileSync('app/data/servicesData.json', 'utf8'));

const newServices = [
  {
    id: 'ai-voice-assistant-builder',
    title: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants for customer support, internal help desks, and automated phone systems with natural language understanding and multi-language support.',
    features: ['Custom voice assistant creation', 'Natural language understanding', 'Multi-language support (20+ languages)', 'Integration with phone systems', 'Knowledge base integration', 'Call analytics dashboard', 'Automated escalation to humans'],
    price: 'From $799/month',
    category: 'ai',
    icon: '🎙️'
  },
  {
    id: 'blockchain-smart-contract-audit',
    title: 'Smart Contract Security Audit',
    description: 'Comprehensive security auditing for smart contracts with automated vulnerability detection, gas optimization analysis, and compliance verification.',
    features: ['Automated vulnerability scanning', 'Gas optimization analysis', 'Reentrancy attack detection', 'Access control verification', 'Compliance checking (ERC standards)', 'Detailed security reports', 'Remediation recommendations'],
    price: 'From $2,999/audit',
    category: 'blockchain',
    icon: '🔒'
  },
  {
    id: 'iot-predictive-maintenance',
    title: 'IoT Predictive Maintenance Platform',
    description: 'Predict equipment failures before they happen using IoT sensors and machine learning, reducing downtime and maintenance costs.',
    features: ['Real-time sensor monitoring', 'Machine learning failure prediction', 'Maintenance scheduling optimization', 'Cost reduction analytics', 'Equipment health dashboards', 'Alert systems', 'Integration with CMMS'],
    price: 'From $1,299/month',
    category: 'iot',
    icon: '🔧'
  },
  {
    id: 'data-real-time-analytics',
    title: 'Real-Time Analytics Engine',
    description: 'Process and analyze streaming data in real-time with sub-second latency, enabling instant insights and automated decision-making.',
    features: ['Sub-second data processing', 'Real-time dashboards', 'Stream processing pipelines', 'Anomaly detection', 'Automated alerts', 'Scalable architecture', 'Integration with data lakes'],
    price: 'From $899/month',
    category: 'data',
    icon: '⚡'
  },
  {
    id: 'cloud-disaster-recovery',
    title: 'Cloud Disaster Recovery Service',
    description: 'Automated backup and disaster recovery for cloud infrastructure with RPO/RTO guarantees and one-click failover.',
    features: ['Automated backups', 'Multi-region replication', 'One-click failover', 'RPO/RTO guarantees', 'Testing and validation', 'Compliance reporting', '24/7 monitoring'],
    price: 'From $1,499/month',
    category: 'cloud',
    icon: '🛡️'
  },
  {
    id: 'security-zero-trust-architecture',
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model with continuous verification, micro-segmentation, and least-privilege access controls.',
    features: ['Identity verification', 'Micro-segmentation', 'Least-privilege access', 'Continuous monitoring', 'Policy enforcement', 'Threat detection', 'Compliance automation'],
    price: 'From $2,499/month',
    category: 'security',
    icon: '🔐'
  },
  {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation Platform',
    description: 'Automated content moderation for user-generated content using AI to detect inappropriate, harmful, or policy-violating content.',
    features: ['Image moderation', 'Text moderation', 'Video moderation', 'Custom policy enforcement', 'Multi-language support', 'Human review workflow', 'Analytics dashboard'],
    price: 'From $599/month',
    category: 'ai',
    icon: '🛡️'
  },
  {
    id: 'micro-saas-subscription-billing',
    title: 'Subscription Billing Platform',
    description: 'Comprehensive subscription management and billing platform with automated invoicing, payment processing, and revenue recognition.',
    features: ['Automated billing', 'Payment processing', 'Revenue recognition', 'Dunning management', 'Subscription analytics', 'Tax compliance', 'Multi-currency support'],
    price: 'From $299/month',
    category: 'micro-saas',
    icon: '💳'
  },
  {
    id: 'it-endpoint-management',
    title: 'Unified Endpoint Management',
    description: 'Manage and secure all endpoints (laptops, mobiles, IoT) from a single platform with automated patching and compliance enforcement.',
    features: ['Device inventory', 'Automated patching', 'Remote wipe', 'Compliance enforcement', 'Application management', 'Security policies', 'Reporting dashboard'],
    price: 'From $899/month',
    category: 'it',
    icon: '💻'
  },
  {
    id: 'devops-chaos-engineering',
    title: 'Chaos Engineering Platform',
    description: 'Build resilient systems by intentionally injecting failures and testing system response in controlled environments.',
    features: ['Failure injection', 'Experiment orchestration', 'Resilience testing', 'Automated rollbacks', 'Observability integration', 'Game day planning', 'Post-mortem analysis'],
    price: 'From $1,199/month',
    category: 'devops',
    icon: '💥'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection System',
    description: 'Real-time fraud detection and prevention using machine learning to identify suspicious transactions and behaviors.',
    features: ['Real-time transaction monitoring', 'Behavioral analysis', 'Anomaly detection', 'Risk scoring', 'Automated alerts', 'Case management', 'Regulatory compliance'],
    price: 'From $1,999/month',
    category: 'ai',
    icon: '🕵️'
  },
  {
    id: 'automation-rpa-platform',
    title: 'Robotic Process Automation Platform',
    description: 'Automate repetitive business processes with software robots that mimic human actions across multiple applications.',
    features: ['Process discovery', 'Bot development', 'Orchestration', 'Exception handling', 'Analytics dashboard', 'Integration APIs', 'Scalable deployment'],
    price: 'From $1,499/month',
    category: 'automation',
    icon: '🤖'
  }
];

// Check for duplicates and add
let addedCount = 0;
newServices.forEach(service => {
  if (!services.find(s => s.id === service.id)) {
    services.push(service);
    addedCount++;
    console.log(`✓ Added: ${service.title}`);
  } else {
    console.log(`- Skipped (exists): ${service.title}`);
  }
});

fs.writeFileSync('app/data/servicesData.json', JSON.stringify(services, null, 2));
console.log(`\n✅ Added ${addedCount} new services`);
console.log(`✅ Total services: ${services.length}`);
