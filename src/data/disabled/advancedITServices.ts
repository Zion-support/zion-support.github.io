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
onsiteSupport: true;
globalCoverage: true;
};
{id: "cybersecurity-managed-services";
onsiteSupport: true;
globalCoverage: true;
};
{id: "devops-automation-platform";
onsiteSupport: true;
globalCoverage: true;
};
{id: "data-center-optimization";
onsiteSupport: true;
globalCoverage: true;
};
{id: "network-security-architecture";
onsiteSupport: true;
globalCoverage: true;
};
{id: "disaster-recovery-solutions";
