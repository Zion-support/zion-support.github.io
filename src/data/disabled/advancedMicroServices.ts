import React from "react";

export interface AdvancedMicroService {
  
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