import React from "react";

export interface ITInfrastructureService {
  
id: number;
name: string;
category: string;
subcategory: string;
description: string;
pricing: string;
price: number;
pricingModel: string;
features: string[];
benefits: string[];
targetAudience: string[];
tags: string[];
contactInfo: {
phone: string;
