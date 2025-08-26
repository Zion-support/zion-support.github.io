<<<<<<< HEAD
import Head from 'next/head'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
				<p className="mt-3 max-w-2xl text-gray-700">From strategy to production, we deliver outcomes fast.</p>

				<div className="mt-10 grid gap-6 sm:grid-cols-2">
					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">AI Autonomous Systems</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Sales/CS multi-agent copilots</li>
							<li>RAG and workflow orchestration</li>
							<li>Observability and guardrails</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cloud Platforms</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Serverless and Kubernetes</li>
							<li>Data pipelines and ML ops</li>
							<li>FinOps and SRE practices</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cybersecurity</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Zero-trust frameworks</li>
							<li>Compliance and threat modeling</li>
							<li>Incident response playbooks</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Micro SaaS</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Rapid product delivery</li>
							<li>Billing, auth, and analytics</li>
							<li>Growth experiments</li>
						</ul>
					</section>
				</div>

				<div className="mt-10">
					<a className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/contact">
						Get in touch
					</a>
				</div>
			</main>
		</>
	)
}
=======
export default function Services(){return (<main style={{padding:20,fontFamily:'sans-serif',lineHeight:1.6,maxWidth:1000,margin:'0 auto'}}>
<h1 style={{marginBottom:10}}>Services</h1>
<p style={{color:'#374151'}}>We deliver end-to-end technology solutions: micro SaaS products, IT consulting, and applied AI—tailored for startups, SMBs, and enterprises.</p>

<nav style={{margin:'16px 0'}}>
  <a href="#micro-saas" style={{marginRight:16,color:'#2563eb'}}>Micro SaaS</a>
  <a href="#it-services" style={{marginRight:16,color:'#2563eb'}}>IT Services</a>
  <a href="#ai-services" style={{marginRight:16,color:'#2563eb'}}>AI Services</a>
  <a href="/contact" style={{color:'#2563eb'}}>Contact</a>
</nav>

<section id="micro-saas" style={{marginTop:24}}>
  <h2>Micro SaaS Solutions</h2>
  <p>Ready-to-deploy niche SaaS products with rapid onboarding, transparent pricing, and optional white-labeling.</p>

  <h3>1) AI Website Auditor</h3>
  <ul>
    <li>Features: SEO crawl, Core Web Vitals, accessibility scan, content gap analysis, PDF report.</li>
    <li>Benefits: Improve rankings, fix UX issues faster, prioritize high-impact actions.</li>
    <li>Typical pricing: $49/mo Starter, $149/mo Pro, $499/mo Agency.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#ai-website-auditor" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#ai-website-auditor</a></li>
  </ul>

  <h3>2) Reviews & Reputation Engine</h3>
  <ul>
    <li>Features: Automated review requests, AI response drafts, sentiment alerts, widget embeds.</li>
    <li>Benefits: Boost local SEO, win trust, recover detractors quickly.</li>
    <li>Typical pricing: $39/mo Local, $129/mo Multi-location, $399/mo Franchise.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#reputation" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#reputation</a></li>
  </ul>

  <h3>3) Social Content Co‑Pilot</h3>
  <ul>
    <li>Features: Calendar planning, AI post ideation, asset templates, auto-publish, analytics.</li>
    <li>Benefits: 5× faster content production, consistent brand voice, measurable growth.</li>
    <li>Typical pricing: $59/mo Solo, $179/mo Team, $599/mo Agency.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#social-copilot" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#social-copilot</a></li>
  </ul>

  <h3>4) Lead Capture Microsites</h3>
  <ul>
    <li>Features: High‑converting landing pages, A/B testing, form integrations, CRM handoff.</li>
    <li>Benefits: Higher conversion rates, faster campaign launch, clean attribution.</li>
    <li>Typical pricing: $999 setup + $29/mo hosting & updates.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#microsites" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#microsites</a></li>
  </ul>

  <h3>5) Customer Portal Starter</h3>
  <ul>
    <li>Features: Auth, billing, ticketing, knowledge base, status page, theming.</li>
    <li>Benefits: Reduce support load, improve retention, professional experience.</li>
    <li>Typical pricing: $2,500 setup + $99/mo.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#customer-portal" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#customer-portal</a></li>
  </ul>

  {/* New Micro SaaS */}
  <h3>6) AI Sales Email Personalizer</h3>
  <ul>
    <li>Features: Prospect research, persona-based messaging, sequence A/B tests, CRM sync.</li>
    <li>Benefits: Higher reply rates, less manual drafting, faster pipeline generation.</li>
    <li>Typical pricing: $79/mo Starter, $199/mo Growth, $599/mo Scale.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#ai-sales-personalizer" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#ai-sales-personalizer</a></li>
  </ul>

  <h3>7) Policy & SOP Generator</h3>
  <ul>
    <li>Features: SOC 2/ISO templates, gap analysis, versioning, e‑sign, audit exports.</li>
    <li>Benefits: Faster audits, consistent compliance, fewer manual errors.</li>
    <li>Typical pricing: $99/mo Base, $249/mo Team, $799/mo Enterprise.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#sop-generator" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#sop-generator</a></li>
  </ul>

  <h3>8) AI Meeting Notes & Action Tracker</h3>
  <ul>
    <li>Features: Multi‑speaker transcription, decisions/actions extraction, JIRA/Asana push, summaries.</li>
    <li>Benefits: Better follow‑through, fewer missed tasks, searchable knowledge.</li>
    <li>Typical pricing: $29/mo User, $12/mo per extra seat; SSO on Enterprise.</li>
    <li>Learn more: <a href="https://ziontechgroup.com/services#meeting-notes" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#meeting-notes</a></li>
  </ul>
