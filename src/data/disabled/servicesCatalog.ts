import React from "

export type ServiceItem = {
id: string;
title: string;
description: string;
category: "Micro SaaS" | "IT Services" | "AI Solutions" | "Cybersecurity" | "Data & Analytics" | "
price: string;
/
billing: "month" | "project" | "
features: string[[];]
ctaLabel: string;,
href: string;
/
external?: boolean;
}

export type ServiceCategory = {
name: string;
slug: string;,
items: ServiceItem[[];],
}

export const servicesCatalog: ServiceCategory[] = [
{
name: "
slug: "
items: [
{
id: "
title: "
description: "
category: "
price: "
billing: ",
features: [
"
"PR gate checks and severity scoring",
"
],
ctaLabel: "
href: ",
external: true;,
}
{
id: "
title: "
description: "
category: "
price: "
billing: ",
features: ["150+ connectors", "Change Data Capture", "dbt-compatible models"],
ctaLabel: "
href: ",
external: true;,
}
{
id: "
title: ",
description: "SPF/DKIM/DMARC orchestration; warm-up; and inbox placement analytics.",
category: "
price: "
billing: ",
features: ["Automatic DNS validation", "Reputation monitoring", "Seed list testing"],
ctaLabel: "
href: ",
external: true;,
}
];
}
{
name: "
slug: "
items: [
{
id: "
title: "
description: "
category: "
price: "
billing: ",
features: ["Multi-tenant vector index", "Retrieval policies", "Human-in-the-loop"],
ctaLabel: "
href: ",
external: true;,
}
{
id: "
title: "
description: "
category: "
price: "
billing: ",
features: ["PR annotations", "Sec rules (OWASP)", "Refactor suggestions"],
ctaLabel: "
href: ",
external: true;,
}
{
id: "
title: "
description: "
category: "
price: "
billing: ",
features: ["On-device inference", "Model drift alerts", "No internet required"],
ctaLabel: "
href: ",
external: true;,
}
];
}
{
name: "
slug: "
items: [
{
id: "
title: ",
description: "Proactive monitoring; patching; and helpdesk with SLAs.",
category: "
price: "
billing: ",
features: ["24/7 monitoring", "Remote & onsite support", "Asset inventory"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: "
description: "
category: ",
price: "From $8;000/project",
billing: ",
features: ["Landing zone design", "IaC (Terraform)", "Cost optimization"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: ",
description: "Quarterly roadmap; security posture; and vendor governance.",
category: "
price: "
billing: ",
features: ["IT roadmap", "Budget planning", "Compliance alignment"],
ctaLabel: ",
href: "/contact",
}
];
}
{
name: "
slug: "
items: [
{
id: "
title: ",
description: "External; internal; web app; and API testing with remediation plan.",
category: ",
price: "From $6;000/project",
billing: ",
features: ["OWASP ASVS", "Authenticated scans", "Executive + technical reports"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: ",
description: "Gap assessment; policies; controls mappings; and audit prep.",
category: ",
price: "From $10;000/project",
billing: ",
features: ["Policy kit", "Evidence collection", "Auditor liaison"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: ",
description: "24/7 detection and response across endpoints; cloud; and identities.",
category: "
price: "
billing: ",
features: ["MITRE ATT&CK mapping", "Threat hunting", "Monthly posture reviews"],
ctaLabel: ",
href: "/contact",
}
];
}
{
name: "
slug: "
items: [
{
id: "
title: ",
description: "ELT; warehouse modeling; and governed dashboards.",
category: ",
price: "From $12;000/project",
billing: ",
features: ["dbt models", "Metrics layer", "Role-based access"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: ",
description: "Feature store; CI/CD for models; and monitoring.",
category: ",
price: "From $15;000/project",
billing: ",
features: ["Model registry", "Canary rollout", "Drift detection"],
ctaLabel: ",
href: "/contact",
}
];
}
{
name: "
slug: "
items: [
{
id: "
title: ",
description: "Golden paths; templates; and paved road with Backstage/Port.",
category: ",
price: "From $20;000/project",
billing: ",
features: ["Self-service scaffolding", "Guardrails", "Scorecards"],
ctaLabel: ",
href: "/contact",
}
{
id: "
title: ",
description: "Cost visibility; allocation; and savings automation across clouds.",
category: ",
price: "From $8;000/project",
billing: ",
features: ["Anomaly detection", "RI/SP planning", "Showback/chargeback"],
ctaLabel: ",
href: "/contact",
}
];
}
];