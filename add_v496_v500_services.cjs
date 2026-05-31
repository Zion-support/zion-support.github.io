const fs = require('fs');
const path = require('path');

const newServices = [
  // V496 - Negotiation Coach (5 services)
  {
    id: "v496-email-negotiation-coach",
    name: "AI Email Negotiation Coach",
    category: "AI Services",
    description: "Real-time negotiation strategy engine that analyzes email threads to provide tactical advice, leverage points, and optimal counter-offers for deal-making success.",
    features: ["Deal stage detection", "Leverage point identification", "Counter-offer generation", "BATNA analysis", "Concession tracking", "Win-win detection", "Deadline pressure analysis", "Historical pattern matching"],
    price: "$129/month",
    benefits: ["Close 35% more deals", "Increase average deal size by 22%", "Reduce negotiation time by 50%", "Data-driven counter-offers"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v496-deal-stage-tracker",
    name: "AI Deal Stage Tracker",
    category: "Micro SaaS",
    description: "Automatically detects and tracks deal stages from email conversations, providing real-time pipeline visibility and stage transition alerts.",
    features: ["Auto stage detection", "Pipeline visualization", "Stage transition alerts", "Velocity tracking"],
    price: "$79/month",
    benefits: ["Real-time pipeline visibility", "Accurate forecasting", "Never miss stage transitions"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v496-leverage-analyzer",
    name: "AI Negotiation Leverage Analyzer",
    category: "AI Services",
    description: "Identifies leverage points in negotiations including time pressure, alternatives, information asymmetry, and relationship strength.",
    features: ["6 leverage types", "Real-time scoring", "Strategic recommendations", "Competitor positioning"],
    price: "$99/month",
    benefits: ["Maximize negotiation power", "Identify hidden leverage", "Strategic advantage"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v496-counter-offer-generator",
    name: "AI Counter-Offer Generator",
    category: "Micro SaaS",
    description: "Generates optimal counter-offers based on deal context, market data, and historical win patterns with anchoring strategies.",
    features: ["Anchoring strategies", "Market-based pricing", "Conditional concessions", "Win probability scoring"],
    price: "$89/month",
    benefits: ["Optimal counter-offers", "Data-driven pricing", "Higher close rates"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v496-batna-analyzer",
    name: "AI BATNA Analysis Tool",
    category: "AI Services",
    description: "Evaluates Best Alternative to Negotiated Agreement (BATNA) for both parties, helping you understand walk-away points and negotiation boundaries.",
    features: ["BATNA scoring", "Walk-away analysis", "Alternative evaluation", "Reservation price calculation"],
    price: "$69/month",
    benefits: ["Know your walk-away point", "Stronger negotiation position", "Better deal outcomes"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },

  // V497 - Burnout Prevention (5 services)
  {
    id: "v497-email-burnout-prevention",
    name: "AI Email Burnout Prevention Engine",
    category: "AI Services",
    description: "Detects workload stress from email patterns and provides proactive interventions including delegation suggestions, time-blocking, and wellness alerts.",
    features: ["Email volume analysis", "Stress indicator detection", "Delegation recommendations", "Focus time protection", "Workload balancing", "Wellness check-ins", "Meeting overload detection", "Auto-triage"],
    price: "$99/month",
    benefits: ["Reduce burnout by 60%", "Recover 10+ hours/week", "Improve work-life balance", "Prevent employee turnover"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v497-workload-balancer",
    name: "AI Workload Balancer",
    category: "Micro SaaS",
    description: "Distributes email workload across team members based on expertise, capacity, and current stress levels for optimal team performance.",
    features: ["Team capacity mapping", "Smart delegation", "Load balancing", "Expertise matching"],
    price: "$79/month",
    benefits: ["Balanced team workload", "Prevent individual burnout", "Optimal resource allocation"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v497-focus-time-protector",
    name: "AI Focus Time Protector",
    category: "Micro SaaS",
    description: "Automatically blocks focus time on calendars and batches email notifications to protect deep work sessions.",
    features: ["Calendar blocking", "Notification batching", "Interruption filtering", "Focus scoring"],
    price: "$59/month",
    benefits: ["4+ hours of daily focus time", "3x productivity increase", "Reduced context switching"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v497-stress-detector",
    name: "AI Email Stress Detector",
    category: "AI Services",
    description: "Detects stress indicators in email patterns including after-hours work, response pressure, and overload signals with proactive interventions.",
    features: ["Stress pattern detection", "After-hours monitoring", "Response pressure tracking", "Wellness alerts"],
    price: "$69/month",
    benefits: ["Early burnout detection", "Proactive interventions", "Healthier work culture"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v497-delegation-recommender",
    name: "AI Delegation Recommender",
    category: "Micro SaaS",
    description: "Recommends optimal delegation targets for emails based on team expertise, current workload, and development opportunities.",
    features: ["Expertise matching", "Capacity analysis", "Development tracking", "Delegation scoring"],
    price: "$49/month",
    benefits: ["Smart delegation", "Team development", "Load distribution"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },

  // V498 - Revenue Attribution (5 services)
  {
    id: "v498-email-revenue-attribution",
    name: "AI Email Revenue Attribution Engine",
    category: "AI Services",
    description: "Links email conversations to revenue outcomes, tracks deal velocity, and identifies high-value communication patterns for sales optimization.",
    features: ["Revenue-linked tracking", "Deal velocity measurement", "Communication ROI scoring", "Pipeline attribution", "CLV correlation", "Revenue forecasting", "Win/loss analysis", "High-value ID"],
    price: "$149/month",
    benefits: ["Attribute revenue to emails", "Identify winning patterns", "Forecast revenue accurately", "Optimize sales communication"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v498-deal-velocity-tracker",
    name: "AI Deal Velocity Tracker",
    category: "Micro SaaS",
    description: "Tracks how quickly deals move through pipeline stages based on email communication patterns and identifies acceleration opportunities.",
    features: ["Velocity scoring", "Stage timing", "Acceleration alerts", "Bottleneck detection"],
    price: "$89/month",
    benefits: ["Faster deal cycles", "Identify bottlenecks", "Accelerate revenue"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v498-buying-signal-detector",
    name: "AI Buying Signal Detector",
    category: "AI Services",
    description: "Detects 9 types of buying signals in emails including intent, budget confirmation, decision-maker involvement, and timeline commitment.",
    features: ["9 signal types", "Real-time alerts", "Signal scoring", "CRM integration"],
    price: "$99/month",
    benefits: ["Never miss buying signals", "Prioritize hot leads", "Increase conversion rates"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v498-win-probability-calculator",
    name: "AI Win Probability Calculator",
    category: "AI Services",
    description: "Calculates real-time win probability for deals based on email signals, deal stage, and historical patterns with actionable recommendations.",
    features: ["Probability scoring", "Signal analysis", "Historical patterns", "Improvement suggestions"],
    price: "$79/month",
    benefits: ["Accurate forecasting", "Focus on winnable deals", "Data-driven decisions"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v498-churn-risk-detector",
    name: "AI Churn Risk Detector",
    category: "AI Services",
    description: "Detects churn risk signals in customer emails and triggers proactive retention workflows before accounts are lost.",
    features: ["Churn signal detection", "Risk scoring", "Retention workflows", "Revenue-at-risk alerts"],
    price: "$109/month",
    benefits: ["Prevent customer churn", "Save at-risk revenue", "Proactive retention"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },

  // V499 - Cross-Cultural Adapter (5 services)
  {
    id: "v499-email-cross-cultural-adapter",
    name: "AI Email Cross-Cultural Adapter",
    category: "AI Services",
    description: "Adapts email tone, formality, and phrasing based on the recipient's cultural context, language, and business etiquette norms for global communication.",
    features: ["Cultural context detection", "Formality adaptation (5 levels)", "Greeting localization", "Etiquette guidance", "Time zone awareness", "Holiday awareness", "Style matching", "Taboo avoidance"],
    price: "$119/month",
    benefits: ["Avoid cultural missteps", "Build global relationships", "Increase international deal close rate by 40%", "Professional global communication"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v499-cultural-etiquette-guide",
    name: "AI Cultural Etiquette Guide",
    category: "Micro SaaS",
    description: "Provides real-time cultural etiquette guidance for 50+ countries including greetings, formality, taboo topics, and business norms.",
    features: ["50+ country profiles", "Real-time guidance", "Etiquette alerts", "Business norms"],
    price: "$59/month",
    benefits: ["Cultural confidence", "Avoid embarrassing mistakes", "Build trust globally"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v499-formality-adapter",
    name: "AI Email Formality Adapter",
    category: "Micro SaaS",
    description: "Automatically adjusts email formality level from very casual to very formal based on recipient relationship and cultural context.",
    features: ["5 formality levels", "Relationship tracking", "Context-aware", "Auto-adaptation"],
    price: "$49/month",
    benefits: ["Always appropriate tone", "Build rapport faster", "Professional consistency"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v499-global-timezone-scheduler",
    name: "AI Global Timezone Scheduler",
    category: "Micro SaaS",
    description: "Intelligently schedules meetings and sends emails at optimal times for recipients across multiple time zones with holiday awareness.",
    features: ["Multi-timezone optimization", "Holiday awareness", "Business hours detection", "Optimal send timing"],
    price: "$69/month",
    benefits: ["Respect global schedules", "Higher open rates", "Better meeting attendance"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v499-communication-style-matcher",
    name: "AI Communication Style Matcher",
    category: "AI Services",
    description: "Matches your communication style to the recipient's preferred style (direct vs indirect, high-context vs low-context) for better rapport.",
    features: ["Style detection", "Auto-adaptation", "Directness calibration", "Context matching"],
    price: "$79/month",
    benefits: ["Better rapport", "Clearer communication", "Stronger relationships"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },

  // V500 - Autonomous Agent (5 services)
  {
    id: "v500-email-autonomous-agent",
    name: "AI Email Autonomous Agent",
    category: "AI Services",
    description: "Fully autonomous email handling agent with decision-making authority, self-improvement capabilities, and multi-engine orchestration for zero-touch email management.",
    features: ["Autonomous triage", "Multi-engine orchestration", "Self-learning", "Decision confidence scoring", "Human-in-the-loop escalation", "Outcome tracking", "Cross-engine fusion", "Workflow execution"],
    price: "$199/month",
    benefits: ["Zero-touch email management", "90% auto-resolution rate", "Continuous self-improvement", "Reclaim 15+ hours/week"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v500-smart-email-triage",
    name: "AI Smart Email Triage",
    category: "Micro SaaS",
    description: "Automatically categorizes emails into 11 categories (spam, urgent, sales, support, etc.) and routes them to appropriate actions.",
    features: ["11 email categories", "Auto-routing", "Priority scoring", "Action mapping"],
    price: "$69/month",
    benefits: ["Instant email categorization", "Smart routing", "Never miss urgent emails"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v500-self-learning-email-ai",
    name: "AI Self-Learning Email System",
    category: "AI Services",
    description: "Email AI that continuously learns from your feedback and decisions, improving accuracy and personalization over time.",
    features: ["Feedback learning", "Pattern recognition", "Personalization", "Accuracy improvement"],
    price: "$129/month",
    benefits: ["Gets smarter every day", "Personalized responses", "99% accuracy over time"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v500-email-workflow-orchestrator",
    name: "AI Email Workflow Orchestrator",
    category: "Micro SaaS",
    description: "Orchestrates complex email workflows across multiple engines, automatically selecting the right tools for each email type.",
    features: ["Multi-engine routing", "Workflow automation", "Engine selection", "Pipeline management"],
    price: "$99/month",
    benefits: ["Optimal engine selection", "Automated workflows", "Maximum efficiency"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  },
  {
    id: "v500-escalation-intelligence",
    name: "AI Escalation Intelligence",
    category: "AI Services",
    description: "Intelligently determines which emails need human attention and which can be auto-resolved, with confidence scoring and escalation routing.",
    features: ["Confidence scoring", "Smart escalation", "Human-in-the-loop", "Routing optimization"],
    price: "$89/month",
    benefits: ["Focus on what matters", "Auto-resolve 90% of emails", "Smart escalation paths"],
    contactInfo: { phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown DE 19709" }
  }
];

// Read existing services
const jsonPath = path.join(__dirname, 'app/data/servicesData.json');
let existing = [];
try { existing = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch(e) {}

const existingIds = new Set(existing.filter(s => s && s.id).map(s => s.id));
let added = 0;
for (const svc of newServices) {
  if (!existingIds.has(svc.id)) { existing.push(svc); added++; }
}

// Clean any entries without id
existing = existing.filter(s => s && s.id);

fs.writeFileSync(jsonPath, JSON.stringify(existing, null, 2));
console.log(`Added ${added} services (Total: ${existing.length})`);
