const fs = require('fs');
const path = require('path');

const servicesDataPath = path.join(__dirname, 'app/data/servicesData.json');
const servicesData = JSON.parse(fs.readFileSync(servicesDataPath, 'utf8'));

const newServices = [
  // V681 - Email Sentiment Trend Analyzer (5 services)
  {
    "id": "sentiment-trend-analyzer",
    "title": "Email Sentiment Trend Analyzer",
    "description": "Analyze sentiment trends across email conversations to identify patterns, predict communication issues, and improve team morale.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": [
      "Historical sentiment tracking",
      "Trend analysis and prediction",
      "Team morale monitoring",
      "Communication health scoring",
      "Sentiment-based alerts"
    ],
    "benefits": [
      "Early detection of team morale issues",
      "Proactive communication improvement",
      "Data-driven team management",
      "Reduced employee turnover"
    ],
    "target_audience": "HR managers, team leads, executives",
    "use_cases": [
      "Monitor team morale over time",
      "Identify communication breakdowns",
      "Track sentiment during organizational changes"
    ]
  },
  {
    "id": "sentiment-trend-advanced",
    "title": "Advanced Sentiment Trend Analytics",
    "description": "Advanced sentiment analysis with predictive modeling, cross-team comparisons, and integration with HR systems.",
    "category": "email-intelligence",
    "price": "$699/month",
    "features": [
      "Predictive sentiment modeling",
      "Cross-team sentiment comparisons",
      "HR system integration",
      "Custom alert thresholds",
      "Executive dashboards"
    ],
    "benefits": [
      "Predict team issues before they escalate",
      "Benchmark team health across organization",
      "Automated HR workflows"
    ],
    "target_audience": "Enterprise HR, CHROs",
    "use_cases": [
      "Organization-wide morale tracking",
      "Predictive workforce analytics"
    ]
  },
  {
    "id": "sentiment-alert-system",
    "title": "Sentiment Alert System",
    "description": "Real-time sentiment monitoring with automated alerts for critical communication issues and team morale drops.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": [
      "Real-time sentiment monitoring",
      "Automated email/Slack alerts",
      "Custom alert rules",
      "Alert escalation workflows"
    ],
    "benefits": [
      "Immediate issue detection",
      "Proactive intervention",
      "Reduced response time"
    ],
    "target_audience": "Team leads, managers",
    "use_cases": [
      "Monitor high-stress projects",
      "Track sentiment during crises"
    ]
  },
  {
    "id": "team-morale-dashboard",
    "title": "Team Morale Dashboard",
    "description": "Comprehensive dashboard for tracking team morale, communication health, and sentiment trends with actionable insights.",
    "category": "email-intelligence",
    "price": "$499/month",
    "features": [
      "Real-time morale scoring",
      "Trend visualization",
      "Team comparisons",
      "Actionable recommendations",
      "Historical analysis"
    ],
    "benefits": [
      "Data-driven team management",
      "Early issue detection",
      "Improved team engagement"
    ],
    "target_audience": "Managers, team leads",
    "use_cases": [
      "Weekly team health reviews",
      "Performance reviews"
    ]
  },
  {
    "id": "sentiment-prediction-engine",
    "title": "Sentiment Prediction Engine",
    "description": "AI-powered sentiment prediction using machine learning to forecast communication trends and team morale changes.",
    "category": "email-intelligence",
    "price": "$799/month",
    "features": [
      "ML-based sentiment prediction",
      "Trend forecasting",
      "Risk assessment",
      "Scenario modeling"
    ],
    "benefits": [
      "Predict team issues 2-4 weeks ahead",
      "Proactive resource planning",
      "Risk mitigation"
    ],
    "target_audience": "Executives, HR directors",
    "use_cases": [
      "Workforce planning",
      "Organizational change management"
    ]
  },

  // V682 - Email Workflow Automation Engine (5 services)
  {
    "id": "workflow-automation-engine",
    "title": "Email Workflow Automation Engine",
    "description": "Detect actionable workflows from emails and auto-generate workflow diagrams with execution tracking and bottleneck identification.",
    "category": "email-intelligence",
    "price": "$599/month",
    "features": [
      "Workflow detection from emails",
      "Auto-generated diagrams",
      "Execution tracking",
      "Bottleneck identification",
      "Workflow optimization"
    ],
    "benefits": [
      "Automate manual processes",
      "Reduce workflow errors",
      "Improve process efficiency"
    ],
    "target_audience": "Operations managers, process owners",
    "use_cases": [
      "Approval workflows",
      "Onboarding processes",
      "Project workflows"
    ]
  },
  {
    "id": "workflow-optimization-suite",
    "title": "Workflow Optimization Suite",
    "description": "Advanced workflow optimization with parallelization suggestions, approval streamlining, and smart escalation rules.",
    "category": "email-intelligence",
    "price": "$899/month",
    "features": [
      "Parallelization suggestions",
      "Approval streamlining",
      "Smart escalation",
      "Auto-assignment rules",
      "Performance analytics"
    ],
    "benefits": [
      "Reduce workflow cycle time by 40%",
      "Eliminate bottlenecks",
      "Improve compliance"
    ],
    "target_audience": "Operations directors, COOs",
    "use_cases": [
      "Complex approval chains",
      "Multi-department workflows"
    ]
  },
  {
    "id": "workflow-diagram-generator",
    "title": "Workflow Diagram Generator",
    "description": "Auto-generate professional workflow diagrams in Mermaid, ASCII, or structured text format from email conversations.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": [
      "Mermaid.js diagrams",
      "ASCII art diagrams",
      "Structured text output",
      "Export to PNG/SVG"
    ],
    "benefits": [
      "Visual process documentation",
      "Easy stakeholder communication",
      "Quick process updates"
    ],
    "target_audience": "Business analysts, process engineers",
    "use_cases": [
      "Process documentation",
      "Training materials"
    ]
  },
  {
    "id": "workflow-execution-tracker",
    "title": "Workflow Execution Tracker",
    "description": "Track workflow execution in real-time with progress monitoring, status updates, and automated notifications.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": [
      "Real-time progress tracking",
      "Status monitoring",
      "Automated notifications",
      "Execution logs"
    ],
    "benefits": [
      "Visibility into workflow status",
      "Proactive issue detection",
      "Accountability tracking"
    ],
    "target_audience": "Project managers, team leads",
    "use_cases": [
      "Track approval workflows",
      "Monitor onboarding progress"
    ]
  },
  {
    "id": "workflow-bottleneck-analyzer",
    "title": "Workflow Bottleneck Analyzer",
    "description": "Identify and analyze workflow bottlenecks with root cause analysis and optimization recommendations.",
    "category": "email-intelligence",
    "price": "$549/month",
    "features": [
      "Bottleneck detection",
      "Root cause analysis",
      "Optimization recommendations",
      "Performance metrics"
    ],
    "benefits": [
      "Identify process inefficiencies",
      "Reduce cycle times",
      "Improve throughput"
    ],
    "target_audience": "Operations managers, process improvement teams",
    "use_cases": [
      "Process improvement initiatives",
      "Lean management"
    ]
  },

  // V683 - Email Context Memory System (5 services)
  {
    "id": "context-memory-system",
    "title": "Email Context Memory System",
    "description": "Extract and store key context from emails with relationship graphs, context switching detection, and intelligent recall.",
    "category": "email-intelligence",
    "price": "$499/month",
    "features": [
      "Context extraction",
      "Relationship graphs",
      "Context switch detection",
      "Context recall",
      "Missing context identification"
    ],
    "benefits": [
      "Never lose important context",
      "Faster follow-up responses",
      "Improved communication continuity"
    ],
    "target_audience": "Sales teams, account managers, consultants",
    "use_cases": [
      "Client relationship management",
      "Project handoffs",
      "Meeting preparation"
    ]
  },
  {
    "id": "context-graph-builder",
    "title": "Context Graph Builder",
    "description": "Build comprehensive relationship graphs between people, projects, and commitments from email communications.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": [
      "Entity relationship mapping",
      "Interactive graph visualization",
      "Relationship strength scoring",
      "Connection discovery"
    ],
    "benefits": [
      "Understand organizational relationships",
      "Identify key stakeholders",
      "Improve collaboration"
    ],
    "target_audience": "Sales leaders, HR, consultants",
    "use_cases": [
      "Stakeholder mapping",
      "Organizational network analysis"
    ]
  },
  {
    "id": "context-recall-assistant",
    "title": "Context Recall Assistant",
    "description": "AI-powered context recall for follow-up emails with relevant past conversations, commitments, and deadlines.",
    "category": "email-intelligence",
    "price": "$349/month",
    "features": [
      "Intelligent context recall",
      "Relevant email suggestions",
      "Commitment reminders",
      "Deadline tracking"
    ],
    "benefits": [
      "Faster email responses",
      "Improved follow-up quality",
      "Reduced missed commitments"
    ],
    "target_audience": "Busy professionals, account managers",
    "use_cases": [
      "Client follow-ups",
      "Meeting preparation"
    ]
  },
  {
    "id": "context-switch-detector",
    "title": "Context Switch Detector",
    "description": "Detect topic changes in email conversations and maintain separate context threads for better organization.",
    "category": "email-intelligence",
    "price": "$249/month",
    "features": [
      "Topic change detection",
      "Thread separation",
      "Context organization",
      "Conversation tracking"
    ],
    "benefits": [
      "Better conversation organization",
      "Reduced context confusion",
      "Improved focus"
    ],
    "target_audience": "Project managers, consultants",
    "use_cases": [
      "Multi-topic email threads",
      "Complex project communications"
    ]
  },
  {
    "id": "missing-context-identifier",
    "title": "Missing Context Identifier",
    "description": "Identify missing context in email conversations including unresolved commitments, orphaned deadlines, and missing attachments.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": [
      "Missing context detection",
      "Unresolved commitment alerts",
      "Orphaned deadline warnings",
      "Missing attachment detection"
    ],
    "benefits": [
      "Prevent dropped balls",
      "Improve follow-through",
      "Reduce miscommunication"
    ],
    "target_audience": "Project managers, team leads",
    "use_cases": [
      "Project coordination",
      "Team communications"
    ]
  },

  // V684 - Email Priority Decay Tracker (5 services)
  {
    "id": "priority-decay-tracker",
    "title": "Email Priority Decay Tracker",
    "description": "Track how email priority changes over time with urgency decay detection, forgotten item identification, and priority reassessment.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": [
      "Priority change tracking",
      "Urgency decay detection",
      "Forgotten item identification",
      "Priority half-life calculation",
      "Reassessment suggestions"
    ],
    "benefits": [
      "Never miss critical deadlines",
      "Prevent priority inflation",
      "Improve time management"
    ],
    "target_audience": "Busy executives, project managers",
    "use_cases": [
      "Email triage",
      "Priority management",
      "Deadline tracking"
    ]
  },
  {
    "id": "urgency-decay-analyzer",
    "title": "Urgency Decay Analyzer",
    "description": "Analyze how urgency decays over time with decay rate calculations, status tracking, and recommendations.",
    "category": "email-intelligence",
    "price": "$349/month",
    "features": [
      "Decay rate analysis",
      "Status tracking",
      "Recommendation engine",
      "Historical analysis"
    ],
    "benefits": [
      "Understand urgency patterns",
      "Optimize response timing",
      "Improve prioritization"
    ],
    "target_audience": "Managers, team leads",
    "use_cases": [
      "Email prioritization",
      "Workflow optimization"
    ]
  },
  {
    "id": "forgotten-item-finder",
    "title": "Forgotten Item Finder",
    "description": "Identify forgotten high-priority emails that have been abandoned beyond threshold hours with risk level ranking.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": [
      "Forgotten item detection",
      "Risk level ranking",
      "Automated reminders",
      "Priority resurrection"
    ],
    "benefits": [
      "Never forget important emails",
      "Reduce missed deadlines",
      "Improve follow-through"
    ],
    "target_audience": "Busy professionals, executives",
    "use_cases": [
      "Email management",
      "Task prioritization"
    ]
  },
  {
    "id": "priority-halflife-calculator",
    "title": "Priority Half-Life Calculator",
    "description": "Calculate priority half-life using exponential decay regression to understand how quickly priorities lose urgency.",
    "category": "email-intelligence",
    "price": "$249/month",
    "features": [
      "Half-life calculation",
      "Exponential decay modeling",
      "Statistical analysis",
      "Trend visualization"
    ],
    "benefits": [
      "Understand priority dynamics",
      "Optimize response strategies",
      "Data-driven prioritization"
    ],
    "target_audience": "Analysts, managers",
    "use_cases": [
      "Priority analysis",
      "Workflow optimization"
    ]
  },
  {
    "id": "priority-reassessment-advisor",
    "title": "Priority Reassessment Advisor",
    "description": "Multi-factor priority reassessment with decay analysis, volatility tracking, idle time detection, and actionable suggestions.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": [
      "Multi-factor analysis",
      "Decay tracking",
      "Volatility analysis",
      "Idle time detection",
      "Actionable suggestions"
    ],
    "benefits": [
      "Dynamic priority adjustment",
      "Improved decision making",
      "Reduced priority conflicts"
    ],
    "target_audience": "Project managers, team leads",
    "use_cases": [
      "Sprint planning",
      "Resource allocation"
    ]
  },

  // V685 - Email Thread Summarizer Pro (5 services)
  {
    "id": "thread-summarizer-pro",
    "title": "Email Thread Summarizer Pro",
    "description": "Generate comprehensive summaries of email threads with key points extraction, action item tracking, and decision logging.",
    "category": "email-intelligence",
    "price": "$549/month",
    "features": [
      "Thread summarization",
      "Key points extraction",
      "Action item tracking",
      "Decision logging",
      "Timeline reconstruction",
      "Participant analysis"
    ],
    "benefits": [
      "Quick thread understanding",
      "Never miss action items",
      "Track decisions",
      "Save time reading long threads"
    ],
    "target_audience": "Busy executives, project managers, consultants",
    "use_cases": [
      "Catch up on long threads",
      "Meeting preparation",
      "Project handoffs",
      "Decision tracking"
    ]
  },
  {
    "id": "executive-summary-generator",
    "title": "Executive Summary Generator",
    "description": "Generate executive-level summaries of email threads with key decisions, action items, and critical information highlighted.",
    "category": "email-intelligence",
    "price": "$449/month",
    "features": [
      "Executive summaries",
      "Decision highlighting",
      "Action item extraction",
      "Critical info emphasis"
    ],
    "benefits": [
      "Quick executive briefings",
      "Focused information",
      "Time savings"
    ],
    "target_audience": "Executives, senior managers",
    "use_cases": [
      "Executive briefings",
      "Board preparation"
    ]
  },
  {
    "id": "conversation-flow-analyzer",
    "title": "Conversation Flow Analyzer",
    "description": "Analyze email conversation flow patterns with response time tracking, phase detection, and engagement analysis.",
    "category": "email-intelligence",
    "price": "$399/month",
    "features": [
      "Flow pattern analysis",
      "Response time tracking",
      "Phase detection",
      "Engagement analysis"
    ],
    "benefits": [
      "Understand communication dynamics",
      "Identify bottlenecks",
      "Improve response times"
    ],
    "target_audience": "Team leads, communication analysts",
    "use_cases": [
      "Team communication analysis",
      "Process improvement"
    ]
  },
  {
    "id": "thread-timeline-builder",
    "title": "Thread Timeline Builder",
    "description": "Build interactive timelines of email threads with decision points, action items, and key events highlighted.",
    "category": "email-intelligence",
    "price": "$349/month",
    "features": [
      "Interactive timelines",
      "Event highlighting",
      "Decision point marking",
      "Action item tracking"
    ],
    "benefits": [
      "Visual thread understanding",
      "Quick event location",
      "Improved context"
    ],
    "target_audience": "Project managers, analysts",
    "use_cases": [
      "Project documentation",
      "Audit trails"
    ]
  },
  {
    "id": "participant-role-analyzer",
    "title": "Participant Role Analyzer",
    "description": "Analyze participant roles in email threads with engagement scoring, key participant identification, and interaction patterns.",
    "category": "email-intelligence",
    "price": "$299/month",
    "features": [
      "Role analysis",
      "Engagement scoring",
      "Key participant ID",
      "Interaction patterns"
    ],
    "benefits": [
      "Understand team dynamics",
      "Identify key stakeholders",
      "Improve collaboration"
    ],
    "target_audience": "Team leads, HR, consultants",
    "use_cases": [
      "Team analysis",
      "Stakeholder mapping"
    ]
  }
];

// Add new services to existing data
servicesData.push(...newServices);

// Write back to file
fs.writeFileSync(servicesDataPath, JSON.stringify(servicesData, null, 2));

console.log(`✅ Added ${newServices.length} new services (V681-V685)`);
console.log(`📊 Total services: ${servicesData.length}`);
