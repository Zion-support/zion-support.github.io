export type AILabToolStatus = 'live' | 'experimental' | 'planned';

export type AILabToolId =
  | 'ai-component-health-checker'
  | 'ai-content-idea-generator'
  | 'ai-experiment-designer'
  | 'ai-governance-risk-advisor'
  | 'ai-site-evolution-advisor'
  | 'ai-workflow-status-dashboard'
  | 'autonomous-ab-test-calculator'
  | 'autonomous-accessibility-auditor'
  | 'autonomous-agent-skill-orchestrator'
  | 'autonomous-ai-experience-studio'
  | 'autonomous-api-doc-generator'
  | 'autonomous-api-profiler'
  | 'autonomous-backlog-prioritizer'
  | 'autonomous-code-quality-playground'
  | 'autonomous-code-review-assistant'
  | 'autonomous-competitive-intelligence'
  | 'autonomous-compliance-auditor'
  | 'autonomous-conversion-copilot'
  | 'autonomous-data-pipeline-visualizer'
  | 'autonomous-deploy-optimizer'
  | 'autonomous-email-sequence-designer'
  | 'autonomous-experiment-priority-engine'
  | 'autonomous-feature-gap-analyzer'
  | 'autonomous-feature-prioritizer'
  | 'autonomous-funnel-orchestrator'
  | 'autonomous-growth-loop-designer'
  | 'autonomous-incident-commander'
  | 'autonomous-landing-page-ab-simulator'
  | 'autonomous-media-prompt-studio'
  | 'autonomous-meeting-analyzer'
  | 'autonomous-opportunity-radar'
  | 'autonomous-pricing-optimizer'
  | 'autonomous-project-estimator'
  | 'autonomous-prompt-cost-calculator'
  | 'autonomous-rag-knowledge-workspace'
  | 'autonomous-rate-limit-capacity-planner'
  | 'autonomous-retention-playbook'
  | 'autonomous-revenue-forecast-studio'
  | 'autonomous-roi-calculator'
  | 'autonomous-security-scanner'
  | 'autonomous-seo-audit-agent'
  | 'autonomous-tech-debt-tracker'
  | 'autonomous-tech-stack-auditor'
  | 'autonomous-ui-a11y-scorecard'
  | 'autonomous-user-persona-builder'
  | 'autonomous-vendor-replacement-advisor'
  | 'build-failure-explainer'
  | 'deploy-drift-dashboard'
  | 'deployment-readiness-console'
  | 'dynamic-api-monitoring'
  | 'idea-to-feature-blueprint'
  | 'implementation-readiness-checker'
  | 'roi-ops-scorecard'
  | 'rollout-blueprint'
  | 'autonomous-db-schema-designer'
  | 'autonomous-churn-predictor'
  | 'autonomous-content-calendar'
  | 'autonomous-support-ticket-analyzer'
  | 'autonomous-slo-dashboard'
  | 'autonomous-architecture-reviewer'
  | 'autonomous-gdpr-compliance-checker'
  | 'autonomous-contract-analyzer'
  | 'autonomous-roi-opportunity-radar'
  | 'autonomous-knowledge-base-auditor'
  | 'autonomous-incident-timeline-builder'
  | 'autonomous-api-test-generator'
  | 'autonomous-competitor-analysis-engine';


export interface AILabTool {
  id: AILabToolId;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: AILabToolStatus;
  href: string;
  badge?: string;
}

