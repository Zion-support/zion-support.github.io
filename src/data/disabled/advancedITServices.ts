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