</section>

<section id="it-services" style={{marginTop:32}}>
  <h2>IT Services & Consulting</h2>
  <p>Pragmatic engineering with measurable outcomes. Flexible engagement models: fixed‑price, T&M, or retainer.</p>

  <h3>Cloud & DevOps</h3>
  <ul>
    <li>Capabilities: AWS/GCP/Azure architecture, IaC (Terraform), CI/CD, observability, cost optimization.</li>
    <li>Engagements: Audits from $2,000; implementations from $6,000; retainers from $2,500/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#devops" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#devops</a></li>
  </ul>

  <h3>Full‑Stack Product Development</h3>
  <ul>
    <li>Capabilities: Next.js, Node.js, TypeScript, Postgres/Supabase, REST/GraphQL, Stripe.</li>
    <li>Engagements: MVPs from $12,000; feature sprints from $4,000; CTO advisory from $1,500/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#product" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#product</a></li>
  </ul>

  <h3>Site Reliability Engineering</h3>
  <ul>
    <li>Capabilities: SLIs/SLOs, incident response, runbooks, performance tuning, capacity planning.</li>
    <li>Engagements: Readiness assessment from $3,000; SRE enablement from $7,500.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#sre" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#sre</a></li>
  </ul>

  <h3>Data Engineering</h3>
  <ul>
    <li>Capabilities: ETL/ELT, dbt, warehousing, BI dashboards, quality and lineage.</li>
    <li>Engagements: Quickstart from $5,000; monthly ops from $2,000/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#data" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#data</a></li>
  </ul>

  {/* New IT Services */}
  <h3>Cybersecurity & Fractional CISO</h3>
  <ul>
    <li>Capabilities: Risk assessment, pen‑testing coordination, policies, SOC 2/ISO 27001 program setup.</li>
    <li>Engagements: Assessments from $5,000; vCISO from $4,000/mo; pentest mgmt from $6,500.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#security" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#security</a></li>
  </ul>

  <h3>CRM & RevOps Implementation</h3>
  <ul>
    <li>Capabilities: HubSpot/Salesforce setup, data model, lifecycle stages, playbooks, reporting.</li>
    <li>Engagements: Implementations from $7,500; audits from $2,500; ongoing ops from $2,000/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#revops" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#revops</a></li>
  </ul>

  <h3>eCommerce & Headless</h3>
  <ul>
    <li>Capabilities: Shopify/Medusa/Commerce.js, headless storefronts, payments, subscriptions, analytics.</li>
    <li>Engagements: Launch packs from $9,000; migrations from $6,000; growth retainers from $2,500/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#ecommerce" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#ecommerce</a></li>
  </ul>
