const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

const newServices = [
  // V301-V305 Email Intelligence
  {
    id: "email-dna-profiler",
    title: "AI Email DNA Profiler",
    description: "Creates unique behavioral fingerprints for each sender. Detects impersonation, phishing, and social engineering attacks with 99.9% accuracy using writing style, temporal, and linguistic DNA markers.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧬",
    price: "$499/month",
    features: ["Behavioral DNA Profiling", "Impersonation Detection", "Phishing Prevention", "Writing Style Analysis", "Temporal Pattern Matching", "99.9% Accuracy"],
    benefits: ["Prevent CEO fraud", "Detect social engineering", "Build sender trust scores", "Real-time impersonation alerts"],
    link: "/services/email-dna-profiler",
    version: "V301",
    contactInfo
  },
  {
    id: "email-flow-optimizer-v302",
    title: "AI Email Flow Optimizer",
    description: "Uses reinforcement learning to continuously optimize email workflows. Reduces inbox overload by 70% through smart batching, auto-responses, and intelligent routing.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🌊",
    price: "$449/month",
    features: ["RL-Based Optimization", "Inbox Overload Reduction", "Smart Batching", "Auto-Response Detection", "Routing Optimization", "Productivity Scoring"],
    benefits: ["Reduce inbox overload by 70%", "Save 10+ hours/week", "Automate routine emails", "Improve team productivity"],
    link: "/services/email-flow-optimizer-v302",
    version: "V302",
    contactInfo
  },
  {
    id: "email-knowledge-synthesizer",
    title: "AI Email Knowledge Synthesizer",
    description: "Automatically extracts, organizes, and cross-references knowledge from all email conversations into a searchable knowledge graph with expertise mapping.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧠",
    price: "$549/month",
    features: ["Knowledge Graph Building", "Decision Extraction", "Action Item Tracking", "Expertise Mapping", "Topic Classification", "Cross-Reference Engine"],
    benefits: ["Never lose email knowledge", "Find experts instantly", "Track all decisions", "Build institutional memory"],
    link: "/services/email-knowledge-synthesizer",
    version: "V303",
    contactInfo
  },
  {
    id: "email-decision-intelligence-v304",
    title: "AI Email Decision Intelligence",
    description: "Analyzes decision-making patterns in email threads, identifies bottlenecks causing delays, and suggests optimal decision paths with impact predictions.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "⚖️",
    price: "$499/month",
    features: ["Decision Pattern Analysis", "Bottleneck Detection", "Optimal Path Suggestion", "Thread Efficiency Scoring", "Decision Velocity Tracking", "Impact Prediction"],
    benefits: ["Make decisions 3x faster", "Eliminate email bottlenecks", "Track decision ownership", "Reduce meeting dependency"],
    link: "/services/email-decision-intelligence-v304",
    version: "V304",
    contactInfo
  },
  {
    id: "email-brand-voice-engine",
    title: "AI Email Brand Voice Engine",
    description: "Ensures all outbound emails maintain consistent brand voice, tone, and messaging across the entire organization with real-time style enforcement and compliance scoring.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🎨",
    price: "$399/month",
    features: ["Brand Voice Scoring", "Banned Phrase Detection", "Tone Consistency", "Inclusive Language Check", "Auto-Correction", "Style Guide Enforcement"],
    benefits: ["100% brand consistency", "Prevent off-brand messaging", "Ensure inclusive language", "Professional email quality"],
    link: "/services/email-brand-voice-engine",
    version: "V305",
    contactInfo
  },
  // AI Services (8 new)
  {
    id: "ai-supply-chain-optimizer",
    title: "AI Supply Chain Optimization Platform",
    description: "End-to-end supply chain optimization using AI/ML for demand forecasting, inventory optimization, route planning, and supplier risk assessment across global networks.",
    category: "AI Services",
    subcategory: "Enterprise AI",
    icon: "🔗",
    price: "$1,999/month",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Risk Scoring", "Digital Twin", "Real-Time Visibility"],
    benefits: ["Reduce inventory costs by 25%", "Improve delivery accuracy to 98%", "Prevent stockouts", "Optimize logistics costs by 20%"],
    link: "/services/ai-supply-chain-optimizer",
    contactInfo
  },
  {
    id: "ai-code-generation-enterprise",
    title: "AI Code Generation Enterprise Platform",
    description: "Enterprise-grade AI code generation with multi-language support, code review integration, security scanning, and compliance checking for production-ready code.",
    category: "AI Services",
    subcategory: "Developer Tools",
    icon: "💻",
    price: "$899/month",
    features: ["Multi-Language Support", "Security Scanning", "Code Review Integration", "Compliance Checking", "Test Generation", "Documentation Auto-Gen"],
    benefits: ["10x faster development", "Reduce bugs by 60%", "Auto-generate tests", "Maintain code quality"],
    link: "/services/ai-code-generation-enterprise",
    contactInfo
  },
  {
    id: "ai-video-analytics-platform",
    title: "AI Video Analytics & Surveillance Platform",
    description: "Real-time video analytics with object detection, behavior analysis, crowd counting, license plate recognition, and anomaly detection for security and retail.",
    category: "AI Services",
    subcategory: "Computer Vision",
    icon: "📹",
    price: "$1,499/month",
    features: ["Object Detection", "Behavior Analysis", "Crowd Counting", "License Plate Recognition", "Anomaly Detection", "Real-Time Alerts"],
    benefits: ["24/7 automated surveillance", "Reduce security incidents by 80%", "Real-time threat detection", "Retail analytics insights"],
    link: "/services/ai-video-analytics-platform",
    contactInfo
  },
  {
    id: "ai-legal-research-assistant",
    title: "AI Legal Research & Case Analysis Platform",
    description: "AI-powered legal research with case law analysis, precedent matching, contract review, regulatory compliance checking, and litigation risk assessment.",
    category: "AI Services",
    subcategory: "Legal Tech",
    icon: "⚖️",
    price: "$2,499/month",
    features: ["Case Law Search", "Precedent Matching", "Contract Review", "Regulatory Compliance", "Risk Assessment", "Brief Generation"],
    benefits: ["Reduce research time by 80%", "Find relevant precedents instantly", "Automate contract review", "Assess litigation risk"],
    link: "/services/ai-legal-research-assistant",
    contactInfo
  },
  {
    id: "ai-voice-cloning-platform",
    title: "AI Voice Cloning & Synthesis Platform",
    description: "Enterprise voice cloning and synthesis for customer service, training, accessibility, and content creation with emotion control and multi-language support.",
    category: "AI Services",
    subcategory: "Voice AI",
    icon: "🎙️",
    price: "$799/month",
    features: ["Voice Cloning", "Emotion Control", "40+ Languages", "Real-Time Synthesis", "API Access", "Custom Voice Training"],
    benefits: ["Create brand voice", "Scale content production", "Improve accessibility", "24/7 voice interactions"],
    link: "/services/ai-voice-cloning-platform",
    contactInfo
  },
  {
    id: "ai-clinical-decision-support",
    title: "AI Clinical Decision Support System",
    description: "Evidence-based clinical decision support with drug interaction checking, diagnostic suggestions, treatment recommendations, and patient risk scoring.",
    category: "AI Services",
    subcategory: "Healthcare AI",
    icon: "🏥",
    price: "$3,999/month",
    features: ["Drug Interaction Check", "Diagnostic Suggestions", "Treatment Recommendations", "Risk Scoring", "Evidence Linking", "Alert System"],
    benefits: ["Reduce medical errors by 50%", "Faster diagnosis", "Evidence-based treatment", "Improved patient outcomes"],
    link: "/services/ai-clinical-decision-support",
    contactInfo
  },
  {
    id: "ai-architecture-design-assistant",
    title: "AI Architecture & Design Assistant",
    description: "AI-powered architectural design with floor plan generation, structural analysis, energy optimization, building code compliance, and 3D visualization.",
    category: "AI Services",
    subcategory: "Design AI",
    icon: "🏗️",
    price: "$1,299/month",
    features: ["Floor Plan Generation", "Structural Analysis", "Energy Optimization", "Code Compliance", "3D Visualization", "Cost Estimation"],
    benefits: ["10x faster design iterations", "Optimize energy efficiency", "Ensure code compliance", "Reduce design costs by 40%"],
    link: "/services/ai-architecture-design-assistant",
    contactInfo
  },
  {
    id: "ai-talent-acquisition-platform",
    title: "AI Talent Acquisition & Matching Platform",
    description: "Intelligent recruitment with resume parsing, candidate matching, bias detection, interview scheduling, and predictive hiring success scoring.",
    category: "AI Services",
    subcategory: "HR Tech",
    icon: "👥",
    price: "$699/month",
    features: ["Resume Parsing", "Candidate Matching", "Bias Detection", "Interview Scheduling", "Success Prediction", "Skills Assessment"],
    benefits: ["Reduce time-to-hire by 50%", "Improve hire quality by 35%", "Eliminate unconscious bias", "Predict retention rates"],
    link: "/services/ai-talent-acquisition-platform",
    contactInfo
  },
  // IT Services (6 new)
  {
    id: "it-network-operations-center",
    title: "Managed Network Operations Center (NOC)",
    description: "24/7 managed NOC with proactive monitoring, incident management, change management, capacity planning, and SLA-guaranteed uptime for enterprise networks.",
    category: "IT Services",
    subcategory: "Managed Services",
    icon: "🖥️",
    price: "$3,499/month",
    features: ["24/7 Monitoring", "Incident Management", "Change Management", "Capacity Planning", "SLA Guarantee", "Performance Reports"],
    benefits: ["99.99% network uptime", "Reduce MTTR by 70%", "Proactive issue prevention", "Expert NOC team on-demand"],
    link: "/services/it-network-operations-center",
    contactInfo
  },
  {
    id: "it-cloud-migration-factory",
    title: "Cloud Migration Factory Service",
    description: "Industrialized cloud migration with assessment, planning, execution, and optimization for migrating 100+ workloads to AWS, Azure, or GCP with zero downtime.",
    category: "IT Services",
    subcategory: "Cloud Migration",
    icon: "🏭",
    price: "$9,999/project",
    features: ["Workload Assessment", "Migration Planning", "Zero-Downtime Execution", "Cost Optimization", "Security Hardening", "Post-Migration Support"],
    benefits: ["Migrate 100+ workloads", "Zero business downtime", "Reduce costs by 30-40%", "Accelerate digital transformation"],
    link: "/services/it-cloud-migration-factory",
    contactInfo
  },
  {
    id: "it-cybersecurity-training-lab",
    title: "Cybersecurity Training & Simulation Lab",
    description: "Hands-on cybersecurity training with realistic attack simulations, capture-the-flag exercises, incident response drills, and certification preparation.",
    category: "IT Services",
    subcategory: "Security Training",
    icon: "🎓",
    price: "$1,999/month",
    features: ["Attack Simulations", "CTF Exercises", "IR Drills", "Cert Prep", "Custom Scenarios", "Skill Assessment"],
    benefits: ["Train security teams effectively", "Reduce breach risk by 60%", "Prepare for certifications", "Build incident response muscle memory"],
    link: "/services/it-cybersecurity-training-lab",
    contactInfo
  },
  {
    id: "it-data-center-modernization",
    title: "Data Center Modernization Service",
    description: "Transform legacy data centers with hyperconverged infrastructure, software-defined networking, automated operations, and hybrid cloud integration.",
    category: "IT Services",
    subcategory: "Infrastructure",
    icon: "🏢",
    price: "$14,999/project",
    features: ["HCI Implementation", "SDN Deployment", "Automation", "Hybrid Cloud", "Power Optimization", "Migration Planning"],
    benefits: ["Reduce data center costs by 40%", "Improve performance 5x", "Automate 80% of operations", "Enable hybrid flexibility"],
    link: "/services/it-data-center-modernization",
    contactInfo
  },
  {
    id: "it-managed-kubernetes-pro",
    title: "Managed Kubernetes Pro Service",
    description: "Enterprise Kubernetes management with cluster provisioning, auto-scaling, security hardening, cost optimization, and 24/7 SRE support across multi-cloud.",
    category: "IT Services",
    subcategory: "Kubernetes",
    icon: "☸️",
    price: "$2,499/month",
    features: ["Multi-Cloud K8s", "Auto-Scaling", "Security Hardening", "Cost Optimization", "24/7 SRE", "GitOps Setup"],
    benefits: ["99.99% cluster uptime", "Reduce K8s costs by 35%", "Enterprise security posture", "Focus on apps, not infrastructure"],
    link: "/services/it-managed-kubernetes-pro",
    contactInfo
  },
  {
    id: "it-unified-communications",
    title: "Unified Communications Platform",
    description: "Enterprise UCaaS with VoIP, video conferencing, team messaging, contact center, and AI-powered meeting transcription integrated with Microsoft Teams and Zoom.",
    category: "IT Services",
    subcategory: "Communications",
    icon: "📞",
    price: "$25/user/month",
    features: ["VoIP Phone System", "Video Conferencing", "Team Messaging", "Contact Center", "AI Transcription", "CRM Integration"],
    benefits: ["Reduce phone costs by 50%", "Unified team communication", "AI meeting summaries", "Professional contact center"],
    link: "/services/it-unified-communications",
    contactInfo
  },
  // Micro-SaaS (7 new)
  {
    id: "saas-social-media-analytics",
    title: "Social Media Analytics & Listening Platform",
    description: "Comprehensive social media monitoring with sentiment analysis, competitor tracking, influencer identification, campaign ROI measurement, and automated reporting.",
    category: "Micro-SaaS",
    subcategory: "Marketing",
    icon: "📱",
    price: "$79/month",
    features: ["Sentiment Analysis", "Competitor Tracking", "Influencer ID", "Campaign ROI", "Auto Reporting", "Crisis Alerts"],
    benefits: ["Track brand reputation", "Identify market trends", "Measure campaign ROI", "Respond to crises instantly"],
    link: "/services/saas-social-media-analytics",
    contactInfo
  },
  {
    id: "saas-contract-management",
    title: "Contract Lifecycle Management Platform",
    description: "End-to-end contract management with AI-powered clause extraction, obligation tracking, renewal alerts, e-signatures, and compliance monitoring.",
    category: "Micro-SaaS",
    subcategory: "Legal Tech",
    icon: "📝",
    price: "$39/user/month",
    features: ["AI Clause Extraction", "Obligation Tracking", "Renewal Alerts", "E-Signatures", "Compliance Monitor", "Template Library"],
    benefits: ["Never miss a renewal", "Reduce contract risk by 70%", "Automate clause analysis", "Streamline approvals"],
    link: "/services/saas-contract-management",
    contactInfo
  },
  {
    id: "saas-employee-engagement",
    title: "Employee Engagement & Pulse Survey Platform",
    description: "Measure and improve employee engagement with pulse surveys, sentiment analysis, action planning, recognition programs, and retention prediction.",
    category: "Micro-SaaS",
    subcategory: "HR Tech",
    icon: "💪",
    price: "$6/user/month",
    features: ["Pulse Surveys", "Sentiment Analysis", "Action Planning", "Recognition Program", "Retention Prediction", "Benchmark Data"],
    benefits: ["Improve engagement by 30%", "Reduce turnover by 25%", "Identify issues early", "Build stronger culture"],
    link: "/services/saas-employee-engagement",
    contactInfo
  },
  {
    id: "saas-inventory-optimization",
    title: "AI Inventory Optimization Platform",
    description: "AI-powered inventory management with demand forecasting, reorder point optimization, dead stock identification, and multi-warehouse coordination.",
    category: "Micro-SaaS",
    subcategory: "Operations",
    icon: "📦",
    price: "$149/month",
    features: ["Demand Forecasting", "Reorder Optimization", "Dead Stock ID", "Multi-Warehouse", "Supplier Scoring", "Auto-Replenishment"],
    benefits: ["Reduce inventory costs by 20%", "Eliminate stockouts", "Improve cash flow", "Automate replenishment"],
    link: "/services/saas-inventory-optimization",
    contactInfo
  },
  {
    id: "saas-customer-journey-mapper",
    title: "Customer Journey Mapping & Analytics",
    description: "Visualize and optimize customer journeys with touchpoint tracking, drop-off analysis, personalization triggers, and conversion optimization.",
    category: "Micro-SaaS",
    subcategory: "Customer Success",
    icon: "🗺️",
    price: "$99/month",
    features: ["Journey Visualization", "Touchpoint Tracking", "Drop-Off Analysis", "Personalization", "Conversion Optimization", "A/B Testing"],
    benefits: ["Increase conversions by 25%", "Reduce churn by 20%", "Personalize experiences", "Identify friction points"],
    link: "/services/saas-customer-journey-mapper",
    contactInfo
  },
  {
    id: "saas-proposal-cpq-engine",
    title: "CPQ (Configure-Price-Quote) Engine",
    description: "Enterprise CPQ platform with product configuration, dynamic pricing, quote generation, approval workflows, and CRM integration for complex B2B sales.",
    category: "Micro-SaaS",
    subcategory: "Sales",
    icon: "💼",
    price: "$199/month",
    features: ["Product Configuration", "Dynamic Pricing", "Quote Generation", "Approval Workflows", "CRM Integration", "Analytics"],
    benefits: ["Generate quotes in minutes", "Eliminate pricing errors", "Accelerate sales cycles", "Increase deal size by 15%"],
    link: "/services/saas-proposal-cpq-engine",
    contactInfo
  },
  {
    id: "saas-webinar-platform",
    title: "AI-Powered Webinar & Virtual Event Platform",
    description: "Host engaging webinars with AI-powered engagement features, real-time polls, Q&A management, automatic transcription, and lead scoring.",
    category: "Micro-SaaS",
    subcategory: "Marketing",
    icon: "🎥",
    price: "$59/month",
    features: ["HD Streaming", "AI Transcription", "Live Polls & Q&A", "Lead Scoring", "Replay Analytics", "CRM Sync"],
    benefits: ["Increase attendance by 40%", "Generate qualified leads", "Automate follow-ups", "Measure engagement accurately"],
    link: "/services/saas-webinar-platform",
    contactInfo
  }
];

