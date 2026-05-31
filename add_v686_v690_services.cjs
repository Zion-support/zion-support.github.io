const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // V686 - Delegation Intelligence (5 services)
  {
    "id": "delegation-intelligence",
    "title": "Email Delegation Intelligence",
    "description": "Detect emails that should be delegated, suggest the best person based on expertise, and track delegation chains.",
    "category": "email-intelligence",
    "price": "$499/month",
    "features": ["Delegation scoring", "Expertise matching", "Chain tracking", "Loop detection", "Delegation analytics"]
  },
  {
    "id": "delegation-expert-matching",
    "title": "Expert Delegation Matcher",
    "description": "Automatically match emails to the right team member based on domain expertise, role, and current capacity.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": ["Expertise database", "Role matching", "Capacity analysis", "Team alignment", "Smart routing"]
  },
  {
    "id": "delegation-chain-tracker",
    "title": "Delegation Chain Tracker",
    "description": "Track delegation chains across your organization to prevent loops and ensure accountability.",
    "category": "email-intelligence",
    "price": "$349/month",
    "features": ["Chain visualization", "Loop detection", "Status tracking", "Accountability logs", "Bottleneck alerts"]
  },
  {
    "id": "delegation-workflow-optimizer",
    "title": "Delegation Workflow Optimizer",
    "description": "Optimize delegation workflows with AI-powered suggestions for better task routing and team efficiency.",
    "category": "email-intelligence",
    "price": "$599/month",
    "features": ["Workflow optimization", "Pattern analysis", "Efficiency scoring", "Auto-suggestions", "Performance reports"]
  },
  {
    "id": "delegation-analytics-suite",
    "title": "Delegation Analytics Suite",
    "description": "Comprehensive delegation analytics with per-person stats, status distribution, and actionable recommendations.",
    "category": "email-intelligence",
    "price": "$699/month",
    "features": ["Per-person analytics", "Status dashboards", "Domain insights", "Trend analysis", "Executive reports"]
  },

  // V687 - Negotiation Intelligence (5 services)
  {
    "id": "negotiation-intelligence",
    "title": "Email Negotiation Intelligence",
    "description": "Detect negotiation stages, extract terms, assess leverage, and suggest counter-offers for better deals.",
    "category": "email-intelligence",
    "price": "$799/month",
    "features": ["Stage detection", "Term extraction", "Leverage analysis", "Counter-offer suggestions", "BATNA analysis"]
  },
  {
    "id": "negotiation-stage-tracker",
    "title": "Negotiation Stage Tracker",
    "description": "Track negotiation progress through 8 stages: opening, exploration, bargaining, closing, deadlock, agreement, and more.",
    "category": "email-intelligence",
    "price": "$549/month",
    "features": ["8-stage tracking", "Progress visualization", "Stage predictions", "Timeline mapping", "Status alerts"]
  },
  {
    "id": "negotiation-leverage-analyzer",
    "title": "Negotiation Leverage Analyzer",
    "description": "Analyze leverage points for both sides including alternatives, urgency, information, and authority.",
    "category": "email-intelligence",
    "price": "$649/month",
    "features": ["8 leverage sources", "Power analysis", "Risk assessment", "Strategy recommendations", "Competitive intelligence"]
  },
  {
    "id": "negotiation-counter-offer-ai",
    "title": "AI Counter-Offer Generator",
    "description": "AI-powered counter-offer suggestions using 10 negotiation tactics: anchoring, concession, framing, and more.",
    "category": "email-intelligence",
    "price": "$899/month",
    "features": ["10 negotiation tactics", "AI suggestions", "Scenario modeling", "Outcome predictions", "Strategy optimization"]
  },
  {
    "id": "negotiation-compliance-checker",
    "title": "Negotiation Compliance Checker",
    "description": "Ensure negotiation emails comply with reply-all rules, detect dropped parties, and flag side-channel risks.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": ["Reply-all enforcement", "Party tracking", "BCC transparency", "Side-channel detection", "Compliance reports"]
  },

  // V688 - Compliance Guardian (5 services)
  {
    "id": "compliance-guardian",
    "title": "Email Compliance Guardian",
    "description": "Scan emails for GDPR, HIPAA, CCPA, and PCI-DSS violations with risk scoring and remediation suggestions.",
    "category": "email-intelligence",
    "price": "$999/month",
    "features": ["GDPR scanning", "HIPAA detection", "CCPA compliance", "PCI-DSS checks", "Risk scoring"]
  },
  {
    "id": "gdpr-email-scanner",
    "title": "GDPR Email Scanner",
    "description": "Detect EU personal data, cross-border transfers, and missing consent in outgoing emails.",
    "category": "email-intelligence",
    "price": "$699/month",
    "features": ["Personal data detection", "Cross-border alerts", "Consent verification", "Lawful basis checks", "GDPR reports"]
  },
  {
    "id": "hipaa-email-protector",
    "title": "HIPAA Email Protector",
    "description": "Detect protected health information (PHI) in emails with ICD-10 codes, prescriptions, and patient data scanning.",
    "category": "email-intelligence",
    "price": "$899/month",
    "features": ["PHI detection", "ICD-10 scanning", "Prescription alerts", "Minimum necessary rule", "HIPAA audit logs"]
  },
  {
    "id": "pci-dss-email-scanner",
    "title": "PCI-DSS Email Scanner",
    "description": "Detect credit card numbers with Luhn validation, CVV codes, and cardholder data in emails.",
    "category": "email-intelligence",
    "price": "$599/month",
    "features": ["Luhn validation", "CVV detection", "Card number scanning", "Expiration alerts", "PCI-DSS reports"]
  },
  {
    "id": "sensitive-data-detector",
    "title": "Sensitive Data Detector",
    "description": "Detect SSN, passports, bank accounts, IBAN, SWIFT codes, driver's licenses, and crypto wallets in emails.",
    "category": "email-intelligence",
    "price": "$749/month",
    "features": ["SSN detection", "Passport scanning", "Bank account alerts", "IBAN/SWIFT checks", "Crypto wallet detection"]
  },

  // V689 - Sarcasm Detector (5 services)
  {
    "id": "sarcasm-detector",
    "title": "Email Sarcasm & Irony Detector",
    "description": "Detect sarcasm, irony, passive-aggressive language, and tonal ambiguity to prevent miscommunication.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": ["Sarcasm detection", "Irony analysis", "Passive-aggressive scanning", "Tone assessment", "Rewriting suggestions"]
  },
  {
    "id": "passive-aggressive-detector",
    "title": "Passive-Aggressive Language Detector",
    "description": "Detect passive-aggressive phrases like 'per my last email', 'just a reminder', and 'as previously discussed'.",
    "category": "email-intelligence",
    "price": "$349/month",
    "features": ["Phrase detection", "Tone scoring", "Context analysis", "Alternative suggestions", "Communication coaching"]
  },
  {
    "id": "backhanded-compliment-detector",
    "title": "Backhanded Compliment Detector",
    "description": "Detect backhanded compliments and suggest genuine alternatives for better workplace communication.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": ["Compliment analysis", "Genuineness scoring", "Alternative suggestions", "Tone improvement", "Communication tips"]
  },
  {
    "id": "tone-clarity-analyzer",
    "title": "Tone Clarity Analyzer",
    "description": "Analyze email tone clarity and suggest improvements to ensure your message is received as intended.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": ["Tone clarity scoring", "Ambiguity detection", "Rewriting suggestions", "Audience adaptation", "Communication reports"]
  },
  {
    "id": "communication-health-monitor",
    "title": "Communication Health Monitor",
    "description": "Monitor team communication health with sarcasm rates, passive-aggressive patterns, and tone trend analysis.",
    "category": "email-intelligence",
    "price": "$599/month",
    "features": ["Team health scoring", "Trend analysis", "Pattern detection", "Intervention alerts", "Wellness reports"]
  },

  // V690 - Cultural Sensitivity (5 services)
  {
    "id": "cultural-sensitivity-analyzer",
    "title": "Email Cultural Sensitivity Analyzer",
    "description": "Detect culturally insensitive language and suggest alternatives for respectful global communication.",
    "category": "email-intelligence",
    "price": "$599/month",
    "features": ["10 sensitivity categories", "Risk scoring", "Alternative suggestions", "Inclusive language detection", "Cultural reports"]
  },
  {
    "id": "inclusive-language-checker",
    "title": "Inclusive Language Checker",
    "description": "Check for gendered language, age discrimination, disability slurs, and suggest inclusive alternatives.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": ["Gender-neutral suggestions", "Age-inclusive language", "Disability-first language", "Inclusive scoring", "Alternative library"]
  },
  {
    "id": "cultural-appropriation-detector",
    "title": "Cultural Appropriation Detector",
    "description": "Detect culturally appropriative language like 'spirit animal', 'guru', 'tribe' and suggest respectful alternatives.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": ["Appropriation detection", "Sacred term alerts", "Cultural context", "Respectful alternatives", "Education resources"]
  },
  {
    "id": "global-communication-optimizer",
    "title": "Global Communication Optimizer",
    "description": "Optimize emails for global audiences with timezone awareness, metric conversions, and idiom removal.",
    "category": "email-intelligence",
    "price": "$549/month",
    "features": ["Timezone detection", "Metric conversions", "Idiom removal", "Plain language suggestions", "Global audience scoring"]
  },
  {
    "id": "dei-communication-auditor",
    "title": "DEI Communication Auditor",
    "description": "Audit organizational communications for diversity, equity, and inclusion with comprehensive scoring and recommendations.",
    "category": "email-intelligence",
    "price": "$799/month",
    "features": ["DEI scoring", "Bias detection", "Inclusion metrics", "Audit reports", "Improvement roadmaps"]
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} new services (V686-V690)`);
console.log(`📊 Total services: ${services.length}`);
