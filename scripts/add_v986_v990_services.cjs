const fs = require('fs');
const path = require('path');

const newServices = [
  // V986 - Voice-to-Email Intelligence (6 services)
  {
    id: "voice-to-email-transcription",
    name: "Voice-to-Email Transcription",
    category: "AI Email Intelligence",
    description: "Automatically transcribe voice messages and voicemails into searchable text with speaker identification and timestamp markers.",
    price: "$19/month",
    features: [
      "Multi-language voice recognition",
      "Speaker identification and separation",
      "Automatic punctuation and formatting",
      "Timestamp markers for easy navigation",
      "Searchable transcription archive",
      "Integration with 50+ voice platforms"
    ],
    link: "https://ziontechgroup.com/services/voice-to-email-transcription"
  },
  {
    id: "voice-intent-extraction",
    name: "Voice Intent Extraction",
    category: "AI Email Intelligence",
    description: "Extract actionable intents and commitments from voice messages using advanced NLP and sentiment analysis.",
    price: "$24/month",
    features: [
      "Intent classification (request, promise, question)",
      "Commitment extraction with deadlines",
      "Sentiment analysis for tone detection",
      "Priority scoring based on urgency",
      "Automatic task creation",
      "Follow-up reminder generation"
    ],
    link: "https://ziontechgroup.com/services/voice-intent-extraction"
  },
  {
    id: "voice-action-item-detector",
    name: "Voice Action Item Detector",
    category: "AI Email Intelligence",
    description: "Automatically detect and extract action items from voice messages with assignee identification and deadline tracking.",
    price: "$22/month",
    features: [
      "Action item extraction from speech",
      "Assignee identification and assignment",
      "Deadline detection and tracking",
      "Priority classification",
      "Integration with task management tools",
      "Automatic follow-up reminders"
    ],
    link: "https://ziontechgroup.com/services/voice-action-item-detector"
  },
  {
    id: "voice-sentiment-analyzer",
    name: "Voice Sentiment Analyzer",
    category: "AI Email Intelligence",
    description: "Analyze emotional tone and sentiment in voice messages to understand urgency, frustration, and satisfaction levels.",
    price: "$18/month",
    features: [
      "Real-time sentiment analysis",
      "Emotion detection (happy, frustrated, urgent)",
      "Tone intensity scoring",
      "Customer satisfaction indicators",
      "Escalation triggers for negative sentiment",
      "Sentiment trend tracking over time"
    ],
    link: "https://ziontechgroup.com/services/voice-sentiment-analyzer"
  },
  {
    id: "voice-urgency-detection",
    name: "Voice Urgency Detection",
    category: "AI Email Intelligence",
    description: "Detect urgency levels in voice messages using speech patterns, keywords, and tone analysis for intelligent prioritization.",
    price: "$21/month",
    features: [
      "Urgency keyword detection",
      "Speech pattern analysis",
      "Tone-based urgency scoring",
      "Time pressure indicators",
      "Priority queue integration",
      "Escalation workflow triggers"
    ],
    link: "https://ziontechgroup.com/services/voice-urgency-detection"
  },
  {
    id: "voice-summary-generator",
    name: "Voice Summary Generator",
    category: "AI Email Intelligence",
    description: "Generate concise summaries of long voice messages with key points, action items, and follow-up requirements.",
    price: "$23/month",
    features: [
      "Automatic summary generation",
      "Key point extraction",
      "Action item highlighting",
      "Follow-up requirement detection",
      "Customizable summary length",
      "Multi-language support"
    ],
    link: "https://ziontechgroup.com/services/voice-summary-generator"
  },

  // V987 - Email Signature Enrichment (6 services)
  {
    id: "signature-contact-enrichment",
    name: "Signature Contact Enrichment",
    category: "AI Email Intelligence",
    description: "Automatically enrich contact records from email signatures with phone numbers, social profiles, and company information.",
    price: "$16/month",
    features: [
      "Contact information extraction",
      "Phone number validation",
      "Social media profile linking",
      "Company information enrichment",
      "CRM auto-update",
      "Duplicate detection and merging"
    ],
    link: "https://ziontechgroup.com/services/signature-contact-enrichment"
  },
  {
    id: "signature-company-intelligence",
    name: "Signature Company Intelligence",
    category: "AI Email Intelligence",
    description: "Extract and enrich company data from email signatures including industry, size, and business context.",
    price: "$25/month",
    features: [
      "Company name extraction",
      "Industry classification",
      "Company size estimation",
      "Business context analysis",
      "Competitive intelligence",
      "Company relationship mapping"
    ],
    link: "https://ziontechgroup.com/services/signature-company-intelligence"
  },
  {
    id: "signature-role-detection",
    name: "Signature Role Detection",
    category: "AI Email Intelligence",
    description: "Detect job titles, roles, and seniority levels from email signatures for better contact segmentation and routing.",
    price: "$17/month",
    features: [
      "Job title extraction",
      "Role classification",
      "Seniority level detection",
      "Department identification",
      "Decision-maker scoring",
      "Role-based routing"
    ],
    link: "https://ziontechgroup.com/services/signature-role-detection"
  },
  {
    id: "signature-social-mapper",
    name: "Signature Social Mapper",
    category: "AI Email Intelligence",
    description: "Map and validate social media profiles from email signatures for enhanced relationship building and social selling.",
    price: "$20/month",
    features: [
      "Social profile extraction",
      "Profile validation",
      "LinkedIn integration",
      "Twitter/X profile mapping",
      "Social engagement scoring",
      "Relationship strength indicators"
    ],
    link: "https://ziontechgroup.com/services/signature-social-mapper"
  },
  {
    id: "signature-geolocation-tracker",
    name: "Signature Geolocation Tracker",
    category: "AI Email Intelligence",
    description: "Extract and track geographic locations from email signatures for regional analysis and timezone-aware communication.",
    price: "$15/month",
    features: [
      "Location extraction",
      "Timezone detection",
      "Regional clustering",
      "Geographic analytics",
      "Timezone-aware scheduling",
      "Regional compliance tracking"
    ],
    link: "https://ziontechgroup.com/services/signature-geolocation-tracker"
  },
  {
    id: "signature-completeness-scorer",
    name: "Signature Completeness Scorer",
    category: "AI Email Intelligence",
    description: "Score the completeness of email signatures and identify missing information for better contact data quality.",
    price: "$14/month",
    features: [
      "Completeness scoring",
      "Missing field detection",
      "Data quality metrics",
      "Enrichment recommendations",
      "Contact data validation",
      "Quality trend tracking"
    ],
    link: "https://ziontechgroup.com/services/signature-completeness-scorer"
  },

  // V988 - Email Search Intelligence (6 services)
  {
    id: "semantic-email-search",
    name: "Semantic Email Search",
    category: "AI Email Intelligence",
    description: "Find emails using natural language queries with semantic understanding and context-aware results.",
    price: "$29/month",
    features: [
      "Natural language queries",
      "Semantic understanding",
      "Context-aware results",
      "Concept-based search",
      "Intent recognition",
      "Relevance ranking"
    ],
    link: "https://ziontechgroup.com/services/semantic-email-search"
  },
  {
    id: "email-keyword-indexer",
    name: "Email Keyword Indexer",
    category: "AI Email Intelligence",
    description: "Automatically index and extract keywords from emails for fast full-text search and topic discovery.",
    price: "$22/month",
    features: [
      "Automatic keyword extraction",
      "Full-text indexing",
      "Topic discovery",
      "Search optimization",
      "Keyword analytics",
      "Trending topic detection"
    ],
    link: "https://ziontechgroup.com/services/email-keyword-indexer"
  },
  {
    id: "email-entity-extractor",
    name: "Email Entity Extractor",
    category: "AI Email Intelligence",
    description: "Extract and index entities like people, organizations, dates, and numbers for precise email search and filtering.",
    price: "$26/month",
    features: [
      "Named entity recognition",
      "People extraction",
      "Organization detection",
      "Date and number extraction",
      "Entity relationship mapping",
      "Faceted search support"
    ],
    link: "https://ziontechgroup.com/services/email-entity-extractor"
  },
  {
    id: "email-topic-classifier",
    name: "Email Topic Classifier",
    category: "AI Email Intelligence",
    description: "Automatically classify emails into topics and categories for organized search and filtering.",
    price: "$24/month",
    features: [
      "Multi-label classification",
      "Custom topic training",
      "Hierarchical categorization",
      "Topic trend analysis",
      "Automatic tagging",
      "Category-based filtering"
    ],
    link: "https://ziontechgroup.com/services/email-topic-classifier"
  },
  {
    id: "email-importance-scorer",
    name: "Email Importance Scorer",
    category: "AI Email Intelligence",
    description: "Score email importance for search ranking using content analysis, sender reputation, and engagement patterns.",
    price: "$21/month",
    features: [
      "Importance scoring algorithm",
      "Content analysis",
      "Sender reputation scoring",
      "Engagement pattern analysis",
      "Search result ranking",
      "Priority-based filtering"
    ],
    link: "https://ziontechgroup.com/services/email-importance-scorer"
  },
  {
    id: "email-search-analytics",
    name: "Email Search Analytics",
    category: "AI Email Intelligence",
    description: "Track and analyze email search patterns to improve search relevance and discover information gaps.",
    price: "$19/month",
    features: [
      "Search pattern tracking",
      "Query analytics",
      "Relevance feedback",
      "Information gap detection",
      "Search optimization insights",
      "User behavior analysis"
    ],
    link: "https://ziontechgroup.com/services/email-search-analytics"
  },

  // V989 - Email Productivity Dashboard (6 services)
  {
    id: "email-volume-tracker",
    name: "Email Volume Tracker",
    category: "AI Email Intelligence",
    description: "Track email volume metrics including received, sent, and response rates with trend analysis and forecasting.",
    price: "$18/month",
    features: [
      "Volume tracking",
      "Trend analysis",
      "Forecasting",
      "Peak time identification",
      "Volume alerts",
      "Historical comparison"
    ],
    link: "https://ziontechgroup.com/services/email-volume-tracker"
  },
  {
    id: "response-time-analyzer",
    name: "Response Time Analyzer",
    category: "AI Email Intelligence",
    description: "Analyze email response times with SLA tracking, performance benchmarks, and improvement recommendations.",
    price: "$23/month",
    features: [
      "Response time tracking",
      "SLA compliance monitoring",
      "Performance benchmarks",
      "Improvement recommendations",
      "Team performance comparison",
      "Response time alerts"
    ],
    link: "https://ziontechgroup.com/services/response-time-analyzer"
  },
  {
    id: "email-engagement-metrics",
    name: "Email Engagement Metrics",
    category: "AI Email Intelligence",
    description: "Measure email engagement through read rates, reply rates, and interaction patterns for productivity insights.",
    price: "$25/month",
    features: [
      "Read rate tracking",
      "Reply rate analysis",
      "Interaction patterns",
      "Engagement scoring",
      "Productivity insights",
      "Engagement trends"
    ],
    link: "https://ziontechgroup.com/services/email-engagement-metrics"
  },
  {
    id: "productivity-score-calculator",
    name: "Productivity Score Calculator",
    category: "AI Email Intelligence",
    description: "Calculate overall email productivity scores based on response times, engagement, and efficiency metrics.",
    price: "$20/month",
    features: [
      "Productivity scoring",
      "Multi-factor analysis",
      "Efficiency metrics",
      "Performance trends",
      "Goal tracking",
      "Improvement recommendations"
    ],
    link: "https://ziontechgroup.com/services/productivity-score-calculator"
  },
  {
    id: "email-trend-analyzer",
    name: "Email Trend Analyzer",
    category: "AI Email Intelligence",
    description: "Analyze email trends over time to identify patterns, seasonal variations, and productivity opportunities.",
    price: "$22/month",
    features: [
      "Trend analysis",
      "Pattern recognition",
      "Seasonal variation detection",
      "Anomaly detection",
      "Productivity opportunities",
      "Trend forecasting"
    ],
    link: "https://ziontechgroup.com/services/email-trend-analyzer"
  },
  {
    id: "productivity-insights-generator",
    name: "Productivity Insights Generator",
    category: "AI Email Intelligence",
    description: "Generate actionable insights and recommendations to improve email productivity and efficiency.",
    price: "$27/month",
    features: [
      "Insight generation",
      "Actionable recommendations",
      "Best practice suggestions",
      "Efficiency improvements",
      "Workflow optimization",
      "Performance coaching"
    ],
    link: "https://ziontechgroup.com/services/productivity-insights-generator"
  },

  // V990 - Email Collaboration Hub (6 services)
  {
    id: "email-collaboration-detector",
    name: "Email Collaboration Detector",
    category: "AI Email Intelligence",
    description: "Detect emails requiring team collaboration and identify optimal team members for coordination.",
    price: "$24/month",
    features: [
      "Collaboration detection",
      "Team member identification",
      "Coordination scoring",
      "Collaboration routing",
      "Team availability checking",
      "Collaboration history"
    ],
    link: "https://ziontechgroup.com/services/email-collaboration-detector"
  },
  {
    id: "email-mention-tracker",
    name: "Email Mention Tracker",
    category: "AI Email Intelligence",
    description: "Track @mentions in emails for instant notifications and team coordination.",
    price: "$17/month",
    features: [
      "@mention detection",
      "Instant notifications",
      "Mention analytics",
      "Team coordination",
      "Mention history",
      "Response tracking"
    ],
    link: "https://ziontechgroup.com/services/email-mention-tracker"
  },
  {
    id: "email-assignment-manager",
    name: "Email Assignment Manager",
    category: "AI Email Intelligence",
    description: "Manage email assignments with task tracking, deadline monitoring, and workload balancing.",
    price: "$28/month",
    features: [
      "Task assignment",
      "Deadline tracking",
      "Workload balancing",
      "Assignment analytics",
      "Status monitoring",
      "Escalation workflows"
    ],
    link: "https://ziontechgroup.com/services/email-assignment-manager"
  },
  {
    id: "internal-comments-system",
    name: "Internal Comments System",
    category: "AI Email Intelligence",
    description: "Add internal comments and notes to emails for team discussion without replying to external senders.",
    price: "$19/month",
    features: [
      "Internal commenting",
      "Team discussions",
      "Private notes",
      "Comment threading",
      "Notification system",
      "Comment analytics"
    ],
    link: "https://ziontechgroup.com/services/internal-comments-system"
  },
  {
    id: "coordination-signal-analyzer",
    name: "Coordination Signal Analyzer",
    category: "AI Email Intelligence",
    description: "Analyze coordination signals in emails to identify dependencies, handoffs, and collaboration requirements.",
    price: "$23/month",
    features: [
      "Coordination signal detection",
      "Dependency mapping",
      "Handoff identification",
      "Collaboration requirements",
      "Workflow optimization",
      "Coordination analytics"
    ],
    link: "https://ziontechgroup.com/services/coordination-signal-analyzer"
  },
  {
    id: "team-workflow-generator",
    name: "Team Workflow Generator",
    category: "AI Email Intelligence",
    description: "Generate team workflows from email conversations with automatic task creation and assignment.",
    price: "$30/month",
    features: [
      "Workflow generation",
      "Task creation",
      "Automatic assignment",
      "Workflow templates",
      "Progress tracking",
      "Workflow analytics"
    ],
    link: "https://ziontechgroup.com/services/team-workflow-generator"
  }
];

// Read existing services
const servicesPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
let services = [];

try {
  const existing = fs.readFileSync(servicesPath, 'utf8');
  services = JSON.parse(existing);
  console.log(`Loaded ${services.length} existing services`);
} catch (e) {
  console.log('No existing services file, starting fresh');
}

// Add new services
let added = 0;
for (const service of newServices) {
  const exists = services.some(s => s.id === service.id);
  if (!exists) {
    services.push(service);
    added++;
  }
}

// Write back
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`Added ${added} new services. Total: ${services.length}`);