// Add new services
services.push(...newServices);
fs.writeFileSync(jsonPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} new services. Total: ${services.length}`);

// Update servicesData.ts
const tsPath = path.join(__dirname, 'app/data/servicesData.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

const tsEntries = newServices.map(s => {
  const featuresStr = s.features.map(f => `"${f}"`).join(', ');
  const benefitsStr = (s.benefits || []).map(b => `"${b}"`).join(', ');
  return `  {
    id: "${s.id}",
    title: "${s.title}",
    description: "${s.description}",
    category: "${s.category}",
    subcategory: "${s.subcategory}",
    icon: "${s.icon}",
    price: "${s.price}",
    features: [${featuresStr}],
    benefits: [${benefitsStr}],
    link: "${s.link}",
    contactInfo: {
      mobile: "${s.contactInfo.mobile}",
      email: "${s.contactInfo.email}",
      address: "${s.contactInfo.address}"
    }
  }`;
}).join(',\n');

// Insert before closing ]; of allServices
const insertPoint = tsContent.lastIndexOf('];');
if (insertPoint !== -1) {
  const beforeInsert = tsContent.substring(0, insertPoint).trim();
  const needsComma = !beforeInsert.endsWith(',') && !beforeInsert.endsWith('[');
  const insertion = (needsComma ? ',\n' : '\n') + tsEntries + '\n';
  tsContent = tsContent.substring(0, insertPoint) + insertion + tsContent.substring(insertPoint);
}

// Add named exports
const exportEntries = newServices.map(s => 
  `export const ${s.id.replace(/-/g, '_')} = allServices.find(s => s.id === "${s.id}");`
).join('\n');

tsContent += '\n\n// V301-V305 Service Exports\n' + exportEntries + '\n';
fs.writeFileSync(tsPath, tsContent);
console.log('✅ Updated servicesData.ts');