export const AI_LAB_TOOLS: AILabTool[] = [
  {
    id: 'ai-site-evolution-advisor',
    slug: 'ai-site-evolution-advisor',
    title: 'AI Site Evolution Advisor',
    shortDescription:
      'Visualize how Zion’s autonomous agents are improving ziontechgroup.com and what they will optimize next.',
    category: 'Platform Intelligence',
    status: 'live',
    href: '/ai-lab/ai-site-evolution-advisor',
    badge: 'New',
  },
  {
    id: 'idea-to-feature-blueprint',
    slug: 'idea-to-feature-blueprint',
    title: 'AI Idea-to-Feature Blueprint',
    shortDescription:
      'Describe an idea and see how Zion’s autonomous platform would turn it into a live feature on the site.',
    category: 'Product Ideation',
    status: 'experimental',
    href: '/ai-lab/idea-to-feature-blueprint',
    badge: 'Experimental',
  },
  {
    id: 'ai-rollout-blueprint',
    slug: 'rollout-blueprint',
    title: 'AI Rollout Blueprint Generator',
    shortDescription:
      'Answer a few questions about your team and goals to generate a phased AI rollout plan powered by Zion modules.',
    category: 'Rollout Design',
    status: 'live',
    href: '/ai-lab/rollout-blueprint',
    badge: 'Live',
  },
  {
    id: 'ai-roi-ops-scorecard',
    slug: 'roi-ops-scorecard',
    title: 'AI ROI & Ops Scorecard',
    shortDescription:
      'Estimate impact across revenue, operations, and experience, then see where AI will likely move the needle first.',
    category: 'Impact Modeling',
    status: 'live',
    href: '/ai-lab/roi-ops-scorecard',
    badge: 'Live',
  },
  {
    id: 'deployment-readiness-console',
    slug: 'deployment-readiness-console',
    title: 'Deployment Readiness Console',
    shortDescription:
      'Inspect automation, UX, and link-health checks that gate autonomous deploys for ziontechgroup.com.',
    category: 'Platform Intelligence',
    status: 'live',
    href: '/ai-lab/deployment-readiness-console',
    badge: 'New',
  },
  {
    id: 'build-failure-explainer',
    slug: 'build-failure-explainer',
    title: 'AI Build Failure Explainer',
    shortDescription:
      'Paste a build log and get a deterministic, safe root-cause runbook for the most common failure classes.',
    category: 'DevOps Intelligence',
    status: 'live',
    href: '/ai-lab/build-failure-explainer',
    badge: 'New',
  },
  {
    id: 'implementation-readiness-checker',
    slug: 'implementation-readiness-checker',
    title: 'AI Implementation Readiness Checker',
    shortDescription:
      'Answer a few questions about your team, data, integrations, and governance to generate a readiness score and rollout path.',
    category: 'Rollout Readiness',
    status: 'live',
    href: '/ai-lab/implementation-readiness-checker',
    badge: 'New',
  },
  {
    id: 'ai-governance-risk-advisor',
    slug: 'ai-governance-risk-advisor',
    title: 'AI Governance & Risk Advisor',
    shortDescription:
      'For regulated teams: assess risk, audit readiness, and recommended governance modules before scaling AI use cases.',
    category: 'Governance & Risk',
    status: 'live',
    href: '/ai-lab/ai-governance-risk-advisor',
    badge: 'For regulated teams',
  },
  {
    id: 'autonomous-opportunity-radar',
    slug: 'autonomous-opportunity-radar',
    title: 'Autonomous Opportunity Radar',
    shortDescription:
      'Map your current metrics and constraints to a prioritized roadmap of AI automations, growth loops, and autonomous product upgrades.',
    category: 'Autonomous Strategy',
    status: 'live',
    href: '/ai-lab/autonomous-opportunity-radar',
    badge: 'New',
  },
  {
    id: 'autonomous-growth-loop-designer',
    slug: 'autonomous-growth-loop-designer',
    title: 'Autonomous Growth Loop Designer',
    shortDescription:
      'Design AI-driven acquisition, activation, and retention loops with projected impact, confidence, and automation readiness.',
    category: 'Growth Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-growth-loop-designer',
    badge: 'New',
  },
  {
    id: 'ai-experiment-designer',
    slug: 'ai-experiment-designer',
    title: 'AI Experiment Designer',
    shortDescription:
      'Define goals, guardrails, rollout cohorts, and success metrics to launch safer AI experiments faster.',
    category: 'Experimentation',
    status: 'live',
    href: '/ai-lab/ai-experiment-designer',
    badge: 'New',
  },
  {
    id: 'autonomous-ai-experience-studio',
    slug: 'autonomous-ai-experience-studio',
    title: 'Autonomous AI Experience Studio',
    shortDescription:
      'Prototype in-browser AI experiences with live confidence, autonomy, and rollout safety scoring.',
    category: 'In-Browser Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-ai-experience-studio',
    badge: 'New',
  },
  {
    id: 'autonomous-deploy-optimizer',
    slug: 'autonomous-deploy-optimizer',
    title: 'Autonomous Deploy Optimizer',
    shortDescription:
      'Model release risk, quality-gate coverage, and recovery playbooks to choose the safest high-velocity deploy path.',
    category: 'Deployment Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-deploy-optimizer',
    badge: 'New',
  },
  {
    id: 'autonomous-backlog-prioritizer',
    slug: 'autonomous-backlog-prioritizer',
    title: 'Autonomous Backlog Prioritizer',
    shortDescription:
      'Convert raw AI ideas into a weighted execution queue using impact, effort, confidence, and dependency risk scoring.',
    category: 'Delivery Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-backlog-prioritizer',
    badge: 'New',
  },
  {
    id: 'autonomous-funnel-orchestrator',
    slug: 'autonomous-funnel-orchestrator',
    title: 'Autonomous Funnel Orchestrator',
    shortDescription:
      'Design smarter CTA, social proof, and funnel actions with weighted impact and confidence scoring for faster growth decisions.',
    category: 'Conversion Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-funnel-orchestrator',
    badge: 'New',
  },
  {
    id: 'autonomous-conversion-copilot',
    slug: 'autonomous-conversion-copilot',
    title: 'Autonomous Conversion Copilot',
    shortDescription:
      'Prioritize conversion actions with weighted lift, confidence, and execution effort scoring for faster, safer growth decisions.',
    category: 'Conversion Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-conversion-copilot',
    badge: 'New',
  },
  {
    id: 'autonomous-retention-playbook',
    slug: 'autonomous-retention-playbook',
    title: 'Autonomous Retention Playbook',
    shortDescription:
      'Model churn risk and sequence lifecycle actions with confidence scoring to improve expansion and retention outcomes.',
    category: 'Retention Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-retention-playbook',
    badge: 'New',
  },
  {
    id: 'autonomous-incident-commander',
    slug: 'autonomous-incident-commander',
    title: 'Autonomous Incident Commander',
    shortDescription:
      'Run incident triage simulations with AI-suggested owner assignment, communication timelines, and rollback readiness.',
    category: 'Reliability Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-incident-commander',
    badge: 'New',
  },
  {
    id: 'autonomous-rag-knowledge-workspace',
    slug: 'autonomous-rag-knowledge-workspace',
    title: 'Autonomous RAG Knowledge Workspace',
    shortDescription:
      'Model document retrieval quality with deterministic citation confidence, source diversity, and answer safety scoring.',
    category: 'Knowledge Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-rag-knowledge-workspace',
    badge: 'New',
  },
  {
    id: 'autonomous-media-prompt-studio',
    slug: 'autonomous-media-prompt-studio',
    title: 'Autonomous Media Prompt Studio',
    shortDescription:
      'Design image and video prompt systems with style coherence, safety guardrails, and launch-readiness scoring.',
    category: 'Multimodal Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-media-prompt-studio',
    badge: 'New',
  },
  {
    id: 'autonomous-revenue-forecast-studio',
    slug: 'autonomous-revenue-forecast-studio',
    title: 'Autonomous Revenue Forecast Studio',
    shortDescription:
      'Model pipeline strength, automation coverage, and sales velocity to forecast deterministic revenue outcomes.',
    category: 'Revenue Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-revenue-forecast-studio',
    badge: 'New',
  },
  {
    id: 'autonomous-agent-skill-orchestrator',
    slug: 'autonomous-agent-skill-orchestrator',
    title: 'Autonomous Agent Skill Orchestrator',
    shortDescription:
      'Plan and score OpenClaw worker skill mixes, cadence, and risk tiers to accelerate autonomous app improvement safely.',
    category: 'OpenClaw Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-agent-skill-orchestrator',
    badge: 'New',
  },
  {
    id: 'autonomous-experiment-priority-engine',
    slug: 'autonomous-experiment-priority-engine',
    title: 'Autonomous Experiment Priority Engine',
    shortDescription:
      'Prioritize AI experiments by expected lift, confidence, and execution risk to accelerate autonomous app improvements.',
    category: 'Experiment Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-experiment-priority-engine',
    badge: 'New',
  },
  {
    id: 'deploy-drift-dashboard',
    slug: 'deploy-drift-dashboard',
    title: 'Deploy Drift Dashboard',
    shortDescription:
      'Track main-vs-live drift, latest deploy status, and route health to keep autonomous releases reliable.',
    category: 'Deployment Intelligence',
    status: 'live',
    href: '/ai-lab/deploy-drift-dashboard',
    badge: 'New',
  },
  {
    id: 'autonomous-seo-audit-agent',
    slug: 'autonomous-seo-audit-agent',
    title: 'Autonomous SEO Audit Agent',
    shortDescription:
      'Run AI-powered SEO audits with instant scoring for meta tags, content, performance, and actionable recommendations.',
    category: 'SEO Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-seo-audit-agent',
    badge: 'New',
  },
  {
    id: 'dynamic-api-monitoring',
    slug: 'dynamic-api-monitoring',
    title: 'Dynamic API Monitoring',
    shortDescription:
      'Real-time performance tracking across QA/staging/prod environments with automated alerting and optimization suggestions.',
    category: 'Platform Intelligence',
    status: 'live',
    href: '/ai-lab/dynamic-api-monitoring',
    badge: 'New',
  },
  {
    id: 'ai-content-idea-generator',
    slug: 'ai-content-idea-generator',
    title: 'AI Content Idea Generator',
    shortDescription:
      'Generate AI-powered content ideas for blogs, videos, social media, and more based on your topic or industry.',
    category: 'Content Intelligence',
    status: 'live',
    href: '/ai-lab/ai-content-idea-generator',
    badge: 'New',
  },
  {
    id: 'ai-component-health-checker',
    slug: 'ai-component-health-checker',
    title: 'AI Component Health Checker',
    shortDescription:
      'Real-time health monitoring for Zion autonomous AI components with uptime tracking and incident alerts.',
    category: 'Platform Intelligence',
    status: 'live',
    href: '/ai-lab/ai-component-health-checker',
    badge: 'New',
  },
  {
    id: 'ai-workflow-status-dashboard',
    slug: 'ai-workflow-status-dashboard',
    title: 'AI Workflow Status Dashboard',
    shortDescription:
      'Real-time status board for all autonomous workflows tracking audits, quality gates, and deployment health.',
    category: 'Platform Operations',
    status: 'live',
    href: '/ai-lab/ai-workflow-status-dashboard',
    badge: 'Live',
  },
  {
    id: 'autonomous-competitive-intelligence',
    slug: 'autonomous-competitive-intelligence',
    title: 'Autonomous Competitive Intelligence',
    shortDescription:
      'Scan, profile, and score your competitive landscape. Simulate rival strategies and surface defensible positioning.',
    category: 'Market Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-competitive-intelligence',
    badge: 'New',
  },
  {
    id: 'autonomous-feature-gap-analyzer',
    slug: 'autonomous-feature-gap-analyzer',
    title: 'Autonomous Feature Gap Analyzer',
    shortDescription:
      'Detect missing high-value features competitors lack. Prioritize by ROI, market demand, and implementation effort.',
    category: 'Market Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-feature-gap-analyzer',
    badge: 'New',
  },
  {
    id: 'autonomous-landing-page-ab-simulator',
    slug: 'autonomous-landing-page-ab-simulator',
    title: 'Autonomous Landing Page A/B Simulator',
    shortDescription:
      'Generate 3 conversion-optimized hero variants scored by proven frameworks (AIDA, PAS, Value Prop Canvas). Zero cost.',
    category: 'Conversion Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-landing-page-ab-simulator',
    badge: 'New',
  },
  {
    id: 'autonomous-code-quality-playground',
    slug: 'autonomous-code-quality-playground',
    title: 'Autonomous Code Quality Playground',
    shortDescription:
      'Paste any code snippet and get instant analysis. Security, performance, style violations, and refactoring suggestions with A-F grading.',
    category: 'Code Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-code-quality-playground',
    badge: 'New',
  },
  {
    id: 'autonomous-roi-calculator',
    slug: 'autonomous-roi-calculator',
    title: 'Autonomous ROI Calculator',
    shortDescription:
      'Project your annual savings, payback period, and ROI from automating workflows with Zion tools. Includes what-if scenarios and shareable reports.',
    category: 'Business Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-roi-calculator',
    badge: 'New',
  },
  {
    id: 'autonomous-tech-stack-auditor',
    slug: 'autonomous-tech-stack-auditor',
    title: 'Autonomous Tech Stack Auditor',
    shortDescription:
      'Scan your tech stack for outdated dependencies, security risks, and modernization opportunities. Get a prioritized upgrade roadmap.',
    category: 'DevOps Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-tech-stack-auditor',
    badge: 'New',
  },
  {
    id: 'autonomous-project-estimator',
    slug: 'autonomous-project-estimator',
    title: 'Autonomous Project Estimator',
    shortDescription:
      'Instant project proposal generator: phases, costs, risks, timelines, and team allocation for any project scope. Compare MVP/Standard/Enterprise scenarios.',
    category: 'Business Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-project-estimator',
    badge: 'New',
  },
  {
    id: 'autonomous-vendor-replacement-advisor',
    slug: 'autonomous-vendor-replacement-advisor',
    title: 'Autonomous Vendor Replacement Advisor',
    shortDescription:
      'Compare any current vendor against Zion AI alternatives. Side-by-side feature matrix, cost savings analysis, and migration recommendations.',
    category: 'Cost Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-vendor-replacement-advisor',
    badge: 'New',
  },
  {
    id: 'autonomous-compliance-auditor',
    slug: 'autonomous-compliance-auditor',
    title: 'Autonomous Compliance Auditor',
    shortDescription:
      'Assess GDPR, HIPAA, and SOC 2 readiness with a 15-question diagnostic. Get gap analysis, severity-ranked remediation steps, and Zion tool recommendations.',
    category: 'Governance & Risk',
    status: 'live',
    href: '/ai-lab/autonomous-compliance-auditor',
    badge: 'New',
  },
  {
    id: 'autonomous-security-scanner',
    slug: 'autonomous-security-scanner',
    title: 'Autonomous Security Posture Scanner',
    shortDescription:
      'Scan code, config files, and HTTP headers for vulnerabilities. Detects exposed secrets, XSS, SQLi, missing headers, outdated deps. Maps to OWASP Top 10.',
    category: 'Security & Compliance',
    status: 'live',
    href: '/ai-lab/autonomous-security-scanner',
    badge: 'New',
  },
  {
    id: 'autonomous-accessibility-auditor',
    slug: 'autonomous-accessibility-auditor',
    title: 'Autonomous WCAG 2.2 Auditor',
    shortDescription:
      'Paste HTML/JSX/CSS to scan for WCAG 2.2 violations. Detects missing alt text, contrast issues, keyboard gaps, ARIA problems, heading hierarchy, and form label issues. Get before/after fix snippets.',
    category: 'Security & Compliance',
    status: 'live',
    href: '/ai-lab/autonomous-accessibility-auditor',
    badge: 'New',
  },
  {
    id: 'autonomous-api-profiler',
    slug: 'autonomous-api-profiler',
    title: 'Autonomous API Response Time Profiler',
    shortDescription:
      'Measure API endpoint latency, payload sizes, and status codes. Takes samples, computes p50/p95/p99 percentiles, and flags slow endpoints. All client-side via fetch + Performance API.',
    category: 'DevOps Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-api-profiler',
    badge: 'New',
  },
  {
    id: 'autonomous-data-pipeline-visualizer',
    slug: 'autonomous-data-pipeline-visualizer',
    title: 'Autonomous Data Pipeline Visualizer',
    shortDescription:
      'Paste JSON, CSV, or SQL to auto-generate data pipeline diagrams, data dictionaries, and schema analysis. Renders interactive flow charts with entity relationships.',
    category: 'Data Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-data-pipeline-visualizer',
    badge: 'New',
  },
  {
    id: 'autonomous-meeting-analyzer',
    slug: 'autonomous-meeting-analyzer',
    title: 'Autonomous Meeting Productivity Analyzer',
    shortDescription:
      'Paste meeting transcripts or notes to extract action items, track filler words, compute productivity scores, and get improvement recommendations.',
    category: 'AI Productivity',
    status: 'live',
    href: '/ai-lab/autonomous-meeting-analyzer',
    badge: 'New',
  },
  {
    id: 'autonomous-code-review-assistant',
    slug: 'autonomous-code-review-assistant',
    title: 'Autonomous Code Review Assistant',
    shortDescription:
      'Paste code snippets or PR diffs to get instant security, performance, and style analysis. Detects vulnerabilities, bugs, anti-patterns, and provides fix suggestions.',
    category: 'Code Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-code-review-assistant',
    badge: 'New',
  },
  {
    id: 'autonomous-prompt-cost-calculator',
    slug: 'autonomous-prompt-cost-calculator',
    title: 'Autonomous Prompt Cost Calculator',
    shortDescription:
      'Compare AI model pricing across 9 providers. Calculate per-prompt, daily, monthly, and yearly costs. Includes conversation history overhead and smart cost-saving recommendations.',
    category: 'Cost Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-prompt-cost-calculator',
    badge: 'New',
  },
  {
    id: 'autonomous-tech-debt-tracker',
    slug: 'autonomous-tech-debt-tracker',
    title: 'Autonomous Tech Debt Tracker',
    shortDescription:
      'Detect deprecated APIs, complexity, duplicates, and missing docs. Calculate debt ROI and interest rate.',
    category: 'Code Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-tech-debt-tracker',
    badge: 'New',
  },
  {
    id: 'autonomous-api-doc-generator',
    slug: 'autonomous-api-doc-generator',
    title: 'Autonomous API Endpoint Doc Generator',
    shortDescription:
      'Paste Express/Next.js/NestJS route code. Auto-generates OpenAPI docs, parameter tables, and cURL examples.',
    category: 'Developer Tools',
    status: 'live',
    href: '/ai-lab/autonomous-api-doc-generator',
    badge: 'New',
  },
  {
    id: 'autonomous-ui-a11y-scorecard',
    slug: 'autonomous-ui-a11y-scorecard',
    title: 'Autonomous UI Accessibility Scorecard',
    shortDescription:
      'Audit HTML/JSX against WCAG 2.2 rules. Get pass/fail grades, severity-ranked violations, and fix instructions.',
    category: 'Quality Assurance',
    status: 'live',
    href: '/ai-lab/autonomous-ui-a11y-scorecard',
    badge: 'New',
  },
  {
    id: 'autonomous-user-persona-builder',
    slug: 'autonomous-user-persona-builder',
    title: 'Autonomous User Persona Builder',
    shortDescription:
      'Generate 3-4 detailed user personas from product description with goals, pain points, buying triggers, and frustration scores.',
    category: 'Product Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-user-persona-builder',
    badge: 'New',
  },
  {
    id: 'autonomous-ab-test-calculator',
    slug: 'autonomous-ab-test-calculator',
    title: 'Autonomous A/B Test Calculator',
    shortDescription:
      'Compute lift, p-values, statistical significance, minimum sample size, and recommended test duration for A/B experiments.',
    category: 'Experiment Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-ab-test-calculator',
    badge: 'New',
  },
  {
    id: 'autonomous-rate-limit-capacity-planner',
    slug: 'autonomous-rate-limit-capacity-planner',
    title: 'Autonomous Rate Limit & Capacity Planner',
    shortDescription:
      'Model API endpoints with rate limits and traffic multipliers. Get capacity ceiling, DB pool sizing, and scaling recommendations.',
    category: 'Infrastructure Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-rate-limit-capacity-planner',
    badge: 'New',
  },
  {
    id: 'autonomous-pricing-strategy-optimizer',
    slug: 'autonomous-pricing-optimizer',
    title: 'Autonomous Pricing Strategy Optimizer',
    shortDescription:
      'Optimize SaaS pricing tiers with LTV:CAC analysis, price elasticity modeling, competitor benchmarking, and scenario planning.',
    category: 'Revenue Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-pricing-optimizer',
    badge: 'New',
  },
  {
    id: 'autonomous-email-sequence-designer',
    slug: 'autonomous-email-sequence-designer',
    title: 'Autonomous Email Sequence Designer',
    shortDescription:
      'Generate complete drip campaigns with A/B subject lines, body copy, optimal timing, engagement metrics, and JSON export.',
    category: 'Marketing Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-email-sequence-designer',
    badge: 'New',
  },
  {
    id: 'autonomous-feature-prioritizer',
    slug: 'autonomous-feature-prioritizer',
    title: 'Autonomous Feature Request Prioritizer',
    shortDescription:
      'Score and rank feature requests using RICE or WSJF frameworks. Balance reach, impact, confidence, and effort.',
    category: 'Product Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-feature-prioritizer',
    badge: 'New',
  },
  {
    id: 'autonomous-db-schema-designer',
    slug: 'autonomous-db-schema-designer',
    title: 'Autonomous Database Schema Designer',
    shortDescription:
      'Define tables, columns, relationships. Auto-generate SQL (Postgres/MySQL/SQLite), ERD visualization, data dictionary, and JSON export.',
    category: 'Infrastructure Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-db-schema-designer',
    badge: 'New',
  },
  {
    id: 'autonomous-churn-predictor',
    slug: 'autonomous-churn-predictor',
    title: 'Autonomous Churn Predictor',
    shortDescription:
      'Predict user churn from key metrics: monthly churn rate, NPS, support tickets, tenure. Get revenue-at-risk and 6-month projections.',
    category: 'Retention Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-churn-predictor',
    badge: 'New',
  },
  {
    id: 'autonomous-content-calendar',
    slug: 'autonomous-content-calendar',
    title: 'Autonomous Content Calendar Generator',
    shortDescription:
      'Generate 30-day editorial calendars with SEO keywords, publishing times, content briefs, and CSV export for Notion/Airtable.',
    category: 'Content Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-content-calendar',
    badge: 'New',
  },
  {
    id: 'autonomous-support-ticket-analyzer',
    slug: 'autonomous-support-ticket-analyzer',
    title: 'Autonomous Support Ticket Analyzer',
    shortDescription:
      'Paste support tickets to auto-categorize, detect sentiment/urgency, and get actionable recommendations for each ticket.',
    category: 'Customer Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-support-ticket-analyzer',
    badge: 'New',
  },
  {
    id: 'autonomous-slo-dashboard',
    slug: 'autonomous-slo-dashboard',
    title: 'Autonomous SLO/SLI Dashboard Builder',
    shortDescription:
      'Define service SLOs, track error budgets, calculate multi-window burn rates, and get alerting recommendations.',
    category: 'Reliability Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-slo-dashboard',
    badge: 'New',
  },
  {
    id: 'autonomous-architecture-reviewer',
    slug: 'autonomous-architecture-reviewer',
    title: 'Autonomous Architecture Reviewer',
    shortDescription:
      'Paste system architecture descriptions. Get trade-off analysis, scalability assessment, and improvement recommendations.',
    category: 'Infrastructure Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-architecture-reviewer',
    badge: 'New',
  },
  {
    id: 'autonomous-gdpr-compliance-checker',
    slug: 'autonomous-gdpr-compliance-checker',
    title: 'Autonomous GDPR Compliance Checker',
    shortDescription:
      'Audit your app for GDPR readiness. Data mapping, consent management, privacy policy checks, and breach response plan.',
    category: 'Governance & Risk',
    status: 'live',
    href: '/ai-lab/autonomous-gdpr-compliance-checker',
    badge: 'New',
  },
  {
    id: 'autonomous-contract-analyzer',
    slug: 'autonomous-contract-analyzer',
    title: 'Autonomous Contract & SLA Analyzer',
    shortDescription:
      'Paste contracts/SLAs to extract obligations, penalties, renewal dates, liability caps, and risk-scored recommendations.',
    category: 'Legal Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-contract-analyzer',
    badge: 'New',
  },
  {
    id: 'autonomous-roi-opportunity-radar',
    slug: 'autonomous-roi-opportunity-radar',
    title: 'Autonomous ROI Opportunity Radar',
    shortDescription:
      'Identify top automation opportunities by team context. Calculate time savings, cost reduction, and payback period.',
    category: 'Business Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-roi-opportunity-radar',
    badge: 'New',
  },
  {
    id: 'autonomous-knowledge-base-auditor',
    slug: 'autonomous-knowledge-base-auditor',
    title: 'Autonomous Knowledge Base Auditor',
    shortDescription:
      'Audit documentation for gaps, outdated articles, broken links, and readability scores across wikis and docs.',
    category: 'Knowledge Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-knowledge-base-auditor',
    badge: 'New',
  },
  {
    id: 'autonomous-incident-timeline-builder',
    slug: 'autonomous-incident-timeline-builder',
    title: 'Autonomous Incident Timeline Builder',
    shortDescription:
      'Paste incident logs to auto-generate visual timelines, calculate MTTR, and produce postmortem reports.',
    category: 'Reliability Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-incident-timeline-builder',
    badge: 'New',
  },
  {
    id: 'autonomous-api-test-generator',
    slug: 'autonomous-api-test-generator',
    title: 'Autonomous API Test Script Generator',
    shortDescription:
      'Paste API specs to generate test suites with edge cases, mock data, and cURL commands for each endpoint.',
    category: 'Developer Tools',
    status: 'live',
    href: '/ai-lab/autonomous-api-test-generator',
    badge: 'New',
  },
  {
    id: 'autonomous-competitor-analysis-engine',
    slug: 'autonomous-competitor-analysis-engine',
    title: 'Autonomous Competitor Analysis Engine',
    shortDescription:
      'Auto-scan competitor landscape by niche. Get strength/weakness mapping, market share estimates, pricing analysis, and gap opportunities.',
    category: 'Market Intelligence',
    status: 'live',
    href: '/ai-lab/autonomous-competitor-analysis-engine',
    badge: 'New',
  },
];