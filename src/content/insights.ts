export type InsightArticle = {
	id: string;
	title: string;
	summary: string;
	category: string;
	date: string; // ISO date string
	readMinutes: number;
};

export const latestInsights: InsightArticle[] = [
	{
		id: "serverless-warm-pools-playbook",
		title: "Serverless Warm Pools: Cut Cold Starts, Not Corners",
		summary:
			"Adaptive warmers, concurrency hints, and budgets to keep P95 low without overspend.",
		category: "Architecture",
		date: "2025-09-30",
		readMinutes: 4,
	},
	{
		id: "crm-grounded-prompts",
		title: "Grounded Prompts with CRM Context: Sales Copilots That Convert",
		summary:
			"Reference opportunities, stakeholders, and last touches to improve reply quality and close rates.",
		category: "AI Strategy",
		date: "2025-09-30",
		readMinutes: 5,
	},
	{
		id: "zero-downtime-cutover-checklist",
		title: "Zero‑Downtime Cutover Checklist",
		summary:
			"Dual‑write, read‑shadowing, backfills, and safe cutovers with rollback checkpoints.",
		category: "Platform Engineering",
		date: "2025-09-30",
		readMinutes: 4,
	},
	{
		id: "ai-governance-at-scale-2025",
		title: "AI Governance at Scale: Policies That Enable Speed",
		summary:
			"A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
		category: "AI Governance",
		date: "2025-09-30",
		readMinutes: 6,
	},
	{
		id: "edge-observability-blueprint",
		title: "Edge Observability Blueprint: Sub‑100ms Reliability",
		summary:
			"Latency budgets, client ↔ edge traces, and error budgets that keep UX snappy.",
		category: "Observability",
		date: "2025-09-30",
		readMinutes: 5,
	},
	{
		id: "genai-policy-tests-canaries",
		title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
		summary:
			"How to combine offline evals with live canaries to catch regressions before customers do.",
		category: "GenAI",
		date: "2025-09-30",
		readMinutes: 6,
	},
	{
		id: "edge-flags-validation",
		title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
		summary:
			"Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
		category: "Architecture",
		date: "2025-09-30",
		readMinutes: 5,
	},
	{
		id: "north-star-metrics-pitfalls",
		title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
		summary:
			"Replace vanity KPIs with leading indicators and consistent instrumentation.",
		category: "Product Analytics",
		date: "2025-09-30",
		readMinutes: 5,
	},
	{
		id: "ai-governance-rubric",
		title: "A Lightweight Rubric for AI Governance Decisions",
		summary:
			"When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
		category: "AI Governance",
		date: "2025-09-29",
		readMinutes: 5,
	},
];
