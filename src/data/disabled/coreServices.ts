import React from "react";

export interface CoreService {
  
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: "one-time" | "monthly" | "yearly" | "per-user" | "per-project" | "usage-based" | "freemium";
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
{id: "cloud-infrastructure-pro";
title: "Cloud Infrastructure Pro - Scalable Cloud Solutions";
email: "kleber@ziontechgroup.com";
aiScore: 88;
featured: true;
};
{id: "cybersecurity-shield";
title: "Cybersecurity Shield - Advanced Security Solutions";
email: "kleber@ziontechgroup.com";
aiScore: 92;
featured: true;
}
email: "kleber@ziontechgroup.com";