</section>

<section id="ai-services" style={{marginTop:32}}>
  <h2>Applied AI Services</h2>
  <p>From strategy to production: we build practical, compliant AI systems that drive ROI.</p>

  <h3>AI Strategy & Readiness</h3>
  <ul>
    <li>Outcomes: Use‑case discovery, data audit, model selection, cost & risk analysis, roadmap.</li>
    <li>Typical pricing: Workshops from $2,500; readiness program from $8,000.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#ai-strategy" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#ai-strategy</a></li>
  </ul>

  <h3>Custom AI Assistants & Agents</h3>
  <ul>
    <li>Use cases: Support copilots, sales research, operations automation, knowledge assistants.</li>
    <li>Stack: OpenAI, Anthropic, Retrieval, function calling, guardrails, analytics.</li>
    <li>Typical pricing: Pilots from $7,500; production from $20,000.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#ai-assistants" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#ai-assistants</a></li>
  </ul>

  <h3>RAG & Knowledge Systems</h3>
  <ul>
    <li>Capabilities: Document pipelines, vector search, evaluation harnesses, privacy controls.</li>
    <li>Typical pricing: POC from $6,000; scale‑up from $15,000.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#rag" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#rag</a></li>
  </ul>

  <h3>Vision & Document AI</h3>
  <ul>
    <li>Capabilities: OCR, forms extraction, quality control, image moderation, multi‑modal UX.</li>
    <li>Typical pricing: POC from $5,000; production from $18,000.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#vision" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#vision</a></li>
  </ul>

  <h3>MLOps & Evaluation</h3>
  <ul>
    <li>Capabilities: Offline/online evals, cost/perf tracking, rollout strategies, guardrails.</li>
    <li>Typical pricing: Assessment from $4,000; platform setup from $12,000.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#mlops" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#mlops</a></li>
  </ul>

  {/* New AI Services */}
  <h3>Agentic Automation (Ops, Finance, Support)</h3>
  <ul>
    <li>Use cases: Invoice reconciliation, ticket triage, vendor intake, procurement checks, report generation.</li>
    <li>Pricing: Pilots from $8,500; production from $18,000; managed from $3,000/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#agentic-automation" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#agentic-automation</a></li>
  </ul>

  <h3>AI Governance & Risk (AIGC)</h3>
  <ul>
    <li>Deliverables: Policy pack, model registry, prompt logging, eval metrics, human‑in‑the‑loop workflows.</li>
    <li>Pricing: Starter from $6,500; enterprise advisory from $4,000/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#aigc" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#aigc</a></li>
  </ul>

  <h3>Enterprise Search & Insights</h3>
  <ul>
    <li>Capabilities: Connectors (GDrive, M365, Slack), hybrid search, role‑based access, analytics.</li>
    <li>Pricing: Deployment from $12,000; tuning from $3,500; support from $1,500/mo.</li>
    <li>Details: <a href="https://ziontechgroup.com/services#enterprise-search" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com/services#enterprise-search</a></li>
  </ul>
</section>

<section style={{marginTop:32, padding:'16px 20px', background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:8}}>
  <h2>How to Engage</h2>
  <ol>
    <li>Schedule a discovery call to define outcomes.</li>
    <li>Receive a proposal with timeline, milestones, and pricing.</li>
    <li>Kick off with a short inception workshop to de‑risk delivery.</li>
  </ol>
  <p>
    Ready to start? <a href="/contact" style={{color:'#2563eb'}}>Contact us</a> or call <a href="tel:+13024640950" style={{color:'#2563eb'}}>+1 302 464 0950</a>.
  </p>
</section>
</main>);}
>>>>>>> b2e805513c8ec2ec4ec0f701770203a474e1624d
