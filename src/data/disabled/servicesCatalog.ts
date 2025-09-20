import React from "react";

export type ServiceItem = {
id: string;
title: string;
description: string;
category: "Micro SaaS" | "IT Services" | "AI Solutions" | "Cybersecurity" | "Data & Analytics" | "Cloud & DevOps";
price: string;
// average market starting price;
billing: "month" | "project" | "hour";
features: string[];
ctaLabel: string;
href: string;
// internal path or external URL;
external?: boolean;
};

export type ServiceCategory = {
name: string;
slug: string;
items: ServiceItem[];
};
href: "https://ziontechgroup.com";
external: true;
};
href: "https://ziontechgroup.com";
external: true;
};
href: "https://ziontechgroup.com";
external: true;
}
href: "https://ziontechgroup.com";
external: true;
};
href: "https://ziontechgroup.com";
external: true;
};
href: "https://ziontechgroup.com";
external: true;
}
ctaLabel: "Talk to Sales";
href: "/contact"};
{id: "migrations-cloud";
ctaLabel: "Get Estimate";
href: "/contact"};
{id: "vcio";
title: "vCIO Advisory";
ctaLabel: "Book Session";
ctaLabel: "Request Scope";
href: "/contact"};
{id: "soc2-readiness";
title: "SOC 2 Readiness";
ctaLabel: "Start Readiness";
href: "/contact"};
{id: "mxdr";
title: "Managed XDR";
ctaLabel: "Secure Now";
ctaLabel: "Book Workshop";
href: "/contact"};
{id: "mlops";
title: "MLOps Enablement";
ctaLabel: "Plan Rollout";
ctaLabel: "Design IDP";
href: "/contact"};
{id: "finops";
title: "FinOps Program";
ctaLabel: "Cut Cloud Spend";