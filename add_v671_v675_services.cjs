const fs = require('fs');
const path = require('path');

const servicesDataPath = path.join(__dirname, 'app', 'data', 'servicesData.json');
const servicesData = JSON.parse(fs.readFileSync(servicesDataPath, 'utf8'));

const newServices = [
  // V671: Learning & Development (5 services)
  {
    id: 'skill-gap-analysis',
    title: 'Skill Gap Analysis',
    description: 'Automatically detect skill gaps from email communications and recommend personalized learning paths.',
    category: 'email-intelligence',
    price: '$599/month',
    features: ['Skill gap detection', 'Learning path generation', 'Progress tracking', 'Training recommendations'],
    badge: 'V671'
  },
  {
    id: 'knowledge-sharing-analytics',
    title: 'Knowledge Sharing Analytics',
    description: 'Track and analyze knowledge sharing patterns across your organization to optimize learning culture.',
    category: 'email-intelligence',
    price: '$799/month',
    features: ['Knowledge flow mapping', 'Expert identification', 'Sharing impact analysis', 'Collaboration insights'],
    badge: 'V671'
  },
  {
    id: 'training-needs-identification',
    title: 'Training Needs Identification',
    description: 'Identify training needs from email context and recommend appropriate learning resources.',
    category: 'email-intelligence',
    price: '$699/month',
    features: ['Training need detection', 'Resource recommendations', 'Priority scoring', 'Budget planning'],
    badge: 'V671'
  },
  {
    id: 'learning-opportunity-extraction',
    title: 'Learning Opportunity Extraction',
    description: 'Extract learning opportunities from daily communications and create actionable development plans.',
    category: 'email-intelligence',
    price: '$649/month',
    features: ['Opportunity detection', 'Context analysis', 'Development planning', 'ROI tracking'],
    badge: 'V671'
  },
  {
    id: 'professional-development-tracking',
    title: 'Professional Development Tracking',
    description: 'Track professional development progress and identify growth opportunities from email interactions.',
    category: 'email-intelligence',
    price: '$749/month',
    features: ['Progress monitoring', 'Goal setting', 'Achievement tracking', 'Career pathing'],
    badge: 'V671'
  },

  // V672: Decision Tracking (5 services)
  {
    id: 'decision-detection-system',
    title: 'Decision Detection System',
    description: 'Automatically detect and classify decisions made in email communications with full context preservation.',
    category: 'email-intelligence',
    price: '$899/month',
    features: ['Decision detection', 'Classification', 'Context preservation', 'Audit trail'],
    badge: 'V672'
  },
  {
    id: 'stakeholder-alignment-verification',
    title: 'Stakeholder Alignment Verification',
    description: 'Verify stakeholder alignment on decisions and identify misalignments before implementation.',
    category: 'email-intelligence',
    price: '$999/month',
    features: ['Alignment scoring', 'Misalignment detection', 'Consensus building', 'Communication tracking'],
    badge: 'V672'
  },
  {
    id: 'decision-audit-trail',
    title: 'Decision Audit Trail',
    description: 'Generate comprehensive audit trails for all decisions with full traceability and accountability.',
    category: 'email-intelligence',
    price: '$1,099/month',
    features: ['Complete audit trail', 'Decision history', 'Accountability tracking', 'Compliance reporting'],
    badge: 'V672'
  },
  {
    id: 'action-item-extraction',
    title: 'Action Item Extraction',
    description: 'Extract action items from decisions and track completion with automated follow-ups.',
    category: 'email-intelligence',
    price: '$799/month',
    features: ['Action extraction', 'Assignment tracking', 'Deadline monitoring', 'Completion verification'],
    badge: 'V672'
  },
  {
    id: 'decision-impact-assessment',
    title: 'Decision Impact Assessment',
    description: 'Assess the impact of decisions over time and measure outcomes against objectives.',
    category: 'email-intelligence',
    price: '$1,199/month',
    features: ['Impact measurement', 'Outcome tracking', 'ROI analysis', 'Success metrics'],
    badge: 'V672'
  },

  // V673: Customer Success (5 services)
  {
    id: 'customer-health-scoring',
    title: 'Customer Health Scoring',
    description: 'Calculate customer health scores from email interactions to predict retention and identify at-risk accounts.',
    category: 'email-intelligence',
    price: '$1,299/month',
    features: ['Health scoring', 'Trend analysis', 'Risk prediction', 'Intervention alerts'],
    badge: 'V673'
  },
  {
    id: 'churn-risk-detection',
    title: 'Churn Risk Detection',
    description: 'Detect churn risk signals early and generate proactive retention strategies.',
    category: 'email-intelligence',
    price: '$1,499/month',
    features: ['Churn signal detection', 'Risk scoring', 'Retention strategies', 'Intervention planning'],
    badge: 'V673'
  },
  {
    id: 'expansion-opportunity-identification',
    title: 'Expansion Opportunity Identification',
    description: 'Identify upsell and cross-sell opportunities from customer communications.',
    category: 'email-intelligence',
    price: '$1,399/month',
    features: ['Opportunity detection', 'Revenue potential', 'Timing optimization', 'Success probability'],
    badge: 'V673'
  },
  {
    id: 'customer-engagement-analytics',
    title: 'Customer Engagement Analytics',
    description: 'Track customer engagement levels and identify patterns that drive success.',
    category: 'email-intelligence',
    price: '$1,199/month',
    features: ['Engagement tracking', 'Pattern analysis', 'Success correlation', 'Optimization insights'],
    badge: 'V673'
  },
  {
    id: 'proactive-intervention-recommendations',
    title: 'Proactive Intervention Recommendations',
    description: 'Generate proactive intervention recommendations based on customer health and engagement data.',
    category: 'email-intelligence',
    price: '$1,599/month',
    features: ['Intervention recommendations', 'Priority scoring', 'Action planning', 'Outcome tracking'],
    badge: 'V673'
  },

  // V674: Resource Allocation (5 services)
  {
    id: 'workload-analysis',
    title: 'Workload Analysis',
    description: 'Analyze team member workloads from email patterns to identify overallocation and underutilization.',
    category: 'email-intelligence',
    price: '$1,099/month',
    features: ['Workload detection', 'Capacity analysis', 'Utilization scoring', 'Trend tracking'],
    badge: 'V674'
  },
  {
    id: 'resource-rebalancing-recommendations',
    title: 'Resource Rebalancing Recommendations',
    description: 'Generate intelligent recommendations for rebalancing team resources to optimize efficiency.',
    category: 'email-intelligence',
    price: '$1,299/month',
    features: ['Rebalancing recommendations', 'Transfer planning', 'Priority optimization', 'Impact analysis'],
    badge: 'V674'
  },
  {
    id: 'team-efficiency-optimization',
    title: 'Team Efficiency Optimization',
    description: 'Optimize team efficiency by analyzing workload distribution and capacity utilization.',
    category: 'email-intelligence',
    price: '$1,399/month',
    features: ['Efficiency scoring', 'Optimization insights', 'Performance tracking', 'Improvement planning'],
    badge: 'V674'
  },
  {
    id: 'capacity-planning',
    title: 'Capacity Planning',
    description: 'Plan team capacity based on historical workload patterns and future demand projections.',
    category: 'email-intelligence',
    price: '$1,499/month',
    features: ['Capacity forecasting', 'Demand planning', 'Resource allocation', 'Scenario modeling'],
    badge: 'V674'
  },
  {
    id: 'burnout-prevention-alerts',
    title: 'Burnout Prevention Alerts',
    description: 'Detect early signs of team burnout and generate preventive interventions.',
    category: 'email-intelligence',
    price: '$1,199/month',
    features: ['Burnout detection', 'Early warning alerts', 'Prevention strategies', 'Wellness tracking'],
    badge: 'V674'
  },

  // V675: Strategic Initiative Tracking (5 services)
  {
    id: 'strategic-initiative-detection',
    title: 'Strategic Initiative Detection',
    description: 'Automatically detect strategic initiatives from executive communications and track progress.',
    category: 'email-intelligence',
    price: '$1,799/month',
    features: ['Initiative detection', 'Progress tracking', 'Milestone monitoring', 'Status reporting'],
    badge: 'V675'
  },
  {
    id: 'okr-extraction-tracking',
    title: 'OKR Extraction & Tracking',
    description: 'Extract Objectives and Key Results from communications and track achievement progress.',
    category: 'email-intelligence',
    price: '$1,899/month',
    features: ['OKR extraction', 'Progress tracking', 'Achievement scoring', 'Alignment verification'],
    badge: 'V675'
  },
  {
    id: 'strategic-alignment-verification',
    title: 'Strategic Alignment Verification',
    description: 'Verify strategic alignment across communications and ensure consistent goal pursuit.',
    category: 'email-intelligence',
    price: '$1,999/month',
    features: ['Alignment scoring', 'Consistency checking', 'Misalignment alerts', 'Goal tracking'],
    badge: 'V675'
  },
  {
    id: 'executive-communication-analysis',
    title: 'Executive Communication Analysis',
    description: 'Analyze executive communications to extract strategic priorities and business goals.',
    category: 'email-intelligence',
    price: '$2,099/month',
    features: ['Priority extraction', 'Goal identification', 'Strategic insights', 'Trend analysis'],
    badge: 'V675'
  },
  {
    id: 'strategic-progress-dashboard',
    title: 'Strategic Progress Dashboard',
    description: 'Generate comprehensive dashboards showing strategic initiative progress and OKR achievement.',
    category: 'email-intelligence',
    price: '$2,199/month',
    features: ['Progress dashboards', 'OKR visualization', 'Milestone tracking', 'Executive reporting'],
    badge: 'V675'
  }
];

servicesData.push(...newServices);
fs.writeFileSync(servicesDataPath, JSON.stringify(servicesData, null, 2));
console.log(`Added ${newServices.length} services. Total: ${servicesData.length}`);
