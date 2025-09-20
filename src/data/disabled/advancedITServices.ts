import React from "react";

export interface AdvancedITService {
  
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: "monthly" | "yearly" | "one-time" | "per-user" | "per-project" | "usage-based";
features: string[];
benefits: string[];
useCases: string[];
targetAudience: string[];
tags: string[];
estimatedDelivery: string;
supportLevel: "basic" | "standard" | "premium" | "enterprise";
marketPrice: string;
contactInfo: {
phone: string;
email: string;
website: string;
}
}
};
onsiteSupport: boolean;
globalCoverage: boolean;
}
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
};
{id: "cybersecurity-managed-services";
title: "Managed Cybersecurity Services";
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
};
{id: "devops-automation-platform";
title: "DevOps Automation & CI/CD Platform";
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
};
{id: "data-center-optimization";
title: "Data Center Optimization & Modernization";
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
};
{id: "network-security-architecture";
title: "Network Security Architecture & Design";
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
};
{id: "disaster-recovery-solutions";
title: "Disaster Recovery & Business Continuity";
email: "kleber@ziontechgroup.com";
onsiteSupport: true;
globalCoverage: true;
}