import React from "react";

export interface CuttingEdgeService {
  
id: number;
name: string;
category: string;
subcategory: string;
description: string;
pricing: string;
price: number;
pricingModel: string;
userLimit: string;
features: string[];
benefits: string[];
targetAudience: string[];
tags: string[];
contactInfo: {
phone: string;
email: string;
website: string;
address: string;
}