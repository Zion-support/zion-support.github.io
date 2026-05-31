// Add V516-V520 services
const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // V516 - Sentiment Evolution Tracker
  { id: "sentiment-evolution-basic", name: "Sentiment Evolution Basic", description: "Track sentiment changes across email threads with 5 emotion levels and trend detection.", category: "email-intelligence", price: "$79/mo", features: ["5 emotion levels", "Trend detection", "Volatility tracking", "Momentum scoring", "Thread analysis"] },
  { id: "sentiment-evolution-pro", name: "Sentiment Evolution Pro", description: "Advanced sentiment tracking with trajectory prediction, volatility analysis, and emotion heatmap visualization.", category: "email-intelligence", price: "$149/mo", features: ["All Basic features", "Trajectory prediction", "Emotion heatmap", "Volatility alerts", "Historical trends"] },
  { id: "sentiment-evolution-enterprise", name: "Sentiment Evolution Enterprise", description: "Enterprise sentiment tracking with real-time dashboards, multi-thread correlation, and AI-powered insights.", category: "email-intelligence", price: "$299/mo", features: ["All Pro features", "Real-time dashboards", "Multi-thread correlation", "AI insights", "Custom reports"] },
  { id: "emotion-trajectory-predictor", name: "Emotion Trajectory Predictor", description: "Predict the emotional direction of email conversations using temporal sentiment analysis.", category: "email-intelligence", price: "$99/mo", features: ["Trajectory prediction", "24h forecasting", "Trend classification", "Confidence scoring"] },
  { id: "sentiment-volatility-monitor", name: "Sentiment Volatility Monitor", description: "Detect volatile email threads that may escalate with volatility scoring and early warning alerts.", category: "email-intelligence", price: "$69/mo", features: ["Volatility scoring", "Early warnings", "Escalation prediction", "Thread stability analysis"] },

  // V517 - Stakeholder Influence Mapper
  { id: "stakeholder-mapper-basic", name: "Stakeholder Mapper Basic", description: "Identify stakeholder roles and influence levels from email conversations.", category: "email-intelligence", price: "$99/mo", features: ["7 stakeholder roles", "Influence scoring", "Role detection", "Network mapping", "Basic visualization"] },
  { id: "stakeholder-mapper-pro", name: "Stakeholder Mapper Pro", description: "Advanced stakeholder analysis with influence paths, gatekeeper identification, and relationship strength scoring.", category: "email-intelligence", price: "$199/mo", features: ["All Basic features", "Influence paths", "Gatekeeper detection", "Relationship strength", "Decision flow mapping"] },
  { id: "stakeholder-mapper-enterprise", name: "Stakeholder Mapper Enterprise", description: "Enterprise stakeholder intelligence with organizational chart generation and strategic positioning analysis.", category: "email-intelligence", price: "$399/mo", features: ["All Pro features", "Org chart generation", "Strategic positioning", "Political mapping", "Executive dashboards"] },
  { id: "influence-path-analyzer", name: "Influence Path Analyzer", description: "Map influence paths between stakeholders to identify optimal communication routes for deal acceleration.", category: "email-intelligence", price: "$129/mo", features: ["Path mapping", "Communication routing", "Bottleneck detection", "Influence optimization"] },
  { id: "decision-maker-identifier", name: "Decision Maker Identifier", description: "Identify key decision-makers in email threads with authority scoring and seniority detection.", category: "email-intelligence", price: "$89/mo", features: ["Decision-maker detection", "Authority scoring", "Seniority analysis", "Approval chain mapping"] },

  // V518 - Contract Intelligence
  { id: "contract-intelligence-basic", name: "Contract Intelligence Basic", description: "Extract contract terms, payments, SLAs, and deadlines from email discussions.", category: "email-intelligence", price: "$149/mo", features: ["8 contract elements", "Term extraction", "Obligation tracking", "Deadline detection", "Value calculation"] },
  { id: "contract-intelligence-pro", name: "Contract Intelligence Pro", description: "Advanced contract analysis with risk factor identification, obligation management, and auto-calendar integration.", category: "email-intelligence", price: "$299/mo", features: ["All Basic features", "Risk analysis", "Obligation management", "Calendar integration", "Compliance checking"] },
  { id: "contract-intelligence-enterprise", name: "Contract Intelligence Enterprise", description: "Enterprise contract intelligence with clause library, amendment tracking, and legal review automation.", category: "email-intelligence", price: "$499/mo", features: ["All Pro features", "Clause library", "Amendment tracking", "Legal automation", "Contract lifecycle"] },
  { id: "contract-risk-scanner", name: "Contract Risk Scanner", description: "Scan contracts for risk factors including missing clauses, tight deadlines, and unfavorable terms.", category: "email-intelligence", price: "$179/mo", features: ["Risk scoring", "Missing clause detection", "Deadline alerts", "Unfavorable term flags"] },
  { id: "obligation-tracker", name: "Contract Obligation Tracker", description: "Track and manage contract obligations with deadline reminders, responsible party assignment, and status tracking.", category: "email-intelligence", price: "$99/mo", features: ["Obligation tracking", "Deadline reminders", "Party assignment", "Status management", "Penalty tracking"] },

  // V519 - Meeting Scheduler AI
  { id: "meeting-scheduler-basic", name: "Meeting Scheduler Basic", description: "Detect scheduling intent from emails and propose optimal meeting times.", category: "email-intelligence", price: "$89/mo", features: ["Intent detection", "8 meeting types", "Time slot proposals", "Duration extraction", "Basic scheduling"] },
  { id: "meeting-scheduler-pro", name: "Meeting Scheduler Pro", description: "Advanced meeting scheduling with multi-timezone support, conflict detection, and calendar integration.", category: "email-intelligence", price: "$169/mo", features: ["All Basic features", "Multi-timezone", "Conflict detection", "Calendar sync", "Attendee preferences"] },
  { id: "meeting-scheduler-enterprise", name: "Meeting Scheduler Enterprise", description: "Enterprise scheduling with room booking, equipment reservation, and meeting analytics.", category: "email-intelligence", price: "$329/mo", features: ["All Pro features", "Room booking", "Equipment reservation", "Meeting analytics", "Admin controls"] },
  { id: "timezone-optimizer", name: "Meeting Timezone Optimizer", description: "Find optimal meeting times across multiple timezones with fairness scoring and attendee preference matching.", category: "email-intelligence", price: "$79/mo", features: ["Multi-timezone", "Fairness scoring", "Preference matching", "Time conversion"] },
  { id: "meeting-conflict-resolver", name: "Meeting Conflict Resolver", description: "Detect and resolve scheduling conflicts with alternative time proposals and priority-based resolution.", category: "email-intelligence", price: "$69/mo", features: ["Conflict detection", "Alternative proposals", "Priority resolution", "Auto-reschedule"] },

  // V520 - Knowledge Base Auto-Builder
  { id: "kb-auto-builder-basic", name: "Knowledge Base Auto-Builder Basic", description: "Convert email Q&A threads into searchable knowledge base articles.", category: "email-intelligence", price: "$119/mo", features: ["Q&A extraction", "6 article types", "Auto-categorization", "Tag generation", "Basic search"] },
  { id: "kb-auto-builder-pro", name: "Knowledge Base Auto-Builder Pro", description: "Advanced KB building with content quality scoring, SEO optimization, and multi-format export.", category: "email-intelligence", price: "$229/mo", features: ["All Basic features", "Quality scoring", "SEO optimization", "Multi-format export", "Version control"] },
  { id: "kb-auto-builder-enterprise", name: "Knowledge Base Auto-Builder Enterprise", description: "Enterprise KB with AI-powered content curation, user feedback integration, and analytics dashboards.", category: "email-intelligence", price: "$449/mo", features: ["All Pro features", "AI curation", "Feedback integration", "Analytics dashboards", "Custom branding"] },
  { id: "faq-generator", name: "FAQ Generator from Emails", description: "Automatically generate FAQ articles from email Q&A patterns with categorization and search optimization.", category: "email-intelligence", price: "$89/mo", features: ["FAQ generation", "Auto-categorization", "Search optimization", "Popularity ranking"] },
  { id: "troubleshooting-kb-builder", name: "Troubleshooting KB Builder", description: "Build troubleshooting knowledge base from email support threads with solution matching and step-by-step guides.", category: "email-intelligence", price: "$149/mo", features: ["Solution matching", "Step-by-step guides", "Error code mapping", "Self-service portal"] },
];

// Add new services
newServices.forEach(service => {
  if (!servicesData.find(s => s.id === service.id)) {
    servicesData.push(service);
  }
});

// Save updated services
fs.writeFileSync(servicesPath, JSON.stringify(servicesData, null, 2));
console.log(`✅ Added ${newServices.length} services. Total: ${servicesData.length} services`);
