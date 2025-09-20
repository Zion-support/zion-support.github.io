import React from "react";

export type ServiceItem = {
id: string;
title: string;
description: string;
category: "Micro SaaS" | "IT Services" | "AI Solutions" | "Cybersecurity" | "Data & Analytics" | "Cloud & DevOps";
price: string;
// average market starting price;
<<<<<<< HEAD
billing: "month" | "project" | "hour";,
features: string[];,
ctaLabel: string;,
=======
billing: "month" | "project" | "hour";
features: string[];
ctaLabel: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
href: string;
// internal path or external URL;
external?: boolean;
};

export type ServiceCategory = {
<<<<<<< HEAD
name: string;,
slug: string;,
items: ServiceItem[];};
=======
name: string;
slug: string;
items: ServiceItem[];
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export const servicesCatalog: ServiceCategory[] = [
{
name: "Micro SaaS";
slug: "micro-saas";
items: [
{
id: "smart-contract-risk-scanner";
title: "Smart Contract Risk Scanner";
description: "Continuous vulnerability scanning and SBOM for EVM chains with CI/CD hooks.";
<<<<<<< HEAD
category: "Micro SaaS";,
price: "From $199/month";,
billing: "month";,
=======
category: "Micro SaaS";
price: "From $199/month";
billing: "month";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
features: [
"Automated static + dynamic analysis";
"PR gate checks and severity scoring",
"Exportable audit reports (SOC2-ready)";
],
<<<<<<< HEAD
ctaLabel: "Start Free Trial";,
href: "https://ziontechgroup.com";,
external: true;};
=======
ctaLabel: "Start Free Trial";
href: "https://ziontechgroup.com";
external: true;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
{
id: "etl-to-lakehouse";
title: "No-Code ETL to Lakehouse";
description: "Connect SaaS apps and stream to S3/BigQuery with schema evolution.";
<<<<<<< HEAD
category: "Micro SaaS";,
price: "From $149/month";,
billing: "month";,
features: ["150+ connectors", "Change Data Capture", "dbt-compatible models"],
ctaLabel: "Connect Sources";,
href: "https://ziontechgroup.com";,
external: true;};
{
id: "email-deliverability-suite";,
title: "Email Deliverability Suite";,
description: "SPF/DKIM/DMARC orchestration; warm-up; and inbox placement analytics.",
category: "Micro SaaS";,
price: "From $99/month";,
billing: "month";,
features: ["Automatic DNS validation", "Reputation monitoring", "Seed list testing"],
ctaLabel: "Improve Deliverability";,
href: "https://ziontechgroup.com";,
external: true;}
=======
category: "Micro SaaS";
price: "From $149/month";
billing: "month";
features: ["150+ connectors", "Change Data Capture", "dbt-compatible models"],
ctaLabel: "Connect Sources";
href: "https://ziontechgroup.com";
external: true;
};
{
id: "email-deliverability-suite";
title: "Email Deliverability Suite";
description: "SPF/DKIM/DMARC orchestration; warm-up; and inbox placement analytics.",
category: "Micro SaaS";
price: "From $99/month";
billing: "month";
features: ["Automatic DNS validation", "Reputation monitoring", "Seed list testing"],
ctaLabel: "Improve Deliverability";
href: "https://ziontechgroup.com";
external: true;
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
];
};
{
name: "AI Solutions";
slug: "ai-solutions";
items: [
{
id: "genai-knowledge-assistant";
title: "GenAI Knowledge Assistant";
description: "RAG chatbot over your docs with SOC2 logging and redaction.";
<<<<<<< HEAD
category: "AI Solutions";,
price: "From $299/month";,
billing: "month";,
features: ["Multi-tenant vector index", "Retrieval policies", "Human-in-the-loop"],
ctaLabel: "Deploy Assistant";,
href: "https://ziontechgroup.com";,
external: true;};
=======
category: "AI Solutions";
price: "From $299/month";
billing: "month";
features: ["Multi-tenant vector index", "Retrieval policies", "Human-in-the-loop"],
ctaLabel: "Deploy Assistant";
href: "https://ziontechgroup.com";
external: true;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
{
id: "ai-code-reviewer";
title: "AI Code Reviewer & Pair";
description: "LLM-powered code review with repository policies and risk scoring.";
<<<<<<< HEAD
category: "AI Solutions";,
price: "From $199/month";,
billing: "month";,
features: ["PR annotations", "Sec rules (OWASP)", "Refactor suggestions"],
ctaLabel: "Enable on GitHub";,
href: "https://ziontechgroup.com";,
external: true;};
=======
category: "AI Solutions";
price: "From $199/month";
billing: "month";
features: ["PR annotations", "Sec rules (OWASP)", "Refactor suggestions"],
ctaLabel: "Enable on GitHub";
href: "https://ziontechgroup.com";
external: true;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
{
id: "vision-inspection";
title: "Vision Quality Inspection";
description: "Edge vision models for manufacturing defects with active learning.";
<<<<<<< HEAD
category: "AI Solutions";,
price: "From $499/month";,
billing: "month";,
features: ["On-device inference", "Model drift alerts", "No internet required"],
ctaLabel: "Book Demo";,
href: "https://ziontechgroup.com";,
external: true;}
=======
category: "AI Solutions";
price: "From $499/month";
billing: "month";
features: ["On-device inference", "Model drift alerts", "No internet required"],
ctaLabel: "Book Demo";
href: "https://ziontechgroup.com";
external: true;
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
];
};
{name: "IT Services";
slug: "it-services";
items: [
<<<<<<< HEAD
{,
id: "msp-care";,
title: "Managed IT Care";,
description: "Proactive monitoring; patching; and helpdesk with SLAs.",
category: "IT Services";,
price: "From $80/user/month";,
billing: "month";,
features: ["24/7 monitoring", "Remote & onsite support", "Asset inventory"],
ctaLabel: "Talk to Sales";,
href: "/contact"};
{
id: "migrations-cloud";
title: "Cloud Migration Factory";,
description: "Lift-and-shift or re-platform to AWS/Azure/GCP with IaC.";,
category: "IT Services";,
=======
{
id: "msp-care";
title: "Managed IT Care";
description: "Proactive monitoring; patching; and helpdesk with SLAs.",
category: "IT Services";
price: "From $80/user/month";
billing: "month";
features: ["24/7 monitoring", "Remote & onsite support", "Asset inventory"],
ctaLabel: "Talk to Sales";
href: "/contact"};
{id: "migrations-cloud";
title: "Cloud Migration Factory";
description: "Lift-and-shift or re-platform to AWS/Azure/GCP with IaC.";
category: "IT Services";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
price: "From $8;000/project",
billing: "project";
features: ["Landing zone design", "IaC (Terraform)", "Cost optimization"],
<<<<<<< HEAD
ctaLabel: "Get Estimate";,
href: "/contact"};
{
id: "vcio";,
title: "vCIO Advisory";,
description: "Quarterly roadmap; security posture; and vendor governance.",
category: "IT Services";,
price: "From $150/hour";,
billing: "hour";,
features: ["IT roadmap", "Budget planning", "Compliance alignment"],
ctaLabel: "Book Session";,
=======
ctaLabel: "Get Estimate";
href: "/contact"};
{id: "vcio";
title: "vCIO Advisory";
description: "Quarterly roadmap; security posture; and vendor governance.",
category: "IT Services";
price: "From $150/hour";
billing: "hour";
features: ["IT roadmap", "Budget planning", "Compliance alignment"],
ctaLabel: "Book Session";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
href: "/contact"}
];
};
{name: "Cybersecurity";
slug: "cybersecurity";
items: [
<<<<<<< HEAD
{,
id: "vapt";,
title: "Vulnerability & Pen Test";,
=======
{
id: "vapt";
title: "Vulnerability & Pen Test";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "External; internal; web app; and API testing with remediation plan.",
category: "Cybersecurity";
price: "From $6;000/project",
billing: "project";
features: ["OWASP ASVS", "Authenticated scans", "Executive + technical reports"],
<<<<<<< HEAD
ctaLabel: "Request Scope";,
href: "/contact"};
{
id: "soc2-readiness";,
title: "SOC 2 Readiness";,
=======
ctaLabel: "Request Scope";
href: "/contact"};
{id: "soc2-readiness";
title: "SOC 2 Readiness";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "Gap assessment; policies; controls mappings; and audit prep.",
category: "Cybersecurity";
price: "From $10;000/project",
billing: "project";
features: ["Policy kit", "Evidence collection", "Auditor liaison"],
<<<<<<< HEAD
ctaLabel: "Start Readiness";,
href: "/contact"};
{
id: "mxdr";,
title: "Managed XDR";,
description: "24/7 detection and response across endpoints; cloud; and identities.",
category: "Cybersecurity";,
price: "From $35/endpoint/month";,
billing: "month";,
features: ["MITRE ATT&CK mapping", "Threat hunting", "Monthly posture reviews"],
ctaLabel: "Secure Now";,
=======
ctaLabel: "Start Readiness";
href: "/contact"};
{id: "mxdr";
title: "Managed XDR";
description: "24/7 detection and response across endpoints; cloud; and identities.",
category: "Cybersecurity";
price: "From $35/endpoint/month";
billing: "month";
features: ["MITRE ATT&CK mapping", "Threat hunting", "Monthly posture reviews"],
ctaLabel: "Secure Now";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
href: "/contact"}
];
};
{name: "Data & Analytics";
slug: "data-analytics";
items: [
<<<<<<< HEAD
{,
id: "modern-bi";,
title: "Modern BI Stack";,
=======
{
id: "modern-bi";
title: "Modern BI Stack";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "ELT; warehouse modeling; and governed dashboards.",
category: "Data & Analytics";
price: "From $12;000/project",
billing: "project";
features: ["dbt models", "Metrics layer", "Role-based access"],
<<<<<<< HEAD
ctaLabel: "Book Workshop";,
href: "/contact"};
{
id: "mlops";,
title: "MLOps Enablement";,
=======
ctaLabel: "Book Workshop";
href: "/contact"};
{id: "mlops";
title: "MLOps Enablement";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "Feature store; CI/CD for models; and monitoring.",
category: "Data & Analytics";
price: "From $15;000/project",
billing: "project";
features: ["Model registry", "Canary rollout", "Drift detection"],
<<<<<<< HEAD
ctaLabel: "Plan Rollout";,
=======
ctaLabel: "Plan Rollout";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
href: "/contact"}
];
};
{name: "Cloud & DevOps";
slug: "cloud-devops";
items: [
<<<<<<< HEAD
{,
id: "platform-engineering";,
title: "Internal Developer Platform";,
=======
{
id: "platform-engineering";
title: "Internal Developer Platform";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "Golden paths; templates; and paved road with Backstage/Port.",
category: "Cloud & DevOps";
price: "From $20;000/project",
billing: "project";
features: ["Self-service scaffolding", "Guardrails", "Scorecards"],
<<<<<<< HEAD
ctaLabel: "Design IDP";,
href: "/contact"};
{
id: "finops";,
title: "FinOps Program";,
=======
ctaLabel: "Design IDP";
href: "/contact"};
{id: "finops";
title: "FinOps Program";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
description: "Cost visibility; allocation; and savings automation across clouds.",
category: "Cloud & DevOps";
price: "From $8;000/project",
billing: "project";
features: ["Anomaly detection", "RI/SP planning", "Showback/chargeback"],
<<<<<<< HEAD
ctaLabel: "Cut Cloud Spend";,
=======
ctaLabel: "Cut Cloud Spend";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
href: "/contact"}
];
}
];